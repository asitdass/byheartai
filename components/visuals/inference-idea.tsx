"use client";

import { useState } from "react";
import { GraduationCap, Zap } from "lucide-react";

const phases = [
  {
    id: "train",
    icon: GraduationCap,
    title: "Training",
    what: "Change the weights. Slow, expensive, done rarely. That's the foundations lesson.",
    gpu: "All tokens in parallel. No KV cache in the same way. Gradients.",
  },
  {
    id: "prefill",
    icon: Zap,
    title: "Inference: prefill",
    what: "The prompt is ingested. This is compute-heavy and sets time-to-first-token.",
    gpu: "The whole prompt in parallel. K and V for every prompt token are written into the cache.",
  },
  {
    id: "decode",
    icon: Zap,
    title: "Inference: decode",
    what: "One new token at a time, streamed. Memory-heavy: the GPU rereads the growing KV cache.",
    gpu: "Tiny matmuls, huge memory traffic. Reasoning models can decode thousands of hidden tokens here.",
  },
] as const;

/** Training vs inference, then prefill vs decode. */
export function InferenceIdea() {
  const [id, setId] = useState<(typeof phases)[number]["id"]>("prefill");
  const p = phases.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {phases.map((ph) => {
            const active = ph.id === id;
            return (
              <button
                key={ph.id}
                type="button"
                onClick={() => setId(ph.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <ph.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{ph.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p>{p.what}</p>
          <p className="font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>{p.gpu}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Inference is using frozen weights: prefill the prompt, then decode tokens. Chat latency is those two phases plus queue.
      </figcaption>
    </figure>
  );
}
