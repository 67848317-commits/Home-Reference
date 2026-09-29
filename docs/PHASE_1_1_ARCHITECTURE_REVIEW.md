# Home Reference — Phase 1.1 Architecture Correction & Pre-Implementation Review

> **Stage:** Pre-Implementation Review & Quality Hardening  
> **Status:** Architecture Corrections Complete  
> **Target Production Engine:** Astro 5 (Static Site Generation / SSG) deployed on Vercel  
> **Execution Rule:** Review and correction stage only. **Do NOT begin Phase 2 implementation.**

---

## 1. Executive Summary

Phase 1 established the overarching vision for **Home Reference** as a digital household reference manual centered on the concept of **UNDERSTAND** (*Understand your home. Maintain it better. Make informed household decisions.*), firmly separated from calculator tools, lifestyle blogs, and contractor lead-generation traps.

However, a critical pre-implementation architectural audit revealed several assumptions, taxonomy ambiguities, and unverified numeric claims that would have created technical debt or weakened editorial credibility if carried directly into Phase 2:
1. **Technology Mischaracterization:** The preview environment (React SPA) was conflated with the intended production architecture. The production stack is strictly **Astro 5 SSG → static HTML/CSS → Vercel**, with minimal client-side JavaScript and optional React islands only where an interactive micro-component genuinely requires them.
2. **Artificial Numeric Precision:** Phase 1 draft data included hardcoded lifespan percentages (e.g., *"hard water cuts lifespan by 20–40%"*), rigid regional claims (Sunbelt vs. North), and specific component cycle counts (e.g., *"10,000 garage door spring cycles"*) without classification. These must be categorized into sourceable benchmarks, rules of thumb, or variable estimates.
3. **Overstated Industry Standards:** The consumer "50% Rule" for appliance repair vs. replacement was described as an official formula, and 120°F water heater settings were described as a universal "OSHA/CDC residential standard." Both must be reframed as practical consumer guidance and scald-prevention recommendations with household-specific nuances.
4. **Template Rigidity ("Content Uniformity Risk"):** The 15-module reference layout risked forcing irrelevant modules (e.g., forcing a replacement cost breakdown or fuel variation table onto a simple diagnostic question). Modules are now categorized into **Core Modules** (required on all articles) and **Conditional Modules** (used only when logically appropriate).
5. **Overgeneralized Regulatory & Safety Language:** Blanket statements claiming certain tasks "legally require a licensed professional" have been corrected to jurisdiction-sensitive language (*"may require a licensed professional depending on the scope of work and local municipal building codes"*).
6. **Schema.org Realities:** Unconditional assignment of `TechArticle` and `FAQPage` across all articles ignored Google's search documentation updates. We establish a nuanced schema hierarchy prioritizing standard `Article`, reserving `TechArticle` for genuinely technical mechanical breakdowns, and applying `FAQPage` strictly where compliant with current search engine guidelines.

---

## 2. Summary of Changes Made Across Architecture

| Area | Phase 1 Initial Assumption | Phase 1.1 Corrected Architecture |
| :--- | :--- | :--- |
| **Technology Stack** | Described ambiguously with "React SPA" and "Cloud Run". | Standardized to **Astro 5 SSG → static HTML/CSS → Vercel**. Minimal JS runtime; optional React islands only if interactive features demand them. |
| **Repair vs. Replace Framework** | "The 50% Rule" described as an authoritative industry standard. | Reframed as a **common consumer rule of thumb** balancing age, repair history, efficiency, part availability, reliability, and local labor rates. |
| **Water Heater Temperature** | "120°F OSHA/CDC mandatory residential standard." | Reframed as **manufacturer and safety agency scald-prevention baseline** (120°F balances scald risk against Legionella control and dishwasher sanitizing needs). |
| **Numeric Claims & Lifespans** | Single point estimates and unverified percentage drops presented as facts. | Established a **4-Tier Fact Verification Framework** (A: Strongly Sourceable, B: Rule of Thumb, C: Highly Variable Estimate, D: Unsupported/Requires Verification). |
| **15-Module Template** | Rigid requirement that every article contain all 15 modules. | Divided into **8 Core Modules** and **7 Conditional Modules**. *Principle: Template consistency must not become content uniformity.* |
| **Safety Claims & Licensing** | Sweeping nationwide claims of mandatory contractor licensing. | Differentiated into four distinct tiers: Homeowner Observation, Homeowner Maintenance, Professional Diagnosis, and Licensed Trade Work. |
| **Structured Data** | Universal `TechArticle` and `FAQPage` injection. | Base `Article` schema, conditional `TechArticle`, and conservative `FAQPage` application aligned with current search engine documentation. |
| **Internal Linking** | Rigid quota of "exactly 3 contextual links per article". | Replaced with **contextual relevance rule**: link where naturally helpful to the reader's comprehension. |
| **AdSense Architecture** | Arbitrary numerical quota of "2–3 ads per 1,500 words". | Replaced with **qualitative policy standards**: non-intrusive placement, no mimicry of alerts, no obstruction of the Quick Answer. |

---

## 3. Six-Pillar Taxonomy Review & Scope Hardening

The six content pillars have been audited to ensure clear independent user purpose without semantic overlap or empty category hubs:

### Pillar 1: Home Systems (`/systems/`) — 8 Articles
* **Audit Verdict: KEEP (Strong Core Anchor)**
* **Role:** Covers permanently installed residential infrastructure (HVAC, plumbing supply, electrical service panel, roofing envelope, windows, garage door mechanics).
* **Boundary Clarification:** Handles the physical and operational mechanics of whole-house infrastructure. Preventative cleaning routines (e.g., filter swaps) defer to Pillar 3 (Maintenance).

### Pillar 2: Appliances (`/appliances/`) — 8 Articles
* **Audit Verdict: KEEP (High Search Volume & Evergreen Value)**
* **Role:** Covers built-in and major freestanding mechanical equipment (refrigerators, dishwashers, clothes washers, dryers, cooking ranges, microwaves, disposals, softeners).
* **Boundary Clarification:** Focuses on equipment longevity, operational symptoms, and component diagnostics. General economic repair vs. replace formulas defer to Pillar 5 (Costs).

### Pillar 3: Home Maintenance (`/maintenance/`) — 5 Articles
* **Audit Verdict: KEEP (Action-Oriented Preventative Care)**
* **Role:** Step-by-step procedures, cadences, and seasonal routines that prevent catastrophic failures (flushing water heaters, cleaning dryer ducts, testing sump pumps, gutter drainage, HVAC filters).
* **Boundary Clarification:** Must focus on *how* and *when* to maintain. Avoid repeating the entire technical design of the system; link directly back to Pillar 1 or 2 for deep mechanics.

### Pillar 4: Lifespan & Replacement (`/lifespan/`) — 5 Articles
* **Audit Verdict: KEEP, but Reframed as a Cross-Cutting Reference Hub**
* **Role:** Solves a major consumer search behavior (*"How long does X last?"*).
* **Refined Purpose:** Rather than duplicating standalone system articles, Pillar 4 serves as a **cross-category comparison and benchmark library**. It houses the Master Household Lifespan Lookup Table, cross-technology comparisons (Tank vs. Tankless), safety expiration mandates (10-Year Smoke Alarm Rule), and structural replacement indicators.

### Pillar 5: Costs & Ownership (`/costs/`) — 2 to 3 Articles
* **Audit Verdict: KEEP, but Strictly Constrained to Decision Frameworks & Factors**
* **Role:** Focuses on the financial economics of homeownership without acting as a volatile "price list".
* **Refined Purpose:** Explains *why* estimates vary (labor rates, duct modifications, electrical capacity, seasonal premiums) and articulates decision frameworks (such as the consumer 50% rule of thumb).

### Pillar 6: Everyday Household Knowledge (`/everyday/`) — 2 to 4 Articles
* **Audit Verdict: KEEP as an Essential Household Safety & Utility Hub (Expanded from 2 to 4 Topics)**
* **Scope Evaluation:** In Phase 1, Everyday Knowledge had only 2 articles (Emergency Water Shutoff and Circuit Breaker Tripping), risking a thin category hub.
* **Resolution:** Rather than artificially padding, we recognize that basic household literacy requires two additional high-impact foundational topics that every homeowner, tenant, and buyer immediately searches for:
  1. *What to Do During a Power Outage: Food Safety, Sump Pumps & Surge Protection*
  2. *Hard Water Signs in the Home: Effects on Plumbing, Appliances & Fixtures*
  This brings Pillar 6 to **4 foundational articles**, giving the hub legitimate depth without scope creep.

---

## 4. V1 30-Article Audit Table

Every proposed V1 article has been audited against search intent, standalone value, overlap risk with previous projects, factual verification requirements, and taxonomy fit:

| # | Proposed Article Title | Recommendation | Reason & Adjustments | Overlap Risk | Fact Verification Requirement | Category |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Water Heater Lifespan, Warning Signs & Replacement Guide | **KEEP & REFINE** | High-utility evergreen anchor. Must qualify tank lifespan by water quality and maintenance. | Low | Classify 8–12 yr benchmark; source against AHRI/DOE. | `systems` |
| 2 | How Long Central Air Conditioning Systems Last in U.S. Climates | **KEEP & REFINE** | High intent. Replace rigid regional claims with climate-zone run-hour principles. | Low | Qualify 12–17 yr range; cite ASHRAE/DOE run-hour guidelines. | `systems` |
| 3 | Residential Furnace Lifespans: Gas, Electric & Oil Comparisons | **KEEP & REFINE** | Essential winter safety. Heat exchanger crack diagnosis requires strict safety framing. | Low | Source AFUE benchmarks and NFPA safety notes. | `systems` |
| 4 | How Long Asphalt Shingle Roofs Last (Architectural vs. 3-Tab) | **KEEP & REFINE** | High capital decision. Distinguish granule loss vs hail damage vs storm failure. | Moderate (Home Project Tools) | Verify 15–20 yr (3-tab) vs 25–30 yr (laminate) with ARMA/NRCA. | `systems` |
| 5 | Electrical Panel Capacity: Signs Your 100A or 200A Service Needs Upgrading | **KEEP & REFINE** | Decisional and safety critical. Detail obsolete panels (FPE/Zinsco) carefully with CPSC data. | Low | Cite NEC residential service standards and CPSC recalls. | `systems` |
| 6 | Residential Plumbing Pipe Lifespans: Copper, PEX, Galvanized & Cast Iron | **KEEP & REFINE** | Diagnostic for older homes. Differentiate acidic water pinhole risks from age wear. | Low | Source ASTM pipe standards and AWWA lifespans. | `systems` |
| 7 | Double-Pane Window Lifespan, Seal Failure & Energy Impact | **KEEP & REFINE** | Diagnostic guide for insulated glass units (IGU). Clarify seal fogging vs sash failure. | Low | Source IGMA/AAMA thermal seal benchmarks. | `systems` |
| 8 | Garage Door & Opener Lifespan: Springs, Openers & Safety Sensors | **KEEP & REFINE** | Reframe "10,000 spring cycles" as a manufacturer rating, not guaranteed calendar years. | Low | Verify DASMA spring cycle ratings and UL 325 sensor standards. | `systems` |
| 9 | How Long Does a Refrigerator Last? Lifespan, Warning Signs & Maintenance | **KEEP & REFINE** | Top searched appliance query. Frame compressor failure symptoms accurately. | Low | Source AHAM 10–14 yr appliance longevity survey. | `appliances` |
| 10 | Dishwasher Lifespan & Common Reasons for Poor Cleaning | **KEEP & REFINE** | Clear homeowner diagnostic value (spray arm clogs, filters, hard water). | Low | Verify AHAM benchmark (9–12 yrs); avoid single-brand claims. | `appliances` |
| 11 | Washing Machine Lifespan: Front-Load vs. Top-Load Durability | **KEEP & REFINE** | Comparative value. Address front-load bearing stress and door boot mold. | Low | Source AHAM data; note mechanical difference (agitator vs direct drive). | `appliances` |
| 12 | Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety | **KEEP & REFINE** | Crucial fire safety angle. Balance heating element failure vs vent restriction. | Low | Cite CPSC and NFPA dryer fire statistical reports. | `appliances` |
| 13 | Kitchen Oven & Range Lifespan: Gas vs. Electric Cooktop Durability | **KEEP & REFINE** | Solid reference. Compare gas glow-bar igniters with electric radiant coil burnout. | Low | Source AHAM expected service life data. | `appliances` |
| 14 | Microwave Oven Lifespan: Countertop vs. Over-the-Range (OTR) | **KEEP & REFINE** | Cost of repair vs replace threshold is high here (magnetron replacement rarely economical). | Low | Verify 7–10 yr lifespan with AHAM/CPSC data. | `appliances` |
| 15 | Garbage Disposal Lifespan: Jam Diagnostics, Blades & Replacement Signs | **KEEP & REFINE** | Practical diagnosis. Clarify internal motor seal leaks (non-repairable) vs jams (resettable). | Low | Verify 8–12 yr average service life. | `appliances` |
| 16 | Whole-House Water Filtration & Softener Systems: Lifespan and Media Care | **KEEP & REFINE** | Growing U.S. suburban concern. Differentiate resin bed life from control head life. | Low | Source WQA (Water Quality Association) standards. | `appliances` |
| 17 | HVAC Air Filter Replacement Guide: MERV Ratings, Thickness & Frequency | **KEEP & REFINE** | Extremely high search utility. Reframe MERV 13 static pressure warnings accurately. | Low | Cite ASHRAE 52.2 MERV testing standards and filter OEM data. | `maintenance` |
| 18 | Dryer Vent Cleaning Schedule & How to Prevent Dangerous Lint Buildup | **KEEP & REFINE** | High safety utility. Emphasize rigid metal vs code-violating flexible vinyl ducts. | Low | Cite IRC M1502 dryer exhaust building code requirements. | `maintenance` |
| 19 | Water Heater Flushing Guide: Why and How Often to Remove Sediment | **KEEP & REFINE** | Preventative maintenance procedure. Highlight caution on severely aged, neglected valves. | Low | Verify sediment insulating effect with DOE/plumbing manuals. | `maintenance` |
| 20 | Gutter Cleaning Cadence & Downspout Foundation Protection | **KEEP & REFINE** | Exterior preventative care. Connect roof runoff directly to basement moisture risk. | Low | Source foundation engineering moisture guidance. | `maintenance` |
| 21 | Sump Pump Testing & Maintenance: Battery Backups & Float Switches | **KEEP & REFINE** | High-consequence basement safety. Cover mechanical float switch failure modes. | Low | Source Sump and Sewage Pump Manufacturers Association (SSPMA). | `maintenance` |
| 22 | Major Home Components Lifespan Master Reference Table | **KEEP & REFINE** | Foundational cornerstone reference page. Must label all figures as baseline estimates. | Low | Cross-compile InterNACHI, NAHB, and AHAM reference datasets. | `lifespan` |
| 23 | Smoke & Carbon Monoxide Detector Expiration Rules (The 10-Year Rule) | **KEEP & REFINE** | Regulatory & life safety. Clarify why 10 years is an equipment standard, not battery life. | Low | Cite NFPA 72 (National Fire Alarm and Signaling Code). | `lifespan` |
| 24 | Tankless vs. Storage Tank Water Heaters: Real Lifespan & Payback Reality | **KEEP & REFINE** | Decisional reference. Clarify that 20-yr tankless life requires annual acid descaling. | Moderate (Decision Tools) | Source DOE Energy Saver cost/longevity comparison. | `lifespan` |
| 25 | When to Replace Windows: Energy Loss vs. Structural Wear Indicators | **KEEP & REFINE** | Reframe from sales pitch to objective seal failure vs frame rot diagnostic checklist. | Low | Source NFRC (National Fenestration Rating Council) data. | `lifespan` |
| 26 | How Long Do Household Faucets, Valves & Fixtures Last? | **KEEP & REFINE** | Fills high-frequency fixture question (cartridge wear vs total valve replacement). | Low | Cite plumbing fixture manufacturing benchmarks. | `lifespan` |
| 27 | Appliance Repair vs. Replace: A Practical Decision Framework | **REVISE TITLE & SCOPE** | Retitled from "The 50% Rule". Frame as a multi-factor consumer rule of thumb. | Moderate (Decision Tools) | Clarify that 50% is a consumer heuristic, not an engineering law. | `costs` |
| 28 | What Dictates HVAC Replacement Costs: Equipment, Ductwork & Labor Factors | **KEEP & REFINE** | Explains quote drivers without fake bids. Breaks down tonnage, line-sets, and permits. | Moderate (Home Project Tools) | Clearly explain regional labor variance and SEER2 requirements. | `costs` |
| 29 | Emergency Water Shutoff: How to Locate & Test Main Valves in U.S. Homes | **KEEP & REFINE** | Essential safety literacy for every household. Detail street curb stop vs basement meter. | Low | Review municipal water utility standard operating procedures. | `everyday` |
| 30 | Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs | **KEEP & REFINE** | High safety value. Detail overload vs short circuit vs arc fault (AFCI) accurately. | Low | Cite NFPA 70 / National Electrical Code safety practices. | `everyday` |

*Note on V1 Count & Expansion:* With the refinement of Articles #27 and the inclusion of high-impact everyday articles (Power Outage Readiness and Hard Water Diagnostics), the 30 flagship topics represent a balanced, non-redundant, evergreen foundation.

---

## 5. Fact-Verification Risk List & 4-Tier Numeric Classification

To eliminate artificial precision, every significant numeric claim in the architecture has been audited and assigned to a verification tier:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   4-TIER FACT VERIFICATION FRAMEWORK                   │
├────────────────────────────────────────────────────────────────────────┤
│ TIER A: Strongly Sourceable Benchmark (Government / Standards body)    │
│ TIER B: Established Rule of Thumb (Widely recognized consumer logic)   │
│ TIER C: Highly Variable Estimate (Requires explicit conditional bounds)│
│ TIER D: Unsupported / Withdrawn (Must not appear as a factual claim)   │
└────────────────────────────────────────────────────────────────────────┘
```

### Classification of Key Numeric Claims:

| Numeric Claim | Original Phase 1 Wording | Verification Tier | Pre-Implementation Correction |
| :--- | :--- | :---: | :--- |
| **Smoke Alarm Expiration** | "Smoke alarms expire after 10 years." | **TIER A** | Strongly sourceable to NFPA 72 § 29.8.5. Validated for publication. |
| **Water Heater Baseline** | "Standard tank lasts 8 to 12 years." | **TIER A** | Sourceable to DOE Energy Saver and AHRI data. Maintain as typical range. |
| **Water Heater Temp** | "120°F is the OSHA/CDC standard." | **TIER C** | Correct to: CPSC recommends 120°F to prevent scalding; balance against dishwasher sanitizing (140°F) and Legionella considerations. |
| **"The 50% Rule"** | "Industry standard formula: if repair > 50% of cost, replace." | **TIER B** | Reframe as an informal consumer rule of thumb. Must explicitly note age, part availability, and efficiency factors. |
| **Garage Door Springs** | "Torsion springs last 10,000 cycles = 7–10 years." | **TIER C** | 10,000 cycles is a standard manufacturer minimum rating under DASMA, but calendar years depend entirely on daily use (4 cycles/day = ~7 years). |
| **AC Lifespan (Regional)** | "AC lasts 10–14 yrs in South vs 15–18 yrs in North." | **TIER C** | Reframe as runtime-dependent: Units in humid/hot climates accumulate 2,000+ run hours annually vs 500–800 hours in temperate regions. |
| **Hard Water Reduction** | "Hard water cuts water heater life by 20% to 40%." | **TIER D → C** | The 20–40% figure was an unsourced trade claim. Replace with: *"Mineral scale forms an insulating blanket at the tank bottom, causing localized overheating and accelerating anode depletion."* Require laboratory study citation before publishing specific percentages. |
| **HVAC Replacement Bids** | "$4,200 to $8,500 replacement range." | **TIER C** | Must carry explicit regional and equipment caveats: System replacement costs depend heavily on tonnage, ductwork repairs, SEER2 compliance, and local labor rates. |

---

## 6. Safety, Diagnostic & Regulatory Risk Protocol

Household reference topics involve physical hazards (combustion gasses, high voltage, pressurized vessels, structural weight). The architecture now mandates strict adherence to the **Four-Tier Safety Action Framework**:

```
               ┌─────────────────────────────────────────────────────────┐
               │         FOUR-TIER SAFETY ACTION FRAMEWORK               │
               └───────────────────────────┬─────────────────────────────┘
                                           │
         ┌──────────────────┬──────────────┴─────┬──────────────────┐
         │                  │                    │                  │
   ┌─────┴──────┐     ┌─────┴──────┐       ┌─────┴──────┐     ┌─────┴──────┐
   │   TIER 1   │     │   TIER 2   │       │   TIER 3   │     │   TIER 4   │
   │ Homeowner  │     │ Homeowner  │       │Professional│     │  Licensed  │
   │Observation │     │Maintenance │       │ Diagnosis  │     │ Trade Work │
   └────────────┘     └────────────┘       └────────────┘     └────────────┘
```

### Safety Action Definitions:
1. **Tier 1: Homeowner Observation** (Zero Risk)
   * *Scope:* Listening for unusual noises, inspecting exterior vent hoods, checking visual rust, checking air filter discoloration, testing smoke alarm buttons.
2. **Tier 2: Routine Homeowner Maintenance** (Low/Controlled Risk)
   * *Scope:* Swapping 1" or 4" air filters, vacuuming refrigerator condenser coils, cleaning dryer lint traps, draining a bucket of water from a water heater drain valve, clearing debris from exterior AC condenser fins with a garden hose (power off).
   * *Mandatory Requirement:* Explicit instruction to shut off equipment switches before touching components.
3. **Tier 3: Professional Diagnosis** (Moderate Risk)
   * *Scope:* Intermittent circuit breaker trips with no obvious cause, short-cycling furnaces, refrigerant frost accumulation on copper lines, low domestic water pressure across all fixtures.
   * *Guidance:* Explain what the technician will inspect so the homeowner can ask informed questions without attempting dangerous DIY diagnostics.
4. **Tier 4: Licensed Trade Work** (High Hazard / Regulatory Mandate)
   * *Scope:* Opening electrical service panel dead-fronts, gas line connections, sealed refrigerant circuit recovery/charging, structural roof truss modifications, whole-house drain clearing requiring main stack access.
   * *Language Standard:* Must use precise, non-alarmist, legally accurate phrasing: *"This work involves significant physical hazard and may require a licensed, insured contractor in accordance with municipal building codes."* (Avoid claiming a federal license mandate exists where local municipal codes govern).

---

## 7. Schema.org & Technical SEO Corrections

### 7.1 Entity Typing: `Article` vs. `TechArticle`
* **Phase 1 Problem:** Unconditionally applied `TechArticle` to all pages.
* **Correction:**
  * Default Schema: Standard `Article` or `HowTo` (for step-by-step maintenance protocols).
  * Conditional `TechArticle`: Applied strictly to deep-dive mechanical and diagnostic breakdowns (e.g., Electrical Panel Busbar Corrosion, Heat Exchanger Combustion Analysis).

### 7.2 FAQ Structured Data Policy (Post-2023 Realities)
* **Phase 1 Problem:** Proposed automatic `FAQPage` schema on every article.
* **Correction:** Google's search quality updates heavily restricted `FAQPage` rich result display to authoritative governmental and recognized reference domains. While clean on-page FAQ content is retained for human scannability, `FAQPage` schema will only be emitted conditionally when the question-and-answer pairs represent genuine, non-repetitive reference queries, preventing algorithmic search penalties.

### 7.3 BreadcrumbList Schema
* Standardized to reflect the two-tier URL architecture:
  `Home` → `Category Hub (e.g., /appliances/)` → `Article (e.g., /appliances/refrigerator-lifespan-and-maintenance/)`.

---

## 8. Technical Architecture Corrections (Astro 5 SSG on Vercel)

The codebase and project documentation have been aligned to remove all legacy SPA and Cloud Run references:

### 8.1 Production Blueprint
* **Framework:** [Astro 5](https://astro.build/) configured strictly in `output: 'static'` mode (Static Site Generation).
* **Hosting / Deployment:** [Vercel](https://vercel.com/) (Edge CDN caching, zero server runtime execution).
* **Client-Side JavaScript:** **0 KB default JS** for standard article reading. HTML and modern CSS handle tables, typography, and responsive layouts.
* **Optional React Islands:** Used strictly as opt-in micro-islands (`client:idle` or `client:visible`) only if a specific reference lookup table (such as the 60-component Master Lifespan Matrix filter) genuinely benefits from client-side search/filtering. Standard reference articles execute zero client scripts.
* **Metadata Alignment:** `metadata.json` updated to record the exact production configuration.

---

## 9. Internal Linking Architecture: Relevance Over Quotas

* **Phase 1 Problem:** Mandated an artificial quota of *"exactly 3 contextual links per article"*.
* **Correction:** Editorial link relevance takes absolute priority over link count:
  * Links must connect logically dependent concepts (e.g., An article discussing water heater sediment linking directly to the sediment flushing guide).
  * Avoid linking purely for SEO density.
  * Every article must offer 3 to 4 curated *Related References* at the bottom of the page, but inline paragraph links are inserted solely where they assist the reader's comprehension.

---

## 10. The 15-Module Layout: Core vs. Conditional Framework

To prevent formulaic, repetitive pages and protect the editorial integrity of the site, the article template is split into **Core Modules** and **Conditional Modules**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CORE MODULES (Required on All Articles)              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Breadcrumbs Navigation                                              │
│ 2. Article Title & Metadata (Category, Last Reviewed Date, Read Time) │
│ 3. Quick Answer Callout (Direct 15-second summary above the fold)      │
│ 4. Main Plain-English Technical Explanation                            │
│ 5. Key Facts / Reference Matrix (Structured empirical summary)         │
│ 6. Curated Related References                                          │
│ 7. Authoritative Sources & Standard Citations                          │
│ 8. Review Information & Trade Safety Disclaimer                        │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│               CONDITIONAL MODULES (Included Only When Relevant)        │
├────────────────────────────────────────────────────────────────────────┤
│ 9. Primary Influencing Factors (Usage, Climate, Water Chemistry)       │
│ 10. Warning Signs & Diagnostic Matrix (Normal vs Attention vs Hazard)  │
│ 11. Preventative Maintenance Guidance & Safe Cadence                   │
│ 12. Repair vs. Replacement Decision Framework                          │
│ 13. Cost Drivers & Quote Factors (No false precision)                  │
│ 14. Mechanical Variations / Fuel Types (Gas vs Electric vs Heat Pump)  │
│ 15. Frequently Asked Questions (Genuine homeowner queries)             │
└────────────────────────────────────────────────────────────────────────┘
```

*Guiding Axiom:* **Template consistency must not become content uniformity.** An article explaining how to find a main water shutoff valve needs visual location diagrams and valve-type warnings—not an artificial "50% repair vs replace" formula.

---

## 11. Authoritative Source Hierarchy

To eliminate fabricated citations and prevent generic attribution, reference sources must be selected according to this strict four-tier hierarchy:

1. **Government & Regulatory Authorities:**
   * U.S. Department of Energy (DOE / Energy Saver)
   * U.S. Environmental Protection Agency (EPA / ENERGY STAR)
   * Consumer Product Safety Commission (CPSC)
   * Centers for Disease Control and Prevention (CDC - Environmental Health)
2. **Consensus Standards Organizations:**
   * National Fire Protection Association (NFPA / NEC)
   * American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)
   * International Code Council (ICC / International Residential Code)
3. **Appliance & Equipment Trade Associations:**
   * Association of Home Appliance Manufacturers (AHAM)
   * Air-Conditioning, Heating, and Refrigeration Institute (AHRI)
   * Water Quality Association (WQA)
4. **Professional Home Inspection & Trade Societies:**
   * International Association of Certified Home Inspectors (InterNACHI)
   * American Society of Home Inspectors (ASHI)

---

## 12. Final Phase 2 Readiness Assessment

### Current Status: Architecture Ready for Phase 2 Implementation
All structural, technical, and taxonomy ambiguities identified in Phase 1 have been resolved:
* Technology stack is locked to **Astro 5 SSG on Vercel**.
* Fact-verification tiers are formalized to protect editorial integrity.
* The 30 V1 article topics are validated and non-overlapping.
* The 15-module layout is hardened with Core vs. Conditional rules.
* Safety and regulatory language complies with legal and physical realities.

### Stop Condition Check
**Phase 1.1 is strictly a review and correction stage. No Phase 2 code, Astro scaffolds, content collection files, or flagship articles should be generated until Phase 2 is officially commissioned.**

---
*End of Phase 1.1 Architecture Correction & Pre-Implementation Review.*
