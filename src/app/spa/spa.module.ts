import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BarChartComponent } from '../bi/bar-chart/bar-chart.component';
import { PieChartComponent } from '../bi/pie-chart/pie-chart.component';
import { RouterModule,Routes } from '@angular/router';
import { ListComponent } from '../catalog/list/list.component';
import { MembershipModule } from '../membership/membership.module';
import { CatalogModule } from '../catalog/catalog.module';
import { LoginComponent } from '../membership/login/login.component';
import { FramecontainerComponent } from './framecontainer/framecontainer.component';
import { RegisterComponent } from '../membership/register/register.component';
import { BIModule } from '../bi/bi.module';
import { DashboardComponent } from '../bi/dashboard/dashboard.component';
import { CustomersComponent } from '../crm/customers/customers.component';
import { CRMModule } from '../crm/crm.module';
import { ProfileComponent } from '../crm/profile/profile.component';
import { RemoveComponent } from '../crm/remove/remove.component';
import { UpdateComponent } from '../crm/update/update.component';
import { InsertComponent } from '../crm/insert/insert.component';

export const childRoutes : Routes = [
  {path : 'bar',component:BarChartComponent},
  { path : 'pie', component:PieChartComponent}
]


export const routes:Routes=[
  {path : 'home',component:HomeComponent},
  {path : 'aboutus',component:AboutUsComponent},
  {path : 'contactus',component:ContactComponent},
  {path : 'catalog',component:ListComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'dashboard',component:DashboardComponent,children:childRoutes},
  {path : 'customers',component:CustomersComponent},
  {path : 'customers/:id',component:ProfileComponent},
  {path : 'update/:id',component:UpdateComponent},
  { path : 'remove/:id',component:RemoveComponent},
  { path : 'insert',component:InsertComponent}


];
;

//components belongs to mudule
@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    FramecontainerComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MembershipModule,
    CatalogModule,
    BIModule,
    CRMModule
  ],
  exports:[
    FramecontainerComponent
  ]

  
  
})
export class SPAModule { }
