import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideSupabase } from './providers/supabase.client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-center',
      timeOut: 3000,
      preventDuplicates: true,
      easing: 'ease-in',
      enableHtml: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    provideHttpClient(),
    provideSupabase(),
  ],
};
