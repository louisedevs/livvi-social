import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user', // O seletor para <app-user>
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html', // O endereço do vizinho HTML
  styleUrls: ['./user.component.css']  // O endereço do vizinho CSS
})
export class UserComponent { // O nome da classe que corresponde ao nome do arquivo

}