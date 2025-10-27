import { inject, Injectable } from '@angular/core';
import { SUPABASE } from '../../app/providers/supabase.client';
import { catchError, from, map, Observable, of } from 'rxjs';
import { Candidature } from './candidature';

type StatusStyle = {
  status: string;
  style: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseCandidatureGateway {
  private readonly _supabase = inject(SUPABASE);

  getAllCandidatures(): Observable<Candidature[]> {
    return from(
      this._supabase.from('candidatures').select(`
      id, job, contract_type, work_mode, status, about, description, skills, benefits, salary, annonce_link,company_id, company:company_id(id, name, city)
    `)
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        console.log(data)
        return data as Candidature[];
      }),
      catchError((err) => {
        console.error('Supabase error:', err);
        return [];
      }),
    );
  }

  getStatusStyle(): Observable<StatusStyle[]> {
    return from(
      this._supabase.from('candidatures').select(`
      status
    `)
    ).pipe(
      map(({data, error}) => {
        if (error) throw error;
        return (data ?? []).map((value: { status: string }) => {
          let style = '';
          let icon = '';
          switch (value.status) {
            case 'Rejetées':
              style = 'bg-red-500 text-white';
              icon = '/assets/icons/sprite.svg#i-cross';
              break;
            case 'En attente':
              style = 'bg-yellow-500 text-white';
              icon = '/assets/icons/sprite.svg#i-cross';
              break;
            case 'Entretiens':
              style = 'bg-green-500 text-white';
              icon = '/assets/icons/sprite.svg#i-cross';
              break;
            default:
              style = 'bg-gray-300 text-black';
              icon = '/assets/icons/sprite.svg#i-question-mark-circle';
          }
          return {
            status: value.status || '',
            style,
            icon,
          } as StatusStyle;
        });
      })
    )
  }
}
