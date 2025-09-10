import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
     RouterLink 
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
  })
export class AppComponent {
  protected title = 'livvi-social-frontend';
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});