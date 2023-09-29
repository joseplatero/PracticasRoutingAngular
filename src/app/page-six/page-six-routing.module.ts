import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSixComponent } from './page-six/page-six.component';

const routes: Routes = [
  { path: 'pageSix', component: PageSixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSixRoutingModule { }
