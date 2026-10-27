import type { HeroImage } from "../types/photos";
import slide02 from "../assets/hero/slide02.png";

// ヒーロー専用の固定画像。src、alt、position はここで変更します。
// ここの画像・設定を変更しても、CONCEPT・LINEUP・SHOPには影響しません。
export const heroImage: HeroImage = {
  src: slide02,
  alt: "歩道に並んだ自転車と黒板。山王店の外観",
  position: "center 55%",
};
