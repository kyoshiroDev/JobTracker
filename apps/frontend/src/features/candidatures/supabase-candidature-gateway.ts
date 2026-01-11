import { inject, Injectable } from '@angular/core';
import { SUPABASE } from '@apps/frontend/app/providers/supabase.client';
import { catchError, from, map, Observable, of } from 'rxjs';
import { Candidature } from '@apps/frontend/features/candidatures/candidature';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCandidatureGateway {
  private readonly _supabase = inject(SUPABASE);

  getAllCandidatures(): Observable<Candidature[]> {
    return from(
      this._supabase.from('candidatures').select(`
      id,
      job,
      contract_type,
      work_mode,
      status, about,
      description,
      skills, benefits,
      salary,
      annonce_link,
      company_id,
      company:company_id(id, name, city)
    `),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw new Error(error.message);
        return data as Candidature[];
      }),
      catchError((err) => {
        console.error('Supabase error:', err);
        return of([] as Candidature[]);
      }),
    );
  }
}
