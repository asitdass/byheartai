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
      <div className="mx-auto flex min-h-14 max-w-[80rem] flex-wrap items-center gap-x-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold no-underline" style={{ color: "var(--ink)" }}>
          <Heart size={18} fill="var(--heart)" stroke="var(--heart)" aria-hidden />
          ByHeart<span className="grad-text">AI</span>
        </Link>

        <nav className="order-last -mx-1 flex w-full items-center gap-0.5 overflow-x-auto pb-2 text-sm md:order-none md:mx-0 md:ml-2 md:w-auto md:pb-0" aria-label="Primary">
          {[
            { href: "/learn", label: "Learn" },
            { href: "/guides", label: "Guides" },
            { href: "/tools", label: "Tools" },
            { href: "/whats-new", label: "What's new" },
            { href: "/roadmaps", label: "Roadmaps" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="shrink-0 whitespace-nowrap rounded-(--radius-sm) px-2.5 py-1.5 no-underline hover:bg-(--surface)"
              style={{ color: "var(--ink-muted)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <SearchForm size="header" />
          <Link
            href="/search"
            className="rounded-(--radius-sm) p-2 no-underline hover:bg-(--surface) lg:hidden"
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
