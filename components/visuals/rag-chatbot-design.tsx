"use client";

import { useState } from "react";

const layers = [
  {
    id: "ingest",
    title: "Ingest",
    body: "Approved sources only. Chunk with overlap, embed, store ids + metadata (source, date). Provenance or you cannot cite or debug poison.",
  },
  {
    id: "retrieve",
    title: "Retrieve",
    body: "Hybrid search + rerank. k small enough to fit the window. Empty retrieve → 'I don't know,' not a fluent guess.",
  },
  {
    id: "generate",
    title: "Generate",
    body: "Answer only from chunks. Quote-then-claim. Citations are ids the UI can open — fake § is a bug you eval.",
  },
  {
    id: "gate",
    title: "Gate",
    body: "Split eval: context recall vs faithfulness. Prompt version on the span. No tools that send email on the same turn as 'summarize this URL.'",
  },
] as const;

/** Minimal production RAG chatbot. */
export function RagChatbotDesign() {
  const [id, setId] = useState<(typeof layers)[number]["id"]>("retrieve");
  const L = layers.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {layers.map((layer) => {
            const active = layer.id === id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setId(layer.id)}
                aria-pressed={active}
                className="rounded-[--radius-sm] border px-2 py-2 text-center text-xs font-semibold"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                {layer.title}
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
          docs → chunk → index → hybrid+rerank → grounded answer + citations
        </p>
        <p className="mt-2 text-sm" aria-live="polite">{L.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A RAG chatbot is retrieval plus a generator with a leash — not an agent, not a fine-tune of the wiki.
      </figcaption>
    </figure>
  );
}
