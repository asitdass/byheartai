"use client";

import { useState } from "react";
import { Target, Shapes, BookOpen, ClipboardCheck, Shield, Eye, Server } from "lucide-react";

const stages = [
  {
    id: "job",
    icon: Target,
    title: "1. Job & SLO",
    body: "Who is the user, what is 'done,' and the four knobs: quality floor, p95 latency, $ per successful task, reliability. If you cannot write this, you cannot pick a model.",
  },
  {
    id: "shape",
    icon: Shapes,
    title: "2. Shape",
    body: "Chatbot, workflow, or agent? If you know the steps, it's a workflow. If they must be discovered, it's an agent. Start simpler than your demo brain wants.",
  },
  {
    id: "know",
    icon: BookOpen,
    title: "3. Knowledge & tools",
    body: "Facts that change → RAG or APIs. Habits that won't stick → fine-tune later. Tools are permissions. Don't give the model a wiki in the weights.",
  },
  {
    id: "eval",
    icon: ClipboardCheck,
    title: "4. Eval before scale",
    body: "A frozen gold set that looks like production. No eval, no architecture — you're decorating a guess. CI on every prompt and index change.",
  },
  {
    id: "sec",
    icon: Shield,
    title: "5. Security",
    body: "Retrieved text is untrusted. Tiny tool kits, session identity, HITL for irreversible, encode output, secrets out of prompts, tenant ACL at retrieve.",
  },
  {
    id: "obs",
    icon: Eye,
    title: "6. Observability",
    body: "Traces from day one: model, prompt version, retrieve ids, tool spans. You will debug an incident, not a screenshot.",
  },
  {
    id: "serve",
    icon: Server,
    title: "7. Serve & cost",
    body: "Prefill vs decode, routing, prefix cache, queue SLOs. Size GPUs for weights plus KV. Optimize $ per successful task, not a trophy model.",
  },
] as const;

/** The production design loop, in order. */
export function SystemDesignLoop() {
  const [id, setId] = useState<(typeof stages)[number]["id"]>("job");
  const s = stages.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {stages.map((st) => {
            const active = st.id === id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setId(st.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-1.5 py-2 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <st.icon size={14} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[10px] font-semibold leading-tight">{st.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{s.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Design in this order. Model choice is step 3-ish, not step 1. Eval, security, and traces are not phase 2.
      </figcaption>
    </figure>
  );
}
