import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  switch:boolean=false;
  constructor(private router:Router) { }


  onCheck(){
  if(this.router.url=="/home" || this.router.url=="/home#product"){
  this.switch=false;
  }else{
    this.switch=true;
  }

  }

}


