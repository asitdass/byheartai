"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { Quiz } from "@/lib/types";

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export function QuizRunner({ quiz }: { quiz: Quiz }) {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  function toggle(qId: string, optId: string, multiple: boolean) {
    setSelected((prev) => {
      const cur = prev[qId] ?? [];
      if (multiple) {
        return {
          ...prev,
          [qId]: cur.includes(optId) ? cur.filter((x) => x !== optId) : [...cur, optId],
        };
      }
      return { ...prev, [qId]: [optId] };
    });
  }

  return (
    <div className="my-8 space-y-8">
      {quiz.questions.map((q, i) => {
        const multiple = q.type === "multiple";
        const sel = selected[q.id] ?? [];
        const isRevealed = revealed[q.id];
        const correct = isRevealed && arraysEqual(sel, q.correct);

        return (
          <fieldset key={q.id} className="rounded-[--radius] border p-5">
            <legend className="px-1 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
              Question {i + 1} of {quiz.questions.length}
            </legend>
            <p className="mb-4 font-medium">{q.prompt}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const chosen = sel.includes(opt.id);
                const isCorrectOpt = q.correct.includes(opt.id);
                let ring = "var(--rule)";
                if (isRevealed) {
                  if (isCorrectOpt) ring = "oklch(0.6 0.15 150)";
                  else if (chosen) ring = "oklch(0.6 0.18 20)";
                } else if (chosen) {
                  ring = "var(--accent)";
                }
                return (
                  <label
                    key={opt.id}
                    className="flex cursor-pointer items-center gap-3 rounded-[--radius-sm] border p-3 text-[0.95em] transition-colors"
                    style={{
                      borderColor: ring,
                      background: chosen ? "color-mix(in oklab, var(--accent) 6%, var(--paper))" : "transparent",
                    }}
                  >
                    <input
                      type={multiple ? "checkbox" : "radio"}
                      name={q.id}
                      checked={chosen}
                      disabled={isRevealed}
                      onChange={() => toggle(q.id, opt.id, multiple)}
                      className="accent-[--accent]"
                    />
                    <span className="flex-1">{opt.text}</span>
                    {isRevealed && isCorrectOpt && (
                      <Check size={16} style={{ color: "oklch(0.6 0.15 150)" }} aria-label="correct" />
                    )}
                    {isRevealed && chosen && !isCorrectOpt && (
                      <X size={16} style={{ color: "oklch(0.6 0.18 20)" }} aria-label="incorrect" />
                    )}
                  </label>
                );
              })}
            </div>

            {!isRevealed ? (
              <button
                type="button"
                disabled={sel.length === 0}
                onClick={() => setRevealed((p) => ({ ...p, [q.id]: true }))}
                className="mt-4 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
                style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              >
                Check answer
              </button>
            ) : (
              <div
                className="mt-4 rounded-[--radius-sm] p-3 text-[0.95em]"
                style={{ background: "var(--surface)" }}
              >
                <p className="mb-1 font-semibold" style={{ color: correct ? "oklch(0.55 0.15 150)" : "oklch(0.58 0.18 20)" }}>
                  {correct ? "Correct" : "Not quite"}
                </p>
                <p style={{ color: "var(--ink-muted)" }}>{q.explanation}</p>
              </div>
            )}
          </fieldset>
        );
      })}
    </div>
  );
}
