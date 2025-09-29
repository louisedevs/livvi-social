import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  }
  ,
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  }
,{
  path: 'senha',
  loadComponent: () => import('./senha/senha.component').then(m => m.SenhaComponent)
}
];

