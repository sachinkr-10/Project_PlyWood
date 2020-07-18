import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/service/commune.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  images=['/assets/images/first.jpg','/assets/images/second.jpg','/assets/images/third.jpg','/assets/images/fourth.jpg']
  constructor(public commune:CommuneService,private router:Router) {}

  ngOnInit(): void {
    this.commune.onCheck();
  }

}
