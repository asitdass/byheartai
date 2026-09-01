import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  href: string;
  label: string;
}

/** "You are here" breadcrumb shown at the top of every lesson. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1" style={{ color: "var(--ink-faint)" }}>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} aria-hidden />}
            {i < items.length - 1 ? (
              <Link href={item.href} className="no-underline hover:underline" style={{ color: "var(--ink-muted)" }}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
