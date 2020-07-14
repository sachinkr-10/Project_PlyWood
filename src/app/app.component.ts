import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectPlyWood';

ngOnInit(){
  AOS.init({
    offset:400,
    duration:800
  });
 }
}
