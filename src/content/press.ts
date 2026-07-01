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
      "Ranger Simon is a highly enjoyable track, clever in its execution… the production is very professional and mature as the vocals are clear and present over this dynamic intertwining of musical phrasing.",
    outlet: "Lee Callaghan",
  },
  {
    quote:
      "Practical Man is a wonderful release, a testament to the maturity and professionalism of Neomatik and the exceptional talent Ed Kabatsky is able to employ to make beautiful, inspiring indie rock tracks with an edge of experimental.",
    outlet: "Lee Callaghan",
  },
  {
    quote:
      "Judge offers something from any school of musicality — from the traditional Hip-Hop vibe to the party-like anthemic approach, this track clearly should be enjoyed by all.",
    outlet: "Lee Callaghan",
  },
];
