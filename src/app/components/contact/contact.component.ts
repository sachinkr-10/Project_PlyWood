import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommuneService } from 'src/app/service/commune.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 

  constructor(private commune:CommuneService) { }

  ngOnInit() {
    AOS.init();
    this.commune.onCheck();
  }

}
