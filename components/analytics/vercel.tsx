"use client";

import { Analytics, type BeforeSend } from "@vercel/analytics/next";

const redactSearch: BeforeSend = (event) => {
  const url = new URL(event.url);
  if (url.pathname !== "/search") return event;
  url.searchParams.delete("q");
  return { ...event, url: url.href };
};

export function VercelAnalytics() {
  return <Analytics beforeSend={redactSearch} />;
}
