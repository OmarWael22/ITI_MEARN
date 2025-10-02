import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Angular -> APP Root -> Carries all app's component's
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
