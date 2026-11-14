# ByHeart AI

Next.js 16 (App Router, fully static) + MDX. Site: https://byheartai.com. Deploys from `main` on Vercel.

## Commands

- `npm run dev` — local server on :3000
- `npm run validate:content` — content gate (schema, internal links, tool ids). Must pass before any commit.
- `npm run typecheck` — `tsc --noEmit`
- `npm run build` — validate + production build
- `npm run refresh:tools` — update stars/license/activity in `data/tools.json` from GitHub (set `GITHUB_TOKEN`)

## Content map

| What | Where | Route |
|---|---|---|
| Concept lessons | `content/learn/<category>/<slug>.mdx` | `/learn/<category>/<slug>` |
| Setup guides | `content/guides/<slug>.mdx` | `/guides/<slug>` |
| Weekly radar | `content/radar/YYYY-MM-DD.mdx` | `/whats-new/<date>` |
| Tools directory | `data/tools.json` (categories in `data/tools.ts`) | `/tools` |
| Glossary, paths, quizzes | `data/*.ts` | |

Lesson schema: `docs/CONTENT_SCHEMA.md`. Design tokens: `docs/DESIGN_SYSTEM.md` and `app/globals.css`.

## Content rules

- **Accuracy first.** Every factual claim about a product, release, or number links to a primary source (repo, official docs, spec, paper). If it cannot be verified, leave it out.
- **Commands come from the project's own README or docs**, checked on the day of writing. Set `lastVerified` on guides to that day. Never write install commands from memory.
- **Guides**: each `##` is a numbered step the reader performs; use `###` for troubleshooting and next steps. Include a `<Warning>` wherever the reader could lose data, money, or privacy. End by linking the next guide and the relevant lessons.
- **Lessons** teach durable ideas; keep product names and version numbers in guides and the radar, where they can be re-verified.
- Plain, direct English. No hype words, no filler, no em dashes.
- Internal links are root-relative (`/learn/rag/what-is-rag`). The validator fails on broken ones.
- Star counts are never typed by hand outside radar issues; `refresh:tools` owns them.

## Code conventions

- Colors only through the semantic tokens in `globals.css` (`--ink`, `--paper`, `--accent`, `--g1..3`); never raw hex in components.
- Tailwind v4: CSS variables in classes use parentheses, `rounded-(--radius)`, not brackets.
- Lesson pages stay calm and reading-first. Gradients, the aurora, and motion belong to the home page and section hubs.
- Respect `prefers-reduced-motion` and keep all three themes (light, dark, sepia) working.
