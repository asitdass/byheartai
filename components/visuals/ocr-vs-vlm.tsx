"use client";

import { useState } from "react";
import { ScanLine, Eye } from "lucide-react";

const modes = [
  {
    id: "ocr",
    icon: ScanLine,
    title: "OCR + layout",
    steps: ["Detect text boxes", "Read characters", "Keep reading order / tables", "Hand text to the LLM"],
    best: "Invoices, forms, receipts — you need the actual string and structure.",
    miss: "Won't explain a chart or a meme. Garbage in, garbage out on blurry photos.",
  },
  {
    id: "vlm",
    icon: Eye,
    title: "Vision-language model",
    steps: ["Encode the whole page", "Attend to regions", "Answer in language", "May quote or paraphrase"],
    best: "\"What's wrong in this screenshot?\" Charts, UI, photos with little text.",
    miss: "Can hallucinate a total. Don't use it as your only source of legal/financial numbers.",
  },
] as const;

/** OCR pipeline vs asking a VLM to read the page. */
export function OcrVsVlm() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("ocr");
  const m = modes.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex gap-2">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setId(mode.id)}
              aria-pressed={mode.id === id}
              className="flex items-center gap-1.5 rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              <mode.icon size={14} aria-hidden /> {mode.title}
            </button>
          ))}
        </div>
        <ol className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {m.steps.map((s, i) => (
            <li key={s} className="rounded-[--radius-sm] border px-2 py-2 text-center text-xs" style={{ background: "var(--paper)" }}>
              <span className="font-mono" style={{ color: "var(--ink-faint)" }}>{i + 1}.</span> {s}
            </li>
          ))}
        </ol>
        <p className="text-sm" aria-live="polite"><strong>Use when:</strong> {m.best}</p>
        <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}><strong>Watch out:</strong> {m.miss}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        OCR extracts the letters. A VLM can explain the page. For money and IDs, extract then check — don&apos;t only ask the model.
      </figcaption>
    </figure>
  );
}
