export const site = {
  name: "Neomatik",
  tagline: "Cinematic electronica, indie & art-rock from New York",
  description:
    "Neomatik is the music project of New York producer Ed Kabatsky — weaving cinematic electronica with indie and art-rock tones, balancing vocal and instrumental tracks that merge emotion and design.",
  url: "https://neomatik.com",
  ogImage: "/og-cover.jpg",
  artist: {
    realName: "Edward Kabatsky",
    aliases: ["Neomatik", "Ed Ka", "EDKA"],
    based: "New York, NY",
    origin: "Moscow, Russia",
    activeSince: "Early 1990s",
  },
  email: {
    booking: "booking@neomatik.com",
    press: "press@neomatik.com",
    management: "info@neomatik.com",
  },
  socials: {
    instagram: "https://www.instagram.com/neomatik.music/",
    facebook: "https://www.facebook.com/neomatik/",
    twitter: "https://twitter.com/neomatik",
    soundcloud: "https://soundcloud.com/electrosteam",
    mixcloud: "https://www.mixcloud.com/electrosteam/",
    spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
    bandcamp: "https://neomatik.bandcamp.com",
  },
  streaming: {
    spotify: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox",
    apple: "https://music.apple.com/us/artist/neomatik/1543651491",
    amazon: "https://music.amazon.com/artists/B08PTZ3NY8/neomatik",
    deezer: "https://www.deezer.com/us/artist/115889622",
    bandcamp: "https://neomatik.bandcamp.com",
    soundcloud: "https://soundcloud.com/electrosteam",
  },
  projects: {
    riodine: "https://riodineband.com",
    mesotopos: "https://mesotoposmusic.com",
  },
  featuredVideoId: "B7a7ovayb0s", // Mellow November (feat. Mesotopos)
  formspreeEndpoint: "", // paste your Formspree URL to activate the contact form
};

export type Site = typeof site;
