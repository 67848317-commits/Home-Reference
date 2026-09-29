# Home Reference — Phase 2B.2.1: Final Precision & Source Wording Correction Audit

> **Document Type:** Final Precision, Regulatory Wording, Price Sourcing & Documentation Audit  
> **Target Scope:** 5 Authored Reference Articles (Batch 2)  
> **Status:** Completed, Validated & Content Quality Frozen  
> **Governing Benchmark:** *"Clear enough for a homeowner. Precise enough for a reference site. Careful enough not to overstate the evidence."*

---

## A. Scope

The audit and precision adjustments were strictly confined to the five Batch 2 reference articles:
1. **Central Air Conditioner Lifespan, Efficiency & Replacement Guide** (`/systems/central-ac-lifespan-and-efficiency/`, `src/content/reference/central-ac-lifespan.ts`)
2. **Furnace Lifespan, Warning Signs & Replacement Guide** (`/systems/furnace-lifespan-and-replacement/`, `src/content/reference/furnace-lifespan-and-replacement.ts`)
3. **Dishwasher Lifespan & Maintenance Guide** (`/appliances/dishwasher-lifespan-and-care/`, `src/content/reference/dishwasher-lifespan-and-care.ts`)
4. **Clothes Dryer Lifespan, Heating Element Diagnostics & Vent Safety** (`/appliances/clothes-dryer-lifespan-and-vent-safety/`, `src/content/reference/clothes-dryer-lifespan.ts`)
5. **Circuit Breaker Tripping: Safe Diagnostics vs. Call-an-Electrician Signs** (`/everyday/what-to-do-when-circuit-breaker-trips/`, `src/content/reference/circuit-breaker-tripping.ts`)

---

## B. Corrections Made

### 1. Furnace Heat Exchanger Safety & Field Repair
* **Original wording:** *"Under American national gas safety standards and manufacturer specifications, cracked heat exchangers cannot be welded, glued, or patched."* and *"replacement of the furnace is almost universally recommended by safety codes..."*
* **Corrected wording:** *"A cracked heat exchanger is a serious combustion safety hazard and should be evaluated by a qualified HVAC professional. In residential practice, field welding, brazing, or sealing cracks is not recognized as an acceptable remedy by furnace manufacturers or heating safety guidelines. Extreme thermal expansion and contraction cycles cause patched metal to quickly re-open. When a breach is confirmed, manufacturers and technicians specify replacing the entire heat exchanger assembly or, for furnaces already near or past their typical lifespan, replacing the complete furnace."*
* **Reason:** National Fuel Gas Code (NFPA 54) and ANSI Z21.47 require equipment to be operated safely and maintained in accordance with manufacturer listings and instructions; they do not explicitly contain a standalone statutory sentence outlawing field welding. The corrected wording grounds the standard in actual manufacturer listing requirements and professional safety consensus without inventing a non-existent statutory phrase.
* **Source:** ANSI Z21.47 / CSA 2.3 & NFPA 54.

### 2. Dishwasher Water Temperature & NSF/ANSI 184 Sanitization
* **Original wording:** *"Dishwasher detergents require 120°F water to fully dissolve enzymatic packets..."* and *"NSF/ANSI Standard 184 for residential dishwashers requires a 99.999% reduction of bacteria in sanitize mode" [labeled as statutory standard].*
* **Corrected wording:** Label changed to *"Recommended Intake Temperature"* with note *"Most manufacturers recommend incoming hot water around 120°F to help dissolve detergent packets and animal fats"* (Tier B). Label changed to *"Sanitize Certification Benchmark"* with note *"NSF/ANSI Standard 184 is a voluntary residential certification benchmark requiring a 99.999% reduction of bacteria in sanitize mode"* (Tier A).
* **Reason:** 120°F is a common manufacturer intake guideline and detergent activation condition, not a universal legal requirement. NSF/ANSI Standard 184 is a voluntary consensus product testing and certification standard, not a federal or statutory mandate.
* **Source:** AHAM Dishwasher Guidelines, NSF/ANSI Standard 184.

### 3. Clothes Dryer Model Building Code (IRC Section M1502)
* **Original wording:** *"IRC Section M1502 prohibits flexible plastic, vinyl, or corrugated foil ducting inside walls or attics"* and *"Code requires 4-inch diameter rigid metal pipe..."*
* **Corrected wording:** Clarified in Key Facts as *"Model Code Ducting Standard"* with note *"The IRC model building code (Section M1502) prohibits flexible plastic or corrugated foil ducting in concealed spaces; local adopted codes may vary."* In FAQs, explicitly stated: *"The International Residential Code (IRC Section M1502)—a model code adopted and amended by most U.S. jurisdictions—prohibits plastic and vinyl ducting for clothes dryer exhaust... Always check your local adopted building code and dryer manufacturer instructions."*
* **Reason:** The International Residential Code is a model building code published by the ICC. It only has legal force when adopted and as amended by state or municipal authorities. Distinguishing between model code language, local adopted codes, and manufacturer instructions prevents misleading homeowners on jurisdictional legal authority.
* **Source:** International Code Council (ICC) International Residential Code Section M1502.

### 4. Clothes Dryer Fire Statistics Calibration
* **Original wording:** *"NFPA reports approximately 13,000+ home clothes dryer fires annually in the U.S., resulting in tens of millions in property loss."*
* **Corrected wording:** *"According to reports from the National Fire Protection Association (NFPA) and the U.S. Fire Administration (USFA), failure to clean dryer exhaust systems is the leading contributing factor in clothes dryer fires, which account for thousands of residential structure fires annually. Keeping your 4-inch exhaust line clear is both the premier household fire-safety measure and the single best way to ensure maximum equipment life."*
* **Reason:** NFPA publishes estimates for home fires involving dryers or washing machines (~15,970 annually, 92% dryers), while the U.S. Fire Administration specifically reports ~2,900 reported dryer-specific structural fires annually. Calibrated phrasing avoids asserting an old point-estimate as a live annual count while maintaining the verified core fact: failure to clean is the primary contributing factor.
* **Source:** NFPA Research Report: Home Fires Involving Clothes Dryers and Washing Machines; USFA Topical Fire Report Series.

### 5. Circuit Breaker NEC Continuous Load Rules
* **Original wording:** *"Continuous Load Safe Threshold: 80% of Rated Capacity. NEC 80% rule: a continuous electrical load running 3+ hours should not exceed 12A on a 15A circuit, or 16A on a 20A circuit."*
* **Corrected wording:** *"Continuous Load Sizing Rule: 80% Practical Limit for Continuous Loads. Under NEC Sections 210.19(A)(1) & 210.20(A), branch circuits serving continuous loads (operating 3+ hours) require a 125% rating factor, limiting continuous draw to 12A on 15A circuits or 16A on 20A circuits."*
* **Reason:** The NEC does not state a blanket rule that all electrical circuits can only ever carry 80% of their ampacity; standard non-continuous loads can utilize up to 100% of branch rating. The 80% practical limit applies specifically to continuous loads (defined as 3+ hours of continuous draw) through the 125% sizing multiplier in Sections 210.19(A)(1) and 210.20(A).
* **Source:** NFPA 70: National Electrical Code (NEC) Sections 210.19(A)(1) & 210.20(A).

### 6. Electrical Panel Hazard Characterization (FPE & Zinsco)
* **Original wording:** *"Class-action and CPSC testing revealed substantial breaker failure-to-trip rates..."* and *"Complete panel replacement is urgently recommended."*
* **Corrected wording:** *"Historical testing and independent research have documented concerns involving certain FPE Stab-Lok and Zinsco equipment; homes with these panels should be evaluated by a qualified electrician to determine whether replacement is appropriate."*
* **Reason:** Avoids blanket assertions that every panel will fail or that replacement is a statutory universal mandate, framing it instead as documented testing history warranting professional evaluation and replacement consideration.
* **Source:** CPSC FPE Investigation Briefs; Jesse Aronstein Independent Research Reports.

### 7. EPA R-410A / 2025 vs. 2026 Transition Wording
* **Original wording:** Compressed the transition into a general 2025 phaseout, risking the homeowner misunderstanding that existing equipment became illegal or unserviceable.
* **Corrected wording:** Clearly delineated the regulatory dates: *"The manufacturing and importation of new residential split-system central air conditioners utilizing high-GWP R-410A ended on January 1, 2025, and an installation compliance transition for new split systems applies as of January 1, 2026. New residential systems transition to lower-GWP refrigerants (GWP of 700 or lower, such as R-454B and R-32). Importantly for homeowners, existing R-410A equipment is not illegal and does not require immediate replacement; existing units can continue to operate and be serviced throughout their useful service life using available reclaimed or recycled refrigerant."*
* **Reason:** Grounded in EPA AIM Act Technology Transitions regulations, protecting homeowners from misinterpreting the rule as a mandate to scrap functional equipment.
* **Source:** EPA AIM Act Technology Transitions Rule (40 CFR Part 84).

---

## C. Regulatory Precision Summary

* **DOE SEER2:** Verified against 10 CFR Part 430. Minimum split-system cooling standards effective Jan 1, 2023: 13.4 SEER2 (North) and 14.3 SEER2 for systems <45,000 BTU/h (13.8 SEER2 for ≥45,000 BTU/h in Southeast and Southwest). Tested against 0.5 in. w.c. external static pressure.
* **EPA AIM Act:** Sourced to EPA Technology Transitions Rule. Manufacture and import of new residential split-system AC units using R-410A ceased Jan 1, 2025; installation transition applies as of Jan 1, 2026; new units must have GWP ≤ 700. Existing equipment remains lawful to operate and service with reclaimed refrigerant.
* **NFPA 54:** Fuel gas equipment must be maintained in safe operating condition per manufacturer instructions. Field repair of combustion boundaries is not recognized as standard practice.
* **NSF/ANSI 184:** Certified as a voluntary consensus performance standard, requiring 99.999% bacterial reduction at 150°F+ final rinse.
* **IRC M1502:** Identified as a model building code subject to local jurisdictional adoption and amendment. Sourced 4-inch rigid metal duct, 35-ft baseline equivalent length, 5-ft 90° elbow deduction, and exclusion of interior-protruding screws.
* **NEC (NFPA 70):** Sourced 15A/20A branch conductor sizing (14 AWG / 12 AWG) and continuous load 125% factor under 210.19(A)(1) and 210.20(A).
* **UL 489:** Molded-case circuit breaker testing and construction standard. Prescribes trip-free mechanical operation (breaker trips even if lever is held ON). Clarified that the two-step manual reset (pushing fully OFF before ON) is a mechanical latch design rather than a consumer statutory regulation.

---

## D. Safety Precision Summary

* **Furnace Heat Exchanger:** Framed as a non-repairable combustion boundary component; field welding/patching is not recognized by manufacturers or trade safety standards.
* **Carbon Monoxide:** Emphasized immediate evacuation upon CO alarm activation; monthly alarm testing aligned with NFPA 72.
* **Dryer Fire Safety:** Linked duct maintenance directly to lint ignition and thermal safety cutoff operation; warned against prohibited flexible vinyl/plastic ducting.
* **Electrical Breakers:** Distinguished thermal overload from instantaneous magnetic short circuits; highlighted emergency call-an-electrician criteria (hot panel, burning smell, buzzing, instantaneous trip).
* **FPE & Zinsco:** Framed with historical testing evidence and professional inspection consensus for replacement consideration rather than alarmist legal overreach.

---

## E. Price Audit & Cost Drivers Documentation

In accordance with Phase 2B.2.1 precision standards, unsupported national price figures have been removed from the homeowner reference text in favor of transparent **cost drivers and qualitative planning guidance**. Where general trade ranges were evaluated, they were resolved as follows:

| Item | Prior Stated Range | Final Action | Source / Basis | Geography | Scope | Tier | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **Central AC Full System** | $5,500 – $11,500 | **Removed numerical range** | Converted to cost drivers | U.S. National | Installed split-system | Tier C | Replaced with specific drivers: tonnage (Manual J), SEER2 tier, line-set condition, duct plenum transitions, and municipal permits. |
| **Gas Furnace Replacement** | $3,200 – $7,500 | **Removed numerical range** | Converted to cost drivers | U.S. National | Installed gas furnace | Tier C | Replaced with specific drivers: 80% standard vs. 95%+ condensing direct-venting, PVC penetrations, and gas sediment traps. |
| **Dishwasher Unit Purchase** | $500 – $1,200 | **Removed numerical range** | Converted to cost drivers | U.S. National | Retail appliance purchase | Tier C | Replaced with specific drivers: plastic vs. stainless steel tub construction and decibel insulation tier (sub-44 dBA vs. 50+ dBA). |
| **Dishwasher Installed Total** | $700 – $1,500 | **Removed numerical range** | Converted to cost drivers | U.S. National | Retail + trade installation | Tier C | Replaced with specific drivers: water supply lines, brass compression fittings, high-drain loop vs. air gap requirements. |
| **Clothes Dryer Unit Purchase**| $550 – $1,100 | **Removed numerical range** | Converted to cost drivers | U.S. National | Retail appliance purchase | Tier C | Replaced with specific drivers: electric vs. gas models, drum capacity, and control complexity. |
| **Clothes Dryer Installed Total**| $750 – $1,400 | **Removed numerical range** | Converted to cost drivers | U.S. National | Retail + hookup | Tier C | Replaced with specific drivers: 240V 30A electrical vs. certified gas piping, semi-rigid aluminum transition duct, and exhaust run length. |
| **Electrical Panel Replacement**| $1,800 – $4,200 | **Removed numerical range** | Converted to cost drivers | U.S. National | Complete service panel swap | Tier C | Replaced with specific drivers: 100A to 200A service drop, grounding electrode systems (ground rods), surge protection, and utility meter pull coordination. |
| **Electrician Diagnostic Call** | $150 – $350 | **Removed numerical range** | Converted to cost drivers | U.S. National | First-hour trade service call | Tier C | Replaced with trade labor context: diagnostic tracing of branch faults and local contractor labor rate variability. |

---

## F. Lifespan Audit Summary

All lifespan claims across the five articles remain uniformly designated as **Tier C (Industry Planning Benchmarks)**:
* Central AC: 12–17 years (Runtime-dependent planning benchmark)
* Gas Furnace: 15–20 years / Electric Furnace: 20–25 years (Planning benchmark)
* Dishwasher: 9–12 years (Survey benchmark)
* Clothes Dryer: 12–16 years Electric / 11–15 years Gas (Survey benchmark)
* Electrical Panel: 30–40 years (Planning benchmark)

Wording across all five articles consistently uses cautious expressions: *"typically lasts"*, *"common planning range"*, and *"often reaches"*, avoiding deterministic phrases like *"will last"*.

---

## G. Source Characterization Audit

All cited organizations have been checked for accurate characterization:
* **U.S. Department of Energy (DOE):** Federal Agency (administers energy conservation standards and test procedures).
* **U.S. Environmental Protection Agency (EPA):** Federal Agency (administers environmental regulations and AIM Act rules).
* **U.S. Consumer Product Safety Commission (CPSC):** Federal Agency (issues safety bulletins, recall notices, and research).
* **National Fire Protection Association (NFPA):** Standards Organization (publishes consensus safety codes including NFPA 54, 70, 72).
* **International Code Council (ICC):** Model Code Organization (develops model building codes like the IRC).
* **Underwriters Laboratories (UL):** Global Safety Certification Organization (publishes product safety and testing standards).
* **American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE):** Professional Engineering Society / Standards Developer.
* **Air-Conditioning, Heating, and Refrigeration Institute (AHRI):** Trade Association (publishes performance certification directories).
* **Association of Home Appliance Manufacturers (AHAM):** Trade Association (compiles appliance longevity surveys).
* **NSF International:** Public Health and Safety Standards Organization.

---

## H. Content Registry Audit: Washing Machine vs. Circuit Breaker

* **Roadmap Analysis:** The original Phase 2B Batch 2 user brief initially suggested a Washing Machine guide. The actual implementation instead authored `Circuit Breaker Tripping` (`/everyday/what-to-do-when-circuit-breaker-trips/`).
* **Registry Verification in `src/data/articlesData.ts`:**
  * `Washing Machine Lifespan: Front-Load vs. Top-Load Durability` (`/appliances/washing-machine-lifespan-front-vs-top-load/`, ID: 11) is correctly preserved in `PLANNED_V1_REGISTRY`. It was NOT overwritten or deleted and remains queued for future authoring.
  * `Circuit Breaker Tripping` (`/everyday/what-to-do-when-circuit-breaker-trips/`, ID: 30) is fully authored, exported in `BATCH_2_COLLECTION`, and dynamically reconciled in `ARTICLES_DATA`.
  * There are **zero duplicate IDs or slugs** in the entire registry.
  * Internal links from other articles (e.g. Clothes Dryer linking to Circuit Breaker) resolve cleanly.

---

## I. Files Changed

* `src/content/reference/central-ac-lifespan.ts`
* `src/content/reference/furnace-lifespan-and-replacement.ts`
* `src/content/reference/dishwasher-lifespan-and-care.ts`
* `src/content/reference/clothes-dryer-lifespan.ts`
* `src/content/reference/circuit-breaker-tripping.ts`
* `docs/PHASE_2B_2_1_FINAL_PRECISION_AUDIT.md` (this report)

---

## J. Final Cleanup Status

The final targeted precision cleanup has been completed across the entire Batch 2 library:
1. **EPA AIM Act & R-410A:** Jan 1, 2025 manufacture/import cutoff and Jan 1, 2026 installation compliance milestone clearly distinguished; existing equipment service legality affirmed.
2. **SEER2 Applicability:** Framed within regional split-system parameters (13.4 North, 14.3 South <45k BTU, 13.8 South ≥45k BTU) without overgeneralizing to other system types.
3. **Price Precision Cleaned:** All unsupported national dollar figures removed from key facts, repair sections, and cost breakdowns; replaced with transparent, practical cost drivers.
4. **Price Audit Table Repaired:** Clean, fully aligned Markdown table with zero broken fences, duplicated headers, or orphaned rows.
5. **Furnace Heat Exchanger Safety:** Grounded in manufacturer listing requirements and professional safety practices without asserting nonexistent statutory code text.
6. **Dishwasher Standards:** NSF/ANSI Standard 184 classified as a voluntary residential certification benchmark; 120°F water temperature characterized as a manufacturer guideline.
7. **Dryer Model Code & Fire Stats:** IRC M1502 explicitly contextualized as a model building code subject to local jurisdiction; fire statistics calibrated to cite NFPA and USFA research without presenting outdated counts as live annual totals.
8. **NEC & UL 489:** Continuous load 80% practical limit sourced to NEC 210.19(A)(1) & 210.20(A) for loads of 3+ hours; breaker reset framed as an electromechanical design operation rather than a statutory rule.
9. **FPE & Zinsco:** Framed as documented historical testing and field concerns warranting qualified electrician inspection and replacement consideration.
10. **Validation Results:**
    * TypeScript validation (`npx tsc --noEmit`): **0 errors**.
    * Production build (`compile_applet`): **Successful**.
    * Content registry: **10 active authored articles, 25 planned registry stubs, zero duplicates**.
