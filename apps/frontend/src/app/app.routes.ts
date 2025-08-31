import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { NotFoundComponent } from './not-found.component';
import { DashboardComponent } from '../dashboard/dashboard-page.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../dashboard/dashboard-page.component').then(
        (c) => c.DashboardComponent
      ),
  },
  { path: '**', component: NotFoundComponent },
];
