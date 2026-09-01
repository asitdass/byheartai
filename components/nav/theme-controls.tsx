"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, BookOpen, Type, Check } from "lucide-react";

type Theme = "light" | "dark" | "sepia" | "system";
type FontSize = "small" | "default" | "large";

function applyTheme(theme: Theme) {
  const resolved =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  document.documentElement.setAttribute("data-theme", resolved);
}

export function ThemeControls() {
  const [theme, setTheme] = useState<Theme>("system");
  const [fontSize, setFontSize] = useState<FontSize>("default");
  const [readingMode, setReadingMode] = useState(false);
  const [open, setOpen] = useState(false);
  // Avoid hydration mismatch: the resolved theme depends on localStorage /
  // matchMedia, which only exist on the client. Render a stable icon until mount.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme((localStorage.getItem("bh-theme") as Theme) || "system");
    setFontSize((localStorage.getItem("bh-font-size") as FontSize) || "default");
    setReadingMode(document.documentElement.getAttribute("data-reading-mode") === "on");
    setMounted(true);
  }, []);

  function chooseTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem("bh-theme", t);
    applyTheme(t);
  }

  function chooseFontSize(f: FontSize) {
    setFontSize(f);
    localStorage.setItem("bh-font-size", f);
    if (f === "default") document.documentElement.removeAttribute("data-font-size");
    else document.documentElement.setAttribute("data-font-size", f);
  }

  function toggleReading() {
    const next = !readingMode;
    setReadingMode(next);
    document.documentElement.setAttribute("data-reading-mode", next ? "on" : "off");
  }

  const quickIsDark =
    mounted &&
    (theme === "dark" ||
      (theme === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches));

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={toggleReading}
        aria-pressed={readingMode}
        title="Reading mode (hide sidebars)"
        className="rounded-[--radius-sm] p-2 hover:bg-[--surface]"
        style={{ color: readingMode ? "var(--accent)" : "var(--ink-muted)" }}
      >
        <BookOpen size={18} aria-hidden />
        <span className="sr-only">Toggle reading mode</span>
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="menu"
          title="Appearance"
          className="rounded-[--radius-sm] p-2 hover:bg-[--surface]"
          style={{ color: "var(--ink-muted)" }}
        >
          {quickIsDark ? <Moon size={18} aria-hidden /> : <Sun size={18} aria-hidden />}
          <span className="sr-only">Appearance settings</span>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
            <div
              role="menu"
              className="absolute right-0 z-50 mt-2 w-56 rounded-[--radius] border p-3 shadow-lg"
              style={{ background: "var(--paper)", borderColor: "var(--rule)" }}
            >
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                <Sun size={13} aria-hidden /> Theme
              </p>
              <div className="mb-3 grid grid-cols-1 gap-1">
                {(["light", "dark", "sepia", "system"] as Theme[]).map((t) => (
                  <button
                    key={t}
                    role="menuitemradio"
                    aria-checked={theme === t}
                    onClick={() => chooseTheme(t)}
                    className="flex items-center justify-between rounded-[--radius-sm] px-3 py-1.5 text-sm capitalize hover:bg-[--surface]"
                  >
                    {t}
                    {theme === t && <Check size={15} style={{ color: "var(--accent)" }} />}
                  </button>
                ))}
              </div>

              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                <Type size={13} aria-hidden /> Text size
              </p>
              <div className="grid grid-cols-3 gap-1">
                {(["small", "default", "large"] as FontSize[]).map((f) => (
                  <button
                    key={f}
                    role="menuitemradio"
                    aria-checked={fontSize === f}
                    onClick={() => chooseFontSize(f)}
                    className="rounded-[--radius-sm] px-2 py-1.5 text-sm capitalize hover:bg-[--surface]"
                    style={{
                      background: fontSize === f ? "color-mix(in oklab, var(--accent) 12%, var(--paper))" : "transparent",
                      color: fontSize === f ? "var(--accent)" : "var(--ink)",
                    }}
                  >
                    {f === "default" ? "M" : f === "small" ? "S" : "L"}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
