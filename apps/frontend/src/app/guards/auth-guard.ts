import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../providers/supabase.client';

export const authMatchGuard: CanMatchFn = async (route, segments) => {
  const router = inject(Router);
  const supabase = inject<SupabaseClient>(SUPABASE);

  const attemptedUrl = '/' + segments.map((s) => s.path).join('/');
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    if (attemptedUrl && attemptedUrl !== '/' && attemptedUrl !== '/auth') {
      sessionStorage.setItem('redirect:url', attemptedUrl);
    }
    return router.createUrlTree(['/auth']); // 🔥 aucun query param
  }
  return true;
};
