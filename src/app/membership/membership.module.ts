import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CounterComponent } from '../shared-module/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';







@NgModule({
  declarations: [

  LoginComponent,
  RegisterComponent

  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class MembershipModule { }
