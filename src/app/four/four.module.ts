import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFourComponent } from './page-four/page-four.component';
import { FourModuloRoutingModule } from './four.routing';



@NgModule({
  declarations: [
    PageFourComponent
  ],
  imports: [
    CommonModule,
    FourModuloRoutingModule,
  ]
})
export class FourModule { }
