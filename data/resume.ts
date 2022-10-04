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
      ['React.js', 'TypeScript', 'Next.js'],
      ['Node.js', 'Lodash', 'Immer'],
      ['SASS', 'SCSS', 'CSS-in-JS'],
      ['API REST', 'GraphQL'],
      ['Shell', 'SSH', 'Docker'],
      ['Git', 'GitHub', 'GitLab'],
      ['UI', 'UX', 'Figma', 'Sketch'],
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
    title: 'Langues',
    items: ['Français : langue maternelle', 'Anglais : professionnel (écrit)'],
  },
  hobbies: {
    title: 'Passe-temps',
    items: [
      ['Go', 'Flutter', 'RSS'],
      ['Marche', 'Randonnée'],
      ['Cinéma', 'Jeux vidéo'],
    ],
  },
  profile: {
    title: 'Profil',
    content: [
      `Passionné d'informatique depuis mes études en mathématiques, j'ai
            principalement développé mes compétences en autodidacte. Je cherche
            un poste de développeur web.`,
    ],
  },
  educations: {
    title: 'Formation',
    items: [
      {
        period: '2007-2010',
        title: 'Bac +2 • Maths fondamentales',
        location: 'Université Montpellier 2 Sciences et techniques',
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
        period: '2020-2022',
        title: 'Freelance',
        content: [
          `Les missions sur lesquelles j'interviens vont de la mise en
                    place d'un formulaire de configuration post achat à la
                    refonte complète d'un site vitrine de réparation
                    téléphonique…`,
        ],
      },
      {
        period: '2020',
        title: 'Agence web • Studio Caramia • CDI',
        content: [
          `J'ai eu l'opportunité d'intervenir sur une plateforme de
                    travail en alternance, un CRM utilisé par un réseau
                    associatif, un jeu pour grand parc d'attraction, un site
                    événementiel pour un distributeur ayant pignon sur rue…`,
        ],
      },
      {
        period: '2018-2019',
        title: 'Agence web • Keole • CDI',
        content: [
          `J'ai eu l'occasion de développer une place de marché
                    immobilière, une plateforme collaborative d'élaboration de
                    projet immobilier en copropriété, un calendrier de
                    démarchage commercial, une FAQ intelligent pour réduire le
                    recours au SAV, un simulateur de consommation énergétique…`,
        ],
      },
    ],
  },
  projects_perso: {
    title: 'Projets personnels',
    items: [
      {
        title: 'App native • WebArchives',
        period: '2017-2020',
        content: [
          `Un lecteur d’archives web permettant de consulter hors
                    ligne des projets tels que Wikipédia, Wikisource, Stack
                    Overflow…`,
        ],
      },
    ],
  },
  experiences_other: {
    title: 'Autres expériences',
    items: [
      {
        title: 'Autodicate • Santé',
        period: '2010-2018',
        content: [
          `Contraint d'arrêter mes études pour des raisons de santé, j'ai tout
          de même continué à me former en autodidacte sur diverses technos,
          avant d'enfin me lancer professionnellement en tant que dev web.`,

          `Durant cette période, j'ai tout de même eu une activité
          professionnelle, mais dans un domaine n'ayant aucun rapport avec
          l'informatique, voilà pourquoi je préfère ne pas détailler cette
          expérience ici.`,
        ],
      },
    ],
  },
  footer: `Ce CV est optimisé pour être imprimé au format A4`,
}

export default resume
