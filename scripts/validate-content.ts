/*
 * Content validation (build gate). See docs/CONTENT_SCHEMA.md section 13.
 * Self-contained: reads MDX front-matter directly so it runs under tsx without
 * pulling in the Next.js/server runtime.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "learn");
const REQUIRED = ["id", "slug", "title", "category", "level", "summary", "author", "status"] as const;
const GRAPH_FIELDS = ["prerequisites", "next", "related", "alternatives", "confusedWith"] as const;
const LEVELS = new Set(["beginner", "intermediate", "advanced"]);
const STATUSES = new Set(["draft", "in-review", "published", "deprecated"]);
const RECOMMENDED_SECTIONS = ["Mental model", "How it works", "When NOT to use", "Know this by heart"];

interface Entry {
  file: string;
  data: Record<string, unknown>;
  body: string;
}

const errors: string[] = [];
const warnings: string[] = [];

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

function asArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(String);
  if (v == null || v === "") return [];
  return [String(v)];
}

const files = walk(CONTENT_DIR);
const entries: Entry[] = files.map((file) => {
  const parsed = matter(fs.readFileSync(file, "utf8"));
  return { file: path.relative(process.cwd(), file), data: parsed.data, body: parsed.content };
});

// Index by id
const byId = new Map<string, Entry>();
const seenCategorySlug = new Set<string>();

for (const e of entries) {
  const { data, file } = e;

  for (const field of REQUIRED) {
    if (!data[field] || String(data[field]).trim() === "") {
      errors.push(`${file}: missing required field "${field}"`);
    }
  }

  const id = String(data.id ?? "");
  if (id) {
    if (byId.has(id)) errors.push(`${file}: duplicate concept id "${id}" (also in ${byId.get(id)!.file})`);
    else byId.set(id, e);
  }

  const level = String(data.level ?? "");
  if (level && !LEVELS.has(level)) errors.push(`${file}: invalid level "${level}"`);

  const status = String(data.status ?? "");
  if (status && !STATUSES.has(status)) errors.push(`${file}: invalid status "${status}"`);

  const catSlug = `${data.category}/${data.slug}`;
  if (data.category && data.slug) {
    if (seenCategorySlug.has(catSlug)) errors.push(`${file}: duplicate category/slug "${catSlug}"`);
    else seenCategorySlug.add(catSlug);
  }

  // Quiz consistency: front-matter quizId should match a <Quiz id="..."> in the body
  if (data.quizId) {
    if (!e.body.includes(`id="${data.quizId}"`)) {
      warnings.push(`${file}: quizId "${data.quizId}" not referenced by a <Quiz id="..."> in the body`);
    }
  }

  // Summary length (meta description quality)
  const summary = String(data.summary ?? "");
  if (summary && summary.length > 165) {
    warnings.push(`${file}: summary is ${summary.length} chars (aim for <= 160)`);
  }

  // Recommended sections
  for (const section of RECOMMENDED_SECTIONS) {
    const inHeading = new RegExp(`^#{2,3}\\s+.*${section}`, "im").test(e.body);
    const asComponent = section === "Know this by heart" && /<MemoryCard>/.test(e.body);
    if (!inHeading && !asComponent) {
      warnings.push(`${file}: missing recommended section "${section}"`);
    }
  }
}

// Graph reference checks (dangling refs -> warning during partial curriculum; cycles -> error)
for (const e of entries) {
  for (const field of GRAPH_FIELDS) {
    for (const ref of asArray(e.data[field])) {
      if (!byId.has(ref)) {
        warnings.push(`${e.file}: ${field} references "${ref}" which has no lesson yet`);
      }
    }
  }
}

// Cycle detection in prerequisites (only among existing concepts)
const WHITE = 0, GRAY = 1, BLACK = 2;
const color = new Map<string, number>();
const stack: string[] = [];

function visit(id: string): boolean {
  color.set(id, GRAY);
  stack.push(id);
  const entry = byId.get(id);
  const prereqs = entry ? asArray(entry.data.prerequisites).filter((p) => byId.has(p)) : [];
  for (const p of prereqs) {
    const c = color.get(p) ?? WHITE;
    if (c === GRAY) {
      const cycleStart = stack.indexOf(p);
      const cycle = [...stack.slice(cycleStart), p].join(" -> ");
      errors.push(`prerequisites cycle detected: ${cycle}`);
      return true;
    }
    if (c === WHITE && visit(p)) return true;
  }
  stack.pop();
  color.set(id, BLACK);
  return false;
}

for (const id of byId.keys()) {
  if ((color.get(id) ?? WHITE) === WHITE) visit(id);
}

// Report
console.log(`\nByHeart AI content validation`);
console.log(`  Concepts found: ${entries.length}`);
console.log(`  Errors:   ${errors.length}`);
console.log(`  Warnings: ${warnings.length}\n`);

if (warnings.length) {
  console.log("Warnings:");
  for (const w of warnings) console.log(`  ! ${w}`);
  console.log("");
}

if (errors.length) {
  console.error("Errors:");
  for (const err of errors) console.error(`  x ${err}`);
  console.error("\nContent validation FAILED.\n");
  process.exit(1);
}

console.log("Content validation passed.\n");
