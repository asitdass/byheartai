"use client";

import { useState } from "react";

const steps = [
  {
    id: "forward",
    label: "1. Forward",
    title: "Compute ŷ from x",
    body: "x = 2, w₁ = 0.5, w₂ = 1.5. Hidden h = w₁·x = 1. Output ŷ = w₂·h = 1.5. True y = 0.5.",
    w1: "0.50",
    w2: "1.50",
    h: "1.00",
    yhat: "1.50",
    flow: "x → h → ŷ",
  },
  {
    id: "loss",
    label: "2. Loss",
    title: "How wrong?",
    body: "L = ½(ŷ − y)² = ½(1.5 − 0.5)² = 0.50. One number. Backprop’s job is to split this blame across w₁ and w₂.",
    w1: "0.50",
    w2: "1.50",
    h: "1.00",
    yhat: "1.50",
    flow: "L = 0.50",
  },
  {
    id: "backward",
    label: "3. Backward",
    title: "Chain rule, output → input",
    body: "∂L/∂ŷ = ŷ − y = 1.0. ∂L/∂w₂ = (∂L/∂ŷ)·h = 1.0. ∂L/∂h = (∂L/∂ŷ)·w₂ = 1.5. ∂L/∂w₁ = (∂L/∂h)·x = 3.0.",
    w1: "∂L/∂w₁ = 3.0",
    w2: "∂L/∂w₂ = 1.0",
    h: "∂L/∂h = 1.5",
    yhat: "∂L/∂ŷ = 1.0",
    flow: "ŷ ← h ← x",
  },
  {
    id: "update",
    label: "4. Update",
    title: "Gradient descent on every weight",
    body: "η = 0.1. w₂ ← 1.50 − 0.1·1.0 = 1.40. w₁ ← 0.50 − 0.1·3.0 = 0.20. Next forward pass will be less wrong.",
    w1: "0.20",
    w2: "1.40",
    h: "next pass",
    yhat: "next pass",
    flow: "w ← w − η ∂L/∂w",
  },
] as const;

/** Forward, loss, backward, update on a 2-weight chain. */
export function BackpropagationViz() {
  const [id, setId] = useState<(typeof steps)[number]["id"]>("forward");
  const s = steps.find((x) => x.id === id)!;
  const idx = steps.findIndex((x) => x.id === id);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Tiny network: x —w₁→ h —w₂→ ŷ. Click the training step:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {steps.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setId(ch.id)}
              aria-pressed={ch.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: ch.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: ch.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {ch.label}
            </button>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-xs" aria-hidden>
          {["x=2", `w₁ ${s.w1}`, `h ${s.h}`, `w₂ ${s.w2}`, `ŷ ${s.yhat}`].map((node, i) => (
            <span key={node} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "var(--ink-faint)" }}>{idx >= 2 ? "←" : "→"}</span>}
              <span
                className="rounded-[--radius-sm] border px-2 py-1 font-mono"
                style={{
                  background: "var(--paper)",
                  borderColor: i === 1 || i === 3 ? "var(--accent)" : "var(--rule)",
                }}
              >
                {node}
              </span>
            </span>
          ))}
        </div>
        <div className="space-y-2" aria-live="polite">
          <p className="text-sm font-semibold">{s.title}</p>
          <p className="rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)" }}>
            {s.body}
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
            {s.flow}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Forward makes a prediction. Backward applies the chain rule so every weight gets a gradient. Then you step.
      </figcaption>
    </figure>
  );
}
