import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlywoodComponent } from './components/plywood/plywood.component';
import { BlockboardsComponent } from './components/blockboards/blockboards.component';
import { FlushdoorComponent } from './components/flushdoor/flushdoor.component';
import { AboutComponent } from './components/about/about.component';


const routerOptions: ExtraOptions = {

  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { depth: 1 } },
  { path: 'plywood', component: PlywoodComponent, data: { depth: 2 } },
  { path: 'blockboard', component: BlockboardsComponent, data: { depth: 3 } },

  { path: 'contact', component: ContactComponent, data: { depth: 4 } },
  { path: 'product', redirectTo: '/home#product' },

  { path: 'about', component: AboutComponent },
  { path: 'flushdoor', component: FlushdoorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlywoodComponent, BlockboardsComponent];
