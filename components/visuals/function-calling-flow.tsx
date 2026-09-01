import { User, Bot, Wrench, Database, MessageSquare } from "lucide-react";

const steps = [
  { icon: User, label: "1. User asks", note: '"What\'s the weather in Paris?"' },
  { icon: Bot, label: "2. Model decides", note: "requests get_weather(city: \"Paris\")" },
  { icon: Wrench, label: "3. Your code runs", note: "calls the real weather API" },
  { icon: Database, label: "4. Result returns", note: "{ tempC: 18, sky: \"clear\" }" },
  { icon: Bot, label: "5. Model reads result", note: "adds it to context" },
  { icon: MessageSquare, label: "6. Natural reply", note: '"It\'s 18°C and clear in Paris."' },
];

/** Diagram of the function-calling / tool-use loop. */
export function FunctionCallingFlow() {
  return (
    <figure className="my-8">
      <div
        className="rounded-[--radius] border p-5"
        style={{ background: "var(--surface)" }}
        role="img"
        aria-label="Function calling loop: the user asks a question; the model decides to call a tool and returns a structured request; your code runs the real function; the result is returned to the model; the model reads the result; the model replies in natural language."
      >
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.label}
              className="flex items-start gap-3 rounded-[--radius-sm] border p-3"
              style={{ background: "var(--paper)" }}
            >
              <s.icon size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} aria-hidden />
              <div>
                <div className="text-sm font-semibold">{s.label}</div>
                <div className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>{s.note}</div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-center text-xs" style={{ color: "var(--ink-faint)" }}>
          Key point: the model never runs code itself — it <strong>asks</strong>, your code executes, and the result comes back.
        </p>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Function calling lets a model use real tools by emitting a structured request that your code fulfills.
      </figcaption>
    </figure>
  );
}
