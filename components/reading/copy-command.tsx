"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** A single shell command with a copy button. */
export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div
      className="flex items-center gap-2 rounded-(--radius-sm) border px-3 py-2"
      style={{ background: "var(--paper)", borderColor: "var(--rule)" }}
    >
      <code
        className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.8125rem]"
        style={{ color: "var(--ink)" }}
      >
        <span aria-hidden style={{ color: "var(--ink-faint)" }}>$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : `Copy command: ${command}`}
        className="shrink-0 cursor-pointer rounded-(--radius-sm) p-1"
        style={{ color: copied ? "var(--accent)" : "var(--ink-faint)" }}
      >
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      </button>
    </div>
  );
}
