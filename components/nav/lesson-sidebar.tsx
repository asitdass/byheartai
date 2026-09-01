import Link from "next/link";
import { getConceptsByCategory, conceptHref } from "@/lib/content";
import { getCategory } from "@/data/categories";

/** Left sidebar: the current category and its lessons in reading order. */
export function LessonSidebar({ category, activeSlug }: { category: string; activeSlug: string }) {
  const cat = getCategory(category);
  const lessons = getConceptsByCategory(category).filter((c) => c.status === "published");

  return (
    <nav aria-label={`${cat?.title ?? category} lessons`} className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
        {cat?.title ?? category}
      </p>
      <ul className="space-y-0.5">
        {lessons.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.id}>
              <Link
                href={conceptHref(c)}
                aria-current={active ? "page" : undefined}
                className="block rounded-[--radius-sm] px-3 py-1.5 no-underline"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 12%, var(--paper))" : "transparent",
                  color: active ? "var(--accent)" : "var(--ink-muted)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {c.title}
              </Link>
            </li>
          );
        })}
        {lessons.length === 0 && (
          <li style={{ color: "var(--ink-faint)" }} className="px-3 py-1.5">
            Coming soon
          </li>
        )}
      </ul>
    </nav>
  );
}
