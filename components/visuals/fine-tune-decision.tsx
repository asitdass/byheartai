"use client";

import { useState } from "react";

const cases = [
  {
    id: "facts",
    q: "Docs change every week",
    a: "RAG (and prompts). Fine-tuning would go stale and can't cite.",
  },
  {
    id: "format",
    q: "Must always emit a strict 4-section JSON",
    a: "Fine-tune (SFT/LoRA) after prompting still fails. Then RAG the facts.",
  },
  {
    id: "style",
    q: "Brand voice prompts are 2,000 tokens and still drift",
    a: "SFT the voice so the system prompt can shrink. Keep policies in RAG.",
  },
  {
    id: "prompt",
    q: "One-shot task, 20 examples in the prompt work",
    a: "Stay with prompting. Fine-tuning is extra machinery you don't need yet.",
  },
];

/** Interactive knowledge vs behavior vs prompt decision. */
export function FineTuneDecision() {
  const [id, setId] = useState(cases[0].id);
  const c = cases.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>What&apos;s the gap?</p>
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
          <strong style={{ color: "var(--accent)" }}>Do this:</strong> {c.a}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Order of cheapness: prompt → RAG → fine-tune. Facts stay in retrieval; behavior goes in weights.
      </figcaption>
    </figure>
  );
}
