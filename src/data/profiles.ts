export type ProfileItem = {
  slug: string;
  name: string;
  role: { jp: string; en: string };
  image: string;
  alt: { jp: string; en: string };
  bio: { jp: string; en: string };
  expertise: string[];
};

export const profiles: ProfileItem[] = [
  {
    slug: 'oike',
    name: 'oike',
    role: {
      jp: 'ディレクション',
      en: 'Direction'
    },
    image: '/images/about/oike.png',
    alt: {
      jp: 'oikeのプロフィール画像',
      en: 'Profile image of oike'
    },
    bio: {
      jp: '1993年生まれ。富山県南砺市出身。\n立命館大学卒業。富山県在住。\n映像の撮影から編集・加工まで担当しています。\n映像の設計と視覚表現を中心に、対象の輪郭が静かに立ち上がるような画づくりを行います。',
      en: 'Born in 1993 in Nanto, Toyama.\nGraduated from Ritsumeikan University. Based in Toyama.\nHandles video shooting, editing, and post-production.\nWith a focus on visual planning and expression, creates images in which the contours of the subject quietly come into view.'
    },
    expertise: ['AfterEffects', 'PremierePro', 'Illustrator', 'AbletonLive']
  },
  {
    slug: 'teramachi',
    name: 'teramachi',
    role: {
      jp: 'バックエンド',
      en: 'Backend'
    },
    image: '/images/about/teramachi.png',
    alt: {
      jp: 'teramachiのプロフィール画像',
      en: 'Profile image of teramachi'
    },
    bio: {
      jp: '1995年生まれ。アメリカ ホワイトプレーンズ出身。\n立命館大学卒業、大阪工業大学大学院修了。大阪在住。\nイラスト、画像編集、楽曲制作を担当しています。\n視覚表現と構成設計を軸に、作品の印象や情報の流れを整えます。',
      en: 'Born in 1995 in White Plains, United States.\nGraduated from Ritsumeikan University and completed graduate studies at Osaka Institute of Technology. Based in Osaka.\n\nResponsible for illustration, image editing, and music production.\nWith a focus on visual expression and structural design, organizes the tone of each work and the flow of information.'
    },
    expertise: ['Illustrator', 'Photoshop', 'Python', 'AbletonLive']
  },
  {
    slug: 'kamo',
    name: 'kamo',
    role: {
      jp: 'コンポーザー',
      en: 'Composer'
    },
    image: '/images/about/kamo.png',
    alt: {
      jp: 'kamoのプロフィール画像',
      en: 'Profile image of kamo'
    },
    bio: {
      jp: '1993年生まれ。富山県砺波市出身。\n中部大学卒業。富山県在住。\n楽曲制作及び3Dモデリングを担当しています。\n音の構成と展開設計を中心に、作品全体のリズムや温度感を整えるサウンドメイクを行います。',
      en: 'Born in 1993 in Tonami, Toyama.\nStudied at Chubu University. Based in Toyama.\nResponsible for music production and 3D modeling.\nThrough sound structure and development, shapes the rhythm and atmosphere of each work as a whole.'
    },
    expertise: ['Cubase', 'Blender', 'Illustrator']
  }
];
