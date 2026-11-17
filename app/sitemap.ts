import type { MetadataRoute } from "next";
import { getPublishedConcepts, conceptHref } from "@/lib/content";
import { categories } from "@/data/categories";
import { absoluteUrl, toIsoDate } from "@/lib/site";
import { getPublishedGuides, getRadarIssues } from "@/lib/guides";

function lastModified(value?: string): string | undefined {
  const date = toIsoDate(value);
  return date && !Number.isNaN(Date.parse(date)) ? date : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/learn", "/guides", "/local-ai", "/tools", "/whats-new", "/roadmaps", "/glossary"]
    .map((path) => ({ url: absoluteUrl(path) }));

  const categoryRoutes = categories.map((c) => ({
    url: absoluteUrl(`/learn/${c.id}`),
  }));

  const lessonRoutes = getPublishedConcepts().map((c) => ({
    url: absoluteUrl(conceptHref(c)),
    lastModified: lastModified(c.dateUpdated ?? c.lastReviewed ?? c.datePublished),
  }));

  const guideRoutes = getPublishedGuides().map((g) => ({
    url: absoluteUrl(`/guides/${g.slug}`),
    lastModified: lastModified(g.lastVerified || g.datePublished),
  }));
  const radarRoutes = getRadarIssues().map((r) => ({
    url: absoluteUrl(`/whats-new/${r.slug}`),
    lastModified: lastModified(r.date),
  }));
  return [...staticRoutes, ...categoryRoutes, ...guideRoutes, ...radarRoutes, ...lessonRoutes];
}
