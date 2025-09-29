import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importamos o CommonModule
import { RouterModule } from '@angular/router'; // <-- Importamos o RouterModule

@Component({
    selector: 'app-senha', // <-- Corrigi o seletor aqui também
    standalone: true,      // <-- AVISO 1: "Sou um componente standalone"
    imports: [CommonModule, RouterModule], // <-- AVISO 2: "Eu preciso destas ferramentas"
    templateUrl: './senha.component.html',
    styleUrls: ['./senha.component.css'] // <-- Corrigi aqui também
})
export class SenhaComponent {
    
}