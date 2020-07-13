import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


const routerOptions: ExtraOptions = {

  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [

  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',redirectTo:'/home#product'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
