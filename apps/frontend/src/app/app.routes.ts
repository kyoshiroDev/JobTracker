import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('../auth/signing/signing.component').then(
            (m) => m.SigningComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('../auth/signup/signup.component').then(
            (m) => m.SignupComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'annonces' },
      {
        path: 'annonces',
        loadComponent: () =>
          import('../annonce/annonce-liste/annonce-liste-page.component').then(
            (m) => m.AnnonceListePageComponent
          ),
      },
      {
        path: 'annonce/:id',
        loadComponent: () =>
          import('../annonce/annonce-detail/annonce-detail.component').then(
            (m) => m.AnnonceDetailComponent
          ),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
