"use client";

import { useState } from "react";

const points = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
] as const;

const views = [
  {
    id: "fit",
    label: "Linear fit",
    formula: "ŷ = 1/3 + 1.5x",
    note: "One straight line through three points. Residuals: +0.17, −0.33, +0.17. MSE ≈ 0.056. The line is the model.",
    preds: [1.83, 3.33, 4.83],
  },
  {
    id: "mse",
    label: "MSE as a score",
    formula: "MSE = mean((y − ŷ)²)",
    note: "Squared error punishes big misses more than small ones. A 2-point miss costs 4× a 1-point miss. That is why we square.",
    preds: [1.83, 3.33, 4.83],
  },
  {
    id: "extrap",
    label: "Predict x = 4",
    formula: "ŷ(4) = 1/3 + 6 = 6.33",
    note: "Regression’s job is a number for a new x. Extrapolation past the data is a guess — the line does not know if the world stays linear.",
    preds: [1.83, 3.33, 4.83],
  },
] as const;

/** Tiny 3-point linear regression: line, residuals, MSE. */
export function RegressionIdea() {
  const [id, setId] = useState<(typeof views)[number]["id"]>("fit");
  const v = views.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Three points: (1, 2), (2, 3), (3, 5). Click what to inspect:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setId(view.id)}
              aria-pressed={view.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: view.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: view.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {view.label}
            </button>
          ))}
        </div>
        <div
          className="relative mb-3 h-40 rounded-[--radius-sm] border"
          style={{ background: "var(--paper)" }}
          role="img"
          aria-label="Scatter of three points with a fitted line. Predictions sit on the line; actuals are the dots."
        >
          <div
            className="absolute inset-x-6 bottom-8 top-8 origin-bottom-left"
            style={{
              borderTop: "2px solid var(--accent)",
              transform: "rotate(-32deg)",
              width: "78%",
            }}
            aria-hidden
          />
          {points.map((p, i) => {
            const left = `${18 + (p.x - 1) * 28}%`;
            const bottom = `${14 + (p.y - 2) * 18}%`;
            return (
              <div
                key={`${p.x}-${p.y}`}
                className="absolute h-3 w-3 rounded-full"
                style={{
                  left,
                  bottom,
                  background: "var(--ink)",
                  transform: "translate(-50%, 50%)",
                }}
                title={`(${p.x}, ${p.y}) ŷ≈${v.preds[i]}`}
              />
            );
          })}
          <span className="absolute bottom-1 left-2 font-mono text-[10px]" style={{ color: "var(--ink-faint)" }}>
            x →
          </span>
          <span className="absolute left-1 top-1 font-mono text-[10px]" style={{ color: "var(--ink-faint)" }}>
            y
          </span>
        </div>
        <div className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
            {v.formula}
          </p>
          <p className="mt-1">{v.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Regression predicts a number. The line is a model; MSE is how we score the misses. Logistic regression is classification — next lessons.
      </figcaption>
    </figure>
  );
}
