import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/service/commune.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public commune: CommuneService, private router: Router) { }

  ngOnInit(): void {
    this.commune.onCheck();
  }

}
