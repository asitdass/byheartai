"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/types";

/** In-page table of contents with active-section highlighting. */
export function OnThisPage({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <ul className="space-y-1.5 text-sm">
      {toc.map((item) => (
        <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : 0 }}>
          <a
            href={`#${item.id}`}
            className="no-underline hover:underline"
            style={{
              color: active === item.id ? "var(--accent)" : "var(--ink-faint)",
              fontWeight: active === item.id ? 600 : 400,
            }}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
