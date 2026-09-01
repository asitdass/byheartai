"use client";

import { useState } from "react";

/*
 * A 2D "meaning map": related words cluster together. Click a word to highlight
 * its nearest neighbors (by 2D distance). Real embeddings live in hundreds of
 * dimensions — this is a flattened, illustrative view.
 */
type Point = { word: string; x: number; y: number; group: string };

const points: Point[] = [
  { word: "dog", x: 18, y: 24, group: "animals" },
  { word: "puppy", x: 24, y: 30, group: "animals" },
  { word: "cat", x: 30, y: 20, group: "animals" },
  { word: "kitten", x: 34, y: 27, group: "animals" },
  { word: "car", x: 78, y: 26, group: "vehicles" },
  { word: "truck", x: 84, y: 32, group: "vehicles" },
  { word: "bicycle", x: 72, y: 34, group: "vehicles" },
  { word: "happy", x: 26, y: 74, group: "emotions" },
  { word: "joyful", x: 32, y: 80, group: "emotions" },
  { word: "sad", x: 20, y: 84, group: "emotions" },
  { word: "king", x: 74, y: 72, group: "royalty" },
  { word: "queen", x: 80, y: 78, group: "royalty" },
];

function dist(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function SemanticMap() {
  const [selected, setSelected] = useState<string>("dog");
  const sel = points.find((p) => p.word === selected)!;
  const neighbors = points
    .filter((p) => p.word !== selected)
    .map((p) => ({ p, d: dist(sel, p) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 3)
    .map((n) => n.p.word);
  const neighborSet = new Set(neighbors);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Click any word — its 3 nearest neighbors (closest in meaning) light up.
        </p>

        <div className="relative w-full" style={{ aspectRatio: "16 / 10", background: "var(--paper)", borderRadius: "var(--radius-sm)" }}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
            {neighbors.map((w) => {
              const n = points.find((p) => p.word === w)!;
              return <line key={w} x1={sel.x} y1={sel.y} x2={n.x} y2={n.y} stroke="var(--accent)" strokeWidth={0.4} strokeDasharray="1 1" opacity={0.6} />;
            })}
          </svg>

          {points.map((p) => {
            const isSel = p.word === selected;
            const isNeighbor = neighborSet.has(p.word);
            return (
              <button
                key={p.word}
                type="button"
                onClick={() => setSelected(p.word)}
                aria-pressed={isSel}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-xs font-medium transition-all"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  background: isSel ? "var(--accent)" : isNeighbor ? "color-mix(in oklab, var(--accent) 30%, var(--surface))" : "var(--surface)",
                  color: isSel ? "var(--accent-ink)" : "var(--ink)",
                  border: `1px solid ${isSel || isNeighbor ? "var(--accent)" : "var(--rule)"}`,
                  fontWeight: isSel ? 700 : 400,
                  zIndex: isSel ? 2 : 1,
                }}
              >
                {p.word}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }}>
          <strong style={{ color: "var(--accent)" }}>{selected}</strong> is closest to{" "}
          {neighbors.map((n, i) => (
            <span key={n}>
              <strong>{n}</strong>
              {i < neighbors.length - 1 ? ", " : ""}
            </span>
          ))}
          {" "}— because they share meaning, not spelling.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Embeddings place similar meanings near each other. Real spaces have hundreds of dimensions; this is a 2D snapshot.
      </figcaption>
    </figure>
  );
}
