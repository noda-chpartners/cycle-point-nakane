import type { ImageMetadata } from "astro";

export interface HeroImage {
  src: ImageMetadata;
  alt: string;
  position: string;
}

export interface ReelPhoto {
  src: ImageMetadata;
  alt: string;
  land: boolean;
  position?: string;
}
