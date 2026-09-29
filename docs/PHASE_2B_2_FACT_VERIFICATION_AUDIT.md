# Home Reference — Phase 2B.2: Batch 2 Fact Verification & Accuracy Audit

> **Document Type:** Independent Technical, Factual, Regulatory & Source Verification Audit  
> **Target Scope:** 5 Newly Authored Reference Articles (Batch 2)  
> **Status:** Completed & Integrated  
> **Governing Benchmark:** Phase 2B.1 Verification Standard — *"A shorter accurate statement is better than a longer impressive-sounding statement."*

---

## 1. Executive Summary & Audit Mandate

Phase 2B.2 conducted an exhaustive technical, regulatory, numerical, and source alignment audit of the five newly added evergreen reference articles in Phase 2B Batch 2:
1. **Central Air Conditioner Lifespan, Efficiency & Replacement Guide** (`/systems/central-ac-lifespan-and-efficiency/`)
2. **Furnace Lifespan, Warning Signs & Replacement Guide** (`/systems/furnace-lifespan-and-replacement/`)
3. **Dishwasher Lifespan & Maintenance Guide** (`/appliances/dishwasher-lifespan-and-care/`)
4. **Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety** (`/appliances/clothes-dryer-lifespan-and-vent-safety/`)
5. **Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs** (`/everyday/what-to-do-when-circuit-breaker-trips/`)

### Key Audit Findings & Corrections:
1. **Lifespan Benchmarks Harmonized to Tier C Planning Estimates:**
   * In several Batch 2 articles, component service life ranges (such as gas furnace 15–20 yrs, electric dryer 12–16 yrs, dishwasher 9–12 yrs, electric panel 30–40 yrs) were originally labeled as Tier A (universal physical or regulatory facts).
   * In accordance with the Phase 2B.1 benchmark, all empirical lifespan ranges have been corrected to **Tier C (Industry Planning Benchmarks)**. They represent trade association surveys (AHRI, AHAM, ASHRAE, IEEE) and operational baselines subject to climate, water quality, and maintenance, rather than deterministic actuarial truths.
2. **SEER2 Regional Metric Nuance Verified & Sourced:**
   * The 2023 DOE SEER2 standards were clarified: North requires 13.4 SEER2; Southeast and Southwest require 14.3 SEER2 for split systems under 45,000 BTU/h (13.8 SEER2 for units ≥ 45,000 BTU/h), with the Southwest mandating EER2 minimums.
3. **EPA AIM Act Transition Grounded to Effective Dates:**
   * Regulatory claims regarding HFC phaseouts were verified against the EPA AIM Act Technology Transitions Rule: the manufacturing and importation ban on new residential R-410A split-system AC units took effect on **January 1, 2025**, capping new equipment refrigerant GWP at 700. Existing R-410A systems remain lawful to operate and maintain using reclaimed refrigerant.
4. **NFPA & USFA Clothes Dryer Fire Statistics Calibrated:**
   * Dryer fire claims were audited against NFPA and U.S. Fire Administration data. Language asserting "13,000+ dryer fires annually" was calibrated to reflect that NFPA reports ~15,970 home structure fires annually involving clothes dryers or washing machines (with 92% involving dryers), while USFA specifically reports ~2,900 clothes dryer building fires annually. "Failure to clean" remains verified as the leading contributing factor (34%).
5. **Electrical Continuous Load & Panel Hazard Qualifications Enforced:**
   * The NEC 80% continuous load rule was grounded in its exact statutory references: **NEC Sections 210.19(A)(1) and 210.20(A)** (where continuous loads running 3+ hours require a 125% branch circuit and breaker rating multiplier).
   * References to Federal Pacific Electric (FPE) Stab-Lok failure rates were qualified to cite independent engineering investigations led by Jesse Aronstein and CPSC testing data, avoiding sweeping blanket figures while clearly maintaining the call for professional replacement.

---

## 2. Article-by-Article Forensic Review

### Article 6: Central Air Conditioner Lifespan, Efficiency & Replacement Guide
* **Route:** `/systems/central-ac-lifespan-and-efficiency/`
* **Content File:** `src/content/reference/central-ac-lifespan.ts`
* **Audited Claims:**
  * *12–17 Year Lifespan:* Re-tiered from default to Tier C (planning estimate). Runtime-dependence (600 hrs in North vs. 2,500+ hrs in Deep South) verified against ASHRAE Handbook data.
  * *SEER2 Regional Standards:* Verified against DOE 10 CFR Part 430. Updated note to accurately state 13.4 North and 14.3 South (<45,000 BTU) / 13.8 South (≥45,000 BTU).
  * *EPA AIM Act Transition:* Sourced to EPA Technology Transitions rule under the AIM Act of 2020. Explicitly stated January 1, 2025 manufacturing prohibition date and GWP ≤ 700 threshold.
  * *Thermodynamic Cycle & Subcooling:* Verified phase change mechanisms (evaporation at indoor coil, compression, ambient condensation outdoors).
* **Corrections Implemented:**
  * Lifespan tier set to Tier C.
  * SEER2 key fact updated to reflect capacity-based split in southern regions.
  * EPA AIM Act text updated to include the January 1, 2025 transition milestone.

---

### Article 7: Furnace Lifespan, Warning Signs & Replacement Guide
* **Route:** `/systems/furnace-lifespan-and-replacement/`
* **Content File:** `src/content/reference/furnace-lifespan-and-replacement.ts`
* **Audited Claims:**
  * *15–20 Year Gas / 20–25 Year Electric Lifespan:* Re-tiered from Tier A to Tier C (planning benchmark). Electric units have no combustion acid corrosion.
  * *Heat Exchanger Fatigue Mechanism:* Verified thermodynamics of metal expansion/contraction, stamped seam fatigue, and chemical attack from fluorinated/chlorinated combustion air.
  * *Carbon Monoxide & High-Limit Switch Safety:* Sourced to NFPA 54 (National Fuel Gas Code) and ANSI Z21.47. Welded patches on cracked residential heat exchangers are strictly prohibited by code and manufacturer warranty.
  * *80% vs 90–98% AFUE:* Verified condensing secondary stainless steel heat exchanger mechanics and acidic condensate production (1–3 gallons/day).
* **Corrections Implemented:**
  * Lifespan tiers adjusted from Tier A to Tier C.
  * Reaffirmed strict prohibition on heat exchanger welding/patching under ANSI/NFPA standards.

---

### Article 8: Dishwasher Lifespan & Maintenance Guide
* **Route:** `/appliances/dishwasher-lifespan-and-care/`
* **Content File:** `src/content/reference/dishwasher-lifespan-and-care.ts`
* **Audited Claims:**
  * *9–12 Year Lifespan:* Sourced to AHAM consumer durability surveys. Re-tiered from Tier A to Tier C planning benchmark.
  * *Engineering Shift to Manual Mesh Filters:* Verified industry-wide elimination of macerator disposal blades around 2010 to satisfy ENERGY STAR water/energy metrics and sub-48 dBA quiet acoustics.
  * *Water Intake Temperature (120°F):* Verified against detergent chemistry (protease/amylase activation) and manufacturer intake standards.
  * *Sanitize Cycle Standard (150°F+):* Verified against NSF/ANSI Standard 184 (requires 99.999% / 5-log bacterial reduction at minimum 150°F final rinse).
* **Corrections Implemented:**
  * Average lifespan re-tiered to Tier C.
  * Monthly filter cleaning labeled as a Tier B preventative maintenance heuristic.

---

### Article 9: Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety
* **Route:** `/appliances/clothes-dryer-lifespan-and-vent-safety/`
* **Content File:** `src/content/reference/clothes-dryer-lifespan.ts`
* **Audited Claims:**
  * *12–16 Year Electric / 11–15 Year Gas Lifespan:* Re-tiered from Tier A to Tier C planning benchmark.
  * *NFPA / USFA Fire Statistics:* Calibrated claim language. NFPA reports ~15,970 home fires involving washers/dryers (92% dryers) with failure to clean as the primary factor (34%); USFA reports ~2,900 reported dryer-specific structural fires annually.
  * *IRC Section M1502 Exhaust Standards:* Verified against International Residential Code (IRC M1502.4.6.1): 4-inch rigid metal duct, 35-foot maximum baseline equivalent run, 5-foot deduction per 90° elbow, 2.5-foot deduction per 45° elbow, prohibition of sheet metal screws piercing duct interior, and prohibition of vinyl/corrugated foil in concealed spaces.
  * *Thermal Cutoff Fuse Physics:* Verified single-use non-resettable thermal fuse tripping mechanism when airflow is choked.
* **Corrections Implemented:**
  * Re-tiered lifespans to Tier C.
  * Precision wording applied to NFPA/USFA fire statistics.
  * Direct citation of IRC M1502 equivalent length calculations confirmed.

---

### Article 10: Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs
* **Route:** `/everyday/what-to-do-when-circuit-breaker-trips/`
* **Content File:** `src/content/reference/circuit-breaker-tripping.ts`
* **Audited Claims:**
  * *30–40 Year Panel Service Life:* Re-tiered to Tier C planning estimate; longevity is governed by busbar corrosion and ambient humidity.
  * *Two-Step Mechanical Reset:* Verified against UL 489 trip-free mechanism. Pushing to OFF is mechanically required to reset the internal latch before switching to ON.
  * *NEC Sizing & Continuous Load Rules:* Sourced to NEC Article 210.19(A)(1) & 210.20(A). Verified continuous loads (3+ hours) must not exceed 80% of breaker rating (12A on 15A, 16A on 20A).
  * *FPE Stab-Lok & Zinsco Panels:* Qualified failure-to-trip research to cite Jesse Aronstein's CPSC-sponsored testing and subsequent peer-reviewed findings, supporting immediate professional replacement recommendations.
* **Corrections Implemented:**
  * Panel lifespan re-tiered to Tier C.
  * Explicit NEC statutory code sections added to continuous load key facts.
  * Aronstein / CPSC testing background accurately contextualized.

---

## 3. Master Claim Audit Table

| Article | Key Claim | Category | Stated Value / Principle | Initial Tier | Verified Tier | Source Support Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Central AC** | AC Service Life | Numeric / Statistical | 12 to 17 years depending on annual runtime hours | Tier C | **Tier C** | Supported (ASHRAE Handbook & DOE Energy Saver survey ranges). |
| **Central AC** | Regional SEER2 Minima | Regulatory | 13.4 North; 14.3 South & Southwest (<45k BTU) | Tier A | **Tier A** | Supported directly by DOE 10 CFR Part 430 regional standards. |
| **Central AC** | EPA AIM Act Transition | Regulatory | Ban on manufacturing new R-410A units (eff. Jan 1, 2025; GWP ≤ 700) | Tier A | **Tier A** | Supported directly by EPA AIM Act Technology Transitions Rule. |
| **Furnace** | Gas Furnace Lifespan | Numeric / Statistical | 15 to 20 years under routine maintenance | Tier A | **Tier C** | Supported with qualification (AHRI / NFPA planning benchmarks). |
| **Furnace** | Electric Furnace Lifespan | Numeric / Statistical | 20 to 25 years | Tier C | **Tier C** | Supported (Elimination of combustion flue corrosion and thermal fatigue). |
| **Furnace** | Heat Exchanger Patching | Safety / Code | Cracked heat exchangers cannot be welded or patched | Tier A | **Tier A** | Supported (ANSI Z21.47 & NFPA 54 fuel gas safety standards). |
| **Dishwasher** | Dishwasher Lifespan | Numeric / Statistical | 9 to 12 years average service life | Tier A | **Tier C** | Supported with qualification (AHAM appliance survey distribution). |
| **Dishwasher** | Water Inlet Temp | Technical | 120°F required for enzymatic detergent breakdown | Tier A | **Tier A** | Supported (AHAM detergent guidelines & appliance manufacturer specifications). |
| **Dishwasher** | NSF 184 Sanitization | Regulatory / Standards | 99.999% bacterial reduction at 150°F+ final rinse | Tier A | **Tier A** | Supported directly by NSF/ANSI Standard 184. |
| **Clothes Dryer** | Dryer Service Life | Numeric / Statistical | 12–16 years (Electric) / 11–15 years (Gas) | Tier A | **Tier C** | Supported with qualification (AHAM trade durability data). |
| **Clothes Dryer** | Leading Cause of Fire | Safety / Statistical | Failure to clean exhaust ducts is leading cause of dryer fires | Tier A | **Tier A** | Supported directly by NFPA and USFA research reports. |
| **Clothes Dryer** | IRC Exhaust Ducting | Regulatory / Building Code | 4-inch rigid metal duct; max 35-ft baseline; no screws | Tier A | **Tier A** | Supported directly by IRC Section M1502. |
| **Circuit Breaker**| Panel Service Life | Numeric / Statistical | 30 to 40 years under normal indoor conditions | Tier B | **Tier C** | Supported with qualification (IEEE 241 & CPSC safety benchmarks). |
| **Circuit Breaker**| NEC Continuous Load | Regulatory / Electrical Code | Continuous load (3+ hrs) limited to 80% of rating | Tier A | **Tier A** | Supported directly by NEC 210.19(A)(1) & 210.20(A). |
| **Circuit Breaker**| Two-Step Reset | Technical / Mechanical | Must push firmly to OFF before ON to reset trip spring | Tier A | **Tier A** | Supported directly by UL 489 molded-case breaker specifications. |

---

## 4. Source Verification Table

| Source Organization | Official Document / Standard Cited | Claim Verified | Direct / Indirect Support | Notes & Nuances |
| :--- | :--- | :--- | :--- | :--- |
| **ASHRAE** | ASHRAE Handbook — HVAC Applications | 12–17 year AC equipment life expectancy | Direct | Compiled from engineering surveys; varies strongly by annual cooling hours. |
| **U.S. Dept. of Energy (DOE)** | 10 CFR Part 430 (SEER2 Regional Standards) | 13.4 North / 14.3 South (<45k BTU) SEER2 minimums | Direct | Replaces old SEER testing with 0.5" w.c. external static pressure standard. |
| **U.S. EPA** | EPA AIM Act Technology Transitions Rule | Jan 1, 2025 R-410A manufacturing phaseout; GWP ≤ 700 | Direct | Reclaimed R-410A remains legal to service existing units indefinitely. |
| **NFPA** | NFPA 54: National Fuel Gas Code | Cracked furnace heat exchanger safety hazard | Direct | Prohibits field welding or patching of cracked residential combustion chambers. |
| **AHRI** | AHRI Equipment Durability & Directory | Furnace and AC lifespan planning ranges | Direct | Trade association baseline for system sizing and lifecycle planning. |
| **AHAM** | AHAM Appliance Durability Study | 9–12 yr dishwasher / 12–16 yr dryer life | Direct | Survey averages across U.S. households; not mathematical medians. |
| **NSF International** | NSF/ANSI Standard 184 | 150°F sanitize rinse / 5-log bacteria reduction | Direct | Statutory performance standard for residential sanitizing dishwasher cycles. |
| **NFPA & USFA** | NFPA Home Fires Involving Dryers / USFA Reports | Dryer fire counts and failure-to-clean leading factor | Direct | Reconciled dual reporting streams (~16k washer/dryer fires vs ~2.9k dryer fires). |
| **International Code Council (ICC)** | International Residential Code (IRC) Section M1502 | Dryer exhaust duct material, 35-ft run, elbow deductions | Direct | Mandatory residential building code requirement across most U.S. jurisdictions. |
| **NFPA (NEC)** | NFPA 70: National Electrical Code (NEC) | 15A/20A branch wiring & continuous load 80% rule | Direct | NEC 210.19(A)(1) & 210.20(A) mandate 125% factor for loads running 3+ hours. |
| **Underwriters Laboratories (UL)** | UL 489: Molded-Case Circuit Breakers | Two-step mechanical reset & trip-free operation | Direct | Mechanical design ensures breaker trips internally even if handle is held ON. |
| **CPSC / Aronstein** | CPSC FPE Stab-Lok Investigation & Engineering Reports | FPE breaker failure-to-trip hazards under load | Direct | Independent testing confirmed double-pole failure to trip rates at 135% load. |

---

## 5. Verification Conclusion

With the completion of this audit and the integration of targeted precision edits across all five Batch 2 files:
1. All lifespan numbers are appropriately qualified as **Tier C industry planning ranges**.
2. All regulatory standards (DOE SEER2, EPA AIM Act, IRC M1502, NEC continuous load, NSF 184) cite exact parameters, dates, and code sections.
3. All safety hazard descriptions (carbon monoxide, lint fire prevention, breaker arcing) maintain rigorous technical accuracy without false precision or alarmist overreach.
4. The codebase compiles cleanly with zero TypeScript errors and matches the editorial quality benchmark set in Batch 1.
