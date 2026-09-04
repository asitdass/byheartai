import { UserCog, Search, Code2, PenTool } from "lucide-react";

const workers = [
  { icon: Search, name: "Researcher", job: "gathers information" },
  { icon: Code2, name: "Coder", job: "writes & runs code" },
  { icon: PenTool, name: "Writer", job: "drafts the final output" },
];

/** Supervisor / orchestrator pattern: one coordinator delegates to specialists. */
export function MultiAgent() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="A supervisor agent receives the goal and delegates sub-tasks to specialized agents — a researcher, a coder, and a writer — then combines their results into the final answer.">
        <div className="mx-auto mb-2 flex w-56 flex-col items-center rounded-[--radius-sm] border-2 px-3 py-3 text-center" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
          <UserCog size={20} aria-hidden style={{ color: "var(--accent)" }} />
          <span className="mt-1 text-sm font-bold">Supervisor / Orchestrator</span>
          <span className="text-xs" style={{ color: "var(--ink-faint)" }}>plans &amp; delegates sub-tasks</span>
        </div>
        <div className="text-center text-xs" style={{ color: "var(--ink-faint)" }} aria-hidden>↓ delegates to ↓</div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {workers.map((w) => (
            <div key={w.name} className="flex flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)" }}>
              <w.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
              <span className="mt-1 text-sm font-semibold">{w.name}</span>
              <span className="text-xs" style={{ color: "var(--ink-faint)" }}>{w.job}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-xs" style={{ color: "var(--ink-faint)" }} aria-hidden>↑ results combined by the supervisor ↑</div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Multi-agent systems split a big job across specialists coordinated by an orchestrator — like a team with a manager.
      </figcaption>
    </figure>
  );
}
