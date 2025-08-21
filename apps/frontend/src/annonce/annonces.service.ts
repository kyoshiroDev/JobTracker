import { computed, Injectable, signal, Signal } from '@angular/core';
import { Annonce } from './annonce';

type AnnonceFilter = {
  job: string | null;
  salary: string | null;
  status: string | null;
  name: string | null;
  city: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  protected _annonces = signal<Annonce[]>([
    {
      id: 1,
      job: 'développeur front-end Angular',
      company: {
        name: 'Google',
        city: 'Lyon',
        phone: '0128569854',
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        description:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        skills:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        benefits:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        contractType: 'CDI',
        workMode: 'fullremote',
        salary: '35000',
        annonceLink: '',
        status: 'En attente',
      },
      createdAt: new Date(),
    },
    {
      id: 2,
      job: 'développeur front-end NextJs',
      company: {
        name: 'Facebook',
        city: 'Paris',
        phone: '0128525',
        email: 'société@gmail.com',
      },

      content: {
        about:
          ' Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        description:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        skills:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        benefits:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        contractType: 'CDI',
        workMode: 'fullremote',
        salary: '40000',
        annonceLink: '',
        status: 'Entretien',
      },
      createdAt: new Date(),
    },
    {
      id: 3,
      job: 'développeur back-end',
      company: {
        name: 'Amazon',
        city: 'Nante',
        phone: '0128525',
        email: 'société@gmail.com',
      },
      content: {
        about:
          ' Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        description:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        skills:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        benefits:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        contractType: 'CDI',
        workMode: 'fullremote',
        salary: '50000',
        annonceLink: '',
        status: 'En attente',
      },

      createdAt: new Date(),
    },
    {
      id: 4,
      job: 'développeur back-end NestJs',
      company: {
        name: 'Prestashop',
        city: 'Bordeau',
        phone: '0125862541',
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        description:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        skills:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        benefits:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        contractType: 'CDI',
        workMode: 'fullremote',
        salary: '45000',
        annonceLink: '',
        status: 'À relancer',
      },
      createdAt: new Date(),
    },
    {
      id: 5,
      job: 'développeur back-end Express',
      company: {
        name: 'Netflix',
        city: 'Dijon',
        phone: '0125862541',
        email: 'société@gmail.com',
      },
      content: {
        about:
          'Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un éditeur technologique innovant spécialisé en cybersécurité. Notre client est une startup française dynamique qui développe des solutions de protection pour les entreprises. Grâce à sa technologie d’analyse comportementale, elle offre une protection fluide et sans installation, révolutionnant ainsi la gestion de la sécurité web.',
        description:
          'Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.Participer au développement du portail (front-office et back-office) afin d’enrichir les fonctionnalités de la solution. Collaborer étroitement avec les équipes techniques et les experts métier pour faire évoluer le produit. Proposer des améliorations en termes d’expérience utilisateur et assurer la qualité de vos développements par des tests rigoureux.',
        skills:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        benefits:
          'Excellente maîtrise des technologies front-end, notamment Angular. Connaissances en développement back-end (Java) ou forte motivation pour apprendre. Expérience avec Docker et Git (GitLab). Autonomie, esprit d’équipe et force de proposition indispensables.',
        contractType: 'CDI',
        workMode: 'fullremote',
        salary: '55000',
        annonceLink: '',
        status: 'Rejetée',
      },
      createdAt: new Date(),
    },
  ]);
  private _filters = signal<AnnonceFilter>({
    job: '',
    salary: '',
    status: '',
    name: '',
    city: '',
  });

  getAll(): Signal<Annonce[]> {
    return computed(() =>
      this._annonces().sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
    );
  }

  updateFilters(filtersData: Partial<AnnonceFilter>) {
    this._filters.update((previous) => ({ ...previous, ...filtersData }));
  }
  readonly filteredAnnonces = computed(() => {
    const filter = this._filters();

    const normalize = (str: string) =>
      str
        .toLowerCase()
        .trim()
        .replaceAll('-', '')
        .replaceAll('é', 'e')
        .replaceAll(' ', '');

    const filterJob = filter.job ? normalize(filter.job) : '';

    return this._annonces().filter((annonce) => {
      const jobNormalized = normalize(annonce.job);
      const nameMatch = annonce.company.name === filter.name;
      const cityMatch = annonce.company.city === filter.city;
      const salaryMatch = filter.salary
        ? annonce.content.salary?.toString() === filter.salary.toString()
        : false;
      const statusMatch = annonce.content.status === filter.status;
      const jobMatch = filterJob ? jobNormalized.includes(filterJob) : false;

      return jobMatch || nameMatch || cityMatch || salaryMatch || statusMatch;
    });
  });

  addAnnonce(formDataAnnonce: Omit<Annonce, 'id'>) {
    const id = 5;
    const newAnnonce: Annonce = {
      ...formDataAnnonce,
      id: id + 1,
      createdAt: new Date(formDataAnnonce.createdAt),
    };
    this._annonces.update((annonce) => [...annonce, newAnnonce]);
  }

  readonly countByStatus = computed(() => {
    return this._annonces().reduce((acc, annonce) => {
      const count = acc.get(annonce.content.status) || 0;
      acc.set(annonce.content.status, count + 1);
      return acc;
    }, new Map<string, number>());
  });
}
