"use client";

import { useState } from "react";
import { Box, Split, Layers, Network } from "lucide-react";

const layouts = [
  {
    id: "one",
    icon: Box,
    title: "One GPU",
    body: "Weights + KV for all concurrent chats must fit. Quantize, shrink context, or fewer users. Fine until it doesn't.",
  },
  {
    id: "tp",
    icon: Split,
    title: "Tensor parallel",
    body: "Split each big matmul across GPUs on a fast link (NVLink). Low latency, hungry interconnect. Common for a single large model replica.",
  },
  {
    id: "pp",
    icon: Layers,
    title: "Pipeline parallel",
    body: "Different layer groups on different GPUs. Easier scaling, bubble time if you don't pack microbatches. Often combined with TP.",
  },
  {
    id: "disagg",
    icon: Network,
    title: "Disaggregated 2026",
    body: "Prefill pool (compute) separate from decode pool (KV-heavy). Transfers KV over the network. Matches the two phases of inference.",
  },
] as const;

/** How GPUs are split for models that don't fit. */
export function DistributedGpu() {
  const [id, setId] = useState<(typeof layouts)[number]["id"]>("disagg");
  const L = layouts.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {layouts.map((lay) => {
            const active = lay.id === id;
            return (
              <button
                key={lay.id}
                type="button"
                onClick={() => setId(lay.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <lay.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{lay.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{L.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Fit is weights plus KV. Parallelism splits the model; disaggregation splits prefill from decode. The network becomes the bottleneck.
      </figcaption>
    </figure>
  );
}
