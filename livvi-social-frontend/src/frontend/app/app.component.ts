import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent
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