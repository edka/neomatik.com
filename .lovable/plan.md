
## Neomatik — Artist Website & EPK (deploys to github.com/edka/neomatik.com)

Cinematic, editorial dark artist site for Neomatik. Afterlife-adjacent: deep blacks, glass panels, single electric-violet accent, oversized display type, restrained motion. Wired to deploy cleanly to your existing repo as a fully static GitHub Pages site on the `neomatik.com` custom domain.

### GitHub Pages + your repo (edka/neomatik.com)
Since the repo name is `neomatik.com` and is intended for the custom domain, we treat it as **root-served** (base path `/`), not a project subpath.

- **Static only.** No SSR, no server functions, no API routes. All data lives as typed TS in `src/content/*` and is bundled at build time.
- **Vite + router base = `/`.** Assets and links resolve at `https://neomatik.com/...`.
- **SPA deep-link fix.** Ship `public/404.html` that redirects to `index.html` so `/news/some-post` works on refresh and direct links.
- **Custom domain.** Add `public/CNAME` containing `neomatik.com` (and configure the apex + `www` DNS on your registrar per GitHub's docs). This gets copied into the built output automatically.
- **HTTPS.** Enforced by GitHub Pages once the domain check passes.
- **Head tags** render client-side; Google executes JS and will see them. Strict non-JS scrapers won't — acceptable tradeoff for an artist site.
- **No runtime env vars.** Any secrets/keys would leak in a static bundle; we avoid them.

### Deployment wiring (adds to your existing repo)
- `.github/workflows/deploy.yml` — on push to `main`: `bun install`, `bun run build`, upload the static build output, deploy via `actions/deploy-pages@v4`.
- `public/CNAME` — `neomatik.com`.
- `public/404.html` — SPA fallback.
- `public/robots.txt` + `public/sitemap.xml` (generated at build from content files).
- README section: how to enable Pages ("Build and deployment: GitHub Actions"), DNS records for apex + www, and how to swap to a subpath if you ever move the site to a project page.

### Config change required
The current template ships `vite.config.ts` using `@lovable.dev/vite-tanstack-config` which builds via Nitro for a Cloudflare Worker target — that produces a server bundle, not a static site. We need to either:
- (a) run TanStack Start in **prerender/SPA mode** so the build emits a static `dist/` suitable for Pages, or
- (b) if (a) fights the Lovable preset, switch this project to a plain **Vite + TanStack Router (SPA)** setup (drop `@tanstack/react-start`, keep `@tanstack/react-router` file-based routes, keep every route file, keep every component).

Preferred path: (a). Fallback: (b), which is a mechanical swap of the router bootstrap and `vite.config.ts` — routes, components, styles, content all stay identical.

### Design system
Near-black bg (#0A0A0C), charcoal surfaces, muted white text, single electric-violet accent (~#7C5CFF) with soft glow. Space Grotesk (display) + Inter (body) via `<link>` in `__root.tsx`. Glass panels, subtle radial gradients, grain overlay, restrained framer-motion.

### Routes (all client-rendered)
```text
src/routes/
  __root.tsx         shell: nav, footer, fonts, sitewide meta, JSON-LD MusicGroup
  index.tsx          Home (hero, about teaser, latest releases, featured video, streaming, contact CTA)
  music.tsx          Full discography + streaming hub
  news.index.tsx     Press/news list
  news.$slug.tsx     Article (Article JSON-LD)
  press-kit.tsx      EPK with downloadable assets
  about.tsx          Full bio + gallery
  contact.tsx        Booking / press / management blocks + form
```
Per-route `head()` with unique title/description/og/twitter. `og:image` only on leaf routes.

### Components
`SiteHeader` (sticky glass nav + mobile drawer), `SiteFooter`, `Hero`, `AboutSection`, `ReleaseCard` / `ReleasesGrid`, `FeaturedVideo` (YouTube embed in glass frame), `NewsCard` / `NewsList`, `PressKitAsset`, `Gallery` (masonry + lightbox), `StreamingHub`, `ContactForm`, `NewsletterForm`.

### Content model
Typed TS arrays in `src/content/` (`releases.ts`, `news.ts`, `gallery.ts`, `press.ts`). Trivial swap to a headless CMS later without touching components.

### Contact form
Pure static can't send email. Ship a Formspree-ready form (drop your endpoint into one constant to activate) plus a visible booking email as a always-works fallback. Same for newsletter.

### SEO
Per-route metadata, semantic HTML, single H1, alt text, JSON-LD (MusicGroup on root, MusicAlbum/MusicRecording on releases, Article on news). Static `robots.txt` + generated `sitemap.xml`.

### Imagery
Generate via `imagegen`: hero background (abstract dark geometric), artist portrait placeholder, 4–6 release covers, gallery shots, og social card → `src/assets/`. All easily replaceable.

### Out of scope
- Real CMS backend
- Working email delivery for contact/newsletter (Formspree-ready, wire endpoint later)
- Real "Download All" zip (individual asset downloads work)

### Tech
React 19 + TanStack Router (file-based) + Tailwind v4 + framer-motion. Fully static output for GitHub Pages. No backend.

Approve and I'll build. If you'd rather see 2–3 rendered visual directions first, say "show directions".
