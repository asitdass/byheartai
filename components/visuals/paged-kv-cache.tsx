"use client";

import { useState } from "react";

const views = [
  {
    id: "naive",
    title: "Naive KV reservation",
    note: "Each request pre-allocates a giant contiguous cache for the max context. Most of it is empty. Fragmentation. Few concurrent users.",
    blocks: [
      { label: "req A (mostly empty)", used: 25 },
      { label: "req B (mostly empty)", used: 20 },
      { label: "wasted hole", used: 0 },
    ],
  },
  {
    id: "paged",
    title: "Paged KV",
    note: "Cache is blocks, like virtual memory. Allocate as tokens arrive. More users fit. This is the idea behind PagedAttention-style engines.",
    blocks: [
      { label: "A", used: 100 },
      { label: "B", used: 100 },
      { label: "A", used: 100 },
      { label: "C", used: 100 },
      { label: "B", used: 60 },
    ],
  },
  {
    id: "prefix",
    title: "Shared prefix pages",
    note: "The same system prompt + tools can occupy one set of KV pages many requests point at. Engine prefix cache — cousin of HTTP prompt caching, same physics.",
    blocks: [
      { label: "shared prefix", used: 100 },
      { label: "user A suffix", used: 80 },
      { label: "user B suffix", used: 70 },
    ],
  },
] as const;

/** Paged KV memory vs naive reservation vs prefix sharing. */
export function PagedKvCache() {
  const [id, setId] = useState<(typeof views)[number]["id"]>("paged");
  const v = views.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setId(view.id)}
              aria-pressed={view.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: view.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: view.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {view.title}
            </button>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap gap-1" role="img" aria-label={v.note} aria-live="polite">
          {v.blocks.map((b, i) => (
            <div
              key={`${b.label}-${i}`}
              className="flex h-14 w-16 flex-col justify-end overflow-hidden rounded-[--radius-sm] border"
              style={{ background: "var(--paper)" }}
            >
              <div className="w-full" style={{ height: `${Math.max(b.used, 8)}%`, background: b.used ? "var(--accent)" : "transparent" }} />
              <span className="px-0.5 py-0.5 text-center text-[9px] leading-tight" style={{ color: "var(--ink-faint)" }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm">{v.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Serving KV cache is a memory allocator problem. Pages and shared prefixes are how you fit more concurrent chats.
      </figcaption>
    </figure>
  );
}
