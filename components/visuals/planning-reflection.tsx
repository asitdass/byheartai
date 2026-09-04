import { ListTodo, Play, Search, RefreshCw } from "lucide-react";

const steps = [
  { icon: ListTodo, label: "Plan", note: "break the goal into sub-tasks" },
  { icon: Play, label: "Execute", note: "do the next sub-task (with tools)" },
  { icon: Search, label: "Reflect", note: "check the result: good enough?" },
  { icon: RefreshCw, label: "Revise", note: "fix mistakes or replan, then continue" },
];

/** Plan → Execute → Reflect → Revise loop for more reliable agents. */
export function PlanningReflection() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="Planning and reflection loop: plan by breaking the goal into sub-tasks, execute the next sub-task, reflect on whether the result is good enough, and revise or replan before continuing — looping until done.">
        <div className="flex flex-wrap items-stretch gap-2">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="flex w-36 flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center" style={{ background: "var(--paper)" }}>
                <s.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-sm font-semibold">{s.label}</span>
                <span className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</span>
              </div>
              {i < steps.length - 1 && <span aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>}
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          ↻ reflect &amp; revise loops back to execute (or replan) until the goal is met
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Planning breaks a big goal into steps; reflection lets the agent catch and fix its own mistakes.
      </figcaption>
    </figure>
  );
}
