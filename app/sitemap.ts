import type { MetadataRoute } from "next";
import { getPublishedConcepts, conceptHref } from "@/lib/content";
import { categories } from "@/data/categories";
import { SITE_URL } from "@/lib/site";

function toLastmod(value?: string): Date {
  if (!value) return new Date("2026-09-04T00:00:00.000Z");
  const d = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T00:00:00.000Z`)
    : new Date(value);
  return Number.isNaN(d.getTime()) ? new Date("2026-09-04T00:00:00.000Z") : d;
}

function latestContentDate(): Date {
  const dates = getPublishedConcepts()
    .flatMap((c) => [c.lastReviewed, c.datePublished, c.dateUpdated])
    .filter((d): d is string => Boolean(d))
    .map(toLastmod)
    .sort((a, b) => a.getTime() - b.getTime());
  return dates[dates.length - 1] ?? new Date("2026-09-04T00:00:00.000Z");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDate = latestContentDate();

  const staticRoutes = ["", "/learn", "/roadmaps", "/glossary", "/search"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: contentDate,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/learn" ? 0.9 : 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}/learn/${c.id}`,
    lastModified: contentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const lessonRoutes = getPublishedConcepts().map((c) => ({
    url: `${SITE_URL}${conceptHref(c)}`,
    lastModified: toLastmod(c.lastReviewed ?? c.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...lessonRoutes];
}
