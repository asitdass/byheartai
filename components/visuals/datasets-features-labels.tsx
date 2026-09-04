"use client";

import { useState } from "react";

const houses = [
  { id: "h1", sqft: 820, beds: 2, age: 12, price: 210 },
  { id: "h2", sqft: 1400, beds: 3, age: 6, price: 340 },
  { id: "h3", sqft: 2100, beds: 4, age: 2, price: 510 },
  { id: "h4", sqft: 980, beds: 2, age: 31, price: 185 },
] as const;

const highlights = [
  {
    id: "example",
    label: "One example (row)",
    blurb:
      "Each row is one training example: a house the model can learn from. More rows usually help — if they look like production.",
  },
  {
    id: "features",
    label: "Features (inputs X)",
    blurb:
      "Columns the model is allowed to see at prediction time. sqft, beds, age. You must be able to measure these for a new house.",
  },
  {
    id: "label",
    label: "Label (target y)",
    blurb:
      "The answer you want predicted. Price is known in the training set and hidden at inference. Supervised learning needs this column.",
  },
] as const;

/** A tiny labeled table: rows = examples, X = features, y = label. */
export function DatasetsFeaturesLabels() {
  const [id, setId] = useState<(typeof highlights)[number]["id"]>("example");
  const h = highlights.find((x) => x.id === id)!;

  const cell = (kind: "example" | "features" | "label", children: string) => {
    const featureOn = id === "features" && kind === "features";
    const labelOn = id === "label" && kind === "label";
    const rowOn = id === "example" && kind === "example";
    const active = featureOn || labelOn || rowOn;
    return (
      <td
        className="px-2 py-1.5 font-mono text-xs"
        style={{
          background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : undefined,
          color: active ? "var(--ink)" : "var(--ink-muted)",
          fontWeight: active ? 600 : 400,
        }}
      >
        {children}
      </td>
    );
  };

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          A supervised dataset is a table. Click what to highlight:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {highlights.map((ch) => (
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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left" style={{ background: "var(--paper)" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                <th className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                  id
                </th>
                {["sqft", "beds", "age"].map((c) => (
                  <th
                    key={c}
                    className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide"
                    style={{
                      color: id === "features" ? "var(--accent)" : "var(--ink-faint)",
                    }}
                  >
                    {c}
                  </th>
                ))}
                <th
                  className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide"
                  style={{ color: id === "label" ? "var(--accent)" : "var(--ink-faint)" }}
                >
                  price k$
                </th>
              </tr>
            </thead>
            <tbody>
              {houses.map((row, i) => (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: "1px solid var(--rule)",
                    background:
                      id === "example" && i === 1
                        ? "color-mix(in oklab, var(--accent) 10%, var(--paper))"
                        : undefined,
                  }}
                >
                  {cell("example", row.id)}
                  {cell("features", String(row.sqft))}
                  {cell("features", String(row.beds))}
                  {cell("features", String(row.age))}
                  {cell("label", String(row.price))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          {id === "example" ? (
            <>
              <strong style={{ color: "var(--accent)" }}>Row h2 highlighted. </strong>
              {h.blurb}
            </>
          ) : (
            h.blurb
          )}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        X is what you will have for a new house. y is what you are trying to predict. Never train and test on the same rows.
      </figcaption>
    </figure>
  );
}
