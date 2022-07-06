import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDocumentoComponent } from './components/crear-documento/crear-documento.component';
import { ListadoDocentrantesComponent } from './listado-docentrantes/listado-docentrantes.component';

const routes: Routes = [
  {
    path:'listado-entrantes',
    component:ListadoDocentrantesComponent
  },
  {
    path:'crear-documento',
    component:CrearDocumentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
