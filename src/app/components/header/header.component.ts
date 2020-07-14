import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/service/commune.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(public commune:CommuneService) { }

  ngOnInit(): void {
  }

 

}
