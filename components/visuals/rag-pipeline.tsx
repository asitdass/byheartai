import { FileText, Scissors, Boxes, Search, ListOrdered, Sparkles } from "lucide-react";

const steps = [
  { icon: FileText, label: "Document", note: "Your source data" },
  { icon: Scissors, label: "Chunk", note: "Split into passages" },
  { icon: Boxes, label: "Embed", note: "Turn into vectors" },
  { icon: Search, label: "Retrieve", note: "Find similar chunks" },
  { icon: ListOrdered, label: "Rerank", note: "Order by relevance" },
  { icon: Sparkles, label: "Generate", note: "Answer with context" },
];

/**
 * A calm, dependency-free flow diagram of the RAG pipeline.
 * Ships with a screen-reader text alternative (see docs/CONTENT_SCHEMA.md).
 */
export function RagPipeline() {
  return (
    <figure className="my-8">
      <div
        className="flex flex-wrap items-stretch gap-2 rounded-[--radius] border p-4"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="RAG pipeline: a document is chunked, embedded into vectors, retrieved by similarity, reranked, and finally used as context to generate an answer."
      >
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-stretch gap-2" style={{ minWidth: "8.5rem" }}>
            <div
              className="flex flex-1 flex-col items-center gap-1 rounded-[--radius-sm] border px-2 py-3 text-center"
              style={{ background: "var(--paper)" }}
            >
              <s.icon size={22} style={{ color: "var(--accent)" }} aria-hidden />
              <span className="text-sm font-semibold">{s.label}</span>
              <span className="text-xs" style={{ color: "var(--ink-faint)" }}>
                {s.note}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center" aria-hidden style={{ color: "var(--ink-faint)" }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        The RAG pipeline: document → chunk → embed → retrieve → rerank → generate.
      </figcaption>
    </figure>
  );
}
