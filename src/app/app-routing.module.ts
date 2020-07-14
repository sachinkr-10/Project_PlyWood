import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlywoodComponent } from './components/plywood/plywood.component';
import { BlockboardsComponent } from './components/blockboards/blockboards.component';


const routerOptions: ExtraOptions = {

  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'plywood',component:PlywoodComponent},
  {path:'blockboard',component:BlockboardsComponent}, 
  {path:'home' ,component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',redirectTo:'/home#product'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlywoodComponent,BlockboardsComponent];
