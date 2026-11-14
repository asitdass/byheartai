import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Level, Reference } from "@/lib/types";

/** A hands-on, step-by-step setup guide (content/guides/*.mdx). */
export interface Guide {
  slug: string;
  title: string;
  summary: string;
  /** What the reader ends up with, in one line. */
  outcome: string;
  level: Level;
  minutes: number;
  /** Tool ids from data/tools.json. */
  tools: string[];
  tags: string[];
  /** Concept ids from content/learn worth reading alongside. */
  concepts: string[];
  sources: Reference[];
  datePublished: string;
  /** Date the commands were last checked against the official docs. */
  lastVerified: string;
  status: "draft" | "published";
  /** Position on the guides hub; lower comes first. */
  order: number;
  body: string;
}

/** One issue of the weekly "What's new" radar (content/radar/YYYY-MM-DD.mdx). */
export interface RadarIssue {
  slug: string;
  title: string;
  date: string;
  summary: string;
  highlights: string[];
  body: string;
}

const isDev = process.env.NODE_ENV === "development";
const levelRank: Record<Level, number> = { beginner: 0, intermediate: 1, advanced: 2 };

function readDir(dir: string): { slug: string; data: Record<string, unknown>; body: string }[] {
  const full = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, f), "utf8"));
      return { slug: f.replace(/\.mdx$/, ""), data, body: content };
    });
}

function day(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v ?? "").slice(0, 10);
}

const list = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : []);

let _guides: Guide[] | null = null;
export function getAllGuides(): Guide[] {
  if (_guides && !isDev) return _guides;
  _guides = readDir("guides")
    .map(({ slug, data, body }) => ({
      slug,
      title: String(data.title ?? ""),
      summary: String(data.summary ?? ""),
      outcome: String(data.outcome ?? ""),
      level: (data.level as Level) ?? "beginner",
      minutes: Number(data.minutes ?? 15),
      tools: list(data.tools),
      tags: list(data.tags),
      concepts: list(data.concepts),
      sources: Array.isArray(data.sources) ? (data.sources as Reference[]) : [],
      datePublished: day(data.datePublished),
      lastVerified: day(data.lastVerified ?? data.datePublished),
      status: (data.status as Guide["status"]) ?? "draft",
      order: Number(data.order ?? 999),
      body,
    }))
    .sort((a, b) => a.order - b.order || levelRank[a.level] - levelRank[b.level] || a.title.localeCompare(b.title));
  return _guides;
}

export function getPublishedGuides(): Guide[] {
  return getAllGuides().filter((g) => g.status === "published");
}

export function getGuide(slug: string): Guide | undefined {
  return getAllGuides().find((g) => g.slug === slug);
}

let _radar: RadarIssue[] | null = null;
export function getRadarIssues(): RadarIssue[] {
  if (_radar && !isDev) return _radar;
  _radar = readDir("radar")
    .map(({ slug, data, body }) => ({
      slug,
      title: String(data.title ?? ""),
      date: day(data.date ?? slug),
      summary: String(data.summary ?? ""),
      highlights: list(data.highlights),
      body,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
  return _radar;
}

export function getRadarIssue(slug: string): RadarIssue | undefined {
  return getRadarIssues().find((r) => r.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
