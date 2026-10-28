import type { HeroImage } from "../types/photos";
import shopExterior from "../assets/tuika02/S__40034322_0.jpg";

// ヒーロー専用の固定画像。src、alt、position はここで変更します。
// ここの画像・設定を変更しても、CONCEPT・LINEUP・SHOPには影響しません。
export const heroImage: HeroImage = {
  src: shopExterior,
  alt: "歩道に並んだ自転車と黒板。山王店の外観",
  position: "center 55%",
};
