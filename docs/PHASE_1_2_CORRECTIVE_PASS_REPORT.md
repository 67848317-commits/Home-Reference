# Home Reference — Phase 1.2 Corrective Pass Report
## Evidence Integrity, Technical Claims & Editorial Transparency

**Production Domain:** https://homereference.org/  
**Date:** November 4, 2026  
**Scope:** Corrective pass on Phase 1.2 implementation (no redesign, no new articles, no URL/architecture changes)

---

## 1. Confirmed and Corrected

1. **Water Heater Anode Depletion & Softener Claims (`src/content/reference/water-heater-lifespan.ts`, `src/components/diagrams/WaterHeaterCutawayDiagram.tsx`):**
   - Removed the unsupported `"18 to 36 months"` and `"3 – 5 Years (Unsoftened) / 1 – 2 Years (Softened)"` anode depletion intervals.
   - Revised the explanation to state only what is supported: water chemistry, dissolved mineral content, pH, temperature, and household throughput affect galvanic anode consumption; ion-exchange water softeners alter water conductivity by exchanging calcium and magnesium ions for sodium ions, but effects vary by equipment, baseline water hardness, and usage rather than following a uniform deterministic timeline; inspection and replacement should follow manufacturer guidance and actual physical inspection findings.

2. **Refrigerator Diagnostic Language (`src/content/reference/refrigerator-lifespan.ts`, `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx`, `src/components/views/ArticleView.tsx`):**
   - Removed deterministic claims (`"almost always intact"`, `"virtually always an airflow delivery problem"`, and `"the sealed refrigeration system and compressor are working"`).
   - Replaced with a qualified differential diagnosis explaining that a cold freezer with a warm fresh-food compartment can have multiple possible causes (both airflow/defrost faults such as frosted evaporator coils, a seized evaporator fan motor, a stuck motorized damper, an iced return duct, or a faulty thermistor, as well as sealed-system or multi-zone faults such as low refrigerant charge, a partial capillary restriction, or a diverter valve fault).
   - Clearly separated observable homeowner symptoms, possible causes, safe external checks (verifying settings, clearing blocked vents, checking door gaskets, vacuuming exterior condenser coils), and work requiring a qualified technician (internal panel disassembly, live electrical/defrost testing, and EPA Section 608 sealed-system service).

3. **Master Longevity Table Component Count (`src/components/MasterLongevityTable.tsx`, `src/content/reference/major-components-lifespan.ts`, `src/components/views/ArticleView.tsx`, `src/data/pillarsData.ts`, `src/data/architectureData.ts`):**
   - Verified the exact count of entries in `MASTER_DATA` is **59** (not 60+).
   - Replaced all `"60+"` and `"over 60"` component-count claims with `"59"` (e.g., `59 Residential Components`, `59 indexed components`).
   - Replaced `"verified assets"` with `"indexed components"` and removed the generic claim that all entries were independently verified.

4. **About / Editorial Transparency (`src/components/views/AboutView.tsx`):**
   - Clarified that **"Home Reference Editorial Desk"** is the collective editorial byline for Home Reference's internal research, writing, and content-maintenance function—not a named panel of licensed engineers, contractors, or external peer reviewers.
   - Removed claims of `"peer-verified trade data"`, `"rigorous claim-verified authoring"` guarantees, and completed `"systematic review cycles"`, `"annual verification"`, and `"three-year code-cycle audits"`.
   - Reframed review and update cadences accurately as a **planned maintenance policy** rather than completed operational guarantees or automated systems.

---

## 2. Qualified

1. **Water Heater & Tankless Lifespans (`WH-01`):** Qualified DOE Energy Saver 8–12 year (storage tank) and 20+ year (tankless) ranges as statistical planning benchmarks dependent on water mineral chemistry, operating temperature, and maintenance (such as tankless descaling).
2. **Water Heater Temperature & Scald Guidance (`WH-05`):** Qualified CPSC's 120°F recommendation as an advisory safety guideline rather than a federal statute, and noted that storing water at 130°F–140°F for *Legionella* control requires an ASSE 1017 thermostatic mixing valve at the outlet.
3. **Refrigerator Temperature Guidance (`RF-02`):** Qualified FDA's 40°F threshold as an advisory food-safety recommendation for households rather than a statutory mandate, with 37°F–38°F as an operational target buffer.
4. **NFPA 72 Smoke Alarm Replacement (`MC-01`):** Qualified the 10-year replacement interval as a consensus model standard that becomes legally binding where adopted by state or local jurisdictions.
5. **Obsolete Electrical Panels (`MC-02`) & Serial Number Decoding (`MC-03`):** Qualified FPE Stab-Lok and Zinsco discussions to documented failure modes without speculative failure percentages, and qualified serial number decoding to note that no single universal formula exists across all manufacturers and eras.
6. **Master Longevity Table Entries (`src/components/MasterLongevityTable.tsx`):** Qualified `PEX Supply Tubing` (`40 – 50 Years (Est.)`, noting long-term field data is still maturing), generalized `Tankless Water Heater (Gas)` end-of-life indicators to remove brand-specific error codes, and added an explicit footer disclosure that ranges are general planning estimates, not warranties, and have not been independently empirically verified across all 59 entries.

---

## 3. Unverified

1. **Master Longevity Table Line-by-Line Ranges (`MC-05`):** All 59 individual component rows in `src/components/MasterLongevityTable.tsx` remain marked `UNVERIFIED` in `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` pending a line-by-line audit mapping each row to a specific primary engineering or inspection document.
2. **T&P Relief Valve Calibration (`WH-06`) & Sediment Kettling Mechanics (`WH-07`):** Marked `UNVERIFIED` in `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` pending direct citation and URL verification against ASME/ANSI Z21.22 and primary plumbing engineering documentation.
3. **Refrigerator Lifespan Sub-Ranges (`RF-01`):** Marked `UNVERIFIED` pending direct verification of whether the cited ENERGY STAR and AHAM URLs state the exact 10–14, 12–15, and 10–12 year ranges.
4. **Live External URLs:** Because this environment does not perform live external web fetches, external URLs in `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` are recorded as present in the codebase with explicit **Outstanding Verification Tasks** to archive verbatim passages.

---

## 4. Removed

1. **Unsupported Water Heater Intervals:**
   - `"In a softened water household, an anode rod may be depleted in 18 to 36 months"`
   - `"3 – 5 Years (Unsoftened) / 1 – 2 Years (Softened)"`
   - `"Every 2 to 3 Years (Annually with Water Softener)"`
   - `"more than 6 inches of central core wire is exposed or rod diameter is eroded by more than 75%"`
   - `"On valves older than 3 years"`
   - `"double or triple the operational service life"`
   - `"fired at approximately 1,600°F"`
2. **Unsupported Refrigerator Claims:**
   - `"the sealed refrigeration system and compressor are almost always intact"`
   - `"The failure is virtually always an airflow delivery problem"`
   - `"the sealed refrigeration system and compressor are working"`
   - `"the sealed cycle is usually intact"`
   - `"drawing up to 35% more electricity"` / `"consume up to 35% more electricity"`
3. **Unsupported Component-Count & Verification Claims:**
   - `"60+ Residential Components"` / `"over 60 common residential components"`
   - `"verified assets"`
   - `"peer-verified trade data"` and completed `"systematic review cycles"` / `"annual verification"` / `"three-year code-cycle audits"` guarantees.

---

## 5. Not Independently Tested

1. **Live External HTTP Status & Verbatim Source Passages:** External URLs (`energy.gov`, `cpsc.gov`, `fda.gov`, `energystar.gov`, `aham.org`, `ahrinet.org`, `nachi.org`, `nfpa.org`) were not fetched over the network in this pass.
2. **Interactive Browser Rendering & Visual Layout:** Visual rendering of the updated React islands (`WaterHeaterCutawayDiagram`, `RefrigeratorVaporCycleDiagram`, `MasterLongevityTable`, `AboutView`, `ArticleView`) was not inspected in a headless browser during this pass.

---

## 6. Build & Technical Verification Results

- **TypeScript (`tsc --noEmit`):** Passed with 0 errors.
- **Static Site Build (`npm run build` / `astro build`):** Succeeded; generated static HTML in `dist/`.
- **Routes & Sitemap (`dist/sitemap.xml`):** Verified all 18 expected routes exist in `dist/` (homepage, `/about/`, 6 pillar hubs, and all 10 published articles); `/costs/` is excluded from `dist/sitemap.xml`.
- **Indexation & Canonical Directives:** Verified `dist/costs/index.html` emits `<meta name="robots" content="noindex, follow">`, while published articles emit `<meta name="robots" content="index, follow">` and canonical URLs under `https://homereference.org/`.
- **AdSense & GA4:** Verified AdSense client ID (`ca-pub-1850854173653124`) and `PUBLIC_GA_MEASUREMENT_ID` integration in `BaseLayout.astro` remain intact.
