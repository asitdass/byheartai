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
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Learn AI for Free: Lessons & Setup Guides | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: ["learn AI", "AI setup guides", "open source AI tools", "AI agents", "RAG", "MCP", "AI automation"],
  absoluteTitle: true,
  hasRouteImage: true,
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
  const topTools = [...tools].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0)).slice(0, 24);

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
    <div className="home-page mx-auto max-w-[76rem] px-4">
      <JsonLd
        data={itemListJsonLd(
          "Explore ByHeart AI",
          "Lessons, setup guides, tools, and a weekly AI briefing.",
          doors.map((d) => ({ name: d.title, path: d.href, description: d.text })),
        )}
      />

      {/* Hero */}
      <section className="home-hero grid items-center gap-8 py-10 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
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
            <span className="block text-balance">Learn AI. Run it.</span>
            <span className="block text-balance">Know it <span className="home-tagline">by heart.</span></span>
          </h1>
          <p className="mt-6 max-w-xl text-lg" style={{ color: "var(--ink-muted)" }}>
            Free lessons on how modern AI works, hands-on guides to run open-source AI on your own computer,
            and a weekly briefing on what changed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/local-ai" className="btn home-hero-primary">
              <Terminal size={16} strokeWidth={1.5} aria-hidden /> Run AI locally
            </Link>
            <Link href="/learn" className="btn">
              Start learning <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-4 gap-y-4 border-t border-(--rule) pt-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums">{s.value}</span>
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
            <span className="dim ml-auto text-xs">Local AI · Ollama</span>
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
      <nav aria-label="Explore ByHeart AI" className="py-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {doors.map((d) => (
            <Link key={d.href} href={d.href} className="home-index-link flex flex-col border-t border-(--rule) py-4">
              <span className="flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl font-semibold">
                <d.icon size={19} strokeWidth={1.5} className="shrink-0 text-(--accent)" aria-hidden />
                {d.title}
              </span>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                {d.text}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                {d.cta} <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="home-section">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Hands-on</p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">
                Build something this afternoon
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

      {/* Tools index */}
      {topTools.length > 0 && (
        <section className="home-section">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Open source</p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">The tools people are actually using</h2>
            </div>
            <Link href="/tools" className="inline-flex items-center gap-1 text-sm font-semibold">
              Full directory <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {topTools.map((t) => (
              <li key={t.id} className="min-w-0 border-b border-(--rule)">
                <Link href={`/tools#${t.id}`} className="home-index-link flex min-h-11 items-center justify-between gap-2 py-2 text-sm">
                  <span className="font-semibold [overflow-wrap:anywhere]">{t.name}</span>
                  {t.stars != null && (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-(--ink-muted) tabular-nums">
                      <Star size={12} aria-hidden /> {formatStars(t.stars)}<span className="sr-only"> GitHub stars</span>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Curriculum */}
      <section className="home-section">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Curriculum</p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">{categories.length} tracks, one idea at a time</h2>
          </div>
          <Link href="/learn" className="inline-flex items-center gap-1 text-sm font-semibold">
            Full curriculum <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = trackIcons[c.id] ?? BookOpen;
            const count = getConceptsByCategory(c.id).filter((x) => x.status === "published").length;
            return (
              <Link key={c.id} href={`/learn/${c.id}`} className="card flex items-center gap-3 p-4">
                <Icon size={20} strokeWidth={1.5} className="shrink-0 text-(--accent)" aria-hidden />
                <span className="min-w-0">
                  <span className="block font-semibold [overflow-wrap:anywhere]" style={{ color: "var(--ink)" }}>
                    {c.title}
                  </span>
                  <span className="block text-xs" style={{ color: "var(--ink-faint)" }}>
                    {`${count} ${count === 1 ? "lesson" : "lessons"}`}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Paths */}
      <section className="home-section">
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
        <section className="home-section">
          <Link href={`/whats-new/${latest.slug}`} className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <span className="inline-grid h-14 w-14 place-items-center rounded-(--radius) bg-(--surface-2) text-(--accent)">
              <Radar size={24} strokeWidth={1.5} aria-hidden />
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
