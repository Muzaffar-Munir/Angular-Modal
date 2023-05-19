import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideConfig: any = {
    dots: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
  ]
  }
  // Array<{id: number, name: string, category: string, description: string, imageUrls: any}>
products: any= [];
enviroment: any = environment;
modalRef?: BsModalRef;

  constructor(private baseService: BaseService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.baseService.getData('/Product?pageSize=4&pageNumber=1').subscribe({
      next: (response: any) => {
        console.log(response);
        this.products = response.data;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

 
  openModal(template: any) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered' 
    });
  }
}
