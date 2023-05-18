import { Component, OnInit } from '@angular/core';
import { animate, animateChild, query, style, transition, trigger, state } from '@angular/animations';
import { Observable, of } from 'rxjs';
import { LoaderService } from './services/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      state('enter', style({ height: '*', width: '*' })),
      transition('* => enter', [
        style({
          height: '0px', width: '0px',
          opacity: 0
        }),
        animate('0.5s ease-in-out', style({
          height: '*', width: '*',
          opacity: 1
        }))
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit{
  title = 'assessment-angular';
  public dynamicContent: Observable<string[]> = new Observable();
  state: any ='';
  constructor(public loaderService: LoaderService){
    console.log('ioni')
  }

  ngOnInit(): void {
    this.dynamicContent = of(['foo', 'bar', 'baz']);
  this.dynamicContent.subscribe(x => this.state = 'enter');
  }
}
