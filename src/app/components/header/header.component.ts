import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  switch:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSwitch(choice:boolean){
    this.switch=choice;
    console.log(this.switch);
  }

}
