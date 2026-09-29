# Home Reference — Phase 2B Batch 2: Five New Evergreen Reference Articles

> **Stage:** Content Production & Evergreen Library Expansion  
> **Status:** 5 New Evergreen Reference Articles Authored & Verified · 10 Total Authored Articles Live  
> **Target Production Engine:** Astro 5 (Static Site Generation / SSG) deployed on Vercel  
> **Execution Status:** Phase 2B Batch 2 Complete.

---

## 1. Executive Summary & Batch 2 Mission

In **Phase 2B Batch 2**, Home Reference expanded its library of authoritative reference guides from the initial 5 flagship articles to **10 fully authored evergreen reference articles**.

Following the strict editorial standard established in Phase 2B.1 and refined in Phase 2B.1.1, each of the five new articles was authored with:
* Complete, human-natural explanations written independently for its subject (no mechanical duplication of section ordering, wording, or metaphors).
* Rigorous fact-tier classification (Tiers A, B, and C) with primary source citations from recognized standards bodies and government agencies.
* Clear distinctions between homeowner observation (Tier 1), routine maintenance (Tier 2), professional diagnostics (Tier 3), and licensed trade work (Tier 4).
* Honest planning ranges rather than false precision or rigid deadlines.
* Plain-English analogies paired with technically accurate physical and thermodynamic principles.

---

## 2. Batch 2 Article Registry

| # | Article Title | Canonical Route | Content File | Pillar | Schema |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **6** | **Central Air Conditioner Lifespan, Efficiency & Replacement Guide** | `/systems/central-ac-lifespan-and-efficiency/` | `src/content/reference/central-ac-lifespan.ts` | Home Systems (`systems`) | `Article` |
| **7** | **Furnace Lifespan, Warning Signs & Replacement Guide** | `/systems/furnace-lifespan-and-replacement/` | `src/content/reference/furnace-lifespan-and-replacement.ts` | Home Systems (`systems`) | `Article` |
| **8** | **Dishwasher Lifespan & Maintenance Guide** | `/appliances/dishwasher-lifespan-and-care/` | `src/content/reference/dishwasher-lifespan-and-care.ts` | Appliances (`appliances`) | `Article` |
| **9** | **Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety** | `/appliances/clothes-dryer-lifespan-and-vent-safety/` | `src/content/reference/clothes-dryer-lifespan.ts` | Appliances (`appliances`) | `Article` |
| **10** | **Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs** | `/everyday/what-to-do-when-circuit-breaker-trips/` | `src/content/reference/circuit-breaker-tripping.ts` | Everyday Household Knowledge (`everyday`) | `Article` |

---

## 3. Detailed Breakdown of the Five New Articles

### Article 6: Central Air Conditioner Lifespan, Efficiency & Replacement Guide
* **Route:** `/systems/central-ac-lifespan-and-efficiency/`
* **Pillar:** Home Systems (`systems`)
* **Core Distinction:** Runtime-dependent longevity (10–14 years in hot southern Sunbelt climates with 2,000+ run hours vs. 15–20+ years in moderate northern climates with under 800 hours).
* **Technical Rigor:** Explains the vapor-compression thermodynamic loop, the significance of the 2023 DOE SEER2 testing procedure (higher 0.5" w.c. external static pressure), and the ongoing EPA AIM Act low-GWP refrigerant transition from R-410A to A2L refrigerants (R-454B and R-32).
* **Decision Framework:** Employs the "$5,000 Rule" (Age × Repair Cost) alongside refrigerant leak economics.
* **Safety Boundaries:** Tier 2 gentle outdoor coil garden-hose washing vs. Tier 4 EPA-certified refrigerant recovery and compressor replacement.
* **Citations:** ASHRAE Equipment Life Expectancy, DOE Energy Saver SEER2 standards, EPA AIM Act, AHRI Directory of Certified Product Performance.

### Article 7: Furnace Lifespan, Warning Signs & Replacement Guide
* **Route:** `/systems/furnace-lifespan-and-replacement/` (with alias `/systems/furnace-lifespan-and-warning-signs/`)
* **Pillar:** Home Systems (`systems`)
* **Core Distinction:** Differentiates gas/propane furnaces (15–20 years) from electric resistance furnaces (20–25 years).
* **Technical Rigor:** Clarifies heat exchanger metal fatigue under hundreds of thousands of expansion/contraction cycles. Details carbon monoxide combustion risks, proper steady blue flame diagnostics, and standard 80% AFUE chimney venting vs. 90–98% AFUE condensing systems with secondary stainless steel heat exchangers and PVC sidewall venting.
* **Safety Boundaries:** Non-negotiable carbon monoxide evacuation rules; Tier 1 monthly CO detector checks (NFPA 72); prohibition against welding or patching cracked heat exchangers.
* **Citations:** NFPA 54 (National Fuel Gas Code), NFPA 72, AHRI Residential Furnace Longevity Standards, DOE Energy Saver, InterNACHI.

### Article 8: Dishwasher Lifespan & Maintenance Guide
* **Route:** `/appliances/dishwasher-lifespan-and-care/`
* **Pillar:** Appliances (`appliances`)
* **Core Distinction:** Resolves the #1 consumer misconception: poor cleaning performance is rarely motor failure, but rather neglected manual-clean cylindrical mesh filters introduced to make modern dishwashers quiet (<48 dBA).
* **Technical Rigor:** Explains enzymatic detergent chemistry (why excessive pre-rinsing causes etching and unspent foam), mineral nozzle scaling in spinning spray arms, and condensation drying physics on stainless steel vs. low-thermal-mass plastics.
* **Maintenance & Repair:** Step-by-step quarter-turn filter removal and soft-brush cleaning; quarterly citric acid descaling; 50% economic repair rule.
* **Citations:** AHAM Service Life Surveys, DOE ENERGY STAR, NSF/ANSI Standard 184 (Sanitization Criteria), Consumer Reports.

### Article 9: Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety
* **Route:** `/appliances/clothes-dryer-lifespan-and-vent-safety/`
* **Pillar:** Appliances (`appliances`)
* **Core Distinction:** Explains why dryers outlast washing machines (12–16 years for electric, 11–15 years for gas) due to mechanical simplicity and absence of violent high-speed wet balancing stress.
* **Fire Safety & Building Codes:** Cites NFPA statistics (13,000+ dryer fires annually in the U.S. from lint accumulation) and International Residential Code (IRC M1502) requirements mandating 4-inch rigid metal ducting, prohibiting thin vinyl/plastic/foil accordion hoses, and restricting equivalent runs to 35 feet.
* **Technical Diagnostics:** Details how a choked duct blows the non-resettable thermal cutoff safety fuse, resulting in a drum that spins with zero heat.
* **Citations:** NFPA Research on Dryer Fires, International Code Council (IRC M1502), CPSC Dryer Safety Alerts, AHAM.

### Article 10: Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs
* **Route:** `/everyday/what-to-do-when-circuit-breaker-trips/`
* **Pillar:** Everyday Household Knowledge (`everyday`)
* **Core Safety Purpose:** Demystifies the circuit breaker as an electromechanical safety valve protecting copper wall conductors from thermal overload and structure fires.
* **Technical Distinctions:** Clearly differentiates between:
  1. Circuit Overloads (thermal bimetallic strip bending over seconds/minutes)
  2. Short Circuits (electromagnetic instantaneous snap under high amp surges)
  3. Ground Faults (GFCI milliamp leakage detection)
  4. Arc Faults (AFCI microprocessor high-frequency waveform analysis)
* **Practical Reset Heuristic:** Teaches the essential two-step reset (pushing firmly to OFF to reset the spring latch before switching to ON), solving the universal homeowner frustration of "bouncing" breaker switches.
* **Hazard Flags:** Explicitly identifies obsolete Federal Pacific Electric (FPE) Stab-Lok and Zinsco/Sylvania panels with documented high failure-to-trip rates under test conditions.
* **Citations:** NFPA 70 (National Electrical Code / NEC), CPSC Electrical Safety, UL 489, IEEE Standard 241.

---

## 4. Fact Tier Distribution Across Batch 2

All empirical statements in Batch 2 articles adhere strictly to the established Home Reference factual hierarchy:
* **Tier A (Documented Standards / Regulatory Rules):**
  - SEER2 regional efficiency testing standards (DOE)
  - AIM Act HFC low-GWP refrigerant transition (EPA)
  - 15–20 year gas furnace heat exchanger baseline (AHRI)
  - Steady blue flame combustion baseline (NFPA 54)
  - 120°F water intake requirement & NSF 184 sanitize standard (150°F+)
  - IRC M1502 4-inch rigid metal dryer duct requirements & 35-ft maximum run
  - NFPA clothes dryer fire frequency data
  - NEC Article 210/240 branch circuit ampacities (15A / 20A) & 80% continuous load rule
  - FPE Stab-Lok and Zinsco documented non-trip failure hazard
* **Tier B (Practical Household Heuristics):**
  - Annual spring condenser coil wash
  - Monthly dishwasher cylindrical filter cleaning
  - Cleaning dryer lint screen after every load
  - Two-step breaker reset procedure (push to OFF before ON)
  - 30–40 year electrical panel service life benchmark
* **Tier C (Variable Planning Ranges):**
  - 12–17 year AC lifespan (climate/runtime dependent)
  - $5,500–$11,500 AC installed replacement cost
  - $3,200–$7,500 gas furnace replacement cost
  - $500–$1,200 dishwasher unit cost
  - $550–$1,100 clothes dryer unit cost
  - $1,800–$4,200 electrical panel replacement cost
* **Tier D:** Zero unsupported claims.

---

## 5. Architectural & Cross-Linking Integrity

* **Organic Interlinking:** All 10 authored articles across Batches 1 and 2 now cross-link to each other based on authentic topical relationships (e.g. Central AC links to HVAC Filters and Furnace; Clothes Dryer links to Circuit Breakers and Dishwasher; Furnace links to Central AC and Major Components).
* **Registry Synchronization:** The content collections index (`src/content/index.ts`) seamlessly exports `BATCH_1_COLLECTION`, `BATCH_2_COLLECTION`, and `ALL_AUTHORED_ARTICLES`.
* **Zero Duplicate Slugs:** `src/data/articlesData.ts` filters out planned stubs that have been authored, ensuring zero duplicate IDs, routes, or conflicting search results.
* **Zero Unnecessary JS:** Pure semantic markup styled with Tailwind CSS; no client-side state bloat or third-party tracking scripts.

---

## 6. Build & Quality Verification

* **TypeScript Compilation:** Passed with 0 errors.
* **Code Linting:** Passed with 0 errors.
* **Production Build (`npm run build`):** Succeeded with 0 warnings.
