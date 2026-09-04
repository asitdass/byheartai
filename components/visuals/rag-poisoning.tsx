"use client";

import { useState } from "react";

const chunks = [
  { id: "a", label: "Policy v4 (clean)", poisoned: false, score: 0.71 },
  { id: "b", label: "Chunk with hidden instructions", poisoned: true, score: 0.88 },
  { id: "c", label: "FAQ (clean)", poisoned: false, score: 0.64 },
];

/** A poisoned chunk wins retrieval and is treated as truth. */
export function RagPoisoning() {
  const [id, setId] = useState("b");
  const c = chunks.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-xs font-semibold" style={{ color: "var(--ink-muted)" }}>
          Index — click what retrieval might return first
        </p>
        <div className="mb-3 space-y-1.5">
          {chunks.map((ch) => {
            const active = ch.id === id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setId(ch.id)}
                aria-pressed={active}
                className="flex w-full items-center justify-between rounded-[--radius-sm] border px-3 py-2 text-left text-sm"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: ch.poisoned ? "oklch(0.6 0.18 25)" : active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <span>{ch.label}</span>
                <span className="font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  sim {ch.score}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">
          {c.poisoned
            ? "Highest score, so it lands in context. The model may follow the planted instructions or quote a fake policy. Faithfulness eval can still look 'grounded' — grounded to junk."
            : "Clean chunk. Poisoning still matters: if a later query retrieves the red row, one attacker-written paragraph becomes the assistant's source."}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        RAG poisoning is write-access to the corpus (or a lookalike embedding). Treat retrieved text as untrusted, same as a webpage.
      </figcaption>
    </figure>
  );
}
