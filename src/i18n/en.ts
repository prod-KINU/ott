export const en = {
  nav: {
    home: 'home',
    about: 'about us',
    projects: 'projects'
  },
  common: {
    langLabel: 'Language',
    menu: 'menu',
    close: 'close',
    back: 'back',
    openProject: 'open project',
    homeLink: 'home'
  },
  home: {
    eyebrow: 'creative team',
    title: 'KINU',
    intro: 'portfolio of oike & teramachi',
    cta: 'view projects',
    panels: {
      works: {
        title: 'works',
        text: 'A selection of works across video, design, and music.',
        link: 'view projects'
      },
      team: {
        title: 'about the team',
        text: 'We are a small creative team working across video, design, and music. Moving between disciplines, we shape each project in the way that suits it best.',
        link: 'learn more'
      },
      contact: {
        title: 'contact',
        text: "Have a project in mind? We'd love to hear from you.",
        link: 'get in touch'
      }
    }
  },
  about: {
    title: 'about us',
    intro: 'KINU is a creative studio of oike and teramachi, exploring form, function, and feeling.',
    collaboration: 'Available for video production, flyer design, logo design, and music production. Please feel free to reach out.',
    contact: 'get in touch'
  },
  projects: {
    title: 'projects',
    intro: 'a curated archive of works.',
    empty: 'No project selected.',
    meta: {
      date: 'year',
      client: 'client',
      medium: 'medium',
      category: 'category'
    },
    filters: {
      all: 'all',
      label: 'category filter'
    },
    pagination: {
      previous: 'prev',
      next: 'next',
      separator: '/'
    }
  },
  footer: {
    contact: 'contact',
    social: 'instagram',
    copyright: '© 2026 KINU\nAll rights reserved.'
  },
  notFound: {
    title: '404',
    message: 'The page could not be found.',
    link: 'return home'
  },
  loading: {
    label: 'loading'
  }
} as const;
