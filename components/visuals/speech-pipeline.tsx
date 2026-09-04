"use client";

import { useState } from "react";

const paths = [
  {
    id: "cascade",
    title: "Cascade (STT → LLM → TTS)",
    flow: ["Audio in", "Speech-to-text", "Text LLM", "Text-to-speech", "Audio out"],
    keep: "Cheap, swappable parts, great transcripts for search.",
    lose: "Tone, overlap, laughter, and music get flattened to words.",
  },
  {
    id: "native",
    title: "Native audio model",
    flow: ["Audio in", "Audio tokens", "Omni model", "Text and/or speech out"],
    keep: "Prosody, emotion, who is interrupting — the sound itself is evidence.",
    lose: "Harder to index, debug, and cache than a transcript.",
  },
] as const;

/** Cascaded speech pipeline vs native audio tokens. */
export function SpeechPipeline() {
  const [id, setId] = useState<(typeof paths)[number]["id"]>("cascade");
  const p = paths.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex flex-wrap gap-2">
          {paths.map((path) => (
            <button
              key={path.id}
              type="button"
              onClick={() => setId(path.id)}
              aria-pressed={path.id === id}
              className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: path.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: path.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {path.title}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5" role="img" aria-label={p.flow.join(" then ")}>
          {p.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="rounded-[--radius-sm] px-2 py-1 text-xs font-semibold" style={{ background: "var(--paper)" }}>{step}</span>
              {i < p.flow.length - 1 && <span aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm" aria-live="polite"><strong>Keeps:</strong> {p.keep}</p>
        <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}><strong>Loses:</strong> {p.lose}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Cascades turn speech into text and back. Native models hear the waveform — use both when you need search and tone.
      </figcaption>
    </figure>
  );
}
