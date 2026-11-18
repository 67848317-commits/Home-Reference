# Home Reference — Phase 1.3: Claim-Level Evidence Verification Report

**Production Domain:** https://homereference.org/  
**Verification Date:** 2026-11-04  
**Scope:** Source-based claim-level verification pass across priority articles, Master Longevity Table, and About / Methodology page

---

## 1. Executive Summary

- **What Was Verified:** Live primary government and inspection pages were fetched and checked directly (`energy.gov/eere/femp/purchasing-energy-efficient-residential-water-heaters`, `fda.gov/consumers/consumer-updates/are-you-storing-food-safely`, `energystar.gov/products/refrigerators`, `epa.gov/section608`, and `nachi.org/life-expectancy.htm`). Three broken (`404`) URLs from earlier phases (`energy.gov/energysaver/selecting-new-water-heater`, `energystar.gov/products/appliances/refrigerators`, and `energy.gov/energysaver/appliances-and-electronics`) were identified and replaced with live URLs.
- **What Was Changed:**
  - Removed unsupported configuration-specific refrigerator lifespan ranges (`12 – 15 Years` for Top-Freezer and `10 – 12 Years` for French Door / Multi-Zone) after verifying that ENERGY STAR and InterNACHI do not publish configuration-specific year ranges.
  - Narrowed EPA Section 608 statements to accurately distinguish refrigerant-circuit work (which requires Section 608 certification for regulated refrigerants) from non-refrigerant repairs (gaskets, fans, relays, control boards, which do not require Section 608 certification).
  - Qualified water-softener and anode-depletion language so softened water is not presented as necessarily accelerating anode depletion without controlled primary-source evidence.
  - Added an explicit **Current Practices / Planned Practices / Editorial Principles / Limitations** breakdown to `AboutView.tsx`.
- **What Remains Unresolved:** The 59 individual entries in `MasterLongevityTable.tsx` remain marked `UNVERIFIED` as a full table pending a line-by-line primary-source audit, and CPSC's 1978 scald release returned HTTP 403 to automated fetch (though DOE FEMP's live page independently corroborates the 120°F residential setpoint and *Legionella* / mixing-valve guidance).

---

## 2. Priority Claim Audit

| Claim ID | Topic | Final Status | Summary of Disposition |
|---|---|---|---|
| **WH-01** | Storage tank water heater lifespan (8–12 yrs planning range) | `QUALIFIED` | Qualified alongside DOE FEMP (13-year assumed product life) and InterNACHI (6–12 years). |
| **WH-02** | Tankless water heater lifespan (15–20+ yrs planning range) | `QUALIFIED` | Qualified as an industry planning range; noted InterNACHI's chart lists 10 years. |
| **WH-03** | Water softening and anode rod depletion | `QUALIFIED` | Removed causal assertion that softened water necessarily accelerates depletion; distinguished water chemistry, manufacturer guidance, and physical inspection. |
| **WH-04** | 18–36 month / 1–2 year softened-water anode intervals | `REMOVED` | Excised from all content and diagrams. |
| **WH-05** | 120°F scald prevention & *Legionella* / mixing valve guidance | `VERIFIED` | Directly verified on live DOE FEMP page. |
| **WH-06** | T&P relief valve 150 psi / 210°F calibration | `UNVERIFIED` | Retained as general technical context; direct ASME/ANSI Z21.22 text not accessed. |
| **RF-01** | General refrigerator lifespan (10–14 yrs planning range) | `QUALIFIED` | Qualified alongside ENERGY STAR (12-year product lifetime assumption) and InterNACHI (9–13 years). |
| **RF-02** | Configuration-specific refrigerator lifespans (12–15 yrs / 10–12 yrs) | `REMOVED` | Removed unsupported numerical ranges; retained qualitative complexity explanation. |
| **RF-03** | Refrigerator ≤40°F (target 37°F–38°F) and freezer 0°F | `VERIFIED` | Directly verified on live FDA Consumer Update page. |
| **RF-04** | Deterministic "almost always" / "virtually always" fridge diagnostics | `REMOVED` | Replaced with qualified differential diagnosis separating airflow/defrost faults from sealed-system/multi-zone faults. |
| **RF-05** | EPA Section 608 scope for refrigerator repairs | `QUALIFIED` | Narrowed to refrigerant-circuit work; clarified non-refrigerant repairs do not require Section 608 certification. |
| **MC-01** | 10-year smoke alarm replacement (NFPA 72) | `QUALIFIED` | Qualified as a consensus model standard adopted locally. |
| **MC-02** | Master Longevity Table (59 entries) | `UNVERIFIED` | Corrected count from `60+` to `59`; marked full table `UNVERIFIED` pending line-by-line audit. |

---

## 3. Source Verification Details

1. **U.S. Department of Energy — FEMP (`Purchasing Energy-Efficient Residential Water Heaters | Department of Energy`):**
   - **URL:** `https://www.energy.gov/eere/femp/purchasing-energy-efficient-residential-water-heaters` (HTTP 200, checked 2026-11-04)
   - **Supporting Passages:**
     - `"with an assumed product life of 13 years"`
     - `"For most residential applications, set the temperature at 120°F. Under certain conditions, Legionella pneumophila, the bacteria known to cause Legionnaires Disease, can grow in water heaters."`
     - `"For residential applications, set the temperature on this device, also known as a mixing valve, to 120°F."`
2. **U.S. Food and Drug Administration (`Are You Storing Food Safely? | FDA`):**
   - **URL:** `https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely` (HTTP 200, checked 2026-11-04)
   - **Supporting Passage:** `"Keep the refrigerator temperature at or below 40° F (4° C). The freezer temperature should be 0° F (-18° C)."`
3. **ENERGY STAR (`Refrigerators | ENERGY STAR`):**
   - **URL:** `https://www.energystar.gov/products/refrigerators` (HTTP 200, checked 2026-11-04)
   - **Supporting Passage:** `"By recycling your old refrigerator and replacing it with a new ENERGY STAR certified refrigerator, you can save about $150 over the 12-year lifetime of the product."`
4. **U.S. Environmental Protection Agency (`Stationary Refrigeration and Air Conditioning | US EPA`):**
   - **URL:** `https://www.epa.gov/section608` (HTTP 200, checked 2026-11-04)
   - **Supporting Passage:** `"Section 608 (40 CFR Part 82, Subpart F) of the Clean Air Act establishes the National Recycling and Emission Reduction Program."`
5. **InterNACHI (`InterNACHI’s Standard Estimated Life Expectancy Chart for Homes`):**
   - **URL:** `https://www.nachi.org/life-expectancy.htm` (HTTP 200, checked 2026-11-04)
   - **Supporting Passages:** `"Refrigerator 9 to 13"`, `"Water Heater (conventional) 6 to 12"`, `"Instant (on-demand) Water Heater 10"`

---

## 4. Content Changes

- `src/content/reference/water-heater-lifespan.ts`: Qualified storage tank and tankless lifespan ranges; removed causal assertion that softened water necessarily accelerates anode depletion; replaced 404 DOE URL with live DOE FEMP and InterNACHI URLs.
- `src/content/reference/refrigerator-lifespan.ts`: Removed unsupported configuration-specific lifespan ranges (`12 – 15 Years` and `10 – 12 Years`); narrowed EPA Section 608 scope to refrigerant-circuit work; replaced 404 ENERGY STAR URL with live ENERGY STAR, EPA Section 608, and InterNACHI URLs.
- `src/components/diagrams/RefrigeratorVaporCycleDiagram.tsx`: Updated EPA Section 608 regulatory note with direct link and accurate scope.
- `src/components/MasterLongevityTable.tsx`: Updated refrigerator rows to `9 – 13 Years (General)` to remove unsupported configuration-specific year ranges.
- `src/content/reference/major-components-lifespan.ts`: Replaced 404 DOE URL with live ENERGY STAR URL.
- `src/components/views/AboutView.tsx`: Added explicit **Current Practices**, **Planned Practices**, **Editorial Principles**, and **Limitations** cards.
- `docs/CLAIM_LEVEL_EVIDENCE_REGISTRY.md`: Updated to the Phase 1.3 claim-level verification schema.

---

## 5. Unverified Claims

- **Master Longevity Table (`src/components/MasterLongevityTable.tsx`):** All 59 entries remain publicly visible as general planning estimates with an explicit footer disclosure stating they are not warranties and have not been independently empirically verified across all 59 entries.
- **T&P Relief Valve Calibration (`150 psi / 210°F`) & Sediment Kettling Mechanics:** Remain publicly visible in `water-heater-lifespan.ts` as general technical context, marked `UNVERIFIED` in the registry pending direct standard citation.

---

## 6. Master Longevity Table Audit (Population B)

- **Actual Entry Count (Row Count):** `59` (10 Roofing & Envelope, 10 HVAC & Heating, 15 Plumbing & Water, 8 Electrical & Safety, 10 Appliances, 6 Interior Finishes)
- **VERIFIED Row Count (line-by-line):** `0` (not individually verified row-by-row against primary engineering studies in this pass)
- **QUALIFIED Row Count:** `4` (`Tankless Water Heater (Gas)`, `PEX Supply Tubing`, `Refrigerator (Standard Top-Freezer)`, `Refrigerator (French Door / Multi-Zone)`)
- **UNVERIFIED Row Count:** `55` (remaining 55 rows published as general planning estimates from broad inspection charts)
- **REMOVED Row Count:** `0` (all 59 rows retained; unsupported configuration-specific ranges in 2 refrigerator rows were harmonized to general planning range)
- **Sum Check:** 0 + 4 + 55 + 0 = 59 rows
- **Table-Level Status:** `UNVERIFIED` (as disclosed in public footer: general planning estimates, not warranties, not individually verified row-by-row)

---

## 7. About / Methodology Audit

- **Retained:** Collective byline clarification (`Home Reference Editorial Desk` is an internal research/writing function, not licensed engineers or external peer reviewers), four-tier source hierarchy, trade safety boundaries, and commercial independence disclosures.
- **Changed / Added:** Added a four-part breakdown explicitly separating **Current Practices**, **Planned Practices** (noting review schedules are planned goals, not automated or guaranteed), **Editorial Principles**, and **Limitations** (noting the 59-component table is not individually verified against primary studies).

---

## 8. Technical Validation

- `tsc --noEmit`: Passed with `0` errors.
- `npm run build` (`astro build`): Succeeded; all `18` expected routes generated in `dist/`.
- `dist/` HTML & Sitemap Verification: Confirmed removed claims no longer appear in `dist/`, `59` component count is present, `/costs/` is excluded from `dist/sitemap.xml` and emits `noindex, follow`, and canonical URLs + AdSense/GA4 integration remain intact.

---

## 9. Remaining Risks

- **Line-by-Line Table Verification:** The 59 entries in `MasterLongevityTable.tsx` still require individual primary-source verification.
- **Other 7 Published Articles:** Phase 1.3 focused on the 3 priority articles and Master Longevity Table; the remaining 7 published articles in `src/content/reference/` were not audited claim-by-claim in this pass.
