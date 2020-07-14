import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  switch:boolean=false;
  constructor() { }

  onSwitch(choice:boolean){
    this.switch=choice;
    console.log(this.switch);
  }
}


