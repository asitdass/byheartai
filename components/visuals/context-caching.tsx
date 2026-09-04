"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const bad = ["user question", "timestamp", "retrieved docs", "system prompt", "tools"];
const good = ["tools", "system prompt", "stable docs", "history…", "new question"];

/** Static prefix vs shuffled prefix — prompt cache hits need a stable start. */
export function ContextCaching() {
  const [stable, setStable] = useState(true);
  const order = stable ? good : bad;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setStable(false)}
            aria-pressed={!stable}
            className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
            style={{
              background: !stable ? "color-mix(in oklab, oklch(0.6 0.18 25) 16%, var(--paper))" : "var(--paper)",
              borderColor: !stable ? "oklch(0.6 0.18 25)" : "var(--rule)",
            }}
          >
            Dynamic stuff first
          </button>
          <button
            type="button"
            onClick={() => setStable(true)}
            aria-pressed={stable}
            className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
            style={{
              background: stable ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
              borderColor: stable ? "var(--accent)" : "var(--rule)",
            }}
          >
            Stable prefix first
          </button>
        </div>

        <ol className="flex flex-col gap-1.5" role="img" aria-label={stable ? "Tools, system prompt, and stable docs sit in a cached prefix. History grows. The new question is the only fresh suffix." : "The user question and a timestamp sit at the front, so the prefix changes every call and the cache misses."}>
          {order.map((block, i) => {
            const cached = stable && i < 3;
            const fresh = stable && i === order.length - 1;
            return (
              <li
                key={`${block}-${i}`}
                className="flex items-center justify-between rounded-[--radius-sm] border px-3 py-2 text-sm"
                style={{
                  background: cached ? "color-mix(in oklab, var(--accent) 14%, var(--paper))" : "var(--paper)",
                  borderColor: cached ? "var(--accent)" : "var(--rule)",
                }}
              >
                <span>
                  <span className="mr-2 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>{i + 1}</span>
                  {block}
                </span>
                <span className="text-xs font-semibold" style={{ color: cached ? "var(--accent)" : fresh ? "var(--ink-muted)" : "oklch(0.55 0.18 25)" }}>
                  {cached ? "cached prefix" : fresh ? "new suffix" : stable ? "grows, still prefix-matchable" : "changes every call"}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="mt-3 flex items-start gap-2 text-sm" aria-live="polite">
          {stable ? <Check size={16} aria-hidden style={{ color: "oklch(0.55 0.15 150)", marginTop: 2 }} /> : <X size={16} aria-hidden style={{ color: "oklch(0.55 0.18 25)", marginTop: 2 }} />}
          {stable
            ? "Prefix is identical across calls → KV cache hit. Only the new question is prefilled."
            : "A timestamp or shuffled retrieval at the front changes the prefix → full cache miss."}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Prompt caching is prefix matching. Put stable tools and instructions first; put anything that changes last.
      </figcaption>
    </figure>
  );
}
