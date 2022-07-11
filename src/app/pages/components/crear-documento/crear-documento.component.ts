import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-documento',
  templateUrl: './crear-documento.component.html',
  styleUrls: ['./crear-documento.component.css']
})
export class CrearDocumentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  LstDocEntrante(){
	this.router.navigate(['/listado-entrantes']);
  }
}
