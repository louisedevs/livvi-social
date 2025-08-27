import { Routes } from '@angular/router';

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
    path: 'escolha-conta',
    loadComponent: () => import('./escolha-conta/escolha-conta.component').then(m => m.EscolhaContaComponent)
  }
];