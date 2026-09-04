"use client";

import { useState } from "react";

const positions = [
  { id: "start", label: "Start of context", recall: 92, note: "Models usually catch facts packed at the beginning (instructions, pinned state)." },
  { id: "middle", label: "Middle of a long dump", recall: 48, note: "Lost-in-the-middle: the same fact buried in a haystack is easy to miss." },
  { id: "end", label: "Right before the question", recall: 88, note: "Recency helps. Putting the ask and the key evidence last is a common fix." },
] as const;

/** Lost-in-the-middle: recall depends on where a fact sits. */
export function LostInTheMiddle() {
  const [id, setId] = useState<(typeof positions)[number]["id"]>("middle");
  const p = positions.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Same fact: <span className="font-mono">&quot;The refund cap is $120.&quot;</span> Click where you place it:
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {positions.map((pos) => (
            <button
              key={pos.id}
              type="button"
              onClick={() => setId(pos.id)}
              aria-pressed={pos.id === id}
              className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: pos.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: pos.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {pos.label}
            </button>
          ))}
        </div>

        <div className="mb-2 flex h-10 overflow-hidden rounded-[--radius-sm] border text-[11px] font-semibold" role="img" aria-label={`The fact sits at the ${p.label.toLowerCase()}.`}>
          {(["start", "middle", "end"] as const).map((slot) => (
            <div
              key={slot}
              className="flex flex-1 items-center justify-center"
              style={{
                background: slot === id ? "var(--accent)" : "var(--paper)",
                color: slot === id ? "var(--accent-ink)" : "var(--ink-faint)",
              }}
            >
              {slot === id ? "$120" : "…"}
            </div>
          ))}
        </div>

        <div className="mb-1 h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
          <div className="h-full transition-all" style={{ width: `${p.recall}%`, background: p.recall < 60 ? "oklch(0.6 0.18 25)" : "var(--accent)" }} />
        </div>
        <p className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>illustrative recall ~{p.recall}%</p>
        <p className="mt-2 text-sm" aria-live="polite">{p.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A million-token window is not a million-token brain. Place what matters at the edges — or retrieve less.
      </figcaption>
    </figure>
  );
}
