"use client";

import { useState } from "react";

const modes = [
  {
    id: "one",
    title: "One researcher",
    body: "A single agent with search, browse, and a note tool. Parallelize reads with extra tool calls, not extra personalities. Default in 2026 until eval says otherwise.",
  },
  {
    id: "fan",
    title: "Fan-out (when it pays)",
    body: "Orchestrator + parallel gatherers on independent sub-questions, then a synthesizer. Worth it when the work is read-heavy and separable. Cost and traces explode if you skip caps.",
  },
  {
    id: "fail",
    title: "The trap",
    body: "Five agents arguing in a loop with shared god tools and no citations. You bought a meeting. Start one agent; split only the bottleneck eval names.",
  },
] as const;

/** Single researcher vs justified multi-agent fan-out. */
export function ResearchTeamDesign() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("one");
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
        <p className="text-sm" aria-live="polite">{m.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Multi-agent is for parallel, separable research — not a default architecture. Citations and loop caps are the product.
      </figcaption>
    </figure>
  );
}
