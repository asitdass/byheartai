"use client";

import { useState } from "react";
import { Cloud, Calculator, Search, Calendar } from "lucide-react";

/*
 * Tool selection: the agent reads each tool's description and picks the one that
 * matches the query. Click a query to see which tool the agent would choose.
 */
const tools = [
  { id: "weather", name: "get_weather", desc: "Get current weather for a city", icon: Cloud },
  { id: "calc", name: "calculator", desc: "Do exact arithmetic", icon: Calculator },
  { id: "search", name: "web_search", desc: "Look up current facts on the web", icon: Search },
  { id: "calendar", name: "calendar", desc: "Read the user's schedule", icon: Calendar },
];

const queries = [
  { q: "What's 15% of 240?", tool: "calc", why: "It needs exact arithmetic → calculator." },
  { q: "Do I have meetings tomorrow?", tool: "calendar", why: "It's about the user's schedule → calendar." },
  { q: "What's the weather in Tokyo?", tool: "weather", why: "It asks for current weather → get_weather." },
  { q: "Who won the 2026 Nobel Prize in Physics?", tool: "search", why: "A current fact the model may not know → web_search." },
];

export function ToolSelection() {
  const [selected, setSelected] = useState(0);
  const active = queries[selected];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>Pick a question:</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {queries.map((qq, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={i === selected}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: i === selected ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: i === selected ? "var(--accent)" : "var(--rule)",
                color: "var(--ink)",
              }}
            >
              {qq.q}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tools.map((t) => {
            const chosen = t.id === active.tool;
            return (
              <div
                key={t.id}
                className="flex flex-col items-center rounded-[--radius-sm] border p-3 text-center transition-all"
                style={{
                  background: chosen ? "var(--accent)" : "var(--paper)",
                  borderColor: chosen ? "var(--accent)" : "var(--rule)",
                }}
              >
                <t.icon size={18} aria-hidden style={{ color: chosen ? "var(--accent-ink)" : "var(--accent)" }} />
                <span className="mt-1 font-mono text-xs font-semibold" style={{ color: chosen ? "var(--accent-ink)" : "var(--ink)" }}>{t.name}</span>
                <span className="mt-0.5 text-[11px]" style={{ color: chosen ? "var(--accent-ink)" : "var(--ink-faint)" }}>{t.desc}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          <strong style={{ color: "var(--accent)" }}>Chosen:</strong> {active.why}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        The agent matches the query to a tool using each tool's name and description — so clear descriptions matter.
      </figcaption>
    </figure>
  );
}
