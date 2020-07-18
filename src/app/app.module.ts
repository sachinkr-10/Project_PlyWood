import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlywoodComponent } from './components/plywood/plywood.component';
import { MaterialModule } from './material/material.module';
import { Plywood1Component } from './components/plywood/plywood1/plywood1.component';
import { BwrComponent } from './components/plywood/bwr/bwr.component';
// import { BlockboardsComponent } from './components/blockboards/blockboards.component';
import { BwpComponent } from './components/blockboards/bwp/bwp.component';
import { BwrrComponent } from './components/blockboards/bwrr/bwrr.component';


import { HomeComponent } from './components/home/home.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommuneService } from './service/commune.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { FlushdoorComponent } from './components/flushdoor/flushdoor.component';







@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Plywood1Component,
    BwrComponent,
    BwpComponent,BwrComponent, BwrrComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    FlushdoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,

  ],
  providers: [CommuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
