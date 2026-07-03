import { Link } from "@tanstack/react-router";
import portrait from "@/assets/ed-studio-work.jpg.asset.json";

export function AboutTeaser() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={portrait.url}
              alt="Ed Kabatsky at work in the studio"
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
            25+ years of electronic music, songwriting, and sound design.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Neomatik is the music project of Ed Kabatsky — a Moscow-born, New
              York-based producer, songwriter, keyboardist, and guitarist. He has
              moved between experimental electronica, indie, folk, and art-rock,
              closing a full creative circle from analog synths and samplers to
              acoustic instruments and vocals.
            </p>
            <p>
              Beyond Neomatik, Ed is the creative force behind Riodine, Mesotopos,
              Likho, and Neomatik &amp; Wojo, and hosts the Electrosteam radio show at
              Maker Park Radio.
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
