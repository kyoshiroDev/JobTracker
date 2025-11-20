import { inject, Injectable, signal } from '@angular/core';
import { CreateUser, LoginUser } from '@libs/schemas-zod';
import { from } from 'rxjs';
import { SUPABASE } from '../app/providers/supabase.client';
import { User, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly _supabase = inject(SUPABASE);
  readonly user = signal<User | null>(null);

  constructor() {
    void this.restoreSession();
    this._supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      this.user.set(session?.user ?? null);
    });
  }

  private async restoreSession() {
    const { data, error } = await this._supabase.auth.getSession();
    if (error) {
      this.user.set(null);
      return;
    }
    this.user.set(data.session?.user ?? null);
  }

  signUp(user: CreateUser) {
    return this._supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: { data: { username: user.username } },
    });
  }

  async signIn(user: LoginUser) {
    const { data, error } = await this._supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (error) throw error;
    if (data.user) {
      this.user.set(data.user ?? null);
    }
  }

  signOut() {
    return from(this._supabase.auth.signOut());
  }
}
