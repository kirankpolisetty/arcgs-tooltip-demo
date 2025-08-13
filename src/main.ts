import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.js';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]

}).catch((err) => console.error(err));
