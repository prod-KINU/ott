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
    eyebrow: 'Yes! We Have No Bananas',
    title: 'KINU',
    intro: 'portfolio of oike, teramachi & kamo',
    cta: 'view projects',
    panels: {
      works: {
        title: 'works',
        text: '映像、デザイン、音楽を中心とした制作実績を紹介しています。',
        link: 'view projects'
      },
      team: {
        title: 'about the team',
        text: 'oike、teramachi、kamoについて。',
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
    intro: 'KINUは、oike・teramachi・kamoによるクリエイティブユニットであり、形、機能、そして感覚を探求しています。',
    collaboration: '映像・フライヤー・ロゴ・楽曲制作のご相談を承っております。\nお気軽にご連絡ください。',
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
    message: 'ページが見つかりませんでした。',
    link: 'homeへ戻る'
  },
  loading: {
    label: '読み込み中'
  }
} as const;
