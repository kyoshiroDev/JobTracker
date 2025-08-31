import { CanActivateFn, CanMatchFn, Router, UrlSegment, Route } from '@angular/router';
import { inject } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../providers/supabase.client';

export const authGuard: CanActivateFn = async (_route, state) => {
  const router = inject(Router);
  const supabase = inject<SupabaseClient>(SUPABASE);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
  }
  return true;
};

export const authMatchGuard: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const supabase = inject<SupabaseClient>(SUPABASE);

  const url = '/' + segments.map((s: UrlSegment) => s.path).join('/');
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: url } });
  }
  return true;
};
