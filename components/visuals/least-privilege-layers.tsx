"use client";

import { useState } from "react";
import { User, Wrench, FileJson, UserCheck, Box } from "lucide-react";

const layers = [
  {
    id: "id",
    icon: User,
    title: "Caller identity",
    body: "Act as this user, not as the model. Tokens audience-bound to *your* API. No 'the LLM is admin.'",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tiny tool kit",
    body: "This route gets search, not shell. Catalogs are allow-listed. MCP servers isolated (MCP security lesson).",
  },
  {
    id: "schema",
    icon: FileJson,
    title: "Args in schema",
    body: "Enums, max lengths, no free-form command strings. Invalid args never reach the API.",
  },
  {
    id: "hitl",
    icon: UserCheck,
    title: "Human gate",
    body: "Irreversible actions show the exact args. The model cannot click Approve.",
  },
  {
    id: "box",
    icon: Box,
    title: "Sandbox",
    body: "If anything executes, it runs jailed: no secrets file, no egress except allow-listed hosts.",
  },
] as const;

/** Defense in depth around agent permissions. */
export function LeastPrivilegeLayers() {
  const [id, setId] = useState<(typeof layers)[number]["id"]>("tools");
  const L = layers.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {layers.map((layer) => {
            const active = layer.id === id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setId(layer.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <layer.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{layer.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{L.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Least privilege is a stack: identity → tools → schema → human → sandbox. Skip a layer and injection walks through.
      </figcaption>
    </figure>
  );
}
