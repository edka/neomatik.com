import { createFileRoute } from "@tanstack/react-router";
import { pressAssets, pressQuotes } from "@/content/press";
import { Seo } from "@/components/site/Seo";

export const Route = createFileRoute("/press-kit")({
  component: PressKitPage,
});

function PressKitPage() {
  return (
    <>
      <Seo
        title="Press Kit"
        description="Official Neomatik press kit — biography, high-resolution photos, logo pack, and technical rider for press and festival organizers."
        path="/press-kit"
      />
      <section className="pt-32 md:pt-44 pb-16 spotlight">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">Press Kit</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Electronic press kit.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Everything you need to write about Neomatik or add the project to your
            festival lineup. For interview requests, use the press email below.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Assets</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {pressAssets.map((asset) => (
              <a
                key={asset.id}
                href={asset.href}
                className="group flex items-start justify-between gap-6 bg-background/80 p-6 transition-colors hover:bg-surface"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-violet">
                    {asset.kind}
                  </div>
                  <div className="mt-2 font-display text-xl tracking-tight">{asset.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{asset.description}</p>
                </div>
                <div className="mt-1 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-violet">
                  ↓
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Photo credit: Studio Halbmond. Please credit on use.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Selected press</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pressQuotes.map((q) => (
              <blockquote key={q.outlet} className="glass rounded-sm p-6">
                <p className="font-display text-lg leading-snug tracking-tight text-foreground">
                  “{q.quote}”
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  — {q.outlet}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
