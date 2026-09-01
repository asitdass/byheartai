import { Search, Scale, PenLine, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Search, label: "Retrieve", note: "fetch candidate chunks" },
  { icon: Scale, label: "Grade relevance", note: "are these good enough?" },
  { icon: PenLine, label: "Rewrite / re-retrieve", note: "if not, try again", loop: true },
  { icon: Sparkles, label: "Generate", note: "draft an answer" },
  { icon: ShieldCheck, label: "Check grounding", note: "is it supported? if not, loop", loop: true },
];

/** Loop diagram for agentic / self-correcting RAG. */
export function AgenticRag() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="Agentic RAG adds decision loops: retrieve, grade whether the chunks are relevant, and if not rewrite the query and re-retrieve; then generate and check whether the answer is grounded, looping back if it is not — before returning the final answer.">
        <ol className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <li key={s.label} className="flex items-center gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-[--radius-sm] border px-3 py-2" style={{ background: "var(--paper)", borderColor: s.loop ? "color-mix(in oklab, var(--accent) 40%, var(--rule))" : "var(--rule)" }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>{i + 1}</span>
                <s.icon size={18} style={{ color: "var(--accent)" }} aria-hidden />
                <div>
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</div>
                </div>
                {s.loop && (
                  <span className="ml-auto rounded-full px-2 py-0.5 text-xs font-semibold" style={{ background: "color-mix(in oklab, var(--accent) 16%, transparent)", color: "var(--accent)" }}>
                    ↻ can loop back
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 text-center text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          ↓ only when confident → return grounded answer
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Agentic RAG turns a one-shot pipeline into a self-correcting loop that judges its own retrieval and answers.
      </figcaption>
    </figure>
  );
}
