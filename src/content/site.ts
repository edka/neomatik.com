export const site = {
  name: "Neomatik",
  tagline: "Electronic music producer & creative studio",
  description:
    "Neomatik is an electronic music producer and creative studio crafting cinematic, patient, forward-looking music for the after-hours.",
  url: "https://neomatik.com",
  ogImage: "/og-cover.jpg",
  email: {
    booking: "booking@neomatik.com",
    press: "press@neomatik.com",
    management: "hello@neomatik.com",
  },
  socials: {
    instagram: "https://instagram.com/neomatik",
    soundcloud: "https://soundcloud.com/neomatik",
    spotify: "https://open.spotify.com/",
    youtube: "https://youtube.com/",
    bandcamp: "https://neomatik.bandcamp.com/",
  },
  streaming: {
    spotify: "https://open.spotify.com/",
    apple: "https://music.apple.com/",
    tidal: "https://tidal.com/",
    bandcamp: "https://neomatik.bandcamp.com/",
    beatport: "https://www.beatport.com/",
    soundcloud: "https://soundcloud.com/neomatik",
  },
  featuredVideoId: "dQw4w9WgXcQ", // placeholder YouTube ID
  formspreeEndpoint: "", // paste your Formspree URL to activate the contact form
};

export type Site = typeof site;
