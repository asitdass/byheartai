import { ArrowRight } from "lucide-react";

/*
 * Product Quantization: split a vector into sub-vectors, replace each with the ID
 * of its nearest centroid from a small codebook. The vector becomes a few bytes.
 */
const subvectors = [
  { values: [0.21, -0.44], code: 37 },
  { values: [0.87, 0.12], code: 12 },
  { values: [-0.63, 0.35], code: 200 },
  { values: [-0.09, 0.52], code: 88 },
];

export function ProductQuantization() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="flex flex-col gap-3" role="img" aria-label="A vector is split into sub-vectors; each sub-vector is replaced by the ID of its nearest centroid, compressing the vector into a few bytes.">
          <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>1. Split the vector into sub-vectors</div>
          <div className="flex flex-wrap gap-2">
            {subvectors.map((sv, i) => (
              <div key={i} className="flex gap-1 rounded-[--radius-sm] border p-1.5" style={{ background: "var(--paper)" }}>
                {sv.values.map((v, j) => (
                  <span key={j} className="flex h-7 w-11 items-center justify-center rounded-[2px] font-mono text-xs" style={{ background: "var(--surface)" }}>
                    {v.toFixed(2)}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
            2. Replace each with its nearest centroid ID <ArrowRight size={12} aria-hidden />
          </div>
          <div className="flex flex-wrap gap-2">
            {subvectors.map((sv, i) => (
              <span key={i} className="flex h-9 w-16 items-center justify-center rounded-[--radius-sm] font-mono text-sm font-bold" style={{ background: "color-mix(in oklab, var(--accent) 20%, var(--paper))", color: "var(--accent)" }}>
                #{sv.code}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Original</div>
            <div className="text-lg font-bold">32 bytes</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>8 floats × 4B</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Compressed</div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>4 bytes</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>4 codes × 1B</div>
          </div>
          <div className="rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Smaller</div>
            <div className="text-lg font-bold" style={{ color: "oklch(0.55 0.15 150)" }}>8×</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>less memory</div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Product Quantization compresses vectors into compact codes — huge memory savings for a small accuracy cost.
      </figcaption>
    </figure>
  );
}
