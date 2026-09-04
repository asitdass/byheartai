"use client";

import { useState } from "react";

const tokens = ["The", "refund", "cap", "is", "$120", "."];

const views = [
  {
    id: "seq",
    label: "Sequential bottleneck",
    rnn: "Token 6 cannot start until 1→2→3→4→5 finished. GPU waits. Path from 'The' to '$120' is 5 recurrent hops.",
    xf: "All six positions in one matmul. Path from 'The' to '$120' is 1 attention hop (plus your block stack).",
  },
  {
    id: "long",
    label: "Long-range link",
    rnn: "Gradient to the first word is multiplied by Wₕ at every step. Vanishing/exploding. LSTMs help; they do not make it parallel.",
    xf: "Attention scores every pair directly. Still O(n²) memory — a different tax — but the graph distance is constant.",
  },
  {
    id: "train",
    label: "Training a corpus",
    rnn: "Time is a for-loop. Batching examples helps; you still cannot vectorize across timesteps of one sequence.",
    xf: "Teacher forcing + self-attention = whole sequence in parallel. That is why 2017–2026 scaled.",
  },
] as const;

/** Parallel attention vs the RNN time loop. */
export function TransformersVsRnns() {
  const [pair, setPair] = useState(4);
  const [id, setId] = useState<(typeof views)[number]["id"]>("seq");
  const v = views.find((x) => x.id === id)!;
  const hops = pair;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same sentence. Click a later token — how far is it from &quot;The&quot;?
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tokens.map((tok, i) => (
            <button
              key={tok}
              type="button"
              onClick={() => setPair(i)}
              aria-pressed={i === pair}
              disabled={i === 0}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs disabled:opacity-40"
              style={{
                background: i === pair ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: i === pair ? "var(--accent)" : "var(--rule)",
              }}
            >
              {tok}
            </button>
          ))}
        </div>

        <div className="mb-3 grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              RNN path
            </div>
            <p className="font-mono text-sm">{hops} sequential hop{hops === 1 ? "" : "s"}</p>
            <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
              The → {tokens.slice(1, pair + 1).join(" → ")}
            </p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Transformer path
            </div>
            <p className="font-mono text-sm">{pair === 0 ? "—" : "1 attention hop"}</p>
            <p className="mt-1 text-[11px]" style={{ color: "var(--ink-faint)" }}>
              The ←→ {tokens[pair]} in the n×n grid
            </p>
          </div>
        </div>

        <div className="mb-2 flex flex-wrap gap-1.5">
          {views.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setId(item.id)}
              aria-pressed={item.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: item.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: item.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              RNN
            </div>
            <p className="text-sm">{v.rnn}</p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Transformer
            </div>
            <p className="text-sm">{v.xf}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Transformers replaced RNNs for language because they parallelize and keep a short path between any two tokens. RNNs still show up in a few streaming niches.
      </figcaption>
    </figure>
  );
}
