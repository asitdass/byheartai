import { ImageResponse } from "next/og";
import { getCategory } from "@/data/categories";
import { getConcept } from "@/lib/content";
import { OgFrame } from "@/components/seo/og-frame";

export const alt = "ByHeart AI lesson";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function LessonOgImage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const concept = getConcept(category, slug);
  const cat = getCategory(category);
  return new ImageResponse(
    (
      <OgFrame
        kicker={cat?.title ?? "Lesson"}
        title={concept?.title ?? "ByHeart AI"}
        footer="Learn AI. Know it by heart."
      />
    ),
    { ...size },
  );
}
