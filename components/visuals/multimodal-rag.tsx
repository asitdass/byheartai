"use client";

import { useState } from "react";

const queries = [
  {
    q: "red bike by a river",
    hits: [
      { kind: "image", n: "photo_18.jpg", why: "CLIP-style: text and image share one vector space" },
      { kind: "frame", n: "clip@1:04", why: "Video index of sampled frames" },
    ],
  },
  {
    q: "the slide that showed Q3 revenue",
    hits: [
      { kind: "ocr", n: "deck.pdf p12", why: "Text index of on-screen OCR beats pixels for numbers" },
      { kind: "image", n: "slide_12.png", why: "Then show the actual slide" },
    ],
  },
  {
    q: "when the alarm goes off",
    hits: [
      { kind: "audio", n: "beep @ 0:08", why: "Sound event / native audio index — transcript might say nothing" },
    ],
  },
];

/** Text query retrieving images, frames, OCR, and audio. */
export function MultimodalRag() {
  const [i, setI] = useState(0);
  const row = queries[i];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>Pick a query:</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {queries.map((qq, idx) => (
            <button
              key={qq.q}
              type="button"
              onClick={() => setI(idx)}
              aria-pressed={idx === i}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: idx === i ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: idx === i ? "var(--accent)" : "var(--rule)",
              }}
            >
              {qq.q}
            </button>
          ))}
        </div>
        <ul className="space-y-2" aria-live="polite">
          {row.hits.map((h) => (
            <li key={h.n} className="rounded-[--radius-sm] border px-3 py-2 text-sm" style={{ background: "var(--paper)" }}>
              <span className="font-mono text-xs font-semibold" style={{ color: "var(--accent)" }}>{h.kind}</span>
              <span className="ml-2 font-mono text-xs">{h.n}</span>
              <p className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>{h.why}</p>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Multimodal RAG retrieves the right <em>kind</em> of evidence — pixels, OCR text, frames, or sound — not only paragraphs.
      </figcaption>
    </figure>
  );
}
