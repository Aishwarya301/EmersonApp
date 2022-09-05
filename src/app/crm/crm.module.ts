import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './profile/profile.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { RemoveComponent } from './remove/remove.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersComponent,
    ProfileComponent,
    InsertComponent,
    UpdateComponent,
    RemoveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CustomersComponent,
    ProfileComponent,
    UpdateComponent,
    RemoveComponent,
    InsertComponent
  ]
})
export class CRMModule { }
