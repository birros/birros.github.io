const locales = {
  fr: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projets',
    'infos.date': 'Le ',
    'infos.authorInter': ' par ',
    'infos.authorSingle': 'Par ',
    'summary.more': 'Lire la suite',
    'opengraph.url': 'https://julienmuret.fr/',
    'opengraph.description': `Développeur web Freelance, création de site internet ou d'apllication web avec React.js, Typescript et GraphQL`,
    'opengraph.imageAlt': `Capture d'écran de la page d'accueil`,
    'default.title': 'Julien Muret • Développeur web',
    'footer.copyrith': 'Tous droits réservés',
  },
  en: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projects',
    'infos.date': 'On ',
    'infos.authorInter': ' by ',
    'infos.authorSingle': 'By ',
    'summary.more': 'Read more',
    'opengraph.url': 'https://julienmuret.fr/en/',
    'opengraph.description': `Freelance Web developer, website or web application creation with React.js, Typescript and GraphQL`,
    'opengraph.imageAlt': `Screenshot of the homepage`,
    'default.title': 'Julien Muret • Web Developer',
    'footer.copyrith': 'All rights reserved',
  },
}

export type Langs = keyof typeof locales

export type Keys = keyof typeof locales['fr'] & keyof typeof locales['en']

export default locales
