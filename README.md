# ronning-systems-charm

The marketing site for Ronning Systems, LLC — home of **Joblign** ("Get aligned for success") and the public appliance catalog at `/appliances/`.

## Stack

- Vite + React 18 + TypeScript
- react-router-dom v6 (multi-page routes)
- shadcn/ui + Tailwind CSS
- react-helmet-async (per-page meta)
- PostHog analytics (env-gated, see below)
- Vitest + Testing Library

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run lint       # eslint
npm run test       # vitest
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — Joblign hero + consulting summary |
| `/product` | Joblign product deep-dive |
| `/appliances` | Public appliance catalog index |
| `/appliances/:name` | Per-appliance detail |
| `/consulting` | Fractional CTO / advisory services |
| `/pricing` | Consulting + Joblign plan tiers |
| `/about` | About Ronning Systems |
| `/blog` | Blog index |
| `/blog/:slug` | Blog post |
| `/contact` | Contact + Calendly + mailto form |
| `/privacy`, `/terms` | Legal pages |

## Appliance catalog

`/appliances/` renders from `src/lib/catalog.ts`, which reads the catalog-builder `index.json` contract (`{generated_at, appliances:[...]}`). By default it uses the local fixture at `src/data/catalog.fixture.json`. To wire the live catalog, set `VITE_CATALOG_INDEX_URL` to the catalog-builder's `/catalog/index.json` endpoint at build time.

## Analytics

PostHog is initialized only when `VITE_POSTHOG_KEY` is set at build time (Vite inlines `import.meta.env.VITE_*`). The deploy pipeline passes it from Vault (`secret/RS/posthog_project_id` / `secret/RS/posthog_project_token`) as Docker build args. Event taxonomy lives in `src/lib/analytics.ts`.

## Deployment

Canonical deploy: `my-stack/deploy-patrick-mini.sh` (builds the image on patrick-mini from this repo, serves via nginx behind Traefik). The Dockerfile accepts `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` build args. Legacy Cloud Run path (`deploy.sh`) is retained but not the canonical target.
