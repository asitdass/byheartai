/** Canonical production origin. Used for metadataBase, sitemap, JSON-LD, and RSS. */
export const SITE_URL = "https://byheartai.com";
export const SITE_NAME = "ByHeart AI";
export const SITE_TAGLINE = "Learn AI. Know it by heart.";
export const SITE_DESCRIPTION =
  "A free, prerequisite-driven AI curriculum: RAG, agents, MCP, transformers, evaluation, and production system design — with interactive visuals and one idea to remember per lesson.";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function toIsoDate(date?: string): string | undefined {
  if (!date) return undefined;
  if (date.includes("T")) return date;
  return `${date}T00:00:00.000Z`;
}

export const organizationJsonLd = {
  "@type": "Organization" as const,
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: {
    "@type": "ImageObject" as const,
    url: absoluteUrl("/icon"),
  },
};

export const websiteJsonLd = {
  "@type": "WebSite" as const,
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction" as const,
    target: {
      "@type": "EntryPoint" as const,
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
