"use client";

import { useState } from "react";
import { Copy, Layers, Sparkles } from "lucide-react";

const caches = [
  {
    id: "exact",
    icon: Copy,
    title: "Exact replay",
    hit: "Byte-for-byte same request → stored answer (or stored KV).",
    risk: "Safe when the world didn't change. Wrong if the doc or prompt version moved and you didn't key on it.",
  },
  {
    id: "prefix",
    icon: Layers,
    title: "Prefix / KV cache",
    hit: "Shared system+tools prefix skips prefill. Engine pages or a provider prompt-cache.",
    risk: "Any edit in the prefix busts it. Don't put per-user secrets in the shared prefix (security + cache).",
  },
  {
    id: "sem",
    icon: Sparkles,
    title: "Semantic cache",
    hit: "A 'similar' past question returns a past answer without a model call.",
    risk: "Similar is not same. Refunds, IDs, and 'today' facts go stale. Use for FAQs with a tight similarity bar + TTL.",
  },
] as const;

/** Three inference caches and how they lie. */
export function InferenceCaches() {
  const [id, setId] = useState<(typeof caches)[number]["id"]>("prefix");
  const c = caches.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {caches.map((cache) => {
            const active = cache.id === id;
            return (
              <button
                key={cache.id}
                type="button"
                onClick={() => setId(cache.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <cache.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{cache.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">Hit means: </span>{c.hit}</p>
          <p style={{ color: "var(--ink-muted)" }}><span className="font-semibold">It lies when: </span>{c.risk}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Three caches: exact, prefix KV, semantic. Include prompt version in the key. Semantic is a product decision, not a free speedup.
      </figcaption>
    </figure>
  );
}
