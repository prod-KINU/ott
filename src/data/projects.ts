export type ProjectItem = {
  slug: string;
  title: { jp: string; en: string };
  date: string;
  client: string;
  medium?: { jp: string; en: string };
  category: CategoryItem[];
  description: { jp: string; en: string };
  thumbnail: string;
  mainImage: string;
  alt: { jp: string; en: string };
  link?: string;
};

export type CategoryItem = {
  key: string;
  label: { jp: string; en: string };
};

const defaultMedium = {
  jp: '映像 / デザイン',
  en: 'video / design'
};

export const projectCategories = [
  'Illustration',
  'Graphic Design',
  'Logo Design',
  'Photography',
  'Cinematography',
  'Animation',
  '3D',
  'Coding',
  'Composition',
  'Direction'
].map((label) => ({
  key: label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  label: {
    jp: label,
    en: label
  }
})) satisfies CategoryItem[];

function categories(...labels: string[]) {
  return labels.map((label) => {
    const category = projectCategories.find((item) => item.label.en === label);
    if (!category) throw new Error(`Unknown project category: ${label}`);
    return category;
  });
}

export const projects: ProjectItem[] = [
  {
    slug: 'kawahara-quiz-season-1',
    title: {
      jp: '川原くんのクイズさん（シーズン1）',
      en: 'Kawahara-kun no Quiz-san (Season 1)'
    },
    date: '2022',
    client: '北陸朝日放送株式会社',
    medium: defaultMedium,
    category: categories('Illustration', 'Logo Design', 'Animation', 'Direction'),
    description: {
      jp: '川原くんのクイズさん（シーズン1）のロゴデザイン、及びOP映像を担当しました。',
      en: 'We created the logo design and opening video for "Kawahara-kun no Quiz-san (Season 1)".'
    },
    thumbnail: '/images/projects/Quiz_pt1.png',
    mainImage: '/images/projects/Quiz_pt1.png',
    alt: {
      jp: '川原くんのクイズさん（シーズン1）の作品画像',
      en: 'Project image for Kawahara-kun no Quiz-san (Season 1)'
    }
  },
  {
    slug: 'kawahara-quiz-season-2-fany',
    title: {
      jp: '川原くんのクイズさん（シーズン2_FANY版）',
      en: 'Kawahara-kun no Quiz-san (Season 2, FANY Version)'
    },
    date: '2024',
    client: '株式会社FANY',
    medium: defaultMedium,
    category: categories('Illustration', 'Logo Design', 'Animation', 'Composition', 'Direction'),
    description: {
      jp: '川原くんのクイズさん（シーズン2_FANY版）のロゴデザイン、OP映像、及びOP曲を担当しました。',
      en: 'We created the logo design, opening video, and opening theme for "Kawahara-kun no Quiz-san (Season 2, FANY Version)".'
    },
    thumbnail: '/images/projects/Quiz_pt2_streaming.png',
    mainImage: '/images/projects/Quiz_pt2_streaming.png',
    alt: {
      jp: '川原くんのクイズさん（シーズン2_FANY版）の作品画像',
      en: 'Project image for Kawahara-kun no Quiz-san (Season 2, FANY Version)'
    }
  },
  {
    slug: 'kawahara-quiz-season-2-broadcast',
    title: {
      jp: '川原くんのクイズさん（シーズン2_放送版）',
      en: 'Kawahara-kun no Quiz-san (Season 2, Broadcast Version)'
    },
    date: '2024',
    client: '北陸朝日放送',
    medium: defaultMedium,
    category: categories('Illustration', 'Logo Design', 'Animation', 'Direction'),
    description: {
      jp: '川原くんのクイズさん（シーズン2_放送版）のロゴデザイン、及びOP映像を担当しました。',
      en: 'We created the logo design and opening video for "Kawahara-kun no Quiz-san (Season 2, Broadcast Version)".'
    },
    thumbnail: '/images/projects/Quiz_pt2_broadcast.png',
    mainImage: '/images/projects/Quiz_pt2_broadcast.png',
    alt: {
      jp: '川原くんのクイズさん（シーズン2_放送版）の作品画像',
      en: 'Project image for Kawahara-kun no Quiz-san (Season 2, Broadcast Version)'
    }
  },
  {
    slug: 'cookie-kawahara-manzai-road-1',
    title: {
      jp: 'くっきー！川原の漫才育成の道1',
      en: 'Cookie! Kawahara: The Road to Manzai Training 1'
    },
    date: '2024',
    client: '吉本興業株式会社',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', 'Coding', 'Composition', 'Direction'),
    description: {
      jp: 'くっきー！川原の漫才育成の道のOP映像を担当しました。',
      en: 'We created the opening video for "Cookie! Kawahara: The Road to Manzai nurturing Ⅰ".'
    },
    thumbnail: '/images/projects/the_way_pt1.png',
    mainImage: '/images/projects/the_way_pt1.png',
    alt: {
      jp: 'くっきー！川原の漫才育成の道1の作品画像',
      en: 'Project image for Cookie! Kawahara: The Road to Manzai Training 1'
    }
  },
  {
    slug: 'cookie-kawahara-manzai-road-2',
    title: {
      jp: 'くっきー！川原の漫才育成の道2',
      en: 'Cookie! Kawahara: The Road to Manzai Training 2'
    },
    date: '2025',
    client: '吉本興業株式会社',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', 'Coding', 'Composition', 'Direction'),
    description: {
      jp: 'くっきー！川原の漫才育成の道のOP映像を担当しました。',
      en: 'We created the opening video for "Cookie! Kawahara: The Road to Manzai nurturing Ⅱ".'
    },
    thumbnail: '/images/projects/the_way_pt2.png',
    mainImage: '/images/projects/the_way_pt2.png',
    alt: {
      jp: 'くっきー！川原の漫才育成の道2の作品画像',
      en: 'Project image for Cookie! Kawahara: The Road to Manzai Training 2'
    }
  },
  {
    slug: 'cookie-kawahara-manzai-road-3',
    title: {
      jp: 'くっきー！川原の漫才育成の道3',
      en: 'Cookie! Kawahara: The Road to Manzai Training 3'
    },
    date: '2025',
    client: '吉本興業株式会社',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', 'Coding', 'Composition', 'Direction'),
    description: {
      jp: 'くっきー！川原の漫才育成の道のOP映像を担当しました。',
      en: 'We created the opening video for "Cookie! Kawahara: The Road to Manzai nurturing Ⅲ".'
    },
    thumbnail: '/images/projects/the_way_pt3.png',
    mainImage: '/images/projects/the_way_pt3.png',
    alt: {
      jp: 'くっきー！川原の漫才育成の道3の作品画像',
      en: 'Project image for Cookie! Kawahara: The Road to Manzai Training 3'
    }
  },
  {
    slug: 'kawahara-and-mera',
    title: {
      jp: '川原と米良',
      en: 'Kawahara and Mera'
    },
    date: '2025',
    client: '合同会社MorMotNo',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', '3D', 'Coding', 'Composition', 'Direction'),
    description: {
      jp: '川原と米良のOP映像、及びOP曲を担当しました。',
      en: 'We created the opening video and opening theme for "Kawahara and Mera".'
    },
    thumbnail: '/images/projects/versus.png',
    mainImage: '/images/projects/versus.png',
    alt: {
      jp: '川原と米良の作品画像',
      en: 'Project image for Kawahara and Mera'
    }
  },
  {
    slug: 'beyond-comedy-day',
    title: {
      jp: 'お笑いの向こう側の中にある（昼公演）',
      en: 'Inside the Other Side of Comedy (Day Performance)'
    },
    date: '2025',
    client: '合同会社MorMotNo',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', 'Composition', 'Direction'),
    description: {
      jp: 'お笑いの向こう側の中にある（昼公演）のOP映像、及びOP曲を担当しました。',
      en: 'We created the opening video and opening theme for "Inside the Other Side of Comedy" (Day Performance).'
    },
    thumbnail: '/images/projects/day.png',
    mainImage: '/images/projects/day.png',
    alt: {
      jp: 'お笑いの向こう側の中にある（昼公演）の作品画像',
      en: 'Project image for Inside the Other Side of Comedy (Day Performance)'
    }
  },
  {
    slug: 'beyond-comedy-night',
    title: {
      jp: 'お笑いの向こう側の中にある（夜公演）',
      en: 'Inside the Other Side of Comedy (Night Performance)'
    },
    date: '2025',
    client: '合同会社MorMotNo',
    medium: defaultMedium,
    category: categories('Illustration', 'Animation', 'Composition', 'Direction'),
    description: {
      jp: 'お笑いの向こう側の中にある（夜公演）のOP映像、及びOP曲を担当しました。',
      en: 'We created the opening video and opening theme for "Inside the Other Side of Comedy" (Night Performance).'
    },
    thumbnail: '/images/projects/night.png',
    mainImage: '/images/projects/night.png',
    alt: {
      jp: 'お笑いの向こう側の中にある（夜公演）の作品画像',
      en: 'Project image for Inside the Other Side of Comedy (Night Performance)'
    }
  },
  {
    slug: 'news-crisis',
    title: {
      jp: 'NEWSクライシス',
      en: 'NEWS Crisis'
    },
    date: '2026',
    client: 'テレビ大阪株式会社',
    medium: defaultMedium,
    category: categories('Logo Design', 'Animation'),
    description: {
      jp: 'NEWSクライシスのロゴデザイン、及びモーショングラフィックを担当しました。',
      en: 'We created the logo design and motion graphics for "NEWS Crisis".'
    },
    thumbnail: '/images/projects/crisis.png',
    mainImage: '/images/projects/crisis.png',
    alt: {
      jp: 'NEWSクライシスの作品画像',
      en: 'Project image for NEWS Crisis'
    }
  },
  {
    slug: 'kawahara-channel-opening',
    title: {
      jp: '川原チャンネルOP',
      en: 'Kawahara Channel Opening'
    },
    date: '2026',
    client: '合同会社MorMotNo',
    medium: defaultMedium,
    category: categories('Animation', 'Composition', 'Direction'),
    description: {
      jp: '川原チャンネルのOPを担当しました。'
      en: 'We created the opening video and opening theme for Kawahara Channel.'
    },
    thumbnail: '/images/projects/the_opening.png',
    mainImage: '/images/projects/the_opening.png',
    alt: {
      jp: '川原チャンネルOPの作品画像',
      en: 'Project image for Kawahara Channel Opening'
    }
  }
];
