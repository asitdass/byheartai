"use client";

import { useState } from "react";
import { BookOpen, Calendar, Wrench } from "lucide-react";

const kinds = [
  {
    id: "semantic",
    icon: BookOpen,
    title: "Semantic",
    verb: "Facts that are true",
    desc: "Distilled knowledge and preferences, not tied to one moment: who Ada is, the refund cap, the team's stack.",
    store: "Vector DB, knowledge graph, or key-value facts",
    forget: "Staleness: update or supersede when the world changes",
    example: "Ada is vegetarian. Refund cap is $120.",
  },
  {
    id: "episodic",
    icon: Calendar,
    title: "Episodic",
    verb: "Things that happened",
    desc: "Timestamped events: what was said, which tool ran, which meeting. A diary, not a Wikipedia.",
    store: "Time-ordered log, often with embeddings for search",
    forget: "TTL / archive old episodes; don't treat them as eternal facts",
    example: "Thu 14:02 — Ada asked to book lunch near the office.",
  },
  {
    id: "procedural",
    icon: Wrench,
    title: "Procedural",
    verb: "How to do it",
    desc: "Skills and recipes: how this agent files a ticket, which checklist it follows, a saved prompt or playbook.",
    store: "Versioned files, skill docs, structured playbooks — not a blob of chat",
    forget: "Version and deprecate; don't silently delete a skill people rely on",
    example: "To book lunch: check diet memory → search → confirm time with Ada.",
  },
] as const;

/** Interactive semantic / episodic / procedural taxonomy. */
export function MemoryTypes() {
  const [id, setId] = useState<(typeof kinds)[number]["id"]>("semantic");
  const k = kinds.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-4 grid grid-cols-3 gap-2">
          {kinds.map((kind) => {
            const active = kind.id === id;
            return (
              <button
                key={kind.id}
                type="button"
                onClick={() => setId(kind.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "var(--accent)" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <kind.icon size={18} aria-hidden style={{ color: active ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 text-sm font-bold" style={{ color: active ? "var(--accent-ink)" : "var(--ink)" }}>{kind.title}</span>
                <span className="text-[11px]" style={{ color: active ? "var(--accent-ink)" : "var(--ink-faint)" }}>{kind.verb}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p>{k.desc}</p>
          <p className="font-mono text-xs rounded-[--radius-sm] p-2" style={{ background: "var(--paper)" }}>{k.example}</p>
          <p className="text-xs" style={{ color: "var(--ink-muted)" }}><strong>Store:</strong> {k.store}</p>
          <p className="text-xs" style={{ color: "var(--ink-muted)" }}><strong>Forget:</strong> {k.forget}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Semantic = facts, episodic = events, procedural = skills. Mixing them is how memory stores turn into junk drawers.
      </figcaption>
    </figure>
  );
}
