"use client";

import { useMemo, useState } from "react";

/** L(w) = (w − 2)². Minimum at w = 2, L = 0. Gradient g = 2(w − 2). */
const TARGET = 2;
const W_MIN = -1;
const W_MAX = 6.5;
const START = 5.4;
const LRS = [0.1, 0.3, 0.85] as const;

function loss(w: number) {
  return (w - TARGET) ** 2;
}
function grad(w: number) {
  return 2 * (w - TARGET);
}

function toX(w: number, width: number, pad: number) {
  return pad + ((w - W_MIN) / (W_MAX - W_MIN)) * (width - pad * 2);
}
function toY(L: number, height: number, pad: number, lMax: number) {
  return pad + (1 - L / lMax) * (height - pad * 2);
}

/** Click steps of 1D gradient descent on a parabola. */
export function GradientDescent() {
  const [lr, setLr] = useState<(typeof LRS)[number]>(0.3);
  const [w, setW] = useState(START);
  const [path, setPath] = useState<number[]>([START]);

  const width = 320;
  const height = 168;
  const pad = 28;
  const lMax = Math.max(loss(W_MIN), loss(W_MAX)) * 1.08;
  const L = loss(w);
  const g = grad(w);

  const curve = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 48; i++) {
      const ww = W_MIN + (i / 48) * (W_MAX - W_MIN);
      pts.push(`${toX(ww, width, pad)},${toY(loss(ww), height, pad, lMax)}`);
    }
    return pts.join(" ");
  }, [lMax]);

  function step() {
    const next = w - lr * grad(w);
    const clipped = Math.min(W_MAX, Math.max(W_MIN, next));
    setW(clipped);
    setPath((p) => [...p, clipped].slice(-12));
  }
  function reset() {
    setW(START);
    setPath([START]);
  }

  const note =
    Math.abs(w - TARGET) < 0.08
      ? "Near the bottom. Small gradient, tiny steps. This is convergence."
      : Math.abs(1 - 2 * lr) >= 1
        ? "This learning rate is too large for this bowl: steps grow. That is divergence."
        : lr >= 0.8
          ? "Large η: you jump across the minimum and oscillate. Can still settle, or blow up."
          : "Subtract η × slope. Downhill on a 1D bowl is just: w ← w − η · 2(w − 2).";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Loss L(w) = (w − 2)². Click <span className="font-mono">Step</span> to descend.
        </p>
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
            η
          </span>
          {LRS.map((x) => (
            <button
              key={x}
              type="button"
              onClick={() => {
                setLr(x);
                reset();
              }}
              aria-pressed={x === lr}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 font-mono text-xs"
              style={{
                background: x === lr ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: x === lr ? "var(--accent)" : "var(--rule)",
              }}
            >
              {x}
            </button>
          ))}
          <button
            type="button"
            onClick={step}
            className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs font-semibold"
            style={{
              background: "var(--accent)",
              color: "var(--accent-ink)",
              borderColor: "var(--accent)",
            }}
          >
            Step
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
            style={{ background: "var(--paper)" }}
          >
            Reset
          </button>
        </div>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label={`Parabola loss with current weight ${w.toFixed(2)}`}
        >
          <polyline fill="none" stroke="var(--rule)" strokeWidth="2" points={curve} />
          {path.map((pw, i) => (
            <circle
              key={`${pw}-${i}`}
              cx={toX(pw, width, pad)}
              cy={toY(loss(pw), height, pad, lMax)}
              r={i === path.length - 1 ? 6 : 3}
              fill={i === path.length - 1 ? "var(--accent)" : "color-mix(in oklab, var(--accent) 35%, var(--paper))"}
            />
          ))}
          <text x={toX(TARGET, width, pad)} y={height - 8} textAnchor="middle" fontSize="11" fill="var(--ink-faint)">
            w* = 2
          </text>
        </svg>
        <div className="mt-2 grid gap-2 sm:grid-cols-3" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3 font-mono text-xs" style={{ background: "var(--paper)" }}>
            w = {w.toFixed(3)}
          </div>
          <div className="rounded-[--radius-sm] border p-3 font-mono text-xs" style={{ background: "var(--paper)" }}>
            L = {L.toFixed(3)}
          </div>
          <div
            className="rounded-[--radius-sm] border p-3 font-mono text-xs"
            style={{ background: "var(--paper)", borderColor: "var(--accent)" }}
          >
            g = {g.toFixed(3)}
          </div>
        </div>
        <p className="mt-2 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          Next update: w ← {w.toFixed(2)} − {lr} × {g.toFixed(2)} = {(w - lr * g).toFixed(2)}. {note}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Real models have millions of w&apos;s. The update is the same idea: follow the negative gradient of the loss.
      </figcaption>
    </figure>
  );
}
