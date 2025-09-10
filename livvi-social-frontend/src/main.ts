import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// Importando os arquivos do seu projeto
import { routes } from './frontend/app/app.routes';
import { AppComponent } from './frontend/app/app.component';

// Adicionando a configuração de rotas na inicialização
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // <-- A LINHA MÁGICA QUE LIGA AS ROTAS
  ]
}).catch((err) => console.error(err));