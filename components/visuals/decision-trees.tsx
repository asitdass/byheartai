"use client";

import { useState } from "react";

const depths = [
  {
    id: "d1",
    label: "Depth 1",
    rules: ["income > $80k → repay", "else → default"],
    note: "One split. Interpretable. Underfits if repayment also depends on history and amount. High bias, low variance.",
    leaves: 2,
    overfit: "Low",
  },
  {
    id: "d2",
    label: "Depth 2",
    rules: [
      "income > $80k?",
      "  yes + credit ≥ 700 → repay",
      "  yes + credit < 700 → look at amount",
      "  no → default (most of the time)",
    ],
    note: "A few yes/no questions a credit officer could read aloud. This is why trees win on tabular data when you must explain a decision.",
    leaves: 4,
    overfit: "Medium",
  },
  {
    id: "d3",
    label: "Depth 8",
    rules: [
      "income > $80k?",
      "  … 40 more splits on zip, day-of-week, a single outlier…",
      "leaf: 3 training rows, 100% “repay”",
    ],
    note: "Deep trees memorize. A leaf with three rows is a story about those three people, not a rule about loans. This is why forests and boosting exist.",
    leaves: 48,
    overfit: "High",
  },
] as const;

/** Tree depth: splits, leaves, and overfitting. */
export function DecisionTreesViz() {
  const [id, setId] = useState<(typeof depths)[number]["id"]>("d2");
  const d = depths.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same loan table. Grow the tree:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {depths.map((depth) => (
            <button
              key={depth.id}
              type="button"
              onClick={() => setId(depth.id)}
              aria-pressed={depth.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: depth.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: depth.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {depth.label}
            </button>
          ))}
        </div>
        <pre
          className="mb-3 overflow-x-auto rounded-[--radius-sm] p-3 font-mono text-xs"
          style={{ background: "var(--paper)" }}
          aria-live="polite"
        >
          {d.rules.join("\n")}
        </pre>
        <div className="mb-2 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            Leaves: <strong>{d.leaves}</strong>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            Overfit risk: <strong style={{ color: "var(--accent)" }}>{d.overfit}</strong>
          </div>
        </div>
        <p className="text-sm">{d.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A tree is a pile of if/else splits. Depth buys fit and stories — and, past a point, memorization.
      </figcaption>
    </figure>
  );
}
