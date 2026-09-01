"use client";

import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

/*
 * HNSW search, stepped. Start at the sparse top layer (long jumps), greedily hop
 * toward the target, then descend layer by layer until the dense bottom layer
 * pinpoints the nearest neighbor. Illustrative, hand-authored path.
 */
const xById: Record<number, number> = { 1: 10, 2: 22, 3: 34, 4: 46, 5: 60, 6: 72, 7: 84, 8: 95 };
const layers = [
  { level: 2, y: 12, nodes: [4, 8] },
  { level: 1, y: 34, nodes: [2, 4, 6, 8] },
  { level: 0, y: 56, nodes: [1, 2, 3, 4, 5, 6, 7, 8] },
];
const TARGET = 5;

type Step = { level: number; node: number; note: string };
const steps: Step[] = [
  { level: 2, node: 8, note: "Enter at the top layer — few nodes, long jumps." },
  { level: 2, node: 4, note: "Greedily hop to the neighbor closest to the target." },
  { level: 1, node: 4, note: "No closer neighbor here — descend one layer." },
  { level: 1, node: 6, note: "More nodes now; hop closer to the target." },
  { level: 0, node: 6, note: "Descend to the bottom layer (every node lives here)." },
  { level: 0, node: 5, note: "Final hop lands on the nearest neighbor. Found it!" },
];

export function HnswVisualizer() {
  const [step, setStep] = useState(0);
  const path = steps.slice(0, step + 1);
  const current = steps[step];

  const isVisited = (level: number, node: number) => path.some((p) => p.level === level && p.node === node);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="w-full" style={{ background: "var(--paper)", borderRadius: "var(--radius-sm)" }}>
          <svg viewBox="0 0 100 68" className="h-full w-full" role="img" aria-label={`HNSW search step ${step + 1} of ${steps.length}: ${current.note}`}>
            {layers.map((layer) => {
              const sorted = [...layer.nodes].sort((a, b) => xById[a] - xById[b]);
              return (
                <g key={layer.level}>
                  <text x={2} y={layer.y - 6} fontSize={3} fill="var(--ink-faint)">Layer {layer.level}</text>
                  {sorted.map((n, idx) => {
                    const next = sorted[idx + 1];
                    return next ? (
                      <line key={`e-${layer.level}-${n}`} x1={xById[n]} y1={layer.y} x2={xById[next]} y2={layer.y} stroke="var(--rule)" strokeWidth={0.4} />
                    ) : null;
                  })}
                </g>
              );
            })}

            {/* Traveled path */}
            {path.map((p, i) => {
              const prev = path[i - 1];
              if (!prev) return null;
              return (
                <line
                  key={`p-${i}`}
                  x1={xById[prev.node]} y1={layers.find((l) => l.level === prev.level)!.y}
                  x2={xById[p.node]} y2={layers.find((l) => l.level === p.level)!.y}
                  stroke="var(--accent)" strokeWidth={1} strokeDasharray={prev.level !== p.level ? "1.5 1.5" : undefined}
                />
              );
            })}

            {layers.map((layer) =>
              layer.nodes.map((n) => {
                const visited = isVisited(layer.level, n);
                const isCurrent = current.level === layer.level && current.node === n;
                const isTarget = layer.level === 0 && n === TARGET;
                return (
                  <g key={`n-${layer.level}-${n}`}>
                    {isTarget && <circle cx={xById[n]} cy={layer.y} r={3.4} fill="none" stroke="oklch(0.6 0.18 25)" strokeWidth={0.6} />}
                    <circle
                      cx={xById[n]} cy={layer.y} r={isCurrent ? 2.8 : 2}
                      fill={visited ? "var(--accent)" : "var(--ink-faint)"}
                      opacity={visited ? 1 : 0.5}
                    />
                  </g>
                );
              }),
            )}
          </svg>
        </div>

        <p className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <strong style={{ color: "var(--accent)" }}>Step {step + 1}/{steps.length}:</strong> {current.note}
        </p>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            disabled={step >= steps.length - 1}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next step
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        HNSW searches top-down: sparse upper layers make big jumps, dense lower layers refine — fast search over millions of vectors.
      </figcaption>
    </figure>
  );
}
