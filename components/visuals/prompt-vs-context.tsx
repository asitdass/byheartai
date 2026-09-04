import { PenLine, Layers } from "lucide-react";

/** Prompt engineering is wording; context engineering is the whole payload. */
export function PromptVsContext() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <PenLine size={15} aria-hidden style={{ color: "var(--accent)" }} /> Prompt engineering
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            You write the instruction: role, examples, output format.
          </p>
          <div className="rounded-[--radius-sm] p-3 font-mono text-xs" style={{ background: "var(--paper)" }} role="img" aria-label="A prompt is a single authored instruction.">
            You are a careful support agent.<br />
            Answer only from the policy.<br />
            Be brief.
          </div>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ Highest leverage for one-shot tasks</li>
            <li>− Can&apos;t fix missing or bloated information</li>
          </ul>
        </div>

        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <Layers size={15} aria-hidden style={{ color: "var(--accent)" }} /> Context engineering
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            Your system assembles everything the model sees on this call.
          </p>
          <ul className="space-y-1 rounded-[--radius-sm] p-3 text-xs" style={{ background: "var(--paper)" }} role="img" aria-label="Context includes instructions, tools, retrieved docs, memory, history, and the user message.">
            <li>instructions</li>
            <li>tool schemas</li>
            <li>retrieved docs</li>
            <li>memory</li>
            <li>recent history</li>
            <li>user message</li>
          </ul>
          <ul className="mt-3 space-y-1 text-xs" style={{ color: "var(--ink-muted)" }}>
            <li>+ The real lever for agents and RAG</li>
            <li>− You now own a pipeline, not a paragraph</li>
          </ul>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Prompt engineering is how you phrase the ask. Context engineering is what the model is allowed to know when it answers.
      </figcaption>
    </figure>
  );
}
