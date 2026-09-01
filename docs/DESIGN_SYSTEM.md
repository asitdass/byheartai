# ByHeart AI - Design System

> Reading-first, paper-like, calm. Companion to [MASTER_PLAN.md](./MASTER_PLAN.md).

**Last reviewed:** 2026-08-30
**Grounded in:** 2026 web-typography + readability research (17px+ body, 45-75ch measure, 1.5-1.7 line-height, OKLCH color, self-hosted variable fonts, dark-mode halation handling) and WCAG 2.2 AA.

The single design goal: **make reading effortless and beautiful in both light and dark mode, and make "what to read next" always obvious.** Everything below serves that.

---

## Table of contents

- [1. Design principles](#1-design-principles)
- [2. Typography](#2-typography)
- [3. Color (OKLCH tokens)](#3-color-oklch-tokens)
- [4. Light mode = "paper"](#4-light-mode--paper)
- [5. Dark mode = "night paper"](#5-dark-mode--night-paper)
- [6. Sepia (optional)](#6-sepia-optional)
- [7. Spacing, layout & reading measure](#7-spacing-layout--reading-measure)
- [8. The reading column & lesson layout](#8-the-reading-column--lesson-layout)
- [9. Navigation model (fixes "what to read next")](#9-navigation-model-fixes-what-to-read-next)
- [10. Components](#10-components)
- [11. Code blocks](#11-code-blocks)
- [12. Motion & reduced motion](#12-motion--reduced-motion)
- [13. Reading mode & user controls](#13-reading-mode--user-controls)
- [14. Iconography & brand motif](#14-iconography--brand-motif)
- [15. Responsive & mobile](#15-responsive--mobile)
- [16. Accessibility rules](#16-accessibility-rules)
- [17. Token reference (implementation)](#17-token-reference-implementation)

---

## 1. Design principles

1. **Content is the interface.** The reading column is sacred: no ads, no popups, no clutter, no competing color. Chrome recedes; text leads.
2. **Paper in light, night-paper in dark.** Never pure white (#fff) or pure black (#000) behind body text - both cause strain. Warm off-white and soft off-black.
3. **Perceptual symmetry.** Light and dark are designed as a matched pair (via OKLCH lightness), so switching modes never feels like a downgrade.
4. **One calm accent.** A single brand accent (used sparingly for links, active state, and the ❤️ motif). No rainbow UIs.
5. **Rhythm over density.** Generous vertical rhythm and a fixed reading measure beat cramming more on screen.
6. **Accessible by construction.** Tokens are chosen so every text/background pair passes WCAG 2.2 AA before a designer ever tweaks anything.
7. **Zero third-party runtime.** Self-hosted fonts, no font CDN, minimal JS - fast and private.

---

## 2. Typography

**Font stack (self-hosted variable fonts, 0 CDN calls):**

| Role | Font | Fallback |
| --- | --- | --- |
| Display / headings | **Newsreader** (serif, optical sizing) | Georgia, "Times New Roman", serif |
| Body / UI | **Inter** (variable) | system-ui, -apple-system, "Segoe UI", sans-serif |
| Code | **JetBrains Mono** (variable) | ui-monospace, Menlo, Consolas, monospace |

**Why:** a serif display + humanist sans body is the classic editorial pairing that reads as "premium book/magazine," not "SaaS dashboard." Variable fonts let us fine-tune weight per theme (critical for dark-mode halation) and ship fewer files. Self-hosting keeps `font-src 'self'` in the CSP and removes CDN latency.

**Type scale (fluid, `rem`-based so it respects user zoom):**

| Token | Size | Line-height | Weight | Use |
| --- | --- | --- | --- | --- |
| `--fs-body` | `clamp(1.0625rem, 1.0rem + 0.3vw, 1.1875rem)` (~17-19px) | **1.7** | 400 (light) / 350 (dark) | Body text |
| `--fs-small` | `0.9375rem` (~15px) | 1.6 | 400 | Captions, meta |
| `--fs-h4` | `1.125rem` | 1.35 | 600 | Sub-subheads |
| `--fs-h3` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 1.3 | 600 | Section subheads |
| `--fs-h2` | `clamp(1.5rem, 1.3rem + 1vw, 2rem)` | 1.25 | 650 | Section heads |
| `--fs-h1` | `clamp(2rem, 1.6rem + 2vw, 2.75rem)` | 1.15 | 700 | Lesson title (Newsreader) |
| `--fs-hero` | `clamp(2.5rem, 1.8rem + 4vw, 4rem)` | 1.05 | 700 | Homepage hero |
| `--fs-code` | `0.9375rem` (~15px) | 1.6 | 400 | Code |

**Rules:**
- **Body >= 17px.** Research converges on 16-18px; we sit at 17px minimum and let it grow slightly on wide viewports.
- **Line-height 1.7 for body** (upper end of the comfortable 1.5-1.7 range for long-form), tighter for headings.
- **Measure 65-70ch** enforced by the reading column (see [section 7](#7-spacing-layout--reading-measure)).
- Headings use Newsreader (serif) for editorial character; body uses Inter for on-screen legibility.
- Only fluid-scale large text (headings/hero); body stays near-constant to avoid awkward mid-range sizes.

---

## 3. Color (OKLCH tokens)

Colors are defined in **OKLCH** (`oklch(L C H)`), so lightness is perceptually uniform - this makes light/dark symmetry predictable and contrast checks reliable. Tokens are semantic (never raw hex in components).

Semantic tokens (resolved per theme):
- `--paper` - page background (the "sheet")
- `--surface` - cards/rails/code background (slightly raised from paper)
- `--ink` - primary body text
- `--ink-muted` - secondary text (still AA)
- `--ink-faint` - tertiary/meta (large text only)
- `--rule` - hairlines, borders, dividers
- `--accent` - links, active nav, focus, brand
- `--accent-ink` - text/icon on accent
- `--heart` - the ❤️ brand motif
- `--selection` - text selection background

---

## 4. Light mode = "paper"

Warm, low-glare "sheet of paper." Not pure white.

```
--paper:      oklch(0.985 0.006 95)   /* warm off-white, ~#fbfaf7 feel */
--surface:    oklch(0.965 0.008 95)   /* faint raised panels */
--ink:        oklch(0.23  0.02  260)  /* near-black, slightly cool for calm */
--ink-muted:  oklch(0.42  0.02  260)  /* >=4.5:1 on paper */
--ink-faint:  oklch(0.55  0.02  260)  /* large text / meta only */
--rule:       oklch(0.90  0.01  95)   /* hairlines */
--accent:     oklch(0.55  0.15  250)  /* calm indigo-blue link */
--accent-ink: oklch(0.985 0.006 95)
--heart:      oklch(0.62  0.18  20)   /* warm red heart */
--selection:  oklch(0.90  0.06 250)
```

Feel: warm, quiet, book-like. Generous margins. A single indigo accent. Ink is near-black (not #000) to reduce glare while staying well above AA.

---

## 5. Dark mode = "night paper"

A genuinely comfortable dark theme (the second first-class reading experience), engineered against **halation** (light text "blooming" on dark backgrounds).

```
--paper:      oklch(0.19  0.006 260)  /* soft off-black surface, ~#171717 feel */
--surface:    oklch(0.23  0.008 260)  /* raised panels/code */
--ink:        oklch(0.90  0.01  260)  /* ~#e5e5e5, NOT pure white */
--ink-muted:  oklch(0.72  0.01  260)  /* >=4.5:1 on paper */
--ink-faint:  oklch(0.60  0.01  260)  /* large text / meta only */
--rule:       oklch(0.30  0.01  260)
--accent:     oklch(0.72  0.12  250)  /* lifted, softened link */
--accent-ink: oklch(0.19  0.006 260)
--heart:      oklch(0.70  0.16  20)
--selection:  oklch(0.35  0.06 250)
```

**Halation countermeasures (applied only in dark mode):**
- **Reduce body weight** from 400 -> **350** (variable font) so light-on-dark text doesn't appear too heavy.
- **Add `letter-spacing: 0.01em`** to body to compensate for perceived tightening.
- **Never pure white on pure black** - `#e5e5e5`-equivalent ink on `#171717`-equivalent paper.
- Headings drop from 700 -> ~600 weight to avoid glare.
- Code block background is a *raised* surface, not black.

---

## 6. Sepia (optional)

A third reading theme for long sessions / e-reader lovers. Warm paper, brown-black ink:

```
--paper:  oklch(0.94 0.03 80)
--ink:    oklch(0.30 0.03 60)
--accent: oklch(0.50 0.10 60)
```

All three themes (light/dark/sepia) share the same token *names*, so components never branch on theme.

---

## 7. Spacing, layout & reading measure

**Spacing scale** (4px base): `--space-1: 0.25rem` ... `--space-2: 0.5`, `--space-3: 0.75`, `--space-4: 1`, `--space-6: 1.5`, `--space-8: 2`, `--space-12: 3`, `--space-16: 4`, `--space-24: 6rem`.

**Reading measure (the most important layout rule):**
- `--reading-width: 46rem;` -> ~65-70 characters per line at 17px Inter. This is a **fixed** width, *not* "fill the container": lines wider than ~75ch hurt readability regardless of viewport.
- Paragraph spacing: `--space-6` (1.5rem) between blocks; headings get extra space-above to create clear sections.

**Vertical rhythm:** consistent margins tuned for long-form; first paragraph after a heading is close to the heading, paragraphs within a section share even rhythm.

---

## 8. The reading column & lesson layout

Desktop lesson grid (three zones, reading column centered and width-capped):

```
+----------------------------------------------------------------------+
|  Top bar: logo | search (Cmd-K) | Learn Roadmaps Models | theme      |
+-------------+--------------------------------------+-----------------+
| Left        |  Breadcrumb (you are here)           | Right rail      |
| sidebar     |  H1 lesson title (Newsreader)        | - On this page  |
| - category  |  One-line answer (lead)              | - Prerequisites |
| - ordered   |                                      | - Related       |
|   lessons   |  [ reading column, max 46rem ]       | - Next          |
| - progress  |  visual / explanation / code / quiz  |                 |
|             |  ❤️ Know this by heart               |                 |
|             |  Related + Next control              |                 |
+-------------+--------------------------------------+-----------------+
```

- The **reading column is fixed at ~46rem and horizontally centered** within the main area, even on ultra-wide screens - side rails flank it but never widen the text.
- Rails are quiet (muted ink, hairline separators) so they never compete with the text.
- A thin **reading-progress indicator** sits under the top bar.

---

## 9. Navigation model (fixes "what to read next")

This is the direct answer to the UX problems you named. Four persistent affordances guarantee a learner always knows where they are and what's next:

1. **Breadcrumb ("you are here"):** `Learn / RAG / What is RAG` at the top of every lesson.
2. **Left sidebar (where this fits):** the current category with its **ordered** lessons; the current lesson highlighted; completed lessons marked. This shows the local map.
3. **Right rail (what this needs / what's related):**
   - **Prerequisites** - concepts to understand first (from the knowledge graph).
   - **Related** - adjacent concepts.
   - **On this page** - in-page section TOC.
4. **The Next control (one obvious step):** a large, unmissable **"Next: <concept> ->"** button at the end of the reading column, driven by the learner's active path (or the concept's default `next`). There is *always exactly one* primary next action.

Supporting:
- **Learning paths** (`/roadmaps`) render as linear tracks with progress; entering a path sets the "Next" chain.
- **Global search / `Cmd-K`** doubles as navigation for random-access visitors.
- **"What should I learn next?"** recommendation surfaces on category hubs and after quizzes.

Design intent: a learner never has to *decide* what to read next; the interface always proposes it, while still allowing free exploration.

---

## 10. Components

Reading-first component set (semantic, theme-agnostic, accessible):

- **Prose** - styled MDX output (headings, paragraphs, lists, blockquote, tables, images with captions).
- **Lead / one-line answer** - larger muted intro under H1.
- **Callouts** - `Note`, `Tip`, `Warning`, `Common mistake` - subtle left-border + icon, low-saturation tint (never a loud box).
- **❤️ Memory card ("Know this by heart")** - the signature component: a bordered card with the heart motif and one essential takeaway. Restrained, recognizable, used once per lesson.
- **Comparison table** - clean two/three-column table for "X vs Y" pages.
- **Quiz** - 3-5 questions, inline, with reveal + explanation.
- **Visual/Simulator wrapper** - consistent frame, caption, and **text-alternative** slot; lazy-loaded.
- **Prerequisite / Related / Next rails** - graph-driven link lists.
- **Breadcrumb**, **On-this-page TOC**, **Progress indicator**.
- **Command palette (`Cmd-K`)** - search + navigation overlay.

All interactive components have visible focus, labels, and keyboard support.

---

## 11. Code blocks

- Rendered with **Shiki** at build time (zero client JS), themed to match light/dark/sepia via dual-theme tokens.
- Background = `--surface` (raised), never pure black.
- `--fs-code` ~15px, JetBrains Mono, line-height 1.6.
- Features: filename header, language label, copy button, optional line highlighting, and **horizontal scroll on overflow** (never breaks the page/reading width) - critical on mobile.
- Inline `code` gets a subtle tint and slightly reduced size.

---

## 12. Motion & reduced motion

- Motion is **purposeful and subtle**: gentle fades/slides for disclosure, smooth transitions in simulators to show cause->effect.
- **`prefers-reduced-motion: reduce`** disables non-essential animation and replaces simulator transitions with instant state changes.
- **No information is ever conveyed by motion alone** - every animated visual has a static/text equivalent.
- Durations short (120-240ms) with standard easing; no parallax, no attention-stealing loops.

---

## 13. Reading mode & user controls

Persisted in `localStorage` (no login):
- **Theme:** Light / Dark / Sepia / "System."
- **Font size:** small / default / large (scales `--fs-body` root).
- **Reading Mode:** hides both side rails and chrome, centering the reading column for maximum focus (a one-tap "zen" mode). The Next control remains.
- Optional (later): line-width toggle, dyslexia-friendly font option.

Controls live in a small, unobtrusive menu in the top bar; defaults respect the OS (`prefers-color-scheme`).

---

## 14. Iconography & brand motif

- **Icons:** a single consistent line-icon set (e.g. Lucide), 1.5px stroke, currentColor - calm and uniform.
- **The heart (❤️):** the brand motif, used with restraint. Primary home is the "Know this by heart" memory card; it may appear subtly in the logo and as a "saved" affordance. Never decorate every page with hearts.
- **Logo:** wordmark "ByHeart AI" in Newsreader with a small heart accent.

---

## 15. Responsive & mobile

- **Breakpoints:** mobile-first; side rails appear at >=1024px; the right rail may hide first on medium screens (its content moves inline).
- **Mobile lesson:** compact header, hamburger opens a single clean drawer (category lessons + paths + search); reading column goes full width with comfortable margins; sticky bottom **"Next"** + progress.
- **Touch:** simulators expose touch-friendly controls (large hit targets, sliders); diagrams pan/zoom with touch.
- **Code:** horizontally scrollable, never forcing page zoom.
- Line measure still capped for readability on tablets.

---

## 16. Accessibility rules (WCAG 2.2 AA)

- **Contrast:** all body text >= 4.5:1, large text/UI >= 3:1 in every theme (guaranteed by tokens).
- **Keyboard:** everything operable without a mouse; skip-to-content link; visible focus rings using `--accent`.
- **Semantics:** proper landmarks (`header`, `nav`, `main`, `aside`), logical heading order, labeled controls.
- **Reduced motion** honored globally.
- **Text alternatives** for every diagram, chart, and simulator.
- **Target size** >= 24x24px (2.2), adequate spacing between interactive elements.
- Tested with screen readers on the lesson and navigation flows.

---

## 17. Token reference (implementation)

Illustrative Tailwind v4 `@theme` / CSS custom properties (for the future build phase; not code to run now):

```css
:root {
  /* type */
  --font-display: "Newsreader", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --fs-body: clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem);
  --lh-body: 1.7;
  --reading-width: 46rem;

  /* light "paper" (default) */
  --paper: oklch(0.985 0.006 95);
  --surface: oklch(0.965 0.008 95);
  --ink: oklch(0.23 0.02 260);
  --ink-muted: oklch(0.42 0.02 260);
  --ink-faint: oklch(0.55 0.02 260);
  --rule: oklch(0.90 0.01 95);
  --accent: oklch(0.55 0.15 250);
  --accent-ink: oklch(0.985 0.006 95);
  --heart: oklch(0.62 0.18 20);
  --selection: oklch(0.90 0.06 250);
  --body-weight: 400;
  --body-tracking: 0;
}

[data-theme="dark"] {
  --paper: oklch(0.19 0.006 260);
  --surface: oklch(0.23 0.008 260);
  --ink: oklch(0.90 0.01 260);
  --ink-muted: oklch(0.72 0.01 260);
  --ink-faint: oklch(0.60 0.01 260);
  --rule: oklch(0.30 0.01 260);
  --accent: oklch(0.72 0.12 250);
  --accent-ink: oklch(0.19 0.006 260);
  --heart: oklch(0.70 0.16 20);
  --selection: oklch(0.35 0.06 250);
  --body-weight: 350;      /* halation fix */
  --body-tracking: 0.01em; /* halation fix */
}

[data-theme="sepia"] {
  --paper: oklch(0.94 0.03 80);
  --surface: oklch(0.91 0.03 80);
  --ink: oklch(0.30 0.03 60);
  --ink-muted: oklch(0.45 0.03 60);
  --accent: oklch(0.50 0.10 60);
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: var(--body-weight);
  letter-spacing: var(--body-tracking);
}

.reading-column { max-width: var(--reading-width); margin-inline: auto; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

> These tokens are the contract the future UI implements. Every component consumes semantic tokens (`--ink`, `--paper`, `--accent`) - never raw colors - so themes, halation fixes, and accessibility hold everywhere by default.
