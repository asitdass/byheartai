import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/data/glossary";
import { getConceptById, conceptHref } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, definedTermSetJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI glossary",
  description:
    "Plain-language definitions of RAG, embeddings, MCP, agents, KV cache, LoRA, and other AI terms — each linked to a full lesson.",
  path: "/glossary",
  keywords: ["AI glossary", "what is RAG", "what is an embedding", "MCP definition"],
});

export default function GlossaryPage() {
  const terms = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const jsonTerms = terms.map((t) => {
    const concept = getConceptById(t.conceptId);
    return {
      term: t.term,
      definition: t.shortDefinition,
      path: concept && concept.status === "published" ? conceptHref(concept) : undefined,
    };
  });

  return (
    <div className="mx-auto max-w-[46rem] px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Glossary", path: "/glossary" }])} />
      <JsonLd data={definedTermSetJsonLd(jsonTerms)} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">AI Glossary</h1>
      <p className="mt-3 text-lg" style={{ color: "var(--ink-muted)" }}>
        Quick definitions — click any term to read the full lesson.
      </p>

      <dl className="mt-8 space-y-5">
        {terms.map((t) => {
          const concept = getConceptById(t.conceptId);
          return (
            <div key={t.id} className="border-b pb-5" style={{ borderColor: "var(--rule)" }}>
              <dt className="flex items-baseline gap-2">
                <span className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {t.term}
                </span>
                {t.aliases.length > 0 && (
                  <span className="text-sm" style={{ color: "var(--ink-faint)" }}>
                    {t.aliases.join(", ")}
                  </span>
                )}
              </dt>
              <dd className="mt-1" style={{ color: "var(--ink-muted)" }}>
                {t.shortDefinition}{" "}
                {concept && concept.status === "published" && (
                  <Link href={conceptHref(concept)} className="whitespace-nowrap">
                    Read more →
                  </Link>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
