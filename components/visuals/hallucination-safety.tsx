"use client";

import { useState } from "react";
import { FileX, Globe, Quote, ShieldAlert } from "lucide-react";

const failures = [
  {
    id: "ungrounded",
    icon: FileX,
    title: "Ungrounded",
    what: "The context never said it. The model filled the gap with a plausible policy.",
    score: "Faithfulness / groundedness vs the retrieved text — not 'does this sound true?'",
    fix: "Tighten the prompt ('only from context'), raise retrieval recall, allow 'I don't know.'",
  },
  {
    id: "world",
    icon: Globe,
    title: "World-false",
    what: "It matches a bad chunk, or no chunk, and is false in the real world. Faithful to junk is still wrong.",
    score: "Factuality against a trusted source or a gold answer. Separate from groundedness.",
    fix: "Fix the corpus and retrieval. Don't only punish the generator for a poisoned or stale doc.",
  },
  {
    id: "cite",
    icon: Quote,
    title: "Fake citation",
    what: "Looks sourced: '§4.2 of the handbook.' That section doesn't exist.",
    score: "Citation check: does the span exist? Does it support the claim?",
    fix: "Force quote-then-claim. Verify IDs in code, not by vibe.",
  },
  {
    id: "safety",
    icon: ShieldAlert,
    title: "Safety miss",
    what: "Jailbreak, leaked PII, medical overconfidence, or a tool it must not call.",
    score: "Refusal quality, leak tests, over-refusal (it said no to a normal ask), tool-abuse cases.",
    fix: "Red-team set + classifiers. 'Be nice' is not a safety eval.",
  },
] as const;

/** Four failure types people lump together as hallucination. */
export function HallucinationSafety() {
  const [id, setId] = useState<(typeof failures)[number]["id"]>("ungrounded");
  const f = failures.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {failures.map((fail) => {
            const active = fail.id === id;
            return (
              <button
                key={fail.id}
                type="button"
                onClick={() => setId(fail.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <fail.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold">{fail.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">What happened: </span>{f.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>How you score it: </span>{f.score}</p>
          <p style={{ color: "var(--ink-muted)" }}><span className="font-semibold">Usual fix: </span>{f.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Groundedness ≠ world-truth ≠ safety. If you average them, you will &quot;fix&quot; the wrong failure.
      </figcaption>
    </figure>
  );
}
