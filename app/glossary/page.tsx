import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/data/glossary";
import { getConceptById, conceptHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Glossary",
  description: "Plain-language definitions of key AI terms, each linked to a full lesson.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  const terms = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <div className="mx-auto max-w-[46rem] px-4 py-10">
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
