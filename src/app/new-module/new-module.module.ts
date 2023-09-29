import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeComponent } from './page-three/page-three.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pagethree', component: PageThreeComponent },
];

@NgModule({
  declarations: [
    PageThreeComponent
  ],
  imports: 
  [
    RouterModule.forChild(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class NewModuleModule { }
