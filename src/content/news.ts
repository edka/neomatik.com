export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  outlet?: string;
  category: "Press" | "Release" | "Tour" | "Interview";
  body: string;
};

export const news: NewsItem[] = [
  {
    slug: "mesotopos-mellow-november",
    title: "Mesotopos launches with 'Mellow November' — the soundtrack for a movie that doesn't exist yet",
    excerpt:
      "Neomatik debuts a new 10-track ethno-dub project with Oleg Ignatenko, Rashid Akmanov, and Dmitry Klim. First single out June 26.",
    date: "2026-06-26",
    category: "Release",
    body:
      "Neomatik launches Mesotopos — a new 10-track project described as a soundtrack for a movie that doesn't exist yet. The debut single, 'Mellow November,' features Ed Kabatsky on synths and analog gear, Oleg Ignatenko on electrified guitar, Rashid Akmanov on mouth harp, and didgeridoo samples by Dmitry Klim. Mastered by Shai Fishman and released via Neomatik Productions / DistroKid.",
  },
  {
    slug: "dont-lecture-me-edviq-remix",
    title: "'Don't Lecture Me: edviq remix' EP out now on all platforms",
    excerpt:
      "A collaboration with progressive house producer Edviq — released March 13, 2026 to mark Ed Kabatsky's 36th year in the USA.",
    date: "2026-03-13",
    outlet: "MusicAlligator",
    category: "Release",
    body:
      "The 'Don't Lecture Me: edviq remix' EP is out now via MusicAlligator on Spotify, Apple Music, Amazon Music, Deezer and Bandcamp. Composed by Ed Kabatsky with lyrics by Dmitry Strizhov, the release is a collaboration with progressive house producer Edviq and marks Ed's 36th year of living in the United States.",
  },
  {
    slug: "electrosteam-maker-park-radio",
    title: "'Electrosteam' — Neomatik's electronic music show at Maker Park Radio",
    excerpt:
      "An ongoing radio residency dedicated to electronic dance music, from Staten Island's Maker Park Radio.",
    date: "2025-11-01",
    outlet: "Maker Park Radio",
    category: "Interview",
    body:
      "Beyond releases and productions, Ed Kabatsky hosts 'Electrosteam' at Maker Park Radio — an ongoing show dedicated to electronic dance music, with episodes archived on Mixcloud and SoundCloud.",
  },
  {
    slug: "riodine-practical-man",
    title: "Riodine's 'Practical Man' — a full-length tribute recorded in Russian",
    excerpt:
      "The Neomatik-led experimental indie-rock band's 10-track debut album, written by Ed Kabatsky and mastered by Shai Fishman.",
    date: "2021-11-01",
    outlet: "Riodine",
    category: "Release",
    body:
      "Riodine — the experimental indie-rock band formed in New York and Pennsylvania featuring Neomatik — released its 10-track debut album 'Practical Man' exclusively in Russian as a tribute to Ed Kabatsky's heritage. All tracks written by Ed Kabatsky, mastered by Shai Fishman.",
  },
];
