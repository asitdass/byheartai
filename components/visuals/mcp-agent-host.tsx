import { AppWindow, Bot, Puzzle } from "lucide-react";

const hosts = [
  {
    icon: AppWindow,
    title: "IDEs",
    examples: "Cursor, VS Code, JetBrains",
    note: "The editor is the host. MCP servers become project tools: git, docs, tickets, browsers.",
  },
  {
    icon: Bot,
    title: "Agents",
    examples: "Claude, ChatGPT, custom loops",
    note: "The agent loop calls MCP tools the same way it calls any function — MCP is the catalog, not the loop.",
  },
  {
    icon: Puzzle,
    title: "Product surfaces",
    examples: "Slack, Figma, internal apps",
    note: "A product can be a host (users chat inside it) or a server (other hosts call into it).",
  },
];

/** Where MCP shows up: IDEs, agents, and product surfaces. */
export function McpAgentHost() {
  return (
    <figure className="my-8">
      <div
        className="grid gap-3 md:grid-cols-3"
        role="img"
        aria-label="MCP shows up in three places: IDEs like Cursor, agent apps like Claude, and product surfaces like Slack or Figma. Each can be a host that consumes servers, and products can also publish a server for others to call."
      >
        {hosts.map((h) => (
          <div key={h.title} className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
            <div className="mb-2 flex items-center gap-2">
              <h.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
              <span className="text-sm font-bold">{h.title}</span>
            </div>
            <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>{h.examples}</p>
            <p className="mt-2 text-xs" style={{ color: "var(--ink-muted)" }}>{h.note}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        MCP is the plug. The host (IDE, agent, or product) decides when to call; the server just exposes capabilities.
      </figcaption>
    </figure>
  );
}
