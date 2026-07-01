import { Link } from "@tanstack/react-router";
import type { NewsItem } from "@/content/news";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to="/news/$slug"
      params={{ slug: item.slug }}
      className="group block border-t border-hairline py-8 transition-colors hover:bg-surface/40"
    >
      <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-2">
          {formatDate(item.date)}
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-violet md:col-span-2">
          {item.category}
          {item.outlet ? ` · ${item.outlet}` : ""}
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display text-xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-violet md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{item.excerpt}</p>
        </div>
        <div className="hidden text-right text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-violet md:col-span-1 md:block">
          →
        </div>
      </div>
    </Link>
  );
}

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="border-b border-hairline">
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
