"use client";

import { useState } from "react";
import { Play, RotateCcw, Database, Cpu } from "lucide-react";

const sequence = ["The", "cat", "sat", "on", "the", "mat"];

/*
 * Interactive KV cache demo. Generate tokens one at a time; already-seen tokens'
 * keys/values are reused from cache (cheap) instead of recomputed (expensive).
 */
export function KVCacheVisualizer() {
  const [generated, setGenerated] = useState<number>(1); // start with prompt "The"

  const withoutCache = Array.from({ length: generated }, (_, step) => step + 1).reduce((a, b) => a + b, 0);
  const withCache = generated; // one new token computed per step
  const saved = withoutCache - withCache;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Generate tokens one at a time. Cached tokens are reused; only the newest token is computed.
        </p>

        <div className="flex flex-wrap gap-1.5 text-lg" aria-label="Generated sequence">
          {sequence.map((tok, i) => {
            const isGenerated = i < generated;
            const isNewest = i === generated - 1;
            if (!isGenerated) {
              return (
                <span key={i} className="rounded-[--radius-sm] border border-dashed px-2 py-1" style={{ color: "var(--ink-faint)", opacity: 0.5 }}>
                  {tok}
                </span>
              );
            }
            return (
              <span
                key={i}
                className="flex items-center gap-1 rounded-[--radius-sm] px-2 py-1"
                style={{
                  background: isNewest
                    ? "color-mix(in oklab, var(--accent) 20%, var(--paper))"
                    : "color-mix(in oklab, oklch(0.6 0.15 150) 16%, var(--paper))",
                }}
                title={isNewest ? "Computed now" : "Reused from KV cache"}
              >
                {isNewest ? <Cpu size={13} aria-hidden style={{ color: "var(--accent)" }} /> : <Database size={13} aria-hidden style={{ color: "oklch(0.55 0.15 150)" }} />}
                {tok}
              </span>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-4 text-xs" style={{ color: "var(--ink-faint)" }}>
          <span className="flex items-center gap-1"><Cpu size={13} aria-hidden style={{ color: "var(--accent)" }} /> computed now</span>
          <span className="flex items-center gap-1"><Database size={13} aria-hidden style={{ color: "oklch(0.55 0.15 150)" }} /> reused from cache</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Without cache</div>
            <div className="text-lg font-bold">{withoutCache}</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>token-computations</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>With KV cache</div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>{withCache}</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>token-computations</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Saved</div>
            <div className="text-lg font-bold" style={{ color: "oklch(0.55 0.15 150)" }}>{saved}</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>re-computations</div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setGenerated((g) => Math.min(g + 1, sequence.length))}
            disabled={generated >= sequence.length}
            className="flex items-center gap-1 rounded-[--radius-sm] px-4 py-2 text-sm font-semibold disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            <Play size={14} aria-hidden /> Generate next token
          </button>
          <button
            type="button"
            onClick={() => setGenerated(1)}
            className="flex items-center gap-1 rounded-[--radius-sm] px-3 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        The KV cache stores past tokens&apos; keys and values so each new token is generated without redoing all the previous work.
      </figcaption>
    </figure>
  );
}
