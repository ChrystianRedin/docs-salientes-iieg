import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoDocentrantesComponent } from './listado-docentrantes/listado-docentrantes.component';
import { CrearDocumentoComponent } from './components/crear-documento/crear-documento.component';


@NgModule({
  declarations: [
    ListadoDocentrantesComponent,
    CrearDocumentoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
