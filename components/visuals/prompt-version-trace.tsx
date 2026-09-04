"use client";

import { useState } from "react";

const versions = [
  {
    id: "v12",
    label: "prompt v12 (live)",
    gold: "2 / 3 pass",
    prod: "trace 7f3a tagged prompt_ver=12 — invented §4.2",
    note: "Prod and eval disagree with the hallway demo. Without a version on the span you cannot tell which recipe served that user.",
  },
  {
    id: "v13",
    label: "prompt v13 (candidate)",
    gold: "3 / 3 pass",
    prod: "Replay 7f3a offline with v13 — cites chunk #12, no §4.2",
    note: "Same trace shape as production. CI runs v13 on the gold set; replay catches the real incident. Then you flip the flag.",
  },
  {
    id: "orphan",
    label: "Hot-edit, no version",
    gold: "dashboard mystery",
    prod: "Three engineers edited the system prompt in the host. Traces say model=X, prompt=?",
    note: "You cannot roll back, cannot eval, cannot explain the incident. Prompts are code: id + version (or content hash) on every span.",
  },
] as const;

/** Prompt versions tagged on traces; eval and prod share the same shape. */
export function PromptVersionTrace() {
  const [id, setId] = useState<(typeof versions)[number]["id"]>("v13");
  const v = versions.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {versions.map((ver) => (
            <button
              key={ver.id}
              type="button"
              onClick={() => setId(ver.id)}
              aria-pressed={ver.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: ver.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: ver.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {ver.label}
            </button>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Eval traces (gold set)
            </div>
            <p className="text-sm">{v.gold}</p>
          </div>
          <div className="rounded-[--radius-sm] p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Prod traces (same shape)
            </div>
            <p className="text-sm">{v.prod}</p>
          </div>
        </div>
        <p className="mt-3 text-sm">{v.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Tag every span with prompt version, model, retriever. Eval traces and prod traces should look the same so you can replay.
      </figcaption>
    </figure>
  );
}
