"use client";

import { useState } from "react";

const cases = [
  {
    id: "easy",
    q: "FAQ / extract a field",
    a: "Small / cheap model (or cache). Escalating to a frontier model wastes $ and TTFT.",
  },
  {
    id: "hard",
    q: "Ambiguous policy, tools, long reasoning",
    a: "Route to a stronger model (or a reasoning profile). Eval this slice — don't guess from one demo.",
  },
  {
    id: "fail",
    q: "Timeout, 429, empty, safety filter",
    a: "Fallback: retry once, then a second model or a degraded honest reply. Hedging two models on every call doubles the bill.",
  },
  {
    id: "shadow",
    q: "You're testing a new model",
    a: "Shadow: score it on live traffic without showing it. Flip a percent with an eval gate (evaluation + observability).",
  },
] as const;

/** Route easy vs hard vs failure vs shadow. */
export function ModelRouting() {
  const [id, setId] = useState<(typeof cases)[number]["id"]>("easy");
  const c = cases.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          What kind of turn is this?
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {cases.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setId(k.id)}
              aria-pressed={k.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: k.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: k.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {k.q}
            </button>
          ))}
        </div>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <strong style={{ color: "var(--accent)" }}>Route: </strong>
          {c.a}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Routing is product policy: cheap when you can, strong when you must, fallback when the first call dies.
      </figcaption>
    </figure>
  );
}
