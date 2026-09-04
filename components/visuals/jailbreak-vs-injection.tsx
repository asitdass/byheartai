"use client";

import { useState } from "react";

const modes = [
  {
    id: "jail",
    title: "Jailbreak",
    goal: "Make the model violate its safety policy (say / do something the lab tried to forbid).",
    who: "Usually the person at the keyboard, talking to a general chatbot.",
    fix: "Model training, refusal evals, filters — mostly the provider's job. You still don't give that chat a wire-money tool.",
  },
  {
    id: "inject",
    title: "Prompt injection",
    goal: "Hijack *your application*: steal context, fire tools, rewrite the task the product was built for.",
    who: "The user, or a stranger who poisoned a doc the user never saw (indirect).",
    fix: "Your job: least privilege, HITL, untrusted-data labels, output handling. A nicer system prompt will not hold.",
  },
] as const;

/** Jailbreak (policy) vs injection (application hijack). */
export function JailbreakVsInjection() {
  const [id, setId] = useState<(typeof modes)[number]["id"]>("inject");
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
              className="flex-1 rounded-[--radius-sm] border px-3 py-2 text-sm"
              style={{
                background: mode.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: mode.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {mode.title}
            </button>
          ))}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">Goal: </span>{m.goal}</p>
          <p><span className="font-semibold">Typical actor: </span>{m.who}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>Who fixes it: </span>{m.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        They overlap in the model. In a product, jailbreak is a policy fail; injection is an app-sec fail. Assume both.
      </figcaption>
    </figure>
  );
}
