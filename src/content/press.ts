export type PressAsset = {
  id: string;
  label: string;
  description: string;
  href: string;
  kind: "logo" | "photo" | "bio" | "rider";
};

export type PressQuote = {
  quote: string;
  outlet: string;
};

export const pressAssets: PressAsset[] = [
  {
    id: "logo-pack",
    label: "Logo pack",
    description: "Neomatik wordmark in SVG + PNG, light and dark variants.",
    href: "#",
    kind: "logo",
  },
  {
    id: "press-photos",
    label: "Press photos",
    description: "High-resolution photos of Ed Kabatsky. Credit required.",
    href: "#",
    kind: "photo",
  },
  {
    id: "bio-short",
    label: "Short bio (100 words)",
    description: "For platform profiles, festival programs, and quick features.",
    href: "#",
    kind: "bio",
  },
  {
    id: "bio-long",
    label: "Extended bio (400 words)",
    description: "For long-form features, interviews, and press releases.",
    href: "#",
    kind: "bio",
  },
  {
    id: "tech-rider",
    label: "Technical rider",
    description: "Stage plot and preferred hardware/synth setup for live performances.",
    href: "#",
    kind: "rider",
  },
];

export const pressQuotes: PressQuote[] = [
  {
    quote:
      "Mellow November feels like the soundtrack for a movie that doesn't exist yet — Neomatik's ethno-dub palette with Ignatenko's guitar and Akmanov's mouth harp opens a wide, cinematic horizon.",
    outlet: "Mesotopos — Mellow November",
  },
  {
    quote:
      "Don't Lecture Me: edviq remix is a confident meeting of progressive house and Neomatik's songwriting — polished, purposeful, and unmistakably personal.",
    outlet: "MusicAlligator — Don't Lecture Me",
  },
  {
    quote:
      "Practical Man is a wonderful release, a testament to the maturity and professionalism of Neomatik and the exceptional talent Ed Kabatsky is able to employ to make beautiful, inspiring indie rock tracks with an edge of experimental.",
    outlet: "Lee Callaghan — Riodine, Practical Man",
  },
  {
    quote:
      "Judge offers something from any school of musicality — from the traditional Hip-Hop vibe to the party-like anthemic approach, this track clearly should be enjoyed by all.",
    outlet: "Lee Callaghan — Riodine, Judge",
  },
  {
    quote:
      "Ranger Simon is a highly enjoyable track, clever in its execution… the production is very professional and mature as the vocals are clear and present over this dynamic intertwining of musical phrasing.",
    outlet: "Lee Callaghan — Neomatik x Riodine, Ranger Simon",
  },
  {
    quote:
      "Where Two Deserts Meet marks Neomatik's crossover instinct — an EP that sets the tone for everything Riodine would later become.",
    outlet: "Neomatik — Where Two Deserts Meet",
  },
];
