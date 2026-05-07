export type Lang = 'jp' | 'en';

export const site = {
  name: 'KINU',
  description: {
    jp: 'クリエイティブチーム : KINU',
    en: 'Creative team : KINU'
  },
  logo: {
    dark: '/images/logo/mainlogo.png',
    light: '/images/logo/kinu-logo-light.svg'
  },
  contact: {
    email: 'prod.kinu@gmail.com',
    instagram: 'https://www.instagram.com/prod.kinu?igsh=d3V3eGhsbTl3NHB5'
  },
  nav: [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' }
  ]
} as const;
