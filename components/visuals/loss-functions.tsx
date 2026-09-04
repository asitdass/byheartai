"use client";

import { useState } from "react";

const modes = [
  {
    id: "mse",
    label: "MSE (regression)",
    formula: "L = (ŷ − y)²",
    setup: "Predict house price. True y = 340. Drag the prediction.",
    unit: "k$",
    yTrue: 340,
    min: 100,
    max: 580,
    step: 10,
    defaultPred: 410,
    score: (yHat: number) => (yHat - 340) ** 2,
    read: (yHat: number, L: number) =>
      `Error ${yHat - 340} k$. Squared → loss ${L.toFixed(0)}. Far misses get punished extra because of the square.`,
  },
  {
    id: "ce",
    label: "Cross-entropy (class)",
    formula: "L = −log(p_correct)",
    setup: "Spam vs not. True label = spam. Drag the model's P(spam).",
    unit: "",
    yTrue: 1,
    min: 0.02,
    max: 0.98,
    step: 0.02,
    defaultPred: 0.3,
    score: (p: number) => -Math.log(p),
    read: (p: number, L: number) =>
      `Model said P(spam)=${p.toFixed(2)}. Loss ${L.toFixed(2)}. Confident and wrong is very expensive (p→0, L→∞).`,
  },
] as const;

/** MSE vs cross-entropy as you drag the prediction. */
export function LossFunctions() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("mse");
  const [pred, setPred] = useState<Record<string, number>>({ mse: 410, ce: 0.3 });
  const m = modes.find((x) => x.id === id)!;
  const yHat = pred[id] ?? m.defaultPred;
  const L = m.score(yHat);
  const maxL = id === "mse" ? (100 - 340) ** 2 : -Math.log(0.02);
  const width = Math.min(100, (L / maxL) * 100);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Loss is a number that says “how wrong.” Pick a loss and drag the prediction:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {modes.map((ch) => (
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
        <div className="space-y-3" aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
            {m.formula}
          </p>
          <p className="text-sm">{m.setup}</p>
          <div className="flex items-center gap-3">
            <label htmlFor="loss-pred" className="text-sm font-semibold" style={{ whiteSpace: "nowrap" }}>
              {id === "mse" ? "ŷ price" : "P(spam)"}
            </label>
            <input
              id="loss-pred"
              type="range"
              min={m.min}
              max={m.max}
              step={m.step}
              value={yHat}
              onChange={(e) => setPred((p) => ({ ...p, [id]: parseFloat(e.target.value) }))}
              className="flex-1"
              style={{ accentColor: "var(--accent)" }}
            />
            <span className="w-14 text-right font-mono text-sm" style={{ color: "var(--accent)" }}>
              {id === "mse" ? yHat.toFixed(0) : yHat.toFixed(2)}
            </span>
          </div>
          <div>
            <div className="mb-0.5 flex justify-between text-[11px] font-semibold" style={{ color: "var(--ink-muted)" }}>
              <span>Loss</span>
              <span className="font-mono">{id === "mse" ? L.toFixed(0) : L.toFixed(2)}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
              <div className="h-full" style={{ width: `${Math.max(width, 3)}%`, background: "var(--accent)" }} />
            </div>
          </div>
          <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }}>
            {m.read(yHat, L)}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Training is “pick parameters that make this number small.” The loss you choose is the thing you actually optimize.
      </figcaption>
    </figure>
  );
}
