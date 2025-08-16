import { FormControl, FormGroup } from '@angular/forms';

export interface CompanyForm {
  name: FormControl<string | null>;
  city: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}

export interface ContentForm {
  about: FormControl<string | null>;
  description: FormControl<string | null>;
  skills: FormControl<string | null>;
  benefits: FormControl<string | null>;
  salary: FormControl<string | null>;
  contractType: FormControl<'CDI' | 'CDD' | 'Freelance' | 'Stage' | null>;
  workMode: FormControl<'fullremote' | 'presentiel' | 'hybride' | null>;
  status: FormControl<
    'En attente' | 'Entretien' | 'À relancer' | 'Rejetée' | null
  >;
  annonceLink: FormControl<string | null>;
}
export interface AnnonceForm {
  job: FormControl<string | null>;
  company: FormGroup<CompanyForm>;
  content: FormGroup<ContentForm>;
  createdAt: FormControl<Date | null>;
}
