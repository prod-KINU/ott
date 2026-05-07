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

const defaultMedium = {
  jp: '映像 / デザイン',
  en: 'video / design'
};

const defaultCategory = {
  jp: 'comedy / visual',
  en: 'comedy / visual'
};

export const projects: ProjectItem[] = [
  {
    slug: 'kawahara-quiz-season-1',
    title: {
      jp: '川原くんのクイズさん（シーズン1）',
      en: 'Kawahara-kun no Quiz-san (Season 1)'
    },
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '川原くんのクイズさん（シーズン1）の制作実績です。番組の雰囲気に合わせ、映像とビジュアルの印象を整えました。',
      en: 'A production work for Kawahara-kun no Quiz-san (Season 1), shaping the video and visual tone to match the character of the program.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '川原くんのクイズさん（シーズン2_FANY版）の制作実績です。配信向けの見え方を意識し、情報とテンポを整理しました。',
      en: 'A production work for the FANY version of Kawahara-kun no Quiz-san (Season 2), organizing information and pacing for streaming.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '川原くんのクイズさん（シーズン2_放送版）の制作実績です。放送版としての構成に合わせ、視覚要素の流れを調整しました。',
      en: 'A production work for the broadcast version of Kawahara-kun no Quiz-san (Season 2), adjusting the visual flow for the on-air structure.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: 'くっきー！川原の漫才育成の道1の制作実績です。企画の空気感を受け取り、映像全体の見え方を整えました。',
      en: 'A production work for Cookie! Kawahara: The Road to Manzai Training 1, shaping the overall visual tone around the atmosphere of the project.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: 'くっきー！川原の漫才育成の道2の制作実績です。シリーズとしてのつながりを保ちながら、各場面の印象を整理しました。',
      en: 'A production work for Cookie! Kawahara: The Road to Manzai Training 2, keeping continuity with the series while organizing the impression of each scene.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: 'くっきー！川原の漫才育成の道3の制作実績です。シリーズの流れを受け継ぎ、映像とデザインのトーンを調整しました。',
      en: 'A production work for Cookie! Kawahara: The Road to Manzai Training 3, carrying the series forward while refining the video and design tone.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '仮の作品説明です。企画の内容に合わせて、映像、デザイン、音楽の要素を整理した制作実績です。',
      en: 'Temporary project copy. This work organizes video, design, and music elements around the concept of the project.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '仮の作品説明です。昼公演の印象に合わせて、視覚表現と情報の流れを調整した制作実績です。',
      en: 'Temporary project copy. This work adjusts visual expression and information flow around the tone of the day performance.'
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
    date: '2026',
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '仮の作品説明です。夜公演の空気感に合わせて、映像とデザインのトーンを整えた制作実績です。',
      en: 'Temporary project copy. This work shapes the video and design tone around the atmosphere of the night performance.'
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
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '仮の作品説明です。企画タイトルの強さを軸に、映像とグラフィックの印象を組み立てた制作実績です。',
      en: 'Temporary project copy. This work builds video and graphic impressions around the strength of the project title.'
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
    client: 'KINU',
    medium: defaultMedium,
    category: defaultCategory,
    description: {
      jp: '仮の作品説明です。チャンネルの入り口となる映像として、テンポと印象を整えた制作実績です。',
      en: 'Temporary project copy. This opening video organizes pacing and visual tone as the entrance to the channel.'
    },
    thumbnail: '/images/projects/the_opening.png',
    mainImage: '/images/projects/the_opening.png',
    alt: {
      jp: '川原チャンネルOPの作品画像',
      en: 'Project image for Kawahara Channel Opening'
    }
  }
];
