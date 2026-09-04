"use client";

import { useState } from "react";

const knobs = [
  {
    id: "params",
    label: "Parameters (learned)",
    who: "The optimizer writes these during training.",
    when: "Change every batch. Frozen at inference (unless you fine-tune).",
    examples: [
      { name: "Weights W", detail: "The matrices inside each layer. A 7B model has ~7 billion of these numbers." },
      { name: "Biases b", detail: "Per-neuron offsets. Still parameters — still learned from data." },
      { name: "Checkpoint", detail: "The saved file is mostly parameters. Architecture + these numbers = the model." },
    ],
    rule: "If the training loop updates it from the loss, it is a parameter.",
  },
  {
    id: "hypers",
    label: "Hyperparameters (you set)",
    who: "You (or a search script) choose these before a run.",
    when: "Fixed for a training run. Changing them means a new experiment.",
    examples: [
      { name: "Learning rate η", detail: "How big a step gradient descent takes. Too big: diverge. Too small: crawl." },
      { name: "Batch size", detail: "How many examples per update. Affects noise, memory, and wall-clock time." },
      { name: "Architecture / size", detail: "Layers, hidden width, which model family. Chosen, not learned from this dataset." },
      { name: "Epochs / weight decay", detail: "How long to train and how hard to shrink weights. Regularization knobs." },
    ],
    rule: "If you pick it in a config file before fit(), it is a hyperparameter.",
  },
] as const;

/** Parameters are learned; hyperparameters are chosen. */
export function ParametersVsHyperparams() {
  const [id, setId] = useState<(typeof knobs)[number]["id"]>("params");
  const k = knobs.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Two kinds of numbers around a model. Click one:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {knobs.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setId(ch.id)}
              aria-pressed={ch.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: ch.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: ch.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {ch.label}
            </button>
          ))}
        </div>
        <div className="space-y-2" aria-live="polite">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                Who sets them
              </div>
              <p className="text-sm">{k.who}</p>
            </div>
            <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                When they change
              </div>
              <p className="text-sm">{k.when}</p>
            </div>
          </div>
          <ul className="space-y-1.5">
            {k.examples.map((ex) => (
              <li
                key={ex.name}
                className="rounded-[--radius-sm] border p-3 text-sm"
                style={{ background: "var(--paper)", borderColor: id === "params" ? "var(--accent)" : "var(--rule)" }}
              >
                <span className="font-mono text-xs font-semibold" style={{ color: "var(--accent)" }}>
                  {ex.name}
                </span>
                <span className="mt-0.5 block">{ex.detail}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
            {k.rule}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Parameters live inside the model file. Hyperparameters live in your training config.
      </figcaption>
    </figure>
  );
}
