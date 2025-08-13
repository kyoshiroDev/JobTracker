import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { SigningComponent } from '../auth/signing/signing.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { NotFoundComponent } from './not-found.component';


export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'sign-in', component: SigningComponent }, // Non lazy
      { path: 'sign-up', component: SignupComponent }, // Non lazy
    ],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../annonce/annonce-liste/annonce-liste-page.component').then((m) => m.AnnonceListePageComponent),
  },
  { path: '**', component: NotFoundComponent },
];
