export type Lang = 'jp' | 'en';

export const site = {
  name: 'KINU',
  description: {
    jp: '映像と空間のあいだで、静かな質感を設計するクリエイティブチーム。',
    en: 'A creative team designing quiet textures across film and spatial expression.'
  },
  logo: {
    dark: '/images/logo/kinu-logo.svg',
    light: '/images/logo/kinu-logo-light.svg'
  },
  contact: {
    email: 'hello@example.com',
    instagram: 'https://www.instagram.com/'
  },
  nav: [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' }
  ]
} as const;
