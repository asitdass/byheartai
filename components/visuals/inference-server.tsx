"use client";

import { useState } from "react";
import { Globe, ListOrdered, Cpu, Play, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "API",
    detail: "Clients speak a stable HTTP shape (chat completions / responses). Auth, quotas, and request ids live here — not on the GPU.",
  },
  {
    icon: ListOrdered,
    title: "Scheduler",
    detail: "Queue, continuous batch, LoRA adapter pick, preemption. Autoscaling should watch queue depth and KV memory, not CPU %. ",
  },
  {
    icon: Cpu,
    title: "Engine + GPU",
    detail: "Prefill/decode kernels, paged KV, optional speculative decoding (a small draft model proposes; the big one verifies).",
  },
] as const;

/** Request path through an inference server. */
export function InferenceServer() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <ol className="mb-3 grid grid-cols-3 gap-2">
          {steps.map((s, i) => {
            const active = i === step;
            return (
              <li
                key={s.title}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "var(--accent)" : "var(--paper)",
                  borderColor: active || i < step ? "var(--accent)" : "var(--rule)",
                  opacity: i > step ? 0.55 : 1,
                }}
              >
                <s.icon size={16} aria-hidden style={{ color: active ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold" style={{ color: active ? "var(--accent-ink)" : "var(--ink)" }}>
                  {i + 1}. {s.title}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{current.title}: </span>
          {current.detail}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            disabled={step >= steps.length - 1}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A serving stack is API + scheduler + engine. The product name on the box is not the architecture.
      </figcaption>
    </figure>
  );
}
