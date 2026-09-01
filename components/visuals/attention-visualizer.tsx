"use client";

import { useState } from "react";

/*
 * Interactive attention visualizer. Click a word ("query") to see which other
 * words it "pays attention to" (illustrative, precomputed weights).
 * Fully client-side and deterministic — no model calls.
 */

const tokens = ["The", "animal", "didn't", "cross", "the", "street", "because", "it", "was", "too", "tired"];

// Illustrative attention weights: for each query token index, how much it attends
// to each key token (rows sum to ~1). Tuned to tell the classic "it -> animal" story.
const weights: number[][] = [
  [0.5, 0.2, 0.05, 0.05, 0.05, 0.05, 0.02, 0.02, 0.02, 0.02, 0.02], // The
  [0.15, 0.5, 0.05, 0.08, 0.02, 0.05, 0.02, 0.03, 0.03, 0.02, 0.05], // animal
  [0.05, 0.25, 0.4, 0.15, 0.02, 0.03, 0.02, 0.02, 0.02, 0.01, 0.01], // didn't
  [0.03, 0.2, 0.15, 0.4, 0.03, 0.12, 0.02, 0.02, 0.01, 0.01, 0.01], // cross
  [0.1, 0.05, 0.02, 0.05, 0.5, 0.2, 0.02, 0.02, 0.01, 0.01, 0.02], // the
  [0.03, 0.08, 0.02, 0.15, 0.15, 0.5, 0.02, 0.02, 0.01, 0.01, 0.01], // street
  [0.02, 0.1, 0.05, 0.08, 0.02, 0.05, 0.4, 0.15, 0.08, 0.03, 0.02], // because
  [0.03, 0.55, 0.02, 0.03, 0.02, 0.08, 0.05, 0.12, 0.04, 0.02, 0.04], // it -> animal
  [0.02, 0.15, 0.03, 0.03, 0.02, 0.03, 0.05, 0.25, 0.3, 0.06, 0.06], // was
  [0.02, 0.05, 0.02, 0.02, 0.02, 0.02, 0.03, 0.1, 0.15, 0.4, 0.17], // too
  [0.02, 0.2, 0.02, 0.03, 0.02, 0.03, 0.05, 0.25, 0.12, 0.16, 0.1], // tired
];

export function AttentionVisualizer() {
  const [query, setQuery] = useState<number>(7); // default: "it"

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Click any word to see what it pays attention to. Darker = stronger attention.
        </p>

        <div
          className="flex flex-wrap gap-1.5 text-lg leading-relaxed"
          role="group"
          aria-label="Sentence tokens; select one to view its attention weights"
        >
          {tokens.map((tok, j) => {
            const w = weights[query][j];
            const isQuery = j === query;
            return (
              <button
                key={j}
                type="button"
                onClick={() => setQuery(j)}
                aria-pressed={isQuery}
                className="rounded-[--radius-sm] px-2 py-1 transition-colors"
                style={{
                  background: isQuery
                    ? "var(--accent)"
                    : `color-mix(in oklab, var(--accent) ${Math.round(w * 100)}%, transparent)`,
                  color: isQuery ? "var(--accent-ink)" : "var(--ink)",
                  outline: isQuery ? "2px solid var(--accent)" : "none",
                  fontWeight: isQuery ? 700 : 400,
                }}
                title={isQuery ? "Query word" : `attention ${(w * 100).toFixed(0)}%`}
              >
                {tok}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm" style={{ color: "var(--ink-faint)" }}>
          Query word: <strong style={{ color: "var(--accent)" }}>{tokens[query]}</strong>
          {query === 7 && ' — notice "it" attends most strongly to "animal", resolving what "it" refers to.'}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Attention lets each word gather context from the most relevant other words.
      </figcaption>
    </figure>
  );
}
