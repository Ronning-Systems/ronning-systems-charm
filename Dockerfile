# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# PostHog analytics — baked in at build time (Vite inlines import.meta.env.VITE_*).
# The deploy script passes these from Vault (secret/RS/posthog_project_*).
ARG VITE_POSTHOG_KEY=""
ARG VITE_POSTHOG_HOST="https://us.i.posthog.com"

# Install deps (use bun lockfile if present, otherwise npm)
COPY package.json package-lock.json* bun.lockb* ./
RUN if [ -f bun.lockb ]; then \
      npm i -g bun && bun install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

COPY . .
RUN VITE_POSTHOG_KEY="$VITE_POSTHOG_KEY" VITE_POSTHOG_HOST="$VITE_POSTHOG_HOST" npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

# SPA-friendly nginx config that respects the container's $PORT
# (canonical deploy: Traefik on patrick-mini-1; legacy: Cloud Run).
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template

COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080

CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]