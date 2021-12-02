import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { 
    path:"", 
    component:LoginComponent,
    pathMatch: 'full' 
  },
  { 
    path:"home", 
    canActivate: [],
    component:HomeComponent,
  }, 
  {
    path: '**', 
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
