import type { Metadata } from "next";
import Link from "next/link";
import { SearchForm } from "@/components/nav/search-form";
import { conceptHref, getPublishedConcepts } from "@/lib/content";
import { getCategory } from "@/data/categories";
import { pageMetadata } from "@/lib/seo";
import { searchConcepts } from "@/lib/search";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  if (query) {
    return pageMetadata({
      title: `Search results for “${query.slice(0, 80)}”`,
      description: `Lessons matching “${query.slice(0, 120)}” in the ByHeart AI curriculum.`,
      path: "/search",
      noIndex: true,
    });
  }
  return pageMetadata({
    title: "Search the AI curriculum",
    description: "Find ByHeart AI lessons by name, topic, or keyword — RAG, agents, MCP, transformers, evaluation, and more.",
    path: "/search",
    keywords: ["search AI lessons", "AI glossary search", "what is RAG"],
  });
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = query.length >= 2 ? searchConcepts(query) : [];
  const total = getPublishedConcepts().length;

  return (
    <div className="mx-auto max-w-[46rem] px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">Search</h1>
      <p className="mt-3 text-lg" style={{ color: "var(--ink-muted)" }}>
        {total} published lessons. Search by concept, synonym, or category.
      </p>
      <SearchForm defaultValue={query} size="page" />

      {query.length > 0 && query.length < 2 && (
        <p className="mt-8" style={{ color: "var(--ink-faint)" }}>
          Type at least two characters.
        </p>
      )}

      {query.length >= 2 && (
        <section className="mt-8" aria-live="polite">
          <h2 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
            {results.length} result{results.length === 1 ? "" : "s"}
          </h2>
          {results.length === 0 ? (
            <p className="mt-4" style={{ color: "var(--ink-muted)" }}>
              Nothing matched. Try “RAG”, “attention”, or browse the{" "}
              <Link href="/learn">full curriculum</Link>.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {results.map((c) => {
                const cat = getCategory(c.category);
                return (
                  <li key={c.id}>
                    <Link
                      href={conceptHref(c)}
                      className="block rounded-[--radius] border p-4 no-underline transition-colors hover:border-[--accent]"
                      style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
                    >
                      <span className="text-xs uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                        {cat?.title ?? c.category}
                      </span>
                      <span className="mt-1 block font-semibold" style={{ color: "var(--ink)" }}>
                        {c.title}
                      </span>
                      <span className="mt-1 block text-sm" style={{ color: "var(--ink-muted)" }}>
                        {c.summary}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
