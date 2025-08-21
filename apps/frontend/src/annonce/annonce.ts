export interface Entreprise {
  name: string;
  city: string;
  phone: string | null;
  email: string | null;
}

export interface Content {
  about: string | null;
  description: string | null;
  skills: string | null;
  benefits: string | null;
  salary: string | null;
  contractType: 'CDI' | 'CDD' | 'Freelance' | 'Stage' | null;
  workMode: 'fullremote' | 'presentiel' | 'hybride' | null;
  annonceLink: string | null;
  status: 'En attente' | 'Entretien' | 'À relancer' | 'Rejetée';
}

export interface Annonce {
  id: number;
  job: string;
  company: Entreprise;
  content: Content;
  createdAt: Date;
}
