import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSixRoutingModule } from './page-six-routing.module';
import { PageSixComponent } from './page-six/page-six.component';


@NgModule({
  declarations: [
    PageSixComponent
  ],
  imports: [
    CommonModule,
    PageSixRoutingModule
  ]
})
export class PageSixModule { }
