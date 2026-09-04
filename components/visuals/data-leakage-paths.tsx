"use client";

import { useState } from "react";
import { ScrollText, KeyRound, Database, GraduationCap } from "lucide-react";

const paths = [
  {
    id: "logs",
    icon: ScrollText,
    title: "Logs & traces",
    what: "Prompts, tool args, and retrieved chunks often hold PII. Debug Slack and 30-day trace stores become the breach.",
    fix: "Redact by default. ACL the payloads. Short TTL. Never paste prod traces into another model unredacted.",
  },
  {
    id: "sys",
    icon: KeyRound,
    title: "System prompt",
    what: "Treat it as public. It can leak. Secrets and auth rules do not belong there — they belong in code that the model cannot rewrite.",
    fix: "No API keys, no 'the admin password is…', no unpublished policy the legal team couldn't print.",
  },
  {
    id: "rag",
    icon: Database,
    title: "Wrong neighbor / wrong tenant",
    what: "Retrieval returns another customer's chunk, or a doc the user must not see. The model helpfully quotes it.",
    fix: "ACL at retrieve time, not after generation. Metadata filters are a security control (see vector DBs).",
  },
  {
    id: "train",
    icon: GraduationCap,
    title: "Training & memory",
    what: "Fine-tunes and long-term memory remember secrets you should never have logged. Extraction later is not 'the model being clever.'",
    fix: "Don't train on secrets. Memory writes need provenance and user scope (memory category).",
  },
] as const;

/** Where sensitive text actually leaves the product. */
export function DataLeakagePaths() {
  const [id, setId] = useState<(typeof paths)[number]["id"]>("sys");
  const p = paths.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {paths.map((path) => {
            const active = path.id === id;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => setId(path.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <path.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{path.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">How it leaks: </span>{p.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>Control: </span>{p.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Sensitive disclosure is usually logs, a chatty system prompt, or retrieval that skipped ACLs — not a cinematic heist.
      </figcaption>
    </figure>
  );
}
