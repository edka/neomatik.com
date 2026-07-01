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
    description: "SVG + PNG in light and dark variants.",
    href: "#",
    kind: "logo",
  },
  {
    id: "press-photos",
    label: "Press photos",
    description: "High-resolution photos by Studio Halbmond. Credit required.",
    href: "#",
    kind: "photo",
  },
  {
    id: "bio-short",
    label: "Short bio (100 words)",
    description: "For festival programs and quick features.",
    href: "#",
    kind: "bio",
  },
  {
    id: "bio-long",
    label: "Long bio (400 words)",
    description: "For long-form features and press releases.",
    href: "#",
    kind: "bio",
  },
  {
    id: "tech-rider",
    label: "Technical rider",
    description: "Stage plot, monitor requirements, and preferred CDJ setup.",
    href: "#",
    kind: "rider",
  },
];

export const pressQuotes: PressQuote[] = [
  {
    quote: "A quiet architect of a scene that is finally learning to say less.",
    outlet: "Mixmag",
  },
  {
    quote: "Patient, cinematic, and unafraid of silence — Neomatik is playing a longer game than most.",
    outlet: "Resident Advisor",
  },
  {
    quote: "One of the most singular voices in European electronic music right now.",
    outlet: "DJ Mag",
  },
];
