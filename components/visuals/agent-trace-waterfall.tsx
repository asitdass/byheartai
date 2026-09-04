"use client";

import { useState } from "react";

const spans = [
  {
    id: "req",
    name: "user.turn",
    left: 0,
    width: 100,
    ms: 2410,
    attr: "session=s-19  prompt_ver=13  user=redacted",
    why: "The parent span. Every child below shares trace_id=7f3a. This is the row you find from an alert.",
  },
  {
    id: "ret",
    name: "retrieve",
    left: 4,
    width: 18,
    ms: 340,
    attr: "k=8  hits=8  goldish=chunk#12  query_rewrite=true",
    why: "Retrieval was fine: chunk #12 is the policy. If this span is empty, don't blame the generator.",
  },
  {
    id: "llm1",
    name: "llm.plan",
    left: 24,
    width: 22,
    ms: 510,
    attr: "in=410  out=64  tool=get_policy  finish=tool_calls",
    why: "The model decided to call a tool instead of answering from the chunk. That's a judgment you can only see on this span.",
  },
  {
    id: "tool",
    name: "tool.get_policy",
    left: 48,
    width: 12,
    ms: 180,
    attr: "args.hash=9c2  status=ok  result_bytes=1.1k",
    why: "Hash args; don't log the raw payload if it can hold secrets. Status and timing still tell you if the tool was the slow or failing piece.",
  },
  {
    id: "llm2",
    name: "llm.answer",
    left: 62,
    width: 36,
    ms: 980,
    attr: "in=1280  out=220  ttft=380ms  cited=false  invented=§4.2",
    why: "Here is the bug: context had the truth, the final span still invented a section. Observability found the stage; eval would have scored it.",
  },
] as const;

/** Clickable waterfall of a RAG + tool agent turn. */
export function AgentTraceWaterfall() {
  const [id, setId] = useState<(typeof spans)[number]["id"]>("llm2");
  const s = spans.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-xs font-semibold" style={{ color: "var(--ink-muted)" }}>
          trace_id=7f3a · click a span
        </p>
        <div className="space-y-1.5" role="img" aria-label="Waterfall of nested spans for one user turn: retrieve, plan, tool, answer.">
          {spans.map((span) => {
            const active = span.id === id;
            return (
              <button
                key={span.id}
                type="button"
                onClick={() => setId(span.id)}
                aria-pressed={active}
                className="flex w-full items-center gap-2 text-left"
              >
                <span className="w-28 shrink-0 truncate font-mono text-[11px]">{span.name}</span>
                <span className="relative h-6 flex-1 rounded-[--radius-sm]" style={{ background: "var(--paper)" }}>
                  <span
                    className="absolute top-0.5 h-5 rounded-[--radius-sm]"
                    style={{
                      left: `${span.left}%`,
                      width: `${span.width}%`,
                      background: active ? "var(--accent)" : "color-mix(in oklab, var(--accent) 45%, var(--paper))",
                    }}
                  />
                </span>
                <span className="w-12 shrink-0 text-right font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  {span.ms}ms
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <p className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>{s.attr}</p>
          <p className="mt-1">{s.why}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Nested spans: retrieve, tools, each model call. The waterfall shows which stage failed — not just that the answer was wrong.
      </figcaption>
    </figure>
  );
}
