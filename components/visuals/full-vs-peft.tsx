import { Layers, Puzzle } from "lucide-react";

/** Full fine-tune updates every weight; PEFT trains a small adapter. */
export function FullVsPeft() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <Layers size={15} aria-hidden style={{ color: "var(--accent)" }} /> Full fine-tune
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>Every parameter can move. Huge GPU bill. You ship a whole new copy of the model.</p>
          <div className="grid grid-cols-6 gap-1" role="img" aria-label="A grid of many weights, all trainable.">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-4 rounded-sm" style={{ background: "var(--accent)", opacity: 0.85 }} />
            ))}
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Maximum capacity to change</li>
            <li>− Costly, easy to overwrite general skill</li>
          </ul>
        </div>
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <Puzzle size={15} aria-hidden style={{ color: "var(--accent)" }} /> PEFT (adapter)
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>Base weights freeze. A tiny add-on learns the task. You ship the base + a small file.</p>
          <div className="grid grid-cols-6 gap-1" role="img" aria-label="Most weights frozen, a few adapter cells trainable.">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="h-4 rounded-sm"
                style={{ background: i === 8 || i === 9 || i === 14 || i === 15 ? "var(--accent)" : "var(--paper)", border: "1px solid var(--rule)" }}
              />
            ))}
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Cheap, swap adapters per product</li>
            <li>− Slightly less room to totally rewrite the model</li>
          </ul>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Full fine-tuning moves every weight. PEFT freezes the base and trains a small adapter — the 2026 default.
      </figcaption>
    </figure>
  );
}
