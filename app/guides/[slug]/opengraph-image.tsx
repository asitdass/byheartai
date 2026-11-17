import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { OgFrame } from "@/components/seo/og-frame";
import { getGuide } from "@/lib/guides";

export const alt = "ByHeart AI setup guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function GuideOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return new ImageResponse(
    <OgFrame kicker="AI setup guide" title={guide.title} footer="byheartai.com" />,
    size,
  );
}
