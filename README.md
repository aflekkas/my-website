# Portfolio 👋

My personal site, built with [Astro](https://astro.build) and Tailwind CSS. It ships as fully
static HTML with no client-side JavaScript.

## Where can I see it? 🤔

You can check it out here [www.aflekkas.com](https://www.aflekkas.com)!

## Development

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static build into dist/
pnpm preview  # serve the built site
pnpm cf:dev   # build, then serve dist/ through the Cloudflare Worker runtime
```

## Project previews

The images in `src/assets/previews/` show the first three screens of each site's homepage.
Each is 1280 × 2400, assembled from three consecutive 1280 × 800 browser captures.
When refreshing them, keep the viewport unchanged while scrolling, allow fonts, images,
and entrance animations to finish, and hide sticky navigation after the first capture
so it does not repeat. Temporary captures belong in `.scratch/`.

Cards show a static, top-anchored 16/10 crop of each preview (`object-cover object-top`),
so only the first screen of the capture is ever visible. There is no hover reveal or scroll
animation. The stored images are still full 1280 × 2400 captures, which means each card ships
roughly five times more image than it displays; re-crop the sources if that matters.

## Deployment

The social-sharing cover is `public/og.png` (1200 × 630). Regenerate it with
`node scripts/generate-og.mjs` after changing its text or the portrait.
The homepage uses the same absolute image URL for Open Graph and Twitter previews.

The site is hosted on Cloudflare Workers as a static-assets Worker (`wrangler.jsonc` points
at `dist/`, there is no server-side code).

```sh
pnpm exec wrangler login  # once per machine
pnpm deploy               # build and deploy
```
