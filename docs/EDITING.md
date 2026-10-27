# サイクルポイントナカネ 編集ガイド

## ヒーローの画像を変更する

ヒーローの画像は `src/assets/hero/`、画像の設定は `src/data/hero.ts` にまとめています。
CONCEPT・LINEUP・SHOPの画像とは参照も実ファイルも分離しています。

### 同じファイル名で画像を差し替える場合

現在は `src/assets/hero/slide02.png` の1枚を固定表示しています。このファイルを同名・同じ拡張子で上書きするとヒーロー画像を差し替えられます。このフォルダーの画像はヒーロー専用です。

画像の内容が変わる場合は、`src/data/hero.ts` の `alt`（写真の説明）も合わせて変更してください。

### 別のファイル名や拡張子で差し替える場合

新しい画像を `src/assets/hero/` に入れ、`src/data/hero.ts` 冒頭の `import` のパスを変更します。

```ts
import slide02 from "../assets/hero/new-photo.jpg";
```

`heroImage` に固定表示する画像、写真の説明、切り取り位置を設定します。

```ts
export const heroImage: HeroImage = {
  src: slide02,
  alt: "新しい写真の内容に合わせた説明",
  position: "center 40%",
};
```

`position` は写真の切り取り位置です。横位置・縦位置の順で指定します。縦位置を上へ寄せる場合は `center 20%`、下へ寄せる場合は `center 70%` などに変更します。

ヒーロー内の文章・リニューアル日・リンクなどは `src/components/HeroSection.astro` で編集します。
ヒーローのスライド切り替え・拡大・スクロール連動・文字やボタンの登場アニメーションは使用していません。その他のセクションのアニメーションは `src/scripts/motion.ts` で管理しています。

## セクションの編集場所

`src/pages/index.astro` は各コンポーネントの読み込みと表示順を管理します。

| 内容 | 編集ファイル |
| --- | --- |
| ヒーロー | `src/components/HeroSection.astro` |
| SINCE・営業時間などの基本情報 | `src/components/FactsSection.astro` |
| CONCEPTの文章・写真 | `src/components/ConceptSection.astro` |
| LINEUPの分類・メーカー構成・帯の写真 | `src/components/LineupSection.astro` |
| LINEUPの写真スライド | `src/data/lineup.ts` |
| メーカーのロゴと代替テキスト | `src/components/BrandLogos.astro` |
| SHOPの文章 | `src/components/ShopSection.astro` |
| SHOPの写真スライド | `src/data/shop.ts` |
| アプリ・SNS案内 | `src/components/AppSection.astro` |
| ACCESS・店舗案内・地図 | `src/components/AccessSection.astro` |
| ヘッダー | `src/components/SiteHeader.astro` |
| モバイルメニュー | `src/components/MobileMenu.astro` |
| フッター | `src/components/SiteFooter.astro` |
| ローディング・スクロール進捗バー | `src/components/PageLoader.astro` |
| ページ上部へ戻るボタン | `src/components/BackToTop.astro` |
| LINEUP・SHOP共通の写真スライド表示 | `src/components/PhotoReel.astro` |
| タイトル・説明文・SNS・アプリ・地図への共通リンク | `src/data/site.ts` |
| 構造化データ（JSON-LD） | `src/components/StructuredData.astro` |
| 共通レイアウト・head内のメタ情報 | `src/layouts/Base.astro` |
| スタイル | `src/styles/global.scss` |
| アニメーション・メニュー操作 | `src/scripts/motion.ts` |

各セクションに元のマークアップとCSSクラスを引き継いでいます。スタイルとアニメーションは既存の共通ファイルで管理しています。

## 開発サーバー

開発サーバーを起動する場合は、このプロジェクトの指示に従ってバックグラウンドで起動します。

```sh
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

今回のコンポーネント分割に伴うビルド・ブラウザーでの表示確認は、依頼に従い実行していません。
