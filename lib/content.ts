import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Concept, ConceptMeta, Level, Status, Reference } from "@/lib/types";
import { categories } from "@/data/categories";

const CONTENT_DIR = path.join(process.cwd(), "content", "learn");

function asArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map((x) => String(x));
  if (v == null || v === "") return [];
  return [String(v)];
}

function asDate(v: unknown): string | undefined {
  if (v == null || v === "") return undefined;
  if (v instanceof Date && !Number.isNaN(v.getTime())) {
    const localMidnight = v.getHours() === 0 && v.getMinutes() === 0 && v.getSeconds() === 0;
    const y = localMidnight ? v.getFullYear() : v.getUTCFullYear();
    const m = (localMidnight ? v.getMonth() : v.getUTCMonth()) + 1;
    const d = localMidnight ? v.getDate() : v.getUTCDate();
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  const s = String(v).trim();
  const day = s.match(/^(\d{4}-\d{2}-\d{2})/);
  if (day) return day[1];
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return undefined;
}

function asRefs(v: unknown): Reference[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x): x is Record<string, unknown> => typeof x === "object" && x !== null)
    .map((x) => ({
      title: String(x.title ?? ""),
      url: String(x.url ?? ""),
      kind: x.kind as Reference["kind"],
    }));
}

function normalize(data: Record<string, unknown>, filePath: string, body: string): Concept {
  const id = String(data.id ?? "");
  return {
    id,
    slug: String(data.slug ?? id),
    title: String(data.title ?? ""),
    category: String(data.category ?? ""),
    level: (data.level as Level) ?? "beginner",
    summary: String(data.summary ?? ""),
    keywords: asArray(data.keywords),
    prerequisites: asArray(data.prerequisites),
    next: asArray(data.next),
    related: asArray(data.related),
    alternatives: asArray(data.alternatives),
    confusedWith: asArray(data.confusedWith),
    frameworks: asArray(data.frameworks),
    products: asArray(data.products),
    papers: asRefs(data.papers),
    status: (data.status as Status) ?? "draft",
    author: String(data.author ?? ""),
    reviewer: data.reviewer ? String(data.reviewer) : undefined,
    datePublished: asDate(data.datePublished),
    dateUpdated: asDate(data.dateUpdated),
    lastReviewed: asDate(data.lastReviewed),
    version: Number(data.version ?? 1),
    quizId: data.quizId ? String(data.quizId) : undefined,
    estimatedMinutes: data.estimatedMinutes ? Number(data.estimatedMinutes) : undefined,
    body,
    filePath,
  };
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

let _cache: Concept[] | null = null;

const isDev = process.env.NODE_ENV === "development";

/** Load and cache every concept from content/learn/**.mdx. */
export function getAllConcepts(): Concept[] {
  if (_cache && !isDev) return _cache;
  const files = walk(CONTENT_DIR);
  const concepts = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    return normalize(data, path.relative(process.cwd(), file), content);
  });
  _cache = concepts;
  return concepts;
}

export function getPublishedConcepts(): Concept[] {
  return getAllConcepts().filter((c) => c.status === "published");
}

export function getConcept(category: string, slug: string): Concept | undefined {
  return getAllConcepts().find((c) => c.category === category && c.slug === slug);
}

export function getConceptById(id: string): Concept | undefined {
  return getAllConcepts().find((c) => c.id === id);
}

const levelRank: Record<Level, number> = { beginner: 0, intermediate: 1, advanced: 2 };

let _orderCache: Map<string, number> | null = null;

/**
 * Global reading order derived from the `next` chain. Lessons flow in the order a
 * learner should read them (Token → Tokenization → Context Window → …), falling
 * back to category macro-order → level → title for anything off the main chain.
 */
export function getReadingOrder(): Map<string, number> {
  if (_orderCache && !isDev) return _orderCache;
  const all = getAllConcepts();
  const byId = new Map<string, Concept>(all.map((c) => [c.id, c]));

  // Which concepts are pointed at by some `next` edge (i.e. not chain heads).
  const hasIncoming = new Set<string>();
  for (const c of all) {
    for (const n of c.next) if (byId.has(n)) hasIncoming.add(n);
  }

  const catOrder = new Map(categories.map((c, i) => [c.id, i]));
  const base = [...all].sort(
    (a, b) =>
      (catOrder.get(a.category) ?? 999) - (catOrder.get(b.category) ?? 999) ||
      levelRank[a.level] - levelRank[b.level] ||
      a.title.localeCompare(b.title),
  );

  const visited = new Set<string>();
  const order: string[] = [];
  const visitChain = (startId: string) => {
    let cur: string | undefined = startId;
    while (cur && byId.has(cur) && !visited.has(cur)) {
      visited.add(cur);
      order.push(cur);
      const node: Concept | undefined = byId.get(cur);
      cur = node?.next.find((n: string) => byId.has(n) && !visited.has(n));
    }
  };

  // Walk from natural chain heads first, then mop up anything unreached.
  for (const c of base) if (!hasIncoming.has(c.id) && !visited.has(c.id)) visitChain(c.id);
  for (const c of base) if (!visited.has(c.id)) visitChain(c.id);

  _orderCache = new Map(order.map((id, i) => [id, i]));
  return _orderCache;
}

/** Sort concepts by the global reading order (stable for off-chain items). */
export function sortByReadingOrder<T extends { id: string }>(items: T[]): T[] {
  const order = getReadingOrder();
  return [...items].sort(
    (a, b) => (order.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (order.get(b.id) ?? Number.MAX_SAFE_INTEGER),
  );
}

export function getConceptsByCategory(category: string): Concept[] {
  return sortByReadingOrder(getAllConcepts().filter((c) => c.category === category));
}

// ---- Knowledge graph helpers ----

/** Resolve a list of concept ids to their metadata (dropping unknown ids). */
export function resolveConcepts(ids: string[]): ConceptMeta[] {
  return ids
    .map((id) => getConceptById(id))
    .filter((c): c is Concept => Boolean(c));
}

export function getPrerequisites(id: string): ConceptMeta[] {
  const c = getConceptById(id);
  return c ? resolveConcepts(c.prerequisites) : [];
}

export function getRelated(id: string): ConceptMeta[] {
  const c = getConceptById(id);
  return c ? resolveConcepts(c.related) : [];
}

/** The natural next concept for a lesson (first existing `next`, else undefined). */
export function getNext(id: string): ConceptMeta | undefined {
  const c = getConceptById(id);
  if (!c) return undefined;
  return resolveConcepts(c.next)[0];
}

export function conceptHref(c: { category: string; slug: string }): string {
  return `/learn/${c.category}/${c.slug}`;
}
