import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
public response: any = [];
environment = environment;
pageNumber: number = 1;
pageSize: number = 4;
constructor (private baseService: BaseService){
 
}

ngOnInit(): void {
    this.getProducts()
}

  private getProducts() {
    this.baseService.getData(`/Product?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`).subscribe({
      next: (response: any) => {
        console.log(response);
        this.response = response;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  pageChange(index: number){
    this.pageNumber= index;
    this.getProducts();
  }
}
