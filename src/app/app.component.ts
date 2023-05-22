import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BaseService } from './services/base.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'assessment-angular';
  state: any = '';
  modalRef?: BsModalRef;
  isHome: boolean = true;
  subscriptionEmail: string = '';
  user: any;
  constructor(public loaderService: LoaderService, private cdr: ChangeDetectorRef,
    private modalService: BsModalService, private router: Router,
    private baseService: BaseService, private toastr: ToastrService) {
    setTheme('bs5');
  }

  ngOnInit(): void {
    this.initizeUser();
  }

  ngAfterViewChecked() {

    if (!this.router.url.includes('home')) {
      this.isHome = false;
    } else {
      this.isHome = true
    }
    this.cdr.detectChanges();

  }


  openModal(template: any) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  }


  sendNewslester() {
    this.baseService.postData('/Contact', {
      name: 'from subscription',
      email: this.subscriptionEmail,
      message: 'from subscription'
    }).subscribe({
      next: (response) => {
        this.toastr.success('Your message successfully sent')
        this.subscriptionEmail = '';

      }
    })
  }


  loginUser(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  }

  login() {
    this.baseService.postData('/User/loginUser', this.user).subscribe({
      next: (response) => {

        this.initizeUser();

        localStorage.setItem('user', JSON.stringify(response));
        this.modalRef?.hide();
        this.modalRef = undefined;
      },
    })
  }

  initizeUser() {
    this.user = {
      email: '',
      password: ''
    }
  }
}
