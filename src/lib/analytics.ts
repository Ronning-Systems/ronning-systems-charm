const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ?? "https://us.i.posthog.com";

let posthog: typeof import("posthog-js").default | null = null;
const queue: Array<[string, Record<string, unknown> | undefined]> = [];

export const initAnalytics = async () => {
  if (!POSTHOG_KEY) return;
  const mod = await import("posthog-js");
  posthog = mod.default;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
  });
  for (const [event, properties] of queue) {
    posthog.capture(event, properties);
  }
  queue.length = 0;
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  if (!POSTHOG_KEY) return;
  if (!posthog) {
    queue.push([event, properties]);
    return;
  }
  posthog.capture(event, properties);
};
