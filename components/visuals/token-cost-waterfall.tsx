"use client";

import { useState } from "react";

const calls = [
  {
    id: "simple",
    label: "Simple chat",
    inTok: 800,
    cached: 0,
    reason: 0,
    outTok: 120,
    ttft: 420,
    total: 900,
    usd: 0.002,
    note: "One shot, no cache. You pay the full input. Fine for rare asks — death by a thousand FAQs.",
  },
  {
    id: "cached",
    label: "Cached prefix",
    inTok: 800,
    cached: 720,
    reason: 0,
    outTok: 120,
    ttft: 180,
    total: 420,
    usd: 0.0006,
    note: "Stable tools + instructions hit the prompt cache. Input still '800' on the span — billable uncached is 80. Watch cache-busting edits.",
  },
  {
    id: "reason",
    label: "Reasoning model",
    inTok: 800,
    cached: 0,
    reason: 2400,
    outTok: 80,
    ttft: 2200,
    total: 8200,
    usd: 0.041,
    note: "Hidden reasoning tokens cost money and time you never show the user. Log them or the invoice looks random.",
  },
  {
    id: "agent",
    label: "Agent, 4 loops",
    inTok: 5200,
    cached: 2100,
    reason: 0,
    outTok: 640,
    ttft: 400,
    total: 6100,
    usd: 0.09,
    note: "Three model calls + tools. $ / 1k tokens looks tiny; $ per successful task is 45× the simple chat. Cap loops.",
  },
] as const;

function Mini({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = Math.max(6, Math.round((value / max) * 100));
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-[11px] font-semibold" style={{ color: "var(--ink-muted)" }}>
        <span>{label}</span>
        <span className="font-mono">
          {value}
          {unit}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
        <div className="h-full" style={{ width: `${pct}%`, background: "var(--accent)" }} />
      </div>
    </div>
  );
}

/** Token mix, latency, and dollar cost for different call shapes. */
export function TokenCostWaterfall() {
  const [id, setId] = useState<(typeof calls)[number]["id"]>("cached");
  const c = calls.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {calls.map((call) => (
            <button
              key={call.id}
              type="button"
              onClick={() => setId(call.id)}
              aria-pressed={call.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: call.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: call.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {call.label}
            </button>
          ))}
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 font-mono text-[11px] sm:grid-cols-4">
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>in {c.inTok}</div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>cached {c.cached}</div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>reason {c.reason}</div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>out {c.outTok}</div>
        </div>
        <div className="space-y-2" aria-live="polite">
          <Mini label="TTFT (ms)" value={c.ttft} max={2200} unit="ms" />
          <Mini label="Total latency (ms)" value={c.total} max={8200} unit="ms" />
          <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>
            ~${c.usd.toFixed(3)} this request
          </p>
          <p className="text-sm">{c.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Log input, cached, reasoning, and output tokens — then cost per successful task, not sticker $ / 1k.
      </figcaption>
    </figure>
  );
}
