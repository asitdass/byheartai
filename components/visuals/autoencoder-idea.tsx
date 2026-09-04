"use client";

import { useMemo, useState } from "react";

const clean = [0.9, 0.1, 0.8, 0.2, 0.7, 0.15];
const noise = [0.15, -0.2, 0.1, 0.25, -0.1, 0.2];

const widths = [
  { id: "8", label: "Wide code (6→4)", dim: 4 },
  { id: "2", label: "Tight bottleneck (6→2)", dim: 2 },
] as const;

const jobs = [
  { id: "recon", label: "Reconstruct" },
  { id: "denoise", label: "Denoise" },
] as const;

function encode(x: number[], dim: number) {
  const half = x.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
  const rest = x.slice(3).reduce((a, b) => a + b, 0) / 3;
  if (dim === 2) return [half, rest];
  return [x[0] * 0.7 + x[1] * 0.3, half, rest, x[5] * 0.6 + x[4] * 0.4];
}

function decode(z: number[], n: number) {
  if (z.length === 2) {
    return [z[0], z[0] * 0.2, z[0] * 0.9, z[1], z[1] * 0.3, z[1] * 0.85];
  }
  return [z[0], z[1] * 0.4, z[1], z[2], z[2] * 0.4, z[3]].slice(0, n);
}

function clip(v: number) {
  return Math.max(0, Math.min(1, v));
}

function mse(a: number[], b: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += (a[i] - b[i]) ** 2;
  return s / a.length;
}

/** Bottleneck reconstruction; denoise vs copy. */
export function AutoencoderIdea() {
  const [job, setJob] = useState<(typeof jobs)[number]["id"]>("denoise");
  const [wid, setWid] = useState<(typeof widths)[number]["id"]>("2");
  const w = widths.find((x) => x.id === wid)!;
  const input = job === "denoise" ? clean.map((v, i) => clip(v + noise[i])) : clean;
  const target = clean;
  const z = useMemo(() => encode(input, w.dim), [input, w.dim]);
  const xhat = useMemo(() => decode(z, 6).map(clip), [z]);
  const err = mse(xhat, target);

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          6 numbers in · squeeze · 6 numbers out. Loss is against the <em>clean</em> vector.
        </p>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {jobs.map((j) => (
            <button
              key={j.id}
              type="button"
              onClick={() => setJob(j.id)}
              aria-pressed={j.id === job}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: j.id === job ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: j.id === job ? "var(--accent)" : "var(--rule)",
              }}
            >
              {j.label}
            </button>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {widths.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setWid(item.id)}
              aria-pressed={item.id === wid}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: item.id === wid ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: item.id === wid ? "var(--accent)" : "var(--rule)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-3" aria-live="polite">
          <Bars title={job === "denoise" ? "Noisy x" : "Input x"} vals={input} />
          <Bars title={`Code z (${z.length}-d)`} vals={z} accent />
          <Bars title="Reconstruction x̂" vals={xhat} />
        </div>
        <p className="mt-3 text-sm">
          MSE vs clean ≈ {err.toFixed(3)}.{" "}
          {wid === "2"
            ? "A tight bottleneck cannot copy pixel-for-pixel — it must keep structure. That pressure is why the code is useful."
            : "A wide code can nearly memorize. Useful as a denoiser only if you add noise or a sparsity/VAE prior."}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Encoder → skinny code → decoder. Train to reconstruct (or denoise). The code is an embedding; a VAE just makes that code a distribution.
      </figcaption>
    </figure>
  );
}

function Bars({ title, vals, accent }: { title: string; vals: number[]; accent?: boolean }) {
  return (
    <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: accent ? "var(--accent)" : "var(--rule)" }}>
      <div className="mb-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: accent ? "var(--accent)" : "var(--ink-faint)" }}>
        {title}
      </div>
      <div className="flex items-end gap-1" style={{ height: 64 }}>
        {vals.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[--radius-sm]"
            style={{
              height: `${Math.max(6, Math.abs(v) * 100)}%`,
              background: accent ? "var(--accent)" : "color-mix(in oklab, var(--accent) 45%, var(--surface))",
            }}
          />
        ))}
      </div>
      <p className="mt-1 font-mono text-[10px]" style={{ color: "var(--ink-faint)" }}>
        {vals.map((v) => v.toFixed(2)).join("  ")}
      </p>
    </div>
  );
}
