"use client";

import { useState } from "react";

const fits = [
  {
    id: "under",
    label: "Underfit",
    train: 42,
    val: 44,
    story: "Too simple. A straight line through a curve. Train error stays high; val error matches it. More epochs will not save a model that cannot represent the pattern.",
    fix: "Richer features, a more flexible model, or fewer naive constraints — then re-check val.",
  },
  {
    id: "good",
    label: "Good fit",
    train: 12,
    val: 16,
    story: "Train a bit better than val — expected. Both are low. This is the gap you want: learned the signal, not the noise.",
    fix: "Stop here. Freeze this checkpoint. This is what later eval is for: confirming the gap stays honest.",
  },
  {
    id: "over",
    label: "Overfit",
    train: 3,
    val: 38,
    story: "Memorized the training sheet, including typos. Train looks brilliant; val collapses. A single test set you peeked at will lie the same way.",
    fix: "More data, earlier stopping, regularization, simpler model, or dropout. Watch the val curve, not the train trophy.",
  },
] as const;

function ErrorBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-[11px] font-semibold" style={{ color: "var(--ink-muted)" }}>
        <span>{label}</span>
        <span className="font-mono">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
        <div className="h-full transition-all" style={{ width: `${value}%`, background: "var(--accent)" }} />
      </div>
    </div>
  );
}

/** Train vs val error: underfit, good fit, overfit. */
export function OverfittingUnderfitting() {
  const [id, setId] = useState<(typeof fits)[number]["id"]>("over");
  const f = fits.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same task. Three models. Watch train vs validation error:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {fits.map((fit) => (
            <button
              key={fit.id}
              type="button"
              onClick={() => setId(fit.id)}
              aria-pressed={fit.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: fit.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: fit.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {fit.label}
            </button>
          ))}
        </div>
        <div className="space-y-3" aria-live="polite">
          <ErrorBar label="Train error (lower looks “smarter”)" value={f.train} />
          <ErrorBar label="Validation error (the honest one)" value={f.val} />
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)" }}>
              {f.story}
            </div>
            <div className="rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                What to do:{" "}
              </span>
              {f.fix}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Train error is a report card you graded yourself. Validation error is the exam. Evaluation only makes sense once you refuse to trust the report card.
      </figcaption>
    </figure>
  );
}
