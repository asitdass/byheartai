"use client";

import { useState } from "react";
import { FileText, BarChart3, GitBranch } from "lucide-react";

const pillars = [
  {
    id: "logs",
    icon: FileText,
    title: "Logs",
    answers: "What exact event fired?",
    example: 'span=llm.complete model=… finish=stop tokens_out=220 trace=7f3a',
    note: "Structured, one line per event, attached to a span. Unstructured dump-the-prompt is not a strategy — it's a leak.",
  },
  {
    id: "metrics",
    icon: BarChart3,
    title: "Metrics",
    answers: "How is the fleet doing?",
    example: "req/s, error %, p95 latency, tokens/min, $/hour",
    note: "Aggregates. Cheap to alert on. They cannot show you the chunk the model ignored — no high-cardinality 'prompt text' metric.",
  },
  {
    id: "traces",
    icon: GitBranch,
    title: "Traces",
    answers: "How did this one request unfold?",
    example: "request → retrieve → llm → tool → llm  (tree of spans, same trace_id)",
    note: "The spine of AI observability. Every model, retrieve, and tool call is a child span with timing and attributes.",
  },
] as const;

/** Logs vs metrics vs traces, tied together by a trace id. */
export function TracingPillars() {
  const [id, setId] = useState<(typeof pillars)[number]["id"]>("traces");
  const p = pillars.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {pillars.map((pillar) => {
            const active = pillar.id === id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setId(pillar.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <pillar.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-xs font-semibold">{pillar.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">Answers: </span>{p.answers}</p>
          <pre className="overflow-x-auto rounded-[--radius-sm] p-3 font-mono text-[11px]" style={{ background: "var(--paper)" }}>
            {p.example}
          </pre>
          <p>{p.note}</p>
          <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
            Glue: every log and metric should carry <span className="font-mono">trace_id=7f3a</span> so you can jump from an alert to the tree.
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Three pillars, one id. Traces show the path; metrics watch the fleet; logs pin the event.
      </figcaption>
    </figure>
  );
}
