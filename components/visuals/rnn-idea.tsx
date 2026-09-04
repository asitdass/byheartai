"use client";

import { useMemo, useState } from "react";

const tokens = [
  { t: "The", x: 1.0 },
  { t: "cat", x: 0.4 },
  { t: "sat", x: -0.2 },
  { t: ".", x: 0.1 },
] as const;

const Wx = 0.6;
const Wh = 0.5;
const b = 0.0;

function stepHidden(h: number, x: number) {
  return Math.tanh(Wx * x + Wh * h + b);
}

/** Hidden state over time, and how a 0.5 recurrent weight starves the gradient. */
export function RnnIdea() {
  const [t, setT] = useState(0);
  const hs = useMemo(() => {
    const out: number[] = [];
    let h = 0;
    for (const tok of tokens) {
      h = stepHidden(h, tok.x);
      out.push(h);
    }
    return out;
  }, []);
  const grad = useMemo(() => Array.from({ length: tokens.length }, (_, i) => Math.pow(Wh, tokens.length - 1 - i)), []);
  const h = hs[t];
  const g = grad[t];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          hₜ = tanh(Wₓ xₜ + Wₕ hₜ₋₁) · Wₕ = 0.5 · click a timestep
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tokens.map((tok, i) => (
            <button
              key={tok.t}
              type="button"
              onClick={() => setT(i)}
              aria-pressed={i === t}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: i === t ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: i === t ? "var(--accent)" : "var(--rule)",
              }}
            >
              t={i + 1} {tok.t}
            </button>
          ))}
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-1.5 text-xs" role="img" aria-label="Sequence of hidden states, each depending on the previous one.">
          {tokens.map((tok, i) => (
            <span key={tok.t} className="flex items-center gap-1.5">
              <span
                className="rounded-[--radius-sm] border px-2 py-2 text-center"
                style={{
                  background: i === t ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: i === t ? "var(--accent)" : "var(--rule)",
                  opacity: i > t ? 0.4 : 1,
                }}
              >
                <span className="block font-semibold">{tok.t}</span>
                <span className="font-mono" style={{ color: "var(--ink-faint)" }}>
                  h={i <= t ? hs[i].toFixed(2) : "—"}
                </span>
              </span>
              {i < tokens.length - 1 && <span style={{ color: "var(--ink-faint)" }}>→</span>}
            </span>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Hidden state now
            </div>
            <div className="mb-1 h-2 overflow-hidden rounded-full" style={{ background: "var(--surface)" }}>
              <div className="h-full" style={{ width: `${Math.min(100, Math.abs(h) * 100)}%`, background: "var(--accent)" }} />
            </div>
            <p className="font-mono text-sm">h = {h.toFixed(3)}</p>
            <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
              Must finish t={t} before t={t + 2} can start. No parallelism over time.
            </p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Gradient from the last step back to here
            </div>
            <div className="mb-1 h-2 overflow-hidden rounded-full" style={{ background: "var(--surface)" }}>
              <div className="h-full" style={{ width: `${Math.max(4, g * 100)}%`, background: g < 0.3 ? "oklch(0.62 0.18 25)" : "var(--accent)" }} />
            </div>
            <p className="font-mono text-sm">× Wₕ^{tokens.length - 1 - t} ≈ {g.toFixed(3)}</p>
            <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
              Early tokens starve. That is vanishing gradients, even in this 4-step toy.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        An RNN is a loop: each hidden state waits on the last. Sequential, historically essential, and the reason long-range credit assignment was so hard.
      </figcaption>
    </figure>
  );
}
