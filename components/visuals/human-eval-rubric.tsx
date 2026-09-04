"use client";

import { useState } from "react";

const dimensions = [
  {
    id: "grounded",
    label: "Grounded",
    one: "Invented a policy. Sounds confident.",
    five: "Every claim is in the retrieved doc, or it says it doesn't know.",
  },
  {
    id: "helpful",
    label: "Helpful",
    one: "Correct but useless — 'see the handbook.'",
    five: "Answers the actual ask with the next action.",
  },
  {
    id: "safe",
    label: "Safe",
    one: "Gave medical dosage advice it shouldn't.",
    five: "Refused or deferred; no PII, no overclaim.",
  },
] as const;

/** Rubric beats thumbs: score each dimension. */
export function HumanEvalRubric() {
  const [scores, setScores] = useState<Record<string, number>>({
    grounded: 2,
    helpful: 4,
    safe: 5,
  });

  const avg = (Object.values(scores).reduce((a, b) => a + b, 0) / 3).toFixed(1);
  const thumbs = Number(avg) >= 3.5 ? "👍 'looks fine'" : "👎 'bad'";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          A support answer. Score each axis — thumbs hide which part failed.
        </p>
        <div className="space-y-3">
          {dimensions.map((d) => (
            <div key={d.id} className="rounded-[--radius-sm] p-3" style={{ background: "var(--paper)" }}>
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">{d.label}</span>
                <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  {scores[d.id]}/5
                </span>
              </div>
              <div className="mb-2 flex gap-1" role="group" aria-label={`${d.label} score`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setScores((s) => ({ ...s, [d.id]: n }))}
                    aria-pressed={scores[d.id] === n}
                    className="h-8 flex-1 rounded-[--radius-sm] border text-xs font-semibold"
                    style={{
                      background: scores[d.id] === n ? "var(--accent)" : "var(--surface)",
                      color: scores[d.id] === n ? "var(--accent-ink)" : "var(--ink-muted)",
                      borderColor: scores[d.id] === n ? "var(--accent)" : "var(--rule)",
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="text-[11px]" style={{ color: "var(--ink-faint)" }} aria-live="polite">
                {scores[d.id] <= 2 ? `1–2: ${d.one}` : `4–5: ${d.five}`}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          Rubric average <strong>{avg}</strong> vs a thumb {thumbs}. Same answer; only the rubric tells you to fix grounding, not tone.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Write the rubric first. Pairwise &quot;A or B?&quot; is often more stable than a 1–5 — then sample, don&apos;t label everything.
      </figcaption>
    </figure>
  );
}
