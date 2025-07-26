import { AnnonceListePageComponent } from '../annonce/annonce-liste/annonce-liste-page.component';
import { DashboardComponent } from '../dashboard/dashboard-page.component';
import { AnnonceDetailComponent } from '../annonce/annonce-detail/annonce-detail.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'annonces', component: AnnonceListePageComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent },
  { path: '**', component: NotFoundComponent }
];
