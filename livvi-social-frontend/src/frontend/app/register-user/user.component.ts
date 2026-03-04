import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  showPassword = false;

  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Dados do usuário:', this.user);
    // conectar à API futuramente
  }
}