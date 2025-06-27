import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'livvi-social-frontend';
}
bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});