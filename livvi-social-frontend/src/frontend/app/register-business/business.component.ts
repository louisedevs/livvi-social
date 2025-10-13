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

  // --- O "MOLDE" PARA OS DADOS DO FORMULÁRIO ---
  business = {
    nomeFantasia: '',
    cnpj: '',
    email: '',
    telefone: '',
    password: '',
    confirmPassword: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    tipo: ''
  };

  // --- VARIÁVEIS PARA O "OLHINHO" DA SENHA ---
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  // --- VARIÁVEIS PARA A LÓGICA DO CNPJ ---
  possuiCnpj: boolean = true;
  showCnpjWarning: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  // --- LÓGICA PARA O FUNDO PRETO DA PÁGINA ---
  ngOnInit(): void {
    this.document.body.classList.add('background-preto');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('background-preto');
  }

  // --- FUNÇÕES DO NOSSO FORMULÁRIO ---

  // Função chamada ao clicar em "Criar Conta"
  onSubmit() {
    console.log('Formulário de negócio enviado!', this.business);
  }

  // Função para mostrar/esconder a senha
  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Função para mostrar/esconder a confirmação de senha
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }

  // Função que o checkbox do CNPJ chama
  toggleCnpjField() {
    this.possuiCnpj = !this.possuiCnpj;
    if (!this.possuiCnpj) {
      this.showCnpjWarning = true;
      this.business.cnpj = '';
    }
  }

  // Função que o botão "Entendi!" da mensagem de aviso chama
  closeCnpjWarning() {
    this.showCnpjWarning = false;
  }
}