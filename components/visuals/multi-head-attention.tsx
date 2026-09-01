const heads = [
  { name: "Head 1", focus: "Who did what (subject → verb)" },
  { name: "Head 2", focus: "What refers to what (pronouns)" },
  { name: "Head 3", focus: "Nearby words / phrasing" },
  { name: "Head 4", focus: "Long-range topic links" },
];

/** Diagram: input is processed by several attention heads in parallel, then combined. */
export function MultiHeadAttention() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="Multi-head attention runs several attention heads in parallel. Each head learns to focus on a different kind of relationship (for example subject-verb links, pronoun references, nearby phrasing, or long-range topic links). Their outputs are concatenated and combined into one richer representation."
      >
        <div className="text-center text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same words in
        </div>
        <div className="my-2 text-center" aria-hidden style={{ color: "var(--ink-faint)" }}>↓ split into parallel heads ↓</div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {heads.map((h) => (
            <div key={h.name} className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{h.name}</div>
              <div className="mt-1 text-xs" style={{ color: "var(--ink-faint)" }}>{h.focus}</div>
            </div>
          ))}
        </div>

        <div className="my-2 text-center" aria-hidden style={{ color: "var(--ink-faint)" }}>↓ concatenate + combine ↓</div>
        <div className="mx-auto max-w-sm rounded-[--radius-sm] border px-3 py-2 text-center text-sm font-semibold" style={{ background: "var(--paper)" }}>
          One richer representation out
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Multiple heads let the model attend to several kinds of relationships at once.
      </figcaption>
    </figure>
  );
}
