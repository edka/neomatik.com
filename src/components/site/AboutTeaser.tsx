import { Link } from "@tanstack/react-router";
import portrait from "@/assets/artist-portrait.jpg";

export function AboutTeaser() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={portrait}
              alt="Portrait of Neomatik lit by a single violet rim light"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">About</div>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Music built to sit inside the moment, not chase it.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Neomatik is the recording and performance project of a Berlin-based producer
              working at the edges of melodic techno, ambient, and modern classical. The
              output is deliberately narrow — a small number of releases, each built with
              intent — released through Neomatik Recordings and a handful of trusted labels.
            </p>
            <p>
              Live sets are hardware-first: modular synthesis, hybrid arrangements, and
              extended, patient transitions that trust the audience to follow.
            </p>
          </div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-foreground transition-colors hover:text-violet"
          >
            Read the full story <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
