import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedGuides } from "@/lib/guides";
import { GuideCard } from "@/components/home/guide-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Open-Source AI Setup Guides",
  description:
    "Follow step-by-step AI setup guides for Ollama, Open WebUI, n8n and MCP servers, with commands and troubleshooting for each setup.",
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
          Open-source AI setup guides
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
          Install open-source AI tools and get a working setup with commands checked against each
          project&apos;s own docs. New to local models? Follow the <Link href="/local-ai">guide to running AI locally</Link>.
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
