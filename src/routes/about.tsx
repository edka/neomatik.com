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
        description="Neomatik — a Berlin-based producer at the edges of melodic techno, ambient, and modern classical. Read the full biography."
        path="/about"
      />
      <section className="pt-32 md:pt-44 pb-16 spotlight">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={portrait}
                alt="Neomatik — portrait in profile"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-violet">About</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Neomatik.
            </h1>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Neomatik is the recording and performance project of a Berlin-based producer
                working at the edges of melodic techno, ambient, and modern classical. Since
                2020, the project has released a small, deliberate body of work through
                Neomatik Recordings and a handful of trusted labels including Afterhours
                Music and Correspondant.
              </p>
              <p>
                Live sets are hardware-first: modular synthesis, hybrid arrangements, and
                extended, patient transitions that trust the audience to follow. Recent
                appearances include Fabric London, Berghain, Awakenings, and Afterlife's
                Warsaw showcase.
              </p>
              <p>
                Beyond releases and performances, Neomatik operates as a small creative
                studio — scoring, sound design, and collaborations with visual artists,
                filmmakers, and fashion houses.
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
