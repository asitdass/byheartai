"use client";

import { useState } from "react";

const rounds = [
  {
    id: "r0",
    label: "Start",
    pred: "Everyone gets ȳ = $220k",
    residual: "House A leftover +80k · House B −40k · House C +10k",
    note: "The first “model” is the mean. Residuals are the mistakes still on the table. Boosting will hunt those leftovers, in order.",
  },
  {
    id: "r1",
    label: "Tree 1",
    pred: "Mean + small tree on residuals → A $270k, B $190k, C $225k",
    residual: "A +30k · B −10k · C +5k  (smaller)",
    note: "Fit a shallow tree to the residuals, then add it (times a learning rate). Sequential: tree 2 cannot start until tree 1’s mistakes exist.",
  },
  {
    id: "r2",
    label: "Tree 2",
    pred: "Add another residual tree → closer still",
    residual: "A +8k · B −4k · C +1k",
    note: "Each new tree is an expert on whatever the ensemble still gets wrong. That is why boosting usually beats a single tree on tabular leaderboards.",
  },
  {
    id: "stop",
    label: "When to stop",
    pred: "Val error flattened; train still falling",
    residual: "Keep going and you fit noise (overfit).",
    note: "XGBoost, LightGBM, CatBoost are the 2026 family for spreadsheets. They are not the tool for pixels or language — that is deep learning.",
  },
] as const;

/** Sequential residual trees: the boosting idea. */
export function GradientBoosting() {
  const [id, setId] = useState<(typeof rounds)[number]["id"]>("r0");
  const r = rounds.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Boosting is a relay. Click the round:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {rounds.map((round) => (
            <button
              key={round.id}
              type="button"
              onClick={() => setId(round.id)}
              aria-pressed={round.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: round.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: round.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {round.label}
            </button>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Ensemble so far
            </div>
            <p>{r.pred}</p>
          </div>
          <div className="rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Residuals left
            </div>
            <p>{r.residual}</p>
          </div>
        </div>
        <p className="mt-3 text-sm">{r.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Forests vote in parallel. Boosting adds specialists in sequence. Same trees; opposite ensemble idea.
      </figcaption>
    </figure>
  );
}
