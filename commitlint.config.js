module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Types autorisés
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],

    // Le scope est optionnel
    'scope-empty': [0],

    // Message en minuscules
    'subject-case': [2, 'always', ['lower-case']],

    // Pas de point à la fin
    'subject-full-stop': [2, 'never', '.'],

    // Longueur max du sujet
    'subject-max-length': [2, 'always', 72],

    // Type obligatoire
    'type-empty': [2, 'never'],

    // Sujet obligatoire
    'subject-empty': [2, 'never'],
  },
};
