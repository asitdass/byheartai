import { ImageResponse } from "next/og";
import { categories } from "@/data/categories";
import { OgFrame } from "@/components/seo/og-frame";

export const alt = "ByHeart AI category";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function CategoryOgImage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  return new ImageResponse(
    <OgFrame kicker="Learn AI" title={cat?.title ?? "Curriculum"} footer="byheartai.com" />,
    { ...size },
  );
}
