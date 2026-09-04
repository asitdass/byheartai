"use client";

import { useState } from "react";

const changes = [
  {
    id: "prompt",
    label: "New system prompt",
    vibe: "The demo chat looks sharper. Ship it?",
    eval: "Faithfulness −6. Format +2. You made it stylish and ungrounded.",
  },
  {
    id: "model",
    label: "Bigger model",
    vibe: "It feels smarter in the hallway demo.",
    eval: "Correctness +3. p95 latency 1.8s → 6.4s. Cost ×4. Half of users bounce.",
  },
  {
    id: "rag",
    label: "Add retrieval",
    vibe: "It cited a doc. Must be better.",
    eval: "Context recall +18. Answer relevance flat. Retrieval was the gap, not the prompt.",
  },
  {
    id: "tune",
    label: "Fine-tune on chats",
    vibe: "It copies our tone. Leadership loves it.",
    eval: "Tone +12. Holdout math −9. You overfit support tickets and forgot general skill.",
  },
] as const;

/** Demo vibes vs a frozen eval set. */
export function WhyEvalMatters() {
  const [id, setId] = useState<(typeof changes)[number]["id"]>("prompt");
  const c = changes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          You just changed the system. Click which one:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {changes.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setId(ch.id)}
              aria-pressed={ch.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: ch.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: ch.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {ch.label}
            </button>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Vibes (one lucky demo)
            </div>
            <p className="text-sm">{c.vibe}</p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Frozen eval set
            </div>
            <p className="text-sm">{c.eval}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A demo is a screenshot. An eval set is a spec. Without numbers, every change is a guess.
      </figcaption>
    </figure>
  );
}
