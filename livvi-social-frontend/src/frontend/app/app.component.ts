import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home/home.component.html',
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