import { Smartphone, KeyRound, ShieldCheck, Server } from "lucide-react";

const steps = [
  { icon: Smartphone, label: "1. Host asks to connect", note: "User picks a remote MCP server" },
  { icon: KeyRound, label: "2. Sign in (OAuth 2.1)", note: "PKCE + audience bound to that server" },
  { icon: ShieldCheck, label: "3. Token issued for this server", note: "aud = this server's URI — not reusable elsewhere" },
  { icon: Server, label: "4. Server checks the token", note: "Reject if issuer, audience, or expiry is wrong" },
];

/** OAuth 2.1 audience-bound token flow for remote MCP. */
export function McpAuthFlow() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="Remote MCP authorization: the host asks to connect, the user signs in with OAuth 2.1, a token is issued bound to that specific server, and the server rejects any token that was not minted for it."
      >
        <ol className="grid gap-2 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.label} className="flex items-start gap-3 rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <s.icon size={18} aria-hidden style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <div className="text-sm font-semibold">{s.label}</div>
                <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          A token for Linear&apos;s MCP must not work against your company&apos;s MCP — audience checks stop that.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Remote MCP uses OAuth 2.1. Tokens are bound to one server; local stdio servers use env credentials instead.
      </figcaption>
    </figure>
  );
}
