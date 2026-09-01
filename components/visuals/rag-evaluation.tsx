import { Search, Sparkles } from "lucide-react";

const retrieval = [
  { name: "Context precision", q: "Are the retrieved chunks actually relevant (little noise)?" },
  { name: "Context recall", q: "Did we retrieve all the chunks needed to answer?" },
];
const generation = [
  { name: "Faithfulness", q: "Is the answer supported by the retrieved context (no hallucination)?" },
  { name: "Answer relevance", q: "Does the answer actually address the question?" },
];

function Group({ icon: Icon, title, items }: { icon: typeof Search; title: string; items: { name: string; q: string }[] }) {
  return (
    <div className="flex-1 rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
      <div className="mb-3 flex items-center gap-2">
        <Icon size={18} style={{ color: "var(--accent)" }} aria-hidden />
        <span className="text-sm font-bold">{title}</span>
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.name} className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{it.name}</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{it.q}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The two halves of RAG evaluation: retrieval quality and generation quality. */
export function RagEvaluation() {
  return (
    <figure className="my-8">
      <div className="flex flex-col gap-4 sm:flex-row" role="img" aria-label="RAG evaluation has two halves. Retrieval quality: context precision (are retrieved chunks relevant) and context recall (did we get all needed chunks). Generation quality: faithfulness (is the answer supported by context) and answer relevance (does it address the question).">
        <Group icon={Search} title="Retrieval quality" items={retrieval} />
        <Group icon={Sparkles} title="Generation quality" items={generation} />
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Evaluate both halves: if retrieval fails, even a perfect model answers wrong — measure each separately.
      </figcaption>
    </figure>
  );
}
