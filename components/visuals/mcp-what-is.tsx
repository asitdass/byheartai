import { Monitor, Cable, Server } from "lucide-react";

const roles = [
  {
    icon: Monitor,
    title: "Host",
    desc: "The AI app the user talks to — Cursor, Claude, ChatGPT, or your own agent.",
  },
  {
    icon: Cable,
    title: "MCP client",
    desc: "Lives inside the host. Speaks the protocol to one server. A host can run many clients.",
  },
  {
    icon: Server,
    title: "MCP server",
    desc: "A small program that exposes tools, files, or prompts for one system (GitHub, Slack, your DB).",
  },
];

/** Host → client → server: the three roles that make MCP work. */
export function McpWhatIs() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="MCP has three roles. The host is the AI app the user talks to. Inside it, an MCP client speaks the protocol to one MCP server. The server exposes tools, files, or prompts for a single system."
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          {roles.map((r, i) => (
            <div key={r.title} className="flex flex-1 items-stretch gap-2">
              <div className="flex flex-1 flex-col items-center rounded-[--radius-sm] border px-3 py-4 text-center" style={{ background: "var(--paper)" }}>
                <r.icon size={20} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-sm font-bold">{r.title}</span>
                <span className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>{r.desc}</span>
              </div>
              {i < roles.length - 1 && (
                <span className="hidden self-center text-sm sm:block" aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          One host · many clients · many servers — like a laptop with several USB cables plugged into different devices.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        MCP is a shared language: the host talks through clients to servers that wrap real tools and data.
      </figcaption>
    </figure>
  );
}
