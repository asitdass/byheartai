"use client";

import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

const beats = [
  { session: "Monday", text: 'Ada: "I\'m vegetarian." → system writes a long-term fact.' },
  { session: "Monday", text: "Session ends. Context window is gone. The fact remains in the store." },
  { session: "Thursday", text: "Ada: \"Find lunch near the office.\" → retrieve memories for \"food\" / \"Ada\"." },
  { session: "Thursday", text: "Hit: user.diet = vegetarian. The model never had to be told twice." },
];

/** Write in one session, retrieve in another. */
export function LongTermRecall() {
  const [step, setStep] = useState(0);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex gap-2">
          {["Mon: write", "Store", "Thu: retrieve", "Use"].map((l, i) => (
            <span
              key={l}
              className="rounded-[--radius-sm] border px-2 py-1 text-xs font-semibold"
              style={{
                background: i === step ? "var(--accent)" : "var(--paper)",
                color: i === step ? "var(--accent-ink)" : "var(--ink-muted)",
                borderColor: i === step ? "var(--accent)" : "var(--rule)",
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{beats[step].session}:</span> {beats[step].text}
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, beats.length - 1))}
            disabled={step >= beats.length - 1}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next
          </button>
          <button type="button" onClick={() => setStep(0)} className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm" style={{ color: "var(--ink-muted)" }}>
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Long-term memory is a write in one session and a retrieve in another — the model weights never stored the fact.
      </figcaption>
    </figure>
  );
}
