"use client";

import { useState } from "react";
import { Globe, FileText, Mail, Image } from "lucide-react";

const sources = [
  {
    id: "web",
    icon: Globe,
    title: "Web page the agent fetched",
    what: "The user asked for a summary. Hidden instructions in the page (or in pixels a VLM will OCR) ride into context.",
    fix: "Treat retrieved web text as hostile data. Don't give that turn send-email or browse-to-attacker-URL tools.",
  },
  {
    id: "doc",
    icon: FileText,
    title: "Uploaded PDF / ticket",
    what: "A résumé, invoice, or support attachment carries instructions aimed at the model, not at the human reader.",
    fix: "Label the chunk as untrusted. Tools that act (refund, hire, wire) must not key off retrieved prose.",
  },
  {
    id: "mail",
    icon: Mail,
    title: "Email / calendar the assistant reads",
    what: "The attacker never opens your chatbot. They email the mailbox your agent is allowed to fetch.",
    fix: "Separate 'read mail' from 'send mail.' Confirm outbound. Don't auto-follow links in tool results.",
  },
  {
    id: "img",
    icon: Image,
    title: "Image or screenshot",
    what: "Multimodal models parse text in pictures. Instructions can be tiny, low-contrast, or in a screenshot of a 'doc.'",
    fix: "Same rule as RAG: pixels are untrusted input. Don't let vision+tools skip the human gate.",
  },
] as const;

/** Indirect injection: the user didn't type the attack. */
export function IndirectInjection() {
  const [id, setId] = useState<(typeof sources)[number]["id"]>("web");
  const s = sources.find((x) => x.id === id)!;

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {sources.map((src) => {
            const active = src.id === id;
            return (
              <button
                key={src.id}
                type="button"
                onClick={() => setId(src.id)}
                aria-pressed={active}
                className="flex flex-col items-center rounded-[--radius-sm] border px-2 py-3 text-center"
                style={{
                  background: active ? "color-mix(in oklab, var(--accent) 16%, var(--paper))" : "var(--paper)",
                  borderColor: active ? "var(--accent)" : "var(--rule)",
                }}
              >
                <src.icon size={16} aria-hidden style={{ color: "var(--accent)" }} />
                <span className="mt-1 text-[11px] font-semibold leading-tight">{src.title}</span>
              </button>
            );
          })}
        </div>
        <p className="mb-2 font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
          user ask (benign) → retrieve → untrusted content in context → model
        </p>
        <div className="space-y-2 text-sm" aria-live="polite">
          <p><span className="font-semibold">How it lands: </span>{s.what}</p>
          <p><span className="font-semibold" style={{ color: "var(--accent)" }}>Default defense: </span>{s.fix}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Indirect injection rides in through retrieval, mail, and pixels. The victim typed a normal question.
      </figcaption>
    </figure>
  );
}
