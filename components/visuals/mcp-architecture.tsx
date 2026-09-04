"use client";

import { useState } from "react";
import { Terminal, Globe } from "lucide-react";

const transports = [
  {
    id: "stdio",
    icon: Terminal,
    title: "stdio (local)",
    when: "Same machine as the host",
    how: "The host starts the server as a subprocess and talks over stdin/stdout. Fast, no network.",
    auth: "Credentials from the environment — not OAuth.",
    example: "A filesystem or git server running on your laptop.",
  },
  {
    id: "http",
    icon: Globe,
    title: "Streamable HTTP (remote)",
    when: "Server lives on the internet",
    how: "Each call is a self-describing HTTP request. Any instance behind a load balancer can handle it.",
    auth: "OAuth 2.1 with tokens bound to that server.",
    example: "Linear, Sentry, or your company's Postgres MCP on the public web.",
  },
] as const;

/** Architecture: host with clients, plus the two transports. */
export function McpArchitecture() {
  const [picked, setPicked] = useState<(typeof transports)[number]["id"]>("stdio");
  const t = transports.find((x) => x.id === picked)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div
          className="mb-4 rounded-[--radius-sm] border p-4"
          style={{ background: "var(--paper)" }}
          role="img"
          aria-label="A host application contains several MCP clients. Each client connects to one MCP server — a local filesystem server over stdio, a GitHub server, and a remote Linear server over HTTP."
        >
          <div className="text-center text-sm font-bold">Host (Cursor / Claude / your agent)</div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Client A", "Client B", "Client C"].map((c) => (
              <div key={c} className="rounded-[--radius-sm] border px-2 py-1.5 text-center text-xs font-semibold" style={{ background: "var(--surface)", borderColor: "var(--accent)" }}>
                {c}
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[11px]" style={{ color: "var(--ink-faint)" }} aria-hidden>
            <span>↓ stdio</span>
            <span>↓ stdio</span>
            <span>↓ HTTP</span>
          </div>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {["Filesystem server", "Git server", "Linear server"].map((s) => (
              <div key={s} className="rounded-[--radius-sm] border px-2 py-1.5 text-center text-xs" style={{ background: "var(--surface)" }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>Pick a transport:</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {transports.map((tr) => (
            <button
              key={tr.id}
              type="button"
              onClick={() => setPicked(tr.id)}
              aria-pressed={picked === tr.id}
              className="flex items-center gap-1.5 rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: picked === tr.id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: picked === tr.id ? "var(--accent)" : "var(--rule)",
              }}
            >
              <tr.icon size={14} aria-hidden /> {tr.title}
            </button>
          ))}
        </div>

        <dl className="space-y-1.5 text-sm" aria-live="polite">
          <div><dt className="inline font-semibold">When: </dt><dd className="inline">{t.when}</dd></div>
          <div><dt className="inline font-semibold">How: </dt><dd className="inline">{t.how}</dd></div>
          <div><dt className="inline font-semibold">Auth: </dt><dd className="inline">{t.auth}</dd></div>
          <div><dt className="inline font-semibold">Example: </dt><dd className="inline">{t.example}</dd></div>
        </dl>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Local servers use stdio; remote servers use Streamable HTTP. Since 2026, HTTP MCP is stateless — no session handshake.
      </figcaption>
    </figure>
  );
}
