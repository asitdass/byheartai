"use client";

import { useState } from "react";
import { Search, FileCode, FlaskConical, GitPullRequest } from "lucide-react";

const stages = [
  {
    id: "explore",
    icon: Search,
    title: "Explore",
    body: "Tools: list, grep, read. Do not dump the repo into the window. Retrieval over code + targeted reads.",
  },
  {
    id: "edit",
    icon: FileCode,
    title: "Edit",
    body: "Patches, not mystery rewrites of whole files when you can avoid it. Diffs are the audit trail.",
  },
  {
    id: "test",
    icon: FlaskConical,
    title: "Verify",
    body: "Tests (or typecheck) in a sandbox. The verifier is code, not another model's vibes. Loop cap.",
  },
  {
    id: "pr",
    icon: GitPullRequest,
    title: "HITL",
    body: "A pull request is the human gate. Secrets never in prompts. No unsandboxed exec on the developer's keys.",
  },
] as const;

/** Coding agent: explore, patch, test, PR. */
export function CodingAgentDesign() {
  const [id, setId] = useState<(typeof stages)[number]["id"]>("test");
  const s = stages.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stages.map((st) => {
            const active = st.id === id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setId(st.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <st.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold">{st.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{s.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A coding agent is tools plus a sandbox plus tests — the PR is HITL. The repo is not a 2-million-token paste.
      </figcaption>
    </figure>
  );
}
