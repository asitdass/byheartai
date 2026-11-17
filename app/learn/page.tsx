import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getConceptsByCategory } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free AI Curriculum: Foundations to AI Engineering",
  description:
    "Learn AI through free lessons, interactive visuals, and quizzes on machine learning, LLMs, RAG, AI agents, MCP, and AI system design.",
  path: "/learn",
  keywords: ["AI curriculum", "learn RAG", "learn agents", "learn MCP", "AI engineering course"],
});

export default function LearnHub() {
  const tracks = categories.map((c) => ({
    name: c.title,
    path: `/learn/${c.id}`,
    description: c.description,
  }));

  return (
    <div className="mx-auto max-w-[60rem] px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Learn", path: "/learn" }])} />
      <JsonLd
        data={itemListJsonLd(
          "ByHeart AI curriculum",
          "Prerequisite-driven tracks covering foundations through production AI system design.",
          tracks,
        )}
      />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">Learn AI for free</h1>
      <p className="mt-3 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
        Start with AI foundations or pick a topic like RAG, agents, or MCP. Each lesson points you to
        the concepts you need first and what to read next.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {categories.map((c) => {
          const count = getConceptsByCategory(c.id).filter((x) => x.status === "published").length;
          return (
            <Link
              key={c.id}
              href={`/learn/${c.id}`}
              className="rounded-(--radius) border p-5 no-underline transition-colors hover:border-(--accent)"
              style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-lg font-semibold font-[family-name:var(--font-display)]" style={{ color: "var(--ink)" }}>
                  {c.title}
                </span>
                <span className="text-xs" style={{ color: "var(--ink-faint)" }}>
                  {count > 0 ? `${count} lesson${count > 1 ? "s" : ""}` : "soon"}
                </span>
              </div>
              <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
                {c.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
