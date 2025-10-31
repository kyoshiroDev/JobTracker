import { Pipe, PipeTransform } from '@angular/core';

type StatusStyle = {
  status: string;
  styleCard: string;
  fontColor?: string;
  icon: string;
};

const statusStyle: StatusStyle[] = [
  { status: 'Total candidatures', styleCard: 'bg-primary/10 rounded-lg border border-solid border-primary/20', fontColor:'text-primary', icon: '/assets/icons/sprite.svg#i-trending-up' },
  { status: 'Entretiens', styleCard: 'bg-success/10 rounded-lg border border-solid border-success/20', fontColor:'text-success', icon: '/assets/icons/sprite.svg#i-check-circle' },
  { status: 'A relancer', styleCard: 'bg-green-500 text-white', fontColor:'text-green', icon: '/assets/icons/sprite.svg#i-check-circle' },
  { status: 'En attente', styleCard: 'bg-warning/10 rounded-lg border border-solid border-warning/20', fontColor:'text-warning', icon: '/assets/icons/sprite.svg#i-time' },
  { status: 'Rejetées', styleCard: 'bg-destructive/10 rounded-lg border border-solid border-destructive/20', fontColor:'text-destructive', icon: '/assets/icons/sprite.svg#i-cross-circle' },
]

@Pipe({ name: 'statusStyle' })
export class StatusStylePipe implements PipeTransform {
  transform(value: string): StatusStyle {
    return statusStyle.find((status) => status.status === value) as StatusStyle;
  }
}
