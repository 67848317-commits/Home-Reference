# Phase 1.3.2 — Safety Claims & Regulatory Boundary Verification Report

**Project:** Home Reference (`https://homereference.org/`)  
**Phase:** 1.3.2 — Safety Claims & Regulatory Boundary Verification  
**Date:** 2026-11-16  

---

## 1. Executive Summary

Phase 1.3.2 completed a focused, source-verified safety and regulatory audit across the water-heater and refrigerator reference guides, their interactive schematics, the Claim-Level Evidence Registry, and cross-file numeric consistency—without expanding the site, modifying URLs, altering analytics/AdSense configuration, or exposing planned articles.

### Key Corrections Completed
- **Water-Heater Scald Burn-Time Inaccuracy Fixed:** Direct extraction of **CPSC Publication 5098 (*Avoiding Tap Water Scalds*)** showed adult third-degree burns occur in **~6 seconds at 140°F** (alongside ~2 seconds at 150°F, ~30 seconds at 130°F, and ~5 minutes at 120°F). Previously, public FAQ copy erroneously stated `"under 5 seconds at 140°F"`.
- **Storage vs. Fixture Delivery & *Legionella* Framing Clarified:** Separated CPSC/DOE FEMP **120°F** residential scald guidance (Tier A) from conditional **>140°F storage + thermostatic mixing valve** guidance (Tier B) grounded in **CDC *Controlling Legionella in Potable Water Systems*** and **DOE FEMP**, noting that temperature alone does not eliminate *Legionella* colonization. Removed an unverified `"ASSE 1017"` code reference that was not directly verified in the retrieved sources.
- **T&P Valve & Sediment Flushing Qualified:** Downgraded the T&P relief valve Key Fact from Tier A to Tier B (`"Up to 150 psi / 210°F"`, emphasizing tank data-plate specificity and never capping/plugging the discharge pipe). Removed the unsupported `"3 to 5 gallons"` flush quantity across articles and diagrams, prioritized manufacturer owner manuals first, and added explicit electric dry-fire (breaker off until refilled & air purged), gas shutoff, scald cooling, seized plastic drain valve, and older T&P lever reseating cautions.
- **EPA Section 608 Boundaries & Small-Appliance Disposal Exception Fixed:** Separated all four regulatory scenarios under **40 CFR Part 82, Subpart F** and explicitly added EPA's **small-appliance disposal exception** (factory-manufactured, charged, and hermetically sealed appliances containing ≤5 lbs of refrigerant are exempt from Section 608 technician certification requirements at disposal).
- **EPA SNAP / R-600a Rules Separated from Section 608:** Added dedicated Tier A Key Fact, dedicated FAQ, and split diagram notice covering **EPA SNAP (40 CFR Part 82, Subpart G, Rule 22 / UL 60335-2-24)**: ASHRAE Group A3 flammability, new-equipment-only & no-retrofit prohibition, 150 g (5.3 oz) per-circuit charge limit, permanent warning labels / red PMS #185 markings / non-interchangeable fittings, and EPA's recommended flammable-refrigerant training, spark-proof tools, ventilation, PPE, Class B dry powder extinguisher, and evacuation precautions.
- **Cross-File Consistency:** Harmonized gas tankless water heater planning range from `"18 – 20+ Years"` to `"15 – 20+ Years (Planning)"` in `MasterLongevityTable.tsx`, `/lifespan/` hub (`pillarsData.ts`), and internal draft/metadata files (`articlesData.ts`, `architectureData.ts`) while keeping `MASTER_DATA` at exactly **59 rows**.

### Updated Registry Population Totals (`docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md`)
- **Population A (Priority Claims Audited):** **16 total** = `4 VERIFIED` + `9 QUALIFIED` + `0 UNVERIFIED` + `3 REMOVED` (`4 + 9 + 0 + 3 = 16`).
- **Population B (Master Longevity Table):** **59 rows total** = `0 VERIFIED` + `4 QUALIFIED` + `55 UNVERIFIED` + `0 REMOVED` (`0 + 4 + 55 + 0 = 59`).

---

## 2. Water-Heater Safety Claim Audit

Inspected all public surfaces in `src/content/reference/water-heater-lifespan.ts` (key facts, detailed explanation, factors, warning signs, maintenance steps, FAQs, sources), `src/components/diagrams/WaterHeaterCutawayDiagram.tsx`, and `src/components/diagrams/ComponentFailureConsequenceMatrix.tsx`.

| Area | Prior Claim / Issue | Primary Source Check | Action Taken |
|---|---|---|---|
| **Scald Temperature & Burn Times** | Claimed 140°F causes third-degree burns in `"under 5 seconds"`. | CPSC Pub. 5098 PDF (HTTP 200) states **6 seconds at 140°F**, 2 seconds at 150°F, 30 seconds at 130°F, 5 minutes at 120°F; urges **120°F** setting. | Corrected to `~6 seconds at 140°F`; aligned Key Facts (Tier A) and FAQ with CPSC 5098 & DOE FEMP. |
| ***Legionella* & Mixing Valves** | Conflated 140°F storage, general residential advice, and cited unverified `"ASSE 1017"`. | DOE FEMP (May 2024) + CDC *Controlling Legionella in Potable Water Systems* (77°F–113°F growth; >140°F storage, ≥120°F circulation, thermostatic mixing valves close to fixtures; multi-factor control). | Moved to dedicated **Tier B** Key Fact; separated storage vs. tap delivery; removed `ASSE 1017`; emphasized consulting healthcare/plumbing pros for high-risk residents. |
| **T&P Relief Valve Rating & Testing** | Previously `UNVERIFIED` (`WH-06`) presented at Tier A (`"150 psi / 210°F"`); fixed `"Every 6 Months"` cadence without reseat caution. | Watts 100XL/LF100XL specs (up to 150 psi / 210°F; ANSI Z21.22 / ASME Sec. IV) & manufacturer manuals. | Downgraded Key Fact to **Tier B** (`"Up to 150 psi / 210°F"`), added data-plate match & never-cap/plug rules, and added reseating-failure caution on older valves. |
| **Sediment Drain & Flush** | Hardcoded `"Drain 3 to 5 gallons"` rule and `"Every 6 Months"` cadence without unit-type or electric dry-fire specificity. | DOE Energy Saver (cites draining a quart every 3 months while directing `"always follow the manufacturer's directions"`) + manufacturer manuals. | Removed `"3 to 5 gallons"`; changed cadence to **Per Manufacturer Manual**; added electric dry-fire, gas shutoff, scald cooling, tankless vs. tank distinction, and seized plastic valve cautions. |

---

## 3. EPA Section 608 Audit (`40 CFR Part 82, Subpart F`)

Inspected `src/content/reference/refrigerator-lifespan.ts` and `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx`.

- **Prior Defect:** Previously stated Section 608 Type I certification applies broadly to `"servicing or disposing"` of refrigerators without disclosing EPA's explicit exemption for small-appliance disposal.
- **Verified Regulatory Boundaries (across Key Facts, dedicated FAQ, Diagram Card, and Diagram Notice):**
  1. **Servicing or repairing a sealed refrigerant circuit:** Requires Type I (small appliances) or Universal certification whenever a task could reasonably violate circuit integrity (attaching gauges/hoses, cutting lines, replacing compressor/evaporator/condenser).
  2. **Handling or recovering refrigerant:** Requires a Section 608 certified technician.
  3. **Non-refrigerant part swaps:** Replacing door gaskets, fans, defrost thermostats, relays, thermistors, or control boards does not require Section 608 certification because the sealed circuit is not opened (electrical shock hazards still require qualification).
  4. **Disposal of small appliances (≤5 lbs factory-sealed):** Household refrigerators meeting EPA's "small appliance" definition are **explicitly exempt from Section 608 technician certification requirements for disposal** per EPA Section 608 Q&A.

---

## 4. R-600a (Isobutane) SNAP Safety Audit (`40 CFR Part 82, Subpart G`)

Inspected `src/content/reference/refrigerator-lifespan.ts` and `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx`.

- **Separation from Section 608:** Separated hydrocarbon flammability rules under **EPA SNAP (Subpart G, Rule 22)** from Clean Air Act Section 608 licensing (Subpart F).
- **Verified SNAP Rule 22 Use Conditions (`83 FR 38969`, incorporating UL 60335-2-24 2nd ed.):**
  - R-600a is an **ASHRAE Group A3** (lower toxicity, higher flammability) refrigerant.
  - Acceptable **only in new household refrigerators and freezers**; **never permitted as a conversion or retrofit** in existing appliances designed for R-134a, CFC-12, or other refrigerants.
  - Charge limit of **up to 150 grams (5.3 oz) per separate refrigerant circuit** (updated under Rule 22 / UL 60335-2-24).
  - Requires **permanent flammable-refrigerant warning labels**, **red (PMS #185) process/service tube markings**, and **non-interchangeable fittings** if a service port is provided.
- **Recommended vs. Mandatory Safety Practices:** Clearly distinguished EPA SNAP "Further Information" service recommendations (referencing OSHA 29 CFR 1910) from federal licensing mandates: flammable-refrigerant technician training, spark-proof tools, flammable-rated recovery equipment, proper ventilation (outdoors or well-ventilated space), PPE, nearby Class B dry powder fire extinguisher, and immediate room evacuation if an accidental release exceeds safe thresholds.

---

## 5. Direct Source URLs & Supporting Passages

| Organization | Direct URL | Access Status During Pass | Source Date | Supporting Evidence Summary / Verbatim Excerpt |
|---|---|---|---|---|
| **U.S. CPSC** | `https://www.cpsc.gov/s3fs-public/5098.pdf` | HTTP 200 (PDF extracted directly) | Pub. 5098 (`009611 / 032012`) | `"The U.S. Consumer Product Safety Commission (CPSC) urges all users to lower their water heater temperature to 120 degrees Fahrenheit."` / `"Most adults will suffer third-degree burns if exposed to 150 degree water for two seconds. Burns will also occur with a six-second exposure to 140 degree water or with a thirty second exposure to 130 degree water. Even if the temperature is 120 degrees, a five minute exposure could result in third-degree burns."` |
| **U.S. DOE FEMP** | `https://www.energy.gov/eere/femp/purchasing-energy-efficient-residential-water-heaters` | HTTP 200 | Updated May 2024 | `"For most residential applications, set the temperature at 120°F."` / Cites DOD UFC requiring `no less than 140°F (60°C)` storage + downstream mixing valve set to `120°F`. |
| **U.S. CDC** | `https://www.cdc.gov/control-legionella/php/toolkit/potable-water-systems.html` | HTTP 403 to raw automated fetch; verified via web search | Current CDC Toolkit | Optimal *Legionella* growth 77°F–113°F; recommends >140°F storage, ≥120°F circulation, thermostatic mixing valves close to fixtures, and multi-factor Water Management Programs. |
| **U.S. DOE Energy Saver** | `https://www.energy.gov/energysaver/projects/save-energy-and-money-water-heating-maintenance` | HTTP 200 | Current page | Cites draining a quart from tank bottom every 3 months while directing `"always follow the manufacturer's directions"`. |
| **Watts Water Technologies** | `https://www.watts.com/products/plumbing-flow-control-solutions/relief-valves/temperature-pressure-relief-valves/100xl` | HTTP 403 to raw automated fetch; verified via web search | Current spec sheet | 100XL/LF100XL: 210°F (99°C) temp relief, 75–150 psi relief range (150 psi standard), ANSI Z21.22 / ASME Section IV rated. |
| **U.S. EPA (Section 608)** | `https://www.epa.gov/section608/section-608-technician-certification-requirements`<br>`https://www.epa.gov/section608/epas-refrigerant-management-program-questions-and-answers-section-608-certified`<br>`https://www.epa.gov/section608/definitions-section-608-terms` | HTTP 200 | Updated Feb 24, Aug 3, Nov 16, 2026 | `"Section 608 technician certification is required to dispose of appliances, except for small appliances (an appliance that is fully manufactured, charged, and hermetically sealed in a factory with five pounds or less of refrigerant), motor vehicle air conditioners (MVACs), or MVAC-like appliances."` |
| **U.S. EPA (SNAP) & Federal Register** | `https://www.epa.gov/snap/rule-22-final-rule-notice`<br>`https://www.epa.gov/snap/substitutes-household-refrigerators-and-freezers`<br>`https://www.federalregister.gov/documents/2018/08/08/2018-16773/...` | HTTP 200 | Mar 30, 2026 / `83 FR 38969` (Aug 8, 2018) | Rule 22 adopts UL 60335-2-24 2nd ed. for R-600a (150 g / 5.3 oz per circuit, new equipment only, retrofits prohibited, warning labels, PMS #185 red markings, non-interchangeable fittings, safety recommendations). |

---

## 6. Files Changed

1. `src/content/reference/water-heater-lifespan.ts` — Updated `keyFacts`, `factors`, `warningSigns`, `maintenanceSteps`, `faqs`, and `sources`.
2. `src/components/diagrams/WaterHeaterCutawayDiagram.tsx` — Updated `tpvalve`, `sediment`, and SVG T&P label.
3. `src/components/diagrams/ComponentFailureConsequenceMatrix.tsx` — Updated water-heater `preventionCadence` to manufacturer-manual guidance.
4. `src/content/reference/refrigerator-lifespan.ts` — Separated EPA Section 608 and R-600a SNAP in `keyFacts`, `faqs`, and `sources`; added small-appliance disposal exemption.
5. `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx` — Updated `compressor.diagnosticTruth` and split bottom regulatory box into Section 608 and SNAP / R-600a notices.
6. `src/components/MasterLongevityTable.tsx` — Harmonized `Tankless Water Heater (Gas)` row (`15 – 20+ Years (Planning)`, `benchmarkYears: 18`); total rows kept at 59.
7. `src/data/pillarsData.ts` — Harmonized `/lifespan/` hub copy to `15–20+ year planning range`.
8. `src/data/articlesData.ts` & `src/data/architectureData.ts` — Harmonized stale internal/planned metadata figures (`18–22`, `20-year`, `5–10 gallons`, internal draft maintenance steps) without exposing any planned articles publicly.
9. `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md` — Updated Population A (`16` claims: `4 VERIFIED`, `9 QUALIFIED`, `0 UNVERIFIED`, `3 REMOVED`) and Population B (`59` rows: `0 VERIFIED`, `4 QUALIFIED`, `55 UNVERIFIED`, `0 REMOVED`).
10. `docs/PHASE_1_3_2_SAFETY_CLAIM_VERIFICATION_REPORT.md` — Created this verification report.

---

## 7. Remaining Unverified Claims & Scope Limitations

- **Single-Claim vs. Whole-Article Verification:** Phase 1.3.2 verified and qualified targeted water-heater safety claims and refrigerator Section 608 / R-600a regulatory boundaries. It did **not** perform line-by-line empirical verification of all remaining non-safety mechanical or cost statements across all 10 published articles.
- **Paywalled Primary Standards:** Primary consensus engineering standard texts (**ANSI Z21.22**, **ASME Boiler & Pressure Vessel Code Section IV**, **UL 60335-2-24**, and **NFPA 72**) are commercial/paywalled standards; public copy cites freely accessible federal regulatory summaries (EPA SNAP Rule 22, DOE FEMP, CPSC) and manufacturer specifications rather than asserting direct access to the full paywalled standard texts.
- **Master Longevity Table (`55 UNVERIFIED` rows out of `59`):** All 55 unverified rows remain explicitly labeled in the public table footer as general planning estimates compiled from broad inspection and energy charts, not verified warranties or empirical failure studies.

---

## 8. Technical Validation Results

All checks below reflect actual command and build-inspection outputs from this repository state:

- **TypeScript Check (`npx tsc --noEmit`):** Exited with code `0` (zero errors).
- **Static Production Build (`npm run build`):** Exited with code `0`; built **21 static HTML pages** in `6.04s` (`dist/`).
- **Published Route & Planned-Route Isolation:**
  - All 10 published reference articles, 6 pillar hubs, homepage, `/about/`, and 3 existing alias routes built cleanly (`21` HTML files total).
  - Planned-only routes (e.g., `/systems/asphalt-shingle-roof-lifespan/`, `/systems/electrical-panel-capacity-and-warning-signs/`) remain absent from `dist/` and `dist/sitemap.xml`.
  - `dist/sitemap.xml` contains **17** canonical `<url>` entries (home, `/about/`, 5 pillar hubs with articles, and 10 published reference articles).
- **Built HTML Content Verification (`dist/`):**
  - Removed `"under 5 seconds"`, `"3 to 5 gallons"` / `"3–5 gallons"`, `"ASSE 1017"`, and `"18 – 20+ Years"` tankless mismatch from built pages.
  - Verified presence in built HTML of CPSC `~6 seconds at 140°F` + `5098.pdf`, CDC *Legionella* URL, electric dry-fire & older T&P reseat cautions, EPA Section 608 small-appliance disposal exemption, and EPA SNAP Rule 22 / UL 60335-2-24 / 150 g / PMS #185 / no-retrofit R-600a rules.
- **Metadata, Canonicals, Analytics & Monetization Intact:**
  - Canonical tags (`https://homereference.org/...`) preserved across built pages.
  - `BaseLayout.astro` preserves `PUBLIC_GA_MEASUREMENT_ID` GA4 integration and Google AdSense tag/meta (`dist/ads.txt` and `dist/robots.txt` present).
  - `MasterLongevityTable.tsx` contains exactly **59** component rows.
