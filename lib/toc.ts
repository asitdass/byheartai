import type { TocItem } from "@/lib/types";

/** GitHub-style slug, matching rehype-slug output for headings. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Extract h2/h3 headings from an MDX body for the "On this page" TOC.
 * Skips fenced code blocks so `## comments` inside code aren't captured.
 */
export function extractToc(body: string): TocItem[] {
  const lines = body.split("\n");
  const toc: TocItem[] = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/[#*`]/g, "").trim();
      toc.push({ id: slugify(text), text, level });
    }
  }
  return toc;
}
