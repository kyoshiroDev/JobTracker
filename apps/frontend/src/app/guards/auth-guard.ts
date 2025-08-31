import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../providers/supabase.client';

export const authGuard: CanActivateFn = async (_route, state) => {
  const router = inject(Router);
  const supabase = inject<SupabaseClient>(SUPABASE);

  const { data: { user }, error } = await supabase.auth.getSession();

  if (error || !user) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
  }
  return true;
};

export const authMatchGuard: CanMatchFn = async (_route, segments) => {
  const router = inject(Router);
  const supabase = inject<SupabaseClient>(SUPABASE);

  const url = '/' + segments.map(s => s.path).join('/');
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: url } });
  }
  return true;
};
