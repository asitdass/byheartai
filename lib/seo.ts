import type { Metadata } from "next";
import type { Concept, LearningPath } from "@/lib/types";
import { categories } from "@/data/categories";
import { SITE_NAME, SITE_URL, absoluteUrl, organizationJsonLd, toIsoDate } from "@/lib/site";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd(
  name: string,
  description: string,
  items: { name: string; path: string; description?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function lessonJsonLd(concept: Concept) {
  const url = absoluteUrl(`/learn/${concept.category}/${concept.slug}`);
  const image = absoluteUrl(`/learn/${concept.category}/${concept.slug}/opengraph-image`);
  const published = toIsoDate(concept.datePublished);
  const modified = toIsoDate(concept.dateUpdated ?? concept.lastReviewed ?? concept.datePublished);
  const cat = categories.find((c) => c.id === concept.category);

  return {
    "@context": "https://schema.org",
    "@type": ["TechArticle", "LearningResource"],
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: concept.title,
    name: concept.title,
    description: concept.summary,
    url,
    image: [image],
    inLanguage: "en",
    isAccessibleForFree: true,
    learningResourceType: "lesson",
    educationalLevel: concept.level,
    timeRequired: concept.estimatedMinutes ? `PT${concept.estimatedMinutes}M` : undefined,
    keywords: concept.keywords.join(", "),
    datePublished: published,
    dateModified: modified,
    author: {
      "@type": "Organization",
      name: concept.author || SITE_NAME,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: cat
      ? {
          "@type": "Thing",
          name: cat.title,
        }
      : undefined,
    citation: concept.papers
      .filter((p) => p.url)
      .map((p) => ({
        "@type": "CreativeWork",
        name: p.title,
        url: p.url,
      })),
  };
}

export function courseListJsonLd(paths: LearningPath[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ByHeart AI learning paths",
    description: "Guided tracks from AI beginner through agent and systems engineering.",
    numberOfItems: paths.length,
    itemListElement: paths.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.title,
        description: p.description,
        url: absoluteUrl(`/roadmaps#${p.id}`),
        provider: organizationJsonLd,
        isAccessibleForFree: true,
        inLanguage: "en",
        educationalLevel: p.level,
        timeRequired: p.estimatedHours ? `PT${p.estimatedHours}H` : undefined,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: p.estimatedHours ? `PT${p.estimatedHours}H` : undefined,
          offers: {
            "@type": "Offer",
            category: "Free",
            price: 0,
            priceCurrency: "USD",
          },
        },
      },
    })),
  };
}

export function definedTermSetJsonLd(
  terms: { term: string; definition: string; path?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "AI glossary",
    description: "Plain-language definitions of AI terms, each linked to a full lesson.",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      ...(t.path ? { url: absoluteUrl(t.path) } : {}),
      inDefinedTermSet: absoluteUrl("/glossary"),
    })),
  };
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Skip the "%s | ByHeart AI" template (homepage). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = opts.path;
  const abs = absoluteUrl(opts.path);
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    robots: opts.noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
    openGraph: {
      type: opts.ogType ?? "website",
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      url: abs,
      locale: "en_US",
      ...(opts.ogType === "article"
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime,
            authors: [SITE_NAME],
            tags: opts.keywords,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
