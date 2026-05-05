export type ProjectItem = {
  slug: string;
  title: { jp: string; en: string };
  date: string;
  client: string;
  medium?: { jp: string; en: string };
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
    medium: {
      jp: 'video / design',
      en: 'video / design'
    },
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
    medium: {
      jp: 'moving image',
      en: 'moving image'
    },
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
    medium: {
      jp: 'motion / visual',
      en: 'motion / visual'
    },
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
  },
  {
    slug: 'project-04',
    title: {
      jp: '構造の庭',
      en: 'Structural Garden'
    },
    date: '2024',
    client: 'Sample',
    medium: {
      jp: 'installation',
      en: 'installation'
    },
    category: {
      jp: 'space / object',
      en: 'space / object'
    },
    description: {
      jp: '素材の重なりと視線の移動から、静かな構造を立ち上げる空間プロジェクト。余白の中にある境界を観察します。',
      en: 'A spatial project building a quiet structure through material layers and movement of sight, observing boundaries inside open space.'
    },
    thumbnail: '/images/projects/project-04-thumb.svg',
    mainImage: '/images/projects/project-04-main.svg',
    alt: {
      jp: '構造の庭の作品画像プレースホルダー',
      en: 'Placeholder image for Structural Garden'
    }
  },
  {
    slug: 'project-05',
    title: {
      jp: '白い反復',
      en: 'White Repetition'
    },
    date: '2023',
    client: 'Sample',
    medium: {
      jp: 'visual study',
      en: 'visual study'
    },
    category: {
      jp: 'texture / image',
      en: 'texture / image'
    },
    description: {
      jp: '同じ素材が少しずつ異なる表情を見せる瞬間を集めた視覚研究。反復と差異のあいだにある感触を扱います。',
      en: 'A visual study collecting moments where the same material reveals slightly different expressions, working between repetition and difference.'
    },
    thumbnail: '/images/projects/project-05-thumb.svg',
    mainImage: '/images/projects/project-05-main.svg',
    alt: {
      jp: '白い反復の作品画像プレースホルダー',
      en: 'Placeholder image for White Repetition'
    }
  },
  {
    slug: 'project-06',
    title: {
      jp: '記録のかたち',
      en: 'Form of Record'
    },
    date: '2023',
    client: 'KINU',
    medium: {
      jp: 'publication',
      en: 'publication'
    },
    category: {
      jp: 'book / sound',
      en: 'book / sound'
    },
    description: {
      jp: '映像と音の記録を、紙とオブジェクトの形式へ置き換えるための試作。保管される時間の手触りを設計します。',
      en: 'A prototype translating records of film and sound into paper and object form, designing the tactile feeling of stored time.'
    },
    thumbnail: '/images/projects/project-06-thumb.svg',
    mainImage: '/images/projects/project-06-main.svg',
    alt: {
      jp: '記録のかたちの作品画像プレースホルダー',
      en: 'Placeholder image for Form of Record'
    }
  }
];
