import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  images=['/assets/images/first.png','/assets/images/second.png','/assets/images/third.jpg','/assets/images/fourth.jpg']
  constructor() {}

  ngOnInit(): void {
  }

}
