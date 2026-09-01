import type { ReactNode } from "react";

/** The lead "one-line answer" shown directly under the lesson title. */
export function OneLine({ children }: { children: ReactNode }) {
  return (
    <p
      className="mt-2 mb-8 font-[family-name:var(--font-display)] text-[1.35rem] leading-snug"
      style={{ color: "var(--ink-muted)" }}
    >
      {children}
    </p>
  );
}
