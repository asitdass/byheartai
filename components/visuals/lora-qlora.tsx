"use client";

import { useState } from "react";

const ranks = [
  { r: 8, cap: "light", note: "Tiny adapter. Good for tone/format. Lowest VRAM." },
  { r: 16, cap: "typical", note: "The usual starting rank. Enough for most product SFT." },
  { r: 64, cap: "heavy", note: "More capacity, more memory. Diminishing returns if data is small." },
];

/** LoRA adapters on a frozen base; QLoRA keeps the base in 4-bit. */
export function LoraQlora() {
  const [i, setI] = useState(1);
  const rank = ranks[i];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-4 rounded-[--radius-sm] border p-3 text-sm" style={{ background: "var(--paper)" }} role="img" aria-label="Frozen base weight matrix plus two small LoRA matrices whose product is added back.">
          <div className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>W (frozen) + A × B</div>
          <div className="mt-2 flex items-center justify-center gap-2 text-xs">
            <span className="rounded border px-2 py-6" style={{ borderColor: "var(--rule)" }}>base W<br />locked</span>
            <span aria-hidden>+</span>
            <span className="rounded border px-2 py-3 font-semibold" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              A<br />d × {rank.r}
            </span>
            <span aria-hidden>×</span>
            <span className="rounded border px-2 py-3 font-semibold" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              B<br />{rank.r} × d
            </span>
          </div>
          <p className="mt-2 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
            QLoRA: store W in 4-bit; train A and B in higher precision.
          </p>
        </div>
        <p className="mb-2 text-sm font-semibold">LoRA rank (r)</p>
        <div className="mb-2 flex gap-2">
          {ranks.map((rk, idx) => (
            <button
              key={rk.r}
              type="button"
              onClick={() => setI(idx)}
              aria-pressed={idx === i}
              className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: idx === i ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: idx === i ? "var(--accent)" : "var(--rule)",
              }}
            >
              r={rk.r} · {rk.cap}
            </button>
          ))}
        </div>
        <p className="text-sm" aria-live="polite">{rank.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        LoRA trains two skinny matrices instead of W. QLoRA also compresses the frozen base so it fits on one GPU.
      </figcaption>
    </figure>
  );
}
