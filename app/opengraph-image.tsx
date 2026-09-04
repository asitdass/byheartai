import { ImageResponse } from "next/og";
import { OgFrame } from "@/components/seo/og-frame";

export const alt = "ByHeart AI — Learn AI. Know it by heart.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <OgFrame kicker="Curriculum" title="Learn AI. Know it by heart." footer="Free lessons · byheartai.com" />,
    { ...size },
  );
}
