"use client";

import { useState } from "react";
import { Globe, FolderLock, GitBranch } from "lucide-react";

const layers = [
  {
    id: "public",
    icon: Globe,
    title: "Public benchmark",
    example: "MMLU / GPQA / a coding arena",
    use: "Shop for a base model. Compare labs. That's it.",
    fail: "Your product didn't get better because a general quiz score ticked up. The set is contaminated, saturated, and not your users.",
  },
  {
    id: "gold",
    icon: FolderLock,
    title: "Private gold set",
    example: "120 real tickets + gold replies + gold chunks",
    use: "The spec of *your* assistant. Looks like production. Versioned like code. Never used as training data.",
    fail: "50 random intern questions with no gold chunks. You'll grade noise and ship noise.",
  },
  {
    id: "ci",
    icon: GitBranch,
    title: "Regression in CI",
    example: "PR fails if faithfulness drops >2 pts",
    use: "The gate. Prompt, chunker, model, judge prompt — all are code. A drop blocks merge.",
    fail: "A weekly spreadsheet someone forgets to open. Regressions ship on Friday.",
  },
] as const;

/** Public benches vs private gold vs CI regression. */
export function BenchmarksRegression() {
  const [id, setId] = useState<(typeof layers)[number]["id"]>("gold");
  const L = layers.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {layers.map((layer) => {
            const active = layer.id === id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setId(layer.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <layer.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{layer.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>{L.example}</p>
          <p><span className="font-semibold">Use it to: </span>{L.use}</p>
          <p style={{ color: "var(--ink-muted)" }}><span className="font-semibold">This fails when: </span>{L.fail}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Leaderboards pick a model. Your gold set + CI pick whether the product got worse.
      </figcaption>
    </figure>
  );
}
