import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedGuides } from "@/lib/guides";
import { GuideCard } from "@/components/home/guide-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI setup guides: run, automate, and build with open-source AI",
  description:
    "Step-by-step guides to set up open-source AI tools: local models with Ollama, a private ChatGPT, n8n automations, coding agents, MCP servers, browser agents, and agent memory.",
  path: "/guides",
  keywords: ["AI setup guide", "how to install Ollama", "self-host AI", "n8n AI agent", "MCP server setup", "AI automation"],
});

export default function GuidesHub() {
  const guides = getPublishedGuides();

  return (
    <div className="mx-auto max-w-[76rem] px-4">
      <JsonLd data={breadcrumbJsonLd([{ name: "Guides", path: "/guides" }])} />
      <JsonLd
        data={itemListJsonLd(
          "AI setup guides",
          "Hands-on guides to install and use open-source AI tools.",
          guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}`, description: g.summary })),
        )}
      />
      <header className="aurora py-14 sm:py-20">
        <p className="eyebrow">Hands-on guides</p>
        <h1
          className="mt-3 max-w-3xl font-[family-name:var(--font-display)] leading-[1.08]"
          style={{ fontSize: "var(--fs-h1)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Stop reading about AI. <span className="grad-text">Set it up.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
          Each guide takes one open-source tool from zero to working on your machine, with commands checked
          against the project&apos;s own docs. Copy, paste, automate.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>

      <p className="mt-10 text-sm" style={{ color: "var(--ink-muted)" }}>
        Looking for a specific tool? Browse the <Link href="/tools">open-source AI tools directory</Link>.
      </p>
    </div>
  );
}
