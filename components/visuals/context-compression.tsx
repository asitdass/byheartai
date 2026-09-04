"use client";

import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

const stages = [
  {
    title: "Raw",
    items: [
      { keep: true, text: "User: fix the login bug on checkout" },
      { keep: true, text: "Tool: git_diff → 2,400 lines of unrelated files…" },
      { keep: false, text: "Tool: search → 18 near-duplicate hits…" },
      { keep: true, text: "Assistant: the null check is in auth.ts:84" },
      { keep: false, text: "Tool: read_file → entire 900-line file dumped…" },
    ],
    note: "Every tool dump is still in the window. Tokens are spent on noise.",
  },
  {
    title: "Trim (prefer delete)",
    items: [
      { keep: true, text: "User: fix the login bug on checkout" },
      { keep: true, text: "Tool: git_diff → auth.ts +12 −3 (other files dropped)" },
      { keep: false, text: "" },
      { keep: true, text: "Assistant: the null check is in auth.ts:84" },
      { keep: true, text: "Tool: read_file → auth.ts:70–95 only" },
    ],
    note: "Throw away bytes, keep pointers. Deletion hallucinates less than rewriting.",
  },
  {
    title: "Compact (summarize the rest)",
    items: [
      { keep: true, text: "Goal: fix null check in auth.ts:84 on checkout login." },
      { keep: true, text: "Done: narrowed to auth.ts; tests still failing on empty session." },
      { keep: true, text: "Open: add guard; re-run checkout tests." },
      { keep: true, text: "Recent files: auth.ts" },
    ],
    note: "Old turns become a short state note. Recent files and the live goal stay literal.",
  },
];

/** Step through trim-then-compact context compression. */
export function ContextCompression() {
  const [step, setStep] = useState(0);
  const s = stages[step];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex gap-2">
          {stages.map((st, i) => (
            <span
              key={st.title}
              className="rounded-[--radius-sm] border px-2 py-1 text-xs font-semibold"
              style={{
                background: i === step ? "var(--accent)" : "var(--paper)",
                color: i === step ? "var(--accent-ink)" : "var(--ink-muted)",
                borderColor: i === step ? "var(--accent)" : "var(--rule)",
              }}
            >
              {i + 1}. {st.title}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 font-mono text-xs">
          {s.items.filter((it) => it.text).map((it) => (
            <li
              key={it.text}
              className="rounded-[--radius-sm] px-3 py-2"
              style={{
                background: "var(--paper)",
                opacity: it.keep ? 1 : 0.45,
                textDecoration: it.keep ? "none" : "line-through",
              }}
            >
              {it.text}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm" aria-live="polite">{s.note}</p>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((n) => Math.min(n + 1, stages.length - 1))}
            disabled={step >= stages.length - 1}
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
        Compress by trimming bulky tool output first, then compacting old turns into state — not by rewriting everything.
      </figcaption>
    </figure>
  );
}
