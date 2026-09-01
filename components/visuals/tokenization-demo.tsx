"use client";

import { useMemo, useState } from "react";

/*
 * Illustrative tokenizer. Real LLMs use learned subword vocabularies (BPE), but
 * this deterministic approximation shows the key ideas: text becomes chunks,
 * spaces/punctuation matter, and long/rare words split into pieces.
 */
function pseudoTokenize(text: string): string[] {
  if (!text) return [];
  // Split into words, whitespace, and punctuation, keeping the separators.
  const rough = text.match(/\s+|[.,!?;:'"()\-]|[^\s.,!?;:'"()\-]+/g) ?? [];
  const tokens: string[] = [];
  for (const piece of rough) {
    if (/^\s+$/.test(piece)) {
      tokens.push(piece); // whitespace often attaches to the next token in real BPE
      continue;
    }
    if (piece.length <= 4 || /[.,!?;:'"()\-]/.test(piece)) {
      tokens.push(piece);
    } else {
      // Break longer words into ~4-char subword pieces.
      for (let i = 0; i < piece.length; i += 4) {
        tokens.push(piece.slice(i, i + 4));
      }
    }
  }
  return tokens;
}

const palette = [
  "oklch(0.9 0.05 30)",
  "oklch(0.9 0.05 90)",
  "oklch(0.9 0.05 150)",
  "oklch(0.9 0.05 210)",
  "oklch(0.9 0.05 270)",
  "oklch(0.9 0.05 330)",
];

export function TokenizationDemo() {
  const [text, setText] = useState("Tokenization turns text into tokens!");
  const tokens = useMemo(() => pseudoTokenize(text), [text]);
  const visible = tokens.filter((t) => t.trim().length > 0);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <label className="mb-2 block text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Type anything — see how it splits into tokens:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-[--radius-sm] border px-3 py-2 text-base"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
          aria-label="Text to tokenize"
        />

        <div className="mt-4 flex flex-wrap gap-1" aria-label="Resulting tokens">
          {visible.length === 0 && (
            <span className="text-sm" style={{ color: "var(--ink-faint)" }}>Start typing…</span>
          )}
          {visible.map((tok, i) => (
            <span
              key={i}
              className="rounded-[--radius-sm] px-2 py-1 font-mono text-sm"
              style={{ background: palette[i % palette.length], color: "oklch(0.25 0.03 260)" }}
            >
              {tok}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm" style={{ color: "var(--ink-muted)" }}>
          <span><strong style={{ color: "var(--accent)" }}>{visible.length}</strong> tokens</span>
          <span><strong style={{ color: "var(--accent)" }}>{text.length}</strong> characters</span>
          <span>≈ <strong style={{ color: "var(--accent)" }}>{Math.max(1, Math.round(text.length / 4))}</strong> tokens by the "~4 chars" rule of thumb</span>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Illustrative only — real tokenizers use a learned subword vocabulary (BPE), but the idea is the same: text → tokens.
      </figcaption>
    </figure>
  );
}
