import { Link } from "@tanstack/react-router";
import type { Release } from "@/content/releases";

export function ReleaseCard({ release, priority = false }: { release: Release; priority?: boolean }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-surface">
        <img
          src={release.cover}
          alt={`Cover art for ${release.title} by Neomatik`}
          loading={priority ? "eager" : "lazy"}
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs uppercase tracking-[0.25em] text-white/80">{release.type}</span>
          <span className="text-xs text-white/80">{release.year}</span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-lg tracking-tight text-foreground">{release.title}</h3>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {release.type} · {release.label}
          </div>
        </div>
        <div className="text-xs tabular-nums text-muted-foreground">{release.year}</div>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {release.links.spotify && (
          <a href={release.links.spotify} target="_blank" rel="noreferrer" className="hover:text-violet">Spotify</a>
        )}
        {release.links.apple && (
          <a href={release.links.apple} target="_blank" rel="noreferrer" className="hover:text-violet">Apple Music</a>
        )}
        {release.links.beatport && (
          <a href={release.links.beatport} target="_blank" rel="noreferrer" className="hover:text-violet">Beatport</a>
        )}
        {release.links.bandcamp && (
          <a href={release.links.bandcamp} target="_blank" rel="noreferrer" className="hover:text-violet">Bandcamp</a>
        )}
        {release.links.soundcloud && (
          <a href={release.links.soundcloud} target="_blank" rel="noreferrer" className="hover:text-violet">SoundCloud</a>
        )}
      </div>
    </article>
  );
}

export function ReleasesGrid({ items }: { items: Release[] }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((r, i) => (
        <ReleaseCard key={r.id} release={r} priority={i < 2} />
      ))}
    </div>
  );
}

export function ReleasesSection({ items }: { items: Release[] }) {
  return (
    <section className="border-t border-hairline py-24 md:py-36">
      <div className="container-x">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-violet">Discography</div>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
              Latest releases
            </h2>
          </div>
          <Link
            to="/music"
            className="hidden text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground md:inline"
          >
            All music →
          </Link>
        </div>

        <ReleasesGrid items={items} />

        <div className="mt-10 md:hidden">
          <Link to="/music" className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            All music →
          </Link>
        </div>
      </div>
    </section>
  );
}
