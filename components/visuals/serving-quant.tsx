"use client";

import { useState } from "react";

const layers = [
  {
    id: "w",
    title: "Weights",
    note: "GPTQ / AWQ / GGUF / FP8. Shrink the model file so it fits one GPU (or fewer GPUs). This is the fine-tuning lesson's 'serve' job, not QLoRA training.",
  },
  {
    id: "a",
    title: "Activations",
    note: "Compute can run in FP8/INT8 on modern chips. Faster matmuls, different from storing the checkpoint in 4-bit.",
  },
  {
    id: "kv",
    title: "KV cache",
    note: "Long context × concurrent users is often bigger than the weights. Quantizing KV (8-bit / FP8 / 4-bit) buys batch size. Eval: long-context recall can dip.",
  },
] as const;

/** Three places serving quantization actually bites. */
export function ServingQuant() {
  const [id, setId] = useState<(typeof layers)[number]["id"]>("kv");
  const L = layers.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {layers.map((layer) => {
            const active = layer.id === id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setId(layer.id)}
                aria-pressed={active}
                className="rounded-[--radius-sm] border px-2 py-3 text-center text-xs font-semibold"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                {layer.title}
              </button>
            );
          })}
        </div>
        <p className="text-sm" aria-live="polite">{L.note}</p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Serving quant is weights + activations + KV. QLoRA is a training trick. Always re-run your eval suite after you shrink bits.
      </figcaption>
    </figure>
  );
}
