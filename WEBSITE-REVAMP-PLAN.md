# Website Revamp Plan — From Product Site to Executive Portfolio

**Status:** Draft v2 — incorporates CMO/marketing review
**Goal:** Reposition ronning.systems from a "Joblign product site with consulting on the side" to a **personal executive portfolio** that positions Patrick Ronning for fractional/interim CTO, CIO, and short-term executive engagements (e.g., the OHSU interim CIO model), while keeping a path to purchase services.

---

## 1. Strategy shift

### Current state (why it's not working for the goal)
- The homepage hero is 100% Joblign. SEO title/description lead with it.
- Consulting is a secondary section with a single card; prices ($6,000/mo, $250/hr) sit prominently on /consulting and /pricing.
- Joblign occupies the nav, the hero, its own product page, and a waitlist capture — far more prominence than its current development status warrants.
- Manna Health (a shipped, FDA SaMD-adjacent product with real outcomes) is absent from the site entirely.
- No evidence of executive-level scope: budget ownership, org leadership, 24/7 operations, governance — the things that win CIO/CTO mandates.

### New positioning statement (draft)
> Interim and fractional technology executive for healthcare and regulated organizations. Most recently CIO of Oregon State Hospital (32 FTE, $15M budget): network availability 95%→99.5% in one quarter, ~25% operating savings in six months, three enterprise risks closed, and a governed LLM policy chatbot on Azure. 15+ years shipping regulated, mission-critical systems — FDA Software as a Medical Device, avionics, launch vehicles. Immediately available for an interim or fractional mandate. Portland, OR metro / remote.

### Tone
Keep BRAND.md voice rules (practical, direct, honest, no hype). First-person for Patrick's story. The site reads like a strong executive profile, not a startup landing page.

---

## 2. Information architecture

### New nav
```
Home · About · Experience (new) · Projects/Work (new) · Services · Engagement Options (new) · Blog · Contact
```

### Page-by-page changes

#### Home (Index.tsx) — biggest rewrite
1. **Hero:** Positioning statement above. Primary CTA → **Services / Book an intro call**, secondary → About. Logo mark stays.
   - New SEO title: "Patrick Ronning — Fractional & Interim CTO/CIO for Healthcare | Ronning Systems"
2. **Proof strip:** OSH numbers (95%→99.5% availability, ~25% operating savings in six months, 3 enterprise risks closed, governed LLM deployment), "$15M budget & 32-FTE org at Oregon State Hospital", "FDA SaMD launches (Dupixent, Hizentra)", "orbit insertion on first flight". OSH scope stated at $15M/32 FTE — never imply the ~$1B institutional scale.
3. **Featured work section:** Manna Health first (shipped product, SaMD compliance story — the depth-of-capability proof point; present as a completed/shipped case study), then Garmin G500 TXi, Virgin Orbit, Oregon State Hospital, BrightInsight, plus a "current engagements" note (Bonneville Power, Ashore Health). Joblign and One Step get a single low-key "also in the works at Ronning Systems" line linking to /product — no standalone One Step card, to avoid a second vaporware signal.
4. **Joblign:** small "Also from Ronning Systems" card near the footer. Not in hero, not in nav prominence.
5. **Services teaser:** engagement models (fractional/interim CTO-CIO, project execution, board & advisory), CTA to Engagement Options/scheduling.
6. **Testimonials:** at least one executive-context health-IT quote with the most specific attribution permitted, plus links to LinkedIn recommendations.

#### About (rewrite)
Executive narrative: MBA + PE-track, PE/electrical engineering roots, path through Garmin → Virgin Orbit → BrightInsight → OSH CIO → founder. Emphasize budget ownership, org building, governance, regulated environments.

#### Experience (new page)
A readable resume timeline: roles, dates, one-line outcomes per role (sourced from Job-o-tron tailored resumes, especially the executive/leadership variants). Downloadable PDF link. Plus a visible credentials block — MBA (Willamette), PE exam passed/licensure in progress, AWS Certified Solutions Architect — and an "immediately available for interim and fractional mandates" line.

#### Projects / Work (new page)
Case-study cards with the existing logo assets plus **Manna Health** and **Ashore Health** where appropriate. Each card = situation → what Patrick did → measurable outcome.

#### Services (renamed/rebuilt from Consulting.tsx)
- Keep the offerings (Fractional/Interim CTO-CIO, Project Execution, Board & Technical Advisory) and rewrite the copy in health-executive buyer vocabulary: 24/7 operations, ITIL-aligned service management, operating & capital budget ownership, vendor and EHR contract governance, cybersecurity and governance/risk, HIPAA, interim transitions, unionized workforces.
- Explicit "Interim CIO/CTO for transitions and vacancies" language, plus a "What the first 90 days of an interim mandate look like" block (stabilize → assess → roadmap → transition), and a "current engagements" line (BPA, Ashore Health).
- Board/technical advisory stays a visible offering (live revenue path: prior board experience, seeking advisory seat).
- **Remove all prices from the page.** Replace with "Engagement length varies — see options or get in touch."
- CTA logic: "Start a conversation" → /contact (EmailLink); "View engagement options" → /engagement-options; optional Calendly link (analytics event already exists).
- FAQ section ("What does an interim CIO do for a hospital in transition?" etc.) with FAQPage JSON-LD — the highest-leverage GEO artifact for executive search queries.

#### Pricing.tsx → retired or redirected
Delete the standalone pricing page (or 301-redirect /pricing → /services). Prices should not be the first thing an executive buyer sees; scoping conversations come first. Also redirect /consulting → /services.

#### Engagement Options (new page, /engagement-options — formerly "store")
- Lightweight purchase page, but **never framed as a "store"** — a cart-style storefront reads as a commodities marketplace and cheapens executive services. Nav label and page title: "Engagement Options" / "Working together."
- **Purchasable items (Stripe Payment Links)** limited to defined-scope, low-commitment offerings — the "first taste" that opens larger mandates:
  1. Technology leadership audit (fixed price) — lead with this; it is the natural wedge.
  2. Advisory hour block / board-mandated tech review.
- **Not purchasable:** fractional retainer and interim executive placement — these show "Inquire" / Calendly only; scoping always precedes commitment.
- Prices live in Stripe, not in code. No new backend or deps required; Payment Links work in the static nginx SPA.
- Suggested initial catalog (editable in Stripe): Technology leadership audit, Advisory hour block.

#### Product.tsx (Joblign)
Keep the page, tone down claims, update status language honestly ("in active development"). No homepage prominence.

#### Contact
Keep, and add a real availability block: Portland OR metro / remote, interim and fractional executive model, **immediately available**. Mirrored on the Services page.

### Cross-cutting
- Update `llms.txt`, `sitemap.xml`, meta/OG copy, JSON-LD. Person schema with `jobTitle` ("Interim/Fractional CTO·CIO"), `knowsAbout` (healthcare IT, ITIL, HIPAA, ISO 14971, IEC 62304, FDA SaMD), `sameAs` (LinkedIn), plus ProfessionalService; FAQPage schema on Services.
- Per-page keyword targets: "fractional CIO healthcare", "interim CIO hospital", "healthcare IT fractional executive", "fractional CTO Portland". Geographic language ("Portland, Oregon metro") in body copy, not just meta.
- Blog decision: commit to 2–3 substantive posts (governed AI in hospitals, SaMD lessons applied to hospital IT, interim CIO first-90-days) or visibly park/remove it — a stale blog is worse than none for an executive portfolio.
- Redirects: /pricing → /services, /consulting → /services, /store → /engagement-options.
- Update BRAND.md and AGENTS.md positioning sections (site leads with Patrick's portfolio; remove the now-obsolete price style rule; Joblign listed below the fold).
- Analytics: keep existing taxonomy; tag new CTAs (`engagement_options_view`, `checkout_open`, `inquiry_click`).

---

## 3. Content sources
- Job-o-tron tailored resumes (`job-o-tron/documents/resume/tailored_*.md`) — executive summary language, outcomes, and metrics for the Experience page and proof strip.
- Existing Consulting.tsx projects for case-study cards.
- Manna Health: describe SaMD QMS establishment (design controls, ISO 14971, IEC 62304), patient app launch, team building — first-person, concrete.
- One Step: brief honest teaser only; no dates promised.

---

## 4. Implementation order
1. Copy/messaging pass: positioning statement, proof strip, services reframe (no code needed yet).
2. Index.tsx rewrite + Services page rebuild (remove prices) + Pricing redirect.
3. New Experience + Projects pages.
4. Engagement Options page with Stripe Payment Links for audit/advisory items (needs Stripe account/links from Patrick); retainer/interim placement as Inquire-only.
5. SEO/sitemap/llms.txt/JSON-LD + FAQPage schema updates, redirects.
6. BRAND.md/AGENTS.md updates.
7. QA: lint, tests, build, deploy via `my-stack/deploy-patrick-cachy.sh`.

## 5. Open questions for Patrick
- Stripe account ready? Confirm Stripe Payment Links for the audit and advisory-hour items at launch (retainer and interim placement are Inquire-only per CMO review).
- Any Manna Health constraints on naming it publicly (NDA/IP)? Presenting it as a shipped/completed case study reads stronger than "current" — confirm the engagement end date framing.
- Permission to name Oregon State Hospital outcomes publicly (state employers are usually fine; confirm specific attributions allowed).
- Downloadable resume PDF for the Experience page — which tailored version (the OHSU/interim-executive executive variant is the recommended canonical one)?
- Blog: commit to 2–3 substantive posts or park it?
- Mercury Systems: confirms remaining absent from all site copy (it is absent today — keep it that way).