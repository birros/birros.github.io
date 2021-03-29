const locales = {
  fr: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projets',
    'infos.date': 'Le ',
    'infos.authorInter': ' par ',
    'infos.authorSingle': 'Par ',
    'summary.more': 'Lire la suite',
    'opengraph.url': 'https://julienmuret.fr/',
    'opengraph.description': `Développeur Front-end Freelance, création de site internet ou d'apllication web avec React.js, Typescript et GraphQL`,
    'opengraph.imageAlt': `Capture d'écran de la page d'accueil`,
    'default.title': 'Julien Muret • Développeur Front-end',
    'hero.titleLeft': 'Développeur',
    'hero.titleRight': 'Front-end',
    'hero.subtitleLeft': 'Je donne vie à vos projets,',
    'hero.subtitleRight': 'pour vous… avec vous.',
    'contactButton.label': 'Contactez-moi',
    'bio.headerLeft': `Je m'appelle Julien,`,
    'bio.headerRight': 'ravis de vous rencontrer.',
    'bio.description': `
      Passionné d'informatique depuis mes études en mathématiques, j’ai
      principalement développé mes compétences en autodidacte. Riche
      d'expériences en agence web et au fil de projets réalisés au contact
      de différents clients j'ai acquis la conviction que la transparence,
      la rigueur et l'écoute peuvent déplacer des montagnes.
    `,
    'portfolio.header': 'Mes projets récents',
    'portfolio.descriptionTop': `
      Voici quelques projets techs sur lesquels je suis intervenu
      dernièrement.
    `,
    'portfolio.descriptionBottom': `
      Vous voulez en savoir plus ? Parlons-en directement…
    `,
    'portfolio.add': 'Ajoutons le votre…',
    'works.yvivre': `Une plateforme collaborative d’élaboration de projet immobilier en copropriété.`,
    'works.plugimmo': 'Une place de marché immobilière.',
    'works.comwatt': 'Un simulateur de consommation énergétique.',
    'works.muffin': 'Un CRM utilisé par un réseau associatif.',
    'works.walt': 'Une plateforme de travail en alternance.',
    'contact.header': 'Me contacter',
    'contact.description': `
      Pour me contacter veuillez utiliser un des liens suivants.
    `,
    'contact.email': 'Courriel',
    'footer.copyrith': 'Tous droits réservés',
    'footer.ogl': 'Shader extrait du framework OGL',
    'footer.pixabay': 'Images d’illustration issues de Pixabay',
    'footer.avataaars': 'Avatar généré grâce au Avataaars Generator',
  },
  en: {
    'nav.journal': 'Journal',
    'nav.projects': 'Projects',
    'infos.date': 'On ',
    'infos.authorInter': ' by ',
    'infos.authorSingle': 'By ',
    'summary.more': 'Read more',
    'opengraph.url': 'https://julienmuret.fr/en/',
    'opengraph.description': `Freelance Front-end developer, website or web application creation with React.js, Typescript and GraphQL`,
    'opengraph.imageAlt': `Screenshot of the homepage`,
    'default.title': 'Julien Muret • Front-end Developer',
    'hero.titleLeft': 'Front-end',
    'hero.titleRight': 'Developer',
    'hero.subtitleLeft': 'I bring your projects to life,',
    'hero.subtitleRight': 'for you… with you.',
    'contactButton.label': 'Contact me',
    'bio.headerLeft': `My name is Julien,`,
    'bio.headerRight': 'nice to meet you.',
    'bio.description': `
      Passionate about computers since my studies in mathematics, I mainly
      developed my skills as a self-taught person. With a wealth of
      experience in a web agency and in the course of projects carried out
      in contact with various clients, I have acquired the conviction that
      transparency, rigour and listening can move mountains.
    `,
    'portfolio.header': 'My recent projects',
    'portfolio.descriptionTop': `
      Here are some tech projects I've been working on lately.
    `,
    'portfolio.descriptionBottom': `
      Want to know more? Let's talk about it directly…
    `,
    'portfolio.add': `Let's add yours…`,
    'works.yvivre': `A collaborative platform for the development of real estate projects in co-ownership.`,
    'works.plugimmo': 'A real estate marketplace.',
    'works.comwatt': 'An energy consumption simulator.',
    'works.muffin': 'A CRM used by an association network.',
    'works.walt': 'A work-study platform.',
    'contact.header': 'Contact me',
    'contact.description': `
      To contact me please use one of the following links.
    `,
    'contact.email': 'Email',
    'footer.copyrith': 'All rights reserved',
    'footer.ogl': 'Shader extracted from the OGL framework',
    'footer.pixabay': 'Illustration from Pixabay',
    'footer.avataaars': 'Avatar generated with the Avataaars Generator',
  },
}

export type Langs = keyof typeof locales

export type Keys = keyof typeof locales['fr'] & keyof typeof locales['en']

export default locales
