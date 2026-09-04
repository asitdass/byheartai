"use client";

import { useState } from "react";

const views = [
  {
    id: "g",
    label: "Generator G",
    job: "z ~ noise → fake x̂. Wants D(x̂) close to 1 — 'please call this real.'",
    risk: "If D is too strong, G gets a flat 0 and learns nothing (vanishing generator gradient).",
  },
  {
    id: "d",
    label: "Discriminator D",
    job: "Sees real x and fake x̂. Wants D(x) → 1 and D(x̂) → 0.",
    risk: "If D is too weak, G fools it with junk. Mode collapse: G emits one plausible image forever.",
  },
  {
    id: "loop",
    label: "The loop",
    job: "Alternate: a few D steps, a few G steps. Minimax, not a single loss that always goes down.",
    risk: "Oscillation is normal. In 2026, image gen is mostly diffusion / flow — GANs still teach the adversarial idea.",
  },
] as const;

const era = [
  { id: "2014", label: "2014–18 GAN era", line: "DCGAN, StyleGAN: photoreal faces from noise. Research default for images." },
  { id: "2026", label: "2026 image gen", line: "Diffusion and flow-matching dominate products. GANs remain in some compression, graphics, and as a teaching tool." },
] as const;

/** Generator vs discriminator, and why the 2026 default moved on. */
export function GanIdea() {
  const [id, setId] = useState<(typeof views)[number]["id"]>("loop");
  const [year, setYear] = useState<(typeof era)[number]["id"]>("2026");
  const v = views.find((x) => x.id === id)!;
  const e = era.find((x) => x.id === year)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Two networks, opposite jobs. Click who you are:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
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

        <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-xs" role="img" aria-label="Noise goes through the generator to a fake sample. Real and fake samples go to the discriminator.">
          <span className="rounded-[--radius-sm] border px-2 py-1" style={{ background: "var(--paper)" }}>
            z ~ N(0,1)
          </span>
          <span style={{ color: "var(--ink-faint)" }}>→</span>
          <span
            className="rounded-[--radius-sm] border px-2 py-1 font-semibold"
            style={{
              background: id === "g" ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
              borderColor: id === "g" ? "var(--accent)" : "var(--rule)",
            }}
          >
            G
          </span>
          <span style={{ color: "var(--ink-faint)" }}>→ x̂</span>
          <span style={{ color: "var(--ink-faint)" }}>and</span>
          <span className="rounded-[--radius-sm] border px-2 py-1" style={{ background: "var(--paper)" }}>
            real x
          </span>
          <span style={{ color: "var(--ink-faint)" }}>→</span>
          <span
            className="rounded-[--radius-sm] border px-2 py-1 font-semibold"
            style={{
              background: id === "d" ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
              borderColor: id === "d" ? "var(--accent)" : "var(--rule)",
            }}
          >
            D
          </span>
          <span style={{ color: "var(--ink-faint)" }}>→ real / fake</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              Objective
            </div>
            <p className="text-sm">{v.job}</p>
          </div>
          <div className="rounded-[--radius-sm] border p-3" style={{ background: "var(--paper)", borderColor: "var(--accent)" }}>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              Why it is unstable
            </div>
            <p className="text-sm">{v.risk}</p>
          </div>
        </div>

        <p className="mt-3 mb-1 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Honest timeline
        </p>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {era.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setYear(item.id)}
              aria-pressed={item.id === year}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
              style={{
                background: item.id === year ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: item.id === year ? "var(--accent)" : "var(--rule)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="text-sm" aria-live="polite">
          {e.line}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        A GAN is two players: G fakes, D judges. Learn the game. For pixels in 2026, start from diffusion, not from training a GAN from scratch.
      </figcaption>
    </figure>
  );
}
