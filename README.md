# KINU Portfolio

Astroで実装した、KINUの静的バイリンガルポートフォリオサイトです。GitHub Pagesのルート公開、つまり `https://username.github.io/` を想定しています。

## Local Development

```sh
npm install
npm run dev
```

開発サーバー起動後、表示されたローカルURLをブラウザで開いてください。

## Build

```sh
npm run build
npm run preview
```

生成物は `dist/` に出力されます。

## Replace Content

主要な文言と画像は以下を編集してください。

- サイト共通情報: `src/data/site.ts`
- ホームのメディア、ローディング画像、404画像: `src/data/media.ts`
- Aboutのプロフィール: `src/data/profiles.ts`
- Projectsの一覧と詳細: `src/data/projects.ts`
- UI文言: `src/i18n/jp.ts`, `src/i18n/en.ts`

画像は `public/images/` 配下の各フォルダに置き、データファイル内のパスを差し替えます。

## Notes

- 言語切替は同一URL内でJP / ENの文字列表示を切り替えます。
- Projectsの選択状態は `?project=project-slug` に同期されます。
- ローディング画面は `sessionStorage` によりブラウザセッションごとに1回だけ表示されます。
- GitHub Pagesのリポジトリサブパスではなく、ユーザー/組織ページのルート公開前提です。
