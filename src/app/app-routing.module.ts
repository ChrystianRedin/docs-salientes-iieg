import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules


const routes: Routes = [
  {
    path: 'docs', 
    loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**', 
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
