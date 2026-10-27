import type { ReelPhoto } from "../types/photos";
import bikeCity from "../assets/tuika/59C460A1-819E-4610-83BD-BB54DD22DE86.jpeg";
import bikeSport from "../assets/tuika/69D86AC5-791E-4A9C-8933-4A675FEB8D84.jpeg";
import bikeAssist from "../assets/tuika/D37F937A-E0F7-4F2F-8222-65310BBDC5C5.jpeg";

// LINEUPの写真スライド専用。ヒーローの写真とは独立して管理します。
export const lineupPhotos: ReelPhoto[] = [
  {
    src: bikeCity,
    alt: "かご付きの青い電動アシスト自転車。店内に並んでいる",
    land: true,
  },
  {
    src: bikeSport,
    alt: "白いクロスバイク。店内のスポーツ車",
    land: true,
    position: "62% center",
  },
  {
    src: bikeAssist,
    alt: "黒いパナソニックの電動アシスト自転車",
    land: false,
    position: "center 40%",
  },
];
