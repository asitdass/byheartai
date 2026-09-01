import { Type, Hash, Boxes, Layers, Sparkles } from "lucide-react";

const stages = [
  { icon: Type, label: "Input text", note: '"The cat sat"' },
  { icon: Hash, label: "Tokenize", note: "→ tokens → IDs" },
  { icon: Boxes, label: "Embed + position", note: "IDs → vectors (+ order)" },
];

const block = [
  "Self-attention (mix in context)",
  "Add & normalize",
  "Feed-forward network",
  "Add & normalize",
];

/** Diagram of a transformer: tokenize → embed → N stacked blocks → predict. */
export function TransformerArchitecture() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="A transformer converts input text into tokens, then embeddings with positional information, then passes them through a stack of N identical blocks (each with self-attention, add-and-normalize, a feed-forward network, and another add-and-normalize), and finally predicts the next token."
      >
        <div className="flex flex-col gap-3">
          {/* Front-end stages */}
          <div className="flex flex-wrap items-center gap-2">
            {stages.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center rounded-[--radius-sm] border px-3 py-2 text-center" style={{ background: "var(--paper)", minWidth: "9rem" }}>
                  <s.icon size={18} style={{ color: "var(--accent)" }} aria-hidden />
                  <span className="mt-1 text-sm font-semibold">{s.label}</span>
                  <span className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</span>
                </div>
                {i < stages.length - 1 && <span aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>}
              </div>
            ))}
          </div>

          {/* Repeated block */}
          <div
            className="rounded-[--radius] border-2 border-dashed p-4"
            style={{ borderColor: "color-mix(in oklab, var(--accent) 40%, var(--rule))" }}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              <Layers size={14} aria-hidden />
              Transformer block × N (stacked)
            </div>
            <ol className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {block.map((b) => (
                <li key={b} className="rounded-[--radius-sm] px-3 py-2 text-sm" style={{ background: "var(--paper)" }}>
                  {b}
                </li>
              ))}
            </ol>
          </div>

          {/* Output */}
          <div className="flex items-center gap-2">
            <span aria-hidden style={{ color: "var(--ink-faint)" }}>↓</span>
            <div className="flex items-center gap-2 rounded-[--radius-sm] border px-3 py-2" style={{ background: "var(--paper)" }}>
              <Sparkles size={18} style={{ color: "var(--accent)" }} aria-hidden />
              <span className="text-sm font-semibold">Predict next token</span>
              <span className="text-xs" style={{ color: "var(--ink-faint)" }}>→ &quot;on&quot;</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A transformer stacks many identical blocks; each mixes in context with attention, then refines with a feed-forward network.
      </figcaption>
    </figure>
  );
}
