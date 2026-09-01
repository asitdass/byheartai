"use client";

import { useRef, useState } from "react";

/*
 * Interactive nearest-neighbor search. Click anywhere to place your query point;
 * the k closest stored points (by distance) light up. Illustrative 2D view of
 * what vector search does in hundreds of dimensions.
 */
const dots = [
  { x: 15, y: 20 }, { x: 22, y: 35 }, { x: 30, y: 15 }, { x: 40, y: 28 },
  { x: 55, y: 18 }, { x: 62, y: 30 }, { x: 70, y: 22 }, { x: 80, y: 35 },
  { x: 18, y: 60 }, { x: 28, y: 72 }, { x: 38, y: 65 }, { x: 48, y: 78 },
  { x: 58, y: 62 }, { x: 68, y: 75 }, { x: 78, y: 66 }, { x: 85, y: 80 },
  { x: 45, y: 48 }, { x: 52, y: 52 }, { x: 33, y: 45 }, { x: 66, y: 48 },
];

export function NearestNeighborSearch() {
  const [query, setQuery] = useState({ x: 50, y: 45 });
  const [k, setK] = useState(3);
  const boxRef = useRef<HTMLDivElement>(null);

  const ranked = dots
    .map((d, i) => ({ i, d, dist: Math.hypot(d.x - query.x, d.y - query.y) }))
    .sort((a, b) => a.dist - b.dist);
  const nearest = new Set(ranked.slice(0, k).map((r) => r.i));

  function place(e: React.MouseEvent<HTMLDivElement>) {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setQuery({ x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) });
  }

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>Click the grid to move your query. The {k} nearest points light up.</p>
          <label className="flex items-center gap-2 text-sm font-semibold">
            top-k
            <input type="range" min={1} max={6} value={k} onChange={(e) => setK(+e.target.value)} style={{ accentColor: "var(--accent)" }} />
            <span className="w-4 font-mono" style={{ color: "var(--accent)" }}>{k}</span>
          </label>
        </div>

        <div
          ref={boxRef}
          onClick={place}
          className="relative w-full cursor-crosshair"
          style={{ aspectRatio: "16 / 9", background: "var(--paper)", borderRadius: "var(--radius-sm)" }}
          role="img"
          aria-label={`Query point with its ${k} nearest neighbors highlighted.`}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
            {ranked.slice(0, k).map((r) => (
              <line key={r.i} x1={query.x} y1={query.y} x2={r.d.x} y2={r.d.y} stroke="var(--accent)" strokeWidth={0.4} opacity={0.6} />
            ))}
          </svg>

          {dots.map((d, i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${d.x}%`, top: `${d.y}%`,
                width: nearest.has(i) ? 12 : 8, height: nearest.has(i) ? 12 : 8,
                background: nearest.has(i) ? "var(--accent)" : "var(--ink-faint)",
                opacity: nearest.has(i) ? 1 : 0.5,
              }}
            />
          ))}

          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full ring-2"
            style={{ left: `${query.x}%`, top: `${query.y}%`, width: 14, height: 14, background: "oklch(0.6 0.18 25)", boxShadow: "0 0 0 3px color-mix(in oklab, oklch(0.6 0.18 25) 30%, transparent)" }}
            title="Query"
          />
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }}>
          The <span style={{ color: "oklch(0.6 0.18 25)" }}>red dot</span> is your query; the highlighted dots are its nearest neighbors — the results vector search returns.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Vector search = find the stored vectors closest to the query vector (its nearest neighbors).
      </figcaption>
    </figure>
  );
}
