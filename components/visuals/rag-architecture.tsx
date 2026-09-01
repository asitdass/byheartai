import { FileText, Scissors, Boxes, Database, Search, ListOrdered, Sparkles, MessageCircleQuestion } from "lucide-react";

const ingestion = [
  { icon: FileText, label: "Documents", note: "PDFs, pages, notes" },
  { icon: Scissors, label: "Chunk", note: "split into passages" },
  { icon: Boxes, label: "Embed", note: "passages → vectors" },
  { icon: Database, label: "Store", note: "vector database" },
];

const query = [
  { icon: MessageCircleQuestion, label: "User question", note: "embed the query" },
  { icon: Search, label: "Retrieve", note: "top-k similar chunks" },
  { icon: ListOrdered, label: "Rerank", note: "best chunks first" },
  { icon: Sparkles, label: "Generate", note: "grounded answer + citations" },
];

function Row({ title, subtitle, steps }: { title: string; subtitle: string; steps: typeof ingestion }) {
  return (
    <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
      <div className="mb-3">
        <span className="text-sm font-bold">{title}</span>
        <span className="ml-2 text-xs" style={{ color: "var(--ink-faint)" }}>{subtitle}</span>
      </div>
      <div className="flex flex-wrap items-stretch gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex w-32 flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center" style={{ background: "var(--paper)" }}>
              <s.icon size={18} style={{ color: "var(--accent)" }} aria-hidden />
              <span className="mt-1 text-sm font-semibold">{s.label}</span>
              <span className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</span>
            </div>
            {i < steps.length - 1 && <span aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two-phase RAG architecture: offline ingestion and per-query answering. */
export function RagArchitecture() {
  return (
    <figure className="my-8">
      <div className="flex flex-col gap-3" role="img" aria-label="RAG has two phases. Ingestion (done ahead of time): documents are chunked, embedded, and stored in a vector database. Answering (per question): the query is embedded, similar chunks are retrieved and reranked, and the model generates a grounded answer with citations.">
        <Row title="1. Ingestion" subtitle="done ahead of time (offline)" steps={ingestion} />
        <div className="text-center text-sm" style={{ color: "var(--ink-faint)" }}>
          the stored vectors connect the two phases ↓
        </div>
        <Row title="2. Answering" subtitle="done per question (at query time)" steps={query} />
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        RAG = build a searchable knowledge store once, then retrieve and ground the model on every question.
      </figcaption>
    </figure>
  );
}
