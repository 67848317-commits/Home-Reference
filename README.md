# Home Reference — U.S. Household Knowledge & Reference Website

> **A practical digital household reference manual for everyday U.S. homeowners, prospective buyers, and renters.**

---

## 1. What This Project Is
**Home Reference** is an authoritative, clean, objective digital reference manual designed specifically for American households. It helps everyday homeowners understand, maintain, diagnose, repair, replace, and budget around common home systems, appliances, building elements, and household maintenance issues.

* **Core Mission:** *Understand your home. Maintain it better. Make informed household decisions.*
* **Primary Content Unit:** The **Reference Article**—featuring direct 15-second Quick Answers, empirical lifespan tables, diagnostic warning signs, preventative maintenance schedules, and realistic cost factors.
* **Tone & Atmosphere:** Calm, editorial, practical, objective, and deeply respectful of homeowner safety and time.

---

## 2. What This Project Is NOT
* **NOT a generic lifestyle blog:** No personal recipe-style intros, no fluff, no filler text.
* **NOT a contractor lead-generation trap:** No forced ZIP-code forms, no high-pressure contractor spam calls.
* **NOT an affiliate catalog:** No disguised reviews pushing replacement purchases when a simple $15 gasket or filter clean resolves the issue.
* **NOT a calculator site:** Unlike previous projects focused on computation, Home Reference focuses on structured knowledge and reference comprehension.
* **NOT a licensed professional service:** Clarifies professional boundaries where licensed plumbers, HVAC technicians, or master electricians are legally required by municipal codes.

---

## 3. Critical Visual Differentiation
Home Reference is built with an entirely new visual design language inspired by modern American home reference books, architectural monographs, and printed field guides:
* **Editorial Palette:** Warm paper canvas (`#FAF8F5`), limestone surface (`#F4EFEA`), deep charcoal ink (`#1C1917`), and restrained terracotta clay (`#8C4736`). Zero neon accents or tech gradients.
* **Typography:** Characterful Newsreader serif display paired with clean Plus Jakarta Sans body prose and monospace tabular numerals (`tabular-nums`).
* **Zero-Pill Discipline:** All metadata (categories, reading times, review dates) is rendered as clean unboxed text separated by typographic bullets (`·`).
* **Anti-Card Overuse:** Whitespace, hierarchy, and delicate hairline rules replace repetitive rounded-2xl cards.
* **Top Bar Contract:** Clean single-wordmark brand zone, 6 text navigation links with subtle underline hovers, and quiet secondary links.

---

## 4. Production Architecture & Technology Stack
* **Target Production Engine:** [Astro 5](https://astro.build/) configured strictly for **Static Site Generation (SSG)**
* **Deployment Target:** [Vercel](https://vercel.com/) (Edge CDN static delivery)
* **Client Runtime:** **Zero client-side JavaScript** for standard reference reading; optional lightweight React islands only when interactive features genuinely require them
* **Styling:** Utility-focused Tailwind CSS with dedicated editorial design tokens
* **Structured Data:** Semantic JSON-LD (`Article`, `TechArticle` conditional, `BreadcrumbList`, `WebSite`)
* **Development Scaffold:** Complete routing, category hubs, 15-module article layout, and instant reference search active in local preview

---

## 5. Phase 2B Batch 1 Status: Content Collections & 5 Flagships Complete
* Full Phase 2B Batch 1 specification documented in [`docs/PHASE_2B_BATCH_1.md`](./docs/PHASE_2B_BATCH_1.md).
* Machine-readable metadata configured in [`metadata.json`](./metadata.json).
* Astro 5 Content Collections architecture live under `src/content/`:
  * `src/content/config.ts` (Type schema for articles, key facts, sources, and warning matrices)
  * `src/content/index.ts` (Collection query interface: `getCollection('reference')`, `getEntry()`)
  * `src/content/reference/` (Modular content files for each authored article)
* Five Flagship Reference Articles fully authored, verified, and active:
  * `/systems/water-heater-lifespan-and-replacement/` (Water Heater Lifespan, Warning Signs & Replacement)
  * `/appliances/refrigerator-lifespan-and-maintenance/` (Refrigerator Lifespan, Condenser Coils & Maintenance)
  * `/maintenance/hvac-filter-replacement-schedule/` (HVAC Air Filter Replacement Schedule & MERV Guide)
  * `/lifespan/home-systems-appliances-lifespan-table/` (Major Home Components Master Lifespan Reference Table)
  * `/everyday/main-water-shutoff-valve-guide/` (Emergency Water Shutoff: Locate & Test Main Valves)
* Strict enforcement of the Phase 1.1 principle: **Template consistency, not content uniformity** (8 Core Modules + only contextually relevant Conditional Modules).
* Dynamic Schema.org structured data (`Article`, `TechArticle`, `BreadcrumbList`, `WebSite`), XML sitemap, and robots.txt.

---

## 6. Next Phase: Phase 2B Batch 2
* **Batch 2 Reference Articles (5 articles):**
  * Central Air Conditioning Systems Lifespan & SEER2 Regulations (`/systems/central-ac-lifespan-and-efficiency/`)
  * Residential Furnace Lifespans & Heat Exchanger Safety (`/systems/furnace-lifespan-and-warning-signs/`)
  * Dishwasher Lifespan & Filter Cleaning (`/appliances/dishwasher-lifespan-and-care/`)
  * Clothes Dryer Longevity & Vent Fire Safety (`/appliances/clothes-dryer-lifespan-and-vent-safety/`)
  * What to Do When a Circuit Breaker Trips (`/everyday/what-to-do-when-circuit-breaker-trips/`)
* **Continued Verification against 4-tier Fact & Safety frameworks.**

---

## 7. Development Workflow
To run the local preview:

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Check types and syntax
npm run lint

# Build production bundle
npm run build
```

---
*Maintained under Phase 2B Batch 1 Production Content Architecture standards.*
