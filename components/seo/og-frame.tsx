import type { ReactNode } from "react";

/** Shared Open Graph / Twitter card layout (1200×630). */
export function OgFrame({
  kicker,
  title,
  footer = "byheartai.com",
}: {
  kicker: string;
  title: string;
  footer?: string;
}): ReactNode {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#f7f4ee",
        color: "#1c1917",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#5b6472" }}>
        <span style={{ color: "#c45c4a", marginRight: 12 }}>♥</span>
        ByHeart AI
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3b6ea8", marginBottom: 16 }}>
          {kicker}
        </div>
        <div
          style={{
            fontSize: title.length > 48 ? 52 : 64,
            lineHeight: 1.12,
            fontWeight: 700,
            fontFamily: "Georgia, Times New Roman, serif",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ fontSize: 22, color: "#5b6472" }}>{footer}</div>
    </div>
  );
}
