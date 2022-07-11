import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoDocentrantesComponent } from './listado-docentrantes/listado-docentrantes.component';
import { CrearDocumentoComponent } from './components/crear-documento/crear-documento.component';
import { DocumentoPdfComponent } from './documento-pdf/documento-pdf.component';


@NgModule({
  declarations: [
    ListadoDocentrantesComponent,
    CrearDocumentoComponent,
    DocumentoPdfComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
