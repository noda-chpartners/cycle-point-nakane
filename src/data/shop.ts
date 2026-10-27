import type { ReelPhoto } from "../types/photos";
import entrance from "../assets/images/hero02.png";
import staffFront from "../assets/tuika/D1E99866-C5A4-43C0-B64D-C44BDCC6A42E.jpeg";
import staffOpen from "../assets/tuika/F13969C1-68FC-4CB4-BE4A-BD824B064052.jpeg";
import staffCheer from "../assets/tuika/D3EBE32D-6E80-4521-BADB-05E7575F0E78.jpeg";
import staffMat from "../assets/tuika/F6507ADE-A8ED-4F84-993D-F5F1696ACE3C.jpeg";
import shopFloor from "../assets/tuika/73470DEB-4039-4647-9C36-C156EE4A70DE.jpeg";
import shopFlower from "../assets/tuika/7DBC01E5-53D7-4EC0-9FE7-4FC30B77F299.jpeg";
import shopTraining from "../assets/tuika/4BD08130-F63D-4007-B8B8-9FC99D4A3E86.jpeg";

// SHOPの写真スライド専用。ヒーローの写真とは独立して管理します。
export const shopPhotos: ReelPhoto[] = [
  {
    src: entrance,
    alt: "開いた入口から見える店内と、店先に並ぶ自転車",
    land: true,
    position: "center 48%",
  },
  {
    src: staffCheer,
    alt: "入口の前でピースをする、サイクルポイントナカネのスタッフ",
    land: false,
    position: "center 30%",
  },
  {
    src: staffOpen,
    alt: "花に囲まれた入口で、ピースをするスタッフ",
    land: true,
    position: "center 42%",
  },
  {
    src: shopFloor,
    alt: "お祝いの植木の奥に、店内へ並ぶ自転車",
    land: false,
    position: "center 62%",
  },
  {
    src: staffFront,
    alt: "サイクルポイントナカネの看板の前に立つ、黒いポロシャツのスタッフ4人",
    land: true,
  },
  {
    src: shopFlower,
    alt: "祝御開店と書かれた、サイクルポイントナカネ宛ての木札",
    land: false,
    position: "center 40%",
  },
  {
    src: staffMat,
    alt: "店のロゴが入ったマットを掲げるスタッフと、花束",
    land: false,
    position: "center 46%",
  },
  {
    src: shopTraining,
    alt: "中学生職場体験に協力していることを示す、入口ガラスの青いステッカー",
    land: false,
    position: "center 55%",
  },
];
