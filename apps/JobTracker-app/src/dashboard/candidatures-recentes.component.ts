import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../annonce/annonces.service';
import { Annonce } from '../annonce/annonce';
import { STATUS_COLOR } from '../app/tokens/status-color-token';

@Component({
  selector: 'fdw-candidatures-recentes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      class="max-w-[92%] m-auto bg-JobTracker-white p-5 rounded-xl  drop-shadow-lg"
    >
      <h3 class="text-center lg:text-left inline-block">
        Candidatures Récentes
      </h3>
      <table
        class="table-auto lg:table-fixed w-full border-collapse border border-JobTracker-gray"
      >
        <thead
          class="bg-JobTracker-blue h-[40px] text-JobTracker-white text-left"
        >
          <tr class="text-center h-[40px]">
            <th class="border border-JobTracker-gray text-center p-2">Poste</th>
            <th
              class="hidden lg:table-cell border border-JobTracker-gray text-center p-2"
            >
              Entreprise
            </th>
            <th
              class="hidden lg:table-cell border border-JobTracker-gray text-center p-2"
            >
              Localisation
            </th>
            <th class="border border-JobTracker-gray text-center p-2">
              Statut
            </th>
          </tr>
        </thead>
        <tbody>
          @for(annonce of annonces(); track annonce.id){
          <tr class="text-center h-[40px]">
            <td class="border border-JobTracker-gray">{{ annonce.poste }}</td>
            <td class="hidden lg:table-cell border border-JobTracker-gray">
              {{ annonce.entreprise.name }}
            </td>
            <td class="hidden lg:table-cell border border-JobTracker-gray">
              {{ annonce.entreprise.ville }}
            </td>
            <td
              [class]="statusColorClass(annonce.content.status)"
              class="hidden lg:table-cell font-bold border border-JobTracker-gray"
            >
              {{ annonce.content.status }}
            </td>
            <td
              [class]="statusColorClass(annonce.content.status)"
              class="lg:hidden table-cell relative group border border-JobTracker-gray"
            >
              <svg
                class="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
              <span
                class=" absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden px-2 py-1 text-white text-xs rounded bg-gray-700 group-hover:inline-block whitespace-nowrap"
              >
                {{ annonce.content.status }}
              </span>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class CandidaturesRecentesComponent {
  private readonly annoncesService = inject(AnnoncesService);
  private readonly status = inject(STATUS_COLOR);

  protected readonly annonces: Signal<Annonce[]> =
    this.annoncesService.getAll();

  protected readonly screenWidth = signal(window.innerWidth);
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }

  protected statusColorClass(status: string): string {
    const statusConfig = this.status.find((item) => item.label === status);
    return statusConfig?.colorClassText || 'text-JobTracker-blue';
  }
}
