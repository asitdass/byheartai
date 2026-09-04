"use client";

import { useMemo, useState } from "react";

const image = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

const kernels = [
  { id: "edge", label: "Edge", k: [[1, 0], [0, -1]] as const, why: "Responds when a 1 sits above a 0 on the diagonal — a cheap edge/checker detector." },
  { id: "blur", label: "Box blur", k: [[0.25, 0.25], [0.25, 0.25]] as const, why: "Averages a 2×2 neighborhood. Same weights, every location — that sharing is the CNN idea." },
  { id: "id", label: "Skip-ish", k: [[1, 0], [0, 0]] as const, why: "Copies the top-left of each window. Still a convolution: local, translation-equivariant." },
] as const;

function conv(k: readonly (readonly number[])[]) {
  const out: number[][] = [];
  for (let i = 0; i < 3; i++) {
    const row: number[] = [];
    for (let j = 0; j < 3; j++) {
      let s = 0;
      for (let u = 0; u < 2; u++) for (let v = 0; v < 2; v++) s += image[i + u][j + v] * k[u][v];
      row.push(Math.round(s * 100) / 100);
    }
    out.push(row);
  }
  return out;
}

function pool(feat: number[][]) {
  const a = Math.max(feat[0][0], feat[0][1], feat[1][0], feat[1][1]);
  const b = Math.max(feat[0][1], feat[0][2], feat[1][1], feat[1][2]);
  const c = Math.max(feat[1][0], feat[1][1], feat[2][0], feat[2][1]);
  const d = Math.max(feat[1][1], feat[1][2], feat[2][1], feat[2][2]);
  return [
    [a, b],
    [c, d],
  ];
}

const stages = [
  { id: "patch", label: "1. Slide a filter" },
  { id: "map", label: "2. Feature map" },
  { id: "pool", label: "3. Pool" },
] as const;

/** Tiny conv: shared filter, feature map, pooling. */
export function CnnIdea() {
  const [kid, setKid] = useState<(typeof kernels)[number]["id"]>("edge");
  const [stage, setStage] = useState<(typeof stages)[number]["id"]>("map");
  const [pos, setPos] = useState(0);
  const kernel = kernels.find((x) => x.id === kid)!;
  const feat = useMemo(() => conv(kernel.k), [kernel]);
  const pooled = useMemo(() => pool(feat), [feat]);
  const pi = Math.floor(pos / 3);
  const pj = pos % 3;
  const windowSum = feat[pi][pj];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          4×4 checkerboard · 2×2 filter · valid conv → 3×3 map
        </p>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {kernels.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKid(k.id)}
              aria-pressed={k.id === kid}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: k.id === kid ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: k.id === kid ? "var(--accent)" : "var(--rule)",
              }}
            >
              {k.label}
            </button>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {stages.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStage(s.id)}
              aria-pressed={s.id === stage}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: s.id === stage ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: s.id === stage ? "var(--accent)" : "var(--rule)",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2" aria-live="polite">
          <div>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Input
            </div>
            <div className="grid grid-cols-4 gap-0.5" role="img" aria-label="Four by four input grid.">
              {image.flatMap((row, i) =>
                row.map((v, j) => {
                  const inWin = stage === "patch" && i >= pi && i < pi + 2 && j >= pj && j < pj + 2;
                  return (
                    <div
                      key={`${i}-${j}`}
                      className="flex h-8 items-center justify-center rounded-[--radius-sm] font-mono text-xs"
                      style={{
                        background: inWin ? "color-mix(in oklab, var(--accent) 22%, var(--paper))" : "var(--paper)",
                        border: "1px solid var(--rule)",
                        borderColor: inWin ? "var(--accent)" : "var(--rule)",
                      }}
                    >
                      {v}
                    </div>
                  );
                }),
              )}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              {stage === "pool" ? "2×2 max-pool (stride 1, toy)" : "Feature map"}
            </div>
            {stage === "pool" ? (
              <div className="grid w-max grid-cols-2 gap-0.5">
                {pooled.flatMap((row, i) =>
                  row.map((v, j) => (
                    <div
                      key={`p${i}-${j}`}
                      className="flex h-8 w-12 items-center justify-center rounded-[--radius-sm] font-mono text-xs"
                      style={{ background: "var(--paper)", border: "1px solid var(--accent)" }}
                    >
                      {v}
                    </div>
                  )),
                )}
              </div>
            ) : (
              <div className="grid w-max grid-cols-3 gap-0.5">
                {feat.flatMap((row, i) =>
                  row.map((v, j) => (
                    <div
                      key={`f${i}-${j}`}
                      className="flex h-8 w-10 items-center justify-center rounded-[--radius-sm] font-mono text-xs"
                      style={{
                        background: i === pi && j === pj && stage === "patch" ? "color-mix(in oklab, var(--accent) 22%, var(--paper))" : "var(--paper)",
                        border: "1px solid var(--rule)",
                        borderColor: i === pi && j === pj && stage === "patch" ? "var(--accent)" : "var(--rule)",
                      }}
                    >
                      {v}
                    </div>
                  )),
                )}
              </div>
            )}
            {stage === "patch" && (
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-[--radius-sm] border px-2 py-1 text-xs"
                  style={{ background: "var(--paper)" }}
                  onClick={() => setPos((p) => (p + 8) % 9)}
                >
                  Prev window
                </button>
                <button
                  type="button"
                  className="rounded-[--radius-sm] border px-2 py-1 text-xs"
                  style={{ background: "var(--paper)" }}
                  onClick={() => setPos((p) => (p + 1) % 9)}
                >
                  Next window
                </button>
                <span className="font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  Σ = {windowSum}
                </span>
              </div>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm">{kernel.why}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Convolution reuses one small filter at every location. Pooling shrinks the map. That inductive bias still powers vision backbones in 2026.
      </figcaption>
    </figure>
  );
}
