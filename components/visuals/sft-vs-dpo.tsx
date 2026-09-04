"use client";

import { useState } from "react";

const modes = [
  {
    id: "sft",
    title: "Instruction / SFT",
    row: "prompt → one gold reply",
    desc: "Show the model the answer you want. It copies the format, tone, and steps. First stage of almost every tune.",
  },
  {
    id: "dpo",
    title: "Preference (DPO)",
    row: "prompt → chosen vs rejected",
    desc: "Two replies, humans (or a judge) pick the better one. The model learns 'more like A, less like B' without a separate reward model.",
  },
] as const;

/** SFT pairs vs preference triples. */
export function SftVsDpo() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("sft");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex gap-2">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setId(mode.id)}
              aria-pressed={mode.id === id}
              className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {mode.title}
            </button>
          ))}
        </div>
        <pre className="overflow-x-auto rounded-[--radius-sm] p-3 font-mono text-xs" style={{ background: "var(--paper)" }} aria-live="polite">
          {m.row}
        </pre>
        <p className="mt-3 text-sm">{m.desc}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        SFT teaches a target answer. DPO teaches a preference. Most 2026 pipelines do SFT first, then DPO — not PPO.
      </figcaption>
    </figure>
  );
}
