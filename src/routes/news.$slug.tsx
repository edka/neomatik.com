import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { news } from "@/content/news";
import { site } from "@/content/site";
import { Seo } from "@/components/site/Seo";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  notFoundComponent: () => (
    <div className="container-x pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Article not found</h1>
      <Link to="/news" className="mt-6 inline-block text-sm uppercase tracking-[0.25em] text-violet">
        ← Back to news
      </Link>
    </div>
  ),
  component: NewsArticle,
});

function NewsArticle() {
  const { item } = Route.useLoaderData();
  const formatted = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="pt-32 pb-24 md:pt-44">
      <Seo
        title={item.title}
        description={item.excerpt}
        path={`/news/${item.slug}`}
        type="article"
        publishedTime={item.date}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          datePublished: item.date,
          author: { "@type": "MusicGroup", name: "Neomatik" },
          publisher: item.outlet
            ? { "@type": "Organization", name: item.outlet }
            : { "@type": "MusicGroup", name: "Neomatik" },
          description: item.excerpt,
          url: `${site.url}/news/${item.slug}`,
        }}
      />
      <div className="container-x max-w-3xl">
        <Link
          to="/news"
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-violet"
        >
          ← All news
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-violet">{item.category}</span>
          <span>·</span>
          <span>{formatted}</span>
          {item.outlet && (
            <>
              <span>·</span>
              <span>{item.outlet}</span>
            </>
          )}
        </div>

        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {item.title}
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {item.body.split("\n\n").map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
