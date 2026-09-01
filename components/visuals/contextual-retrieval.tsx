import { X, Check } from "lucide-react";

/*
 * Contextual retrieval: prepend a short context blurb to each chunk before
 * embedding, so ambiguous chunks become self-explanatory and retrievable.
 */
export function ContextualRetrieval() {
  return (
    <figure className="my-8">
      <div className="grid gap-4 md:grid-cols-2" role="img" aria-label="A raw chunk saying 'The refund window is 30 days' lacks context about which product. A contextualized chunk prepends 'From the Acme Pro billing policy:' so it becomes self-explanatory and easier to retrieve correctly.">
        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold" style={{ color: "oklch(0.6 0.18 25)" }}>
            <X size={16} aria-hidden /> Raw chunk
          </div>
          <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }}>
            &quot;The refund window is 30 days.&quot;
          </p>
          <p className="mt-2 text-xs" style={{ color: "var(--ink-faint)" }}>
            Ambiguous — 30 days for <em>which</em> product? Its meaning depends on a section far away in the document, so retrieval can miss or confuse it.
          </p>
        </div>

        <div className="rounded-[--radius] border p-4" style={{ background: "var(--surface)" }}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold" style={{ color: "oklch(0.55 0.15 150)" }}>
            <Check size={16} aria-hidden /> Contextualized chunk
          </div>
          <p className="rounded-[--radius-sm] p-3 text-sm" style={{ background: "var(--paper)" }}>
            <span style={{ color: "var(--accent)" }}>From the Acme Pro billing policy (Refunds):</span> &quot;The refund window is 30 days.&quot;
          </p>
          <p className="mt-2 text-xs" style={{ color: "var(--ink-faint)" }}>
            A short context blurb is prepended <em>before embedding</em>, so the chunk is self-explanatory and retrieved for the right query.
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
        Contextual retrieval adds a bit of surrounding context to each chunk before embedding — big accuracy gains for ambiguous passages.
      </figcaption>
    </figure>
  );
}
