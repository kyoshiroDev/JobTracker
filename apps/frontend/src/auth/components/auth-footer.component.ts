import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-auth-footer',
  template: `
    <footer
      class="text-center mt-8 text-sm text-jobtracker-text-secondary"
    >
      En vous inscrivant, vous acceptez nos
      <a href="#" class="text-jobtracker-dark-primary hover:underline"
      >conditions d'utilisation</a
      >
      et notre
      <a href="#" class="text-jobtracker-dark-primary hover:underline"
      >politique de confidentialité</a
      >
    </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFooterComponent {}
