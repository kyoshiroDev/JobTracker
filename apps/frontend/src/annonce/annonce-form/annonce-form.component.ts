import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnnonceForm, CompanyForm, ContentForm } from './annonceForm';
import { ContentFormComponent } from './content-form.component';
import { EntrepriseFormComponent } from './entreprise-form.component';

import { AnnoncesService } from '../annonces.service';
import { Annonce } from '../annonce';

@Component({
  selector: 'fdw-annonce-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, EntrepriseFormComponent, ContentFormComponent],
  template: `
    <div
      class="z-1 flex text-sm md:text-md items-center justify-center absolute w-full h-full px-2 bg-JobTracker-grayOpacity "
    >
      <div
        class="w-[550px] max-h-[98vh] bg-JobTracker-white rounded-md z-3 border border-JobTracker-blue relative"
      >
        <div class="flex justify-between items-center p-4">
          @if (!entrepriseForm()) {
          <button
            (click)="switchForm()"
            type="button"
            class="flex w-fit gap-2 items-center cursor-pointer text-JobTracker-side hover:text-JobTracker-side-hover justify-self-start text-md md:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M13 19L2 12l11-7v6h9v2h-9z" />
            </svg>
            Retour
          </button>
          } @else {
          <span class="w-5"></span>
          }
          <p
            class="text-JobTracker-blue text-center text-lg md:text-2xl font-semibold justify-center flex-1"
          >
            Nouvelle annonce
          </p>
          <button
            (click)="modalClose.emit()"
            class="flex items-center justify-end text-lg md:text-2xl cursor-pointer w-5 text-JobTracker-side hover:text-JobTracker-side-hover justify-self-end"
          >
            X
          </button>
        </div>
        <form
          [formGroup]="formAnnonce"
          class="flex flex-col gap-5 px-5 pb-5 max-h-[90vh] overflow-hidden overflow-y-auto"
          (ngSubmit)="onSubmit()"
        >
          <div
            class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
          >
            <label for="poste"
              >Poste<span class="text-xs text-red-700">*</span></label
            >
            <input
              id="poste"
              type="text"
              formControlName="job"
              placeholder="Développeur web"
              class=""
            />
          </div>
          <!-- Entreprise -->
          @if (entrepriseForm()) {
          <fdw-entreprise-form
            [entrepriseForm]="formAnnonce.controls.company"
          />
          <div class="flex px-5 py-2 justify-center">
            <button
              (click)="switchForm()"
              type="button"
              class="flex w-32 lg:w-48 gap-2 items-center justify-center cursor-pointer text-JobTracker-side text-md md:text-lg"
            >
              Suivant
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7z" />
              </svg>
            </button>
          </div>
          } @else {
          <!-- Content -->
          <fdw-content-form [contentForm]="formAnnonce.controls.content" />
          <div class="flex w-full justify-center items-center">
            <button
              [disabled]="this.formAnnonce.invalid"
              class="w-[75%] px-5 h-10 bg-JobTracker-side hover:bg-JobTracker-side-hover text-JobTracker-gray font-semibold cursor-pointer rounded-lg"
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
    job: this.fb.control('', Validators.required),
    company: this.fb.group<CompanyForm>({
      name: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      phone: this.fb.control('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]/),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
    }),
    content: this.fb.group<ContentForm>({
      about: this.fb.control('', Validators.required),
      description: this.fb.control(null, Validators.required),
      skills: this.fb.control('', Validators.required),
      benefits: this.fb.control('', Validators.required),
      salary: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      contractType: this.fb.control<
        'CDI' | 'CDD' | 'Freelance' | 'Stage' | null
      >(null, Validators.required),
      workMode: this.fb.control<'fullremote' | 'presentiel' | 'hybride' | null>(
        null,
        Validators.required
      ),
      annonceLink: this.fb.control(null, [
        Validators.required,
        Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/),
      ]),
      status: this.fb.control('En attente'),
    }),
    createdAt: this.fb.control<Date>(new Date(Date.now())),
  });

  protected onSubmit() {
    const formDataAnnonce: Omit<Annonce, 'id'> = this.formAnnonce.getRawValue();
    if (this.formAnnonce.valid) {
      this.service.addAnnonce(formDataAnnonce);
      this.formAnnonce.reset();
      this.modalClose.emit();
    } else {
      console.log(formDataAnnonce);
    }
  }
}
