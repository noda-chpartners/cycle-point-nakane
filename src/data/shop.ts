import type { ReelPhoto } from "../types/photos";
import shopFront from "../assets/tuika02/S__40034320_0.jpg";
import staffFront from "../assets/tuika02/S__40034309_0.jpg";
import staffMat from "../assets/tuika02/S__40034310_0.jpg";
import entrance from "../assets/tuika02/S__40034319_0.jpg";
import counterDisplay from "../assets/tuika02/S__40034324_0.jpg";
import counterLogo from "../assets/tuika02/S__40034325_0.jpg";
import shopSign from "../assets/tuika02/S__40034311_0.jpg";
import signDetail from "../assets/tuika02/S__40034321_0.jpg";

// SHOPの写真スライド専用。ヒーローの写真とは独立して管理します。
export const shopPhotos: ReelPhoto[] = [
  {
    src: shopFront,
    alt: "開店祝いの花と自転車が並ぶ山王店の正面外観",
    land: true,
    position: "center 48%",
  },
  {
    src: staffFront,
    alt: "サイクルポイントナカネの店舗入口でポーズをとるスタッフ4人",
    land: false,
    position: "center 45%",
  },
  {
    src: staffMat,
    alt: "店のロゴが入ったマットを掲げるスタッフ4人",
    land: false,
    position: "center 45%",
  },
  {
    src: entrance,
    alt: "木の看板と開いた入口から店内が見える山王店の外観",
    land: true,
    position: "center 65%",
  },
  {
    src: counterDisplay,
    alt: "Since 1920の立体文字と公式アプリの案内が置かれたカウンター",
    land: true,
  },
  {
    src: counterLogo,
    alt: "CYCLE POINT NAKANE Since 1920の文字が付いた木製カウンター",
    land: false,
    position: "center 55%",
  },
  {
    src: shopSign,
    alt: "電球に照らされた、自転車をかたどったサイクルポイントナカネの看板",
    land: true,
    position: "center center",
  },
  {
    src: signDetail,
    alt: "自転車の部品とSince 1920の文字で作られた看板の細部",
    land: true,
    position: "center center",
  },
];
