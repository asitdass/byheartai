# ByHeart AI

> Learn AI. Know it by heart.

A reading-first, visual, interactive knowledge layer for modern AI engineering. This repository currently contains the **Phase 1 MVP walking skeleton**: a runnable Next.js app that demonstrates the full reading experience end-to-end, plus the complete planning docs.

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

## Adding a lesson

Create `content/learn/<category>/<slug>.mdx` with front-matter matching the `Concept` schema in [CONTENT_SCHEMA.md](./docs/CONTENT_SCHEMA.md), then run `npm run validate:content`. It appears automatically in its category, the sidebar, search targets, and the knowledge graph.
