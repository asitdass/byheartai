"use client";

import { useState } from "react";
import { FlaskConical, Radio } from "lucide-react";

const modes = [
  {
    id: "offline",
    icon: FlaskConical,
    title: "Offline",
    when: "Before users see it — CI, PRs, nightly jobs.",
    what: "A frozen set of questions + gold answers (or a rubric). Score exact match, schema, retrieval, or a judge.",
    good: "Cheap, repeatable, nobody gets a bad answer. Catches regressions the day you change a prompt.",
    bad: "The set is not the real world. Overfit it and you'll look great while production quietly fails.",
  },
  {
    id: "online",
    icon: Radio,
    title: "Online",
    when: "Live traffic — A/B tests, thumbs, task success, p95 latency.",
    what: "Real users, real queries, real cost. Shadow a new prompt first if you can: score it without showing it.",
    good: "Measures the actual distribution, including the weird 4% you never wrote a gold example for.",
    bad: "Slow, noisy, can harm users. Confounded by season, UI, and luck. Don't A/B a prompt you never gated offline.",
  },
] as const;

/** Offline frozen-set eval vs live online eval. */
export function OfflineVsOnline() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("offline");
  const m = modes.find((x) => x.id === id)!;
  const Icon = m.icon;

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
              className="flex flex-1 items-center justify-center gap-2 rounded-[--radius-sm] border px-3 py-2 text-sm"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              <mode.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
              {mode.title}
            </button>
          ))}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <div className="mb-2 flex items-center gap-2 font-bold">
            <Icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
            {m.title} evaluation
          </div>
          <p><span className="font-semibold">When: </span>{m.when}</p>
          <p><span className="font-semibold">What you score: </span>{m.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>Why you need it: </span>{m.good}</p>
          <p style={{ color: "var(--ink-muted)" }}><span className="font-semibold">Blind spot: </span>{m.bad}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Gate every change offline. Confirm it online. Either one alone will lie to you.
      </figcaption>
    </figure>
  );
}
