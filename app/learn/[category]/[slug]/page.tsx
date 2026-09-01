import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  getAllConcepts,
  getConcept,
  getRelated,
  conceptHref,
} from "@/lib/content";
import { getCategory } from "@/data/categories";
import { renderMdx } from "@/lib/mdx";
import { extractToc } from "@/lib/toc";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { LessonSidebar } from "@/components/nav/lesson-sidebar";
import { RightRail } from "@/components/nav/right-rail";
import { NextControl } from "@/components/reading/next-control";

interface Params {
  category: string;
  slug: string;
}

export function generateStaticParams(): Params[] {
  return getAllConcepts().map((c) => ({ category: c.category, slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const concept = getConcept(category, slug);
  if (!concept) return {};
  const url = `/learn/${category}/${slug}`;
  return {
    title: concept.title,
    description: concept.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: concept.title,
      description: concept.summary,
      url,
    },
    twitter: { card: "summary_large_image", title: concept.title, description: concept.summary },
  };
}

const levelLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const concept = getConcept(category, slug);
  if (!concept) notFound();

  const cat = getCategory(category);
  const toc = extractToc(concept.body);
  const content = await renderMdx(concept.body);
  const related = getRelated(concept.id);

  const crumbs = [
    { href: "/learn", label: "Learn" },
    { href: `/learn/${category}`, label: cat?.title ?? category },
    { href: conceptHref(concept), label: concept.title },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: concept.title,
    description: concept.summary,
    author: concept.author ? { "@type": "Person", name: concept.author } : undefined,
    datePublished: concept.datePublished,
    dateModified: concept.dateUpdated ?? concept.lastReviewed ?? concept.datePublished,
  };

  return (
    <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[15rem_minmax(0,1fr)_15rem]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Left sidebar */}
      <aside className="lesson-aside hidden lg:block">
        <div className="sticky top-20">
          <LessonSidebar category={category} activeSlug={slug} />
        </div>
      </aside>

      {/* Main reading column */}
      <main className="min-w-0">
        <article className="prose mx-auto">
          <Breadcrumb items={crumbs} />

          <div className="mb-1 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
            <span style={{ color: "var(--accent)" }}>{levelLabel[concept.level]}</span>
            {concept.estimatedMinutes && <span>{concept.estimatedMinutes} min read</span>}
          </div>

          <h1
            className="font-[family-name:var(--font-display)] leading-tight"
            style={{ fontSize: "var(--fs-h1)", fontWeight: "var(--heading-weight)", letterSpacing: "-0.02em" }}
          >
            {concept.title}
          </h1>

          {content}

          {/* Auto-rendered: Related concepts */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2>Related concepts</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.id}>
                    <Link href={conceptHref(r)}>{r.title}</Link> — {r.summary}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Auto-rendered: Further reading */}
          {concept.papers.length > 0 && (
            <section className="mt-12">
              <h2>Further reading</h2>
              <ul>
                {concept.papers.map((p) => (
                  <li key={p.url}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      {p.title}
                      <ExternalLink size={13} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <NextControl conceptId={concept.id} />

          {concept.lastReviewed && (
            <p className="mt-8 text-sm" style={{ color: "var(--ink-faint)" }}>
              Last reviewed: {concept.lastReviewed}
              {concept.author ? ` · Written by ${concept.author}` : ""}
              {concept.reviewer ? ` · Reviewed by ${concept.reviewer}` : ""}
            </p>
          )}
        </article>
      </main>

      {/* Right rail */}
      <aside className="lesson-aside hidden lg:block">
        <div className="sticky top-20">
          <RightRail conceptId={concept.id} toc={toc} />
        </div>
      </aside>
    </div>
  );
}
