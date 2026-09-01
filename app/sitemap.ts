import type { MetadataRoute } from "next";
import { getPublishedConcepts, conceptHref } from "@/lib/content";
import { categories } from "@/data/categories";

const baseUrl = "https://byheartai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/learn", "/roadmaps", "/glossary"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/learn/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const lessonRoutes = getPublishedConcepts().map((c) => ({
    url: `${baseUrl}${conceptHref(c)}`,
    lastModified: c.lastReviewed ? new Date(c.lastReviewed) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...lessonRoutes];
}
