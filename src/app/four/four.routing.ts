import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFourComponent } from './page-four/page-four.component';


const routes: Routes = [
    { path: 'pageFour', component: PageFourComponent }
  // Agrega otras rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Usa forChild si este es un módulo secundario
  exports: [RouterModule],
})
export class FourModuloRoutingModule {}
