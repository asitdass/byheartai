"use client";

import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

const steps = [
  { title: "Identify", detail: "Session is this customer. Load ticket + entitlements from your API — not from the model's imagination." },
  { title: "Ground", detail: "Retrieve policy chunks this user may see. Empty → defer, don't invent a refund rule." },
  { title: "Propose", detail: "Model fills a structured preview (order id from session, amount from tools). No send-mail yet." },
  { title: "HITL", detail: "Agent or customer-facing confirm shows the exact args. Approve is a human or a deterministic policy engine." },
  { title: "Act", detail: "Scoped API token on your backend. Trace the tool span. Task success = ticket correctly resolved, not a thumb." },
];

/** Support agent: identity → ground → propose → HITL → act. */
export function SupportAgentDesign() {
  const [step, setStep] = useState(0);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <ol className="mb-3 grid grid-cols-5 gap-1">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-[--radius-sm] border px-1 py-2 text-center text-[10px] font-semibold"
              style={{
                background: i === step ? "var(--accent)" : "var(--paper)",
                color: i === step ? "var(--accent-ink)" : "var(--ink)",
                borderColor: i <= step ? "var(--accent)" : "var(--rule)",
                opacity: i > step ? 0.55 : 1,
              }}
            >
              {i + 1}. {s.title}
            </li>
          ))}
        </ol>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{steps[step].title}: </span>
          {steps[step].detail}
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            disabled={step >= steps.length - 1}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next
          </button>
          <button type="button" onClick={() => setStep(0)} className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm" style={{ color: "var(--ink-muted)" }}>
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Support is a workflow with one agentic middle — not a mega-agent with refund and shell on the same kit.
      </figcaption>
    </figure>
  );
}
