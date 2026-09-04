"use client";

import { useState } from "react";

const modes = [
  {
    id: "binary",
    label: "Binary",
    title: "Two classes — spam vs ham",
    boundary: "One cut: this side is spam, that side is ham.",
    note: "A decision boundary is the rule in feature space. Emails with “urgent wire” + unknown sender land on the spam side. Labels exist before training — that is what makes it classification, not clustering.",
    dots: [
      { x: 22, y: 28, cls: "ham" },
      { x: 30, y: 42, cls: "ham" },
      { x: 38, y: 22, cls: "ham" },
      { x: 26, y: 58, cls: "ham" },
      { x: 62, y: 68, cls: "spam" },
      { x: 74, y: 58, cls: "spam" },
      { x: 70, y: 78, cls: "spam" },
      { x: 82, y: 72, cls: "spam" },
    ],
    cut: 52,
  },
  {
    id: "multi",
    label: "Multiclass",
    title: "Three classes — billing, bug, feature",
    boundary: "Several regions. Each ticket falls into one bucket.",
    note: "Still supervised: every training ticket already has a type. The model learns regions, not “find groups.” If you had no types and asked “what piles exist?”, that would be clustering.",
    dots: [
      { x: 22, y: 70, cls: "A" },
      { x: 30, y: 78, cls: "A" },
      { x: 28, y: 58, cls: "A" },
      { x: 52, y: 28, cls: "B" },
      { x: 60, y: 22, cls: "B" },
      { x: 68, y: 34, cls: "B" },
      { x: 78, y: 72, cls: "C" },
      { x: 86, y: 64, cls: "C" },
    ],
    cut: null,
  },
] as const;

const fill: Record<string, string> = {
  ham: "var(--ink-muted)",
  spam: "var(--accent)",
  A: "var(--accent)",
  B: "var(--ink)",
  C: "var(--ink-muted)",
};

/** Binary vs multiclass decision regions vs clustering. */
export function ClassificationIdea() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("binary");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Labeled points + a boundary. Click the problem type:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setId(mode.id)}
              aria-pressed={mode.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
        <div
          className="relative mb-3 h-44 overflow-hidden rounded-[--radius-sm] border"
          style={{ background: "var(--paper)" }}
          role="img"
          aria-label={m.boundary}
        >
          {m.cut != null ? (
            <div
              className="absolute bottom-0 top-0 w-0.5"
              style={{ left: `${m.cut}%`, background: "var(--accent)" }}
              aria-hidden
            />
          ) : null}
          {m.dots.map((d, i) => (
            <div
              key={`${d.cls}-${i}`}
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                background: fill[d.cls],
                transform: "translate(-50%, -50%)",
              }}
              title={d.cls}
            />
          ))}
          <span className="absolute bottom-1 left-2 text-[10px]" style={{ color: "var(--ink-faint)" }}>
            {m.title}
          </span>
        </div>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <strong style={{ color: "var(--accent)" }}>{m.boundary}</strong> {m.note}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Classification needs labels first. Clustering finds groups with no names. Same scatter plot; different job.
      </figcaption>
    </figure>
  );
}
