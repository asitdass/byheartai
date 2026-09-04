import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { ThemeControls } from "./theme-controls";
import { SearchForm } from "./search-form";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{
        background: "color-mix(in oklab, var(--paper) 88%, transparent)",
        borderColor: "var(--rule)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-[80rem] items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold no-underline" style={{ color: "var(--ink)" }}>
          <Heart size={18} fill="var(--heart)" stroke="var(--heart)" aria-hidden />
          ByHeart<span style={{ color: "var(--accent)" }}>AI</span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1 text-sm sm:flex" aria-label="Primary">
          {[
            { href: "/learn", label: "Learn" },
            { href: "/roadmaps", label: "Roadmaps" },
            { href: "/glossary", label: "Glossary" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-[--radius-sm] px-3 py-1.5 no-underline hover:bg-[--surface]"
              style={{ color: "var(--ink-muted)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchForm size="header" />
          <Link
            href="/search"
            className="rounded-[--radius-sm] p-2 no-underline hover:bg-[--surface] md:hidden"
            style={{ color: "var(--ink-muted)" }}
            aria-label="Search lessons"
          >
            <Search size={18} aria-hidden />
          </Link>
          <ThemeControls />
        </div>
      </div>
    </header>
  );
}
