import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { NotFoundComponent } from './not-found.component';
import { DashboardComponent } from '../dashboard/dashboard-page.component';


export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    loadChildren: () =>
      import('../annonce/annonce-liste/annonce-liste-page.component').then((m) => m.AnnonceListePageComponent),
  },
  { path: '**', component: NotFoundComponent },
];
