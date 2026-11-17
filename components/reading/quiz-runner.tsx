"use client";

import { useId, useState } from "react";
import { Check, X } from "lucide-react";
import type { Quiz } from "@/lib/types";

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export function QuizRunner({ quiz }: { quiz: Quiz }) {
  const instanceId = useId();
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
          <fieldset key={q.id} className="quiz-question min-w-0 rounded-(--radius) border border-(--rule) p-4 sm:p-5">
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
                    className="quiz-option flex items-start gap-3 rounded-(--radius-sm) border p-3 text-[0.95em]"
                    data-graded={isRevealed || undefined}
                    style={{
                      borderColor: ring,
                      background: chosen ? "color-mix(in oklab, var(--accent) 6%, var(--paper))" : "transparent",
                    }}
                  >
                    <input
                      type={multiple ? "checkbox" : "radio"}
                      name={`${instanceId}-${q.id}`}
                      checked={chosen}
                      disabled={isRevealed}
                      onChange={() => toggle(q.id, opt.id, multiple)}
                      className="mt-1 shrink-0 accent-(--accent)"
                    />
                    <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{opt.text}</span>
                    {isRevealed && isCorrectOpt && (
                      <Check size={16} className="mt-1 shrink-0" style={{ color: ring }} aria-label="correct" />
                    )}
                    {isRevealed && chosen && !isCorrectOpt && (
                      <X size={16} className="mt-1 shrink-0" style={{ color: ring }} aria-label="incorrect" />
                    )}
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              disabled={sel.length === 0}
              aria-disabled={isRevealed || undefined}
              onClick={() => {
                if (!isRevealed) setRevealed((prev) => ({ ...prev, [q.id]: true }));
              }}
              className="quiz-check mt-4 min-h-10 rounded-(--radius-sm) px-4 py-2 text-sm font-semibold"
            >
              {isRevealed ? "Answer checked" : "Check answer"}
            </button>
            <div role="status">
              {isRevealed && (
                <div className="quiz-result mt-4 rounded-(--radius-sm) p-4 text-[0.95em]" data-correct={correct}>
                  <p className="mb-1 flex items-center gap-2 font-semibold">
                    {correct ? <Check size={17} aria-hidden /> : <X size={17} aria-hidden />}
                    {correct ? "Correct" : "Not quite"}
                  </p>
                  <p className="[overflow-wrap:anywhere]" style={{ color: "var(--ink-muted)" }}>{q.explanation}</p>
                </div>
              )}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}
