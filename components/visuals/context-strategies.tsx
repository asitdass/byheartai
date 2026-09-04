import { PenLine, Search, Minimize2, Split } from "lucide-react";

const moves = [
  {
    icon: PenLine,
    title: "Write",
    desc: "Park information outside the window: a scratchpad, a to-do list, a memory store, an index of files.",
    example: "Save “refund cap = $120” to memory instead of hoping the transcript keeps it.",
  },
  {
    icon: Search,
    title: "Select",
    desc: "Pull only what this step needs: RAG, tool results, just-in-time file reads.",
    example: "Retrieve 4 reranked chunks, not 40 pages of policy.",
  },
  {
    icon: Minimize2,
    title: "Compress",
    desc: "When the window fills, trim tool dumps and compact old turns into state.",
    example: "Replace 2,000 tokens of logs with “tests failing on empty session.”",
  },
  {
    icon: Split,
    title: "Isolate",
    desc: "Give a sub-agent its own clean window for a sub-task, then return a short result.",
    example: "A research sub-agent reads 20 pages; the parent only sees a one-page brief.",
  },
];

/** The four context-engineering moves: write, select, compress, isolate. */
export function ContextStrategies() {
  return (
    <figure className="my-8">
      <div className="grid gap-3 sm:grid-cols-2" role="img" aria-label="Four strategies: write information outside the window, select only what this step needs, compress old content, and isolate sub-tasks in their own windows.">
        {moves.map((m) => (
          <div key={m.title} className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
            <div className="mb-2 flex items-center gap-2">
              <m.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
              <span className="text-sm font-bold">{m.title}</span>
            </div>
            <p className="text-xs" style={{ color: "var(--ink-muted)" }}>{m.desc}</p>
            <p className="mt-2 text-xs" style={{ color: "var(--ink-faint)" }}>{m.example}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Production systems mix all four: write state out, select the next slice in, compress when full, isolate hard sub-tasks.
      </figcaption>
    </figure>
  );
}
