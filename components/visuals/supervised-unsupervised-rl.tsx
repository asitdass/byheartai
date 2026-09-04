"use client";

import { useState } from "react";

const modes = [
  {
    id: "sup",
    label: "Supervised",
    signal: "Labeled pairs: input → correct output",
    setup: "Each house has a known price. Each email is already spam or ham.",
    learns: "A mapping. After training it can label new, unseen inputs.",
    example: "Hours studied → exam score. Photo → “cat”. Ticket text → “refund”.",
  },
  {
    id: "unsup",
    label: "Unsupervised",
    signal: "No labels. Only the raw examples.",
    setup: "A pile of customer records with no “segment” column. You ask: what groups exist?",
    learns: "Structure — clusters, compression, unusual points — not a named class.",
    example: "Shoppers who buy together. Topics in support tickets. Anomalous logins.",
  },
  {
    id: "rl",
    label: "Reinforcement",
    signal: "A reward after actions, often delayed",
    setup: "An agent tries moves in an environment. Nobody labeled the “right” move list.",
    learns: "A policy: which action to take in which state to maximize reward over time.",
    example: "Game win/loss. Robot reaching a shelf. Ads: click now vs long-term value.",
  },
] as const;

/** Three teaching signals: labels, structure, rewards. */
export function SupervisedUnsupervisedRl() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("sup");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          What is the teaching signal? Click one:
        </p>
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
        <div className="space-y-2 text-sm" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Teaching signal
            </div>
            <p>{m.signal}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                Setup
              </div>
              <p>{m.setup}</p>
            </div>
            <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                What it learns
              </div>
              <p>{m.learns}</p>
            </div>
          </div>
          <p style={{ color: "var(--ink-muted)" }}>
            <span className="font-semibold">Example: </span>
            {m.example}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        The algorithm family is a consequence of the signal. Labels, structure, and rewards are three different jobs.
      </figcaption>
    </figure>
  );
}
