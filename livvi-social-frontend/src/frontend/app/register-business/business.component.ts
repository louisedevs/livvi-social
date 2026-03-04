import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit, OnDestroy {

  currentStep = 1;

  business = {
    nomeFantasia: '', cnpj: '', email: '', telefone: '',
    password: '', confirmPassword: '',
    cep: '', endereco: '', numero: '', complemento: '',
    bairro: '', cidade: '', estado: '', tipo: ''
  };

  passwordFieldType        = 'password';
  confirmPasswordFieldType = 'password';
  possuiCnpj               = true;
  showCnpjWarning          = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit()    { this.document.body.classList.add('background-preto'); }
  ngOnDestroy() { this.document.body.classList.remove('background-preto'); }

  goToStep(step: number) { this.currentStep = step; }

  onSubmit() { console.log('Business enviado:', this.business); }

  togglePasswordVisibility()        { this.passwordFieldType        = this.passwordFieldType        === 'password' ? 'text' : 'password'; }
  toggleConfirmPasswordVisibility() { this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password'; }

  toggleCnpjField() {
    this.possuiCnpj = !this.possuiCnpj;
    if (!this.possuiCnpj) { this.showCnpjWarning = true; this.business.cnpj = ''; }
  }

  closeCnpjWarning() { this.showCnpjWarning = false; }
}