import { FormControl, FormGroup } from '@angular/forms';

export interface EntrepriseForm {
  name: FormControl<string | null>;
  ville: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}

export interface ContentForm {
  about: FormControl<string | null>;
  descriptif: FormControl<string | null>;
  competence: FormControl<string | null>;
  avantage: FormControl<string | null>;
  salaire: FormControl<string | null>;
  typeContrat: FormControl<'CDI' | 'CDD' | 'Freelance' | 'Stage' | null>;
  modeTravail: FormControl<'fullremote' | 'presentiel' | 'hybride' | null>;
  status: FormControl<string | null>;
  annonceLink: FormControl<string | null>;
}
export interface AnnonceForm {
  poste: FormControl<string | null>;
  entreprise: FormGroup<EntrepriseForm>;
  content: FormGroup<ContentForm>;
  createdAt: FormControl<Date | null>;
}
