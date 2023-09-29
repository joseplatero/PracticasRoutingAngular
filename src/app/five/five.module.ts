import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveRoutingModule } from './five-routing.module';
import { PageFiveComponent } from './page-five/page-five.component';


@NgModule({
  declarations: [
    PageFiveComponent
  ],
  imports: [
    CommonModule,
    FiveRoutingModule
  ]
})
export class FiveModule { }
