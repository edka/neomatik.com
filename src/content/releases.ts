import pi38Cover from "@/assets/pi38.png.asset.json";
import mellowNovemberCover from "@/assets/mellow-november.jpg.asset.json";
import dontLectureCover from "@/assets/dont-lecture-me.jpg.asset.json";
import practicalManCover from "@/assets/riodine-practical-man.png.asset.json";
import rangerSimonCover from "@/assets/ranger-simon.png.asset.json";
import judgeCover from "@/assets/judge.jpg.asset.json";
import whereTwoDesertsCover from "@/assets/where-two-deserts-meet.png.asset.json";

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
    id: "pi38-mesotopos",
    title: "π38 (Mesotopos)",
    type: "Single",
    label: "Neomatik Productions",
    year: 2026,
    date: "2026-07-17",
    cover: pi38Cover.url,
    description:
      "Upcoming release — July 17, 2026. Neomatik debuts a new 10-track ethno-dub project as Mesotopos, with Oleg Ignatenko (electrified guitar) and Rashid Akmanov (mouth harp). A continuation of the cycle opened by Mellow November.",
    links: {
      bandcamp: "https://neomatik.bandcamp.com",
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
    },
  },
  {
    id: "mellow-november",
    title: "Mellow November (feat. Mesotopos)",
    type: "Single",
    label: "Neomatik Productions",
    year: 2026,
    date: "2026-06-26",
    cover: mellowNovemberCover.url,
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
    cover: dontLectureCover.url,
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
    id: "riodine-practical-man",
    title: "Practical Man (Riodine)",
    type: "Album",
    label: "Neomatik Productions",
    year: 2024,
    date: "2024-01-01",
    cover: practicalManCover.url,
    description:
      "Riodine's album Practical Man — an experimental indie/art-rock cycle produced with Ed Kabatsky. Layered textures, poetic Russian-language lyrics, and a hand-collaged visual identity.",
    links: {
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
    cover: rangerSimonCover.url,
    description:
      "A Russian-language indie-rock crossover between Neomatik and the Riodine band. Lyrics by Dmitry Strizhov — praised for its clarity, mature production, and commercial potential in North America.",
    links: {
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
      bandcamp: "https://neomatik.bandcamp.com",
    },
  },
  {
    id: "riodine-judge",
    title: "Judge (Riodine feat. Neomatik)",
    type: "Single",
    label: "Neomatik Productions",
    year: 2021,
    date: "2021-10-28",
    cover: judgeCover.url,
    description:
      "A Riodine single featuring Neomatik — a nod to traditional hip-hop blended with indie-rock. Justin Snyder and Ed Kabatsky on vocals, Nicholas Kabatsky (keys), Alek Sleczkowski (guitar), Joseph Tidnal (drums), with Andrea Perry (bass) and Rashid Akmanov (mouth harp, back vocal). Lyrics by Sara Kabatsky. Music, recording and production by Ed Kabatsky. Mastered by Shai Fishman.",
    links: {
      bandcamp: "https://neomatik.bandcamp.com/track/judge",
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
    },
  },
  {
    id: "where-two-deserts-meet",
    title: "Where Two Deserts Meet",
    type: "EP",
    label: "Neomatik Productions",
    year: 2020,
    date: "2020-01-01",
    cover: whereTwoDesertsCover.url,
    description:
      "Neomatik's solo EP — the same title later served as Riodine's debut single. A meeting point between electronic textures and songwriting instincts refined over three decades.",
    links: {
      spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
      apple: "https://music.apple.com/us/artist/neomatik/1543651491",
      bandcamp: "https://neomatik.bandcamp.com",
    },
  },
];
