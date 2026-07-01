import { Helmet } from "react-helmet-async";
import { site } from "@/content/site";

export type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  jsonLd?: object;
  publishedTime?: string;
};

export function Seo({
  title,
  description = site.description,
  path = "/",
  ogImage,
  type = "website",
  jsonLd,
  publishedTime,
}: SeoProps) {
  const url = `${site.url}${path}`;
  const image = ogImage ?? `${site.url}${site.ogImage}`;
  const fullTitle = title.includes("Neomatik") ? title : `${title} — Neomatik`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Neomatik" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
