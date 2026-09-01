"use client";

import { useState } from "react";

/*
 * Exact vs approximate nearest-neighbor search. Exact compares the query with
 * every point (slow, always correct). Approximate checks only a smart subset
 * (fast, usually correct). Illustrative.
 */
const dots = [
  { x: 12, y: 22 }, { x: 20, y: 40 }, { x: 32, y: 18 }, { x: 44, y: 30 },
  { x: 56, y: 20 }, { x: 64, y: 38 }, { x: 74, y: 24 }, { x: 84, y: 40 },
  { x: 16, y: 64 }, { x: 26, y: 78 }, { x: 40, y: 68 }, { x: 50, y: 82 },
  { x: 60, y: 66 }, { x: 72, y: 80 }, { x: 82, y: 70 }, { x: 46, y: 50 },
];
const query = { x: 52, y: 46 };
// A plausible "visited" subset an ANN index would explore (indices into dots).
const annVisited = [15, 3, 5, 12, 4];

export function AnnVsExact() {
  const [mode, setMode] = useState<"exact" | "ann">("ann");

  const ranked = dots
    .map((d, i) => ({ i, dist: Math.hypot(d.x - query.x, d.y - query.y) }))
    .sort((a, b) => a.dist - b.dist);
  const trueNearest = ranked[0].i;

  const visited = mode === "exact" ? dots.map((_, i) => i) : annVisited;
  const annBest = annVisited
    .map((i) => ({ i, dist: Math.hypot(dots[i].x - query.x, dots[i].y - query.y) }))
    .sort((a, b) => a.dist - b.dist)[0].i;
  const found = mode === "exact" ? trueNearest : annBest;
  const correct = found === trueNearest;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 inline-flex rounded-[--radius-sm] border p-0.5" role="group" aria-label="Search mode">
          {(["exact", "ann"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className="rounded-[--radius-sm] px-3 py-1 text-sm font-semibold"
              style={{ background: mode === m ? "var(--accent)" : "transparent", color: mode === m ? "var(--accent-ink)" : "var(--ink-muted)" }}
            >
              {m === "exact" ? "Exact (brute force)" : "Approximate (ANN)"}
            </button>
          ))}
        </div>

        <div className="relative w-full" style={{ aspectRatio: "16 / 9", background: "var(--paper)", borderRadius: "var(--radius-sm)" }} role="img" aria-label={`${mode === "exact" ? "Exact" : "Approximate"} search comparing ${visited.length} of ${dots.length} points.`}>
          {dots.map((d, i) => {
            const isChecked = visited.includes(i);
            const isResult = i === found;
            return (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all"
                style={{
                  left: `${d.x}%`, top: `${d.y}%`,
                  width: isResult ? 14 : 9, height: isResult ? 14 : 9,
                  background: isResult ? "oklch(0.6 0.15 150)" : isChecked ? "var(--accent)" : "var(--ink-faint)",
                  opacity: isResult ? 1 : isChecked ? 0.9 : 0.35,
                  outline: isResult ? "2px solid oklch(0.6 0.15 150)" : "none",
                }}
              />
            );
          })}
          <span className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ left: `${query.x}%`, top: `${query.y}%`, width: 14, height: 14, background: "oklch(0.6 0.18 25)", boxShadow: "0 0 0 3px color-mix(in oklab, oklch(0.6 0.18 25) 30%, transparent)" }} title="Query" />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Comparisons</div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>{visited.length} / {dots.length}</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Speed</div>
            <div className="text-lg font-bold">{mode === "exact" ? "Slow" : "Fast"}</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Found true nearest?</div>
            <div className="text-lg font-bold" style={{ color: correct ? "oklch(0.55 0.15 150)" : "oklch(0.6 0.18 25)" }}>{correct ? "Yes" : "Missed"}</div>
          </div>
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }}>
          Exact checks <strong>every</strong> point and is always right but slow. ANN checks a <strong>smart subset</strong> — far faster, and usually finds the same answer. The small chance of missing is called a <strong>recall</strong> trade-off.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Approximate nearest neighbor trades a tiny bit of recall for massive speed at scale.
      </figcaption>
    </figure>
  );
}
