import { InjectionToken, Provider } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export const SUPABASE = new InjectionToken<SupabaseClient>('SUPABASE');

export function provideSupabase(): Provider {
  return {
    provide: SUPABASE,
    useFactory: () =>
      createClient(environment.supabaseUrl, environment.supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
        },
      }),
  };
}
