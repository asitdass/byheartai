import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[46rem] px-4 py-24 text-center">
      <p className="font-[family-name:var(--font-display)] text-6xl font-bold" style={{ color: "var(--accent)" }}>
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">This page hasn&apos;t been written yet</h1>
      <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
        The concept you&apos;re looking for isn&apos;t here. Try the curriculum instead.
      </p>
      <Link
        href="/learn"
        className="mt-6 inline-block rounded-[--radius-sm] px-5 py-2.5 font-semibold no-underline"
        style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
      >
        Browse the curriculum
      </Link>
    </div>
  );
}
