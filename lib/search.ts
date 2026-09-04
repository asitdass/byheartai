import "server-only";
import type { Concept } from "@/lib/types";
import { getPublishedConcepts } from "@/lib/content";

export function normalizeQuery(q: string): string {
  return q.trim().replace(/\s+/g, " ").slice(0, 200);
}

function haystack(c: Concept): string {
  return [c.title, c.summary, c.id, c.slug, c.category, ...c.keywords].join(" ").toLowerCase();
}

/** Rank published lessons for a user query. Title hits beat keyword hits. */
export function searchConcepts(raw: string): Concept[] {
  const q = normalizeQuery(raw).toLowerCase();
  if (q.length < 2) return [];
  const tokens = q.split(" ").filter(Boolean);

  return getPublishedConcepts()
    .map((c) => {
      const title = c.title.toLowerCase();
      const text = haystack(c);
      let score = 0;
      if (title === q) score += 100;
      if (title.includes(q)) score += 40;
      for (const t of tokens) {
        if (title.includes(t)) score += 12;
        if (c.keywords.some((k) => k.toLowerCase().includes(t))) score += 8;
        if (text.includes(t)) score += 3;
      }
      return { c, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.c.title.localeCompare(b.c.title))
    .slice(0, 40)
    .map((x) => x.c);
}
