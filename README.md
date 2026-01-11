# 📌 JobTracker

**Projet personnel de portfolio** - Application web moderne développée avec **Angular 21** et **Nx**, conçue pour aider les chercheurs d'emploi à organiser et suivre efficacement leurs candidatures. Ce projet démontre ma maîtrise des technologies frontend modernes et des bonnes pratiques de développement.

[🔗 Accéder à l'application en ligne](https://job-tracker-nx.vercel.app/)

## ✨ Fonctionnalités principales

- **Gestion complète des candidatures** : Ajout, modification et suivi de vos candidatures avec toutes les informations pertinentes (entreprise, poste, lien de l'offre, notes)
- **Tableau de bord interactif** : Vue d'ensemble de vos candidatures avec statistiques en temps réel
- **Suivi du statut** : Visualisation claire de l'évolution de chaque candidature (en attente, entretien, refusée, acceptée)
- **Authentification sécurisée** : Connexion et inscription via Supabase avec gestion de session
- **Recherche et filtres** : Trouvez rapidement vos candidatures grâce aux fonctionnalités de recherche
- **Message de motivation quotidien** : Un message inspirant pour vous motiver dans votre recherche d'emploi

## 🛠️ Stack technique

### Frontend
- **Framework** : Angular 21 (standalone components)
- **Monorepo** : Nx 22
- **Package Manager** : pnpm
- **Langage** : TypeScript 5.9
- **Styles** : Tailwind CSS 4
- **State Management** : Angular Signals
- **Forms** : Reactive Forms
- **Routing** : Angular Router avec guards

### Backend & Services
- **Backend as a Service** : Supabase
  - Authentification (Email/Password)
  - Base de données PostgreSQL
  - Storage
- **HTTP Client** : Axios + RxJS
- **Validation** : Zod schemas
- **Notifications** : ngx-toastr

### DevOps & Qualité
- **Testing** : Vitest + Testing Library
- **Linting** : ESLint 9 (flat config)
- **Formatting** : Prettier
- **Git Hooks** : Husky + lint-staged
- **CI/CD** : Déploiement automatique sur Vercel

## 📂 Architecture du projet

```
JobTracker/
├── apps/
│   └── frontend/                 # Application principale Angular
│       └── src/
│           ├── app/              # Module principal
│           │   ├── components/   # Composants réutilisables (Header, Sidebar, etc.)
│           │   ├── guards/       # Guards de navigation (AuthGuard)
│           │   ├── pipes/        # Pipes personnalisés (status-style)
│           │   └── providers/    # Services globaux (Supabase client)
│           ├── auth/             # Feature d'authentification
│           │   └── components/   # Composants d'auth (login, register)
│           ├── features/         # Features métier
│           │   ├── candidatures/ # Gestion des candidatures
│           │   └── dashboard/    # Tableau de bord
│           └── environments/     # Configuration environnement
├── libs/
│   └── schemas-zod/              # Schémas de validation Zod partagés
├── public/                       # Assets statiques
└── tools/                        # Outils et scripts Nx
```

## 🧠 Compétences mises en œuvre

### Angular Moderne
- **Signals** : Gestion d'état réactive avec `signal()`, `computed()`, et `effect()`
- **Standalone Components** : Architecture moderne sans NgModules
- **Control Flow** : Utilisation de `@if`, `@for`, `@switch` (nouvelle syntaxe)
- **Input/Output Signals** : Communication entre composants avec `input()` et `output()`
- **Dependency Injection** : Injection moderne avec `inject()` au lieu du constructeur

### Patterns & Architecture
- **Feature-based architecture** : Organisation par fonctionnalités métier
- **Clean Architecture** : Séparation claire entre présentation, logique métier et données
- **Gateway Pattern** : Abstraction de l'accès aux données avec Supabase
- **Path Aliases** : Import propres avec `@apps/frontend/*` et `@libs/*`

### Reactive Programming
- **RxJS** : Gestion des flux asynchrones
- **Reactive Forms** : Formulaires avec validation dynamique
- **Async Pipe** : Gestion automatique des subscriptions

### Tooling & DevOps
- **Nx Monorepo** : Gestion optimisée des dépendances et du build
- **ESLint** : Configuration stricte avec règles personnalisées
- **Git Hooks** : Formatage automatique pre-commit
- **Testing** : Tests unitaires avec Vitest

## 🚀 Installation et lancement

### Prérequis
- Node.js >= 20
- pnpm >= 10

### 1. Cloner le dépôt

```bash
git clone https://github.com/kyoshiroDev/JobTracker.git
cd JobTracker
```

### 2. Installer les dépendances

```bash
pnpm install
```

### 3. Configuration Supabase

Créez un fichier `apps/frontend/src/environments/environment.ts` :

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'VOTRE_SUPABASE_URL',
  supabaseKey: 'VOTRE_SUPABASE_ANON_KEY'
};
```

### 4. Démarrer le serveur de développement

```bash
pnpm start
# ou
nx serve frontend
```

L'application sera accessible à l'adresse **http://localhost:4200/**

### 5. Build de production

```bash
pnpm build
# ou
nx build frontend
```

## 📜 Scripts disponibles

```bash
pnpm start              # Démarrer en mode développement
pnpm start:prod         # Démarrer avec config de production
pnpm build              # Build de production
pnpm test               # Lancer les tests
pnpm test:watch         # Tests en mode watch
pnpm lint               # Vérifier le code
pnpm format             # Formater le code
pnpm format:check       # Vérifier le formatage
```

## 🧪 Tests

Le projet utilise Vitest pour les tests unitaires :

```bash
# Tests en mode watch
pnpm test:watch

# Tests une fois avec coverage
pnpm test
```

## 📝 Conventions de code

- **ESLint** : Configuration stricte avec `@nx/enforce-module-boundaries`
- **Prettier** : Formatage automatique
- **Conventional Commits** : Messages de commit standardisés
- **TypeScript Strict Mode** : Configuration stricte activée

## 📄 À propos

Ce projet est un projet personnel développé pour démontrer mes compétences en développement frontend moderne avec Angular et l'écosystème Nx. Il reflète mes capacités à concevoir et développer une application web complète, de l'architecture à la mise en production.

## 👤 Auteur

**Kyoshiro**
- GitHub: [@kyoshiroDev](https://github.com/kyoshiroDev)
- Projet: [JobTracker](https://github.com/kyoshiroDev/JobTracker)

---

Développé avec ❤️ et Angular 21
