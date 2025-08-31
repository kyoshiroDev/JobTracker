import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { NotFoundComponent } from './not-found.component';
import { authGuard } from './guards/auth-guard'

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../dashboard/dashboard-page.component').then(
        (c) => c.DashboardComponent
      ),
  },
  { path: '**', component: NotFoundComponent },
];
