import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bwrr',
  templateUrl: './bwrr.component.html',
  styleUrls: ['./bwrr.component.css']
})
export class BwrrComponent implements OnInit {
  public bwrDetails:{
    details:String,highlight:String[],size:String,thickness:String,applications:String
  }={details:`Yugal Marine grade plywood is a product designed for high-value creative needs and premium class wood working.
  This 710 certification plywood is manufactured from hardwood veneers with ECO-FRIENDLY wood on top and bottom.
  These are made with complete tenderised 'CORE and PANELS'.
  Every second wood veneer is layered with specifically developed resin of 60% solid content through a 8 feet long glue spreader.
  `,highlight:[
    'Manufactured Using Selected Hardwood Timber',
				  'Boiling Water Proof Grade',
  				 ' Borer and Termite Resistant',
				  'High Resistance to all Climatic Conditions',
				   'Glue Line Protection and other Preservative Treatment'],
  size:'6x3, 6x4, 7x3, 7x4, 8x3, 8x4',thickness:'4mm, 6mm, 9mm, 12mm, 16mm, 19mm',
  applications:`Kitchen, Wardrobe, Tables, Chairs, Partitions, Benches, Roof Bracing Walls, Panelling, Structural Home Building,
  Subfloors, Shipping Crates, Decking, Porches, Outdooe Floorings, Roof Linings and Stables, Garden Furniture, Planters
`};


  constructor() { }

  ngOnInit(): void {
  }

}
