# ByHeart AI

> Learn AI. Know it by heart.

A reading-first, visual, interactive knowledge layer for modern AI engineering. It combines a concept curriculum (`/learn`), hands-on setup guides for open-source AI tools (`/guides`), a tools directory with live GitHub stats (`/tools`), and a weekly briefing (`/whats-new`) that an automated job drafts every Monday.

## Documentation

The full product/architecture plan lives in [`docs/`](./docs):

- [MASTER_PLAN.md](./docs/MASTER_PLAN.md) - strategy, architecture, and all sections A-AM
- [CURRICULUM.md](./docs/CURRICULUM.md) - concept hierarchy, prerequisites, learning paths, "how to learn"
- [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) - reading-first tokens, color, typography, navigation model
- [CONTENT_SCHEMA.md](./docs/CONTENT_SCHEMA.md) - concept metadata, knowledge graph, lesson template, validation
- [ROADMAP.md](./docs/ROADMAP.md) - phased plan, priorities, risks, backlog

## What the skeleton includes

- **Next.js 16 + React 19 + TypeScript**, fully static (SSG) lesson pages.
- **Reading-first design system**: OKLCH tokens, light "paper" / dark "night paper" / sepia themes with halation handling, self-hosted variable fonts (Inter, Newsreader, JetBrains Mono), 17px fluid body, 46rem reading measure, reading mode + font-size controls.
- **MDX content pipeline** with typed front-matter, a knowledge graph, and reusable lesson components: `OneLine`, `MemoryCard` (❤️ Know this by heart), callouts, `Compare`, interactive `Quiz`, and a `RagPipeline` visual (with a text alternative).
- **Navigation that answers "what next?"**: top bar, left lesson sidebar, right rail (on-this-page TOC + prerequisites + related), breadcrumbs, and a prominent path-aware **Next** control.
- **SEO**: per-page metadata, canonical URLs, Open Graph/Twitter, `TechArticle` JSON-LD, programmatic `sitemap.xml` and `robots.txt`.
- **Content validation** build gate (`scripts/validate-content.ts`).
- **5 sample lessons** forming a linked chain: What is an LLM? -> What are Embeddings? -> What is Vector Search? -> What is RAG? (flagship, full 18-part template) -> What is Chunking?

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build            # validate content + production build
npm run typecheck        # tsc --noEmit
npm run validate:content # content schema + knowledge-graph checks
```

## Project structure

```
app/                 # routes: home, /learn, /learn/[category], /learn/[category]/[slug], /roadmaps, /glossary
components/
  nav/               # header, sidebar, right rail, breadcrumb, on-this-page, theme controls
  reading/           # MDX components: one-line, memory card, callouts, compare, quiz, next control
  visuals/           # interactive/diagram components (e.g. RAG pipeline)
content/learn/       # lesson MDX (source of truth for concepts)
data/                # categories, learning paths, quizzes, glossary
lib/                 # content loader, knowledge-graph utils, MDX render, TOC, types
scripts/             # content validation
docs/                # the master plan and companions
```

## Guides, tools, and the weekly radar

- **Guides** (`content/guides/*.mdx`) are hands-on setup walkthroughs for open-source AI tools. Commands are copied from each project's README and dated with `lastVerified`.
- **Tools** (`data/tools.json`) power `/tools`. Editorial fields are hand-written; stars, license, and activity come from `npm run refresh:tools`.
- **Radar** (`content/radar/YYYY-MM-DD.mdx`) is the weekly "What's new" briefing at `/whats-new`.

## Weekly automation

`.github/workflows/weekly-content.yml` runs every Monday at 05:00 UTC (and on demand from the Actions tab). It refreshes tool stats, then runs Claude Code with the `/weekly-update` skill (`.claude/skills/weekly-update/SKILL.md`) to research the past week and update the radar, tools, guides, and lessons. The result arrives as a **pull request**; nothing is published until you merge it.

One-time setup:

1. Add a repository secret named `ANTHROPIC_API_KEY` (Claude Console key) or `CLAUDE_CODE_OAUTH_TOKEN` (from `claude setup-token`, uses your Claude subscription).
2. In **Settings → Actions → General → Workflow permissions**, enable **Allow GitHub Actions to create and approve pull requests**.
3. Merge the workflow to `main` (schedules only run from the default branch), then trigger it once by hand to test.

To run the same update locally, open Claude Code in this repo and type `/weekly-update`.

## Adding a lesson

Create `content/learn/<category>/<slug>.mdx` with front-matter matching the `Concept` schema in [CONTENT_SCHEMA.md](./docs/CONTENT_SCHEMA.md), then run `npm run validate:content`. It appears automatically in its category, the sidebar, search targets, and the knowledge graph.
