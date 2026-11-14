import Link from "next/link";
import { Heart, Rss } from "lucide-react";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "All tracks" },
      { href: "/roadmaps", label: "Roadmaps" },
      { href: "/glossary", label: "Glossary" },
      { href: "/search", label: "Search" },
    ],
  },
  {
    title: "Build",
    links: [
      { href: "/guides", label: "Setup guides" },
      { href: "/tools", label: "Open-source tools" },
      { href: "/learn/mcp", label: "MCP" },
      { href: "/learn/agents", label: "Agents" },
    ],
  },
  {
    title: "Stay current",
    links: [
      { href: "/whats-new", label: "What's new in AI" },
      { href: "/feed.xml", label: "RSS feed" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--rule)", background: "var(--surface)" }}>
      <div className="mx-auto grid max-w-[76rem] grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold" style={{ color: "var(--ink)" }}>
            <Heart size={18} fill="var(--heart)" stroke="var(--heart)" aria-hidden />
            ByHeart<span className="grad-text">AI</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm" style={{ color: "var(--ink-muted)" }}>
            Learn the ideas. Set up the tools. Keep up every week. Free, and written to be remembered.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--ink-muted)" }} className="inline-flex items-center gap-1.5">
                    {l.href === "/feed.xml" && <Rss size={13} aria-hidden />}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
