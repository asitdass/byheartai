"use client";

import { useState } from "react";

const modes = [
  {
    id: "static",
    title: "Static batch",
    slots: [
      { name: "A", fill: 100, note: "long" },
      { name: "B", fill: 40, note: "done, still waiting" },
      { name: "C", fill: 55, note: "done, still waiting" },
    ],
    explain: "The batch started together and cannot admit a new user until the slowest request finishes. Short chats pay for the long one. GPU sits on padding.",
  },
  {
    id: "cont",
    title: "Continuous batching",
    slots: [
      { name: "A", fill: 70, note: "still decoding" },
      { name: "D", fill: 20, note: "joined when B left" },
      { name: "C", fill: 90, note: "almost done" },
    ],
    explain: "When a request finishes, its slot is filled on the next token step. Iteration-level scheduling. This is how modern engines keep GPUs busy.",
  },
  {
    id: "chunk",
    title: "Chunked prefill",
    slots: [
      { name: "prefill E", fill: 35, note: "a slice of a long prompt" },
      { name: "A decode", fill: 50, note: "still streaming" },
      { name: "C decode", fill: 50, note: "still streaming" },
    ],
    explain: "A huge new prompt would otherwise stall every decoder. Chunked prefill mixes a piece of prefill with decode steps so TTFT and ongoing streams share the GPU.",
  },
] as const;

/** Static vs continuous vs chunked-prefill batching. */
export function ContinuousBatching() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("cont");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setId(mode.id)}
              aria-pressed={mode.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {mode.title}
            </button>
          ))}
        </div>
        <div className="mb-3 space-y-2" aria-live="polite">
          {m.slots.map((s) => (
            <div key={s.name}>
              <div className="mb-0.5 flex justify-between font-mono text-[11px]" style={{ color: "var(--ink-muted)" }}>
                <span>{s.name}</span>
                <span>{s.note}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
                <div className="h-full" style={{ width: `${s.fill}%`, background: "var(--accent)" }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm">{m.explain}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Continuous batching fills GPU slots as chats finish. Chunked prefill keeps long prompts from freezing everyone else.
      </figcaption>
    </figure>
  );
}
