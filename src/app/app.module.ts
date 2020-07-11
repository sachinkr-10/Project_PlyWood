import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlywoodComponent } from './components/plywood/plywood.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Plywood1Component } from './components/plywood/plywood1/plywood1.component';
import { BwrComponent } from './components/plywood/bwr/bwr.component';
import { BlockboardsComponent } from './components/blockboards/blockboards.component';
import { BwpComponent } from './components/blockboards/bwp/bwp.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Plywood1Component,
    BwrComponent,
    BwpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
