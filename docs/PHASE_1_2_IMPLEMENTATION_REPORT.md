# Home Reference — Phase 1.2 Implementation Report
## Editorial Recovery, Information Architecture & Priority Content Reconstruction

**Production Domain:** https://homereference.org/  
**Implementation Date:** October 2026  
**Status:** Completed & Verified  

---

## 1. Information Architecture Remediation

### 1.1 Disposition of the Empty Costs Hub (`/costs/`)
- **Primary Navigation Removal:** Removed `/costs/` from `src/components/Header.tsx` desktop and mobile menus. The primary navigation now displays the four robust, high-content pillars: **Systems**, **Appliances**, **Lifespan**, and **Everyday**.
- **Footer Navigation Cleanup:** Removed `/costs/` from `src/components/Footer.tsx`.
- **Cross-Pillar Relationship Cleanup:** Removed `costs` from `adjacentPillars` across all category definitions in `src/data/pillarsData.ts`.
- **Search Engine Indexing & Sitemap:** Removed `https://homereference.org/costs/` from `public/sitemap.xml`. Updated `src/layouts/BaseLayout.astro` to support a `noindex?: boolean` prop that emits `<meta name="robots" content="noindex, follow" />`.
- **Contextual Presentation:** Transformed `src/pages/costs/index.astro` from an empty archive box ("0 Reference Guides") into an informative editorial notice. It transparently explains that rather than publishing speculative, flat national price tags that vary by 50%–100% across U.S. markets, capital replacement economics, repair-versus-replace heuristics, and energy efficiency trade-offs are directly integrated into individual equipment reference manuals (with direct links to the Water Heater, Central A/C, Furnace, and Refrigerator guides).

### 1.2 Maintenance and Lifespan Hub Treatments
- **Maintenance Hub (`/maintenance/`):** Evaluated carefully. Rather than leaving an isolated hub in the primary sticky header when it contains a single flagship guide (*HVAC Air Filter Replacement Schedule*), the route remains live and fully indexed at `/maintenance/`, linked via the footer, homepage directory, and adjacent pillar pathways.
- **Lifespan Hub (`/lifespan/`):** Transformed into a true **Master Longevity Reference Hub**. Strengthened its scope to serve as the central repository for cross-system longevity benchmarks, multi-system wear matrices, and capital replacement planning.

---

## 2. Editorial Transparency & Methodology Rebuild

Rebuilt `src/components/views/AboutView.tsx` with a comprehensive, seven-section editorial policy document. No fictional personnel, fake certifications, unverified emails, or false claims of physical testing labs were introduced.

1. **Scope & Audience:** Defines Home Reference as an independent digital knowledge repository for American homeowners, buyers, and tenants.
2. **Research & Verification Process:** Documents the three-step authoring pipeline: (1) Primary source retrieval, (2) Engineering and trade disambiguation, and (3) Explanatory diagramming and differential diagnosis.
3. **Four-Tier Authoritative Source Hierarchy:**
   - *Tier 1:* Federal Regulatory & Scientific Authorities (DOE, EPA, CPSC, NIST, CDC).
   - *Tier 2:* Consensus Engineering & Safety Standards Bodies (NFPA, ASHRAE, ICC / IRC).
   - *Tier 3:* Equipment Manufacturer Associations (AHAM, AHRI, WQA).
   - *Tier 4:* Professional Inspection Societies (InterNACHI, ASHI).
4. **Safety Boundaries & Trade Demarcation:**
   - Clearly separates *Homeowner Observation & Routine Care* (filter swaps, coil vacuuming, visual inspection, valve exercise) from *Licensed Trade Work* (pressurized gas piping, EPA Section 608 refrigerant charging/recovery, 240V panel distribution, combustion flues).
   - Details emergency abort thresholds (natural gas odors, electrical arcing, water near electrical equipment, combustion soot rollout).
5. **Correction & Revision Policy:** Outlines the verification workflow when discrepancies or code updates are reported, including timestamp disclosure via `lastReviewedDate`.
6. **Review Cadence:** Evergreen references audited against regulatory milestones (DOE efficiency standards, EPA SNAP refrigerant phase-downs), 3-year model building code updates, and annual source URL checks.
7. **Commercial Independence Disclosure:** Details funding exclusively through standardized, non-intrusive display advertising (Google AdSense), with zero affiliate sales links, zero paid sponsored placements, and zero contractor lead-generation data sales.

---

## 3. Priority Article Reconstruction & Technical Precision

### 3.1 Water Heater Lifespan, Anode Rod Science & Replacement Guide (`/systems/water-heater-lifespan-and-replacement/`)
- **Electrochemical Anode Science:** Added in-depth technical explanation of galvanic cathodic protection. Explains standard reduction potentials: Magnesium (-2.37V) and Aluminum (-1.66V) vs. Carbon Steel (-0.44V).
- **Water Softener Nuance:** Corrected oversimplified assertion that softeners universally destroy anodes in 18 months. Clarifies that ion-exchange softeners swap calcium/magnesium for sodium ions; the resulting increase in electrical conductivity accelerates galvanic exchange, requiring inspection every 1–2 years.
- **Lifespan Benchmarks:** Grounded the 8–12 year tank and 20+ year tankless benchmarks in DOE Energy Saver data.
- **Sediment Thermal Mechanics:** Explains how calcium carbonate blankets insulate the tank bottom in gas units, superheating trapped water into steam (kettling) and overheating the lower steel plate, leading to weld seam fatigue.
- **Temperature Nuance:** Clarified that CPSC 120°F is an advisory anti-scald recommendation, while CDC notes Legionella growth below 120°F. Recommends ASSE 1017 thermostatic mixing valves for households seeking 130°F–140°F storage with 120°F fixture delivery.
- **Safety Abort Thresholds:** Explicitly cautions that a weeping pressurized tank body cannot be welded or patched; added breaker counter-torque safety warning when loosening seized anode rods.

### 3.2 Refrigerator Lifespan, Vapor-Compression Diagnostics & Maintenance (`/appliances/refrigerator-lifespan-and-maintenance/`)
- **Thermodynamic Principles:** Explains the closed vapor-compression cycle across compression, condensation, expansion (capillary tube), and evaporation.
- **Airflow Differential Diagnosis:** Corrected the previous assertion that cold freezer / warm fridge is "almost always a defrost timer failure." Established a comprehensive 5-point differential diagnosis:
  1. Frosted evaporator coils (defrost heater, bimetal thermostat, defrost timer, or control board).
  2. Seized evaporator fan motor.
  3. Stuck motorized damper door.
  4. Frozen return air duct.
  5. Faulty fresh food thermistor.
- **Regulatory Boundaries:** Detailed federal requirements under Clean Air Act EPA Section 608 for hermetic sealed systems, and highlighted that post-2020 domestic units use R-600a (isobutane), a flammable hydrocarbon requiring specialized non-sparking service equipment.
- **Temperature Standards:** Disambiguated FDA 40°F maximum safety ceiling from the 37°F–38°F operational setpoint, and 0°F freezer guideline.

### 3.3 Master Residential Component Lifespan Reference (`/lifespan/major-home-components-lifespan/`)
- **60+ Component Matrix:** Created an extensive, searchable multi-system longevity lookup across six building categories: Roofing & Envelope, HVAC & Heating, Plumbing & Water, Electrical & Safety, Appliances, and Interior Finishes.
- **NFPA 72 Standard:** Accurately framed the 10-year smoke alarm replacement standard as an NFPA consensus safety code widely adopted into municipal/state building laws, not an automatic standalone federal statute.
- **Panel Safety Disambiguation:** Grounded discussion of Federal Pacific Electric (FPE) Stab-Lok and Zinsco panels in documented failure modes (breaker non-trip rates and bus bar arcing) rather than speculative failure percentages.
- **Serial Number Decoder Guidance:** Explained the common conventions (first two digits as year, letter-coded month, sequential batch encoding) while clearly noting that formats differ across brands and eras.

---

## 4. Original Responsive SVG Diagrams

Created three original, accessible, high-contrast SVG diagram components with zero external image dependencies:

1. **`WaterHeaterCutawayDiagram.tsx` (Figure 1.1):**
   - Detailed cross-section schematic of an atmospheric gas water heater.
   - Depicts cold water inlet and dip tube, hot water outlet, sacrificial anode rod, central flue with spiral baffle, polyurethane foam insulation, T&P relief valve (150 psi / 210°F) with discharge pipe, lower gas burner, brass drain valve, and calcium carbonate sediment blanket.
   - Interactive component selection cards displaying failure modes and maintenance actions.

2. **`RefrigeratorVaporCycleDiagram.tsx` (Figure 1.2):**
   - Thermodynamic schematic of the closed vapor-compression refrigeration cycle and airflow distribution.
   - Highlights compressor, external condenser coils, capillary tube, internal evaporator coils with fan, and motorized damper metering 0°F air into the 37°F fresh food section.
   - Stage cards detail refrigerant state changes, pressure/temperature ranges, diagnostic symptoms, and EPA Section 608 boundaries.

3. **`ComponentFailureConsequenceMatrix.tsx` (Figure 1.3):**
   - Multi-system risk assessment matrix comparing sudden failure modes against gradual wear lifespans.
   - Categorizes failure severity across Critical Life-Safety (smoke alarms, heat exchangers, panel arcing), Catastrophic Property (washing machine hose burst, water heater rupture, sump pump failure), and Severe Financial (compressor burnout).
   - Filterable by system category and severity level.

4. **`MasterLongevityTable.tsx`:**
   - Searchable, category-filtered data table containing 60+ residential components, benchmark lifespans, primary wear mechanisms, and end-of-life indicators.

---

## 5. Structural Refactoring & Monoculture Elimination

Refactored `src/components/views/ArticleView.tsx` to completely eliminate the repetitive, cookie-cutter template monoculture:
- **Water Heater (ID 1):** Starts with quick answer, moves immediately to the interactive `WaterHeaterCutawayDiagram`, presents electrochemical anode science, key facts, warning signs, and maintenance with counter-torque safety warnings.
- **Refrigerator (ID 9):** Places the **5-Point Differential Diagnosis** callout box directly below the quick answer, followed by `RefrigeratorVaporCycleDiagram`, thermodynamic principles, FDA temperature standards, and the 50% appliance repair evaluation.
- **Major Components (ID 22):** Opens with the `ComponentFailureConsequenceMatrix`, embeds the searchable `MasterLongevityTable` across 60+ components, includes a dedicated serial number decoding visual guide, and frames capital reserve budgeting.
- **Other Reference Articles:** Render in the pristine, standard modular layout without layout regressions.

---

## 6. Verification and Build Status

- **TypeScript Compilation:** Validated with `tsc --noEmit` — 0 errors.
- **Codebase Linting:** Validated with `npm run lint` — 0 syntax or import errors.
- **Static Site Generation (`npm run build`):** Executed clean Astro 5 static build. Generated all static HTML pages and assets into `dist/`.
- **URL & Route Integrity:** All existing article URLs and category hubs (`/systems/`, `/appliances/`, `/maintenance/`, `/lifespan/`, `/everyday/`) remain fully functional.
- **Sitemap & Robots:** `sitemap.xml` updated without `/costs/`; `/costs/` properly serves `noindex, follow`.
