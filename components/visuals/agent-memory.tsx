import { Notebook, Database, Layers } from "lucide-react";

const kinds = [
  {
    icon: Notebook,
    title: "Short-term (working) memory",
    desc: "The current context window: the task, recent steps, and tool results. Fast but limited and temporary.",
    examples: ["This conversation", "Scratchpad of recent actions", "Latest tool outputs"],
  },
  {
    icon: Database,
    title: "Long-term memory",
    desc: "Facts stored outside the model (often a vector database) and retrieved when relevant. Survives across sessions.",
    examples: ["User preferences", "Past conversations", "Learned facts"],
  },
  {
    icon: Layers,
    title: "State",
    desc: "The structured progress of the task: the plan, what's done, and what's left. Keeps a long task on track.",
    examples: ["Current plan / to-do list", "Completed sub-tasks", "Variables & results"],
  },
];

/** The three memory types an agent juggles: short-term, long-term, and state. */
export function AgentMemory() {
  return (
    <figure className="my-8">
      <div className="grid gap-3 md:grid-cols-3" role="img" aria-label="Agents use three kinds of memory: short-term working memory (the context window), long-term memory (facts stored outside the model and retrieved when relevant), and state (the structured progress of the task).">
        {kinds.map((k) => (
          <div key={k.title} className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
            <div className="mb-2 flex items-center gap-2">
              <k.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
              <span className="text-sm font-bold">{k.title}</span>
            </div>
            <p className="text-xs" style={{ color: "var(--ink-muted)" }}>{k.desc}</p>
            <ul className="mt-2 space-y-1 text-xs" style={{ color: "var(--ink-faint)" }}>
              {k.examples.map((e) => (
                <li key={e}>• {e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Short-term memory is what fits in context now; long-term memory is retrieved from outside; state tracks task progress.
      </figcaption>
    </figure>
  );
}
