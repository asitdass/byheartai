"use client";

import { useState } from "react";

/*
 * Metadata filtering: narrow the candidate set by structured tags BEFORE (or
 * alongside) the vector similarity step, so results are both relevant and valid.
 */
type Item = { x: number; y: number; type: "docs" | "blog"; lang: "en" | "fr" };
const items: Item[] = [
  { x: 18, y: 26, type: "docs", lang: "en" }, { x: 30, y: 40, type: "docs", lang: "fr" },
  { x: 42, y: 22, type: "blog", lang: "en" }, { x: 55, y: 34, type: "docs", lang: "en" },
  { x: 66, y: 24, type: "blog", lang: "fr" }, { x: 78, y: 38, type: "docs", lang: "en" },
  { x: 22, y: 62, type: "blog", lang: "en" }, { x: 34, y: 74, type: "docs", lang: "en" },
  { x: 48, y: 66, type: "blog", lang: "fr" }, { x: 60, y: 78, type: "docs", lang: "fr" },
  { x: 72, y: 64, type: "docs", lang: "en" }, { x: 84, y: 76, type: "blog", lang: "en" },
];
const query = { x: 50, y: 50 };

export function MetadataFiltering() {
  const [onlyDocs, setOnlyDocs] = useState(true);
  const [onlyEn, setOnlyEn] = useState(true);

  const passes = (it: Item) => (!onlyDocs || it.type === "docs") && (!onlyEn || it.lang === "en");
  const candidates = items.map((it, i) => ({ it, i })).filter(({ it }) => passes(it));
  const nearest = candidates
    .map(({ it, i }) => ({ i, dist: Math.hypot(it.x - query.x, it.y - query.y) }))
    .sort((a, b) => a.dist - b.dist)[0]?.i;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={onlyDocs} onChange={(e) => setOnlyDocs(e.target.checked)} style={{ accentColor: "var(--accent)" }} />
            type = <span className="font-mono">docs</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={onlyEn} onChange={(e) => setOnlyEn(e.target.checked)} style={{ accentColor: "var(--accent)" }} />
            lang = <span className="font-mono">en</span>
          </label>
        </div>

        <div className="relative w-full" style={{ aspectRatio: "16 / 9", background: "var(--paper)", borderRadius: "var(--radius-sm)" }} role="img" aria-label={`${candidates.length} of ${items.length} items pass the metadata filters; the nearest matching item is highlighted.`}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
            {nearest != null && (
              <line x1={query.x} y1={query.y} x2={items[nearest].x} y2={items[nearest].y} stroke="var(--accent)" strokeWidth={0.5} />
            )}
          </svg>
          {items.map((it, i) => {
            const ok = passes(it);
            const isResult = i === nearest;
            return (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all"
                style={{
                  left: `${it.x}%`, top: `${it.y}%`,
                  width: isResult ? 14 : 10, height: isResult ? 14 : 10,
                  background: isResult ? "oklch(0.55 0.15 150)" : ok ? "var(--accent)" : "var(--ink-faint)",
                  opacity: ok ? 1 : 0.25,
                  outline: isResult ? "2px solid oklch(0.55 0.15 150)" : "none",
                }}
                title={`${it.type} · ${it.lang}`}
              />
            );
          })}
          <span className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ left: `${query.x}%`, top: `${query.y}%`, width: 14, height: 14, background: "oklch(0.6 0.18 25)", boxShadow: "0 0 0 3px color-mix(in oklab, oklch(0.6 0.18 25) 30%, transparent)" }} title="Query" />
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }}>
          <strong style={{ color: "var(--accent)" }}>{candidates.length}</strong> of {items.length} items pass the filters. Vector search then runs only over those — so results respect your rules (right type, right language) <em>and</em> are semantically close.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Metadata filtering combines structured rules (tags) with semantic similarity for precise, valid results.
      </figcaption>
    </figure>
  );
}
