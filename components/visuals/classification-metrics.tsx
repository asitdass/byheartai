"use client";

import { useState } from "react";

const thresholds = [
  {
    id: "strict",
    label: "Strict (few flags)",
    tp: 5,
    fp: 1,
    fn: 5,
    tn: 89,
    take: "Precision 5/6 ≈ 83%. Recall 5/10 = 50%. You rarely cry wolf; you miss half the spam. Use when a false flag is expensive (blocked invoice).",
  },
  {
    id: "balanced",
    label: "Balanced",
    tp: 8,
    fp: 4,
    fn: 2,
    tn: 86,
    take: "Precision 8/12 ≈ 67%. Recall 8/10 = 80%. F1 ≈ 0.73. Accuracy is 94% — and still hides the two missed spam emails. Accuracy is the liar here.",
  },
  {
    id: "loose",
    label: "Loose (catch more)",
    tp: 10,
    fp: 18,
    fn: 0,
    tn: 72,
    take: "Recall 100%. Precision 10/28 ≈ 36%. F1 drops. Use when missing the rare class is the disaster (fraud, cancer screen) and a human reviews the flags.",
  },
] as const;

function Cell({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-[--radius-sm] border p-2 text-center"
      style={{
        background: accent ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
        borderColor: accent ? "var(--accent)" : "var(--rule)",
      }}
    >
      <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
        {label}
      </div>
      <div className="font-mono text-lg font-semibold">{value}</div>
    </div>
  );
}

/** 100 emails, 10 spam: confusion matrix + threshold tradeoff. */
export function ClassificationMetrics() {
  const [id, setId] = useState<(typeof thresholds)[number]["id"]>("balanced");
  const t = thresholds.find((x) => x.id === id)!;
  const prec = t.tp / (t.tp + t.fp);
  const rec = t.tp / (t.tp + t.fn);
  const f1 = (2 * prec * rec) / (prec + rec);
  const acc = (t.tp + t.tn) / 100;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          100 emails, 10 are spam. Move the decision threshold:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {thresholds.map((th) => (
            <button
              key={th.id}
              type="button"
              onClick={() => setId(th.id)}
              aria-pressed={th.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: th.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: th.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {th.label}
            </button>
          ))}
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2" aria-live="polite">
          <Cell label="True ham (TN)" value={t.tn} />
          <Cell label="False spam (FP)" value={t.fp} />
          <Cell label="Missed spam (FN)" value={t.fn} />
          <Cell label="Caught spam (TP)" value={t.tp} accent />
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          <div className="rounded-[--radius-sm] border p-2" style={{ background: "var(--paper)" }}>
            Acc <span className="font-mono font-semibold">{(acc * 100).toFixed(0)}%</span>
          </div>
          <div className="rounded-[--radius-sm] border p-2" style={{ background: "var(--paper)" }}>
            Prec <span className="font-mono font-semibold">{(prec * 100).toFixed(0)}%</span>
          </div>
          <div className="rounded-[--radius-sm] border p-2" style={{ background: "var(--paper)" }}>
            Rec <span className="font-mono font-semibold">{(rec * 100).toFixed(0)}%</span>
          </div>
          <div className="rounded-[--radius-sm] border p-2" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            F1 <span className="font-mono font-semibold">{f1.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm">{t.take}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Precision = of the flags, how many were spam. Recall = of the spam, how many you caught. Accuracy will congratulate a model that never flags anything.
      </figcaption>
    </figure>
  );
}
