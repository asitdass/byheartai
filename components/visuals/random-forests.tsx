"use client";

import { useState } from "react";

const views = [
  {
    id: "one",
    label: "One deep tree",
    vote: "repay (100% sure, 3 rows in the leaf)",
    note: "That tree saw a weird zip code on three repaid loans and treated it as law. High variance: a different sample would have grown a different story.",
  },
  {
    id: "bag",
    label: "Bagging",
    vote: "Tree A: default · Tree B: repay · Tree C: repay → repay",
    note: "Each tree trains on a bootstrap sample (draw rows with replacement). They disagree on noise. The majority vote cancels the zip-code superstition.",
  },
  {
    id: "feat",
    label: "Random features",
    vote: "Tree A never saw zip · Tree B never saw income · still 2–1 repay",
    note: "At each split, only a random subset of columns is allowed. Strong features cannot dominate every tree. That extra randomness is what makes the forest “random.”",
  },
] as const;

/** Bagging + feature subsample vs one overfit tree. */
export function RandomForests() {
  const [id, setId] = useState<(typeof views)[number]["id"]>("bag");
  const v = views.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Why a crowd of trees beats the cleverest one:
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
        <div className="grid gap-2 sm:grid-cols-3" aria-hidden={id === "one"}>
          {["A", "B", "C"].map((name, i) => (
            <div
              key={name}
              className="rounded-[--radius-sm] border p-3 text-center text-xs"
              style={{
                background: "var(--paper)",
                opacity: id === "one" && i > 0 ? 0.35 : 1,
                borderColor: id !== "one" && i === 1 ? "var(--accent)" : "var(--rule)",
              }}
            >
              <div className="font-semibold">Tree {name}</div>
              <div className="mt-1 font-mono" style={{ color: "var(--ink-faint)" }}>
                {id === "one" ? (i === 0 ? "zip=90210 → repay" : "not used") : `bootstrap #${i + 1}`}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
            {v.vote}
          </p>
          <p className="mt-1">{v.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Forest = many cheap trees on random rows and random columns, then a vote. The ensemble is duller and more right.
      </figcaption>
    </figure>
  );
}
