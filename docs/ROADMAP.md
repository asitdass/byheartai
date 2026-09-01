# ByHeart AI - Roadmap, Priorities & Backlog

> Phased plan, priority matrix, risk register, and MVP engineering backlog. Companion to [MASTER_PLAN.md](./MASTER_PLAN.md).

**Last reviewed:** 2026-08-30

Guiding constraint: **do not overengineer.** Start with a fast, beautiful, static, reading-first MVP at near-zero cost. Every phase must ship something a learner can use.

---

## Table of contents

- [1. Phased plan (0-10)](#1-phased-plan-0-10)
- [2. Feature prioritization (P0-P3)](#2-feature-prioritization-p0-p3)
- [3. Build now / later / watch / avoid](#3-build-now--later--watch--avoid)
- [4. Risk register](#4-risk-register)
- [5. MVP engineering backlog (epics -> tasks)](#5-mvp-engineering-backlog-epics---tasks)
- [6. Definition of done (MVP)](#6-definition-of-done-mvp)
- [7. Timeline sketch](#7-timeline-sketch)

---

## 1. Phased plan (0-10)

Each phase: **objective -> key features -> dependencies -> complexity -> risks -> deliverables -> success criteria.**

### Phase 0 - Research & architecture
- **Objective:** Lock strategy, curriculum, design system, schemas (this document set).
- **Features:** master plan, curriculum, design system, content schema, roadmap.
- **Dependencies:** none.
- **Complexity:** Low (writing).
- **Risks:** analysis paralysis - mitigate by timeboxing.
- **Deliverables:** the `docs/` set (done).
- **Success:** a senior engineer could build from these docs without rediscovering strategy.

### Phase 1 - Foundation + MVP (reading-first)
- **Objective:** Ship the reading experience + ~40 lessons.
- **Features:** design-system foundation (tokens, self-hosted fonts, light/dark/sepia, reading mode); MDX content pipeline + validation; the 18-part lesson template + reading components; navigation (top bar, left sidebar, right rail, breadcrumbs, Next control); static search (Pagefind) + `Cmd-K`; quizzes; glossary; SEO + structured data + sitemap/robots; analytics; accessibility + performance baselines; CI.
- **Dependencies:** Phase 0.
- **Complexity:** Medium-High.
- **Risks:** scope creep, slow content authoring - mitigate by fixing the lesson template early and authoring in parallel.
- **Deliverables:** live site, ~40 lessons, search, quizzes, glossary.
- **Success:** Lighthouse/CWV strong; WCAG 2.2 AA on templates; all ~40 lessons pass the content quality checklist; pages indexable.

### Phase 2 - Curriculum expansion
- **Objective:** Grow from ~40 to ~120+ concepts across all categories.
- **Features:** comparison pages (`/compare/*`); topic-cluster completion; more quizzes.
- **Dependencies:** Phase 1 pipeline.
- **Complexity:** Medium (mostly content).
- **Risks:** quality dilution - mitigate via editorial checklist + review.
- **Deliverables:** full category coverage of stable concepts.
- **Success:** every learning path fully navigable end-to-end.

### Phase 3 - Interactive visualizations
- **Objective:** Bring flagship concepts to life.
- **Features:** token/embedding/attention visualizers, RAG + agent-loop + vector-search simulators (client-side, deterministic); visual registry + lazy loading; text alternatives.
- **Dependencies:** visual registry from Phase 1.
- **Complexity:** High (bespoke components).
- **Risks:** bundle bloat, poor viz quality - mitigate with code-splitting + a viz quality bar.
- **Deliverables:** interactive visuals on top ~15 concepts.
- **Success:** measurable engagement lift; each viz has a text alt and passes reduced-motion.

### Phase 4 - Roadmaps + knowledge-graph explorer
- **Objective:** Make paths and the graph first-class UI.
- **Features:** `/roadmaps` path tracks with progress; "what should I learn next?"; interactive graph explorer.
- **Dependencies:** graph data (Phase 1), progress (local).
- **Complexity:** Medium.
- **Deliverables:** six guided paths + graph view.
- **Success:** path start->finish completion measurable; graph aids discovery.

### Phase 5 - Playgrounds + projects
- **Objective:** Hands-on learning.
- **Features:** client-side code sandboxes (Pyodide/JS worker); build-along projects (chatbot -> RAG -> agent -> MCP server); optional API-key model calls.
- **Dependencies:** playground architecture ([MASTER_PLAN.md](./MASTER_PLAN.md) Y), security ([MASTER_PLAN.md](./MASTER_PLAN.md) Z).
- **Complexity:** High.
- **Risks:** execution security, cost - mitigate via sandboxing + rate limits + BYO-key.
- **Deliverables:** safe playground + 3-5 projects.
- **Success:** projects completable end-to-end; no security incidents.

### Phase 6 - Model & tool directories
- **Objective:** Living, volatile-data directories.
- **Features:** `/models`, `/tools` with filtering/comparison; freshness (`lastVerified`) surfaced; update workflow.
- **Dependencies:** schemas (Phase 0), directory data.
- **Complexity:** Medium.
- **Risks:** staleness - mitigate via scheduled verification + visible dates.
- **Deliverables:** directories decoupled from lessons.
- **Success:** model updates never require lesson edits.

### Phase 7 - Accounts + progress sync
- **Objective:** Optional cross-device progress.
- **Features:** OAuth (GitHub/Google) + email; sync progress/bookmarks/quiz history.
- **Dependencies:** minimal backend + DB.
- **Complexity:** Medium.
- **Risks:** scope/privacy - mitigate by keeping reading fully anonymous.
- **Deliverables:** optional accounts.
- **Success:** login never required to read; sync works.

### Phase 8 - AI tutor
- **Objective:** Grounded, pedagogical tutor.
- **Features:** retrieval over ByHeart content; assesses knowledge, explains, quizzes, recommends next lessons; cites lessons.
- **Dependencies:** content corpus, retrieval, guardrails.
- **Complexity:** High.
- **Risks:** hallucination, cost - mitigate via grounding + eval + rate limits.
- **Deliverables:** tutor beta.
- **Success:** answers grounded in and linked to lessons; positive learning outcomes.

### Phase 9 - Community
- **Objective:** Discussion, corrections, requests.
- **Features:** comments/Q&A, community notes, concept requests, correction workflow.
- **Dependencies:** strong content base, moderation.
- **Complexity:** Medium.
- **Risks:** moderation load, spam - mitigate with moderation + reputation.
- **Deliverables:** community layer.
- **Success:** useful corrections/requests flow in.

### Phase 10 - Monetization & scale
- **Objective:** Sustainable revenue without harming the experience.
- **Features:** tasteful ads (never in reading column), sponsorships (labeled), affiliates (only useful), premium (labs/tutor/certificates).
- **Dependencies:** traffic, trust.
- **Complexity:** Medium.
- **Risks:** UX/trust damage - mitigate via strict ad policy + CWV guardrails.
- **Deliverables:** revenue streams.
- **Success:** revenue with maintained CWV, trust, and free core content.

---

## 2. Feature prioritization (P0-P3)

**P0 - MVP, must-have**
- Reading-first lesson pages + 18-part template
- Light/Dark/Sepia "paper" theming + reading mode + font-size control
- ~40 flagship lessons
- Navigation: top bar, left sidebar, right rail (on-this-page + prerequisites + related), breadcrumbs, Next control
- Knowledge-graph-driven prerequisites/related/next
- Static search (Pagefind) + `Cmd-K`
- Quizzes + ❤️ memory cards
- Glossary
- SEO (metadata, canonical, OG/Twitter, JSON-LD), sitemap, robots
- Accessibility (WCAG 2.2 AA) + performance baseline
- Content validation in CI + privacy analytics

**P1 - important, soon**
- Interactive simulators for flagship concepts
- Learning-path tracks with progress
- Comparison pages
- Curriculum expansion (~120+ concepts)
- Model/tool directories

**P2 - useful later**
- Knowledge-graph explorer
- Playgrounds + projects
- Accounts + progress sync
- Hosted/semantic search

**P3 - future**
- AI tutor
- Community
- Certificates
- Localization
- Advanced monetization

---

## 3. Build now / later / watch / avoid

**BUILD NOW (MVP)**
- Next.js 16 static-first reading site, MDX pipeline, design-system tokens, navigation + graph rails, Pagefind search, quizzes, glossary, SEO, a11y, content validation, ~40 lessons.

**BUILD LATER**
- Simulators, paths UI + progress, comparison pages, directories, playgrounds, projects, accounts, graph explorer, AI tutor, community, monetization.

**WATCH (monitor, decide later)**
- Next.js Cache Components/PPR evolution; hosted search (Typesense/Meilisearch/Algolia) when static search strains; semantic search demand; new AI concepts to add as leaf nodes (reasoning models, new agent/MCP patterns); AI-search citation behavior; font/perf budgets.

**AVOID (explicitly, at least early)**
- Microservices, Kubernetes, custom vector DB, heavy backend, complex auth, expensive always-on AI infra, real-time collaboration, a heavy CMS, launching many languages at once, thin AI-generated SEO pages, ads that harm reading.

---

## 4. Risk register

| Risk | Probability | Impact | Mitigation |
| --- | --- | --- | --- |
| AI content becomes outdated | High | High | Stable/volatile split; `lastReviewed`/`lastVerified`; scheduled review; "what changed" notes |
| Hallucinated/incorrect educational content | Medium | High | Human review + technical verification + primary sources before publish; never publish AI drafts blindly |
| Slow content authoring bottleneck | High | Medium | Fixed lesson template + components; AI-assisted drafts + editorial pipeline; parallel authoring |
| Scope creep / overbuilding | High | High | Strict P0 MVP; "avoid" list; phase gates with success criteria |
| Poor visualization quality | Medium | Medium | Viz quality bar; text alternatives; user testing; ship few, excellent |
| Model directory staleness | High | Medium | Volatile data decoupled; visible freshness dates; verification workflow |
| SEO saturation / thin-content penalty | Medium | High | Original, non-commodity, people-first content only; no thin pages; topical authority |
| High API costs (playground/tutor) | Medium | Medium | Client-side sims first; BYO-key; rate limits; metered features |
| Playground/code-exec security | Medium | High | Sandboxed client execution; never run untrusted code on main server; least privilege |
| Accessibility gaps | Medium | Medium | Tokens meet AA by construction; axe in CI; SR testing; reduced motion |
| Performance regressions | Medium | Medium | CWV budgets; code-splitting; lazy visuals; no heavy libs on lessons |
| Framework churn (Next.js) | Low | Medium | Static-first portable output; follow stable releases; documented alternatives |
| Copyright/trademark issues | Low | High | Original explanations/diagrams; link don't copy; source policy |
| Vendor bias | Medium | Medium | Concept-first, vendor-neutral; tool `type` labeling; alternatives listed |
| Solo-maintainer burnout | Medium | High | Automation (validation, sitemaps), templates, phased scope, community corrections later |

---

## 5. MVP engineering backlog (epics -> tasks)

### Epic 1 - Project & design-system foundation
- Initialize Next.js 16 (App Router, TS, Turbopack); enable Cache Components.
- Tailwind v4 `@theme` with OKLCH tokens (light/dark/sepia).
- Self-host variable fonts (Newsreader, Inter, JetBrains Mono); preload; `font-src 'self'`.
- Theme toggle + font-size control + reading mode; persist in `localStorage`; respect `prefers-color-scheme`/`prefers-reduced-motion`.
- App shell layout (reading column 46rem, sidebars, rails), responsive + mobile drawer.

### Epic 2 - Content pipeline
- MDX loader + typed front-matter (concept schema).
- Generate typed concept index + knowledge graph from content.
- MDX component set: `OneLine`, callouts, `MemoryCard`, `Compare`, `Quiz`, visual slots.
- Shiki code blocks (dual-theme, copy, filename, line highlight); KaTeX.
- Content validation script (schemas + graph DAG + broken links) wired into CI.

### Epic 3 - Lesson template + reading components
- Implement the 18-part template layout.
- Auto-render sections 17-18 (related/next + further reading) from metadata.
- Breadcrumb, on-this-page TOC, reading-progress indicator.
- Prose styles (typography, measure, rhythm) per design system.

### Epic 4 - Navigation + graph rails
- Left sidebar (category + ordered lessons + progress markers).
- Right rail (prerequisites + related + on-this-page).
- Prominent Next control (path-aware; falls back to concept `next`).
- Graph utilities: `getPrerequisites`, `getNext`, `relatedFor`, `recommendNext`.

### Epic 5 - Search
- Integrate Pagefind; index title/headings/body/keywords (synonyms/abbreviations).
- `Cmd/Ctrl-K` command palette (keyboard-first, accessible) returning concept + defn + level.
- Category/level filters.

### Epic 6 - Quizzes + glossary
- Quiz component (single/multiple/true-false) + explanations.
- Glossary page + term records; inline term -> glossary/lesson linking.

### Epic 7 - SEO + structured data
- Per-page metadata (title/description/canonical/OG/Twitter).
- JSON-LD: Organization, WebSite+SearchAction, BreadcrumbList, Article/TechArticle, Course, ItemList.
- Programmatic `sitemap.ts` + `robots.ts`.

### Epic 8 - Quality: a11y, performance, testing, deploy
- axe checks in CI on templates; keyboard/SR passes; contrast verified.
- Performance budgets; code-split heavy deps; image optimization; font preload.
- Unit/component tests; broken-link + SEO tests; build + sitemap tests.
- CI (typecheck, lint, validate, test, build) + Vercel preview deploys; production deploy.

### Epic 9 - Author the ~40 MVP lessons
- Author lessons per [CURRICULUM.md](./CURRICULUM.md) section 7, each passing the content quality checklist.
- Add correct prerequisite/related/next links + quizzes + memory cards.
- Editorial review (accuracy, clarity, originality, sources) before publish.

---

## 6. Definition of done (MVP)

The MVP is done when:
- All ~40 lessons published, each with the full template, a memory card, a quiz, and correct graph links.
- Light/dark/sepia + reading mode + font-size all work and persist; both light and dark deliver an excellent reading experience.
- Navigation always shows "you are here," prerequisites, related, and exactly one obvious "Next."
- Search returns relevant concepts (incl. synonyms/abbreviations) via `Cmd-K`.
- Every page has correct SEO metadata + JSON-LD; sitemap + robots generated; pages indexable.
- WCAG 2.2 AA holds on templates; reduced motion honored; all visuals have text alternatives.
- Core Web Vitals in "good"; no heavy JS on lessons.
- Content validation passes in CI; no broken internal links; graph is a valid DAG.
- Site runs at ~$0/month on static hosting.

---

## 7. Timeline sketch

Indicative for a focused solo developer using Cursor (adjust to reality):

| Window | Focus |
| --- | --- |
| 0-1 months | Phase 0 (done) + Epics 1-4 (foundation, pipeline, template, nav) |
| 1-3 months | Epics 5-8 (search, quizzes/glossary, SEO, quality) + author first ~20 lessons |
| 3-6 months | Finish ~40 lessons (Epic 9), polish, launch MVP; begin Phase 2 (expansion) + first simulators (Phase 3) |
| 6-12 months | Curriculum expansion, paths UI + progress (Phase 4), comparison pages, directories (Phase 6) |
| 1-3 years | Playgrounds/projects (Phase 5), accounts (Phase 7), AI tutor (Phase 8), community (Phase 9), monetization (Phase 10) |

---

*After approval of this plan: "Convert this plan into an implementation roadmap and begin Phase 0/1 (MVP scaffold)?"*
