# Home Reference — U.S. Household Knowledge & Reference Website

> **Understand your home. Maintain it better. Make informed household decisions.**

Production website: [https://homereference.org/](https://homereference.org/)

---

## 1. Project Positioning

**Home Reference** is an independent, non-commercial U.S. household knowledge and reference manual for homeowners, prospective home buyers, and renters. It is organized around plain-English technical explanations, documented safety boundaries, planning lifespan benchmarks, warning signs, and preventative maintenance guidance.

Home Reference is strictly an informational reference resource:
- **Not** a generic lifestyle blog or filler directory
- **Not** a contractor lead-generation funnel or ZIP-code referral trap
- **Not** an affiliate sales catalog or commission-based review site
- **Not** a calculator site or licensed trade contractor substitute

---

## 2. Architecture & Technology Stack

- **Framework:** [Astro 5](https://astro.build/) (`astro.config.mjs`) configured for **Static Site Generation (SSG)**
- **Deployment:** [Vercel](https://vercel.com/) static CDN (`dist/`)
- **Language & Styling:** TypeScript (`tsconfig.json`) and Tailwind CSS v4 (`@tailwindcss/vite`)
- **Rendering & Hydration:**
  - All reference articles, pillar hubs, `/about/`, `/costs/`, `/404.html`, technical schematics, and the 59-row `MasterLongevityTable` render statically into semantic HTML at build time (`src/layouts/BaseLayout.astro`).
  - Minimal React islands (`@astrojs/react`) hydrate client-side only for site navigation (`Header client:load`) and instant reference search (`SearchModal client:idle`).
- **SEO & Structured Data (`src/utils/seo.ts`):**
  - Dynamic JSON-LD (`WebSite`, `Organization`, `BreadcrumbList`, `Article`, `TechArticle`, and FAQ `Question`/`Answer` nodes)
  - Canonical tags, Open Graph / Twitter metadata, `public/robots.txt`, and `public/sitemap.xml` (17 canonical URLs)
- **Analytics & Monetization:**
  - **Google Analytics 4 (GA4):** Production-only `gtag.js` snippet in `src/layouts/BaseLayout.astro`, configured via the `PUBLIC_GA_MEASUREMENT_ID` environment variable (`G-*` validation; no hardcoded IDs)
  - **Google AdSense:** Site-wide AdSense script in `BaseLayout.astro` paired with `public/ads.txt`

---

## 3. Repository Structure

```text
├── astro.config.mjs              # Astro 5 SSG config (site: https://homereference.org, port 3000)
├── metadata.json                 # Machine-readable project baseline metadata
├── package.json                  # Scripts: dev, build, preview, clean, lint (tsc --noEmit)
├── public/
│   ├── ads.txt                   # Authorized seller declaration (AdSense)
│   ├── robots.txt                # Crawler rules & sitemap declaration
│   └── sitemap.xml               # Static XML sitemap (17 canonical published URLs)
├── src/
│   ├── components/               # UI modules, Header/Footer, SearchModal, Longevity Table, diagrams/
│   ├── content/
│   │   ├── config.ts             # ReferenceArticleContent schema
│   │   ├── index.ts              # Authored 10-article registry & query helpers
│   │   └── reference/            # 10 published reference article modules (.ts)
│   ├── data/
│   │   ├── pillarsData.ts        # 5 active reference hubs + Costs editorial note
│   │   ├── articlesData.ts       # Published collection + internal-only PLANNED_TOPICS_REGISTRY
│   │   └── architectureData.ts   # Internal V1 architecture planning reference (not publicly routed)
│   ├── layouts/
│   │   └── BaseLayout.astro      # Shared HTML head, SEO meta, GA4, AdSense, JSON-LD, Header/Footer
│   ├── pages/
│   │   ├── index.astro           # Homepage (/)
│   │   ├── about.astro           # Editorial Methodology & Standards (/about/)
│   │   ├── 404.astro             # Custom static 404 page (noindex)
│   │   ├── [pillar]/[slug].astro # Dynamic SSG routes for 10 canonical articles + 3 alias paths
│   │   ├── systems/index.astro   # Home Systems hub (/systems/)
│   │   ├── appliances/index.astro# Appliances hub (/appliances/)
│   │   ├── maintenance/index.astro# Home Maintenance hub (/maintenance/)
│   │   ├── lifespan/index.astro  # Lifespan & Replacement hub (/lifespan/)
│   │   ├── everyday/index.astro  # Everyday Household Knowledge hub (/everyday/)
│   │   └── costs/index.astro     # Costs & Ownership editorial note (/costs/, noindex, follow)
│   └── utils/seo.ts              # Schema.org JSON-LD builders
└── docs/                         # Audit trails, Claim-Level Evidence Registry, phase reports
```

*Note: Legacy `vite.config.ts` remains in the repository root as an unused artifact from pre-Astro scaffolding and is not used by `astro dev` or `astro build`.*

---

## 4. Published Content Baseline (10 Articles & Active Hubs)

### Top-Level & Pillar Pages
- `/` — Homepage
- `/about/` — Editorial Methodology, Source Hierarchy & Commercial Independence
- `/systems/` — Home Systems Hub
- `/appliances/` — Appliances Hub
- `/maintenance/` — Home Maintenance Hub
- `/lifespan/` — Lifespan & Replacement Hub
- `/everyday/` — Everyday Household Knowledge Hub
- `/costs/` — Editorial Organization Note (`noindex, follow`, excluded from `sitemap.xml`)
- `/404.html` — Static 404 Error Page (`noindex, follow`, excluded from `sitemap.xml`)

### Published Reference Articles (Canonical Routes)
1. `/systems/water-heater-lifespan-and-replacement/` — Water Heater Lifespan, Anode Rod Science & Replacement Guide
2. `/systems/central-ac-lifespan-and-efficiency/` — Central Air Conditioning Lifespan, SEER2 Rules & Early Failure Signs
3. `/systems/furnace-lifespan-and-replacement/` — Residential Furnace Lifespan & Heat Exchanger Safety *(alias: `/systems/furnace-lifespan-and-warning-signs/`)*
4. `/appliances/refrigerator-lifespan-and-maintenance/` — Refrigerator Lifespan, Vapor-Compression Diagnostics & Maintenance
5. `/appliances/dishwasher-lifespan-and-care/` — Dishwasher Lifespan, Filter Care & Seal Maintenance
6. `/appliances/clothes-dryer-lifespan-and-vent-safety/` — Clothes Dryer Lifespan, Lint Trap Care & Vent Fire Safety
7. `/maintenance/hvac-filter-replacement-schedule/` — HVAC Air Filter Replacement Schedule, MERV Ratings & Airflow Static Pressure
8. `/lifespan/major-home-components-lifespan/` — Major Home Components & Appliances Master Lifespan Reference (59 entries) *(alias: `/lifespan/home-systems-appliances-lifespan-table/`)*
9. `/everyday/main-water-shutoff/` — Emergency Main Water Shutoff Valve Location & Valve Care *(alias: `/everyday/main-water-shutoff-valve-guide/`)*
10. `/everyday/what-to-do-when-circuit-breaker-trips/` — Circuit Breaker Tripping: Overload, Short Circuit & Reset Safety

*Internal planning records (`PLANNED_TOPICS_REGISTRY` in `src/data/articlesData.ts` and `src/data/architectureData.ts`) are not routed, linked, or listed in `public/sitemap.xml`.*

---

## 5. Completed Phases & Deferred Work

### Completed Phases
- **Astro 5 SSG Migration & Initial 10-Article Authoring:** Completed Batches 1 & 2 across 5 active pillars plus `/about/` and `/costs/`.
- **Phases 1.1 – 1.2 (Content Value & Architecture Recovery):** Differentiated flagship article layouts, added explanatory technical schematics, and established explicit editorial transparency on `/about/`.
- **Phases 1.3 – 1.3.2 (Claim Verification & Safety Boundary Audits):** Created `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` separating Priority Claims (`16` reviewed) from the `59`-row `MasterLongevityTable`, removed unsupported anode/diagnostic/volume intervals, verified CPSC Pub. 5098 scald burn thresholds, qualified *Legionella* / T&P / flushing claims, and verified EPA Section 608 (including the small-appliance disposal exemption) and EPA SNAP R-600a boundaries.
- **Phase 1.4 (Content Stability, Editorial Freeze & Final QC):** Synchronized repository documentation, qualified remaining water-heater sediment/overheating causal claims, removed the unsupported `"will void insurance"` statement, simplified household R-600a guidance, added static `404.astro`, and froze content/architecture for organic-search observation.

### Explicitly Deferred Work
- Authoring new reference articles beyond the 10-article baseline (from internal `PLANNED_TOPICS_REGISTRY`)
- Row-by-row primary empirical verification of the remaining 55 `UNVERIFIED` rows in `MasterLongevityTable.tsx` (explicitly disclosed as planning estimates in the table footer)
- Post-freeze Google Search Console monitoring, indexing review, and organic search expansion planning

---

## 6. Build & Validation Commands

```bash
# Install dependencies
npm install

# Start Astro development server (port 3000)
npm run dev

# Run TypeScript validation (tsc --noEmit)
npm run lint

# Build static production site to dist/
npm run build

# Preview production build locally
npm run preview
```

---
*Editorial Freeze Baseline: Phase 1.4 (`https://homereference.org/`).*
