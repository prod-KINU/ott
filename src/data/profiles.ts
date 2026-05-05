export type ProfileItem = {
  slug: string;
  name: string;
  role: { jp: string; en: string };
  image: string;
  alt: { jp: string; en: string };
  bio: { jp: string; en: string };
};

export const profiles: ProfileItem[] = [
  {
    slug: 'oike',
    name: 'oike',
    role: {
      jp: 'visual direction / film',
      en: 'visual direction / film'
    },
    image: '/images/about/oike-placeholder.svg',
    alt: {
      jp: 'oikeのプロフィール画像プレースホルダー',
      en: 'Profile placeholder image for oike'
    },
    bio: {
      jp: '映像の設計と視覚表現を中心に、対象の輪郭が静かに立ち上がるような画づくりを行う。光、余白、時間の流れを丁寧に扱い、説明しすぎない強度を探っている。',
      en: 'Focused on film structure and visual direction, oike creates images where the subject appears with quiet clarity. Their work treats light, space, and duration with care, seeking strength without overstatement.'
    }
  },
  {
    slug: 'teramachi',
    name: 'teramachi',
    role: {
      jp: 'art direction / composition',
      en: 'art direction / composition'
    },
    image: '/images/about/teramachi-placeholder.svg',
    alt: {
      jp: 'teramachiのプロフィール画像プレースホルダー',
      en: 'Profile placeholder image for teramachi'
    },
    bio: {
      jp: 'アートディレクションと構成を軸に、情報や素材の並び方を整える。静かな緊張感と触感を大切にしながら、作品の核が自然に伝わる状態を組み立てる。',
      en: 'Working through art direction and composition, teramachi shapes how information and material sit together. They build restrained, tactile arrangements that let the core of each work arrive naturally.'
    }
  }
];
