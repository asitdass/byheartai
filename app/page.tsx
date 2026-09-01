import Link from "next/link";
import { ArrowRight, Heart, Search } from "lucide-react";
import { categories } from "@/data/categories";
import { learningPaths } from "@/data/paths";
import { getPublishedConcepts, conceptHref } from "@/lib/content";

const exampleSearches = [
  "What is RAG?",
  "What is an embedding?",
  "How does attention work?",
  "What is MCP?",
];

export default function HomePage() {
  const concepts = getPublishedConcepts();
  const featured = categories.filter((c) =>
    ["foundations", "llms", "embeddings", "vector-databases", "rag", "agents", "mcp", "ai-system-design"].includes(c.id)
  );

  return (
    <div className="mx-auto max-w-[70rem] px-4">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <h1
          className="mx-auto max-w-3xl font-[family-name:var(--font-display)] leading-[1.05]"
          style={{ fontSize: "var(--fs-hero)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Learn AI. <span style={{ color: "var(--accent)" }}>Know it by heart.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--ink-muted)" }}>
          Understand modern AI concepts through simple explanations, interactive visuals, real examples, and
          hands-on learning — in one calm, reading-first place.
        </p>

        {/* Search (placeholder for Pagefind command palette) */}
        <div className="mx-auto mt-8 max-w-xl">
          <Link
            href="/learn"
            className="flex items-center gap-3 rounded-full border px-5 py-3 text-left no-underline"
            style={{ background: "var(--surface)", borderColor: "var(--rule)", color: "var(--ink-faint)" }}
          >
            <Search size={18} aria-hidden />
            What do you want to learn?
          </Link>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: "var(--ink-faint)" }}>
            {exampleSearches.map((q) => (
              <span key={q} className="rounded-full border px-3 py-1" style={{ borderColor: "var(--rule)" }}>
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Explore AI */}
      <section className="py-8">
        <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold">Explore AI</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c) => (
            <Link
              key={c.id}
              href={`/learn/${c.id}`}
              className="rounded-[--radius] border p-4 no-underline transition-colors hover:border-[--accent]"
              style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
            >
              <span className="block font-semibold" style={{ color: "var(--ink)" }}>
                {c.title}
              </span>
              <span className="mt-1 block text-sm" style={{ color: "var(--ink-muted)" }}>
                {c.description}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/learn" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
          Browse the full curriculum <ArrowRight size={15} aria-hidden />
        </Link>
      </section>

      {/* Choose your path */}
      <section className="py-8">
        <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold">Choose your path</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {learningPaths.map((p) => (
            <Link
              key={p.id}
              href={`/roadmaps#${p.id}`}
              className="rounded-[--radius] border p-5 no-underline transition-colors hover:border-[--accent]"
              style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
            >
              <span className="block text-lg font-semibold font-[family-name:var(--font-display)]" style={{ color: "var(--ink)" }}>
                {p.title}
              </span>
              <span className="mt-1 block text-sm" style={{ color: "var(--ink-muted)" }}>
                {p.description}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                {p.conceptIds.length} lessons · ~{p.estimatedHours}h
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular concepts */}
      {concepts.length > 0 && (
        <section className="py-8">
          <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold">Start reading</h2>
          <div className="flex flex-wrap gap-2">
            {concepts.map((c) => (
              <Link
                key={c.id}
                href={conceptHref(c)}
                className="rounded-full border px-4 py-2 text-sm no-underline transition-colors hover:border-[--accent]"
                style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Know it by heart */}
      <section className="my-12 rounded-[--radius] border p-8 text-center" style={{ background: `color-mix(in oklab, var(--heart) 6%, var(--surface))`, borderColor: `color-mix(in oklab, var(--heart) 25%, var(--rule))` }}>
        <Heart size={28} fill="var(--heart)" stroke="var(--heart)" className="mx-auto" aria-hidden />
        <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-xl">
          Every lesson ends with one essential idea to remember — so you don&apos;t just read it, you know it by heart.
        </p>
      </section>
    </div>
  );
}
