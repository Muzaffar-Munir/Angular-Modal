import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

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
  constructor(public loaderService: LoaderService, private cdr: ChangeDetectorRef, 
              private modalService: BsModalService, private router: Router) {
    setTheme('bs5');
  }

  ngOnInit(): void {
    console.log(this.router.url);

   

  }

  ngAfterViewChecked() {
    console.log(this.router.url);

    if(!this.router.url.includes('home')){
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
}
