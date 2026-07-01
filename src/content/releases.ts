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
    amazon?: string;
    deezer?: string;
    bandcamp?: string;
    soundcloud?: string;
    youtube?: string;
  };
};

export const releases: Release[] = [
  {
    id: "mellow-november",
    title: "Mellow November (feat. Mesotopos)",
    type: "Single",
    label: "Neomatik Productions",
    year: 2026,
    date: "2026-06-26",
    cover: cover1,
    description:
      "Debut single from the new Mesotopos project — a 10-track ethno-dub cycle described as a soundtrack for a movie that doesn't exist yet. Features Oleg Ignatenko (electrified guitar), Rashid Akmanov (mouth harp), and didgeridoo samples by Dmitry Klim. Mastered by Shai Fishman.",
    links: {
      youtube: "https://www.youtube.com/watch?v=B7a7ovayb0s",
      bandcamp: "https://neomatik.bandcamp.com",
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
    },
  },
  {
    id: "dont-lecture-me-edviq",
    title: "Don't Lecture Me: edviq remix",
    type: "EP",
    label: "MusicAlligator",
    year: 2026,
    date: "2026-03-13",
    cover: cover2,
    description:
      "A collaborative EP with progressive house producer Edviq. Composed by Ed Kabatsky, with lyrics by Russian-American poet Dmitry Strizhov. Released to mark 36 years since Ed's arrival in the USA.",
    links: {
      youtube: "https://www.youtube.com/watch?v=NWWWRM-66mk",
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
      bandcamp: "https://neomatik.bandcamp.com",
    },
  },
  {
    id: "ranger-simon",
    title: "Ranger Simon — Егерь Саймон (feat. Riodine)",
    type: "Single",
    label: "Neomatik Productions",
    year: 2021,
    date: "2021-01-01",
    cover: cover3,
    description:
      "A Russian-language indie-rock crossover between Neomatik and the Riodine band. Lyrics by Dmitry Strizhov — praised for its clarity, mature production, and commercial potential in North America.",
    links: {
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
      bandcamp: "https://neomatik.bandcamp.com",
    },
  },
  {
    id: "where-two-deserts-meet",
    title: "Where Two Deserts Meet",
    type: "EP",
    label: "Neomatik Productions",
    year: 2020,
    date: "2020-01-01",
    cover: cover4,
    description:
      "Neomatik's solo EP — the same title later served as Riodine's debut single. A meeting point between electronic textures and songwriting instincts refined over three decades.",
    links: {
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
      bandcamp: "https://neomatik.bandcamp.com",
    },
  },
];
