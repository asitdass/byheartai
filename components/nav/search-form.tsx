import { Search } from "lucide-react";

export function SearchForm({
  defaultValue = "",
  size = "page",
}: {
  defaultValue?: string;
  size?: "hero" | "header" | "page";
}) {
  const hero = size === "hero";
  const header = size === "header";

  return (
    <form
      action="/search"
      method="get"
      role="search"
      className={hero ? "mx-auto mt-8 max-w-xl" : header ? "hidden md:block w-52 lg:w-64" : "mt-6"}
    >
      <label htmlFor={header ? "q-header" : "q"} className="sr-only">
        Search lessons
      </label>
      <div
        className={`flex items-center gap-2 border ${hero ? "rounded-full px-5 py-3" : "rounded-[--radius-sm] px-3 py-2"}`}
        style={{ background: "var(--surface)", borderColor: "var(--rule)" }}
      >
        <button type="submit" className="flex shrink-0" aria-label="Search" style={{ color: "var(--ink-faint)" }}>
          <Search size={16} aria-hidden />
        </button>
        <input
          id={header ? "q-header" : "q"}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder={hero ? "What do you want to learn?" : "Search lessons"}
          autoComplete="off"
          enterKeyHint="search"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          style={{ color: "var(--ink)" }}
        />
        {!header && (
          <button
            type="submit"
            className="shrink-0 rounded-[--radius-sm] px-3 py-1 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
}
