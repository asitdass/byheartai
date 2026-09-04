import { getPublishedConcepts, conceptHref } from "@/lib/content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl, toIsoDate } from "@/lib/site";

export const revalidate = 3600;

function xmlEscape(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const lessons = getPublishedConcepts().slice().sort((a, b) => {
    const da = a.lastReviewed ?? a.datePublished ?? "";
    const db = b.lastReviewed ?? b.datePublished ?? "";
    return db.localeCompare(da);
  });

  const items = lessons
    .map((c) => {
      const url = absoluteUrl(conceptHref(c));
      const updated = toIsoDate(c.lastReviewed ?? c.datePublished) ?? new Date().toISOString();
      return `    <item>
      <title>${xmlEscape(c.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(updated).toUTCString()}</pubDate>
      <description>${xmlEscape(c.summary)}</description>
      <category>${xmlEscape(c.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${xmlEscape(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
