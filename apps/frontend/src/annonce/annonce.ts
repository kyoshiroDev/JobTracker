export interface Entreprise {
  name: string | null;
  city: string | null;
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
  status: 'En attente' | 'Entretien' | 'À relancer' | 'Rejetée' | null;
}

export interface Annonce {
  id: number | null;
  job: string | null;
  company: Entreprise;
  content: Content;
  createdAt: Date | null;
}
