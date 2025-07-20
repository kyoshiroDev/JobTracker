import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fdw-return-row',
  imports: [CommonModule],
  template: `<p>return-row works!</p>`,
  styleUrl: './return-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnRowComponent {}
