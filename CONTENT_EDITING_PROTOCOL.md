# KINU Portfolio

Astroで実装した、KINUの静的バイリンガルポートフォリオサイトです。GitHub Pagesのプロジェクトページ、つまり `https://prod-kinu.github.io/ott/` での公開を想定しています。

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

## GitHub Pages

このプロジェクトは `astro.config.mjs` で以下の公開先を設定しています。

```js
site: 'https://prod-kinu.github.io',
base: '/ott'
```

`src/` や `public/` を含むソース一式を `prod-KINU/ott` リポジトリに置き、GitHub Actionsなどで `npm run build` した `dist/` をPagesへデプロイしてください。

`.github/workflows/deploy.yml` を含めて `main` ブランチへpushすると、GitHub Actionsが自動で以下を実行します。

```sh
npm install
npm run build
```

その後、生成された `dist/` をGitHub Pagesへデプロイします。

GitHub側では、リポジトリの `Settings` → `Pages` → `Build and deployment` → `Source` を `GitHub Actions` に設定してください。

手動で `dist/` の中身をPages公開ブランチへ置く場合も、`index.html` はAstroが生成します。`public/.nojekyll` はビルド時に `dist/.nojekyll` としてコピーされ、`_astro` 配下のCSS/JSアセットをGitHub Pagesで安全に配信するためのファイルです。

## Replace Content

主要な文言と画像は以下を編集してください。

- サイト共通情報: `src/data/site.ts`
- ホームのメディア、ローディング画像、404画像: `src/data/media.ts`
- Aboutのプロフィール: `src/data/profiles.ts`
- Projectsの一覧と詳細: `src/data/projects.ts`
- UI文言: `src/i18n/jp.ts`, `src/i18n/en.ts`

画像は `public/images/` 配下の各フォルダに置き、データファイル内のパスを差し替えます。

メンバー向けの詳しい編集手順は `CONTENT_EDITING_PROTOCOL.md` を参照してください。

## Notes

- 言語切替は同一URL内でJP / ENの文字列表示を切り替えます。
- Projectsの選択状態は `?project=project-slug` に同期されます。
- ローディング画面は `sessionStorage` によりブラウザセッションごとに1回だけ表示されます。
- GitHub Pagesのリポジトリサブパス `/ott/` 公開前提です。
