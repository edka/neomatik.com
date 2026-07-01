import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { ReleasesSection } from "@/components/site/Releases";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { StreamingHub } from "@/components/site/StreamingHub";
import { Seo } from "@/components/site/Seo";
import { releases } from "@/content/releases";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Seo
        title="Neomatik — Electronic music producer & creative studio"
        path="/"
      />
      <Hero />
      <AboutTeaser />
      <ReleasesSection items={releases.slice(0, 4)} />
      <FeaturedVideo />
      <StreamingHub />
    </>
  );
}
