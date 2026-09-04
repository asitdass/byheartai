"use client";

import { useState } from "react";
import { HelpCircle, Search, ListOrdered, FileText } from "lucide-react";

const stages = [
  {
    id: "q",
    icon: HelpCircle,
    title: "Query",
    body: "Rewrite, spell, maybe split. Don't skip lexical — names and SKUs die in pure vectors.",
  },
  {
    id: "r",
    icon: Search,
    title: "Retrieve",
    body: "Hybrid (sparse + dense) over an index you control. ACL if the corpus isn't public.",
  },
  {
    id: "rr",
    icon: ListOrdered,
    title: "Rerank",
    body: "A cross-encoder or listwise reranker on the top N. This is where quality usually moves, not a bigger generator.",
  },
  {
    id: "a",
    icon: FileText,
    title: "Present",
    body: "Ranked hits + optional grounded snippet. Generating a paragraph without retrieval metrics is a chatbot in a trench coat.",
  },
] as const;

/** Search pipeline vs 'just generate.' */
export function AiSearchDesign() {
  const [id, setId] = useState<(typeof stages)[number]["id"]>("rr");
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
        AI search is query → hybrid retrieve → rerank → grounded present. Eval nDCG and faithfulness separately.
      </figcaption>
    </figure>
  );
}
