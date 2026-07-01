import { createFileRoute } from "@tanstack/react-router";
import { NewsList } from "@/components/site/News";
import { Seo } from "@/components/site/Seo";
import { news } from "@/content/news";

export const Route = createFileRoute("/news/")({
  component: NewsIndex,
});

function NewsIndex() {
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Seo
        title="News & Press"
        description="Announcements, press features, tour news, and interviews with Neomatik."
        path="/news"
      />
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 spotlight">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">Journal</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            News &amp; press.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Release announcements, tour news, and selected press features.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <NewsList items={sorted} />
        </div>
      </section>
    </>
  );
}
