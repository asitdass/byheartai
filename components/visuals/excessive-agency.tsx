"use client";

import { useState } from "react";

const kits = [
  {
    id: "wide",
    label: "Everything-agent",
    tools: ["read_mail", "send_mail", "refund", "shell", "delete_account"],
    risk: "One injected sentence can pick the most powerful tool. This is excessive agency (OWASP LLM06).",
  },
  {
    id: "split",
    label: "Split by job",
    tools: ["read_mail", "search_docs"],
    risk: "This turn can look up. Sending and refunding live on other routes with their own auth. Injection still talks; it cannot act as far.",
  },
  {
    id: "gate",
    label: "Propose + HITL",
    tools: ["draft_refund (preview only)"],
    risk: "The model fills a form. Your code shows a human the args. Approve runs a scoped API token the model never sees.",
  },
] as const;

/** Blast radius of tools the model is allowed to call. */
export function ExcessiveAgency() {
  const [id, setId] = useState<(typeof kits)[number]["id"]>("wide");
  const k = kits.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {kits.map((kit) => (
            <button
              key={kit.id}
              type="button"
              onClick={() => setId(kit.id)}
              aria-pressed={kit.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: kit.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: kit.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {kit.label}
            </button>
          ))}
        </div>
        <div className="mb-2 flex flex-wrap gap-1.5" aria-live="polite">
          {k.tools.map((t) => (
            <span key={t} className="rounded-[--radius-sm] border px-2 py-1 font-mono text-[11px]" style={{ background: "var(--paper)" }}>
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm">{k.risk}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Agency is a product choice. If the model can do it, injection can try to do it. Shrink the kit.
      </figcaption>
    </figure>
  );
}
