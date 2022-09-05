import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes } from '@angular/router';



@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PieChartComponent,
    BarChartComponent
  ]
})
export class BIModule { }
