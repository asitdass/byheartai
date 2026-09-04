import { X, Check } from "lucide-react";

const apps = ["Cursor", "Claude", "ChatGPT", "Your agent"];
const systems = ["GitHub", "Slack", "Postgres", "Drive"];

/** N×M custom integrations vs one open protocol. */
export function McpNByM() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <X size={15} aria-hidden style={{ color: "oklch(0.55 0.18 25)" }} /> Without MCP
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            Every app needs a custom connector to every system — 4 apps × 4 systems = 16 one-off integrations.
          </p>
          <div
            className="overflow-hidden rounded-[--radius-sm] border"
            role="img"
            aria-label="A grid of custom one-off integrations: each AI app is wired separately to GitHub, Slack, Postgres, and Drive."
          >
            <table className="w-full text-center text-[11px]">
              <thead>
                <tr style={{ background: "var(--paper)" }}>
                  <th className="p-1.5 font-normal" style={{ color: "var(--ink-faint)" }} />
                  {systems.map((s) => (
                    <th key={s} className="p-1.5 font-semibold">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {apps.map((a) => (
                  <tr key={a}>
                    <th className="p-1.5 text-left font-semibold">{a}</th>
                    {systems.map((s) => (
                      <td key={s} className="p-1.5" style={{ color: "oklch(0.55 0.18 25)" }}>×</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold">
            <Check size={15} aria-hidden style={{ color: "oklch(0.55 0.15 150)" }} /> With MCP
          </div>
          <p className="mb-3 text-xs" style={{ color: "var(--ink-muted)" }}>
            Each system publishes one MCP server. Any MCP-speaking host can use it — write once, plug in everywhere.
          </p>
          <div className="space-y-2" role="img" aria-label="Each system has one MCP server. All four AI apps plug into those same servers.">
            {systems.map((s) => (
              <div key={s} className="flex items-center gap-2 rounded-[--radius-sm] border px-3 py-2 text-xs" style={{ background: "var(--paper)" }}>
                <span className="font-semibold">{s}</span>
                <span className="font-mono" style={{ color: "var(--accent)" }}>MCP server</span>
                <span className="ml-auto" style={{ color: "var(--ink-faint)" }}>← any host</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        MCP exists so you don&apos;t rebuild the same GitHub/Slack/database connector for every AI app.
      </figcaption>
    </figure>
  );
}
