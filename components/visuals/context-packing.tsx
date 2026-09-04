"use client";

import { useMemo, useState } from "react";

const WINDOW = 100;

const layers = [
  { id: "sys", label: "System instructions", tokens: 12, must: true, note: "Always keep — tells the model how to behave." },
  { id: "tools", label: "Tool schemas", tokens: 22, must: false, note: "Needed if the model might act. Trim unused tools." },
  { id: "rag", label: "Retrieved docs", tokens: 28, must: false, note: "Only the reranked top chunks, not the whole corpus." },
  { id: "mem", label: "Long-term memory", tokens: 10, must: false, note: "A few relevant facts, not the entire memory store." },
  { id: "hist", label: "Conversation history", tokens: 30, must: false, note: "Recent turns first. Old turns are first to compress." },
  { id: "user", label: "Current user message", tokens: 8, must: true, note: "Always keep — this is the actual question." },
] as const;

/** Interactive token budget: toggle layers and watch overflow. */
export function ContextPacking() {
  const [on, setOn] = useState<Record<string, boolean>>({
    sys: true, tools: true, rag: true, mem: true, hist: true, user: true,
  });

  const selected = layers.filter((l) => on[l.id]);
  const total = selected.reduce((a, l) => a + l.tokens, 0);
  const overflow = Math.max(0, total - WINDOW);

  const dropped = useMemo(() => {
    if (overflow <= 0) return new Set<string>();
    const droppable = [...selected].filter((l) => !l.must).reverse();
    let need = overflow;
    const d = new Set<string>();
    for (const l of droppable) {
      if (need <= 0) break;
      d.add(l.id);
      need -= l.tokens;
    }
    return d;
  }, [selected, overflow]);

  const used = selected.reduce((a, l) => a + (dropped.has(l.id) ? 0 : l.tokens), 0);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold">Token budget this call</span>
          <span className="font-mono" style={{ color: total > WINDOW ? "oklch(0.55 0.18 25)" : "var(--ink-faint)" }}>
            {used} kept · {total} packed / {WINDOW}
          </span>
        </div>
        <div className="mb-4 flex h-3 w-full overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
          {selected.map((l) => (
            <div
              key={l.id}
              title={`${l.label}: ${l.tokens}`}
              style={{
                width: `${(l.tokens / WINDOW) * 100}%`,
                background: dropped.has(l.id) ? "color-mix(in oklab, oklch(0.6 0.18 25) 55%, var(--rule))" : "var(--accent)",
                opacity: dropped.has(l.id) ? 0.45 : 1,
              }}
            />
          ))}
        </div>

        <ul className="space-y-1.5">
          {layers.map((l) => {
            const checked = on[l.id];
            const isDropped = dropped.has(l.id);
            return (
              <li key={l.id}>
                <label className="flex cursor-pointer items-start gap-2 rounded-[--radius-sm] border px-3 py-2 text-sm" style={{ background: "var(--paper)", borderColor: isDropped ? "oklch(0.6 0.18 25)" : "var(--rule)" }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={l.must}
                    onChange={() => setOn((s) => ({ ...s, [l.id]: !s[l.id] }))}
                    className="mt-1"
                  />
                  <span className="flex-1">
                    <span className="font-semibold">{l.label}</span>
                    <span className="ml-2 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>{l.tokens} tok{l.must ? " · must keep" : ""}{isDropped ? " · dropped" : ""}</span>
                    <span className="mt-0.5 block text-xs" style={{ color: "var(--ink-muted)" }}>{l.note}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        <p className="mt-3 text-sm" aria-live="polite" style={{ color: overflow > 0 ? "oklch(0.5 0.16 25)" : "var(--ink-muted)" }}>
          {overflow > 0
            ? "Over budget. History and bulky retrieval drop first so the question and instructions still fit."
            : "Under budget. Uncheck noisy layers — extra tokens compete for attention even when they fit."}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A context window is a budget. Pack the must-keep pieces first; retrieve less rather than stuffing everything.
      </figcaption>
    </figure>
  );
}
