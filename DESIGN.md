---
name: CarbonElk Portfolio
description: The dark, precise portfolio and brand home of Oscar Bougart / CarbonElk.
colors:
  signal-blue: "#00aaff"
  signal-blue-deep: "#0077b6"
  ink: "#ffffff"
  void: "#000000"
  surface: "#0d0d0d"
  surface-raised: "#111111"
  border: "#1a1a1a"
  muted: "#444444"
  dim: "#888888"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(1.75rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "clamp(0.875rem, 1.4vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  lg: "20px"
spacing:
  gutter: "14px"
  block: "32px"
  region: "64px"
  section: "80px"
components:
  nav-link:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
  hero-cta:
    textColor: "{colors.ink}"
    padding: "0 0 2px 0"
  hero-cta-hover:
    textColor: "{colors.signal-blue}"
  button-submit:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 36px"
  button-submit-hover:
    backgroundColor: "{colors.signal-blue-deep}"
  card-form:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "16px 20px"
  tile-bento:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
---

# Design System: CarbonElk Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Darkroom"**

The page is a pure black field, and light is used the way a darkroom uses it: sparingly, deliberately, to bring one thing into focus at a time. Nothing on screen arrived by accident. Type is set tight and confident, surfaces are nearly black so the work itself is the brightest thing in the room, and a single cool blue marks the few places that genuinely matter. The atmosphere is **dark and focused**, **precise and engineered** — the visual proof of a person who sweats alignment, spacing, and the last 2px.

This system serves two readers at once without splitting in two: a recruiter deciding whether Oscar is a serious, hireable engineer, and a client deciding whether CarbonElk is a studio worth paying. The answer to both is delivered the same way — by showing the work cleanly, not by talking about it. Restraint here is a position, not a safety net: minimal because every element was considered, never minimal because it was easy.

It explicitly rejects the generic AI / template SaaS look (gradient blobs, identical icon-card grids, a tracked-uppercase eyebrow above every section), corporate-agency boilerplate and buzzword voice, the résumé data-dump, and loud maximalism. If a screen could be mistaken for a Webflow starter or a "we deliver solutions" agency page, it has failed.

**Key Characteristics:**
- Pure-black canvas; surfaces only one or two shades up from black.
- One cool accent (Signal Blue), used like punctuation, never as wallpaper.
- Serif display (Playfair) for statements, humanist sans (Nunito Sans) for everything functional.
- Flat by default — depth comes from tonal layering, never from shadows.
- The work (project imagery) is the loudest thing on any screen.

## 2. Colors

A monochrome black-to-white spine with a single cool-blue accent: the palette is almost entirely neutral, so the one chromatic note carries real weight.

### Primary
- **Signal Blue** (`#00aaff`): The lone accent, used as punctuation rather than decoration. It marks skill-group labels, the em-dash bullets on project highlights, and link/CTA hover. Bright enough to clear AA as small text on the black field (~8.2:1); its rarity is what makes it read as a signal.
- **Signal Blue Deep** (`#0077b6`): The deeper blue reserved for *fills that carry white text* (the submit button's hover state, the text-selection highlight), where the bright accent would be too light for a legible white label (~4.9:1 behind white).

### Neutral
- **Ink** (`#ffffff`): Primary text and headings. The brightest element on the page after the imagery.
- **Void** (`#000000`): The page background. True black, edge to edge.
- **Surface** (`#0d0d0d`): The first tonal step up — bento image tiles, form cards, the contact photo well. Reads as "a panel" without a border or shadow.
- **Surface Raised** (`#111111`): The second step up — the submit button at rest.
- **Border** (`#1a1a1a`): Hairline dividers only (the skills-grid rule, mobile nav separators). Never a heavy frame.
- **Dim** (`#888888`): Secondary body text — project descriptions, about copy, inactive nav. The lightest "muted" tone that still reads as content.
- **Muted** (`#444444`): Peripheral metadata only — small uppercase labels, the project stack line, footer, placeholders. **Not a body-text color** (see Named Rule).

### Named Rules
**The Single Signal Rule.** Signal Blue appears on no more than ~10% of any screen. It marks what matters and nothing else; the moment a second hue or a large blue fill shows up, the signal becomes noise.

**The Muted-Floor Rule.** `#444444` on `#000000` is ~2.5:1 — below the WCAG AA floor. Muted is permitted only for short, large, or peripheral labels, never for sentences a visitor needs to read. Real content sits at Dim `#888888` (~5.4:1) or brighter. When in doubt, move toward Ink.

## 3. Typography

**Display Font:** Playfair Display (with `serif` fallback)
**Body Font:** Nunito Sans (with `sans-serif` fallback)
**Label Font:** Nunito Sans (same family, used in a small tracked-uppercase role)

**Character:** A high-contrast Didone serif for statements paired with a soft humanist sans for everything that has to be read or scanned. The contrast axis (serif display + sans body) does the heavy lifting; the sans handles both body copy and labels through weight and tracking, not a third typeface.

### Hierarchy
- **Display** (Playfair, 700, `clamp(3rem, 7vw, 6rem)`, line-height 1, `-0.03em`): Section titles (`über mich.`, `arbeit.`, `kontakt.`). The loudest type on the page.
- **Headline** (Playfair, 700, `clamp(1.75rem, 4vw, 3.5rem)`, line-height 1.1, `-0.03em`): The hero statement — the first sentence a visitor reads.
- **Title** (Playfair, 700, `clamp(1.75rem, 3vw, 2.625rem)`, line-height 1.05, `-0.03em`): Project names.
- **Body** (Nunito Sans, 400, `clamp(0.875rem, 1.4vw, 1.0625rem)`, line-height 1.8): About paragraphs and project descriptions. Keep measure at 65–75ch; the about grid already caps width.
- **Label** (Nunito Sans, 600, `0.6875rem`, `0.12em`, uppercase): Eyebrow metadata — project labels, "Project Overview", skill-group titles (in Signal Blue), form-card labels, the stack line.

### Named Rules
**The Serif-for-Statements Rule.** Playfair is for headings, the hero line, and project names only — never for body copy, labels, or UI text. Set on a black field, light serif type reads lighter, so headings keep their generous line-heights (≥1.05) and never tighten letter-spacing past `-0.03em`.

## 4. Elevation

Flat by default. There are **no `box-shadow`s anywhere** in the system. Depth is conveyed entirely through tonal layering: panels step up from Void (`#000`) to Surface (`#0d0d0d`) to Surface Raised (`#111`), so a card reads as "raised" because it is fractionally lighter than the page, not because it casts a shadow. This is what keeps the darkroom feeling clean rather than 2014-skeuomorphic.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift with a drop shadow or a glow. If something needs to feel closer, raise its tone one step (`#0d0d0d` → `#111`); never reach for `box-shadow`. A soft wide shadow on a card is an instant tell that the darkroom has been broken.

## 5. Components

The component feel is **tactile and confident**: surfaces are clean and squared, and interaction is answered with a clear, immediate response (a color commit, a state that reads at a glance) rather than timid micro-fades. Where the current build only shifts color on hover, the direction is to make that response feel deliberate and physical, never hesitant.

### Buttons
- **Shape:** Squared with a hairline radius (`4px`). No pills, no heavy rounding.
- **Hero CTA** (`Lebenslauf herunterladen` / `GitHub ansehen`): Text-only, Ink, with a 1px underline. A confident link, not a box. **Hover/Focus:** text and border commit to Signal Blue (0.2s).
- **Submit button** (`Senden`): Surface Raised (`#111`) fill, Ink text, uppercase Label type, `12px 36px` padding, `4px` radius. **Hover:** fills with Signal Blue Deep (`#0077b6`), which keeps the white label legible (~4.9:1). The one place a solid blue fill is allowed, because it's the page's primary action.

### Cards / Containers
- **Form card:** Surface (`#0d0d0d`), `4px` radius, `16px 20px` padding, **no border, no shadow**. Label sits above the field; the whole card is the input affordance.
- **Bento tile:** Surface (`#0d0d0d`), `20px` radius — the single large-radius element in the system, justified because it frames a photograph. Images cover the tile (`object-fit: cover`).
- **Internal padding:** cards use the `block`/`gutter` scale; never tighter than `14px`.

### Inputs / Fields
- **Style:** Borderless. The input lives inside its Surface card; there's no separate stroke. Text is Ink, placeholders are Muted.
- **Focus:** Currently no explicit focus ring — **this is the known gap.** Inputs and all controls must carry a visible `:focus-visible` state (a Signal Blue outline or a one-step tonal lift) for keyboard users.
- **Autofill:** Forced back to Surface (`#0d0d0d`) with Ink text so the browser's yellow autofill never breaks the darkroom.

### Navigation
- **Sidebar (desktop):** Fixed 10rem rail. Nav links in Label-adjacent sans at `1rem`, Dim at rest, **Ink + weight 600 when active or hovered**. Active state is driven by an IntersectionObserver as you scroll.
- **Audience tabs:** Same Dim → Ink + weight logic; the active tab is the visitor's chosen door (Recruiter / Freelance).
- **Mobile:** The rail collapses to a top bar with a hamburger; the nav drops down as a bordered panel.

### Signature: The Bento Project Grid
The defining component. Each project pairs a sticky left column of info (label, name, overview, description, highlights, stack) with a right-side asymmetric bento grid of `20px`-radius image tiles (`bento-wide` spans two columns, `bento-tall` spans two rows). The info stays pinned while the imagery scrolls — the work is always the brightest, most present thing on screen.

### Project highlight list
List items led by a Signal Blue em-dash (`—`) instead of a bullet. The accent does the marking; no disc, no custom icon.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Blue (`#00aaff`) to ~10% of any screen (labels, link hover, the em-dash bullets, one button fill). Its scarcity is the point.
- **Do** set real body text at Dim (`#888888`) or brighter on Void; reserve Muted (`#444444`) for short peripheral labels only.
- **Do** convey depth by stepping tone up (`#000` → `#0d0d0d` → `#111`), never with shadows.
- **Do** use Playfair only for headings, the hero line, and project names; Nunito Sans for everything else.
- **Do** give every interactive element (tabs, nav, hamburger, inputs, submit) a visible `:focus-visible` state and a `prefers-reduced-motion: reduce` alternative for the bob/scroll animations.
- **Do** show real project imagery in every bento grid. One decisive screenshot beats an empty tile.

### Don't:
- **Don't** ship the generic AI / template SaaS look: no gradient blobs, no identical icon-card grids, no tracked-uppercase eyebrow above every section, no `01 / 02 / 03` numbered section scaffolding.
- **Don't** drift into corporate / agency boilerplate or buzzword voice ("we deliver solutions"). This is one person under a studio name; write like it.
- **Don't** turn sections into a CV / résumé data-dump. Projects are stories (problem → build → outcome), not walls of bullets.
- **Don't** go loud or flashy — no neon, no heavy or gratuitous animation. Restraint is the register.
- **Don't** add `box-shadow` to any surface (breaks The No-Shadow Rule).
- **Don't** use Muted (`#444`) for sentences — it fails WCAG AA on black (~2.5:1).
- **Don't** round form cards, inputs, or buttons past `4px`; the only large radius (`20px`) belongs to image tiles.
- **Don't** leave colored placeholder `<div>`s where project screenshots belong (e.g. Golden Hour) — zero imagery reads as unfinished on a brand surface.
- **Don't** use em dashes (`—`) or `--` in prose copy; the em-dash is a visual bullet here, not a sentence connector.
