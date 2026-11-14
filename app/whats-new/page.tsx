import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, getRadarIssues } from "@/lib/guides";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What's new in AI: the weekly radar",
  description:
    "A short weekly briefing on what changed in AI: new open-source tools, protocol updates, and the concepts worth learning next. Every item links to its source.",
  path: "/whats-new",
  keywords: ["AI news weekly", "what's new in AI", "AI trends", "new AI tools", "AI agents news"],
});

export default function WhatsNewPage() {
  const issues = getRadarIssues();

  return (
    <div className="mx-auto max-w-[52rem] px-4">
      <JsonLd data={breadcrumbJsonLd([{ name: "What's new", path: "/whats-new" }])} />
      <header className="aurora py-14 sm:py-20">
        <p className="eyebrow">Weekly radar</p>
        <h1
          className="mt-3 font-[family-name:var(--font-display)] leading-[1.08]"
          style={{ fontSize: "var(--fs-h1)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          What changed in AI <span className="grad-text">this week.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
          One briefing a week. What shipped, what is trending in open source, and which lesson or guide to
          read because of it. Sources on every item.
        </p>
      </header>

      <ol className="space-y-4">
        {issues.map((issue) => (
          <li key={issue.slug}>
            <Link href={`/whats-new/${issue.slug}`} className="card block p-6">
              <time dateTime={issue.date} className="eyebrow">
                Week of {formatDate(issue.date)}
              </time>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug">{issue.title}</h2>
              <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
                {issue.summary}
              </p>
              {issue.highlights.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {issue.highlights.map((h) => (
                    <li key={h} className="chip">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                Read the briefing <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
