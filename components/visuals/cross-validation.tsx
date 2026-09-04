"use client";

import { useState } from "react";

const folds = [1, 2, 3, 4, 5] as const;

const modes = [
  {
    id: "kfold",
    label: "5-fold",
    note: "Each slice is the test set once. You train five times and average. One lucky 80/20 split can no longer flatter you.",
  },
  {
    id: "leak",
    label: "Leakage",
    note: "Scale, impute, or select features on the full table, then fold: the test slice already leaked into the scaler. Wrap steps in a Pipeline so each fold refits on train only.",
  },
  {
    id: "time",
    label: "Time split",
    note: "Shuffle is cheating when rows are a timeline. Train on the past, test on the future. Random k-fold lets “Tuesday” train on “Wednesday.”",
  },
  {
    id: "gold",
    label: "LLM gold set",
    note: "A single frozen eval set is one test fold. Tune prompts against it for a quarter and you overfit the gold — same lie as a single test set. Hold out a final slice, or refresh and rotate.",
  },
] as const;

/** k-fold rotation, leakage, time, and LLM gold-set analogy. */
export function CrossValidation() {
  const [fold, setFold] = useState<(typeof folds)[number]>(2);
  const [id, setId] = useState<(typeof modes)[number]["id"]>("kfold");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Which slice is held out this run?
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {folds.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setFold(n);
                setId("kfold");
              }}
              aria-pressed={fold === n && id === "kfold"}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: fold === n && id === "kfold" ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: fold === n && id === "kfold" ? "var(--accent)" : "var(--rule)",
              }}
            >
              Fold {n} test
            </button>
          ))}
        </div>
        <div className="mb-3 flex h-10 overflow-hidden rounded-[--radius-sm] border" role="img" aria-label={`Five equal slices. Fold ${fold} is the test set; the others train.`}>
          {folds.map((n) => (
            <div
              key={n}
              className="flex flex-1 items-center justify-center text-[10px] font-semibold"
              style={{
                background: n === fold ? "var(--accent)" : "var(--paper)",
                color: n === fold ? "var(--accent-ink)" : "var(--ink-muted)",
                borderLeft: n === 1 ? undefined : "1px solid var(--rule)",
              }}
            >
              {n === fold ? "test" : "train"}
            </div>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setId(mode.id)}
              aria-pressed={mode.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          {m.note}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A single test set is one photograph. Cross-validation is five photographs. Leakage and time still break the camera.
      </figcaption>
    </figure>
  );
}
