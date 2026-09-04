"use client";

import { useState } from "react";
import { Building2, Filter, FileSearch, ScrollText } from "lucide-react";

const walls = [
  {
    id: "id",
    icon: Building2,
    title: "Identity",
    body: "SSO. Every retrieve and tool call is this employee, this tenant — never a shared 'bot' god token.",
  },
  {
    id: "acl",
    icon: Filter,
    title: "ACL at retrieve",
    body: "Metadata filters (or separate indexes) run before the model sees a chunk. Prompt stickers are not authorization.",
  },
  {
    id: "cite",
    icon: FileSearch,
    title: "Cite & audit",
    body: "Answers open the source the user is allowed to see. Traces keep chunk ids. Export/download is HITL.",
  },
  {
    id: "ingest",
    icon: ScrollText,
    title: "Write path",
    body: "Connectors with provenance. Open wiki ≠ handbook. Poisoned or stale pages fail world-truth even when faithfulness is high.",
  },
] as const;

/** Enterprise assistant = RAG plus a permission wall. */
export function EnterpriseAclWall() {
  const [id, setId] = useState<(typeof walls)[number]["id"]>("acl");
  const w = walls.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {walls.map((wall) => {
            const active = wall.id === id;
            return (
              <button
                key={wall.id}
                type="button"
                onClick={() => setId(wall.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <wall.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold">{wall.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{w.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Enterprise search without retrieve-time ACL is a leak with a nice UI. Identity, filter, cite, control writes.
      </figcaption>
    </figure>
  );
}
