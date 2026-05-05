export const jp = {
  nav: {
    home: 'home',
    about: 'about us',
    projects: 'projects'
  },
  common: {
    langLabel: '表示言語',
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
        title: 'selected works',
        text: '形、機能、精度を静かに探るプロジェクトの記録。',
        link: 'view projects'
      },
      team: {
        title: 'about the team',
        text: 'oikeとteramachiの考え方、制作姿勢、背景について。',
        link: 'learn more'
      },
      contact: {
        title: 'contact',
        text: '制作や展示のご相談があれば、お気軽にご連絡ください。',
        link: 'get in touch'
      }
    }
  },
  about: {
    title: 'about us',
    intro: 'KINU is a creative studio of oike and teramachi, exploring form, function, and feeling.',
    collaboration: '意図、クラフト、時間に耐える設計を大切にするプロジェクトに参加しています。',
    contact: 'get in touch'
  },
  projects: {
    title: 'projects',
    intro: 'a curated archive of works.',
    empty: 'プロジェクトが選択されていません。',
    meta: {
      date: 'year',
      client: 'client',
      medium: 'medium',
      category: 'category'
    }
  },
  footer: {
    contact: 'contact',
    social: 'instagram',
    copyright: '© 2024 KINU\nAll rights reserved.'
  },
  notFound: {
    title: '404',
    message: 'ページが見つかりませんでした。',
    link: 'homeへ戻る'
  },
  loading: {
    label: '読み込み中'
  }
} as const;
