import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.Home)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.Home)
  }
];