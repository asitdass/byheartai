"use client";

import { useState } from "react";

const presets = [
  {
    id: "chat",
    label: "Live chat",
    quality: 78,
    latency: 22,
    cost: 30,
    note: "Users wait ~1s. A slightly dumber fast model + cache beats a genius that answers in 8s.",
  },
  {
    id: "support",
    label: "High-volume support",
    quality: 84,
    latency: 40,
    cost: 18,
    note: "Floor on faithfulness (eval gate). Then squeeze $ per resolved ticket — router, cache, small model on easy asks.",
  },
  {
    id: "research",
    label: "Overnight research",
    quality: 94,
    latency: 88,
    cost: 70,
    note: "Minutes are fine. Pay for a strong model, tools, and a judge. Reliability (did the job finish?) matters more than TTFT.",
  },
  {
    id: "max",
    label: "Max everything",
    quality: 96,
    latency: 92,
    cost: 95,
    note: "This is how teams go broke and miss SLOs. You cannot max quality, speed, and cheap at once. Pick a frontier point.",
  },
] as const;

function Bar({ label, value, invert }: { label: string; value: number; invert?: boolean }) {
  const bad = invert ? value > 70 : value < 50;
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-[11px] font-semibold" style={{ color: "var(--ink-muted)" }}>
        <span>{label}</span>
        <span className="font-mono">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
        <div
          className="h-full transition-all"
          style={{ width: `${value}%`, background: bad ? "oklch(0.6 0.18 25)" : "var(--accent)" }}
        />
      </div>
    </div>
  );
}

/** Quality vs latency vs cost presets for production AI. */
export function QualityLatencyCost() {
  const [id, setId] = useState<(typeof presets)[number]["id"]>("support");
  const p = presets.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {presets.map((pre) => (
            <button
              key={pre.id}
              type="button"
              onClick={() => setId(pre.id)}
              aria-pressed={pre.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: pre.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: pre.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {pre.label}
            </button>
          ))}
        </div>
        <div className="space-y-3" aria-live="polite">
          <Bar label="Quality (eval / task success)" value={p.quality} />
          <Bar label="Latency (higher = slower)" value={p.latency} invert />
          <Bar label="Cost (higher = $ hungrier)" value={p.cost} invert />
          <p className="text-sm">{p.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Optimize dollars per successful task under a latency SLO — not &quot;always the smartest model.&quot;
      </figcaption>
    </figure>
  );
}
