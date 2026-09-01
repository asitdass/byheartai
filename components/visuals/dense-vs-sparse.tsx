/*
 * Side-by-side view of a sparse vector (mostly zeros, one slot per vocabulary
 * word) vs a dense embedding (few numbers, every slot meaningful).
 */
const sparse = [0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0];
const dense = [0.21, -0.44, 0.87, 0.12, -0.63, 0.35, -0.09, 0.52];

export function DenseVsSparse() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <h4 className="mb-1 text-sm font-bold">Sparse vector</h4>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-faint)" }}>
            One slot per word in the vocabulary (often 30k+). Mostly zeros; nonzero = word is present.
          </p>
          <div className="flex flex-wrap gap-1" role="img" aria-label="A long vector that is almost all zeros with a few nonzero entries.">
            {sparse.map((v, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-[--radius-sm] font-mono text-xs"
                style={{
                  background: v === 0 ? "var(--paper)" : "color-mix(in oklab, var(--accent) 30%, var(--paper))",
                  color: v === 0 ? "var(--ink-faint)" : "var(--ink)",
                  border: "1px solid var(--rule)",
                }}
              >
                {v}
              </span>
            ))}
            <span className="flex h-7 items-center px-1 text-xs" style={{ color: "var(--ink-faint)" }}>… ×30,000</span>
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Exact keyword matches, interpretable</li>
            <li>− Huge, and misses meaning/synonyms</li>
          </ul>
        </div>

        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <h4 className="mb-1 text-sm font-bold">Dense embedding</h4>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-faint)" }}>
            A few hundred numbers, every one meaningful. Captures semantic meaning.
          </p>
          <div className="flex flex-wrap gap-1" role="img" aria-label="A short vector where every entry is a meaningful decimal number.">
            {dense.map((v, i) => (
              <span
                key={i}
                className="flex h-7 w-11 items-center justify-center rounded-[--radius-sm] font-mono text-xs"
                style={{
                  background: `color-mix(in oklab, ${v >= 0 ? "var(--accent)" : "oklch(0.6 0.15 30)"} ${Math.round(Math.abs(v) * 50)}%, var(--paper))`,
                  border: "1px solid var(--rule)",
                }}
              >
                {v.toFixed(2)}
              </span>
            ))}
            <span className="flex h-7 items-center px-1 text-xs" style={{ color: "var(--ink-faint)" }}>… ×768</span>
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Understands meaning &amp; synonyms, compact</li>
            <li>− Not human-readable; can miss exact terms</li>
          </ul>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Sparse = long and literal (keywords); dense = short and semantic (meaning). Hybrid search uses both.
      </figcaption>
    </figure>
  );
}
