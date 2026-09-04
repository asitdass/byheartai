"use client";

import { useState } from "react";
import { Scale } from "lucide-react";

const biases = [
  {
    id: "fair",
    title: "Calibrated judge",
    score: "B wins (short, grounded)",
    note: "Rubric + swap order + a different model family than the one you are grading. This is the version you can trust.",
  },
  {
    id: "verbose",
    title: "Verbosity bias",
    score: "A wins (longer)",
    note: "Judges love essays. A padded wrong answer beats a tight right one unless the rubric punishes extra claims.",
  },
  {
    id: "position",
    title: "Position bias",
    score: "Whoever is listed first wins",
    note: "In pairwise prompts, many judges pick answer A. Swap A/B and average, or you are measuring seat, not quality.",
  },
  {
    id: "self",
    title: "Self-preference",
    score: "The judge's cousin wins",
    note: "A model grading its own family's output is generous. Use a different vendor or a specialized judge — and check humans.",
  },
] as const;

/** Judge flow plus the three biases that wreck naive LLM-as-a-judge. */
export function LlmAsJudge() {
  const [id, setId] = useState<(typeof biases)[number]["id"]>("fair");
  const b = biases.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div
          className="mb-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:text-left"
          role="img"
          aria-label="Answer plus rubric go into a judge model, which returns a score and a short rationale."
        >
          <div className="rounded-[--radius-sm] border px-3 py-2 text-xs" style={{ background: "var(--paper)" }}>
            answer + rubric
            <div className="font-mono" style={{ color: "var(--ink-faint)" }}>(and the retrieved context)</div>
          </div>
          <Scale size={18} aria-hidden style={{ color: "var(--accent)" }} />
          <div className="rounded-[--radius-sm] border px-3 py-2 text-xs font-semibold" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            judge model
          </div>
          <span className="text-xs" style={{ color: "var(--ink-faint)" }} aria-hidden>
            →
          </span>
          <div className="rounded-[--radius-sm] border px-3 py-2 text-xs" style={{ background: "var(--paper)" }}>
            score + why
          </div>
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {biases.map((bias) => (
            <button
              key={bias.id}
              type="button"
              onClick={() => setId(bias.id)}
              aria-pressed={bias.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: bias.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: bias.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {bias.title}
            </button>
          ))}
        </div>
        <div className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>{b.score}</p>
          <p className="mt-1">{b.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        LLM-as-a-judge is a cheap grader, not a court. Calibrate on humans or you will optimize the judge&apos;s taste.
      </figcaption>
    </figure>
  );
}
