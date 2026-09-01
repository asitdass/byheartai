import { Info, Lightbulb, TriangleAlert, CircleX } from "lucide-react";
import type { ReactNode } from "react";

type CalloutKind = "note" | "tip" | "warning" | "mistake";

const config: Record<
  CalloutKind,
  { icon: typeof Info; label: string; hue: number }
> = {
  note: { icon: Info, label: "Note", hue: 250 },
  tip: { icon: Lightbulb, label: "Tip", hue: 150 },
  warning: { icon: TriangleAlert, label: "Warning", hue: 70 },
  mistake: { icon: CircleX, label: "Common mistake", hue: 20 },
};

function Callout({
  kind,
  title,
  children,
}: {
  kind: CalloutKind;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, label, hue } = config[kind];
  const tint = `oklch(0.62 0.14 ${hue})`;
  return (
    <div
      className="my-6 rounded-[--radius] border-l-[3px] py-3 pl-4 pr-4"
      style={{
        borderLeftColor: tint,
        background: `color-mix(in oklab, ${tint} 8%, var(--paper))`,
      }}
    >
      <div
        className="mb-1 flex items-center gap-2 text-sm font-semibold"
        style={{ color: tint }}
      >
        <Icon size={16} aria-hidden />
        {title ?? label}
      </div>
      <div className="[&>*+*]:mt-2">{children}</div>
    </div>
  );
}

export const Note = (p: { title?: string; children: ReactNode }) => (
  <Callout kind="note" {...p} />
);
export const Tip = (p: { title?: string; children: ReactNode }) => (
  <Callout kind="tip" {...p} />
);
export const Warning = (p: { title?: string; children: ReactNode }) => (
  <Callout kind="warning" {...p} />
);
export const CommonMistake = (p: { title?: string; children: ReactNode }) => (
  <Callout kind="mistake" {...p} />
);
