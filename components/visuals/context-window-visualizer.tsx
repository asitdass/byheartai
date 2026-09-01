"use client";

import { useState } from "react";
import { Plus, RotateCcw } from "lucide-react";

/*
 * Interactive context-window demo. Add messages; when total tokens exceed the
 * window, the oldest messages fall out of context ("forgotten"). Illustrative
 * token counts.
 */
const WINDOW = 100; // tiny window for illustration

const pool = [
  { who: "You", text: "Hi! My name is Ada.", tokens: 12 },
  { who: "AI", text: "Nice to meet you, Ada!", tokens: 14 },
  { who: "You", text: "I love astronomy and old telescopes.", tokens: 18 },
  { who: "AI", text: "Wonderful — the night sky is endless.", tokens: 20 },
  { who: "You", text: "Remember my favorite planet is Saturn.", tokens: 20 },
  { who: "AI", text: "Noted — Saturn's rings are stunning.", tokens: 18 },
  { who: "You", text: "By the way, what's my name?", tokens: 16 },
];

export function ContextWindowVisualizer() {
  const [count, setCount] = useState(3);

  const messages = pool.slice(0, count);
  const total = messages.reduce((a, m) => a + m.tokens, 0);

  // Keep newest messages that fit within the window; older ones drop out.
  let running = 0;
  const inWindow = new Set<number>();
  for (let i = messages.length - 1; i >= 0; i--) {
    if (running + messages[i].tokens <= WINDOW) {
      running += messages[i].tokens;
      inWindow.add(i);
    }
  }

  const usedTokens = messages.reduce((a, m, i) => (inWindow.has(i) ? a + m.tokens : a), 0);
  const nameDropped = messages.length > 0 && !inWindow.has(0);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold" style={{ color: "var(--ink-muted)" }}>Context window</span>
          <span className="font-mono" style={{ color: usedTokens >= WINDOW ? "var(--accent)" : "var(--ink-faint)" }}>
            {usedTokens} / {WINDOW} tokens
          </span>
        </div>
        <div className="mb-4 h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
          <div className="h-full transition-all" style={{ width: `${Math.min((usedTokens / WINDOW) * 100, 100)}%`, background: "var(--accent)" }} />
        </div>

        <div className="space-y-1.5">
          {messages.map((m, i) => {
            const dropped = !inWindow.has(i);
            return (
              <div
                key={i}
                className="flex items-center justify-between rounded-[--radius-sm] px-3 py-2 text-sm transition-opacity"
                style={{
                  background: "var(--paper)",
                  opacity: dropped ? 0.4 : 1,
                  textDecoration: dropped ? "line-through" : "none",
                  border: dropped ? "1px dashed var(--rule)" : "1px solid transparent",
                }}
              >
                <span>
                  <strong style={{ color: m.who === "You" ? "var(--accent)" : "var(--ink-muted)" }}>{m.who}:</strong> {m.text}
                </span>
                <span className="ml-2 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
                  {m.tokens}{dropped ? " · forgotten" : ""}
                </span>
              </div>
            );
          })}
        </div>

        {nameDropped && count >= pool.length && (
          <p className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "color-mix(in oklab, var(--accent) 12%, var(--paper))" }} aria-live="polite">
            The AI can no longer &quot;see&quot; the first message — so it has <strong>forgotten Ada&apos;s name</strong>. That&apos;s a context-window limit in action.
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setCount((c) => Math.min(c + 1, pool.length))}
            disabled={count >= pool.length}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Plus size={14} aria-hidden /> Add message
          </button>
          <button
            type="button"
            onClick={() => setCount(3)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A model only &quot;remembers&quot; what fits in its context window. Overflow the window and the oldest tokens drop out.
      </figcaption>
    </figure>
  );
}
