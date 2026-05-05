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
      jp: 'ディレクション/連絡窓口',
      en: 'Creative Direction / Point of Contact'
    },
    image: '/images/about/oike-placeholder.svg',
    alt: {
      jp: 'oikeのプロフィール画像プレースホルダー',
      en: 'Profile placeholder image for oike'
    },
    bio: {
      jp: '1993年生まれ。富山県出身。\n立命館大学出身。富山在住。\n映像の撮影から編集・加工まで担当しています。\n映像の設計と視覚表現を中心に、対象の輪郭が静かに立ち上がるような画づくりを行います。',
      en: 'Born in 1993 in Toyama, Japan.\nGraduated from Ritsumeikan University. Based in Toyama.\nHandles the full process of video production, from shooting to editing and post-production. With a focus on visual design and cinematic expression, creates images that quietly bring the contours of the subject into view.'
    },
    expertise: ['After Effects', 'Premiere Pro', 'Blender', 'Ableton Live']
  },
  {
    slug: 'teramachi',
    name: 'teramachi',
    role: {
      jp: 'バックエンド/経理担当',
      en: 'Backend Operations / Accounting'
    },
    image: '/images/about/teramachi-placeholder.svg',
    alt: {
      jp: 'teramachiのプロフィール画像プレースホルダー',
      en: 'Profile placeholder image for teramachi'
    },
    bio: {
      jp: '1995年生まれ。アメリカ出身。\n立命館大学卒業、大阪工業大学大学院修了。大阪在住。\nイラスト、画像編集、音響を担当しています。\n視覚表現と構成設計を軸に、作品の印象や情報の流れを整えます。',
      en: 'Born in 1995 in White Planes, United States.\nGraduated from Ritsumeikan University and completed graduate studies at Osaka Institute of Technology. Based in Osaka.\nResponsible for illustration, image editing, and sound.\nWith a focus on visual expression and compositional design, shapes the tone of each work and the flow of information. From an art direction perspective, carefully organizes how materials and elements are arranged.'
    },
    expertise: ['Illustrator', 'Photoshop', 'Python', 'Ableton Live']
  }
];
