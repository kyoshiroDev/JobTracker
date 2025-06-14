import { computed, Injectable, signal, Signal } from '@angular/core';
import { Annonce } from './annonce';
import { AnnonceForm } from './annonce-form/annonceForm';

@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  protected readonly id = signal(5);
  protected readonly annonces = signal<Annonce[]>([
    {
      id: 1,
      poste: 'développeur front-end Angular',
      entreprise: {
        name: 'Google',
        ville: 'Lyon',
        phone: 128525,
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        descriptif:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        competence:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        avantage:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        typeContrat: 'CDI',
        modeTravail: 'fullremote',
        salaire: 35000,
        annonceLink: '',
        status: 'En attente',
      },
      createdAt: new Date(),
    },
    {
      id: 2,
      poste: 'développeur front-end NextJs',
      entreprise: {
        name: 'Facebook',
        ville: 'Paris',
        phone: 128525,
        email: 'société@gmail.com',
      },

      content: {
        about:
          ' Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        descriptif:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        competence:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        avantage:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        typeContrat: 'CDI',
        modeTravail: 'fullremote',
        salaire: 40000,
        annonceLink: '',
        status: 'Entretien',
      },
      createdAt: new Date(),
    },
    {
      id: 3,
      poste: 'développeur back-end',
      entreprise: {
        name: 'Amazon',
        ville: 'Nante',
        phone: 128525,
        email: 'société@gmail.com',
      },
      content: {
        about:
          ' Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        descriptif:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        competence:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        avantage:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        typeContrat: 'CDI',
        modeTravail: 'fullremote',
        salaire: 50000,
        annonceLink: '',
        status: 'En attente',
      },

      createdAt: new Date(),
    },
    {
      id: 4,
      poste: 'développeur back-end NestJs',
      entreprise: {
        name: 'Prestashop',
        ville: 'Bordeau',
        phone: 25862541,
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        descriptif:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        competence:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        avantage:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        typeContrat: 'CDI',
        modeTravail: 'fullremote',
        salaire: 45000,
        annonceLink: '',
        status: 'À relancer',
      },
      createdAt: new Date(),
    },
    {
      id: 5,
      poste: 'développeur back-end Express',
      entreprise: {
        name: 'Netflix',
        ville: 'Dijon',
        phone: 25862541,
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        descriptif:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        competence:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        avantage:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        typeContrat: 'CDI',
        modeTravail: 'fullremote',
        salaire: 55000,
        annonceLink: '',
        status: 'Rejetée',
      },
      createdAt: new Date(),
    },
  ]);

  getAll(): Signal<Annonce[]> {
    return this.annonces.asReadonly();
  }

  addAnnonce(formDataAnnonce: Annonce) {
    const newAnnonce: Annonce = {
      ...formDataAnnonce,
      id: this.id() + 1,
      createdAt: new Date(formDataAnnonce.createdAt),
    };
    this.annonces.update((annonce) => [...annonce, newAnnonce]);
  }

  readonly countByStatus = computed(() => {
    return this.annonces().reduce((acc, annonce) => {
      const count = acc.get(annonce.content.status) || 0;
      acc.set(annonce.content.status, count + 1);
      return acc;
    }, new Map<string, number>());
  });
}
