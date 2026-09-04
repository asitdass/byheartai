import { Image, Type, ArrowRight, Brain } from "lucide-react";

/** A VLM turns pixels into visual tokens that sit next to text tokens. */
export function VlmArchitecture() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="A vision-language model encodes an image into visual tokens, encodes the question into text tokens, and one language model attends over both to answer."
      >
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-center">
          <div className="flex flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)" }}>
            <Image size={18} aria-hidden style={{ color: "var(--accent)" }} />
            <span className="mt-1 text-xs font-semibold">Image</span>
            <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>pixels → visual tokens</span>
          </div>
          <span className="self-center" aria-hidden style={{ color: "var(--ink-faint)" }}>+</span>
          <div className="flex flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)" }}>
            <Type size={18} aria-hidden style={{ color: "var(--accent)" }} />
            <span className="mt-1 text-xs font-semibold">Question</span>
            <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>words → text tokens</span>
          </div>
          <ArrowRight className="hidden self-center sm:block" size={16} aria-hidden style={{ color: "var(--ink-faint)" }} />
          <div className="flex flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <Brain size={18} aria-hidden style={{ color: "var(--accent)" }} />
            <span className="mt-1 text-xs font-semibold">One model</span>
            <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>attends over both</span>
          </div>
        </div>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          Visual tokens live in the same context window as words — a screenshot can cost hundreds of tokens.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A vision-language model doesn&apos;t &quot;see&quot; like we do — it reads an image as a sequence of visual tokens next to your question.
      </figcaption>
    </figure>
  );
}
