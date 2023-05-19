import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CustomhttpInterceptor } from './interceptors/customhttp.interceptor';
import { ContactComponent } from './src/components/contact/contact.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './src/components/home/home.component';
import { ProductDetailsComponent } from './src/components/product-details/product-details.component';
import { ProductsComponent } from './src/components/products/products.component';
import { FaqComponent } from './src/components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    ContactComponent,
    ProductsComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    SlickCarouselModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomhttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
