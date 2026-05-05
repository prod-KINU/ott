export const media = {
  homeHero: {
    type: 'image',
    src: '/images/home/hero-placeholder.svg',
    alt: {
      jp: 'KINUのメインビジュアルのプレースホルダー',
      en: 'Placeholder main visual for KINU'
    }
  },
  loading: [
    '/images/loading/loading-01.svg',
    '/images/loading/loading-02.svg',
    '/images/loading/loading-03.svg'
  ],
  notFound: {
    src: '/images/404/not-found-placeholder.svg',
    alt: {
      jp: 'ページが見つからないことを示すプレースホルダー画像',
      en: 'Placeholder image indicating that the page was not found'
    }
  }
} as const;
