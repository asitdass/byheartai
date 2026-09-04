"use client";

import { useState } from "react";

const batches = [
  { n: 1, lat: 22, tps: 18, note: "Interactive chat default: lowest wait, GPU underused. Good when TTFT/ITL is the SLO." },
  { n: 4, lat: 40, tps: 52, note: "A typical live mix. Continuous batching aims here: more tokens/s, still human-ok latency." },
  { n: 16, lat: 78, tps: 88, note: "Throughput mode. Fine for overnight jobs. Chat users feel the queue and the fatter batch." },
  { n: 32, lat: 96, tps: 96, note: "Saturated GPU, sad humans. You're optimizing tokens/s/GPU, not product latency." },
] as const;

function Bar({ label, value, invert }: { label: string; value: number; invert?: boolean }) {
  const bad = invert ? value > 70 : value < 30;
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-[11px] font-semibold" style={{ color: "var(--ink-muted)" }}>
        <span>{label}</span>
        <span className="font-mono">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
        <div
          className="h-full"
          style={{ width: `${value}%`, background: bad ? "oklch(0.6 0.18 25)" : "var(--accent)" }}
        />
      </div>
    </div>
  );
}

/** Batch size moves latency vs throughput in opposite directions. */
export function LatencyThroughput() {
  const [n, setN] = useState(4);
  const b = batches.find((x) => x.n === n) ?? batches[1];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Concurrent decode batch
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {batches.map((x) => (
            <button
              key={x.n}
              type="button"
              onClick={() => setN(x.n)}
              aria-pressed={x.n === n}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 font-mono text-xs"
              style={{
                background: x.n === n ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: x.n === n ? "var(--accent)" : "var(--rule)",
              }}
            >
              {x.n}
            </button>
          ))}
        </div>
        <div className="space-y-2" aria-live="polite">
          <Bar label="Per-request latency (higher = slower)" value={b.lat} invert />
          <Bar label="Tokens / sec / GPU (throughput)" value={b.tps} />
          <p className="text-sm">{b.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Latency and throughput trade. Chat SLOs want the left; batch jobs want the right. Measure TTFT, ITL, and queue separately.
      </figcaption>
    </figure>
  );
}
