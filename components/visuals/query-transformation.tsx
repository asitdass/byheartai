import { ArrowRight } from "lucide-react";

const techniques = [
  {
    name: "Rewrite",
    original: "it broke after the update, help",
    outputs: ['"How do I fix the app crashing after the latest update?"'],
    note: "Cleans a vague/messy query into a clear one.",
  },
  {
    name: "Multi-query",
    original: "reset password",
    outputs: ['"How to reset my password?"', '"Recover a forgotten password"', '"Change account credentials"'],
    note: "Fans out into variations to catch more relevant chunks.",
  },
  {
    name: "HyDE",
    original: "What is the refund window?",
    outputs: ['(writes a hypothetical answer, then embeds THAT to search)'],
    note: "Searches with a draft answer, which often matches documents better.",
  },
];

/** Diagram of query transformation techniques used before retrieval. */
export function QueryTransformation() {
  return (
    <figure className="my-8">
      <div className="space-y-3" role="img" aria-label="Query transformation techniques: Rewrite turns a messy query into a clear one; Multi-query fans one query into several variations; HyDE writes a hypothetical answer and embeds that to search.">
        {techniques.map((t) => (
          <div key={t.name} className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-[--radius-sm] px-2 py-0.5 text-xs font-bold" style={{ background: "color-mix(in oklab, var(--accent) 18%, var(--paper))", color: "var(--accent)" }}>{t.name}</span>
              <span className="text-xs" style={{ color: "var(--ink-faint)" }}>{t.note}</span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <code className="rounded-[--radius-sm] px-2 py-1 text-xs" style={{ background: "var(--paper)", color: "var(--ink-muted)" }}>{t.original}</code>
              <ArrowRight size={14} aria-hidden style={{ color: "var(--ink-faint)" }} className="shrink-0" />
              <div className="flex flex-1 flex-wrap gap-1.5">
                {t.outputs.map((o, i) => (
                  <code key={i} className="rounded-[--radius-sm] px-2 py-1 text-xs" style={{ background: "color-mix(in oklab, var(--accent) 12%, var(--paper))" }}>{o}</code>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Transforming the query before retrieval finds better chunks — cleaner wording, more variations, or a hypothetical answer.
      </figcaption>
    </figure>
  );
}
