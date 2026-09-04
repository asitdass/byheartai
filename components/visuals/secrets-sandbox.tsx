"use client";

import { useState } from "react";
import { KeyRound, Box, WifiOff, Gauge } from "lucide-react";

const controls = [
  {
    id: "secrets",
    icon: KeyRound,
    title: "Secrets stay out of prompts",
    body: "Vault / env / cloud IAM. The model never sees the key, so it cannot print it, log it, or follow an injected request to mail it.",
  },
  {
    id: "sandbox",
    icon: Box,
    title: "Run untrusted work in a box",
    body: "Generated code, MCP stdio, browsers: filesystem, network, and time boxed. Local is not safer — it often has *more* disk.",
  },
  {
    id: "net",
    icon: WifiOff,
    title: "Egress allow-list",
    body: "Tools that fetch URLs cannot hit link-local, metadata IPs, or your intranet unless you explicitly meant to. Stops SSRF via generated links.",
  },
  {
    id: "bound",
    icon: Gauge,
    title: "Bounded consumption",
    body: "Max loops, max tokens, max $ per turn, timeouts. Unbounded agent loops are a denial-of-wallet (OWASP LLM10), not a flex.",
  },
] as const;

/** Secrets, sandbox, network, and spend caps. */
export function SecretsSandbox() {
  const [id, setId] = useState<(typeof controls)[number]["id"]>("secrets");
  const c = controls.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {controls.map((ctrl) => {
            const active = ctrl.id === id;
            return (
              <button
                key={ctrl.id}
                type="button"
                onClick={() => setId(ctrl.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <ctrl.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{ctrl.title}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{c.body}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Keys in a vault, work in a jail, network on an allow-list, loops capped. The model proposes; the runtime enforces.
      </figcaption>
    </figure>
  );
}
