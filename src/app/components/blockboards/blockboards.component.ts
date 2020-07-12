import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// import { BwrComponent } from './bwr/bwr.component';
import { BwpComponent } from './bwp/bwp.component';
import { BwrrComponent } from './bwrr/bwrr.component';

@Component({
  selector: 'app-blockboards',
  templateUrl: './blockboards.component.html',
  styleUrls: ['./blockboards.component.css']
})
export class BlockboardsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef= this.dialog.open(BwpComponent,{height:'600px',width:'600px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
}
openDialog1(){
const dialogRef= this.dialog.open(BwrrComponent,{height:'600px',width:'600px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

}


}
