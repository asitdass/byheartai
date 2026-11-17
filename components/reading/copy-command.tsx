"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/** A single shell command with a copy button. */
export function CopyCommand({ command }: { command: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copying = useRef(false);
  const copied = status === "copied";

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copy() {
    if (copying.current) return;
    copying.current = true;
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(command);
      setStatus("copied");
      resetTimer.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    } finally {
      copying.current = false;
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
        aria-label={`Copy command: ${command}`}
        className="copy-command-button inline-flex min-h-9 min-w-[6rem] shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-(--radius-sm) px-2 text-xs font-semibold"
        data-copied={copied || undefined}
      >
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
        <span>{copied ? "Copied" : status === "error" ? "Retry" : "Copy"}</span>
      </button>
      <span role="status" className="sr-only">
        {copied ? "Command copied" : status === "error" ? "Could not copy command. Try again." : ""}
      </span>
    </div>
  );
}
