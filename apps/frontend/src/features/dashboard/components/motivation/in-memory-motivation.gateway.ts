import { Injectable, signal } from '@angular/core';

export interface MotivationMessage {
  id: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryMotivationGateway {
  protected readonly motivation = signal<MotivationMessage[]>([
    {
      id: 'b8f65a34-52e3-4e7d-8b74-12c2b45e5b21',
      text: 'Chaque candidature t’approche un peu plus de ton prochain emploi.',
    },
    {
      id: '0f9b48bb-7c1b-45b5-99c4-bb4c5a1e13da',
      text: 'Persévère : la bonne opportunité arrive toujours à celui qui continue d’essayer.',
    },
    {
      id: 'd12fbc2a-1d61-44a5-b134-1a0bb8e8d232',
      text: 'Un refus n’est pas un échec, mais une redirection vers un poste qui te correspond mieux.',
    },
    {
      id: '8f3b67ab-3e65-4d91-ae77-2a8f1abcb4b5',
      text: 'Chaque entretien est une expérience qui te rend plus fort et plus confiant.',
    },
    { id: 'c0e3f6f0-9d7b-48d5-9156-5d67993464f5', text: 'Ton profil a de la valeur : continue à le faire briller.' },
    {
      id: 'cb46c934-9f26-43a8-a3b6-991c4bc2b70d',
      text: 'Le marché a besoin de tes compétences, il suffit de frapper à la bonne porte.',
    },
    {
      id: 'ab2733d4-876d-44f8-b2cf-2b0f0de0a523',
      text: 'Transforme les obstacles en tremplins vers ta réussite professionnelle.',
    },
    {
      id: 'e6b6e1a4-8b2e-4e5c-88d7-ef8c1290c3c1',
      text: 'Tu es plus proche de ton prochain emploi que tu ne le crois.',
    },
    {
      id: 'b5a6d2ef-b52c-4372-9e2c-0c4be5792153',
      text: 'Chaque jour est une nouvelle chance d’avancer dans ta carrière.',
    },
    { id: 'd8763c72-13c3-4207-9445-4a97c93532ad', text: 'La patience et la persévérance ouvrent les bonnes portes.' },
    { id: 'a9bc8c56-5244-4a6f-9b6c-27ec6d86b63c', text: 'Ne te décourage pas : chaque candidature compte.' },
    { id: 'e3f31c0d-23a3-490b-a4cb-f46991341c5f', text: 'Plus tu postules, plus tu multiplies tes chances de succès.' },
    {
      id: 'cd7415e0-fb91-4f15-a637-0e344296a342',
      text: 'Tu apprends et tu progresses à chaque étape de ta recherche.',
    },
    { id: 'bfa420e7-9d8d-47cc-bb90-4115a5d4c274', text: 'Ta détermination est ta plus grande force.' },
    { id: 'e912a7f9-6e76-4b39-8c77-32d4108e69e2', text: 'Tu mérites un poste qui te valorise et te fait évoluer.' },
    {
      id: 'b5365870-1f33-4ebf-97c4-3cb11234a9d1',
      text: 'Les efforts d’aujourd’hui construiront ton avenir professionnel.',
    },
    { id: 'e622a889-30fd-4d2e-94b6-bdaae51d5b8b', text: 'Chaque entretien est un pas de plus vers ton objectif.' },
    {
      id: 'f1e41d3f-c16d-40e1-bf6e-2839d41f4ff1',
      text: 'Continue à croire en toi, les recruteurs finiront par le voir.',
    },
    {
      id: 'c9c3180a-368b-4f82-9b58-321b47c41f67',
      text: 'Tes expériences passées te rendent plus compétent et préparé.',
    },
    {
      id: 'b11f0e1b-62c3-49d4-9b9e-c9e14a0db08c',
      text: 'La clé est de ne jamais abandonner, même après plusieurs refus.',
    },
    { id: 'f96349a3-c44b-4719-9ec3-c115e9d0b3ad', text: 'Tu construis la carrière que tu souhaites avoir demain.' },
    {
      id: 'd201f8aa-43c6-4019-b2af-08ff524a73c3',
      text: 'Le poste parfait existe, tu es simplement en chemin pour le trouver.',
    },
    { id: 'c139902f-c8eb-4a6a-b0f2-f5d1185bbd0d', text: 'Ton énergie et ta motivation finiront par payer.' },
    { id: 'f47de9d4-19f1-47d7-92c4-8e7e5e2ed6b3', text: 'Chaque candidature t’ouvre de nouvelles portes.' },
    {
      id: 'a382a0d4-5c9f-497d-a65b-b30a5f62f8bb',
      text: 'La réussite appartient à ceux qui persistent malgré les obstacles.',
    },
    {
      id: 'b33f53fc-d37f-4f53-8f8e-f1db1c57420d',
      text: 'Aujourd’hui est un jour de plus pour te rapprocher de ton objectif.',
    },
    {
      id: 'd5bff5c1-ec3e-4715-97c8-74b30c519876',
      text: 'Ton futur employeur est peut-être déjà en train de chercher quelqu’un comme toi.',
    },
    {
      id: 'f92387a1-8f1e-4035-946d-4e3e25c9c41e',
      text: 'Un seul “oui” changera toute ta trajectoire professionnelle.',
    },
    {
      id: 'a4f90b47-8de5-44c6-9584-3ec1d9b2853c',
      text: 'Continue d’avancer : tu es plus prêt que jamais à saisir la bonne opportunité.',
    },
    {
      id: 'b7e36198-77d6-4cfb-b4cd-d7e1df52e1e8',
      text: 'Le prochain emploi peut être celui qui transformera ta carrière.',
    },
  ]);

  selected = signal<MotivationMessage | null>(null);

  private storageKey = 'jt.motivationOfTheDay';

  constructor() {
    this.loadOrPickForToday();
  }

  private pickRandom(): MotivationMessage {
    const list = this.motivation();
    const i = Math.floor(Math.random() * list.length);
    return list[i] as MotivationMessage;
  }

  private loadOrPickForToday() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

      if (raw) {
        const saved = JSON.parse(raw) as { date: string; id: string };
        if (saved?.date === today) {
          const found = this.motivation().find((m) => m.id === saved.id) ?? this.pickRandom();
          this.selected.set(found);
          return;
        }
      }

      const picked = this.pickRandom();
      this.selected.set(picked);
      localStorage.setItem(this.storageKey, JSON.stringify({ date: today, id: picked.id }));
    } catch {
      this.selected.set(this.pickRandom());
    }
  }
}
