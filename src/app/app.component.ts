import { Component, OnInit,AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'assessment-angular';
  state: any ='';
  constructor(public loaderService: LoaderService, private cdr: ChangeDetectorRef){
    setTheme('bs5');
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();

  }
}
