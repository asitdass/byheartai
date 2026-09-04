import { PenLine, Database, Search, Leaf } from "lucide-react";

const steps = [
  { icon: PenLine, title: "Write (extract)", note: "Don't save the whole chat. Distill a fact, event, or skill with a key, source, and time." },
  { icon: Database, title: "Store", note: "Facts → KV/graph. Episodes → log + vectors. Skills → versioned files. Hybrid is normal." },
  { icon: Search, title: "Retrieve", note: "Query by user, time, and meaning. Rerank. Load a few items — not the whole store." },
  { icon: Leaf, title: "Forget", note: "TTL on episodes, supersede stale facts, version skills. Forgetting is a feature." },
];

/** Write → store → retrieve → forget lifecycle. */
export function MemoryLifecycle() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="Memory lifecycle: extract a write, store it in the right engine, retrieve a small relevant set, and forget on purpose.">
        <ol className="grid gap-2 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-start gap-3 rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>{i + 1}</span>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <s.icon size={15} aria-hidden style={{ color: "var(--accent)" }} /> {s.title}
                </div>
                <p className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Memory is a pipeline: extract, store in the right engine, retrieve a little, forget on purpose.
      </figcaption>
    </figure>
  );
}
