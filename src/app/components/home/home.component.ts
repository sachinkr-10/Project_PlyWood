import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  images=['/assets/images/first.jpg','/assets/images/second.jpg','/assets/images/third.jpg','/assets/images/fourth.jpg']
  constructor() {}

  ngOnInit(): void {
  }

}
