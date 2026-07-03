import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/artist-portrait.jpg";
import { Gallery } from "@/components/site/Gallery";
import { Seo } from "@/components/site/Seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Neomatik is the music project of New York producer Ed Kabatsky — 25+ years of cinematic electronica, indie, folk, and art-rock spanning multiple projects and collaborations."
        path="/about"
      />
      <section className="pt-32 md:pt-44 pb-16 spotlight">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={portrait}
                alt="Ed Kabatsky — Neomatik, in portrait"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-violet">About</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Ed Kabatsky.
            </h1>
            <div className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              a.k.a. Neomatik, Ed Ka, EDKA — New York
            </div>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Ed Kabatsky is a New York-based songwriter, music producer, keyboardist,
                and guitarist born in Moscow, Russia. He has been producing experimental
                electronic music and performing at raves, gatherings, and festivals —
                first drawn in by New York's emerging rave culture and its palette of
                analog synths, drum machines, sequencers, samplers, and turntables.
              </p>
              <p>
                Over 25+ years, Ed has completed a full circle from experimental to
                traditional sound — integrating acoustic instruments and vocals into work
                that spans electronica, eclectic, folk, indie, alternative, and
                art-rock. He is the creative force behind multiple projects: Neomatik
                (cinematic electronica), Riodine (experimental indie/art-rock),
                Mesotopos (ethno-dub / experimental), Likho (folktronika with vocals),
                and Neomatik &amp; Wojo (synthpop with vocals). He also collaborates with
                progressive house producer Edviq.
              </p>
              <p>
                Ed brings deep literary inspiration drawn from Russian poetry and
                heritage — filtered through American indie rock and experimental song
                structures. He hosts the Electrosteam show on Maker Park Radio,
                dedicated to electronic dance music.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-24">
        <div className="container-x">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-violet">Gallery</div>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
              Studio, stage, and in between.
            </h2>
          </div>
          <Gallery />
        </div>
      </section>
    </>
  );
}
