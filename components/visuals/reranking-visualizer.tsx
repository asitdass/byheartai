"use client";

import { useState } from "react";
import { Wand2, RotateCcw, ArrowUp, ArrowDown, Minus } from "lucide-react";

/*
 * Reranking demo. First retrieval orders by fast vector similarity; a slower
 * cross-encoder reranker then reorders by true relevance, lifting the best
 * answer to the top. Illustrative scores.
 */
type Doc = { id: string; title: string; vecRank: number; relevance: number };
const docs: Doc[] = [
  { id: "login", title: "Login troubleshooting overview", vecRank: 1, relevance: 0.72 },
  { id: "sec", title: "Account security best practices", vecRank: 2, relevance: 0.55 },
  { id: "reset", title: "Password reset: step-by-step", vecRank: 3, relevance: 0.96 },
  { id: "bill", title: "Billing and refunds", vecRank: 4, relevance: 0.2 },
  { id: "2fa", title: "Two-factor authentication setup", vecRank: 5, relevance: 0.63 },
];

export function RerankingVisualizer() {
  const [reranked, setReranked] = useState(false);

  const vecOrder = [...docs].sort((a, b) => a.vecRank - b.vecRank);
  const order = reranked ? [...docs].sort((a, b) => b.relevance - a.relevance) : vecOrder;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Query: <span className="font-mono">&quot;how do I reset my password?&quot;</span> — first by vector similarity, then reranked by a cross-encoder.
        </p>

        <ol className="space-y-1.5">
          {order.map((doc, i) => {
            const prevPos = vecOrder.findIndex((d) => d.id === doc.id);
            const moved = reranked ? prevPos - i : 0;
            const isTop = reranked && i === 0;
            return (
              <li
                key={doc.id}
                className="flex items-center gap-3 rounded-[--radius-sm] px-3 py-2 text-sm transition-all"
                style={{
                  background: isTop ? "color-mix(in oklab, var(--accent) 18%, var(--paper))" : "var(--paper)",
                  border: isTop ? "1px solid var(--accent)" : "1px solid transparent",
                }}
              >
                <span className="font-mono font-bold" style={{ color: "var(--accent)", width: 18 }}>{i + 1}</span>
                <span className="flex-1">{doc.title}</span>
                {reranked && (
                  <span className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>{doc.relevance.toFixed(2)}</span>
                )}
                {reranked && (
                  <span className="flex w-10 items-center justify-end gap-0.5 text-xs" style={{ color: moved > 0 ? "oklch(0.55 0.15 150)" : moved < 0 ? "oklch(0.6 0.18 25)" : "var(--ink-faint)" }}>
                    {moved > 0 ? <ArrowUp size={12} aria-hidden /> : moved < 0 ? <ArrowDown size={12} aria-hidden /> : <Minus size={12} aria-hidden />}
                    {moved !== 0 ? Math.abs(moved) : ""}
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setReranked(true)}
            disabled={reranked}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Wand2 size={14} aria-hidden /> Rerank with cross-encoder
          </button>
          <button
            type="button"
            onClick={() => setReranked(false)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-faint)" }} aria-live="polite">
          {reranked
            ? 'The best answer ("Password reset") jumped from #3 to #1 — the reranker read each query–document pair closely.'
            : "Vector similarity is fast but coarse — the ideal answer sits at #3."}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A reranker re-scores the shortlist by reading each query–document pair, pushing the most relevant results to the top.
      </figcaption>
    </figure>
  );
}
