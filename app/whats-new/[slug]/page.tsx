import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getRadarIssue, getRadarIssues } from "@/lib/guides";
import { renderMdx } from "@/lib/mdx";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, absoluteUrl, toIsoDate } from "@/lib/site";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return getRadarIssues().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const issue = getRadarIssue(slug);
  if (!issue) return {};
  return pageMetadata({
    title: issue.title,
    description: issue.summary,
    path: `/whats-new/${slug}`,
    ogType: "article",
    publishedTime: toIsoDate(issue.date),
    modifiedTime: toIsoDate(issue.date),
  });
}

export default async function RadarIssuePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const issue = getRadarIssue(slug);
  if (!issue) notFound();
  const content = await renderMdx(issue.body);
  const url = absoluteUrl(`/whats-new/${issue.slug}`);

  return (
    <div className="mx-auto max-w-[52rem] px-4 py-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "What's new", path: "/whats-new" },
          { name: issue.title, path: `/whats-new/${issue.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: issue.title,
          description: issue.summary,
          url,
          image: [absoluteUrl("/opengraph-image")],
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          datePublished: toIsoDate(issue.date),
          dateModified: toIsoDate(issue.date),
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <article className="prose mx-auto">
        <Breadcrumb
          items={[
            { href: "/whats-new", label: "What's new" },
            { href: `/whats-new/${issue.slug}`, label: formatDate(issue.date) },
          ]}
        />
        <time dateTime={issue.date} className="eyebrow">
          Week of {formatDate(issue.date)}
        </time>
        <h1
          className="font-[family-name:var(--font-display)] leading-tight"
          style={{ fontSize: "var(--fs-h1)", fontWeight: "var(--heading-weight)", letterSpacing: "-0.02em" }}
        >
          {issue.title}
        </h1>
        <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
          {issue.summary}
        </p>
        {content}
      </article>
    </div>
  );
}
