import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, Star } from "lucide-react";
import { formatStars, toolCategories, tools } from "@/data/tools";
import { getGuide } from "@/lib/guides";
import { CopyCommand } from "@/components/reading/copy-command";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Open-source AI tools directory",
  description:
    "The open-source AI tools people actually use: local models, personal assistants, coding agents, automation, MCP servers, RAG, memory, and evaluation. With install commands and setup guides.",
  path: "/tools",
  keywords: ["open source AI tools", "self-hosted AI", "AI agent tools", "best AI GitHub repos", "local LLM tools", "MCP servers"],
});

export default function ToolsPage() {
  const sorted = [...tools].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
  const refreshed = tools
    .map((t) => t.lastPush ?? "")
    .sort()
    .pop();

  return (
    <div className="mx-auto max-w-[76rem] px-4">
      <JsonLd data={breadcrumbJsonLd([{ name: "Tools", path: "/tools" }])} />
      <JsonLd
        data={itemListJsonLd(
          "Open-source AI tools",
          "Open-source projects for running, building, and automating with AI.",
          sorted.map((t) => ({ name: t.name, path: `/tools#${t.id}`, description: t.tagline })),
        )}
      />
      <header className="aurora py-14 sm:py-20">
        <p className="eyebrow">Tools directory</p>
        <h1
          className="mt-3 max-w-3xl font-[family-name:var(--font-display)] leading-[1.08]"
          style={{ fontSize: "var(--fs-h1)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          {tools.length} open-source AI tools, <span className="grad-text">sorted by what you want done.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
          Every entry links to its repository. Star counts and activity come straight from GitHub and are
          refreshed weekly{refreshed ? ` (latest activity seen: ${refreshed})` : ""}.
        </p>
        <nav aria-label="Tool categories" className="mt-6 flex flex-wrap gap-2">
          {toolCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="chip">
              {c.title}
            </a>
          ))}
        </nav>
      </header>

      {toolCategories.map((cat) => {
        const items = sorted.filter((t) => t.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-20 py-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">{cat.title}</h2>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
              {cat.description}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((t) => {
                const guide = t.guide ? getGuide(t.guide) : undefined;
                return (
                  <article key={t.id} id={t.id} className="card flex scroll-mt-20 flex-col p-5">
                    <div className="flex items-start gap-2">
                      <h3 className="font-semibold" style={{ color: "var(--ink)" }}>
                        {t.name}
                      </h3>
                      {t.stars ? (
                        <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs" style={{ color: "var(--ink-faint)" }}>
                          <Star size={12} aria-hidden /> {formatStars(t.stars)}
                          <span className="sr-only"> GitHub stars</span>
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
                      {t.tagline}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm" style={{ color: "var(--ink)" }}>
                      {t.useFor.map((u) => (
                        <li key={u} className="flex gap-2">
                          <span aria-hidden className="grad-text font-bold">
                            +
                          </span>
                          {u}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto space-y-3 pt-4">
                      {t.install && <CopyCommand command={t.install} />}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                        <a
                          href={`https://github.com/${t.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <Github size={14} aria-hidden /> {t.repo}
                        </a>
                        {guide && (
                          <Link href={`/guides/${guide.slug}`} className="inline-flex items-center gap-1 font-semibold">
                            Setup guide <ArrowRight size={14} aria-hidden />
                          </Link>
                        )}
                      </div>
                      {t.license && (
                        <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
                          License: {t.license}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
