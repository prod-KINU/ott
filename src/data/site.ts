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
    email: 'hello@example.com',
    instagram: 'https://www.instagram.com/'
  },
  nav: [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' }
  ]
} as const;
