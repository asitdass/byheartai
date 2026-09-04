import { Bot, ShieldQuestion, Check, Play } from "lucide-react";

const steps = [
  { icon: Bot, label: "Agent proposes", note: 'e.g. "Delete 1,000 records" or "Send this email"' },
  { icon: ShieldQuestion, label: "Pause for approval", note: "risky/irreversible action → ask a human" },
  { icon: Check, label: "Human approves / edits", note: "confirm, tweak, or reject" },
  { icon: Play, label: "Agent continues", note: "acts only after the green light" },
];

/** Human-in-the-loop checkpoint for risky agent actions. */
export function HumanInTheLoop() {
  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }} role="img" aria-label="Human-in-the-loop: the agent proposes a risky action, pauses for approval, a human approves or edits or rejects it, and only then does the agent continue.">
        <ol className="flex flex-col gap-2">
          {steps.map((s, i) => {
            const isGate = i === 1;
            return (
              <li key={s.label} className="flex items-center gap-3 rounded-[--radius-sm] border px-3 py-2" style={{ background: "var(--paper)", borderColor: isGate ? "color-mix(in oklab, oklch(0.6 0.18 25) 45%, var(--rule))" : "var(--rule)" }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{ background: isGate ? "oklch(0.6 0.18 25)" : "var(--accent)", color: "var(--accent-ink)" }}>{i + 1}</span>
                <s.icon size={18} aria-hidden style={{ color: isGate ? "oklch(0.6 0.18 25)" : "var(--accent)" }} />
                <div>
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Human-in-the-loop puts a person's approval in front of risky or irreversible actions — safety with autonomy.
      </figcaption>
    </figure>
  );
}
