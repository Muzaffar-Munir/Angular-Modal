import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap, } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class CustomhttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: LoaderService, private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();

    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      }, (error) => {
        this.spinnerService.hide();
        this.toastr.error('Error, Something went wrong!')
      }));
  }
}
