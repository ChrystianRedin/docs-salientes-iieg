import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-docentrantes',
  templateUrl: './listado-docentrantes.component.html',
  styleUrls: ['./listado-docentrantes.component.css']
})
export class ListadoDocentrantesComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  CreaDocumento(){
	this.router.navigate(['/crear-documento']);
  }
}