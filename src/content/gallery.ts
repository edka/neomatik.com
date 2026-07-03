import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import portrait from "@/assets/artist-portrait.jpg";
import electrosteam from "@/assets/electrosteam-logo.png.asset.json";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export const gallery: GalleryImage[] = [
  {
    src: g1,
    alt: "Neomatik performing live behind decks with hands raised, silhouetted against violet stage lights",
    caption: "Live at Fabric — London, 2025",
    width: 1600,
    height: 1067,
  },
  {
    src: portrait,
    alt: "Portrait of Neomatik in profile lit by a single violet rim light",
    caption: "Portrait — Berlin, 2026",
    width: 1280,
    height: 1600,
  },
  {
    src: g2,
    alt: "Close-up of hands on a modular synthesizer glowing in the dark",
    caption: "Studio — Kreuzberg, 2025",
    width: 1200,
    height: 1500,
  },
  {
    src: g3,
    alt: "Wide festival stage at night with a glowing violet LED cube installation",
    caption: "Afterlife Warsaw — 2025",
    width: 1600,
    height: 1067,
  },
];
