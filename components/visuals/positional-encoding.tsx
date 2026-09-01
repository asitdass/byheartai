"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const initial = ["Man", "bites", "dog"];

/*
 * Interactive: reorder the same words and watch the meaning flip. Shows why a
 * transformer needs positional encoding — attention alone is order-blind.
 */
export function PositionalEncoding() {
  const [words, setWords] = useState<string[]>(initial);

  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= words.length) return;
    const next = [...words];
    [next[i], next[j]] = [next[j], next[i]];
    setWords(next);
  }

  const sentence = words.join(" ").toLowerCase();
  const meaning =
    sentence === "man bites dog"
      ? "😮 The man is biting the dog. (Unusual — newsworthy!)"
      : sentence === "dog bites man"
      ? "🐕 The dog is biting the man. (Ordinary.)"
      : "The meaning depends entirely on the order of these same words.";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          Same three words — reorder them and watch the meaning change. Position is information.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {words.map((w, i) => (
            <div key={`${w}-${i}`} className="flex items-center overflow-hidden rounded-[--radius-sm] border" style={{ background: "var(--paper)" }}>
              <button
                type="button"
                onClick={() => move(i, -1)}
                disabled={i === 0}
                aria-label={`Move ${w} left`}
                className="px-1.5 py-2 disabled:opacity-30 hover:bg-[--surface]"
              >
                <ArrowLeft size={14} aria-hidden />
              </button>
              <span className="px-2 py-1 text-lg font-semibold">
                <span className="mr-1 text-xs align-super" style={{ color: "var(--ink-faint)" }}>{i + 1}</span>
                {w}
              </span>
              <button
                type="button"
                onClick={() => move(i, 1)}
                disabled={i === words.length - 1}
                aria-label={`Move ${w} right`}
                className="px-1.5 py-2 disabled:opacity-30 hover:bg-[--surface]"
              >
                <ArrowRight size={14} aria-hidden />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setWords(initial)}
            className="ml-1 flex items-center gap-1 rounded-[--radius-sm] px-2 py-2 text-sm hover:bg-[--surface]"
            style={{ color: "var(--ink-muted)" }}
          >
            <RotateCcw size={14} aria-hidden /> Reset
          </button>
        </div>

        <p className="mt-4 rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)", color: "var(--ink)" }} aria-live="polite">
          {meaning}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Without positional encoding, a transformer would see these as an unordered bag of words — and miss the difference.
      </figcaption>
    </figure>
  );
}
