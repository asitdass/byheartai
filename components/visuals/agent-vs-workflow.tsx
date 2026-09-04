import { ArrowRight, GitBranch } from "lucide-react";

/*
 * Workflow = fixed, predetermined steps. Agent = decides its own next step each
 * time based on results. Same goal, very different control flow.
 */
export function AgentVsWorkflow() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-3 text-sm font-bold">Workflow (fixed path)</div>
          <div className="flex flex-wrap items-center gap-1.5" role="img" aria-label="A workflow runs a fixed sequence of steps decided in advance: step 1, then 2, then 3, then done.">
            {["Step 1", "Step 2", "Step 3", "Done"].map((s, i, arr) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className="rounded-[--radius-sm] px-2 py-1 text-xs" style={{ background: "var(--paper)" }}>{s}</span>
                {i < arr.length - 1 && <ArrowRight size={12} aria-hidden style={{ color: "var(--ink-faint)" }} />}
              </span>
            ))}
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Predictable, cheap, easy to debug</li>
            <li>+ You control every step</li>
            <li>− Can't adapt to surprises</li>
          </ul>
        </div>

        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-3 flex items-center gap-2 text-sm font-bold">
            <GitBranch size={15} aria-hidden style={{ color: "var(--accent)" }} /> Agent (decides each step)
          </div>
          <div className="rounded-[--radius-sm] p-3 text-xs" style={{ background: "var(--paper)" }} role="img" aria-label="An agent decides its next action each turn based on the latest result, looping until the goal is met.">
            <div className="font-semibold" style={{ color: "var(--accent)" }}>Loop until goal met:</div>
            <div className="mt-1" style={{ color: "var(--ink-muted)" }}>look at result → decide next action → act → repeat</div>
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Adapts to new information</li>
            <li>+ Handles open-ended tasks</li>
            <li>− Less predictable, costlier, harder to debug</li>
          </ul>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A workflow follows steps you fixed in advance; an agent chooses its own next step based on what it sees.
      </figcaption>
    </figure>
  );
}
