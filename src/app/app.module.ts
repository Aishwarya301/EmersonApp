import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { MembershipModule } from './membership/membership.module';

import { CatalogModule } from './catalog/catalog.module';
import { SPAModule } from './spa/spa.module';
import { CRMModule } from './crm/crm.module';
import { ProfileComponent } from './crm/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent
 

    
  ],
  imports: [
    BrowserModule,
    SPAModule,
    MembershipModule,
    CRMModule
  ],
  providers: [],

  //Root component
  bootstrap: [AppComponent]
})
export class AppModule { }

