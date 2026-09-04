"use client";

import { useState } from "react";
import { Brain, Zap, Eye, CheckCircle2, Play, RotateCcw } from "lucide-react";

/*
 * Interactive ReAct trace. Reveal a Thought → Action → Observation loop one line
 * at a time, ending in a final answer. Illustrative.
 */
type Line = { kind: "Thought" | "Action" | "Observation" | "Answer"; text: string };
const trace: Line[] = [
  { kind: "Thought", text: "I need the capital of France first, then its population." },
  { kind: "Action", text: 'search("capital of France")' },
  { kind: "Observation", text: "Paris is the capital of France." },
  { kind: "Thought", text: "Now I need the population of Paris." },
  { kind: "Action", text: 'search("population of Paris")' },
  { kind: "Observation", text: "Paris has about 2.1 million people (city proper)." },
  { kind: "Thought", text: "I have everything I need to answer." },
  { kind: "Answer", text: "The capital of France is Paris, with about 2.1 million people." },
];

const style = {
  Thought: { icon: Brain, color: "oklch(0.6 0.15 260)" },
  Action: { icon: Zap, color: "var(--accent)" },
  Observation: { icon: Eye, color: "oklch(0.55 0.13 180)" },
  Answer: { icon: CheckCircle2, color: "oklch(0.55 0.15 150)" },
} as const;

export function ReactTrace() {
  const [shown, setShown] = useState(1);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Question: <span className="font-mono">&quot;What is the population of the capital of France?&quot;</span>
        </p>

        <div className="space-y-1.5 font-mono text-sm">
          {trace.slice(0, shown).map((line, i) => {
            const s = style[line.kind];
            return (
              <div
                key={i}
                className="flex items-start gap-2 rounded-[--radius-sm] px-2 py-1.5"
                style={{ background: line.kind === "Answer" ? "color-mix(in oklab, oklch(0.6 0.15 150) 14%, var(--paper))" : "var(--paper)" }}
              >
                <s.icon size={15} aria-hidden style={{ color: s.color, marginTop: 2, flexShrink: 0 }} />
                <span>
                  <span style={{ color: s.color, fontWeight: 700 }}>{line.kind}:</span> {line.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShown((s) => Math.min(s + 1, trace.length))}
            disabled={shown >= trace.length}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next
          </button>
          <button
            type="button"
            onClick={() => setShown(1)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        ReAct interleaves reasoning (Thought) with tool use (Action) and results (Observation) — looping until it can answer.
      </figcaption>
    </figure>
  );
}
