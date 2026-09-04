"use client";

import { useState } from "react";
import { Search, List, Zap, Inbox, Play, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    detail: "Optional server/discover — the client learns what the server can do (tools, resources, prompts, extensions).",
  },
  {
    icon: List,
    title: "List tools",
    detail: "tools/list returns a catalog. Lists are cacheable (ttlMs) and deterministically ordered so prompt caches stay stable.",
  },
  {
    icon: Zap,
    title: "Call a tool",
    detail: 'The model picks create_issue. The client POSTs tools/call with Mcp-Method and Mcp-Name headers — any replica can handle it.',
  },
  {
    icon: Inbox,
    title: "Result (or input needed)",
    detail: "The server returns the result — or resultType: input_required (MRTR) if it needs a human confirmation before acting.",
  },
];

/** Interactive discover → list → call → result flow. */
export function McpCallFlow() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <ol className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {steps.map((s, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <li
                key={s.title}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "var(--accent)" : "var(--paper)",
                  borderColor: active || done ? "var(--accent)" : "var(--rule)",
                  opacity: i > step ? 0.55 : 1,
                }}
              >
                <s.icon size={18} aria-hidden style={{ color: active ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 text-xs font-semibold" style={{ color: active ? "var(--accent-ink)" : "var(--ink)" }}>
                  {i + 1}. {s.title}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{current.title}:</span> {current.detail}
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
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
          <span className="ml-auto font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
            {step + 1}/{steps.length}
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A host discovers a server, lists its tools, calls one, and either gets a result or is asked for input mid-call.
      </figcaption>
    </figure>
  );
}
