const locales = {
  fr: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projets',
    'infos.date': 'Le ',
    'infos.authorInter': ' par ',
    'infos.authorSingle': 'Par ',
    'summary.more': 'Lire la suite',
    'default.title': 'Julien Muret • Développeur Front-end',
  },
  en: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projects',
    'infos.date': 'On ',
    'infos.authorInter': ' by ',
    'infos.authorSingle': 'By ',
    'summary.more': 'Read more',
    'default.title': 'Julien Muret • Front-end Developer',
  },
}

export type Langs = keyof typeof locales

export type Keys = keyof typeof locales['fr'] & keyof typeof locales['en']

export default locales
