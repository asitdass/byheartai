"use client";

import { useMemo, useState } from "react";

/*
 * Interactive chunking. Adjust chunk size and overlap over a sample text and see
 * how the passages (and their shared/overlapping words) change.
 */
const text =
  "A vector database stores embeddings and finds the most similar ones quickly. It powers semantic search and retrieval for RAG. Chunk size and overlap directly affect how precise retrieval will be.";
const words = text.split(" ");

export function ChunkingVisualizer() {
  const [size, setSize] = useState(10);
  const [overlap, setOverlap] = useState(3);

  const safeOverlap = Math.min(overlap, size - 1);
  const chunks = useMemo(() => {
    const out: { words: string[]; start: number }[] = [];
    const step = Math.max(1, size - safeOverlap);
    for (let start = 0; start < words.length; start += step) {
      out.push({ words: words.slice(start, start + size), start });
      if (start + size >= words.length) break;
    }
    return out;
  }, [size, safeOverlap]);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="flex items-center justify-between text-sm font-semibold">
              Chunk size <span className="font-mono" style={{ color: "var(--accent)" }}>{size} words</span>
            </label>
            <input type="range" min={4} max={20} value={size} onChange={(e) => setSize(+e.target.value)} className="w-full" style={{ accentColor: "var(--accent)" }} />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-semibold">
              Overlap <span className="font-mono" style={{ color: "var(--accent)" }}>{safeOverlap} words</span>
            </label>
            <input type="range" min={0} max={8} value={overlap} onChange={(e) => setOverlap(+e.target.value)} className="w-full" style={{ accentColor: "var(--accent)" }} />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {chunks.map((chunk, ci) => {
            const prevEnd = ci > 0 ? chunks[ci - 1].start + size : 0;
            return (
              <div key={ci} className="rounded-[--radius-sm] border p-2" style={{ background: "var(--paper)" }}>
                <div className="mb-1 text-xs font-semibold" style={{ color: "var(--ink-faint)" }}>Chunk {ci + 1}</div>
                <div className="flex flex-wrap gap-1 text-sm">
                  {chunk.words.map((w, wi) => {
                    const globalIdx = chunk.start + wi;
                    const isOverlap = ci > 0 && globalIdx < prevEnd;
                    return (
                      <span
                        key={wi}
                        className="rounded-[2px] px-1"
                        style={{
                          background: isOverlap ? "color-mix(in oklab, var(--accent) 28%, transparent)" : "transparent",
                        }}
                        title={isOverlap ? "Overlaps previous chunk" : undefined}
                      >
                        {w}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm" style={{ color: "var(--ink-muted)" }}>
          <span><strong style={{ color: "var(--accent)" }}>{chunks.length}</strong> chunks</span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-[2px]" style={{ background: "color-mix(in oklab, var(--accent) 28%, transparent)" }} />
            overlapping words (shared context between chunks)
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Bigger chunks keep more context but dilute relevance; overlap prevents ideas from being split awkwardly across boundaries.
      </figcaption>
    </figure>
  );
}
