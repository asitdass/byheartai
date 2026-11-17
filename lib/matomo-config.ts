import "server-only";

export interface MatomoConfig {
  baseUrl: string;
  siteId: string;
  recordSearchTerms: boolean;
}

export function getMatomoConfig(): MatomoConfig | null {
  const baseUrl = process.env.MATOMO_URL?.trim();
  const siteId = process.env.MATOMO_SITE_ID?.trim();
  if (!baseUrl || !siteId || !/^[1-9]\d*$/.test(siteId)) return null;

  try {
    const url = new URL(baseUrl);
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) {
      return null;
    }
    url.pathname = url.pathname.replace(/\/*$/, "/");
    return {
      baseUrl: url.href,
      siteId,
      recordSearchTerms: process.env.MATOMO_RECORD_SEARCH_TERMS === "true",
    };
  } catch {
    return null;
  }
}
