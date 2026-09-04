"use client";

import { useState } from "react";
import { Wrench, FileText, MessageSquare } from "lucide-react";

const primitives = [
  {
    id: "tools",
    icon: Wrench,
    title: "Tools",
    verb: "Do something",
    desc: "Actions the model can request: search, create a ticket, run a query. They have a name, a description, and an input schema — just like function calling.",
    example: 'tools/call  name: "create_issue"  args: { title: "Login bug" }',
    note: "Side effects live here. Treat every call as untrusted input.",
  },
  {
    id: "resources",
    icon: FileText,
    title: "Resources",
    verb: "Read something",
    desc: "Data the host can pull into context: files, tickets, schema docs. Identified by a URI. The model (or the user) chooses what to attach — it isn't an action.",
    example: 'resources/read  uri: "file:///src/auth.ts"',
    note: "Read-only context. Great for grounding without giving write access.",
  },
  {
    id: "prompts",
    icon: MessageSquare,
    title: "Prompts",
    verb: "Start something",
    desc: "Reusable, named templates the server ships — slash-commands, review checklists, onboarding flows. The host shows them; the user (or agent) picks one.",
    example: 'prompts/get  name: "pr_review"  args: { pr: 142 }',
    note: "Saved recipes, not live actions. They fill the conversation with a well-designed start.",
  },
] as const;

/** Interactive Tools vs Resources vs Prompts. */
export function McpPrimitives() {
  const [id, setId] = useState<(typeof primitives)[number]["id"]>("tools");
  const p = primitives.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-4 grid grid-cols-3 gap-2">
          {primitives.map((pr) => {
            const active = pr.id === id;
            return (
              <button
                key={pr.id}
                type="button"
                onClick={() => setId(pr.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "var(--accent)" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <pr.icon size={18} aria-hidden style={{ color: active ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 text-sm font-bold" style={{ color: active ? "var(--accent-ink)" : "var(--ink)" }}>{pr.title}</span>
                <span className="text-[11px]" style={{ color: active ? "var(--accent-ink)" : "var(--ink-faint)" }}>{pr.verb}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-2 text-sm" aria-live="polite">
          <p>{p.desc}</p>
          <pre className="overflow-x-auto rounded-[--radius-sm] p-3 font-mono text-xs" style={{ background: "var(--paper)" }}>
            {p.example}
          </pre>
          <p className="text-xs" style={{ color: "var(--ink-muted)" }}>{p.note}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Tools act, resources are read into context, prompts are reusable starting recipes.
      </figcaption>
    </figure>
  );
}
