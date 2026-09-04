"use client";

import { useState } from "react";
import { Plus, RotateCcw } from "lucide-react";

const WINDOW = 4;
const turns = [
  "You: I'm Ada. I use a standing desk.",
  "AI: Noted — standing desk.",
  "You: Book a 30-min focus block at 2pm.",
  "AI: Blocked 2:00–2:30.",
  "You: Also I'm vegetarian.",
  "AI: I'll keep that in mind for lunch.",
  "You: What time is my focus block?",
];

/** Working memory (window) vs the full session log. */
export function ConversationHistory() {
  const [n, setN] = useState(3);
  const shown = turns.slice(0, n);
  const inWindow = shown.slice(-WINDOW);
  const inLog = shown.slice(0, Math.max(0, shown.length - WINDOW));

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-bold">Session log (stored)</div>
            <ul className="min-h-32 space-y-1 rounded-[--radius-sm] border p-2 text-xs" style={{ background: "var(--paper)" }} role="list" aria-label="Full conversation stored for this session">
              {shown.length === 0 && <li style={{ color: "var(--ink-faint)" }}>empty</li>}
              {inLog.map((t) => (
                <li key={t} style={{ color: "var(--ink-faint)" }}>{t}</li>
              ))}
              {inWindow.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-1 text-xs" style={{ color: "var(--ink-faint)" }}>Everything said this session, on disk.</p>
          </div>
          <div>
            <div className="mb-2 text-sm font-bold">Working memory (context window)</div>
            <ul className="min-h-32 space-y-1 rounded-[--radius-sm] border p-2 text-xs" style={{ background: "var(--paper)", borderColor: "var(--accent)" }} role="list" aria-label="Only the last few turns fit in the model context">
              {inWindow.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-1 text-xs" style={{ color: "var(--ink-faint)" }}>Only the last {WINDOW} turns the model can see right now.</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setN((x) => Math.min(x + 1, turns.length))}
            disabled={n >= turns.length}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Plus size={14} aria-hidden /> Next turn
          </button>
          <button type="button" onClick={() => setN(3)} className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm" style={{ color: "var(--ink-muted)" }}>
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Short-term memory is two layers: the session log you store, and the smaller working set the model actually sees.
      </figcaption>
    </figure>
  );
}
