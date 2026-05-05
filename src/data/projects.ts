export type ProjectItem = {
  slug: string;
  title: { jp: string; en: string };
  date: string;
  client: string;
  category: { jp: string; en: string };
  description: { jp: string; en: string };
  thumbnail: string;
  mainImage: string;
  alt: { jp: string; en: string };
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: 'project-01',
    title: {
      jp: '光の標本',
      en: 'Light Specimen'
    },
    date: '2026',
    client: 'Sample Client',
    category: {
      jp: 'film / installation',
      en: 'film / installation'
    },
    description: {
      jp: '光の移ろいを観察するための短編映像と展示構成。無機質な素材の表面に残る微細な変化を、一定の距離から記録したプロジェクトです。',
      en: 'A short film and installation study observing shifts in light. The project records subtle changes left on industrial surfaces from a steady, measured distance.'
    },
    thumbnail: '/images/projects/project-01-thumb.svg',
    mainImage: '/images/projects/project-01-main.svg',
    alt: {
      jp: '光の標本の作品画像プレースホルダー',
      en: 'Placeholder image for Light Specimen'
    },
    link: 'https://example.com'
  },
  {
    slug: 'kinu-film-title',
    title: {
      jp: 'KINU Film Title',
      en: 'KINU Film Title'
    },
    date: '2025',
    client: 'Independent',
    category: {
      jp: 'moving image',
      en: 'moving image'
    },
    description: {
      jp: '人物や場所の説明から少し離れ、気配そのものを映像として組み立てた作品。反復する動きと余白を使い、記憶の輪郭を静かに扱っています。',
      en: 'A moving image work that steps away from direct explanation of people or places, composing presence itself through repeated motion and restrained space.'
    },
    thumbnail: '/images/projects/project-02-thumb.svg',
    mainImage: '/images/projects/project-02-main.svg',
    alt: {
      jp: 'KINU Film Titleの作品画像プレースホルダー',
      en: 'Placeholder image for KINU Film Title'
    }
  },
  {
    slug: 'project-03',
    title: {
      jp: '余白の編集',
      en: 'Editing the Margin'
    },
    date: '2024',
    client: 'Studio Sample',
    category: {
      jp: 'art direction',
      en: 'art direction'
    },
    description: {
      jp: '紙面、映像、展示導線を横断して、情報量を抑えながら印象の残り方を設計したアートディレクション。整理された余白を主要な素材として扱いました。',
      en: 'An art direction project across print, film, and exhibition flow, shaping how impressions remain while reducing visual noise. Ordered space becomes a primary material.'
    },
    thumbnail: '/images/projects/project-03-thumb.svg',
    mainImage: '/images/projects/project-03-main.svg',
    alt: {
      jp: '余白の編集の作品画像プレースホルダー',
      en: 'Placeholder image for Editing the Margin'
    }
  }
];
