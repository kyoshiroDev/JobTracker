import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { STATUS_COLOR_PROVIDER } from './tokens/status-color-token-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    STATUS_COLOR_PROVIDER,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
