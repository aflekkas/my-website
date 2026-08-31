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

## Deployment

The site is hosted on Cloudflare Workers as a static-assets Worker (`wrangler.jsonc` points
at `dist/`, there is no server-side code).

```sh
pnpm exec wrangler login  # once per machine
pnpm deploy               # build and deploy
```
