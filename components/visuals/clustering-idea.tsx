"use client";

import { useState } from "react";

type Point = { x: number; y: number; k2: number; k3: number; k4: number };

const points: Point[] = [
  { x: 18, y: 28, k2: 0, k3: 0, k4: 0 },
  { x: 26, y: 22, k2: 0, k3: 0, k4: 0 },
  { x: 22, y: 38, k2: 0, k3: 0, k4: 0 },
  { x: 34, y: 32, k2: 0, k3: 0, k4: 0 },
  { x: 70, y: 24, k2: 1, k3: 1, k4: 1 },
  { x: 78, y: 30, k2: 1, k3: 1, k4: 1 },
  { x: 74, y: 18, k2: 1, k3: 1, k4: 1 },
  { x: 84, y: 26, k2: 1, k3: 1, k4: 1 },
  { x: 48, y: 72, k2: 0, k3: 2, k4: 2 },
  { x: 56, y: 78, k2: 1, k3: 2, k4: 2 },
  { x: 42, y: 80, k2: 0, k3: 2, k4: 2 },
  { x: 62, y: 70, k2: 1, k3: 2, k4: 3 },
];

const ks = [
  {
    id: "k2",
    label: "k = 2",
    note: "k-means must put every point in one of two piles. The bottom group gets split across the two — the algorithm cannot invent a third name.",
  },
  {
    id: "k3",
    label: "k = 3",
    note: "Three clouds, three centroids. This k matches the geometry. You chose k; the data never told you “there are 3 classes.”",
  },
  {
    id: "k4",
    label: "k = 4",
    note: "A fourth cluster appears by splitting a real group. Lower within-cluster distance is not the same as a real segment. k is a hyperparameter.",
  },
] as const;

const clusterFill = [
  "var(--accent)",
  "var(--ink)",
  "var(--ink-muted)",
  "color-mix(in oklab, var(--accent) 45%, var(--ink))",
];

/** k-means intuition: k is a choice, clusters are not classes. */
export function ClusteringIdea() {
  const [id, setId] = useState<(typeof ks)[number]["id"]>("k3");
  const k = ks.find((x) => x.id === id)!;
  const key = id as "k2" | "k3" | "k4";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Same unlabeled dots. You pick k; k-means assigns groups:
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {ks.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setId(opt.id)}
              aria-pressed={opt.id === id}
              className="rounded-[--radius-sm] border px-2.5 py-1.5 text-left text-xs"
              style={{
                background: opt.id === id ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                borderColor: opt.id === id ? "var(--accent)" : "var(--rule)",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div
          className="relative mb-3 h-44 rounded-[--radius-sm] border"
          style={{ background: "var(--paper)" }}
          role="img"
          aria-label={`Unlabeled points colored into ${k.label} groups.`}
        >
          {points.map((p, i) => (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                background: clusterFill[p[key]],
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
        <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          {k.note}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Clustering invents groups. Classification needs names first. k-means will always give you k piles — even if k is wrong.
      </figcaption>
    </figure>
  );
}
