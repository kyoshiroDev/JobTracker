import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from './auth.service'

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  if (!auth.ready()) return false

  return auth.isAuthenticated()
    ? true
    : router.createUrlTree(['/login'], { queryParams: { redirect: state.url } })
}
