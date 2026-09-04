import { Box, GraduationCap, ArrowRight } from "lucide-react";

/** Pretraining vs fine-tuning: same model, extra practice on your task. */
export function FineTuningIdea() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="A pretrained model already knows language. Fine-tuning continues training on your examples so behavior like tone or format lives in the weights."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="flex w-40 flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)" }}>
            <Box size={18} aria-hidden style={{ color: "var(--accent)" }} />
            <span className="mt-1 text-sm font-bold">Pretrained model</span>
            <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>already speaks the language</span>
          </div>
          <ArrowRight className="hidden sm:block" size={16} aria-hidden style={{ color: "var(--ink-faint)" }} />
          <div className="rounded-[--radius-sm] border px-3 py-3 text-center text-xs" style={{ background: "var(--paper)" }}>
            your examples<br />
            <span className="font-mono" style={{ color: "var(--accent)" }}>(input → desired output)</span>
          </div>
          <ArrowRight className="hidden sm:block" size={16} aria-hidden style={{ color: "var(--ink-faint)" }} />
          <div className="flex w-40 flex-col items-center rounded-[--radius-sm] border px-3 py-3 text-center" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <GraduationCap size={18} aria-hidden style={{ color: "var(--accent)" }} />
            <span className="mt-1 text-sm font-bold">Fine-tuned model</span>
            <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>same brain, your habits</span>
          </div>
        </div>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          Weights move a little. Facts you stuff in still go stale — that&apos;s what RAG is for.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Fine-tuning is extra training on a finished model so it picks up your format, tone, or skill — not a new encyclopedia.
      </figcaption>
    </figure>
  );
}
