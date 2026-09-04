"use client";

import { useState } from "react";
import { Activity, Search, ClipboardCheck } from "lucide-react";

const lenses = [
  {
    id: "monitor",
    icon: Activity,
    title: "Monitoring",
    ask: "Is it up?",
    see: "Error rate 0.2%. p95 1.1s. We're green.",
    miss: "You still cannot explain why this user got a fake policy paragraph.",
  },
  {
    id: "observe",
    icon: Search,
    title: "Observability",
    ask: "What happened on this request?",
    see: "Trace 7f3a: retrieve returned chunk #12; the model ignored it and invented §4.2. Tool get_policy never ran.",
    miss: "One trace is not a product score. You still need a gold set to know if the fleet got better.",
  },
  {
    id: "eval",
    icon: ClipboardCheck,
    title: "Evaluation",
    ask: "Is the system good?",
    see: "Gold-set faithfulness 0.91 this week (−2 vs last). CI would have blocked the prompt that caused 7f3a.",
    miss: "A weekly score does not show you the one refund that leaked PII at 2 a.m.",
  },
] as const;

/** Monitoring vs observability vs evaluation — three different questions. */
export function ObservabilityIdea() {
  const [id, setId] = useState<(typeof lenses)[number]["id"]>("observe");
  const L = lenses.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {lenses.map((lens) => {
            const active = lens.id === id;
            return (
              <button
                key={lens.id}
                type="button"
                onClick={() => setId(lens.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <lens.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{lens.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>{L.ask}</p>
          <p><span className="font-semibold">You can see: </span>{L.see}</p>
          <p style={{ color: "var(--ink-muted)" }}><span className="font-semibold">Blind spot: </span>{L.miss}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Monitoring is the dashboard. Observability is the why of one request. Evaluation is whether the product got better.
      </figcaption>
    </figure>
  );
}
