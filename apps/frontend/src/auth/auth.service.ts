import { inject, Injectable } from '@angular/core';
import { CreateUser, LoginUser } from '@libs/schemas-zod';
import { from } from 'rxjs';
import { SUPABASE } from '../app/providers/supabase.client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _supabase = inject(SUPABASE)

  signUp(user: CreateUser) {
    return from(
      this._supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            username: user.username,
          },
        },
      })
    );
  }

  signIn(user: LoginUser) {
    return from(
      this._supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      })
    );
  }

  signOut() {
    return from(this._supabase.auth.signOut());
  }
}
