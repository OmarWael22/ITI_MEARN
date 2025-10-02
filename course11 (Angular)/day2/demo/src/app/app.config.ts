import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// app
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};

// zone ->event , async opertation
//  provideZoneChangeDetection({ eventCoalescing: true })
// eventCoalescing: true  -> group event , async operation
// task1 -> Log
// console.log('Start'); // 1

// task1 -> schadule -> macro Queue (callback queue)
// setTimeout(() => console.log('Task: setTimeout'), 3000); // 4

// task1 -> schadule -> micro Queue (callback queue)
// Promise.resol  ve().then(() => console.log('Microtask: promise')); // 3

// task1 -> Log
// console.log('End'); // 2
