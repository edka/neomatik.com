import { site } from "@/content/site";

export function FeaturedVideo() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-36">
      <div className="container-x">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-violet">Live</div>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
              Featured performance
            </h2>
          </div>
        </div>

        <div className="glass overflow-hidden rounded-sm">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${site.featuredVideoId}?rel=0&modestbranding=1`}
              title="Neomatik — Featured live performance"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <p className="mt-6 max-w-xl text-sm text-muted-foreground">
          “Mellow November” is out now
        </p>
      </div>
    </section>
  );
}
