"use client";

import { useState } from "react";
import { Code, Database, Terminal } from "lucide-react";

const sinks = [
  {
    id: "html",
    icon: Code,
    title: "HTML / markdown UI",
    what: "Model text rendered as HTML becomes a classic XSS path if you don't encode. 'The assistant said it' is not a sanitizer.",
    fix: "Treat LLM output like any other untrusted string: encode for HTML, restrict markdown, never eval it as code.",
  },
  {
    id: "sql",
    icon: Database,
    title: "SQL / query builder",
    what: "Concatenating a generated clause into a query is SQL injection with extra charm. The model is not a parameterized API.",
    fix: "Structured tool args → bind parameters in code. The model never sees a string that becomes SQL.",
  },
  {
    id: "shell",
    icon: Terminal,
    title: "Shell / URL / email header",
    what: "A generated command, redirect, or href can hit internal IPs (SSRF) or smuggle headers. Output is data, not a script.",
    fix: "Allow-list hosts and verbs. No raw shell. URL parsers + block private ranges. Same as any untrusted client.",
  },
] as const;

/** LLM output is untrusted input to the next interpreter. */
export function InsecureOutput() {
  const [id, setId] = useState<(typeof sinks)[number]["id"]>("html");
  const s = sinks.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
          model output → ? → your browser, database, or OS
        </p>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {sinks.map((sink) => {
            const active = sink.id === id;
            return (
              <button
                key={sink.id}
                type="button"
                onClick={() => setId(sink.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <sink.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{sink.title}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">Failure: </span>{s.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>Handle it like untrusted input: </span>{s.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Improper output handling (OWASP LLM05): the model is an untrusted client of HTML, SQL, and shells.
      </figcaption>
    </figure>
  );
}
