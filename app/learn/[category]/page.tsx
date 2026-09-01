import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory } from "@/data/categories";
import { getConceptsByCategory, conceptHref } from "@/lib/content";
import { Breadcrumb } from "@/components/nav/breadcrumb";

const levelLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `/learn/${category}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const lessons = getConceptsByCategory(category).filter((c) => c.status === "published");

  return (
    <div className="mx-auto max-w-[52rem] px-4 py-10">
      <Breadcrumb items={[{ href: "/learn", label: "Learn" }, { href: `/learn/${category}`, label: cat.title }]} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">{cat.title}</h1>
      <p className="mt-3 text-lg" style={{ color: "var(--ink-muted)" }}>
        {cat.description}
      </p>

      {lessons.length > 0 ? (
        <ul className="mt-8 space-y-2">
          {lessons.map((c) => (
            <li key={c.id}>
              <Link
                href={conceptHref(c)}
                className="block rounded-[--radius] border p-4 no-underline transition-colors hover:border-[--accent]"
                style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>
                    {c.title}
                  </span>
                  <span className="shrink-0 text-xs uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                    {levelLabel[c.level]}
                  </span>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {c.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8" style={{ color: "var(--ink-faint)" }}>
          Lessons for this category are coming soon.
        </p>
      )}
    </div>
  );
}
