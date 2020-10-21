import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/service/commune.service';

@Component({
  selector: 'app-plywood1',
  templateUrl: './plywood1.component.html',
  styleUrls: ['./plywood1.component.css']
})
export class Plywood1Component implements OnInit {

  public bwpDetails:{
    details:String,highlight:String[],size:String,thickness:String,applications:String
  }={details:`YUGAL BWP Blockboard is made with selected ECO-FRIENDLY timber. The wooden planks are treated with insecticide and funficide
  before sending it for the production. These are ISI 1659 Certified.
  `,highlight:[
    'Boiling Water Proof Grade'
		 ,'Super Smooth Even Surface'
				,'Microbial Decay Resistant'
				 , 'Withstands Alternate Wetting and Drying'
	],
  size:'6x3, 6x4, 7x3, 7x4, 8x3, 8x4',thickness:'6mm, 9mm, 12mm, 16mm, 19mm',
  applications:`Wardrobe Shutters, Kitchen Shutters, Bathroom Cabinetries, Book Shelves, Boxes, Table Tops, KeyBoard Trays,
  Almirahs, Racks, Vertical Load Bearing needs in a furniture, Back Support for Creative structural work that need wide arch angles and curves etc.
`};

  constructor(private commune:CommuneService) {
    this.commune.onCheck();
  }

  ngOnInit(): void {


  }

}
