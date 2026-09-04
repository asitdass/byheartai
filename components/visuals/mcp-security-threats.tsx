"use client";

import { useState } from "react";
import { Skull, UserX, KeyRound, PackageOpen } from "lucide-react";

const threats = [
  {
    id: "poison",
    icon: Skull,
    title: "Tool poisoning",
    what: "A malicious instruction is hidden in a tool's description or schema. The model reads it; the user usually doesn't.",
    fix: "Treat tool metadata as untrusted. Show the full schema before approving a server. Isolate sensitive servers.",
  },
  {
    id: "deputy",
    icon: UserX,
    title: "Confused deputy",
    what: "A proxy with broad privileges acts for a user who shouldn't have them — or leaks an auth code to an attacker.",
    fix: "Per-client consent, exact redirect URI match, and never set the consent cookie until the user actually approved.",
  },
  {
    id: "passthrough",
    icon: KeyRound,
    title: "Token passthrough",
    what: "The MCP server forwards the client's token to an upstream API. Audience checks break, audit trails lie, stolen tokens work everywhere.",
    fix: "Never pass through tokens. The server must use its own token for upstream APIs, minted for that API.",
  },
  {
    id: "supply",
    icon: PackageOpen,
    title: "Supply-chain servers",
    what: "Anyone can publish an MCP server. A popular 'helpful' server can exfiltrate files, hit private IPs (SSRF), or over-scope tools.",
    fix: "Allow-list servers. Sandbox local processes. Least privilege on tools. Human approval for irreversible actions.",
  },
] as const;

/** Interactive MCP threat catalog. */
export function McpSecurityThreats() {
  const [id, setId] = useState<(typeof threats)[number]["id"]>("poison");
  const t = threats.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {threats.map((th) => {
            const active = th.id === id;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setId(th.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, oklch(0.6 0.18 25) 18%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "oklch(0.6 0.18 25)" : "var(--rule)",
                }}
              >
                <th.icon size={18} aria-hidden style={{ color: "oklch(0.55 0.18 25)" }} />
                <span className="mt-1 text-xs font-semibold">{th.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">What it is: </span>{t.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>How to stop it: </span>{t.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        The four MCP risks that matter most: poisoned tools, confused deputies, token passthrough, and untrusted servers.
      </figcaption>
    </figure>
  );
}
