import { AnnonceListePageComponent } from '../annonce/annonce-liste/annonce-liste-page.component';
import { AnnonceDetailComponent } from '../annonce/annonce-detail/annonce-detail.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';


export const routes: Routes = [
  { path: '', loadChildren: () => import('../auth/auth.routes').then(m => m.AUTH_ROUTES)},
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)},
  { path: 'annonces', component: AnnonceListePageComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent },
  { path: '**', component: NotFoundComponent }
];
