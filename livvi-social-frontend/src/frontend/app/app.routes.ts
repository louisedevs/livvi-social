import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'senha',
    loadComponent: () => import('./senha/senha.component').then(m => m.SenhaComponent)
  },
  // ESTA É A ROTA CORRIGIDA:
  {
    path: 'register/user', // 1. Caminho correto do link
    loadComponent: () => import('./user.component').then(m => m.UserComponent) // 2 e 3. Arquivo e Classe corretos
  }
];