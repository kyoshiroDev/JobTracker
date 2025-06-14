import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'fdw-tache-a-faire',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div
      class="w-[46%] ml-[65px] bg-JobTracker-white p-5 rounded-xl  drop-shadow-lg"
    >
      <h3>Tâches à faire</h3>
      @for (tache of taches(); track tache.id) {
      <div
        class="flex
  items-center
  max-h-[30px]
  p-5
  border-l-5
  border
  border-b-JobTracker-gray
  border-t-JobTracker-gray
  border-r-JobTracker-gray
  border-JobTracker-blue
  m-2
  rounded-br-lg
  rounded-tr-lg"
      >
        <p>{{ tache.content }}</p>
      </div>
      }
    </div>
  `,
})
export class TacheAFaireComponent {
  protected readonly taches = signal([
    { id: 1, content: 'Refaire le CV' },
    { id: 2, content: 'Entretien facebook le 19/02/2025' },
    { id: 3, content: 'Prestashop à relancer' },
    { id: 4, content: 'Mettre à jour mon Linkedin' },
  ]);
}
