import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Plywood1Component } from './plywood1/plywood1.component';
import { BwrComponent } from './bwr/bwr.component';
import { CommuneService } from 'src/app/service/commune.service';

@Component({
  selector: 'app-plywood',
  templateUrl: './plywood.component.html',
  styleUrls: ['./plywood.component.css']
})
export class PlywoodComponent implements OnInit {
  public bwrDetails:{
    info:String,size:String,thickness:String,availability:String
  }={info:`Yugal Marine grade plywood is a product designed for high-value creative needs and premium class
  wood working. This 710 certified plywood is
  manufactured from hardwood veneers with ECO-FRIENDLY wood on top and bottom.`,
  size:'6x3, 6x4, 7x3, 7x4, 8x3, 8x4',thickness:'4mm, 6mm, 9mm, 12mm, 16mm, 19mm',
  availability:'In Stock'};
  public bwpDetails:{
    info:String ,size:String,thickness:String,availability:String
  }={info:"YUGAL BWP Blockboard is made with selected ECO-FRIENDLY timber.The wooden planks are treated with insecticide and funficide before sending it for the production. These are ISI 1659 Certified",size:'6x3, 6x4, 7x3, 7x4, 8x3, 8x4',thickness:'6mm, 9mm, 12mm, 16mm, 19mm',
  availability:'In Stock'};



  constructor(public dialog:MatDialog,private commune:CommuneService) { }

  ngOnInit(): void {
    this.commune.onCheck();
  }
  openDialog(){
           const dialogRef= this.dialog.open(Plywood1Component,{height:'600px',width:'600px',backdropClass: 'backdropBackground'});
           dialogRef.afterClosed().subscribe(result => {
             console.log(result);
           });
  }
  openDialog1(){
    const dialogRef= this.dialog.open(BwrComponent,{height:'600px',width:'600px',backdropClass: 'backdropBackground'});
           dialogRef.afterClosed().subscribe(result => {
             console.log(result);
           });

  }

}
