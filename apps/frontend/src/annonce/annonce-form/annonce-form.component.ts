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
      class="z-1 flex items-center justify-center absolute w-full md:h-full p-3 bg-JobTracker-grayOpacity"
    >
      <div
        class="w-[600px] max-h-fit bg-JobTracker-white rounded-xl z-3 border border-JobTracker-blue relative"
      >
        <div class="grid grid-cols-3 items-center py-4 px-4">
          @if (!entrepriseForm()) {
          <button
            (click)="switchForm()"
            type="button"
            class="cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover justify-self-start text-xl"
          >
            👈 Retour
          </button>
          } @else {
          <span></span>
          }
          <p
            class="text-JobTracker-blue text-center text-2xl font-semibold justify-self-center"
          >
            Ajout d'annonce
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
          class="flex flex-col gap-5 p-5"
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
              class="text-gray-400 w-full h-12 border border-gray-600 bg-white px-2 py-1 text-sm rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
              class="cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover text-xl"
            >
              Suivant 👉
            </button>
          </div>
          } @else {
          <!-- Content -->
          <fieldset
            class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md"
          >
            <legend
              class="text-center font-semibold text-2xl px-2 text-JobTracker-blue"
            >
              Contenue de l'annonce
            </legend>
            <fdw-content-form [contentForm]="formAnnonce.controls.content" />
          </fieldset>
          <button
            class="m-auto w-25 md:w-70 h-10 bg-JobTracker-side hover:bg-JobTracker-side-hover text-JobTracker-gray font-semibold cursor-pointer rounded-lg"
            type="submit"
          >
            Ajouter
          </button>
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
