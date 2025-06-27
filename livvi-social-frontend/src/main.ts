import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './frontend/app/app.component';

bootstrapApplication(App)
  .catch((err) => console.error(err));
