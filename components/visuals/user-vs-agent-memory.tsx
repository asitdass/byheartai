import { User, Bot } from "lucide-react";

/** User profile memory vs the agent's own skills and run state. */
export function UserVsAgentMemory() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <User size={16} aria-hidden style={{ color: "var(--accent)" }} /> User memory
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            About the person. Scoped to that user. They should be able to see, edit, and delete it.
          </p>
          <ul className="space-y-1 text-xs" style={{ color: "var(--ink-muted)" }} role="list">
            <li>• Diet, timezone, pronouns</li>
            <li>• &quot;Don&apos;t book mornings&quot;</li>
            <li>• Past orders and tickets</li>
          </ul>
          <p className="mt-3 text-xs" style={{ color: "var(--ink-faint)" }}>Leakage here is a privacy incident.</p>
        </div>
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <Bot size={16} aria-hidden style={{ color: "var(--accent)" }} /> Agent memory
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            About how this agent works: playbooks, tool habits, this run&apos;s checklist. Not the user&apos;s identity.
          </p>
          <ul className="space-y-1 text-xs" style={{ color: "var(--ink-muted)" }} role="list">
            <li>• &quot;Always confirm before refunds&quot;</li>
            <li>• Learned query pattern for this DB</li>
            <li>• Current task todos</li>
          </ul>
          <p className="mt-3 text-xs" style={{ color: "var(--ink-faint)" }}>Sharing this across users is often fine; sharing user memory is not.</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Split stores by whose data it is. User memory is personal; agent memory is operational.
      </figcaption>
    </figure>
  );
}
