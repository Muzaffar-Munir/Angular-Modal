import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // isloading: boolean = true;
  id: any;
  product: any;
  environment: any;
  modalRef?: BsModalRef;
  constructor(private route: ActivatedRoute, private baseService: BaseService,
     private toastr: ToastrService, private modalService: BsModalService) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route);
    
    if (this.id) {
      this.getProductDetails();
    }
  }

  private getProductDetails() {
    this.baseService.getData('/Product/' + this.id).subscribe({
      next: (response) => {
        this.product = response;
      }, error: (err) => {
      }
    })
  }




  openModal(template: any) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered' 
    });
  }
}
