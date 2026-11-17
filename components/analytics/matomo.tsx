"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { MatomoConfig } from "@/lib/matomo-config";

type TrackerCommand = [string, ...(string | number | boolean)[]];
type SiteSearch = { query: string; resultsCount: number };

declare global {
  interface Window {
    _paq?: { push: (...commands: TrackerCommand[]) => unknown };
  }
}

const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
let previousPage: string | undefined;
let previousAction: string | undefined;

function referrerUrl() {
  if (!document.referrer) return "";
  const url = new URL(document.referrer);
  url.search = "";
  url.hash = "";
  return url.href;
}

function searchKeyword(config: MatomoConfig, query: string) {
  const term = query.normalize("NFKC").trim().replace(/\s+/gu, " ").toLowerCase();
  const looksLikeTopic = term.length <= 80
    && /\p{L}/u.test(term)
    && /^[\p{L}\p{M}\p{N} +\-]+$/u.test(term)
    && !/\p{N}{5}/u.test(term);
  return config.recordSearchTerms && looksLikeTopic ? term : "[search term omitted]";
}

function track(config: MatomoConfig, path: string, search?: SiteSearch) {
  const url = new URL(window.location.origin);
  url.pathname = path;
  const page = url.href;
  const currentParams = new URLSearchParams(window.location.search);
  for (const key of campaignKeys) {
    const value = currentParams.get(key);
    if (value && /^[\w.-]{1,80}$/.test(value)) url.searchParams.set(key, value);
  }

  const action = JSON.stringify([url.href, search?.query]);
  if (action === previousAction) return;

  const queue = (window._paq ??= new Array<TrackerCommand>());
  if (!previousPage) {
    queue.push(
      ["setTrackerUrl", config.baseUrl + "matomo.php"],
      ["setSiteId", config.siteId],
      ["disableCookies"],
      ["setDoNotTrack", true],
      ["enableHeartBeatTimer"],
    );
  }

  queue.push(
    ["setReferrerUrl", previousPage ?? referrerUrl()],
    ["setCustomUrl", url.href],
    ["setDocumentTitle", path === "/search" ? "Search | ByHeart AI" : document.title],
    search
      ? ["trackSiteSearch", searchKeyword(config, search.query), "ByHeart AI", search.resultsCount]
      : ["trackPageView"],
  );
  previousPage = page;
  previousAction = action;
}

export function MatomoPageViews({ config }: { config: MatomoConfig }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && pathname !== "/search") track(config, pathname);
  }, [config, pathname]);

  return <Script src={config.baseUrl + "matomo.js"} strategy="afterInteractive" referrerPolicy="origin" />;
}

export function MatomoSearch({ config, query, resultsCount }: SiteSearch & { config: MatomoConfig }) {
  useEffect(() => {
    track(config, "/search", query.length >= 2 ? { query, resultsCount } : undefined);
  }, [config, query, resultsCount]);

  return null;
}
