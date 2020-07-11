import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Plywood1Component } from './plywood1/plywood1.component';
import { BwrComponent } from './bwr/bwr.component';

@Component({
  selector: 'app-plywood',
  templateUrl: './plywood.component.html',
  styleUrls: ['./plywood.component.css']
})
export class PlywoodComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
           const dialogRef= this.dialog.open(Plywood1Component,{height:'600px',width:'600px'});
           dialogRef.afterClosed().subscribe(result => {
             console.log(result);
           });
  }
  openDialog1(){
    const dialogRef= this.dialog.open(BwrComponent,{height:'600px',width:'600px'});
           dialogRef.afterClosed().subscribe(result => {
             console.log(result);
           });

  }

}
