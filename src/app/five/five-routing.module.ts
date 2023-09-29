import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFiveComponent } from './page-five/page-five.component';

const routes: Routes = [
  { path: 'pageFive', component: PageFiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveRoutingModule { }
