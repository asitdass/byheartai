"use client";

import { useState } from "react";

const cases = [
  {
    id: "faq",
    label: "Easy FAQ",
    prompt: "What time does the shop close on Tuesday?",
    think: 0,
    answer: 18,
    note: "A 3B classifier or a non-reasoning chat model is enough. Paying for hidden thinking here is lighting money on fire.",
    verdict: "Do not use a reasoning profile.",
  },
  {
    id: "math",
    label: "Hard math / code",
    prompt: "Prove the closed form, then write a failing test.",
    think: 4200,
    answer: 380,
    note: "Most of the bill is thinking tokens you may never show the user. Short prompt, long decode. Test-time compute is the product.",
    verdict: "Use extended thinking, with a budget cap.",
  },
  {
    id: "budget",
    label: "Budget exhausted",
    prompt: "Same hard problem, think_max = 256",
    think: 256,
    answer: 90,
    note: "The model had to stop thinking. Quality drops. A budget is a product SLO (cost, latency), not a quality free lunch.",
    verdict: "Cap thinking; eval the truncated slice.",
  },
  {
    id: "slm",
    label: "Route vs 3B SLM",
    prompt: "Label this ticket: billing | bug | other",
    think: 0,
    answer: 4,
    note: "Classification with a closed label set. A small model (or regex + SLM) beats a reasoner on cost, TTFT, and often accuracy.",
    verdict: "SLM / router. Reasoner is the fallback for messy turns.",
  },
] as const;

/** Hidden thinking tokens vs the visible answer. */
export function ReasoningModels() {
  const [id, setId] = useState<(typeof cases)[number]["id"]>("faq");
  const c = cases.find((x) => x.id === id)!;
  const total = c.think + c.answer + 24;
  const thinkPct = (c.think / total) * 100;
  const ansPct = (c.answer / total) * 100;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same API, very different bills. Click a turn type:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {cases.map((ch) => (
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
        <div className="space-y-3" aria-live="polite">
          <p className="rounded-[--radius-sm] p-3 font-mono text-xs" style={{ background: "var(--paper)" }}>
            {c.prompt}
          </p>
          <div className="h-3 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
            <div className="flex h-full">
              <div style={{ width: "12%", background: "color-mix(in oklab, var(--ink-faint) 40%, var(--paper))" }} title="prompt" />
              <div style={{ width: `${thinkPct}%`, background: "color-mix(in oklab, var(--accent) 45%, var(--paper))" }} title="thinking" />
              <div style={{ width: `${ansPct}%`, background: "var(--accent)" }} title="answer" />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                Prompt
              </div>
              ~24 tokens (short)
            </div>
            <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                Hidden thinking
              </div>
              {c.think === 0 ? "none" : `${c.think.toLocaleString()} tokens`}
            </div>
            <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                Visible answer
              </div>
              {c.answer} tokens
            </div>
          </div>
          <p className="text-sm">
            <strong style={{ color: "var(--accent)" }}>{c.verdict} </strong>
            {c.note}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Test-time compute is extra decode. You pay for thinking even when the UI hides it. Budget it like latency, not like magic.
      </figcaption>
    </figure>
  );
}
