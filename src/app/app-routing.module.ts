import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/components/home/home.component';
import { ProductDetailsComponent } from './src/components/product-details/product-details.component';
import { ProductsComponent } from './src/components/products/products.component';
import { FaqComponent } from './src/components/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'faqs',
        component: FaqComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', // Add options right here
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
