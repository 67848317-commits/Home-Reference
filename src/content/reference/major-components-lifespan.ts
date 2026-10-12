/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReferenceArticleContent } from '../config';

export const majorComponentsLifespanArticle: ReferenceArticleContent = {
  id: 22,
  slug: '/lifespan/major-home-components-lifespan/',
  aliases: ['/lifespan/home-systems-appliances-lifespan-table/'],
  title: 'Major Home Components Lifespan Reference',
  pillarId: 'lifespan',
  pillarName: 'Lifespan & Replacement',
  subcategory: 'Master Longevity Benchmarks',
  searchIntent: 'Master Reference / Evergreen',
  purpose: 'Provide a qualified, empirical master lookup table comparing expected service lifespans across residential systems, appliances, building envelopes, and plumbing fixtures in American homes, with deep links to specialized articles.',
  summary:
    'A practical planning guide comparing typical service-life ranges across residential roofing, heating, cooling, plumbing, electrical, and appliance assets. Lifespans represent industry planning benchmarks under routine maintenance, not warranties or automatic replacement deadlines.',
  metaDescription:
    'Master reference table for the lifespans of major home components: HVAC, roofs, appliances, plumbing, and electrical assemblies based on industry standards.',
  publishedDate: '2026-02-10',
  lastReviewedDate: '2026-09-28',
  reviewer: {
    name: 'Editorial Desk',
    desk: 'Home Reference Editorial Desk',
  },
  readTime: '7 min read',
  schemaType: 'Article',
  isPilot: true,
  isFeatured: true,
  typicalLifespan: 'Master Reference Matrix (5 to 50+ years)',
  lifespanTier: 'C',
  maintenanceCadence: 'Consult during seasonal home reviews, purchase inspections, and capital reserve planning',
  diagnosticWarning: 'Component exceeds 80% of expected life; repair costs begin compounding annually',

  quickAnswer:
    'Household assets have distinct expected service-life ranges based on thermal cycles, mechanical friction, and water exposure. Major mechanical equipment (refrigerators, dishwashers, water heaters, central AC) typically endures 8 to 15 years, while structural envelope elements (architectural roofs, vinyl windows, copper plumbing) often last 20 to 50+ years. Use this master benchmark table as a practical planning guide to anticipate upcoming capital replacements rather than waiting for emergency failures.',

  keyFacts: [
    {
      label: 'Storage Water Heaters (Gas/Electric)',
      value: '8 – 12 Years',
      note: 'DOE/AHRI planning benchmark; limited by inner steel pressure vessel corrosion',
      tier: 'C',
    },
    {
      label: 'Central Air Conditioners & Heat Pumps',
      value: '12 – 17 Years',
      note: 'Compressor service life is heavily influenced by annual cooling run-hours and coil cleanliness',
      tier: 'C',
    },
    {
      label: 'Residential Gas Furnaces',
      value: '15 – 20 Years',
      note: 'Governed by heat exchanger thermal fatigue and burner assembly integrity',
      tier: 'C',
    },
    {
      label: 'Architectural Laminate Shingle Roof',
      value: '25 – 30 Years',
      note: 'Outlasts 3-tab (15–20 yrs); depends heavily on attic ventilation and severe weather exposure',
      tier: 'C',
    },
    {
      label: 'Kitchen Refrigerators & Freezers',
      value: '10 – 14 Years',
      note: 'AHAM survey planning benchmark; compressor longevity depends on airflow',
      tier: 'C',
    },
    {
      label: 'Smoke & Carbon Monoxide Alarms',
      value: '10 Years Maximum',
      note: 'Statutory replacement standard under NFPA 72 due to internal sensor decay',
      tier: 'A',
    },
    {
      label: 'Built-in Dishwashers',
      value: '9 – 12 Years',
      note: 'Pump motor seals and electronic control boards dictate replacement timing',
      tier: 'C',
    },
    {
      label: 'Main Electrical Service Panels',
      value: '30 – 40+ Years',
      note: 'Busbar condition and obsolete panel designs (e.g. FPE/Zinsco) dictate upgrades regardless of age',
      tier: 'B',
    },
  ],

  detailedExplanation: [
    'Every major system in a home is slowly wearing down from heat cycles, friction, water exposure, or rust. For most homeowners and home buyers, the challenge isn’t that things age—it’s that they age out of sight. A water heater quietly makes hot water for ten years, until suddenly a gallon of water a minute is pooling on the basement floor.',
    'This reference table brings together long-term research from the National Association of Home Builders (NAHB), the International Association of Certified Home Inspectors (InterNACHI), the Department of Energy, and appliance manufacturer trade data.',
    'These numbers are practical planning benchmarks, not expiration dates or manufacturer warranties. They assume standard installation and reasonable upkeep. A neglected system or severe local conditions—like high water hardness or extreme summer humidity—will push equipment toward the lower end of the range.',
    'The most useful way to use this table is for budget planning: when a component enters the final quarter of its expected lifespan, you shouldn’t panic or replace it if it’s working fine—you should simply start setting aside replacement funds so an inevitable failure never becomes a financial emergency.',
  ],

  factors: [
    {
      title: 'Preventative Maintenance Discipline',
      impact:
        'Simple actions like flushing sediment from a water heater, replacing HVAC filters, or vacuuming refrigerator coils can add meaningful years of functional service.',
    },
    {
      title: 'Equipment Sizing & Installation Quality',
      impact:
        'Oversized air conditioners that short-cycle or improperly supported plumbing pipes subject components to chronic mechanical fatigue.',
    },
    {
      title: 'Water Chemistry & Mineral Hardness',
      impact:
        'Hard water minerals accelerate scale buildup across all water-bearing fixtures, significantly accelerating scale accumulation and reducing water heater and dishwasher service life.',
    },
    {
      title: 'Regional Climate & Annual Runtime',
      impact:
        'Equipment in extreme environments (such as air conditioning in the humid Deep South or furnaces in Minnesota) accumulates run-hours much faster than in temperate zones.',
    },
  ],

  warningSigns: {
    normal: [
      'Component operates reliably within manufacturer tolerances despite cosmetic surface aging or minor paint fading',
      'Original mechanical parts functioning without frequent service technician dispatches',
    ],
    attention: [
      'Asset has reached 75% to 80% of its expected service-life range and requires frequent minor service calls',
      'Energy consumption noticeably increases compared to previous seasonal baselines',
    ],
    immediate: [
      'Structural rust, pressure vessel weeping, burning electrical odor, or active water leakage',
      'Replacement parts are officially discontinued by the manufacturer',
    ],
  },

  repairVsReplace: {
    frameworkName: 'Capital Lifecycle Replacement Strategy',
    summary:
      'When an asset reaches the later stage of its typical lifespan range, shift from a "repair at all costs" mentality to a planned replacement strategy. Obtaining competitive estimates during off-peak seasons avoids the high labor premiums common to emergency weekend replacements.',
    keyFactors: [
      'Current age relative to the master benchmark',
      'Frequency of service calls in preceding 12 months',
      'Safety hazards (combustion, refrigerant, high voltage)',
      'Energy efficiency gains of modern replacement models',
    ],
  },

  faqs: [
    {
      question: 'Does reaching the published lifespan mean I should replace my equipment immediately?',
      answer:
        'No. Lifespan estimates are practical planning benchmarks, not expiration dates. If your 12-year-old water heater or 15-year-old furnace is operating safely, passing annual professional safety checks, and shows no active corrosion or leaks, you do not need to discard it. Use the milestone to establish a replacement savings fund.',
    },
    {
      question: 'How do I determine the age of my home systems and appliances?',
      answer:
        'Locate the manufacturer rating plate (usually a metallic sticker on the cabinet frame). Note the serial number and model number. Most manufacturers encode the month and year of manufacture into the first four digits of the serial number (e.g., "0814" often indicates August 2014).',
    },
  ],

  sources: [
    {
      name: 'National Association of Home Builders (NAHB)',
      organization: 'Trade Association',
      tier: 'industry',
      citation: 'Study of Life Expectancy of Home Components',
      url: 'https://www.nahb.org',
    },
    {
      name: 'International Association of Certified Home Inspectors (InterNACHI)',
      organization: 'Inspection Association',
      tier: 'inspection',
      citation: 'Standard Estimated Life Expectancy Chart for Homes',
      url: 'https://www.nachi.org/life-expectancy.htm',
    },
  ],

  relatedArticleSlugs: [
    '/systems/water-heater-lifespan-and-replacement/',
    '/appliances/refrigerator-lifespan-and-maintenance/',
    '/maintenance/hvac-filter-replacement-schedule/',
    '/everyday/main-water-shutoff/',
  ],
};
