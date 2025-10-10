import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. IMPORTAMOS O KIT DE FERRAMENTAS PARA FORMULÁRIOS

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule // 2. ADICIONAMOS O KIT ÀS "FERRAMENTAS" DO COMPONENTE
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // 3. Criamos um "molde" para guardar os dados do usuário que serão digitados
  user = {
    name: '',
    email: '',
    password: ''
  };

  // 4. Esta é a função que será chamada quando o formulário for enviado
  onSubmit() {
    console.log('Formulário enviado!');
    console.log('Dados do usuário:', this.user);
    // Aqui, no futuro, a gente vai enviar esses dados para a nossa API Python!
  }
}