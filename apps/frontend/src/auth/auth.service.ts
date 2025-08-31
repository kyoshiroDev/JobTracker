import { inject, Injectable } from '@angular/core';
import { CreateUser, LoginUser } from '@libs/schemas-zod';
import { from, defer, map, throwError, catchError } from 'rxjs';
import { SUPABASE } from '../app/providers/supabase.client';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _supabase = inject(SUPABASE)

  signUp(user: CreateUser) {
    return defer(() =>
      this._supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            username: user.username,
          },
        }
      })
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data;
      }),
      catchError(err => throwError(() => new Error(err?.message ?? 'Inscription échouée')))
    );
  }

  signIn(user: LoginUser) {
    return defer(() =>
      this._supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password
      })
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data;
      }),
      catchError(err => throwError(() => new Error(err?.message ?? 'Connexion échouée')))
    );
  }

  signOut() {
    return from(this._supabase.auth.signOut());
  }
}
