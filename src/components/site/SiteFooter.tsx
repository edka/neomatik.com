import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold tracking-[0.18em] uppercase">
              Neomatik
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/music" className="hover:text-violet">Music</Link></li>
              <li><Link to="/news" className="hover:text-violet">News</Link></li>
              <li><Link to="/about" className="hover:text-violet">About</Link></li>
              <li><Link to="/press-kit" className="hover:text-violet">Press Kit</Link></li>
              <li><Link to="/contact" className="hover:text-violet">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={site.socials.instagram} className="hover:text-violet" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={site.socials.spotify} className="hover:text-violet" target="_blank" rel="noreferrer">Spotify</a></li>
              <li><a href={site.socials.soundcloud} className="hover:text-violet" target="_blank" rel="noreferrer">SoundCloud</a></li>
              <li><a href={site.socials.bandcamp} className="hover:text-violet" target="_blank" rel="noreferrer">Bandcamp</a></li>
              <li><a href={site.socials.youtube} className="hover:text-violet" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {year} Neomatik. All rights reserved.</div>
          <div className="flex gap-6">
            <a href={`mailto:${site.email.booking}`} className="hover:text-foreground">Booking</a>
            <a href={`mailto:${site.email.press}`} className="hover:text-foreground">Press</a>
            <a href={`mailto:${site.email.management}`} className="hover:text-foreground">Management</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
