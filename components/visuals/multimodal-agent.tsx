import { Eye, Ear, Brain, Wrench, Volume2 } from "lucide-react";

const steps = [
  { icon: Eye, label: "See", note: "screenshot, camera, PDF page" },
  { icon: Ear, label: "Hear", note: "user voice, alarm, call" },
  { icon: Brain, label: "Reason", note: "same agent loop as text" },
  { icon: Wrench, label: "Act", note: "click, crop, search, API" },
  { icon: Volume2, label: "Speak / show", note: "TTS, overlay, new image" },
];

/** Multimodal agent: perceive, reason, act, respond in kind. */
export function MultimodalAgent() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="A multimodal agent sees and hears, reasons with the same observe-reason-act loop, uses tools, then speaks or shows a result.">
        <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
          {steps.map((s, i) => (
            <li key={s.label} className="flex items-center gap-2">
              <div className="flex w-36 flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center" style={{ background: "var(--paper)" }}>
                <s.icon size={18} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-sm font-semibold">{s.label}</span>
                <span className="text-[11px]" style={{ color: "var(--ink-faint)" }}>{s.note}</span>
              </div>
              {i < steps.length - 1 && <span className="hidden sm:block" aria-hidden style={{ color: "var(--ink-faint)" }}>→</span>}
            </li>
          ))}
        </ol>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          The loop did not change. The observations and tools did.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A multimodal agent is still observe → reason → act. Screenshots and microphones are just more observations.
      </figcaption>
    </figure>
  );
}
