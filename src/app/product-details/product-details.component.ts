import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../services/base.service';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';

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
  user: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService, private toastr: ToastrService) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.initilizeUserForm();
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.getProductDetails();
    }
  }

  private initilizeUserForm() {
    this.user = {
      name: '',
      email: '',
      message: ''
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

  sendMessage() {
    this.baseService.postData('/Contact', this.user).subscribe({
      next: (response) => {
        this.product = response;
        this.toastr.success('Your message successfully sent')
        this.initilizeUserForm()


      }, error: (err) => {


      }
    })
  }
}
