"use client";

import { useState } from "react";

/*
 * Matryoshka embeddings pack the most important information into the first
 * dimensions, so you can truncate the vector and keep most of the quality.
 * Drag to keep fewer dimensions and watch size shrink while quality holds up.
 * Illustrative numbers.
 */
const FULL = 16;
const values = [0.92, -0.81, 0.74, 0.68, -0.6, 0.55, 0.48, -0.42, 0.31, -0.28, 0.22, 0.19, -0.15, 0.12, -0.08, 0.05];
const sizes = [2, 4, 8, 16];
const qualityFor: Record<number, number> = { 16: 100, 8: 98, 4: 93, 2: 84 };

export function MatryoshkaVisualizer() {
  const [idx, setIdx] = useState(3); // default full
  const keep = sizes[idx];
  const quality = qualityFor[keep];
  const sizePct = Math.round((keep / FULL) * 100);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Keep only the first <strong style={{ color: "var(--accent)" }}>{keep}</strong> of {FULL} dimensions — the vector still works.
        </p>

        <div className="flex items-end gap-1" style={{ height: 90 }} role="img" aria-label={`Embedding truncated to its first ${keep} dimensions, retaining about ${quality} percent of quality.`}>
          {values.map((v, i) => {
            const kept = i < keep;
            return (
              <div key={i} className="flex flex-1 flex-col justify-end" style={{ height: "100%" }}>
                <div
                  className="rounded-t-[2px] transition-all"
                  style={{
                    height: `${Math.abs(v) * 100}%`,
                    background: kept ? "var(--accent)" : "var(--paper)",
                    border: kept ? "none" : "1px dashed var(--rule)",
                    opacity: kept ? 1 : 0.5,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-faint)" }}>
          <span>dim 1</span>
          <span>most important first →</span>
          <span>dim {FULL}</span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <label htmlFor="mat" className="text-sm font-semibold" style={{ whiteSpace: "nowrap" }}>Dimensions kept</label>
          <input id="mat" type="range" min={0} max={sizes.length - 1} step={1} value={idx} onChange={(e) => setIdx(+e.target.value)} className="flex-1" style={{ accentColor: "var(--accent)" }} />
          <span className="w-8 text-right font-mono text-sm" style={{ color: "var(--accent)" }}>{keep}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm">
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Storage / speed</div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>{sizePct}%</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>of full size</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Quality retained</div>
            <div className="text-lg font-bold" style={{ color: "oklch(0.55 0.15 150)" }}>≈ {quality}%</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>of full accuracy</div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        One model, many sizes: truncate a Matryoshka embedding for big savings with only a small quality drop.
      </figcaption>
    </figure>
  );
}
