import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlywoodComponent } from './components/plywood/plywood.component';
import { BlockboardsComponent } from './components/blockboards/blockboards.component';


const routes: Routes = [
  {path:'plywood',component:PlywoodComponent},{
    path:'blockboard',component:BlockboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlywoodComponent,BlockboardsComponent];
