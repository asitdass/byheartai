# ByHeart AI - Master Plan

> "Learn AI. Know it by heart."

**Document status:** v1.0 - Master Plan (strategy + architecture, no code)
**Last reviewed:** 2026-08-30
**Companion documents:**
- [CURRICULUM.md](./CURRICULUM.md) - full concept hierarchy, prerequisites, learning paths, MVP lesson list, "how to learn" procedures
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - reading-first design tokens, color, typography, motion, navigation model
- [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md) - concept metadata, knowledge graph, lesson template, quiz + directory schemas, validation
- [ROADMAP.md](./ROADMAP.md) - phased plan, priorities, risk register, engineering backlog

---

## Table of contents

- [A. Executive summary](#a-executive-summary)
- [B. Product vision (3-5 years)](#b-product-vision-3-5-years)
- [C. Target users (personas)](#c-target-users-personas)
- [D. Competitive analysis + moat](#d-competitive-analysis--moat)
- [E. Information architecture](#e-information-architecture)
- [F. Curriculum (summary)](#f-curriculum-summary)
- [G. Learning paths (summary)](#g-learning-paths-summary)
- [H. Lesson template (summary)](#h-lesson-template-summary)
- [I. Visual system](#i-visual-system)
- [J. Interactive system](#j-interactive-system)
- [K. Search architecture](#k-search-architecture)
- [L. Knowledge graph](#l-knowledge-graph)
- [M. Content architecture](#m-content-architecture)
- [N. Model directory](#n-model-directory)
- [O. Tools directory](#o-tools-directory)
- [P. SEO strategy](#p-seo-strategy)
- [Q. Structured data](#q-structured-data)
- [R. UX/UI](#r-uxui)
- [S. Design system (summary)](#s-design-system-summary)
- [T. Technical architecture](#t-technical-architecture)
- [U. Repository structure](#u-repository-structure)
- [V. Data models (summary)](#v-data-models-summary)
- [W. API design](#w-api-design)
- [X. Authentication](#x-authentication)
- [Y. Playground architecture](#y-playground-architecture)
- [Z. Security](#z-security)
- [AA. Accessibility](#aa-accessibility)
- [AB. Performance](#ab-performance)
- [AC. Testing](#ac-testing)
- [AD. Deployment](#ad-deployment)
- [AE. Cost model](#ae-cost-model)
- [AF. Monetization](#af-monetization)
- [AG. Analytics](#ag-analytics)
- [AH. Content operations](#ah-content-operations)
- [AI. Roadmap (summary)](#ai-roadmap-summary)
- [AJ. Feature prioritization](#aj-feature-prioritization)
- [AK. Engineering backlog (summary)](#ak-engineering-backlog-summary)
- [AL. MVP definition](#al-mvp-definition)
- [AM. Future vision](#am-future-vision)

---

## A. Executive summary

ByHeart AI is a **free-first, reading-first, visual and interactive knowledge layer for modern AI engineering**. It is built for one job: make a difficult AI concept easier to understand on ByHeart AI than anywhere else on the internet, and make it stick - so learners can say *"I know it by heart."*

The product borrows the **accessibility and approachability of W3Schools**, the **technical rigor of MDN**, and the **calm, premium reading experience** of the best modern editorial and documentation sites - then adds a differentiator almost no AI learning site does well: an explicit **knowledge graph** (prerequisites -> concept -> next -> related) that removes the single biggest pain of self-teaching AI, *"what do I read, and what do I read next?"*

Three commitments define everything:

1. **Reading experience above all.** A paper-like light mode and a genuinely comfortable dark mode ("night paper"), a strict reading measure (~65-70 characters per line), 17px fluid body type, and zero clutter in the reading column. Reading is the product; everything else supports it.
2. **A world-class, prerequisite-driven curriculum.** Not a pile of articles - an ordered, self-contained path from zero-knowledge beginner to production AI engineer, where every concept states what you must know first, how to learn it, and what comes next.
3. **Understand-anything explanations.** Every concept is explained with a one-line answer, a beginner-level explanation, a mental model, a real-world analogy, an interactive visual, a technical deep-dive, working code, common mistakes, and a memory card - so no concept is ever left half-explained.

The MVP is intentionally small and sharp: **~40 flagship lessons**, a beautiful reading UI with dark/light mode, static full-text search, quizzes, a glossary, and best-in-class SEO - all runnable at **near-zero cost** on static hosting. The architecture (Next.js 16, MDX content, structured metadata separated from prose) is designed so the platform can grow into interactive visualizations, playgrounds, model/tool directories, progress tracking, and an AI tutor **without a rewrite**.

**The test every page must pass:** *Can someone understand this AI concept better after visiting ByHeart AI than from a normal article?* If not, the page is not done.

---

## B. Product vision (3-5 years)

In 3-5 years, ByHeart AI is the **default place people send someone who wants to actually understand AI** - the "MDN of AI engineering." It is:

- **The canonical concept reference for AI engineering.** Search "what is HNSW" or "RAG vs fine-tuning" and get the clearest explanation on the web, with an interactive visual and links to prerequisites and next steps.
- **A visual knowledge graph** you can traverse: click any concept and see what it depends on, what it enables, and what it's confused with.
- **A set of guided, resumable learning paths** for every audience (absolute beginner, LLM developer, AI engineer, agent engineer, AI systems engineer, research foundations).
- **A living directory** of models and tools whose volatile data updates independently of the stable teaching content, so lessons never rot when a new model ships.
- **A hands-on layer**: interactive simulators and browser playgrounds that let you *manipulate* concepts (temperature, chunk size, top-k, attention weights) and see the effect instantly.
- **A trustworthy, human-reviewed source** with visible authorship, review dates, and citations - content that both humans and AI-search systems cite because it is genuinely the best explanation available.

The north-star outcome: a generation of engineers who say **"I learned it on ByHeart AI, so I know it by heart."**

---

## C. Target users (personas)

### 1. "Maya" - the curious beginner (0 coding knowledge)
- Wants to understand AI words she hears everywhere (LLM, RAG, agent) without feeling stupid.
- Needs: plain-language one-liners, analogies, visuals, a clear starting point, and a single obvious "next" button. No jargon walls.
- Success: finishes the Beginner path and can explain "what is an embedding" to a friend.

### 2. "Dev Raj" - the experienced software engineer, new to AI
- Strong programmer, wants to become an AI/LLM developer fast, hates fluff.
- Needs: accurate technical depth, working code, comparisons (RAG vs fine-tuning), "when NOT to use," and a path that skips what he already knows.
- Success: ships a RAG app and an agent after following the LLM Developer + AI Engineer paths.

### 3. "Sara" - the working ML/AI engineer (reference user)
- Already builds systems; uses ByHeart AI as a fast, correct reference and for onboarding teammates.
- Needs: precise definitions, up-to-date model/tool directory, system-design pages, deep-dives on eval/observability/security.
- Success: bookmarks ByHeart AI as her go-to reference and shares lessons in code review.

### 4. "Prof. Lin" - educator / team lead
- Teaches or onboards others; wants a trustworthy, well-sequenced, citable resource.
- Needs: clear prerequisite maps, learning paths, quizzes, E-E-A-T signals (authors, reviewers, sources).
- Success: assigns ByHeart AI paths as course material.

### 5. "Alex" - the AI-search / SERP visitor (intent-driven)
- Arrives from Google/AI Overviews for one question ("what is KV cache?").
- Needs: an answer-first page that resolves the query in seconds, then invites deeper learning.
- Success: gets the answer, stays for the visual, subscribes to a path.

**Design implication:** the product must serve *both* the linear learner (paths) and the random-access visitor (search/SEO) equally well. The lesson template and knowledge graph are designed for both.

---

## D. Competitive analysis + moat

| Competitor | Strength | Weakness | ByHeart AI opportunity |
| --- | --- | --- | --- |
| W3Schools | Approachable, huge reach, try-it editors, great SEO | Shallow, dated design, weak on modern AI, thin explanations | Same approachability + real depth + modern AI + premium reading UX |
| MDN | Authoritative, deep, trusted | Reference-style, not a guided learning journey; not AI-focused | Guided paths + prerequisites + AI focus with MDN-level trust |
| Hugging Face Learn | Practical, current, community | Course-shaped, uneven depth, not a random-access concept reference | Concept-graph reference + consistent lesson template |
| DeepLearning.AI | High-quality courses, brand | Video/course-gated, linear, not a quick reference | Free, text-first, instantly searchable, answer-first |
| Microsoft/Google Learn | Breadth, credibility | Product-biased, dense, corporate UX | Vendor-neutral concepts-first, cleaner UX |
| Vendor docs (OpenAI, Anthropic, LangChain, vector DBs) | Accurate, authoritative for their product | Teach the product, not the concept; fragmented across sites | Teach the *concept* first, then map to products; one unified site |
| YouTube | Visual, engaging | Not searchable/citable at concept granularity, quality varies, no path | Structured, citable, searchable, consistent quality |
| AI blogs / SEO farms | Volume, keyword coverage | Thin, often wrong, no interactivity, no trust | Original, accurate, interactive, human-reviewed |

**The moat (compounding, hard to copy):**

> **A visual AI knowledge graph + interactive concept simulators + beginner-friendly explanations + engineering-grade depth, unified in one calm, fast, reading-first site.**

Each layer reinforces the others: the knowledge graph powers navigation, search, recommendations, roadmaps, and internal linking (which drives SEO); the consistent lesson template makes every page trustworthy and extractable by AI search; the interactive visuals are original assets no scraper can duplicate; and human review builds the E-E-A-T that AI-mediated discovery rewards. The moat is **content quality x structure x originality**, which cannot be faked at scale.

---

## E. Information architecture

Top-level routes (built incrementally - see [ROADMAP.md](./ROADMAP.md); not all ship in MVP):

```
/                         Homepage
/learn                    Curriculum hub (all categories)
  /learn/foundations
  /learn/machine-learning
  /learn/deep-learning
  /learn/transformers
  /learn/llms
  /learn/embeddings
  /learn/vector-databases
  /learn/rag
  /learn/agents
  /learn/mcp
  /learn/context-engineering
  /learn/memory
  /learn/multimodal-ai
  /learn/fine-tuning
  /learn/evaluation
  /learn/observability
  /learn/security
  /learn/inference
  /learn/ai-system-design
/roadmaps                 Learning paths (Beginner ... AI Systems)
/models                   Living model directory (volatile data)
/tools                    Living tool/tech directory (volatile data)
/compare                  Comparison pages (RAG vs Fine-tuning, HNSW vs IVF, ...)
/glossary                 Full AI glossary (each term -> its lesson)
/playground               Interactive code + concept sandboxes (later phase)
/projects                 Hands-on build-along projects (later phase)
/blog                     Updates, "what changed" notes (later phase)
/about                    Mission, editorial process, authors
```

**URL rules:** short, descriptive, stable, lowercase-hyphenated, never `?id=`. Concept lessons live under their category: `/learn/rag/what-is-rag`, `/learn/vector-databases/hnsw`. URLs are treated as a permanent contract; redirects are added rather than URLs changed. i18n reserved as a future path prefix (`/hi/learn/...`) mapped to the same concept IDs.

**Navigation model (fixes the "what do I read next" problem):**
- **Top bar:** logo, global search, Learn, Roadmaps, Models, (Playground later), theme toggle.
- **Left sidebar:** current category + ordered lesson list + progress markers.
- **Right rail:** "On this page" (in-page TOC) + **Prerequisites** + **Related** + **Next**.
- **Everywhere:** breadcrumb ("you are here") and a prominent **Next lesson** control so there is always exactly one obvious next step.
- **Mobile:** sidebars collapse into one clean drawer; reading column goes full width. Details in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

---

## F. Curriculum (summary)

The full hierarchy, per-concept prerequisites, MVP lesson list, and "how to learn" procedures are in [CURRICULUM.md](./CURRICULUM.md). At a glance, the learning universe flows:

```
Foundations -> Classical ML -> Deep Learning -> Transformers -> LLMs
   -> Embeddings -> Vector Databases -> RAG -> Agents -> MCP
   -> Context Engineering -> Memory -> Multimodal
   -> Fine-tuning -> Evaluation -> Observability -> Security
   -> Inference/Infrastructure -> AI System Design
```

**MVP curriculum = ~40 flagship lessons** spanning "What is AI?" through "Agentic RAG," chosen so a zero-knowledge learner and an experienced developer both have a *complete, self-contained* path. Content is split into **stable concepts** (taught in MDX; change slowly) and **volatile facts** (model capabilities, pricing, framework features; live in structured data and update independently).

---

## G. Learning paths (summary)

Six guided, resumable paths (full ordered lists in [CURRICULUM.md](./CURRICULUM.md)):

1. **AI Beginner** - AI -> ML -> Deep Learning -> Neural Networks -> Transformers -> LLMs
2. **LLM Developer** - LLMs -> Tokens -> Prompting -> Structured Outputs -> Embeddings -> RAG -> Tools -> Agents
3. **AI Engineer** - LLMs -> Embeddings -> Vector DB -> RAG -> Agents -> Evaluation -> Observability -> Deployment
4. **AI Systems Engineer** - Models -> Inference -> GPUs -> Serving -> Caching -> Routing -> Scaling -> Cost
5. **AI Agent Engineer** - LLMs -> Tools -> Function Calling -> Agent Loops -> Memory -> MCP -> Evaluation -> Security
6. **AI Research Foundations** - Mathematics -> ML -> Deep Learning -> Transformers -> Training -> Optimization -> Papers

Each path is a linear track with a persistent progress indicator and a guaranteed single "next step," directly attacking the navigation/pathing UX failures of typical learning sites.

---

## H. Lesson template (summary)

Every concept page follows the **same fixed structure** so nothing is ever missing and readers build a reliable mental habit (full spec in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)):

1. One-line answer
2. Explain like I'm new to AI
3. Visual / interactive explanation
4. Mental model
5. How it works (step by step)
6. Real-world example / analogy
7. Technical explanation (accurate terminology)
8. Code (minimal working example)
9. Interactive playground (where practical)
10. Common mistakes
11. When to use it
12. When NOT to use it
13. Alternatives
14. Comparison
15. ❤️ Know this by heart (memory card)
16. Quick quiz (3-5 questions)
17. Related concepts (prerequisites / next / related)
18. Further reading (official sources)

**The "how to learn" procedure** a learner follows on each page: check prerequisites -> read the one-liner + mental model -> manipulate the visual -> read how-it-works -> run the code -> take the quiz -> review the memory card -> click Next.

---

## I. Visual system

Visuals are a primary differentiator, not decoration. A **reusable visualization component library** (details in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) and [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)) provides consistent, accessible, lazy-loaded diagrams:

- **Static/diagrammatic:** flow diagrams, architecture diagrams (User -> App -> Retriever -> Vector DB -> LLM -> Answer), sequence diagrams. Authored in Mermaid or as SVG React components.
- **Interactive simulators (client-side, cheap, deterministic):** token visualizer, embedding/vector-space explorer, attention visualizer, RAG pipeline simulator (document -> chunk -> embed -> retrieve -> rerank -> generate), agent-loop simulator (goal -> plan -> tool -> result -> next -> answer), vector-search simulator, neural-network visualizer, transformer visualizer.

**Rules:** never make information available *only* through animation or color; every visual has a text alternative and respects `prefers-reduced-motion`; heavy libraries (React Flow, Three.js) are code-split and loaded only on pages that use them.

---

## J. Interactive system

Wherever it aids understanding, learners can **manipulate a parameter and instantly see the effect**: temperature, top-p, top-k, chunk size, chunk overlap, similarity threshold, embedding dimensions, retrieval strategy, reranking on/off, context size, attention weights.

**Cost/complexity discipline:**
- Prefer **client-side computation, deterministic simulations, and pre-computed data** over live model calls.
- Use **WebAssembly / small local models** for things like tokenization where feasible.
- Use **real model APIs only where they genuinely improve learning**, behind optional user-provided keys or a rate-limited backend - never required to grasp a basic concept.

---

## K. Search architecture

Search is a core feature, not an afterthought.

- **MVP:** [Pagefind](https://pagefind.app/) - a static, build-time search index that runs entirely in the browser. Zero backend, zero cost, works on static hosting, supports typo tolerance and fast prefix/substring matching. Indexes lesson titles, headings, body, and metadata (synonyms/abbreviations added to front-matter keywords so "vector db" finds "Vector Database," "RAG" finds "Retrieval-Augmented Generation").
- **Command-palette UX:** a `Cmd/Ctrl-K` overlay returning concept pages with definition, category, level, and prerequisites - so search doubles as navigation.
- **Filtering:** by category and by level (beginner/intermediate/advanced).
- **Upgrade path:** when scale/relevance demands it, move to a hosted index (Typesense/Meilisearch/Algolia). Later, an optional **semantic concept search** powered by embeddings of concept metadata (great as a live demo of the product's own subject matter).

---

## L. Knowledge graph

The knowledge graph is the backbone that powers navigation, recommendations, roadmaps, related concepts, and internal linking. Every concept declares its relationships (full schema in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)):

```
concept:
  prerequisites: []      # must understand first
  next: []               # natural continuation
  related: []            # adjacent concepts
  alternatives: []       # other ways to solve the same problem
  confusedWith: []       # commonly conflated concepts
  frameworks: []         # tools that implement it
  products: []           # vendor products
  papers: []             # primary sources
```

The graph is validated at build time (no dangling references, no cycles in `prerequisites`) and rendered as: the prerequisite/next rails, "what should I learn next?" recommendations, path generation, and eventually an interactive visual graph explorer.

---

## M. Content architecture

**Principle: separate CONTENT from UI from DATA from VISUALS from SEARCH from SEO.** (Full schemas in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md).)

- **Concept metadata** -> structured front-matter / typed records (`id`, `slug`, `title`, `category`, `level`, `prerequisites`, `related`, `next`, `status`, `author`, `reviewer`, `lastReviewed`, `version`).
- **Lesson prose** -> **MDX** (Markdown + embedded React components for callouts, memory cards, visuals, quizzes).
- **Quizzes** -> structured JSON/MDX metadata (reusable component renders them).
- **Visuals** -> React components (referenced by name from MDX).
- **Models & tools** -> **separate structured data** (TypeScript/JSON records), never hardcoded inside lessons, because they change rapidly.

**Why MDX (vs a hosted CMS):** version control + GitHub PR review + component reuse inside content + zero CMS cost + full ownership. It fits a solo developer using Cursor and an editorial PR workflow. A headless CMS is a later option if non-technical contributors need it; the content model is designed so a CMS could back the same schema without app changes.

**Content lifecycle metadata** (published/updated/reviewed dates, version, deprecation + migration notes) is first-class so rapidly-changing AI knowledge never silently rots.

---

## N. Model directory

A **living model database** kept entirely separate from lesson MDX (see schema in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md)). Each model record: provider, family, modality (input/output), context window, reasoning capability, tool use, structured output, release date, licensing/availability, API availability, approximate pricing, strengths, weaknesses, alternatives, official docs. Rendered at `/models` with filtering and comparison. **No specific model list is baked into architecture** - records are data and update independently on their own cadence.

---

## O. Tools directory

A **living directory** at `/tools` for vector databases, AI frameworks, agent frameworks, observability tools, model providers, inference engines, embedding providers, rerankers, evaluation tools, and AI security tools. Each record clearly tags its **type** (Concept vs Framework vs Library vs Product vs Platform vs Model vs Service) so learners never confuse a vendor implementation with the underlying concept. Same separation principle as the model directory.

---

## P. SEO strategy

Grounded in **Google's 2026 guidance** (verified 2026): there are *no special AI-search tricks* - foundational SEO plus genuinely useful, original, people-first content is what wins in both classic Search and AI Overviews/AI Mode.

**Do:**
- **Answer-first pages:** every lesson opens with a direct one-line answer (great for humans and for extraction into AI Overviews).
- **Non-commodity, original content:** unique explanations, first-hand examples, original diagrams, interactive visuals - not recycled summaries.
- **Clean technical structure:** semantic headings, breadcrumbs, descriptive alt text, clean stable URLs, fast pages.
- **Strong internal linking** driven by the knowledge graph (prerequisites/related/next) to build topical authority.
- **Topic clusters** rather than one giant page per topic (e.g. `/learn/rag/*` interlinked - see [CURRICULUM.md](./CURRICULUM.md)).
- **Per-page metadata:** unique title, meta description, canonical URL, Open Graph + Twitter/X cards, sitemap inclusion, robots directives.
- **E-E-A-T:** visible author, reviewer, last-reviewed date, and cited primary sources on every page.
- **Programmatically generated sitemaps** (index + content + models + glossary + roadmaps).

**Don't:** no `llms.txt`/AI-specific chunking gimmicks, no keyword stuffing, no thin AI-generated pages to farm keywords, no schema that doesn't match visible content.

**Search-intent coverage** per major topic: informational ("what is RAG"), learning ("how does RAG work"), comparison ("RAG vs fine-tuning"), implementation ("how to implement RAG"), troubleshooting ("why is my RAG returning wrong docs"), evaluation ("how to evaluate RAG") - each a genuinely useful standalone page only where it has standalone value.

---

## Q. Structured data

Implemented as JSON-LD, only where it reflects visible content:

- `Organization` + `WebSite` (with `SearchAction`) - site-wide.
- `BreadcrumbList` - every lesson.
- `Article` / `TechArticle` - lessons (with author, datePublished, dateModified).
- `Course` - learning paths/roadmaps.
- `ItemList` - category and roadmap index pages.
- `FAQPage` - only on pages with a genuine, visible FAQ.
- `SoftwareApplication` - tool directory entries where appropriate.

No schema is added purely to manipulate ranking; all structured data mirrors on-page content.

---

## R. UX/UI

**Design intent:** educational, modern, intelligent, calm, clean, developer-friendly, playful-but-professional - explicitly *not* a SaaS dashboard, not a ChatGPT clone, not a boring docs site. The heart (❤️) is a subtle recurring brand motif used with restraint (primarily the "Know this by heart" memory card). Full tokens in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

**Homepage:**
- Hero: "Learn AI. Know it by heart." + one-line value prop.
- Prominent search: "What do you want to learn?" with example queries.
- "Explore AI" category grid (Foundations, LLMs, RAG, Vector DBs, Agents, MCP, AI Systems).
- "Learn by visualizing" (interactive demo teasers).
- "Choose your path" (the six paths).
- "Popular concepts," "Learn by building" (projects), and a "Know it by heart" memory-card showcase.

**Lesson page (desktop):** top nav -> breadcrumb -> title -> one-line definition -> visual -> simple explanation -> technical explanation -> code -> interactive demo -> quiz -> ❤️ memory card -> related -> next; left sidebar (category/lessons/progress) and right rail (on-this-page/prerequisites/related). A **Reading Mode** hides both sidebars for maximum focus.

**Lesson page (mobile):** compact header, collapsible nav drawer, full-width reading column, sticky progress/next control, horizontally scrollable code, touch-friendly diagram controls.

---

## S. Design system (summary)

Full spec in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). Headlines:

- **Type:** Newsreader (serif display), Inter (body), JetBrains Mono (code) - self-hosted variable fonts, 0 CDN calls. Body 17px fluid; reading measure ~65-70ch (~46rem column); line-height 1.7 body / ~1.2 headings.
- **Color:** OKLCH tokens for perceptual symmetry between modes. **Light = "paper"** (warm off-white, near-black ink, one calm accent). **Dark = "night paper"** (soft off-black ~#171717 surface, ~#e5e5e5 ink, slightly reduced body weight + subtle letter-spacing to counter halation). Optional sepia. All body text >= WCAG 2.2 AA (>=4.5:1).
- **Spacing/rhythm:** generous margins, vertical rhythm tuned for long-form reading, no ads or clutter in the reading column.
- **Motion:** purposeful, subtle, always gated by `prefers-reduced-motion`.
- **Controls:** theme (light/dark/sepia) + font-size preference persisted locally; no login required.

---

## T. Technical architecture

Chosen for **August 2026** with reasoning, alternatives, and migration path.

### Frontend / framework: **Next.js 16 (App Router, React 19)**
- **Why:** Next.js 16 (stable Oct 2025) makes **Cache Components + Partial Prerendering (PPR)** the default model: a static, instantly-served shell (perfect for reading + SEO) with dynamic "holes" streamed via Suspense for the few personalized/interactive parts. This uniquely serves *both* our static content today and heavy interactivity (playgrounds, AI tutor) later **without a migration**. Turbopack for fast builds; `proxy.ts` replaces middleware.
- **Alternatives considered:** **Astro** (lighter for pure content, but interactivity-heavy roadmap would eventually force a migration); **plain Vite/React SPA** (bad for SEO/first-load); **Docusaurus/Nextra** (docs-shaped, less control over a bespoke reading UX and custom interactive components).
- **Migration path:** none expected; if hosting changes, the static shell is portable and PPR degrades gracefully to SSG/SSR.

### Styling: **Tailwind CSS v4**
- **Why:** CSS-first `@theme` with design tokens (incl. OKLCH), tiny production CSS, fast iteration, easy to enforce a strict reading design system. Alternative (vanilla CSS modules) is viable but slower to keep consistent.

### Content: **MDX** via a docs-oriented pipeline (Fumadocs-style)
- **Why:** prose + reusable components in one file, Git/PR review, type-safe front-matter, build-time validation. Alternatives: raw Markdown (no components), headless CMS (cost/lock-in, later option).

### Rendering libraries
- **Shiki** for code highlighting (build-time, zero client JS, accurate grammars).
- **KaTeX** for math (fast, no runtime MathJax weight).
- **Mermaid** (authored diagrams) + **React Flow** (interactive graphs/simulators), both lazy-loaded per page. **Three.js/WebGL only** on the rare page that needs it.

### Search: **Pagefind** (static) -> hosted index later (see [K](#k-search-architecture)).

### Deployment: **Vercel** (first-class Next 16 support, preview deploys, edge CDN), with **Cloudflare Pages/Workers** documented as a low-cost alternative. Details in [AD](#ad-deployment).

### Analytics & monitoring: **Plausible or Umami** (privacy-friendly, no cookie banner) + lightweight error monitoring (e.g. Sentry free tier) added when traffic warrants.

### Backend: **none at MVP.** Introduce small serverless API routes only when required (playground execution proxy, optional AI tutor, saved progress sync) - see [W](#w-api-design).

```
Reader
  -> CDN (static shell, PPR)
     -> Next.js 16 (App Router, RSC)
        -> MDX content (build-time) + structured data (models/tools/quiz)
        -> Pagefind index (client-side search)
        -> [later] serverless APIs (playground, tutor, progress)
```

---

## U. Repository structure

Proposed structure (for the future build phase; this document lives in `docs/`):

```
byheartai/
  app/                      # Next.js App Router routes
    (marketing)/            # homepage, about
    learn/[category]/[slug] # lesson pages
    roadmaps/
    models/
    tools/
    compare/
    glossary/
    playground/             # later
    sitemap.ts, robots.ts
  components/
    reading/                # prose, callouts, memory card, code, TOC
    nav/                    # top bar, sidebar, right rail, breadcrumbs
    visuals/                # diagrams + interactive simulators
    quiz/
    search/                 # command palette
  content/
    learn/<category>/<slug>.mdx
    glossary/
  data/
    concepts.ts             # knowledge-graph metadata + relationships
    paths.ts                # learning paths
    models/                 # model directory records
    tools/                  # tool directory records
  lib/                      # content loading, validation, seo, graph utils
  styles/                   # tailwind theme / tokens
  public/                   # fonts (self-hosted), images, og
  scripts/                  # content validation, sitemap, link checker
  tests/
  docs/                     # THIS master plan + companions
```

---

## V. Data models (summary)

Full schemas in [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md). Core entities:
- **Concept** (metadata + knowledge-graph relationships + lifecycle fields).
- **Lesson** (MDX body keyed to a Concept).
- **Quiz** (questions/answers/explanations).
- **LearningPath** (ordered concept IDs + audience).
- **Model** (volatile model-directory record).
- **Tool** (volatile tool-directory record, typed as concept/framework/library/product/etc.).
- **GlossaryTerm** (short definition + link to full lesson).

No relational database at MVP - all of the above are typed, version-controlled files validated at build time.

---

## W. API design

**MVP: no custom APIs** (fully static + client-side search). Introduce minimal serverless endpoints only as features require them:

- `POST /api/playground/run` (later): proxy for optional model-API calls using a user-supplied key or rate-limited server key; never executes untrusted code on the main server (see [Y](#y-playground-architecture)).
- `POST /api/tutor` (later): AI tutor grounded in ByHeart content via retrieval.
- `GET/PUT /api/progress` (later, only with accounts): sync learning progress.

All future APIs: typed, rate-limited, input-validated, no secrets on the client.

---

## X. Authentication

**None in MVP** - the site is fully useful anonymously, with progress/bookmarks stored in `localStorage`. Introduce auth **only when** cross-device sync, saved roadmaps, or quiz history genuinely require it. When added: OAuth (GitHub, Google) + email, minimal PII, progress as the first synced entity. Reading is *never* gated behind login.

---

## Y. Playground architecture

Later-phase, layered by cost/risk:
1. **Deterministic client-side simulations** (default) - no execution, no keys.
2. **Client-side code execution in a sandbox** (e.g. Pyodide/WebAssembly for Python, JS in a Web Worker) for safe, offline examples.
3. **Server-executed / model-API operations** - only when necessary, isolated in ephemeral sandboxes, never running arbitrary user code on the main server; optional user API keys stored client-side, or a rate-limited server key. Never require payment to understand a basic concept.

---

## Z. Security

- **Headers/CSP:** strict Content-Security-Policy (self-hosted fonts mean `font-src 'self'`), `X-Content-Type-Options`, `Referrer-Policy`, HSTS.
- **MDX safety:** content is authored in-repo and reviewed via PR; no arbitrary remote MDX; sanitize any future user-generated content.
- **XSS/injection:** React's default escaping + no `dangerouslySetInnerHTML` on untrusted input.
- **Secrets:** never in the client; server-only env vars; API keys for optional model calls handled per [Y](#y-playground-architecture).
- **Rate limiting** on any future API route.
- **Playground isolation** and least-privilege for any code execution.
- Security is also a **curriculum topic** (`/learn/security`) taught defensively (prompt injection, tool abuse, RAG poisoning, agent permission boundaries).

---

## AA. Accessibility

Target **WCAG 2.2 AA**:
- Semantic HTML, logical heading order, landmarks, skip links.
- Full keyboard navigation incl. the search command palette; visible focus states.
- Color contrast >= 4.5:1 body / 3:1 large text in both themes (guaranteed via OKLCH tokens).
- `prefers-reduced-motion` honored for all animation; no info conveyed by motion or color alone.
- Text alternatives for every diagram/visualization; accessible, labeled interactive controls.
- Screen-reader-tested navigation and lesson flow.

---

## AB. Performance

Goals: feel **instant**.
- **Static shell via PPR/SSG**, minimal client JS, aggressive code-splitting; heavy visual libs loaded only where used.
- **Self-hosted variable fonts** with `font-display: swap` and preloading; no third-party CDN round-trips.
- Optimized images (`next/image`, AVIF/WebP), lazy-loaded below the fold and for playgrounds.
- CDN edge delivery; long-cache immutable assets.
- Budget: strong Core Web Vitals (LCP < 2.0s on 4G, CLS ~0 via fixed-size skeletons, INP well within "good").
- No Three.js/large bundles shipped to lessons that don't need them.

---

## AC. Testing

- **Unit tests** (lib/content utilities, graph validation).
- **Component tests** (reading components, quiz, nav).
- **Content validation script** (build gate): missing title/description/slug, invalid concept IDs, broken internal links, dangling/circular prerequisites, missing metadata.
- **Broken-link + SEO checks** (canonical, meta, structured-data presence).
- **Accessibility tests** (axe in CI on key templates).
- **Build tests** + **sitemap tests**.
- **Visual regression** on core templates (later).

---

## AD. Deployment

- **Environments:** local dev (Turbopack) -> preview deploys per PR (Vercel) -> production.
- **CI:** typecheck, lint, content validation, tests, build; block merge on failure.
- **Hosting:** Vercel (primary) / Cloudflare (alternative). Static-first output keeps it portable.
- **Releases:** trunk-based with preview URLs; content changes ship via PR with the editorial checklist ([AH](#ah-content-operations)).

---

## AE. Cost model

- **MVP: ~$0/month** - static hosting free tier, Pagefind (client-side), self-hosted fonts, privacy analytics free tier, GitHub for content. Only cost is the domain.
- **Growth:** paid hosting tier as traffic grows; hosted search index (Typesense/Algolia) when needed; error monitoring; optional model-API spend (metered, behind features).
- **Principle:** infrastructure cost scales *after* traffic, never before. No expensive AI infra to teach concepts.

---

## AF. Monetization

Core educational content stays **free forever**. Revenue, in trust-preserving order:
1. **Tasteful display ads** - never in the reading column, never between diagram and explanation, never deceptive; protect Core Web Vitals.
2. **Sponsorships** - clearly labeled, relevant AI companies sponsoring sections/tools/labs.
3. **Affiliate partnerships** - only genuinely useful products (AI APIs, cloud, vector DBs, books, courses).
4. **Premium (later)** - advanced labs, cloud coding environments, AI tutor, certificates, progress analytics, team learning. **Fundamental knowledge is never paywalled.**

---

## AG. Analytics

Privacy-first, minimal PII. Track: pageviews, unique visitors, search queries + zero-result searches, popular concepts, search exits, lesson/quiz completion, path progression, internal navigation, popular visualizations, device, country, language. **Do not optimize solely for pageviews** - weight learning outcomes (completion, progression, search success).

---

## AH. Content operations

**Editorial workflow (AI-assisted, human-owned):**
```
Research (primary sources) -> outline -> AI-assisted draft
  -> technical verification -> human edit -> visual creation
  -> code testing -> SEO review -> publish
```
- **Never publish AI-generated content blindly.** Every page has an author, a reviewer, sources, and a last-reviewed date.
- **Source policy:** prefer official docs, papers, and primary technical sources over SEO blogs; verify volatile facts against current official docs.
- **Governance:** defined processes for new concepts, updates, deprecations, model/tool directory refreshes, broken links, and community corrections.
- **Quality checklist** per lesson: accuracy, clarity (beginner), depth (developer), originality, visual quality, working code, real search intent, internal linking, freshness.
- **Versioning:** published/updated/reviewed dates + content version; deprecated concepts carry migration notes ("what changed").

---

## AI. Roadmap (summary)

Full phase detail, success criteria, and risks in [ROADMAP.md](./ROADMAP.md).

- **Phase 0:** research + architecture (this document).
- **Phase 1 (MVP):** reading-first foundation - homepage, nav, search, categories, ~40 lessons, dark/light, code, diagrams, quizzes, related concepts, breadcrumbs, SEO, sitemap, robots, analytics, glossary.
- **Phase 2:** expand curriculum.
- **Phase 3:** interactive visualizations/simulators.
- **Phase 4:** roadmaps + knowledge-graph explorer.
- **Phase 5:** playgrounds + projects.
- **Phase 6:** model/tool directories.
- **Phase 7:** accounts + progress sync.
- **Phase 8:** AI tutor.
- **Phase 9:** community.
- **Phase 10:** monetization + scale.

---

## AJ. Feature prioritization

- **P0 (MVP, must-have):** reading-first lesson pages + template, dark/light "paper" theming, ~40 lessons, top/side/right navigation + breadcrumbs + next control, prerequisites/related from the graph, static search, quizzes, glossary, SEO + structured data + sitemap/robots, accessibility baseline, performance baseline, content validation.
- **P1 (important, soon):** interactive simulators for flagship concepts, learning-path tracks with progress, comparison pages, expanded curriculum, model/tool directories.
- **P2 (useful later):** knowledge-graph explorer, playgrounds, projects, accounts/progress sync, hosted/semantic search.
- **P3 (future):** AI tutor, community, certificates, localization, advanced monetization.

**Build now / Build later / Watch / Avoid** table is in [ROADMAP.md](./ROADMAP.md).

---

## AK. Engineering backlog (summary)

Full epics -> features -> tasks in [ROADMAP.md](./ROADMAP.md). MVP epics:
1. Project + design-system foundation (tokens, fonts, theming, layout shell).
2. Content pipeline (MDX + metadata schema + validation).
3. Lesson template + reading components.
4. Navigation + knowledge-graph rails.
5. Search (Pagefind + command palette).
6. Quizzes + glossary.
7. SEO + structured data + sitemaps.
8. Accessibility + performance + testing + CI/deploy.
9. Author the ~40 MVP lessons.

---

## AL. MVP definition

**Exactly what ships first:**
- Homepage (hero, search, category grid, paths teaser).
- Reading-first lesson pages implementing the full 18-part template.
- ~40 flagship lessons (list in [CURRICULUM.md](./CURRICULUM.md)) - self-contained beginner-to-capable path.
- Category hubs + glossary.
- Navigation: top bar, left sidebar, right rail (on-this-page + prerequisites + related), breadcrumbs, prominent Next control.
- Dark/light "paper" theming + font-size control, persisted locally; Reading Mode.
- Static search (Pagefind) + `Cmd/Ctrl-K` palette.
- Quizzes per lesson; ❤️ memory cards.
- SEO: per-page metadata, canonical, OG/Twitter, JSON-LD, programmatic sitemap, robots.
- Accessibility (WCAG 2.2 AA baseline) + performance (strong CWV) + content validation in CI.
- Privacy analytics.

**Explicitly NOT in MVP:** accounts, backend services, live playgrounds, AI tutor, community, model/tool directories at scale, localization, monetization, complex CMS, any microservices/Kubernetes/custom infra.

---

## AM. Future vision

ByHeart AI becomes the **visual, interactive, trustworthy knowledge layer for AI engineering** - a living graph of every important AI concept, each explained better than anywhere else, connected by prerequisites and paths, brought to life with simulators and playgrounds, kept current by disciplined content operations, and eventually taught one-on-one by an AI tutor grounded in its own content. The measure of success never changes:

> Can someone understand this AI concept better after visiting ByHeart AI than from a normal article? If yes - **they'll know it by heart.**

---

*Next step after approval of this plan: "Convert this plan into an implementation roadmap and begin Phase 0 (MVP scaffold)?"*
