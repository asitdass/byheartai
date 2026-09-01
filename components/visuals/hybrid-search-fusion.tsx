import { Plus, Equal } from "lucide-react";

/*
 * Hybrid search fuses a dense (semantic) ranking and a sparse (keyword) ranking
 * into one list, e.g. with Reciprocal Rank Fusion. Docs that rank well in BOTH
 * rise to the top.
 */
const dense = ["iOS sign-in fixes", "Login troubleshooting", "Account recovery"];
const sparse = ["iPhone 15 login bug", "iOS sign-in fixes", "Bug report form"];

// Reciprocal Rank Fusion (k=60), rank is 1-based.
const K = 60;
const rrf = new Map<string, number>();
for (const list of [dense, sparse]) {
  list.forEach((doc, i) => rrf.set(doc, (rrf.get(doc) ?? 0) + 1 / (K + i + 1)));
}
const fused = [...rrf.entries()].sort((a, b) => b[1] - a[1]).map(([doc]) => doc);
const inBoth = new Set(dense.filter((d) => sparse.includes(d)));

function Column({ title, subtitle, docs }: { title: string; subtitle: string; docs: string[] }) {
  return (
    <div className="flex-1 rounded-[--radius] border p-3" style={{ background: "var(--surface)" }}>
      <div className="text-sm font-bold">{title}</div>
      <div className="mb-2 text-xs" style={{ color: "var(--ink-faint)" }}>{subtitle}</div>
      <ol className="space-y-1.5">
        {docs.map((doc, i) => (
          <li
            key={doc}
            className="flex items-center gap-2 rounded-[--radius-sm] px-2 py-1.5 text-xs"
            style={{
              background: inBoth.has(doc) ? "color-mix(in oklab, var(--accent) 18%, var(--paper))" : "var(--paper)",
              border: inBoth.has(doc) ? "1px solid var(--accent)" : "1px solid transparent",
            }}
          >
            <span className="font-mono" style={{ color: "var(--ink-faint)" }}>{i + 1}.</span>
            <span>{doc}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HybridSearchFusion() {
  return (
    <figure className="my-8">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center" role="img" aria-label="A dense semantic ranking and a sparse keyword ranking are fused into a single combined ranking; the document appearing in both rises to the top.">
        <Column title="Dense" subtitle="semantic / meaning" docs={dense} />
        <div className="flex justify-center" aria-hidden><Plus size={18} style={{ color: "var(--ink-faint)" }} /></div>
        <Column title="Sparse" subtitle="keyword / exact" docs={sparse} />
        <div className="flex justify-center" aria-hidden><Equal size={18} style={{ color: "var(--ink-faint)" }} /></div>
        <Column title="Fused (RRF)" subtitle="combined ranking" docs={fused} />
      </div>
      <p className="mt-3 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        "iOS sign-in fixes" ranks well in both lists, so fusion lifts it to #1. Formula: score = Σ 1 / (k + rank).
      </p>
      <figcaption className="mt-1 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Hybrid search merges semantic and keyword rankings — recall from meaning, precision from exact terms.
      </figcaption>
    </figure>
  );
}
