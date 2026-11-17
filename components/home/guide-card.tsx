import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Guide } from "@/lib/guides";
import { getTool } from "@/data/tools";

const levelLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" } as const;

export function GuideCard({ guide }: { guide: Guide }) {
  const toolNames = guide.tools.map((id) => getTool(id)?.name).filter(Boolean) as string[];
  return (
    <Link href={`/guides/${guide.slug}`} className="card flex h-full flex-col p-5">
      <div className="flex items-center gap-3">
        <span className="eyebrow grad-text guide-level">{levelLabel[guide.level]}</span>
        <span className="inline-flex items-center gap-1 text-xs" style={{ color: "var(--ink-faint)" }}>
          <Clock size={12} aria-hidden /> {guide.minutes} min
        </span>
        <ArrowUpRight size={16} className="ml-auto" style={{ color: "var(--ink-faint)" }} aria-hidden />
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold leading-snug" style={{ color: "var(--ink)" }}>
        {guide.title}
      </h3>
      <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
        {guide.outcome || guide.summary}
      </p>
      {toolNames.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {toolNames.map((n) => (
            <span key={n} className="chip">
              {n}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
