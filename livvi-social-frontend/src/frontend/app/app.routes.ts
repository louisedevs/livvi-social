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
  
  {
    path: 'register/user', // 1. Caminho correto do link
loadComponent: () => import('./register-user/user.component').then(m => m.UserComponent)  
  },

  {
    path: 'register/business', 
    loadComponent: () => import('./register-business/business.component').then(m => m.BusinessComponent)
  },

  {
    path: 'profile-business',
    loadComponent: () => import('./profile-business/profile.component').then(m => m.ProfileBusinessComponent)
  },

  {
    path: 'profile-user',
    loadComponent: () => import('./profile-user/profileUser.component').then(m => m.ProfileUserComponent)
  }
]