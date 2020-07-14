import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';



const MaterialComponents=[MatCardModule,MatDialogModule,MatButtonModule, 
  MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule];

@NgModule({
  imports: [MaterialComponents],exports:[MaterialComponents]
})
export class MaterialModule { }
