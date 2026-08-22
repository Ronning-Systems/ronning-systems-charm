# ronning-systems-charm

The marketing site for Ronning Systems, LLC — home of **Joblign** ("Get aligned for success").

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
| `/consulting` | Fractional CTO / advisory services |
| `/pricing` | Consulting + Joblign plan tiers |
| `/about` | About Ronning Systems |
| `/blog` | Blog index |
| `/blog/:slug` | Blog post |
| `/contact` | Contact + Calendly + mailto form |
| `/privacy`, `/terms` | Legal pages |

## Analytics

PostHog is initialized only when `VITE_POSTHOG_KEY` is set at build time (Vite inlines `import.meta.env.VITE_*`). The deploy pipeline passes it from Vault (`secret/RS/posthog_project_id` / `secret/RS/posthog_project_token`) as Docker build args. Event taxonomy lives in `src/lib/analytics.ts`.

## Deployment

Canonical deploy: `my-stack/deploy-patrick-mini.sh` (builds the image on patrick-mini from this repo, serves via nginx behind Traefik). The Dockerfile accepts `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` build args. Legacy Cloud Run path (`deploy.sh`) is retained but not the canonical target.
