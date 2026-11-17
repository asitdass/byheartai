import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ExternalLink, Github, Star } from "lucide-react";
import { formatDate, getAllGuides, getGuide, getPublishedGuides } from "@/lib/guides";
import { conceptHref, resolveConcepts } from "@/lib/content";
import { formatStars, getTool, type Tool } from "@/data/tools";
import { renderMdx } from "@/lib/mdx";
import { extractToc } from "@/lib/toc";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { OnThisPage } from "@/components/nav/on-this-page";
import { GuideCard } from "@/components/home/guide-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, absoluteUrl, toIsoDate } from "@/lib/site";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${slug}`,
    keywords: guide.tags,
    ogType: "article",
    hasRouteImage: true,
    noIndex: guide.status !== "published",
    publishedTime: toIsoDate(guide.datePublished),
    modifiedTime: toIsoDate(guide.lastVerified),
  });
}

const levelLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" } as const;

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const content = await renderMdx(guide.body);
  const toc = extractToc(guide.body).filter((t) => t.level === 2);
  const tools = guide.tools.map((id) => getTool(id)).filter((t): t is Tool => Boolean(t));
  const concepts = resolveConcepts(guide.concepts);
  const more = getPublishedGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);
  const url = absoluteUrl(`/guides/${guide.slug}`);

  return (
    <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-10 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": ["Article", "TechArticle"],
          "@id": `${url}#article`,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          headline: guide.title,
          description: guide.summary,
          url,
          image: [absoluteUrl(`/guides/${guide.slug}/opengraph-image`)],
          inLanguage: "en",
          isAccessibleForFree: true,
          proficiencyLevel: levelLabel[guide.level],
          timeRequired: `PT${guide.minutes}M`,
          keywords: guide.tags.join(", "),
          datePublished: toIsoDate(guide.datePublished),
          dateModified: toIsoDate(guide.lastVerified),
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <main className="min-w-0">
        <article className="prose guide-prose mx-auto">
          <Breadcrumb
            items={[
              { href: "/guides", label: "Guides" },
              { href: `/guides/${guide.slug}`, label: guide.title },
            ]}
          />
          <div className="mb-2 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
            <span className="grad-text">{levelLabel[guide.level]}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden /> {guide.minutes} min
            </span>
            <span>Verified {formatDate(guide.lastVerified)}</span>
          </div>
          <h1
            className="font-[family-name:var(--font-display)] leading-tight"
            style={{ fontSize: "var(--fs-h1)", fontWeight: "var(--heading-weight)", letterSpacing: "-0.02em" }}
          >
            {guide.title}
          </h1>
          <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
            {guide.summary}
          </p>
          {guide.outcome && (
            <div className="card p-4" style={{ borderLeft: "3px solid var(--g1)" }}>
              <span className="eyebrow">You will end up with</span>
              <p className="mt-1">{guide.outcome}</p>
            </div>
          )}

          {content}

          {guide.sources.length > 0 && (
            <section className="mt-12">
              <h3>Sources</h3>
              <ul>
                {guide.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      {s.title} <ExternalLink size={13} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
                Open-source tools change quickly. Commands here were checked on {formatDate(guide.lastVerified)}; if
                one fails, the project&apos;s README is the source of truth.
              </p>
            </section>
          )}
        </article>

        {more.length > 0 && (
          <section className="mx-auto mt-16 max-w-(--reading-width) lg:max-w-none">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold">Keep building</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {more.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}
      </main>

      <aside className="lesson-aside hidden lg:block">
        <div className="sticky top-20 space-y-8">
          {toc.length > 0 && <OnThisPage toc={toc} />}

          {tools.length > 0 && (
            <div>
              <h2 className="eyebrow mb-3">Tools in this guide</h2>
              <ul className="space-y-2">
                {tools.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`https://github.com/${t.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card flex items-center gap-2 px-3 py-2 text-sm"
                    >
                      <Github size={14} aria-hidden />
                      <span className="font-semibold">{t.name}</span>
                      {t.stars ? (
                        <span className="ml-auto inline-flex items-center gap-1 text-xs" style={{ color: "var(--ink-faint)" }}>
                          <Star size={11} aria-hidden /> {formatStars(t.stars)}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {concepts.length > 0 && (
            <div>
              <h2 className="eyebrow mb-3">Understand the ideas</h2>
              <ul className="space-y-1.5 text-sm">
                {concepts.map((c) => (
                  <li key={c.id}>
                    <Link href={conceptHref(c)}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
