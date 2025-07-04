// src/app/home/home.component.ts

// --- Importações no topo do arquivo ---
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

// --- @Component decorator ---
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    this.document.body.classList.add('background-preto');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('background-preto');
  }
}
