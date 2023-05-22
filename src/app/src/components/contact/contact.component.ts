import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: any;

  @Output() onClose = new EventEmitter(); 
  constructor(private baseService: BaseService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.initilizeUserForm();
  }

  private initilizeUserForm() {
    this.user = {
      name: '',
      email: '',
      message: ''
    }
  }

  sendMessage(){
    this.baseService.postData('/Contact', this.user).subscribe({
      next: (response) => {
        this.toastr.success('Your message successfully sent')
        this.initilizeUserForm();
        this.hide();
      }
    })
  }
  
  hide(){
    this.onClose.emit(true)
  }
}
