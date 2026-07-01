import { site } from "@/content/site";

const platforms = [
  { key: "spotify", label: "Spotify", href: site.streaming.spotify },
  { key: "apple", label: "Apple Music", href: site.streaming.apple },
  { key: "tidal", label: "Tidal", href: site.streaming.tidal },
  { key: "beatport", label: "Beatport", href: site.streaming.beatport },
  { key: "bandcamp", label: "Bandcamp", href: site.streaming.bandcamp },
  { key: "soundcloud", label: "SoundCloud", href: site.streaming.soundcloud },
];

export function StreamingHub() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-36 spotlight">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">Listen</div>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
            Wherever you stream.
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Full catalog available across every major platform. Follow to be first when
            new work drops.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.key}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-background/80 p-6 transition-colors hover:bg-surface"
            >
              <span className="font-display text-lg tracking-tight">{p.label}</span>
              <span className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-violet">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
