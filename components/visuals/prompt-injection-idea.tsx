"use client";

import { useState } from "react";

const views = [
  {
    id: "mix",
    label: "What the model sees",
    note: "Developer instructions and untrusted user text are the same kind of tokens. There is no kernel vs user-mode inside the window.",
  },
  {
    id: "hope",
    label: "Hoping the prompt holds",
    note: "A longer system prompt is not a security boundary. The model can still treat later text as a new instruction. UK NCSC: this class may never be fully patched in the model.",
  },
  {
    id: "code",
    label: "Real boundary: code",
    note: "Tools run in your code with allow-lists, schemas, and human approval. The model can propose; it cannot mint credentials or skip the gate.",
  },
] as const;

/** Instructions and untrusted text share one context window. */
export function PromptInjectionIdea() {
  const [id, setId] = useState<(typeof views)[number]["id"]>("mix");
  const v = views.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div
          className="mb-3 overflow-hidden rounded-[--radius-sm] border"
          role="img"
          aria-label="One context window containing developer instructions on top and untrusted user text below. Both become tokens."
        >
          <div className="px-3 py-2 text-xs font-semibold" style={{ background: "var(--paper)" }}>
            System / developer instructions
          </div>
          <div
            className="px-3 py-2 text-xs font-semibold"
            style={{ background: "color-mix(in oklab, oklch(0.6 0.18 25) 18%, var(--paper))" }}
          >
            Untrusted text (user, doc, page, image)
          </div>
          <div className="px-3 py-1.5 text-center font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
            → one token stream → the model
          </div>
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setId(view.id)}
              aria-pressed={view.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: view.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: view.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {view.label}
            </button>
          ))}
        </div>
        <p className="text-sm" aria-live="polite">{v.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Prompt injection is a mixing problem. Defense lives in privileges and code, not in asking the model to please ignore itself.
      </figcaption>
    </figure>
  );
}
