import { Image, Film, ArrowRight } from "lucide-react";

const rows = [
  { from: "Text", via: "diffusion / AR image model", to: "Picture" },
  { from: "Picture + text", via: "image-to-image / edit", to: "Edited picture" },
  { from: "Text (or keyframes)", via: "video generator", to: "Clip" },
];

/** Understanding vs generation are different jobs. */
export function GenerationFlow() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="Generation models turn text or images into new pixels. That is a different job from understanding an existing photo.">
        <div className="mb-4 grid gap-2">
          {rows.map((r) => (
            <div key={r.to} className="flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="rounded-[--radius-sm] border px-2 py-1" style={{ background: "var(--paper)" }}>{r.from}</span>
              <ArrowRight size={12} aria-hidden style={{ color: "var(--ink-faint)" }} />
              <span className="font-mono" style={{ color: "var(--accent)" }}>{r.via}</span>
              <ArrowRight size={12} aria-hidden style={{ color: "var(--ink-faint)" }} />
              <span className="rounded-[--radius-sm] border px-2 py-1 font-semibold" style={{ background: "var(--paper)" }}>{r.to}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
            <div className="mb-1 flex items-center gap-1 font-semibold"><Image size={14} aria-hidden /> Understand</div>
            Answer questions about an image that already exists.
          </div>
          <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
            <div className="mb-1 flex items-center gap-1 font-semibold"><Film size={14} aria-hidden /> Generate</div>
            Invent new pixels. They can look right and still be false.
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Understanding reads the world. Generation paints a new one. Don&apos;t treat a generated image as evidence.
      </figcaption>
    </figure>
  );
}
