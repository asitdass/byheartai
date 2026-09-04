"use client";

import { useMemo, useState } from "react";

const acts = [
  { id: "relu", label: "ReLU", formula: "max(0, z)" },
  { id: "sigmoid", label: "sigmoid", formula: "1 / (1 + e⁻ᶻ)" },
  { id: "tanh", label: "tanh", formula: "tanh(z)" },
  { id: "gelu", label: "GELU", formula: "z · Φ(z)  (approx. tanh form)" },
  { id: "linear", label: "none (linear)", formula: "z  (identity)" },
] as const;

function relu(z: number) {
  return Math.max(0, z);
}
function sigmoid(z: number) {
  return 1 / (1 + Math.exp(-z));
}
function gelu(z: number) {
  return 0.5 * z * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (z + 0.044715 * z * z * z)));
}
function apply(id: (typeof acts)[number]["id"], z: number) {
  if (id === "relu") return relu(z);
  if (id === "sigmoid") return sigmoid(z);
  if (id === "tanh") return Math.tanh(z);
  if (id === "gelu") return gelu(z);
  return z;
}

const x = [1.0, 0.5] as const;
const W1 = [
  [0.8, -0.5],
  [0.3, 0.6],
] as const;
const b1 = [0.1, -0.2] as const;
const W2 = [0.4, 0.9] as const;
const b2 = 0.0;

function fmt(n: number) {
  return (Math.round(n * 1000) / 1000).toFixed(3);
}

/** Affine + activation through a 2→2→1 MLP. */
export function NeuronsLayersActivations() {
  const [id, setId] = useState<(typeof acts)[number]["id"]>("relu");
  const a = acts.find((x) => x.id === id)!;

  const { z1, h, y, yLinear } = useMemo(() => {
    const z1 = [
      W1[0][0] * x[0] + W1[0][1] * x[1] + b1[0],
      W1[1][0] * x[0] + W1[1][1] * x[1] + b1[1],
    ];
    const h = [apply(id, z1[0]), apply(id, z1[1])];
    const y = W2[0] * h[0] + W2[1] * h[1] + b2;
    const yLinear = W2[0] * z1[0] + W2[1] * z1[1] + b2;
    return { z1, h, y, yLinear };
  }, [id]);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Tiny MLP · x = [1.0, 0.5] · pick the activation
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {acts.map((act) => (
            <button
              key={act.id}
              type="button"
              onClick={() => setId(act.id)}
              aria-pressed={act.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: act.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: act.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {act.label}
            </button>
          ))}
        </div>

        <p className="mb-3 font-mono text-[11px]" style={{ color: "var(--ink-faint)" }} aria-live="polite">
          a = {a.formula}
        </p>

        <div className="grid gap-2 sm:grid-cols-3" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Affine z = Wx + b
            </div>
            <p className="font-mono text-sm">
              z₁ = {fmt(z1[0])}
              <br />
              z₂ = {fmt(z1[1])}
            </p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              After activation
            </div>
            <p className="font-mono text-sm">
              h₁ = {fmt(h[0])}
              <br />
              h₂ = {fmt(h[1])}
            </p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Output layer
            </div>
            <p className="font-mono text-sm">y = {fmt(y)}</p>
            {id !== "linear" && (
              <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
                If both layers were linear: {fmt(yLinear)} — one matrix, not two ideas.
              </p>
            )}
            {id === "linear" && (
              <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
                Stacking linear layers never leaves the linear family. Depth is wasted.
              </p>
            )}
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A neuron is affine then a nonlinearity. ReLU/GELU keep depth useful; without them, stacked layers collapse to one linear map.
      </figcaption>
    </figure>
  );
}
