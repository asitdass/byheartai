import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { learningPaths } from "@/data/paths";
import { getConceptById, conceptHref } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, courseListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI learning paths and roadmaps",
  description:
    "Guided tracks: AI Beginner, LLM Developer, AI Engineer, AI Systems Engineer, and AI Agent Engineer. One next lesson at every step.",
  path: "/roadmaps",
  keywords: ["AI roadmap", "AI engineer path", "learn agents", "LLM developer"],
});

const levelLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

export default function RoadmapsPage() {
  return (
    <div className="mx-auto max-w-[52rem] px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Roadmaps", path: "/roadmaps" }])} />
      <JsonLd data={courseListJsonLd(learningPaths)} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">Learning paths</h1>
      <p className="mt-3 text-lg" style={{ color: "var(--ink-muted)" }}>
        Follow a guided track from start to finish. There&apos;s always exactly one next step.
      </p>

      <div className="mt-10 space-y-12">
        {learningPaths.map((path) => (
          <section key={path.id} id={path.id} className="scroll-mt-20">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">{path.title}</h2>
              <span className="shrink-0 text-xs uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                {levelLabel[path.level]} · ~{path.estimatedHours}h
              </span>
            </div>
            <p className="mt-1" style={{ color: "var(--ink-muted)" }}>
              {path.description}
            </p>

            <ol className="mt-4 space-y-1">
              {path.conceptIds.map((id, i) => {
                const c = getConceptById(id);
                const available = Boolean(c && c.status === "published");
                return (
                  <li key={id}>
                    {available && c ? (
                      <Link
                        href={conceptHref(c)}
                        className="flex items-center gap-3 rounded-[--radius-sm] px-3 py-2 no-underline hover:bg-[--surface]"
                      >
                        <CheckCircle2 size={16} style={{ color: "var(--accent)" }} aria-hidden />
                        <span style={{ color: "var(--ink)" }}>
                          {i + 1}. {c.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 px-3 py-2" style={{ color: "var(--ink-faint)" }}>
                        <Circle size={16} aria-hidden />
                        <span>
                          {i + 1}. {c?.title ?? id.replace(/-/g, " ")}{" "}
                          <span className="text-xs">(coming soon)</span>
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
