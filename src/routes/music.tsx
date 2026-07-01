import { createFileRoute } from "@tanstack/react-router";
import { ReleasesGrid } from "@/components/site/Releases";
import { StreamingHub } from "@/components/site/StreamingHub";
import { Seo } from "@/components/site/Seo";
import { releases } from "@/content/releases";

export const Route = createFileRoute("/music")({
  component: MusicPage,
});

function MusicPage() {
  return (
    <>
      <Seo
        title="Music"
        description="The full Neomatik discography — EPs, albums, singles, and remixes across melodic techno, ambient, and electronic."
        path="/music"
      />
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 spotlight">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">Music</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            The full catalog.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A small, deliberate body of work. Every release below is available on your
            streaming service of choice, and where possible, on vinyl through Neomatik
            Recordings.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-x">
          <ReleasesGrid items={releases} />
        </div>
      </section>

      <StreamingHub />
    </>
  );
}
