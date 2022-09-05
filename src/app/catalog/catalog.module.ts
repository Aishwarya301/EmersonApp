import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AppModule } from '../app.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
    
  ],
  exports:[
    DetailsComponent,
    ListComponent
  ]
})
export class CatalogModule { }
