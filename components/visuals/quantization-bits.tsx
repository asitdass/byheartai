"use client";

import { useState } from "react";

const bits = [
  { id: "16", label: "16-bit", mem: 100, note: "Full precision people train in (bf16/fp16). Highest quality, hungriest VRAM." },
  { id: "8", label: "8-bit", mem: 50, note: "About half the memory. Often near-lossless for inference. A common first shrink." },
  { id: "4", label: "4-bit", mem: 25, note: "QLoRA training and GGUF/GPTQ/AWQ inference. Small quality drop; huge memory win." },
] as const;

/** Interactive bit-width vs memory. */
export function QuantizationBits() {
  const [id, setId] = useState<(typeof bits)[number]["id"]>("4");
  const b = bits.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 flex gap-2">
          {bits.map((bit) => (
            <button
              key={bit.id}
              type="button"
              onClick={() => setId(bit.id)}
              aria-pressed={bit.id === id}
              className="rounded-[--radius-sm] border px-3 py-1.5 text-sm"
              style={{
                background: bit.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: bit.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {bit.label}
            </button>
          ))}
        </div>
        <div className="mb-1 text-xs font-semibold" style={{ color: "var(--ink-muted)" }}>Relative VRAM for the same model</div>
        <div className="mb-2 h-3 overflow-hidden rounded-full" style={{ background: "var(--paper)" }}>
          <div className="h-full transition-all" style={{ width: `${b.mem}%`, background: "var(--accent)" }} />
        </div>
        <p className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>~{b.mem}% of 16-bit size (illustrative)</p>
        <p className="mt-2 text-sm" aria-live="polite">{b.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Quantization stores each weight with fewer bits. Training (QLoRA) and serving (GPTQ/AWQ/GGUF) both use it — for different jobs.
      </figcaption>
    </figure>
  );
}
