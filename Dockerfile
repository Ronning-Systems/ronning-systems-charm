# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

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
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

# SPA-friendly nginx config that respects Cloud Run's $PORT
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template

COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080

CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]