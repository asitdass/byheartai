import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  Brain,
  Cable,
  Cpu,
  Database,
  Eye,
  FlaskConical,
  Gauge,
  Heart,
  Layers,
  LineChart,
  MessageSquare,
  Network,
  Radar,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Terminal,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/data/categories";
import { learningPaths } from "@/data/paths";
import { formatStars, tools } from "@/data/tools";
import { getConceptsByCategory, getPublishedConcepts } from "@/lib/content";
import { formatDate, getPublishedGuides, getRadarIssues } from "@/lib/guides";
import { SearchForm } from "@/components/nav/search-form";
import { GuideCard } from "@/components/home/guide-card";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} - ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: ["learn AI", "AI setup guides", "open source AI tools", "AI agents", "RAG", "MCP", "AI automation"],
  absoluteTitle: true,
});

const trackIcons: Record<string, LucideIcon> = {
  foundations: BookOpen,
  "machine-learning": LineChart,
  "deep-learning": Layers,
  transformers: Sparkles,
  llms: MessageSquare,
  embeddings: Network,
  "vector-databases": Database,
  rag: Search,
  agents: Bot,
  mcp: Cable,
  "context-engineering": SlidersHorizontal,
  memory: Brain,
  "multimodal-ai": Eye,
  "fine-tuning": Wrench,
  evaluation: FlaskConical,
  observability: Gauge,
  security: ShieldCheck,
  inference: Cpu,
  "ai-system-design": Boxes,
};

export default function HomePage() {
  const lessons = getPublishedConcepts();
  const guides = getPublishedGuides();
  const radar = getRadarIssues();
  const latest = radar[0];
  const topTools = [...tools].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
  const marquee = topTools.slice(0, 24);

  const stats = [
    { value: lessons.length, label: "lessons" },
    { value: guides.length, label: "setup guides" },
    { value: tools.length, label: "open-source tools" },
    { value: "Weekly", label: "updates" },
  ];

  const doors = [
    {
      href: "/learn",
      icon: BookOpen,
      title: "Understand it",
      text: `${lessons.length} short lessons from "what is AI?" to production system design, each with a visual and a quiz.`,
      cta: "Browse the curriculum",
    },
    {
      href: "/guides",
      icon: Terminal,
      title: "Set it up",
      text: "Copy-paste guides that take an open-source tool from nothing to working on your machine.",
      cta: "Open the guides",
    },
    {
      href: "/tools",
      icon: Workflow,
      title: "Automate with it",
      text: `${tools.length} open-source tools grouped by the job you want done, with live GitHub stats.`,
      cta: "Explore the tools",
    },
    {
      href: "/whats-new",
      icon: Radar,
      title: "Keep up with it",
      text: "One sourced briefing a week on what shipped and what is worth learning next.",
      cta: "Read this week",
    },
  ];

  return (
    <div className="mx-auto max-w-[76rem] px-4">
      <JsonLd
        data={itemListJsonLd(
          "Explore ByHeart AI",
          "Lessons, setup guides, tools, and a weekly AI briefing.",
          doors.map((d) => ({ name: d.title, path: d.href, description: d.text })),
        )}
      />

      {/* Hero */}
      <section className="home-hero grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0">
          {latest && (
            <Link href={`/whats-new/${latest.slug}`} className="home-hero-briefing mb-6 inline-flex max-w-full items-center gap-2 text-sm">
              <span className="shrink-0 font-semibold">Weekly briefing</span>
              <span className="truncate">{latest.title}</span>
              <ArrowRight size={16} strokeWidth={1.5} className="shrink-0" aria-hidden />
            </Link>
          )}
          <h1
            className="font-[family-name:var(--font-display)] leading-[1.02]"
            style={{ fontSize: "var(--fs-hero)", fontWeight: 700, letterSpacing: "-0.025em" }}
          >
            Learn AI. Run it. <span className="block">Know it by heart.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Clear lessons on how modern AI works, hands-on guides to set up the open-source tools everyone is
            using, and a weekly briefing so you never fall behind. All free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/guides" className="btn home-hero-primary">
              <Terminal size={16} strokeWidth={1.5} aria-hidden /> Set something up
            </Link>
            <Link href="/learn" className="btn">
              Start learning <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-3xl font-bold">{s.value}</span>
                  <span className="text-sm" style={{ color: "var(--ink-faint)" }}>
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="terminal" role="img" aria-label="Terminal showing a local AI model being installed and answering a question">
          <div className="terminal-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="terminal-body">
            <span className="dim"># 1. install a local model runner</span>
            {"\n"}$ curl -fsSL https://ollama.com/install.sh | sh
            {"\n"}
            <span className="ok">✓ ollama installed</span>
            {"\n\n"}
            <span className="dim"># 2. run an open model, fully offline</span>
            {"\n"}$ ollama run gemma4
            {"\n"}
            <span className="hl">&gt;&gt;&gt;</span> explain RAG in one sentence
            {"\n"}
            <span className="dim">Look things up first, then answer{"\n"}using what you found.</span>
            {"\n\n"}
            <span className="hl">&gt;&gt;&gt;</span> <span className="caret" aria-hidden />
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="pb-4 text-center">
        <SearchForm size="hero" />
      </section>

      {/* Four doors */}
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doors.map((d) => (
            <Link key={d.href} href={d.href} className="card flex flex-col p-6">
              <span className="grad-bg inline-grid h-10 w-10 place-items-center rounded-xl">
                <d.icon size={20} aria-hidden />
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold">{d.title}</h2>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                {d.text}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                {d.cta} <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Hands-on</p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">
                Build something <span className="grad-text">this afternoon</span>
              </h2>
            </div>
            <Link href="/guides" className="inline-flex items-center gap-1 text-sm font-semibold">
              All {guides.length} guides <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 6).map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      {/* Tools marquee */}
      <section className="py-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Open source</p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">The tools people are actually using</h2>
          </div>
          <Link href="/tools" className="inline-flex items-center gap-1 text-sm font-semibold">
            Full directory <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={`${t.id}-${i}`} className="chip" style={{ padding: "0.4rem 0.9rem", fontSize: "0.9375rem" }}>
                <span style={{ color: "var(--ink)" }} className="font-semibold">
                  {t.name}
                </span>
                <Star size={12} /> {formatStars(t.stars)}
              </span>
            ))}
          </div>
        </div>
        <ul className="sr-only">
          {marquee.map((t) => (
            <li key={t.id}>
              <Link href={`/tools#${t.id}`}>{t.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Curriculum */}
      <section className="py-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Curriculum</p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">{categories.length} tracks, one idea at a time</h2>
          </div>
          <Link href="/learn" className="inline-flex items-center gap-1 text-sm font-semibold">
            Full curriculum <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = trackIcons[c.id] ?? BookOpen;
            const count = getConceptsByCategory(c.id).filter((x) => x.status === "published").length;
            return (
              <Link key={c.id} href={`/learn/${c.id}`} className="card flex items-center gap-3 p-4">
                <Icon size={20} className="shrink-0" style={{ color: "var(--g1)" }} aria-hidden />
                <span className="min-w-0">
                  <span className="block truncate font-semibold" style={{ color: "var(--ink)" }}>
                    {c.title}
                  </span>
                  <span className="block text-xs" style={{ color: "var(--ink-faint)" }}>
                    {count} lessons
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Paths */}
      <section className="py-12">
        <p className="eyebrow">Roadmaps</p>
        <h2 className="mb-6 mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">Pick a path, follow the arrows</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((p) => (
            <Link key={p.id} href={`/roadmaps#${p.id}`} className="card block p-5">
              <span className="eyebrow">
                {p.conceptIds.length} lessons · ~{p.estimatedHours}h
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-xl font-bold" style={{ color: "var(--ink)" }}>
                {p.title}
              </span>
              <span className="mt-1 block text-sm" style={{ color: "var(--ink-muted)" }}>
                {p.description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Radar */}
      {latest && (
        <section className="py-12">
          <Link href={`/whats-new/${latest.slug}`} className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <span className="grad-bg inline-grid h-14 w-14 place-items-center rounded-2xl">
              <Radar size={26} aria-hidden />
            </span>
            <span>
              <span className="eyebrow">Weekly radar · {formatDate(latest.date)}</span>
              <span className="mt-1 block font-[family-name:var(--font-display)] text-2xl font-bold" style={{ color: "var(--ink)" }}>
                {latest.title}
              </span>
              <span className="mt-2 block" style={{ color: "var(--ink-muted)" }}>
                {latest.summary}
              </span>
            </span>
          </Link>
        </section>
      )}

      {/* Know it by heart */}
      <section
        className="mt-8 rounded-(--radius-lg) border p-8 text-center sm:p-12"
        style={{
          background: "color-mix(in oklab, var(--heart) 6%, var(--surface))",
          borderColor: "color-mix(in oklab, var(--heart) 25%, var(--rule))",
        }}
      >
        <Heart size={30} fill="var(--heart)" stroke="var(--heart)" className="mx-auto" aria-hidden />
        <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug">
          Every lesson ends with the one idea to remember, so you don&apos;t just read it. You know it by heart.
        </p>
        <Link href="/learn/foundations/what-is-ai" className="btn mt-6">
          Start with lesson one <ArrowRight size={16} aria-hidden />
        </Link>
      </section>
    </div>
  );
}
