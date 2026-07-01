# neomatik.com

Official website & EPK for **Neomatik** — cinematic dark artist site built with React 19, TanStack Start (SPA mode), and Tailwind CSS v4. Statically deployed to GitHub Pages on the custom domain **neomatik.com**.

## Local development

```bash
bun install
bun run dev
```

Then open http://localhost:8080.

## Content

All content lives as typed TypeScript in `src/content/`:

- `site.ts` — global site metadata, socials, streaming links, email routing, Formspree endpoint
- `releases.ts` — discography (add a new object + a cover image import to publish a release)
- `news.ts` — press/news articles (each `slug` becomes `/news/<slug>`)
- `gallery.ts` — gallery / about page images
- `press.ts` — press-kit assets and quotes

Images are imported from `src/assets/` and get hashed by Vite at build time.

## Contact form

The form uses [Formspree](https://formspree.io). Paste your endpoint into `site.formspreeEndpoint` in `src/content/site.ts` to activate it. Until then, the form shows a helpful message pointing users to the direct email addresses.

## GitHub Pages deployment

Deploys automatically to `neomatik.com` on every push to `main` via `.github/workflows/deploy.yml`.

**One-time setup on GitHub:**

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Repo **Settings → Pages → Custom domain: `neomatik.com`**, then check **Enforce HTTPS** once the check passes.
3. DNS at your registrar:
   - Apex `neomatik.com` — four A records to GitHub's Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `www.neomatik.com` — CNAME to `<your-github-username>.github.io.`

`public/CNAME` (with `neomatik.com`) ships in the build so the domain sticks between deploys.

**SPA deep links:** the workflow copies `index.html` to `404.html` in the build output so refreshing on `/news/some-slug` works. A `.nojekyll` file is added to disable Jekyll processing.

## Notes

- Static hosting means no server: contact form submissions go through Formspree, and no runtime env vars are used (they'd leak in the bundle anyway).
- To move the site to a project subpath (e.g. `username.github.io/neomatik.com`), you'd need to set Vite's `base` and the router `basepath` to `/neomatik.com/`. Not needed for the current custom-domain setup.
