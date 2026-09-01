import Link from "next/link";
import { getPrerequisites, getRelated, conceptHref } from "@/lib/content";
import { OnThisPage } from "./on-this-page";
import type { TocItem } from "@/lib/types";

function LinkList({ ids }: { ids: { id: string; category: string; slug: string; title: string }[] }) {
  return (
    <ul className="space-y-1.5">
      {ids.map((c) => (
        <li key={c.id}>
          <Link href={conceptHref(c)} className="text-sm no-underline hover:underline" style={{ color: "var(--accent)" }}>
            {c.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
        {title}
      </p>
      {children}
    </div>
  );
}

/** Right rail: on-this-page TOC + prerequisites + related (graph-driven). */
export function RightRail({ conceptId, toc }: { conceptId: string; toc: TocItem[] }) {
  const prerequisites = getPrerequisites(conceptId);
  const related = getRelated(conceptId);

  return (
    <div className="space-y-6">
      {toc.length > 0 && (
        <Section title="On this page">
          <OnThisPage toc={toc} />
        </Section>
      )}
      {prerequisites.length > 0 && (
        <Section title="Prerequisites">
          <LinkList ids={prerequisites} />
        </Section>
      )}
      {related.length > 0 && (
        <Section title="Related">
          <LinkList ids={related} />
        </Section>
      )}
    </div>
  );
}
