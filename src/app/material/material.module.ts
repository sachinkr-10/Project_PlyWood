import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



const MaterialComponents=[MatCardModule,MatDialogModule,MatButtonModule];

@NgModule({
  imports: [MaterialComponents],exports:[MaterialComponents]
})
export class MaterialModule { }
