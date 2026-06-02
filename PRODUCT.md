# Product

## Register

brand

## Users

Two co-equal audiences arriving at the same site, served by the hero's audience tabs:

- **Recruiters / hiring managers** (primarily German-speaking, hence `lang="de"`). Scanning quickly to answer one question: *is this person a serious, hireable full-stack engineer?* They want proof of real skills, a clear stack, and a CV they can download in seconds.
- **Freelance / studio clients** evaluating CarbonElk as a small studio worth paying. They want depth — real projects with a problem, a build, and an outcome — plus an easy way to make contact.

Neither audience leads; the design must let each see itself without fracturing into two sites. Oscar's decade in hospitality (running bars, leading teams, owning the guest experience) is the through-line that distinguishes him from a stack-only developer.

## Product Purpose

The personal portfolio and brand home of Oscar Bougart, building under the name **CarbonElk**. It exists to convert a cold visitor into either an interview or a project inquiry by demonstrating — not asserting — engineering craft and design taste.

Success looks like: a recruiter downloads the CV or a prospective client opens the contact form, having come away with the impression that this is a **polished studio worth paying** and a **serious, hireable engineer**. The work itself (Menu Maker, Dram, PräFix, and the rest) carries the argument; the site's job is to frame it so the quality is unmistakable.

## Brand Personality

- **Three words:** precise, personal, understated.
- **Voice:** first-person, story-driven, calm. Speaks plainly about what was built and why. German-first, written by a person, not a marketing team.
- **Emotional goal:** quiet confidence. The visitor should feel they're looking at someone who sweats the details and works user-first under pressure — credibility through restraint, not volume.
- **Aesthetic lane:** Linear / Vercel precision — dark, engineered minimalism with tight typography and a single restrained accent. This matches what is already shipped and should be preserved, not reinvented.

## Anti-references

- **Generic AI / template SaaS.** No gradient blobs, no identical icon-card grids, no tiny tracked-uppercase eyebrow above every section, no numbered `01 / 02 / 03` section scaffolding. If it looks machine-stamped, it has failed.
- **Corporate / agency boilerplate.** No stock impersonality, no "we deliver solutions" buzzword voice. This is one person under a studio name, and the writing should sound like it.
- **CV / résumé data-dump.** Real projects told as stories beat dense walls of bullet points. (Skills lists are fine in their place; the page is not a printed résumé.)
- **Loud / flashy maximalism.** Restraint is the register; motion and color are used sparingly and on purpose.

## Design Principles

1. **Two doors, one house.** Recruiters and freelance clients are co-equal. The audience tabs let each path see itself, but the brand, palette, and craft never split in two.
2. **Show the work, don't list it.** Every project earns its space through problem → build → outcome, with real imagery. Depth and evidence over credential bullet points.
3. **Hospitality is the edge.** A decade behind the bar — working under pressure, communicating clearly, putting the user first — is the differentiator. Lead with it; don't bury it under stack logos.
4. **Engineered restraint.** Every element earns its place. Precision, spacing, and typography are the proof of craft — minimal because it's *considered*, never minimal because it's safe.
5. **Personal, never corporate.** First-person, human, plainspoken. No buzzwords, no hype, no em dashes pretending to be polish.

## Accessibility & Inclusion

- **Target: WCAG 2.1 AA.** Body text must clear 4.5:1 against its background; large/bold text 3:1. The current gray-on-black scheme (`#888` / `#444` muted text on `#000`) is the known risk area — `#444` muted text fails AA for anything but the largest labels and should be audited and bumped toward the ink end where it carries real content.
- **Reduced motion:** the bob/scroll animations need a `prefers-reduced-motion: reduce` alternative (currently absent).
- **Keyboard & focus:** all interactive elements (audience tabs, nav, hamburger, form) must be keyboard-operable with visible focus states.
- **Language:** German-first content (`lang="de"`); keep `lang` attributes accurate if any English copy is mixed in.
