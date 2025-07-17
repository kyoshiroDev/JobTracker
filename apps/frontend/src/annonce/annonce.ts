export interface Entreprise {
  name: string;
  city: string;
  phone: number;
  email: string;
}

export interface Content {
  about: string;
  description: string;
  skills: string;
  benifits: string;
  salary: number;
  contractType: 'CDI' | 'CDD' | 'Freelance' | 'Stage';
  workMode: 'fullremote' | 'presentiel' | 'hybride';
  annonceLink: string;
  status: 'En attente' | 'Entretien' | 'À relancer' | 'Rejetée';
}

export interface Annonce {
  id: number;
  job: string;
  company: Entreprise;
  content: Content;
  createdAt: Date;
}
