"use client";

import { useState } from "react";

const jobs = [
  {
    id: "class",
    label: "Classify / extract",
    winner: "SLM (1–8B)",
    why: "Closed labels, short JSON. A 3B on-device or in-VPC model is cheaper, private, and often as accurate after a little eval.",
  },
  {
    id: "route",
    label: "Router / triage",
    winner: "SLM first",
    why: "The 2026 pattern: small model decides easy vs hard. Only the hard turn pays for a frontier or reasoning decode.",
  },
  {
    id: "edge",
    label: "Phone / NPU / air-gap",
    winner: "Quantized SLM",
    why: "No round-trip, no prompt leaving the device. 4-bit 1–8B on NPU is the privacy default. See the quantization lesson.",
  },
  {
    id: "hard",
    label: "Open reasoning",
    winner: "Large / reasoning model",
    why: "Ambiguous policy, multi-file code, proofs. Distill what you can; keep a strong model for the tail. Don't pretend an 8B is a reasoner.",
  },
] as const;

/** When a small model wins vs when you still need a large one. */
export function SlmVsLlm() {
  const [id, setId] = useState<(typeof jobs)[number]["id"]>("class");
  const j = jobs.find((x) => x.id === id)!;
  const slm = j.id !== "hard";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Pick the job. Size is a product choice, not a trophy.
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {jobs.map((ch) => (
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
        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div
            className="rounded-[--radius-sm] border p-3"
            style={{
              background: slm ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
              borderColor: slm ? "var(--accent)" : "var(--rule)",
            }}
          >
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: slm ? "var(--accent)" : "var(--ink-faint)" }}>
              1–8B SLM
            </div>
            <p className="text-sm">{slm ? j.winner : "Standby / router / on-device draft"}</p>
          </div>
          <div
            className="rounded-[--radius-sm] border p-3"
            style={{
              background: !slm ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
              borderColor: !slm ? "var(--accent)" : "var(--rule)",
            }}
          >
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: !slm ? "var(--accent)" : "var(--ink-faint)" }}>
              Frontier / reasoner
            </div>
            <p className="text-sm">{slm ? "Skip unless the SLM is unsure" : j.winner}</p>
          </div>
        </div>
        <p className="mt-2 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <strong style={{ color: "var(--accent)" }}>{j.winner}. </strong>
          {j.why}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Swarm of small models for the bulk of turns; one large model for the tail. Eval both slices.
      </figcaption>
    </figure>
  );
}
