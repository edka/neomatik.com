import cover1 from "@/assets/release-1.jpg";
import cover2 from "@/assets/release-2.jpg";
import cover3 from "@/assets/release-3.jpg";
import cover4 from "@/assets/release-4.jpg";

export type Release = {
  id: string;
  title: string;
  type: "Single" | "EP" | "Album" | "Remix";
  label: string;
  year: number;
  date: string;
  cover: string;
  description: string;
  links: {
    spotify?: string;
    apple?: string;
    beatport?: string;
    bandcamp?: string;
    soundcloud?: string;
    youtube?: string;
  };
};

export const releases: Release[] = [
  {
    id: "signal-decay",
    title: "Signal Decay",
    type: "EP",
    label: "Neomatik Recordings",
    year: 2026,
    date: "2026-04-18",
    cover: cover1,
    description:
      "Four-track EP exploring the space between analog decay and digital precision — recorded live to tape across a single sleepless week in Berlin.",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      beatport: "https://www.beatport.com/",
      bandcamp: "https://bandcamp.com/",
    },
  },
  {
    id: "orbital",
    title: "Orbital",
    type: "Single",
    label: "Afterhours Music",
    year: 2025,
    date: "2025-11-07",
    cover: cover2,
    description:
      "A slow-burn afterlife-adjacent single built around a single detuned pad and a modular kick that refuses to sit still.",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      beatport: "https://www.beatport.com/",
    },
  },
  {
    id: "null-state",
    title: "Null State",
    type: "Album",
    label: "Neomatik Recordings",
    year: 2025,
    date: "2025-05-23",
    cover: cover3,
    description:
      "Debut long-form work. Nine tracks charting the arc of a night — from the last car home to first light over concrete.",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      bandcamp: "https://bandcamp.com/",
      soundcloud: "https://soundcloud.com/",
    },
  },
  {
    id: "phantom-limb",
    title: "Phantom Limb",
    type: "Remix",
    label: "Correspondant",
    year: 2024,
    date: "2024-09-12",
    cover: cover4,
    description:
      "A hypnotic reinterpretation commissioned for Correspondant's tenth-anniversary compilation. Long, patient, and unafraid of silence.",
    links: {
      spotify: "https://open.spotify.com/",
      beatport: "https://www.beatport.com/",
    },
  },
];
