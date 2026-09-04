"use client";

import { useState } from "react";
import { Eye, Brain, ListTodo, Zap, Play, RotateCcw } from "lucide-react";

/*
 * Interactive agent loop. Step through a concrete task and watch the agent cycle
 * through Observe → Reason → Plan → Act (twice) until it's done.
 */
const stages = [
  { key: "Observe", icon: Eye },
  { key: "Reason", icon: Brain },
  { key: "Plan", icon: ListTodo },
  { key: "Act", icon: Zap },
] as const;

type Step = { stage: (typeof stages)[number]["key"]; text: string; done?: boolean };
const steps: Step[] = [
  { stage: "Observe", text: "Goal: “What's the weather in Paris, and what should I wear?” No data yet." },
  { stage: "Reason", text: "I need current weather. I have a get_weather tool that can fetch it." },
  { stage: "Plan", text: "Call get_weather(city = “Paris”)." },
  { stage: "Act", text: "Called the tool → returned 12°C, light rain." },
  { stage: "Observe", text: "New info: it's 12°C with light rain in Paris." },
  { stage: "Reason", text: "Cool and wet → a warm jacket and umbrella. I now have enough to answer." },
  { stage: "Plan", text: "Write the final answer for the user." },
  { stage: "Act", text: "“It's 12°C and rainy in Paris — wear a warm jacket and bring an umbrella.” ✓", done: true },
];

export function AgentLoop() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const activeStage = current.stage;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="grid grid-cols-4 gap-2">
          {stages.map((s) => {
            const active = s.key === activeStage;
            return (
              <div
                key={s.key}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center transition-all"
                style={{
                  background: active ? "var(--accent)" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <s.icon size={20} aria-hidden style={{ color: active ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 text-xs font-semibold" style={{ color: active ? "var(--accent-ink)" : "var(--ink)" }}>{s.key}</span>
              </div>
            );
          })}
        </div>
        <div className="my-2 text-center text-xs" style={{ color: "var(--ink-faint)" }} aria-hidden>
          ↻ repeats until the goal is achieved
        </div>

        <div className="rounded-[--radius-sm] p-3 text-sm" style={{ background: current.done ? "color-mix(in oklab, oklch(0.6 0.15 150) 15%, var(--paper))" : "var(--paper)" }} aria-live="polite">
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{current.stage}:</span> {current.text}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            disabled={step >= steps.length - 1}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Next step
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
          <span className="ml-auto text-xs font-mono" style={{ color: "var(--ink-faint)" }}>step {step + 1}/{steps.length}</span>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        An agent loops through observe → reason → plan → act, using tools and its own output until the goal is met.
      </figcaption>
    </figure>
  );
}
