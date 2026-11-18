/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PillarHub } from '../types/reference';

export const PILLARS_DATA: PillarHub[] = [
  {
    id: 'systems',
    name: 'Home Systems',
    slug: '/systems/',
    tagline: 'The fixed mechanical and physical infrastructure that makes a residential dwelling function.',
    scope: 'Covers whole-house mechanical systems: central heating, air conditioning, heat pumps, water heating, domestic plumbing distribution, electrical service panels, roofing materials, and insulated window assemblies.',
    editorialOverview:
      'Residential systems are the concealed mechanical arteries of a home. Unlike plug-in appliances, these assets are permanently integrated into the structural envelope and plumbing or electrical grids. They involve high capital expense, strict municipal building codes, and safety risks involving pressurized gas, high-voltage electricity, and combustion exhaust. Home Reference provides non-commercial explanations of how these systems function, how long they realistically endure under varying water and climate conditions, and how to identify wear indicators before catastrophic failures occur.',
    commonQuestionsAnswered: [
      'How does incoming water pressure affect the lifespan of copper, PEX, and storage tanks?',
      'What are the critical warning signs that a central air compressor or furnace heat exchanger is failing?',
      'When is an electrical panel upgrade from 100A to 200A genuinely required?',
      'How do architectural shingles differ in real-world longevity from 3-tab asphalt shingles?',
      'Why do double-pane window seals fog, and can insulated glass units be replaced without full frame tearouts?',
    ],
    adjacentPillars: [
      {
        id: 'maintenance',
        name: 'Home Maintenance',
        relationship: 'Preventative procedures like filter changes, coil cleanouts, and water heater flushes directly prolong system service life.',
      },
      {
        id: 'lifespan',
        name: 'Lifespan & Replacement',
        relationship: 'Cross-category benchmark comparisons and master lifespan matrices for long-term capital planning.',
      },
    ],
    featuredArticleSlugs: [
      '/systems/water-heater-lifespan-and-replacement/',
      '/systems/central-ac-lifespan-and-efficiency/',
      '/systems/furnace-lifespan-and-replacement/',
    ],
  },
  {
    id: 'appliances',
    name: 'Appliances',
    slug: '/appliances/',
    tagline: 'Practical diagnostics, longevity benchmarks, and care for major kitchen and laundry equipment.',
    scope: 'Covers major freestanding and built-in equipment: refrigerators, dishwashers, clothes washers and dryers, ranges, ovens, microwaves, garbage disposals, and domestic water filtration.',
    editorialOverview:
      'Modern household appliances have evolved rapidly over the past two decades. Increased energy efficiency standards and electronic control boards have reduced operating energy consumption while altering failure modes and service lifespans. Where mechanical appliances of previous generations often lasted 15 to 20 years, contemporary units typically exhibit 10 to 14 year service spans. Our appliance reference library explains the mechanical components that do fail, diagnostic symptoms you can safely observe, and practical routines that keep equipment operating efficiently.',
    commonQuestionsAnswered: [
      'What are the primary mechanical causes of refrigerator cooling failure?',
      'Why do modern dishwashers leave grit or cloudy film on glassware, and what can be cleaned manually?',
      'What are the comparative durability differences between front-load and top-load washing machines?',
      'How does clothes dryer exhaust duct maintenance prevent thermal fuse trips and residential lint fires?',
      'Can a jammed garbage disposal be freed manually, and what leaks signal internal motor seal failure?',
    ],
    adjacentPillars: [
      {
        id: 'maintenance',
        name: 'Home Maintenance',
        relationship: 'Routine cleaning protocols for filters, condenser coils, spray arms, and dryer vents.',
      },
      {
        id: 'lifespan',
        name: 'Lifespan & Replacement',
        relationship: 'Empirical service lifespans and mechanical wear curves for kitchen and laundry machinery.',
      },
      {
        id: 'everyday',
        name: 'Everyday Household Knowledge',
        relationship: 'Understanding how municipal hard water minerals accelerate component wear and diminish detergent efficiency.',
      },
    ],
    featuredArticleSlugs: [
      '/appliances/refrigerator-lifespan-and-maintenance/',
      '/appliances/dishwasher-lifespan-and-care/',
      '/appliances/clothes-dryer-lifespan-and-vent-safety/',
    ],
  },
  {
    id: 'maintenance',
    name: 'Home Maintenance',
    slug: '/maintenance/',
    tagline: 'Systematic preventative care, replacement schedules, and seasonal routines that protect your dwelling.',
    scope: 'Actionable procedures and inspection cadences: HVAC air filtration, dryer duct sweeping, water heater sediment draining, gutter drainage management, and sump pump reliability testing.',
    editorialOverview:
      'Preventative home maintenance is the single most cost-effective lever available to American homeowners. The majority of four-figure emergency plumbing, HVAC, and basement water claims originate not from spontaneous catastrophic events, but from slow, neglected wear—such as clogged condensate lines, calcified sediment blankets, restricted air filters, or seized float switches. This hub outlines clear, repeatable maintenance procedures, establishes realistic schedules, and emphasizes homeowner safety boundaries.',
    commonQuestionsAnswered: [
      'How frequently should 1-inch and 4-inch HVAC air filters be inspected and replaced?',
      'What MERV rating is appropriate for standard residential blower motors without causing static pressure strain?',
      'Why must water heater tanks be flushed of calcium sediment, and how is the procedure performed safely?',
      'How often should clothes dryer exhaust ducts be swept to satisfy building codes and prevent fire hazards?',
      'What is the quarterly testing protocol for basement sump pumps and battery backup switches?',
    ],
    adjacentPillars: [
      {
        id: 'systems',
        name: 'Home Systems',
        relationship: 'Detailed technical explanations of how system components work and where maintenance points are physically located.',
      },
      {
        id: 'everyday',
        name: 'Everyday Household Knowledge',
        relationship: 'Safety protocols, shutoff locations, and circuit breaker diagnostic guidance.',
      },
    ],
    featuredArticleSlugs: [
      '/maintenance/hvac-filter-replacement-schedule/',
    ],
  },
  {
    id: 'lifespan',
    name: 'Lifespan & Replacement',
    slug: '/lifespan/',
    tagline: 'Master Longevity Reference: Empirical service benchmarks, wear thresholds, and replacement matrices across the home.',
    scope: 'Cross-category lookup matrices, multi-system lifespan comparisons, safety expiration thresholds (such as 10-year smoke alarm replacement standards), and structural wear indicators.',
    editorialOverview:
      'Every component of a residential structure exists on a predictable wear curve. Knowing where an asset sits on that curve transforms unexpected emergency expenses into planned capital investments. This hub serves as a Master Longevity Reference synthesizing authoritative data from the Department of Energy, appliance manufacturer surveys, and building inspector standards into accessible, claim-verified benchmark tables. We explicitly distinguish sourceable medians from variable estimates influenced by water hardness, climate run-hours, and preventative care.',
    commonQuestionsAnswered: [
      'What is the standard estimated service life for 59 common residential components and fixtures across major home systems?',
      'Why does NFPA 72 recommend replacing smoke alarms 10 years from the date of manufacture?',
      'How does the 15–20+ year planning range of a tankless water heater compare to the 8–12 year planning range of a standard storage tank under real-world water conditions?',
      'What visual and thermal indicators distinguish cosmetic window seal fogging from structural frame failure?',
      'How long do plumbing fixtures, cartridges, and shutoff valves last before seizing or weeping?',
    ],
    adjacentPillars: [
      {
        id: 'systems',
        name: 'Home Systems',
        relationship: 'In-depth mechanical reference on why major building envelope and HVAC assets degrade.',
      },
      {
        id: 'appliances',
        name: 'Appliances',
        relationship: 'Detailed operational diagnostics and mechanical lifespan benchmarks for kitchen and laundry machinery.',
      },
      {
        id: 'maintenance',
        name: 'Home Maintenance',
        relationship: 'Specific maintenance procedures like air filter schedules and water heater flushes that preserve component longevity.',
      },
    ],
    featuredArticleSlugs: [
      '/lifespan/major-home-components-lifespan/',
    ],
  },
  {
    id: 'costs',
    name: 'Costs & Ownership',
    slug: '/costs/',
    tagline: 'Economic transparency on trade labor quotes, repair vs. replacement rules of thumb, and capital factors.',
    scope: 'Decision-making frameworks, factors dictating contractor estimates, permit and code considerations, and lifecycle budgeting concepts without misleading flat bids.',
    editorialOverview:
      'Residential repair and replacement quotes vary widely across the United States. A heat pump or water heater replacement quote in one metropolitan market may be double that of another region due to prevailing trade wage rates, municipal permit rigor, line-set access, and local equipment efficiency mandates. This section does not publish artificial, static national price tags. Instead, it provides homeowners with the tools to dissect contractor estimates, understand line-item variables, and apply rational decision heuristics when equipment fails out of warranty.',
    commonQuestionsAnswered: [
      'How should a homeowner evaluate an appliance repair estimate against the cost of a new replacement unit?',
      'What specific equipment, labor, and municipal factors dictate central HVAC replacement costs?',
      'When is it economically sound to pay a $120 diagnostic fee versus applying that capital toward replacement?',
      'What hidden code compliance upgrades (expansion tanks, line-set flushing, electrical disconnects) commonly appear on contractor quotes?',
    ],
    adjacentPillars: [
      {
        id: 'systems',
        name: 'Home Systems',
        relationship: 'Understanding the technical scope behind major infrastructure replacement bids.',
      },
      {
        id: 'appliances',
        name: 'Appliances',
        relationship: 'Understanding component availability and common replacement cycle triggers.',
      },
    ],
    featuredArticleSlugs: [],
  },
  {
    id: 'everyday',
    name: 'Everyday Household Knowledge',
    slug: '/everyday/',
    tagline: 'Essential safety protocols, utility controls, and foundational maintenance literacy for all occupants.',
    scope: 'Locating and testing emergency water shutoffs, diagnosing circuit breaker trips, understanding hard water consequences, and power outage home management.',
    editorialOverview:
      'Every person living in a home—whether a longtime homeowner, new buyer, or tenant—needs immediate clarity on foundational utility controls during unexpected disruptions. A burst washing machine hose discharges 10 to 12 gallons of water per minute; knowing how to locate and operate the main water valve in 30 seconds prevents tens of thousands of dollars in water damage. This hub delivers practical, calm instruction for everyday situations and household mechanics.',
    commonQuestionsAnswered: [
      'Where is the main domestic water shutoff valve typically located in slab, basement, and crawlspace homes?',
      'How do you safely reset a tripped circuit breaker, and what signs indicate an electrical overload versus an arc fault?',
      'What are the telltale household symptoms of hard water scale, and how does it alter fixture and appliance performance?',
      'How should homeowners manage refrigeration, sump pumps, and plumbing during extended power outages?',
    ],
    adjacentPillars: [
      {
        id: 'systems',
        name: 'Home Systems',
        relationship: 'Plumbing supply pipe materials, electrical service panels, and water heating connections.',
      },
      {
        id: 'maintenance',
        name: 'Home Maintenance',
        relationship: 'Testing valves and safety switches on a regular schedule before emergencies happen.',
      },
    ],
    featuredArticleSlugs: [
      '/everyday/main-water-shutoff/',
      '/everyday/what-to-do-when-circuit-breaker-trips/',
    ],
  },
];
