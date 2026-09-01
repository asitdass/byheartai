import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNext, conceptHref } from "@/lib/content";

/**
 * The one obvious next step. Driven by the concept's `next` edge so a learner
 * never has to decide what to read next (see docs/DESIGN_SYSTEM.md section 9).
 */
export function NextControl({ conceptId }: { conceptId: string }) {
  const next = getNext(conceptId);
  if (!next) return null;

  return (
    <Link
      href={conceptHref(next)}
      className="group mt-12 flex items-center justify-between gap-4 rounded-[--radius] border p-5 no-underline transition-colors hover:border-[--accent]"
      style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
    >
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
          Next
        </span>
        <span className="block text-lg font-semibold font-[family-name:var(--font-display)]" style={{ color: "var(--ink)" }}>
          {next.title}
        </span>
      </span>
      <ArrowRight
        size={22}
        className="shrink-0 transition-transform group-hover:translate-x-1"
        style={{ color: "var(--accent)" }}
        aria-hidden
      />
    </Link>
  );
}
