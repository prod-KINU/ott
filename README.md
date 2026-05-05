# KINU Portfolio 編集プロトコル

このドキュメントは、KINUメンバーがテキスト、画像、作品情報を更新するための共有メモです。  
基本的に `dist/` や `node_modules/` は編集しません。編集するのは `src/` と `public/` 配下です。

## まず覚えること

- 画像ファイルは `public/images/` に置きます。
- 画面に出す情報は主に `src/data/` と `src/i18n/` を編集します。
- 画像パスは `/images/...` 形式で書きます。`/ott/images/...` とは書きません。
- GitHub Pagesの `/ott/` サブパス対応はコード側で処理しています。
- `dist/` は `npm run build` で自動生成されるため、手動編集しません。

## よく編集するファイル

| 目的 | 編集ファイル |
| --- | --- |
| サイト名、ロゴ、連絡先、Instagram | `src/data/site.ts` |
| Homeメディア、Loading画像、404画像 | `src/data/media.ts` |
| Aboutのメンバー情報 | `src/data/profiles.ts` |
| Projectsの作品情報 | `src/data/projects.ts` |
| JPのUI文言 | `src/i18n/jp.ts` |
| ENのUI文言 | `src/i18n/en.ts` |
| 画像ファイル本体 | `public/images/` |

## 画像の置き場所

| 用途 | フォルダ |
| --- | --- |
| ロゴ | `public/images/logo/` |
| Homeメイン画像 | `public/images/home/` |
| Aboutプロフィール画像 | `public/images/about/` |
| Projectサムネイル / メイン画像 | `public/images/projects/` |
| Loading画像3枚 | `public/images/loading/` |
| 404画像 | `public/images/404/` |

推奨形式は `.jpg`, `.png`, `.webp`, `.svg` です。  
写真を使う場合は `.webp` か圧縮済み `.jpg` が扱いやすいです。

## Homeを編集する

Homeの大きなメディアを差し替える場合:

1. 画像を `public/images/home/` に追加します。
2. `src/data/media.ts` の `homeHero.src` を変更します。
3. `homeHero.alt.jp` と `homeHero.alt.en` も変更します。

Home下部の3つの導線テキストを変更する場合:

- JP: `src/i18n/jp.ts` の `home.panels`
- EN: `src/i18n/en.ts` の `home.panels`

Home下部のアイコンは現在CSSで描画しています。  
画像アイコンに置き換える場合は `src/components/home/HomeFeatureGrid.astro` を編集します。

## Aboutを編集する

メンバー情報は `src/data/profiles.ts` にあります。

各メンバーは以下の情報を持っています。

```ts
{
  slug: 'oike',
  name: 'oike',
  role: {
    jp: 'visual direction / film',
    en: 'visual direction / film'
  },
  image: '/images/about/oike-placeholder.svg',
  alt: {
    jp: '画像の説明',
    en: 'Image description'
  },
  bio: {
    jp: '日本語プロフィール文',
    en: 'English profile text'
  },
  expertise: ['design', 'video', 'branding', 'typography']
}
```

プロフィール画像を差し替える場合:

1. 画像を `public/images/about/` に追加します。
2. `image` の値を `/images/about/ファイル名` に変更します。
3. `alt.jp` / `alt.en` を実画像に合わせて変更します。

## Projectを編集する

作品情報は `src/data/projects.ts` にあります。

各作品は以下の形です。

```ts
{
  slug: 'project-01',
  title: {
    jp: '日本語タイトル',
    en: 'English Title'
  },
  date: '2026',
  client: 'Client Name',
  medium: {
    jp: 'video / design',
    en: 'video / design'
  },
  category: {
    jp: 'film / installation',
    en: 'film / installation'
  },
  description: {
    jp: '日本語説明文',
    en: 'English description'
  },
  thumbnail: '/images/projects/project-01-thumb.svg',
  mainImage: '/images/projects/project-01-main.svg',
  alt: {
    jp: '作品画像の説明',
    en: 'Project image description'
  },
  link: 'https://example.com'
}
```

`link` は任意です。外部リンクがない場合は削除して構いません。

### 新規Projectを追加する手順

1. サムネイル画像を `public/images/projects/` に追加します。
2. メイン画像を `public/images/projects/` に追加します。
3. `src/data/projects.ts` の `projects` 配列の末尾に新しい作品オブジェクトを追加します。
4. `slug` はURLに使われるため、半角英数字とハイフンで一意にします。
5. `thumbnail` と `mainImage` のパスを追加した画像に合わせます。

例:

```ts
{
  slug: 'new-film-title',
  title: {
    jp: '新しい映像作品',
    en: 'New Film Title'
  },
  date: '2026',
  client: 'Client Name',
  medium: {
    jp: 'film',
    en: 'film'
  },
  category: {
    jp: 'moving image',
    en: 'moving image'
  },
  description: {
    jp: '作品説明をここに入れます。',
    en: 'Add the project description here.'
  },
  thumbnail: '/images/projects/new-film-title-thumb.webp',
  mainImage: '/images/projects/new-film-title-main.webp',
  alt: {
    jp: '新しい映像作品の画像',
    en: 'Image for New Film Title'
  },
  link: 'https://example.com'
}
```

## Projectが7件以上になった場合

現在の設計では1ページに6作品を表示します。  
7作品目以降は次ページに送られ、ページネーションで切り替えます。

つまりデスクトップでは以下のように並びます。

```text
page 1
01 02 03
04 05 06

page 2
07 08 09
...
```

モバイルでは1列で下へ続きます。

作品数が増えた場合も、クリックした作品は右側の詳細パネルに表示され、URLは以下のようになります。

```text
/projects?project=new-film-title
```

ページやカテゴリもURLに反映されます。

```text
/projects?category=film-installation&page=2&project=new-film-title
```

カテゴリフィルターは `src/data/projects.ts` の `category.en` をもとに自動生成されます。  
同じカテゴリにまとめたい作品は、`category.jp` / `category.en` を既存作品と同じ表記にしてください。

ただし、作品数が多くなるとページが縦に長くなります。  
12件以上を常時掲載する運用になりそうな場合は、以下の追加実装を検討してください。

- category / year フィルター
- featured project の固定表示
- archiveページの追加

## Loading画像を編集する

Loading画面は3枚の画像を1秒ごとに切り替えます。

編集場所:

- 画像本体: `public/images/loading/`
- 画像リスト: `src/data/media.ts` の `loading`

3枚以外に増やすこともできますが、現仕様では3枚運用を想定しています。

## ロゴを編集する

ロゴ画像は `src/data/site.ts` の `logo` で管理しています。

```ts
logo: {
  dark: '/images/logo/kinu-logo.svg',
  light: '/images/logo/kinu-logo-light.svg'
}
```

- `dark`: 明るい背景用
- `light`: フッターなど暗い背景用

## 連絡先を編集する

`src/data/site.ts` の `contact` を編集します。

```ts
contact: {
  email: 'hello@example.com',
  instagram: 'https://www.instagram.com/'
}
```

## 公開前チェック

ローカルで確認する場合:

```sh
npm install
npm run dev
```

ビルド確認:

```sh
npm run build
```

GitHubにpushすると、`.github/workflows/deploy.yml` によりGitHub Actionsで自動ビルド・自動デプロイされます。

## 編集しないファイル / フォルダ

- `node_modules/`
- `dist/`
- `.astro/`

これらは自動生成・依存関係用のため、GitHubに手動で追加する必要はありません。
