"use client";

import { useState } from "react";

/*
 * Interactive similarity explorer. Vector A is fixed; adjust vector B's angle and
 * length to see how cosine similarity, dot product, and Euclidean distance react.
 * Key insight: cosine ignores length (it's all about direction); the others don't.
 */
const ORIGIN = { x: 45, y: 80 };
const SCALE = 30;
const A_LEN = 1.4;

export function SimilarityMetrics() {
  const [angle, setAngle] = useState(35); // degrees between A and B
  const [bLen, setBLen] = useState(1.1);

  const rad = (angle * Math.PI) / 180;
  const A = { x: A_LEN, y: 0 };
  const B = { x: bLen * Math.cos(rad), y: bLen * Math.sin(rad) };

  const dot = A.x * B.x + A.y * B.y;
  const magA = Math.hypot(A.x, A.y);
  const magB = Math.hypot(B.x, B.y);
  const cosine = dot / (magA * magB);
  const euclid = Math.hypot(A.x - B.x, A.y - B.y);

  const toSvg = (v: { x: number; y: number }) => ({ x: ORIGIN.x + v.x * SCALE, y: ORIGIN.y - v.y * SCALE });
  const aEnd = toSvg(A);
  const bEnd = toSvg(B);

  const verdict =
    cosine > 0.85 ? "Very similar direction" : cosine > 0.5 ? "Somewhat similar" : cosine > 0 ? "Weakly related" : "Unrelated / opposite";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[--radius-sm]" style={{ background: "var(--paper)" }}>
            <svg viewBox="0 0 100 90" className="h-full w-full" role="img" aria-label={`Two vectors with a ${angle} degree angle between them. Cosine similarity ${cosine.toFixed(2)}.`}>
              <line x1={ORIGIN.x} y1={ORIGIN.y} x2={aEnd.x} y2={aEnd.y} stroke="var(--accent)" strokeWidth={1.2} markerEnd="url(#arrowA)" />
              <line x1={ORIGIN.x} y1={ORIGIN.y} x2={bEnd.x} y2={bEnd.y} stroke="oklch(0.6 0.15 260)" strokeWidth={1.2} markerEnd="url(#arrowB)" />
              <line x1={aEnd.x} y1={aEnd.y} x2={bEnd.x} y2={bEnd.y} stroke="var(--ink-faint)" strokeWidth={0.5} strokeDasharray="1.5 1.5" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r={1} fill="var(--ink)" />
              <text x={aEnd.x + 1} y={aEnd.y} fontSize={5} fill="var(--accent)">A</text>
              <text x={bEnd.x + 1} y={bEnd.y - 1} fontSize={5} fill="oklch(0.6 0.15 260)">B</text>
              <defs>
                <marker id="arrowA" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 z" fill="var(--accent)" />
                </marker>
                <marker id="arrowB" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 z" fill="oklch(0.6 0.15 260)" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div>
              <label className="flex items-center justify-between text-sm font-semibold">
                Angle between A and B <span className="font-mono" style={{ color: "var(--accent)" }}>{angle}°</span>
              </label>
              <input type="range" min={0} max={150} step={1} value={angle} onChange={(e) => setAngle(+e.target.value)} className="w-full" style={{ accentColor: "var(--accent)" }} />
            </div>
            <div>
              <label className="flex items-center justify-between text-sm font-semibold">
                Length of B <span className="font-mono" style={{ color: "var(--accent)" }}>{bLen.toFixed(1)}×</span>
              </label>
              <input type="range" min={0.3} max={1.6} step={0.1} value={bLen} onChange={(e) => setBLen(+e.target.value)} className="w-full" style={{ accentColor: "var(--accent)" }} />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <Metric label="Cosine" value={cosine.toFixed(2)} highlight />
              <Metric label="Dot product" value={dot.toFixed(2)} />
              <Metric label="Euclidean" value={euclid.toFixed(2)} />
            </div>
            <p className="rounded-[--radius-sm] p-2 text-center text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
              {verdict}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }}>
          Try it: change <strong>only</strong> the length of B — <strong>cosine stays the same</strong> (it measures direction), while dot product and Euclidean distance both change.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Cosine = angle only · Dot product = angle and magnitude · Euclidean = straight-line distance.
      </figcaption>
    </figure>
  );
}

function Metric({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)", outline: highlight ? "2px solid var(--accent)" : "none" }}>
      <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{label}</div>
      <div className="text-lg font-bold" style={{ color: highlight ? "var(--accent)" : "var(--ink)" }}>{value}</div>
    </div>
  );
}
