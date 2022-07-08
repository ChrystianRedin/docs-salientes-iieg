import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {

  constructor(private router: Router) { }
  
  logout(){
    this.router.navigateByUrl('/auth')
  }

}
