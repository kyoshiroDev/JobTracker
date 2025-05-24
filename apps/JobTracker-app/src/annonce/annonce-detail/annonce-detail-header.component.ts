import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Annonce } from '../annonce';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fdw-annonce-detail-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-JobTracker-side p-6 relative">
      <div class="flex flex-col justify-center gap-2 mb-7">
        <!-- Flêche retour -->
        <div class="flex justify-between">
          <svg
            (click)="onClickReturn.emit()"
            routerLink="/candidature"
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m5.83 9l5.58-5.58L10 2l-8 8l8 8l1.41-1.41L5.83 11H18V9z"
            />
          </svg>

          <!-- Poste -->
          <h2
            class="text-4xl font-bold text-JobTracker-white truncate mb-1 uppercase"
          >
            {{ annonce().poste }}
          </h2>

          <!-- Boutton modifier -->
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m21.558 3.592l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L13 7.731V11h3.27l5.288-5.288a1.49 1.49 0 0 0 0-2.12M15.579 9.45h-1.03V8.42L18 4.973l1.03 1.03Z"
            />
            <path
              fill="currentColor"
              d="M19 19H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"
            />
          </svg>
        </div>

        <!-- Société -->
        <div class="flex justify-center items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2z"
            />
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
              d="M30 14a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28ZM4 4h16v24H4Zm18 24V14h6v14Z"
            />
          </svg>
          <p class="text-3xl  font-medium">
            {{ annonce().entreprise.name }}
          </p>
        </div>

        <!-- Contact de la société -->
        <div class="flex gap-5 justify-center">
          <!-- E-mail -->
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 2 24 24"
              stroke="currentColor"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
              />
            </svg>
            {{ annonce().entreprise.email }}
          </div>

          <!-- Téléphone -->
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 2 24 24"
              stroke="currentColor"
            >
              <path
                fill="currentColor"
                d="M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3"
              />
            </svg>
            {{ annonce().entreprise.phone }}
          </div>
        </div>
      </div>

      <!-- Renseignement sur le poste -->
      <div class="flex gap-12 mt-3 justify-center items-center">
        <!-- La ville -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 2 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ annonce().entreprise.ville }}
        </div>

        <!-- Salaire -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 2 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M15 11v.01M5.173 8.378a3 3 0 1 1 4.656-1.377" />
              <path
                d="M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z"
              />
            </g>
          </svg>
          {{
            annonce().content.salaire | currency : 'EUR' : 'symbol' : '1.0-0'
          }}
          /an
        </div>

        <!-- Type de contrat -->
        <div class="flex items-cente">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 2 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          {{ annonce().content.typeContrat }}
        </div>

        <!-- Mode de travail -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 2 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="currentColor"
              d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616v9.769q0 .23.192.423t.423.192M10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4 19V8z"
            />
          </svg>
          {{ annonce().content.modeTravail }}
        </div>
      </div>
    </div>
  `,
})
export class AnnonceDetailHeaderComponent {
  readonly annonce = input.required<Annonce>();
  readonly onClickReturn = output<void>();
}
