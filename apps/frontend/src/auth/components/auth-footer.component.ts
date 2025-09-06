import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-auth-footer',
  template: ` <footer class="text-center mt-8 text-sm text-muted-foreground">
    En vous inscrivant, vous acceptez nos
    <a href="#" class="bg-gradient-primary clip-text">conditions d'utilisation</a>
    et notre
    <a href="#" class="bg-gradient-primary clip-text">politique de confidentialité</a>
  </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFooterComponent {}
