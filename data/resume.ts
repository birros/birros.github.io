type Experience = {
  period: string
  title: string
  content: string[]
}

type Experiences = {
  title: string
  items: Experience[]
}

export type IResume = {
  header: {
    name: string
    job: string
  }
  infos: {
    title: string
    items: {
      type: string
      value: string
      link?: string
    }[]
  }
  skills: {
    title: string
    items: string[][]
  }
  qualities: {
    title: string
    items: string[][]
  }
  langs: {
    title: string
    items: string[]
  }
  hobbies: {
    title: string
    items: string[][]
  }
  profile: {
    title: string
    content: string[]
  }
  educations: {
    title: string
    items: {
      period: string
      title: string
      location: string
    }[]
  }
  experiences_pro: Experiences
  projects_perso: Experiences
  experiences_other: Experiences
  footer: string
}

const resume: IResume = {
  header: {
    name: 'Julien Muret',
    job: 'Développeur web',
  },
  infos: {
    title: 'Infos',
    items: [
      {
        type: 'birthday',
        value: '05 / 05 / 1989',
      },
      {
        type: 'mail',
        value: 'jmitineur@gmail.com',
        link: 'mailto:jmitineur@gmail.com',
      },
      {
        type: 'github',
        value: 'github.com/birros',
        link: 'https://github.com/birros',
      },
      {
        type: 'website',
        value: 'julienmuret.fr',
        link: 'https://julienmuret.fr',
      },
      {
        type: 'location',
        value: 'Agde, Hérault, Occitanie',
        link: 'geo:43.316667,3.466667',
      },
    ],
  },
  skills: {
    title: 'Compétences',
    items: [
      ['React.js', 'TypeScript', 'Node.js'],
      ['SASS', 'SCSS', 'CSS-in-JS'],
      ['Go', 'Dart', 'Flutter'],
      ['Next.js', 'Gatsby'],
      ['Lodash', 'Immer'],
      ['API REST', 'GraphQL'],
      ['Shell', 'SSH', 'Docker'],
      ['Git', 'GitHub', 'GitLab'],
      ['UI', 'UX', 'Figma'],
      ['Prettier', 'ESLint'],
      ['Redux', 'Recoil'],
      ['macOS', 'Linux'],
      ['Méthode agile', 'Kanban'],
    ],
  },
  qualities: {
    title: 'Qualités',
    items: [
      ['Autonomie', 'Rigueur'],
      ['Altruisme', 'Pédagogie'],
      ['Curiosité', 'Initiative'],
    ],
  },
  langs: {
    title: 'Compléments',
    items: [
      'Français : langue maternelle',
      'Anglais : professionnel (écrit)',
      'Permis : Catégorie B',
      'Télétravail : Favorable',
    ],
  },
  hobbies: {
    title: 'Passe-temps',
    items: [
      ['Marche', 'Randonnée'],
      ['Cinéma', 'Jeux vidéo'],
    ],
  },
  profile: {
    title: 'Profil',
    content: [
      `Passionné d'informatique et de mathématiques, avec une riche expérience
      en entreprise et en tant que travailleur indépendant, je suis à la
      recherche d'un poste de développeur web pour mettre mes compétences au
      service de projets stimulants et passionnants.`,
    ],
  },
  educations: {
    title: 'Formation',
    items: [
      {
        period: '2007-2010',
        title: 'Bac +2 • Maths fondamentales et appliquées',
        location: 'Université Montpellier II Sciences et techniques',
      },
      {
        period: '2007',
        title: 'Bac S Spé. Physique / Chimie',
        location: 'Lycée général et technologique Jean-Moulin de Draguignan',
      },
    ],
  },
  experiences_pro: {
    title: 'Expérience professionnelle',
    items: [
      {
        period: '2020-2023',
        title: 'Freelance',
        content: [
          `J'accompagne des entreprises dans la réalisation de projets
          multiples, de la mise en place d'un formulaire d'achat à la refonte
          complète d'un site vitrine…`,

          `Pour cela, je m'adapte aux méthodologies et demandes de mes clients
          tout en apportant mon savoir-faire et mon expérience dans le domaine,
          qu'il s'agisse de travail en autonomie ou en équipe.`,
        ],
      },
      {
        period: '2020',
        title: 'Agence web • Studio Caramia • CDI',
        content: [
          `J'ai eu l'opportunité d'intervenir sur une plateforme de travail en
          alternance, un CRM pour un réseau associatif, un jeu déployé sur
          l'intranet d'un parc d'attraction, un site événementiel pour un grand
          distributeur…`,
        ],
      },
      {
        period: '2018-2019',
        title: 'Agence web • Keole • CDI',
        content: [
          `J'ai eu l'occasion de développer une place de marché immobilière, une
          plateforme collaborative d'élaboration de projet immobilier en
          copropriété, un calendrier de démarchage commercial, une FAQ
          intelligent pour réduire le recours au SAV, un simulateur de
          consommation énergétique…`,
        ],
      },
    ],
  },
  projects_perso: {
    title: 'Projets personnels',
    items: [
      {
        title: 'App • WebArchives',
        period: '2017-2023',
        content: [
          `Un lecteur d’archives web permettant de consulter hors ligne des
          projets tels que Wikipédia, Wikisource, Stack Overflow…`,
        ],
      },
    ],
  },
  experiences_other: {
    title: 'Autres expériences',
    items: [
      {
        title: 'Restauration',
        period: '2010-2018',
        content: [
          `Contraint d'arrêter mes études pour des raisons de santé, j'ai tout
          de même continué à me former en autodidacte sur diverses technologies,
          tout en travaillant dans la restauration, avant de me lancer
          professionnellement dans l'informatique en tant que développeur web.`,
        ],
      },
    ],
  },
  footer: `Ce CV est optimisé pour être imprimé au format A4`,
}

export default resume
