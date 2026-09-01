"use client";

import { useMemo, useState } from "react";

/*
 * Interactive temperature explorer. Shows how dividing logits by temperature
 * before softmax sharpens (low T) or flattens (high T) the probability of the
 * next token. Illustrative fixed logits.
 */
const candidates = [
  { word: "sunny", logit: 3.0 },
  { word: "cloudy", logit: 2.4 },
  { word: "warm", logit: 2.1 },
  { word: "rainy", logit: 1.7 },
  { word: "cold", logit: 1.2 },
  { word: "purple", logit: -0.5 },
];

function softmaxWithTemp(logits: number[], t: number): number[] {
  const temp = Math.max(t, 0.01);
  const scaled = logits.map((l) => l / temp);
  const max = Math.max(...scaled);
  const exps = scaled.map((s) => Math.exp(s - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

export function TemperatureSampling() {
  const [temp, setTemp] = useState(0.8);
  const probs = useMemo(() => softmaxWithTemp(candidates.map((c) => c.logit), temp), [temp]);
  const maxProb = Math.max(...probs);

  const mood =
    temp <= 0.3
      ? "Very focused — almost always picks the top word (predictable)."
      : temp <= 0.9
      ? "Balanced — mostly likely words, with some variety."
      : temp <= 1.3
      ? "Creative — lower-probability words get a real chance."
      : "Wild — even unlikely words like \"purple\" can slip through.";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
          Prompt: <span className="font-mono">&quot;The weather today is ___&quot;</span>
        </p>

        <div className="mt-4 flex items-center gap-3">
          <label htmlFor="temp" className="text-sm font-semibold" style={{ whiteSpace: "nowrap" }}>
            Temperature
          </label>
          <input
            id="temp"
            type="range"
            min={0.1}
            max={2}
            step={0.1}
            value={temp}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            className="flex-1"
            style={{ accentColor: "var(--accent)" }}
          />
          <span className="w-10 text-right font-mono text-sm" style={{ color: "var(--accent)" }}>{temp.toFixed(1)}</span>
        </div>

        <div className="mt-4 space-y-1.5" aria-label="Next-token probabilities">
          {candidates.map((c, i) => (
            <div key={c.word} className="flex items-center gap-2">
              <span className="w-16 text-right font-mono text-sm" style={{ color: "var(--ink-muted)" }}>{c.word}</span>
              <div className="h-6 flex-1 overflow-hidden rounded-[--radius-sm]" style={{ background: "var(--paper)" }}>
                <div
                  className="flex h-full items-center justify-end pr-2 text-xs font-semibold transition-all duration-200"
                  style={{
                    width: `${Math.max(probs[i] * 100, 2)}%`,
                    background: probs[i] === maxProb ? "var(--accent)" : "color-mix(in oklab, var(--accent) 45%, transparent)",
                    color: probs[i] === maxProb ? "var(--accent-ink)" : "var(--ink)",
                  }}
                >
                  {(probs[i] * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          {mood}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Temperature reshapes the probabilities before sampling: low = focused and repeatable, high = diverse and risky.
      </figcaption>
    </figure>
  );
}
