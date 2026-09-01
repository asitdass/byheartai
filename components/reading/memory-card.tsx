import { Heart } from "lucide-react";
import type { ReactNode } from "react";

/**
 * The signature "Know this by heart" component. Restrained, recognizable,
 * used once per lesson (see docs/DESIGN_SYSTEM.md).
 */
export function MemoryCard({ children }: { children: ReactNode }) {
  return (
    <aside
      className="my-10 rounded-[--radius] border p-6"
      style={{
        background: `color-mix(in oklab, var(--heart) 6%, var(--surface))`,
        borderColor: `color-mix(in oklab, var(--heart) 30%, var(--rule))`,
      }}
      aria-label="Know this by heart"
    >
      <div
        className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
        style={{ color: "var(--heart)" }}
      >
        <Heart size={16} fill="currentColor" aria-hidden />
        Know this by heart
      </div>
      <div className="text-[1.05em] [&>*+*]:mt-3">{children}</div>
    </aside>
  );
}
