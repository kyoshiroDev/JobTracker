import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { NotFoundComponent } from './not-found.component';
import { authMatchGuard } from './guards/auth-guard';
import { DashboardLayoutComponent } from '../features/dashboard/dashboard-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },

  {
    path: '',
    canMatch: [authMatchGuard],
    component: DashboardLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('../features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
