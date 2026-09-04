"use client";

import { useState } from "react";

const kinds = [
  { id: "lstm", label: "LSTM" },
  { id: "gru", label: "GRU" },
] as const;

const scenes = [
  {
    id: "keep",
    label: "Keep a fact",
    lstm: { f: 0.95, i: 0.05, o: 0.9, note: "Forget ≈ 1, input ≈ 0: the cell c holds yesterday's value. Output still reads it." },
    gru: { z: 0.05, r: 0.9, note: "Update z ≈ 0: h stays the old h. Reset is idle because you are not writing." },
  },
  {
    id: "write",
    label: "Overwrite",
    lstm: { f: 0.1, i: 0.9, o: 0.85, note: "Forget dumps the cell; input writes the new candidate. Classic 'now remember this instead.'" },
    gru: { z: 0.9, r: 0.2, note: "Update z ≈ 1: blend almost entirely toward the new candidate. Reset low = ignore old h when proposing it." },
  },
  {
    id: "hide",
    label: "Hold but hide",
    lstm: { f: 0.9, i: 0.1, o: 0.05, note: "LSTM superpower: cell stays full, output gate ≈ 0 so h looks empty. GRU has no separate cell." },
    gru: { z: 0.15, r: 0.5, note: "GRU cannot hide a full memory from the hidden state — c and h are the same vector." },
  },
] as const;

function Gate({ name, v }: { name: string; v: number }) {
  return (
    <div>
      <div className="mb-0.5 flex justify-between font-mono text-[11px]" style={{ color: "var(--ink-muted)" }}>
        <span>{name}</span>
        <span>{v.toFixed(2)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
        <div className="h-full" style={{ width: `${v * 100}%`, background: "var(--accent)" }} />
      </div>
    </div>
  );
}

/** LSTM three gates vs GRU two gates, on keep / overwrite / hide. */
export function LstmGru() {
  const [kind, setKind] = useState<(typeof kinds)[number]["id"]>("lstm");
  const [sid, setSid] = useState<(typeof scenes)[number]["id"]>("keep");
  const scene = scenes.find((s) => s.id === sid)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same story, two wiring diagrams. Gates are numbers in (0, 1).
        </p>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {kinds.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              aria-pressed={k.id === kind}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: k.id === kind ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: k.id === kind ? "var(--accent)" : "var(--rule)",
              }}
            >
              {k.label}
            </button>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {scenes.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSid(s.id)}
              aria-pressed={s.id === sid}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: s.id === sid ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: s.id === sid ? "var(--accent)" : "var(--rule)",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="space-y-2 rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            {kind === "lstm" ? (
              <>
                <Gate name="forget f" v={scene.lstm.f} />
                <Gate name="input i" v={scene.lstm.i} />
                <Gate name="output o" v={scene.lstm.o} />
                <p className="pt-1 font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  cₜ = f ⊙ cₜ₋₁ + i ⊙ c̃ₜ
                </p>
              </>
            ) : (
              <>
                <Gate name="update z" v={scene.gru.z} />
                <Gate name="reset r" v={scene.gru.r} />
                <p className="pt-1 font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  hₜ = (1−z) ⊙ hₜ₋₁ + z ⊙ h̃ₜ
                </p>
              </>
            )}
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              What the gates are doing
            </div>
            <p className="text-sm">{kind === "lstm" ? scene.lstm.note : scene.gru.note}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        LSTM: cell plus three gates. GRU: one state, two gates. Both beat vanilla RNNs; neither is the default for NLP in 2026.
      </figcaption>
    </figure>
  );
}
