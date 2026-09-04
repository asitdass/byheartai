"use client";

import { useState } from "react";

const clips = [
  { t: "0:00", kind: "frame", label: "Wide shot — kitchen" },
  { t: "0:08", kind: "audio", label: "Timer beeps" },
  { t: "0:12", kind: "frame", label: "Close-up — smoke" },
  { t: "0:18", kind: "ocr", label: "On-screen: 450°F" },
  { t: "0:22", kind: "audio", label: "\"It's burning!\"" },
];

/** Video is a timeline of sampled frames, audio, and on-screen text. */
export function VideoTimeline() {
  const [picked, setPicked] = useState(2);
  const c = clips[picked];

  return (
    <figure className="my-8">
      <div className="rounded-[--radius] border p-5" style={{ background: "var(--surface)" }}>
        <p className="mb-3 text-sm" style={{ color: "var(--ink-muted)" }}>
          A 30s clip is not 900 frames in the model. You <strong>sample</strong> and retrieve.
        </p>
        <div className="relative mb-4 h-3 rounded-full" style={{ background: "var(--paper)" }} role="img" aria-label="Timeline with sampled frames, audio events, and on-screen text">
          {clips.map((clip, i) => (
            <button
              key={clip.t}
              type="button"
              onClick={() => setPicked(i)}
              aria-pressed={i === picked}
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                left: `${(i / (clips.length - 1)) * 100}%`,
                background: i === picked ? "var(--accent)" : "var(--paper)",
                borderColor: "var(--accent)",
              }}
              title={clip.label}
            />
          ))}
        </div>
        <p className="rounded-[--radius-sm] p-3 font-mono text-sm" style={{ background: "var(--paper)" }} aria-live="polite">
          {c.t} · {c.kind} · {c.label}
        </p>
        <p className="mt-2 text-xs" style={{ color: "var(--ink-faint)" }}>
          Dense video in a long window is expensive and still misses a one-second beep unless you index audio separately.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Video understanding = sampled frames + audio + OCR on a timeline — not &quot;paste the MP4 into the prompt.&quot;
      </figcaption>
    </figure>
  );
}
