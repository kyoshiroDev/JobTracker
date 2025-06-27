import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AnnonceForm, ContentForm, EntrepriseForm } from './annonceForm';
import { EntrepriseFormComponent } from './entreprise-form.component';
import { ContentFormComponent } from './content-form.component';

import { AnnoncesService } from '../annonces.service';
import { Annonce } from '../annonce';

@Component({
  selector: 'fdw-annonce-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, EntrepriseFormComponent, ContentFormComponent],
  template: `
    <div
      class="z-1 flex items-center justify-center absolute w-full h-full px-2 bg-JobTracker-grayOpacity "
    >
      <div
        class="w-[600px] max-h-[98vh] bg-JobTracker-white rounded-md z-3 border border-JobTracker-blue relative"
      >
        <div class="flex justify-between items-center p-4">
          @if (!entrepriseForm()) {
          <button
            (click)="switchForm()"
            type="button"
            class="flex gap-2 items-center cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover justify-self-start text-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13 19L2 12l11-7v6h9v2h-9z"/>
            </svg>
            Retour
          </button>
          } @else {
          <span class="w-[92px]"></span>
          }
          <p
            class="text-JobTracker-blue text-center text-2xl font-semibold justify-self-center"
          >
            Nouvelle annonce
          </p>
          <button
            (click)="modalClose.emit()"
            class="text-3xl cursor-pointer w-14 h-14 text-JobTracker-side hover:text-JobTracker-side-hover justify-self-end"
          >
            X
          </button>
        </div>
        <form
          [formGroup]="formAnnonce"
          class="flex flex-col gap-5 px-5 pb-5 max-h-[80vh] overflow-hidden overflow-y-auto"
          (ngSubmit)="onSubmit()"
        >
          <div
            class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
          >
            <label for="poste">Poste :</label>
            <input
              id="poste"
              type="text"
              formControlName="poste"
              placeholder="Développeur web"
            />
          </div>
          <!-- Entreprise -->
          @if (entrepriseForm()) {
          <fdw-entreprise-form
            [entrepriseForm]="formAnnonce.controls.entreprise"
          />
          <div class="flex px-5 py-2 justify-center">
            <button
              (click)="switchForm()"
              type="button"
              class="flex gap-2 items-center cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover text-xl"
            >
              Suivant
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7z"/>
              </svg>
            </button>
          </div>
          } @else {
          <!-- Content -->

            <fdw-content-form [contentForm]="formAnnonce.controls.content" />
            <div class="flex w-full justify-end items-center">
          <button
            class="w-fit px-5 h-10 bg-JobTracker-side hover:bg-JobTracker-side-hover text-JobTracker-gray font-semibold cursor-pointer rounded-lg"
            type="submit"
          >
            Ajouter
          </button>
          </div>
          }
        </form>
      </div>
    </div>
  `,
})
export class AnnonceFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(AnnoncesService);
  modalClose: OutputEmitterRef<void> = output();
  entrepriseForm: WritableSignal<boolean> = signal(true);

  switchForm() {
    this.entrepriseForm.set(!this.entrepriseForm());
  }

  protected readonly formAnnonce = this.fb.group<AnnonceForm>({
    poste: this.fb.control(null),
    entreprise: this.fb.group<EntrepriseForm>({
      name: this.fb.control(null),
      ville: this.fb.control(null),
      phone: this.fb.control(null),
      email: this.fb.control(null),
    }),
    content: this.fb.group<ContentForm>({
      about: this.fb.control(null),
      descriptif: this.fb.control(null),
      competence: this.fb.control(null),
      avantage: this.fb.control(null),
      salaire: this.fb.control(null),
      typeContrat: this.fb.control<
        'CDI' | 'CDD' | 'Freelance' | 'Stage' | null
      >(null),
      modeTravail: this.fb.control<
        'fullremote' | 'presentiel' | 'hybride' | null
      >(null),
      annonceLink: this.fb.control(null),
      status: this.fb.control('En attente'),
    }),
    createdAt: this.fb.control<Date>(new Date(Date.now())),
  });

  onSubmit() {
    const formDataAnnonce: any = this.formAnnonce.getRawValue();
    this.service.addAnnonce(formDataAnnonce);
    this.formAnnonce.reset();
    this.modalClose.emit();
  }
}
