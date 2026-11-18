# Home Reference — Phase 1.3.1: Evidence Registry Consistency & Residual Claim Cleanup Report

**Production Domain:** https://homereference.org/  
**Audit & Implementation Date:** 2026-11-06  
**Phase:** 1.3.1 — Evidence Registry Consistency & Residual Claim Cleanup  
**Scope:** Focused corrective pass addressing registry population count separation, residual water-heater anode language, explicit labeling of lifespan planning estimates, EPA Section 608 regulatory citations, and Master Longevity Table transparency.

---

## 1. Executive Summary

Phase 1.3 established direct primary-source verification for core safety guidelines and eliminated unsubstantiated claims across Home Reference. However, a follow-up review identified three areas requiring precision cleanup:
1. **Registry Count Ambiguity:** Summary counts in earlier documentation conflated the 12 priority claims audit with the 59 rows of the Master Longevity Table, producing a confusing total (`Verified: 0, Qualified: 4, Unverified: 59, Removed: 0`). Phase 1.3.1 completely disentangles these two distinct populations (Population A: Priority Claims; Population B: Master Longevity Table rows) so that the sum of statuses within each population strictly equals its total.
2. **Residual Water-Heater Softener Language:** Public water-heater content retained subtle causal assertions stating or implying that softened water increases electrical conductivity and thereby predictably accelerates anode rod depletion. In Phase 1.3.1, all instances were removed or qualified to state that while ion-exchange softeners alter water chemistry by exchanging calcium and magnesium for sodium ions, controlled empirical evidence does not establish a universal causal rate of anode depletion across residential installations. Homeowners are advised to consult equipment manuals and rely on periodic physical inspection rather than assuming a universal timeline or fixed chemical effect.
3. **Lifespan Range Precision & Source Distinction:** The site's published ranges (8–12 years for storage tank water heaters; 15–20+ years for tankless water heaters; 10–14 years for refrigerators) were explicitly distinguished as general industry planning estimates from primary sources' specific statutory or lifecycle assumptions (e.g., DOE FEMP's 13-year assumed product life; InterNACHI's 6–12 years for conventional water heaters and 10 years for tankless; ENERGY STAR's 12-year product lifetime calculation; InterNACHI's 9–13 years for refrigerators).
4. **EPA Section 608 Regulatory Specificity:** References to EPA Section 608 were upgraded to cite specific federal regulations (40 CFR Part 82, Subpart F) and Type I technician certification for small appliances (hermetically sealed appliances containing 5 lbs or less of refrigerant). The text explicitly distinguishes between opening/servicing the sealed refrigerant circuit (which requires Section 608 certification) and non-refrigerant part replacements (fans, door gaskets, defrost thermostats, start relays, thermistors, and control boards, which do not require certification).

---

## 2. Corrected Status Counts (Separated Populations)

To prevent double-counting or conflating table-level status with row-level status, Home Reference maintains two distinct populations:

### Population A: Priority Claims Audit
- **Total Priority Claims Audited:** `12`
- **VERIFIED:** `2` (WH-05: 120°F scald prevention via DOE FEMP; RF-03: Refrigerator ≤40°F / Freezer 0°F via FDA)
- **QUALIFIED:** `6` (WH-01: Storage water heater planning range; WH-02: Tankless water heater planning range; WH-03: Water softener chemistry and inspection; RF-01: Refrigerator planning range; RF-05: EPA Section 608 scope; MC-01: NFPA 72 10-year smoke alarm consensus standard)
- **UNVERIFIED:** `1` (WH-06: ASME / ANSI Z21.22 150 psi / 210°F calibration)
- **REMOVED:** `3` (WH-04: 18–36 month / 1–2 year softened-water intervals; RF-02: 12–15 yr and 10–12 yr configuration-specific refrigerator ranges; RF-04: "almost always" deterministic diagnostic language)
- **Mathematical Sum Check:** 2 + 6 + 1 + 3 = `12` (Exact Match)

### Population B: Master Longevity Table Row-Level Audit
- **Actual Row Count Published:** `59` across 6 categories (10 Roofing, 10 HVAC, 15 Plumbing, 8 Electrical, 10 Appliances, 6 Interior Finishes)
- **VERIFIED Rows:** `0` (no individual row has been independently verified against an original empirical engineering study in this pass)
- **QUALIFIED Rows:** `4`
  1. `Tankless Water Heater (Gas)`: Qualified as industry planning range (18–20+ yrs) with note on periodic descaling in hard water (InterNACHI inspection chart lists 10 yrs)
  2. `PEX Supply Tubing (Cross-Linked PE)`: Labeled as estimate (40–50 yrs) noting that real-world longitudinal field data is still maturing
  3. `Refrigerator (Standard Top-Freezer)`: Harmonized to `9 – 13 Years (General)` planning range based on InterNACHI benchmark
  4. `Refrigerator (French Door / Multi-Zone)`: Harmonized to `9 – 13 Years (General)` planning range based on InterNACHI benchmark
- **UNVERIFIED Rows:** `55` (remaining 55 rows published as general planning estimates derived from broad inspection charts, not verified row-by-row)
- **REMOVED Rows:** `0` (all 59 rows retained)
- **Mathematical Sum Check:** 0 + 4 + 55 + 0 = `59` (Exact Match)
- **Table-Level Status:** `UNVERIFIED` (as explicitly disclosed in the public table footer)

---

## 3. Exact Claim-Level Corrections

### A. Water-Heater Anode & Softener Language
- **Files Modified:** `src/content/reference/water-heater-lifespan.ts`, `src/components/diagrams/ComponentFailureConsequenceMatrix.tsx`, `src/components/views/ArticleView.tsx`
- **Previous Language:**
  - `metaDescription`: `"Empirical lifespan data for residential water heaters (8–12 yrs tank / 20+ yrs tankless), sacrificial anode chemistry, softened water effects, sediment failure mechanics, and replacement factors."`
  - `detailedExplanation`: Implied that sodium ions from softening increase electrical conductivity and accelerate galvanic anode consumption across installations.
  - `factors`: Stated that `"Water chemistry changes, including ion-exchange softening, can also alter water conductivity and influence sacrificial anode consumption rates."`
  - `faqs`: Stated that changing electrical conductivity influences galvanic anode consumption without empirical baseline qualification.
  - `ComponentFailureConsequenceMatrix.tsx`: Stated prevention cadence as `"check sacrificial anode every 2–3 years (annually if water softened)"`.
  - `ArticleView.tsx`: Developer comment referenced `"softened water conductivity"`.
- **Corrected Language:**
  - `metaDescription`: Updated to `"Lifespan benchmarks for residential water heaters (8–12 yrs tank / 15–20+ yrs tankless planning ranges), sacrificial anode chemistry, water chemistry factors, sediment failure mechanics, and replacement criteria."`
  - `detailedExplanation`: Replaced with nuanced explanation: `"Galvanic protection depends on multiple chemical and physical variables, including dissolved mineral content, pH, operating temperature, and household water volume throughput. Ion-exchange water softeners alter water chemistry by exchanging calcium and magnesium ions for sodium ions. However, controlled primary-source evidence does not establish a predictable anode depletion rate or universal causal effect across residential installations. Because manufacturer recommendations vary—with some brands suggesting specific inspection routines or alternative anode materials (such as aluminum-zinc or powered anodes) in softened water environments—homeowners should consult their manufacturer manual and base maintenance on physical inspection rather than assuming a fixed calendar schedule or predictable chemistry effect."`
  - `factors`: Changed to note that water chemistry changes alter mineral composition, and that individual impacts on anode wear vary widely across water supplies, so manufacturer recommendations and physical inspection must guide maintenance.
  - `faqs`: Clarified that softeners alter ion composition, but controlled studies do not establish a predictable depletion rate across all installations, advising consultation of manufacturer manuals and physical inspection.
  - `ComponentFailureConsequenceMatrix.tsx`: Updated to `"Annual sediment flush; periodically inspect sacrificial anode per manufacturer guidelines."` and updated baseline lifespan label to `"8–12 Years (Planning Range)"`.
  - `ArticleView.tsx`: Updated comment to `"Focus: Mechanical cutaway schematic, sacrificial anode electrochemistry, water chemistry factors, and seam puncture finality."`

### B. Distinguishing Sources' Actual Statements from General Planning Estimates
- **Storage Tank Water Heater (8–12 years):**
  - **Source Statement 1 (DOE FEMP):** `"with an assumed product life of 13 years"`
  - **Source Statement 2 (InterNACHI):** `"Water Heater (conventional) 6 to 12"`
  - **Site Editorial Label:** Clearly designated as an `Industry Planning Range` in `water-heater-lifespan.ts`, `major-components-lifespan.ts`, and `ComponentFailureConsequenceMatrix.tsx`.
- **Tankless Water Heater (15–20+ years):**
  - **Source Statement (InterNACHI):** `"Instant (on-demand) Water Heater 10"`
  - **Site Editorial Label:** Labeled as an `Industry Planning Range` (requiring regular descaling in hard water) while explicitly noting that inspection charts (such as InterNACHI at 10 years) vary.
- **Refrigerator (10–14 years):**
  - **Source Statement 1 (ENERGY STAR):** `"12-year lifetime of the product"` (assumed lifetime for energy savings calculations)
  - **Source Statement 2 (InterNACHI):** `"Refrigerator 9 to 13"`
  - **Site Editorial Label:** Labeled as a `General Industry Planning Range` in `refrigerator-lifespan.ts`, `major-components-lifespan.ts`, and `MasterLongevityTable.tsx`.

### C. Strengthening EPA Section 608 Evidence
- **Regulatory Framework:** Cited 40 CFR Part 82, Subpart F (Clean Air Act Section 608 National Recycling and Emission Reduction Program).
- **Technician Scope:** Specified Type I certification for small appliances (hermetically sealed systems containing 5 lbs or less of refrigerant).
- **Circuit Servicing Boundary:** Clarified that certification is mandatory when opening, evacuating, recovering, or servicing the sealed refrigerant circuit. Non-refrigerant part replacements (evaporator fan motors, door gaskets, defrost thermostats/heaters, start relays, thermistors, and control boards) do not require Section 608 certification.
- **Hydrocarbon Nuance:** Re-verified note on R-600a (isobutane), noting that while exempt from venting prohibition under 40 CFR § 82.154(a)(1), it remains subject to EPA use conditions and spark-free servicing safety practices.

---

## 4. Evidence URLs and Verbatim Source Passages

1. **U.S. Department of Energy (DOE) Federal Energy Management Program (FEMP)**
   - **URL:** `https://www.energy.gov/eere/femp/purchasing-energy-efficient-residential-water-heaters` (HTTP 200)
   - **Verbatim Passages:**
     - Lifespan calculation baseline: `"with an assumed product life of 13 years"`
     - Operational setpoint: `"For most residential applications, set the temperature at 120°F. Under certain conditions, Legionella pneumophila, the bacteria known to cause Legionnaires Disease, can grow in water heaters."`
     - Mixing valve: `"For residential applications, set the temperature on this device, also known as a mixing valve, to 120°F."`
2. **U.S. Food and Drug Administration (FDA)**
   - **URL:** `https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely` (HTTP 200)
   - **Verbatim Passages:**
     - Refrigerator & freezer storage targets: `"Keep the refrigerator temperature at or below 40° F (4° C). The freezer temperature should be 0° F (-18° C)."`
3. **ENERGY STAR (U.S. EPA & DOE)**
   - **URL:** `https://www.energystar.gov/products/refrigerators` (HTTP 200)
   - **Verbatim Passages:**
     - Assumed product lifetime: `"By recycling your old refrigerator and replacing it with a new ENERGY STAR certified refrigerator, you can save about $150 over the 12-year lifetime of the product."`
4. **U.S. Environmental Protection Agency (EPA)**
   - **URL:** `https://www.epa.gov/section608` (HTTP 200)
   - **Verbatim Passages:**
     - Regulatory baseline: `"Section 608 (40 CFR Part 82, Subpart F) of the Clean Air Act establishes the National Recycling and Emission Reduction Program."`
5. **International Association of Certified Home Inspectors (InterNACHI)**
   - **URL:** `https://www.nachi.org/life-expectancy.htm` (HTTP 200)
   - **Verbatim Passages:**
     - Conventional water heater: `"Water Heater (conventional) 6 to 12"`
     - Instant water heater: `"Instant (on-demand) Water Heater 10"`
     - Refrigerator: `"Refrigerator 9 to 13"`

---

## 5. Remaining Unverified Claims

1. **ASME / ANSI Z21.22 T&P Valve Mechanical Calibration (`150 psi / 210°F`):**
   - Retained in `water-heater-lifespan.ts` and `WaterHeaterCutawayDiagram.tsx` as standard trade safety knowledge.
   - Remains classified as `UNVERIFIED` in Priority Claims (WH-06) because the direct ASME standard text was not retrieved from an open primary government portal in this pass.
2. **Master Longevity Table 55 Unverified Rows:**
   - 55 of the 59 rows in `MasterLongevityTable.tsx` are published as general planning estimates based on broad inspection reference charts.
   - None of these 55 rows have been independently verified against an original empirical engineering study.
   - Fully and honestly disclosed in the component footer: `"General planning ranges compiled from public industry and inspection reference charts... have not been independently empirically verified across all 59 entries."`

---

## 6. Files Changed in Phase 1.3.1

| File | Nature of Changes |
|---|---|
| `src/content/reference/water-heater-lifespan.ts` | Refined summary, metaDescription, typicalLifespan, quickAnswer, keyFacts, detailedExplanation, factors, and FAQ to eliminate conductivity/anode-depletion causal claims, emphasize manufacturer manuals/physical inspection, and label 8–12 yrs and 15–20+ yrs as planning estimates. |
| `src/components/diagrams/ComponentFailureConsequenceMatrix.tsx` | Updated Storage Tank Water Heater row: labeled baseline lifespan as `8–12 Years (Planning Range)` and updated prevention cadence to `Annual sediment flush; periodically inspect sacrificial anode per manufacturer guidelines.` (removed `annually if water softened`). |
| `src/components/views/ArticleView.tsx` | Updated developer comment to remove mention of `softened water conductivity`. |
| `src/content/reference/refrigerator-lifespan.ts` | Updated typicalLifespan to include `(Planning Range)` and strengthened EPA Section 608 key fact to cite 40 CFR Part 82 Subpart F, Type I small appliances, and distinct refrigerant-circuit vs non-refrigerant part scope. |
| `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx` | Updated compressor diagnosticTruth note to cite 40 CFR Part 82 Subpart F and small appliance scope when opening or evacuating the sealed system. |
| `src/content/reference/major-components-lifespan.ts` | Updated Storage Tank Water Heaters and Major Kitchen Appliances keyFacts to explicitly designate planning ranges alongside source baselines. |
| `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` | Restructured registry into two distinct populations (Population A: 12 Priority Claims; Population B: 59-row Master Longevity Table) with exact status counts, direct URLs, and verbatim passages. |
| `docs/PHASE_1_3_CLAIM_VERIFICATION_REPORT.md` | Updated Section 6 to clarify Population B counts (0 Verified, 4 Qualified, 55 Unverified, 0 Removed = 59 Total). |
| `docs/PHASE_1_3_1_CORRECTIVE_REPORT.md` | Created comprehensive Phase 1.3.1 corrective report. |

---

## 7. Build and TypeScript Results

Validation executed:
- **TypeScript Type Check:** `npx tsc --noEmit` — 0 errors, completely clean.
- **Production Build:** `npm run build` — 18/18 static pages successfully prerendered into `dist/`.
- **Integrity Checks:**
  - All 10 published reference articles intact.
  - Master Longevity Table maintains exactly 59 residential component entries.
  - Canonical URLs, OpenGraph tags, sitemap (`dist/sitemap-index.xml`), and robots.txt intact.
  - Zero mentions of unsupported anode depletion rates or causal conductivity assertions.

---

## 8. Remaining Limitations

1. **Row-by-Row Primary Engineering Studies:** The 55 unverified rows in the Master Longevity Table reflect widely accepted home inspection planning medians, but are not backed by individual peer-reviewed materials degradation studies.
2. **Access to Proprietary Consensus Standards:** Standards published by non-governmental bodies (e.g., ASME/ANSI Z21.22 for relief valves, NFPA 72 for smoke alarms) are behind paywalls or require licensed access; their guidance is verified via secondary adoption in federal documents (DOE FEMP) and state/local building codes rather than primary open-source standard documents.
3. **Operational Review Cadence:** Article review dates reflect editorial research passes conducted by the Home Reference Editorial Desk rather than an automated or continuous monitoring service.
