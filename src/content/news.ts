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
    slug: "signal-decay-announcement",
    title: "Neomatik announces new EP 'Signal Decay' — out April 18",
    excerpt:
      "Four tracks recorded live to tape across a single week in Berlin. Pre-save opens across all platforms this Friday.",
    date: "2026-03-04",
    category: "Release",
    body:
      "Neomatik returns with Signal Decay — a four-track EP that spent a week being recorded live to a single tape machine in a converted power station in Kreuzberg. There are no overdubs. There are no second takes. What you hear is what happened in the room.\n\nThe lead single, 'Halflight,' arrives March 21. The full EP follows April 18 via Neomatik Recordings, with vinyl pressed in a run of 500.",
  },
  {
    slug: "resident-advisor-interview",
    title: "In conversation with Resident Advisor: on silence, patience, and the long take",
    excerpt:
      "Neomatik sat down with RA to talk about the year off, the return, and why the best moment of a track is often the one just before it starts.",
    date: "2026-02-14",
    outlet: "Resident Advisor",
    category: "Interview",
    body:
      "In a wide-ranging conversation, Neomatik discusses stepping away from touring for a full year, rebuilding a studio around a single Buchla 200e, and why the artist's next chapter is about doing less, not more.",
  },
  {
    slug: "afterlife-warsaw-2026",
    title: "Neomatik joins Afterlife at Warsaw's Progresja — May 30",
    excerpt:
      "A closing set at one of the label's biggest showcases of the year. Tickets go on sale Friday at 10:00 CET.",
    date: "2026-01-22",
    category: "Tour",
    body:
      "Neomatik will play the closing set at Afterlife's Warsaw showcase on May 30, joining a lineup that includes Anyma, Tale of Us, and Mind Against. Doors open 22:00. Tickets on sale Friday 10:00 CET via the venue.",
  },
  {
    slug: "mixmag-feature",
    title: "Mixmag: 'The new face of European electronic minimalism'",
    excerpt:
      "A four-page feature in the March print issue examines Neomatik's approach to production, restraint, and the growing scene around Neomatik Recordings.",
    date: "2025-12-05",
    outlet: "Mixmag",
    category: "Press",
    body:
      "Mixmag's March issue puts Neomatik on the cover of its 'Ones to Watch' section, calling the producer 'a quiet architect of a scene that is finally learning to say less.'",
  },
];
