# Project Conventions — ronning-systems-charm

This file captures project-specific conventions. Read before making changes.

## What this repo is

The marketing site for Ronning Systems, LLC — home of **Joblign** ("Get aligned for success"). It is a Vite + React 18 SPA served as static assets behind nginx.

## Branding

- The product is **Joblign**, tagline **"Get aligned for success"**. The legacy name "JobSync" must never appear in user-visible copy.
- The site leads with the product; consulting (Fractional CTO, advisory) is secondary.
- See `BRAND.md` for the full voice and style guide.

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build → dist/
npm run lint       # eslint (3 pre-existing errors in ui/command.tsx, ui/textarea.tsx, tailwind.config.ts — do not "fix" them as part of unrelated work)
npm run test       # vitest
```

## Architecture

- **Routing**: `src/App.tsx` — all routes above the `*` catch-all. New pages go in `src/pages/`.
- **Layout**: `src/components/Layout.tsx` — shared nav (desktop + mobile Sheet), footer, skip-link. Every page renders inside it.
- **SEO**: `src/components/Seo.tsx` — per-page title/description/canonical/og/twitter + JSON-LD. Use it on every page; do not hand-roll `<Helmet>` blocks.
- **Analytics**: `src/lib/analytics.ts` — PostHog, env-gated via `VITE_POSTHOG_KEY`/`VITE_POSTHOG_HOST`. Event taxonomy: `pageview`, `cta_click`, `form_submit`, `calendly_open`.
- **Email**: `src/components/EmailLink.tsx` — obfuscated mailto link. Use it instead of raw `mailto:` hrefs in user-visible copy.

## Env vars (build-time, inlined by Vite)

- `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` — PostHog analytics (from Vault `secret/RS/posthog_project_*`).

## Deployment

Canonical deploy: `my-stack/deploy-patrick-mini.sh` (builds the image on patrick-mini from this repo, serves via nginx behind Traefik). The Dockerfile accepts `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` build args. `deploy.sh` is the legacy Cloud Run path — do not treat it as canonical.

## Conventions

- No comments in code unless asked.
- Use the existing shadcn/ui primitives in `src/components/ui/`; don't add new UI deps without checking first.
- Import icons from `lucide-react` by name (tree-shaking).
