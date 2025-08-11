import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./signing/signing.component').then((m) => m.SigningComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./signup/signup.component').then((m) => m.SignupComponent),
      },
    ],
  },
];
