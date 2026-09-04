"use client";

import { useEffect, useRef, useState } from "react";

const TOKENS = ["Stream", "ing", " sends", " each", " token", " as", " soon", " as", " it", " is", " decoded", "."];

/** TTFT wait, then token-by-token decode, with cancel. */
export function StreamingTokens() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "ttft" | "decode" | "done" | "cancelled">("idle");
  const [n, setN] = useState(0);
  const [ttftMs, setTtftMs] = useState(420);
  const reduced = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }

  function start() {
    clearTimers();
    setRunning(true);
    setN(0);
    setPhase("ttft");
    const ttft = reduced.current ? 0 : 420;
    setTtftMs(ttft || 0);
    const t0 = window.setTimeout(() => {
      if (reduced.current) {
        setN(TOKENS.length);
        setPhase("done");
        setRunning(false);
        return;
      }
      setPhase("decode");
      TOKENS.forEach((_, i) => {
        const id = window.setTimeout(() => {
          setN(i + 1);
          if (i + 1 === TOKENS.length) {
            setPhase("done");
            setRunning(false);
          }
        }, 90 * (i + 1));
        timers.current.push(id);
      });
    }, ttft);
    timers.current.push(t0);
  }

  function cancel() {
    clearTimers();
    setRunning(false);
    setPhase("cancelled");
  }

  const visible = TOKENS.slice(0, n).join("");
  const status =
    phase === "idle"
      ? "Idle. Press Play. TTFT is the wait before the first token; TPOT is the gap between later ones."
      : phase === "ttft"
        ? `TTFT… waiting ~${ttftMs} ms for the first token (queue + prefill). Nothing on screen yet.`
        : phase === "decode"
          ? `Decoding. TPOT ≈ 90 ms/token here. ${n}/${TOKENS.length} tokens visible. Cancel drops the rest.`
          : phase === "cancelled"
            ? `Cancelled after ${n} tokens. The server should stop decoding so you do not pay for unused tokens.`
            : "Complete. User-perceived latency was TTFT, not the full response time.";

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
          Token-by-token decode. Play, then Cancel mid-stream if you want.
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={start}
            disabled={running}
            aria-pressed={running}
            className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs font-semibold"
            style={{
              background: running ? "var(--paper)" : "var(--accent)",
              color: running ? "var(--ink-muted)" : "var(--accent-ink)",
              borderColor: running ? "var(--rule)" : "var(--accent)",
            }}
          >
            Play stream
          </button>
          <button
            type="button"
            onClick={cancel}
            disabled={!running}
            className="rounded-[--radius-sm] border px-2.5 py-1.5 text-xs"
            style={{ background: "var(--paper)" }}
          >
            Cancel
          </button>
        </div>
        <div
          className="min-h-16 rounded-[--radius-sm] border p-3 font-mono text-sm"
          style={{ background: "var(--paper)" }}
          aria-live="polite"
        >
          {visible || <span style={{ color: "var(--ink-faint)" }}>{phase === "ttft" ? "…" : "—"}</span>}
          {phase === "decode" && (
            <span className="ml-0.5 inline-block w-1.5 animate-pulse" style={{ background: "var(--accent)" }}>
              &nbsp;
            </span>
          )}
        </div>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
            <span className="font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              TTFT
            </span>
            <div className="mt-1">Time to first token. UX lives or dies here.</div>
          </div>
          <div className="rounded-[--radius-sm] border p-3 text-xs" style={{ background: "var(--paper)" }}>
            <span className="font-bold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
              TPOT
            </span>
            <div className="mt-1">Time per output token after that. Smooth typing vs stalls.</div>
          </div>
        </div>
        <p className="mt-2 text-sm" aria-live="polite">
          {status}
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Non-streaming APIs hide the whole wait behind one JSON blob. Streaming makes TTFT the thing the human feels.
      </figcaption>
    </figure>
  );
}
