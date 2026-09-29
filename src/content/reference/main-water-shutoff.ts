/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReferenceArticleContent } from '../config';

export const mainWaterShutoffArticle: ReferenceArticleContent = {
  id: 29,
  slug: '/everyday/main-water-shutoff/',
  aliases: ['/everyday/main-water-shutoff-valve-guide/'],
  title: 'How to Find and Use Your Home\'s Main Water Shutoff',
  pillarId: 'everyday',
  pillarName: 'Everyday Household Knowledge',
  subcategory: 'Home Safety Essentials',
  searchIntent: 'Emergency / Safety Essential',
  purpose: 'Provide calm, clear instructions on locating, identifying, and testing a home’s main water shutoff valve across various foundation types, and explain how to operate it safely without snapping aged valve stems.',
  summary:
    'A ruptured supply line discharges 10 to 15 gallons of water per minute. Knowing how to locate your main shutoff valve—typically on an interior perimeter wall in basements, crawlspaces, or utility closets—and periodically exercising it helps prevent catastrophic water damage and seized valve stems.',
  metaDescription:
    'How to locate and test your residential main water shutoff valve in basements, crawlspaces, and slab homes. Prevent catastrophic flooding during burst pipe emergencies.',
  publishedDate: '2026-02-15',
  lastReviewedDate: '2026-09-28',
  reviewer: {
    name: 'Editorial Staff',
    desk: 'Home Safety & Plumbing Literacy Desk',
  },
  readTime: '5 min read',
  schemaType: 'Article',
  isPilot: true,
  isFeatured: true,
  typicalLifespan: '30–50+ years for quality brass valves',
  lifespanTier: 'B',
  maintenanceCadence: 'Periodically exercise main shutoff valve (e.g., twice yearly during daylight hours)',
  diagnosticWarning: 'Handle feels frozen stiff; forcing an old round gate valve can snap the internal stem',

  quickAnswer:
    'If water is flooding your home right now, head immediately to the interior perimeter wall on the side of the house facing the street—most commonly in the basement near the front wall, in a crawlspace, or near the water heater on a concrete slab. Look for a brass valve where the primary service pipe enters through the floor or wall. Turn a straight lever handle 90 degrees so it crosses the pipe, or turn a round wheel handle clockwise until it stops. Periodically exercising this valve twice a year ensures it will not seize open during an emergency.',

  keyFacts: [
    {
      label: 'Uncontrolled Pipe Rupture Flow',
      value: '10 – 15 GPM',
      note: 'Typical residential fixture supply rupture at 50–60 psi municipal water pressure',
      tier: 'A',
    },
    {
      label: 'Quarter-Turn Ball Valve',
      value: 'Lever Handle',
      note: 'Handle perpendicular to pipe = OFF; parallel = ON. Highly reliable modern standard',
      tier: 'A',
    },
    {
      label: 'Multi-Turn Gate Valve',
      value: 'Round Wheel Handle',
      note: 'Requires several clockwise turns to seat internal brass wedge; prone to mineral binding with age',
      tier: 'B',
    },
    {
      label: 'Recommended Exercise Cadence',
      value: 'Twice Yearly',
      note: 'Practical household maintenance heuristic to verify valve operation and prevent seizing',
      tier: 'B',
    },
    {
      label: 'Emergency Shutoff Speed Target',
      value: 'Under 60 Seconds',
      note: 'Household emergency preparedness benchmark for adult and adolescent family members',
      tier: 'B',
    },
  ],

  detailedExplanation: [
    'A residential water supply enters a property under high pressure (typically 40 to 80 psi). If a fixture supply line ruptures—such as a braided stainless steel toilet supply, ice maker tube, or washing machine hose—water discharges into living spaces at 10 to 15 gallons per minute. Within 20 minutes, 200 to 300 gallons of pressurized water can saturate subfloors, ruin drywall ceilings below, and initiate structural mold growth.',
    'Knowing the precise location of the interior main water shutoff valve and verifying that it physically turns off is one of the most critical pieces of basic household literacy.',
    'Most homes built before 1990 utilize multi-turn gate valves with a circular round wheel handle. These valves rely on an internal brass wedge that lowers into the water stream. Over decades of remaining in the open position, mineral scale coats the internal screw threads. If a homeowner forces a frozen gate valve handle, the brass stem can snap internally, leaving the water on with a spinning, useless handle.',
    'Modern plumbing codes prefer quarter-turn ball valves with a straight lever handle. Because a ball valve uses a polished stainless steel or brass sphere with a hole through the center, it does not have internal threads to seize. When the lever is parallel to the pipe, water is ON; when rotated 90 degrees perpendicular, water is completely OFF.',
  ],

  factors: [
    {
      title: 'Basement Foundations',
      impact:
        'The valve is almost always located low on the front foundation wall facing the street, directly before or after the municipal water meter.',
    },
    {
      title: 'Crawlspace Foundations',
      impact:
        'The valve is typically situated inside the crawlspace near the access hatch or where the service pipe rises through the subfloor into a utility closet.',
    },
    {
      title: 'Slab-on-Grade Foundations',
      impact:
        'Look near the water heater cabinet, inside the garage adjacent to the front wall, or in a laundry closet where the cold line branches.',
    },
    {
      title: 'Private Well Water Systems',
      impact:
        'The shutoff valve is located on the discharge pipe immediately following the cylindrical blue or gray pressure tank and pressure switch, often in a basement or utility room.',
    },
  ],

  warningSigns: {
    normal: [
      'Valve handle turns smoothly without excessive force or grinding sounds',
      'Water flow at the highest second-floor fixture stops completely within 15 seconds of closing the valve',
    ],
    attention: [
      'Valve handle is stiff and squeaks when turned; slight weep around packing nut that stops after turning',
      'Water continues trickling slowly from faucets even when the gate valve is turned fully clockwise',
    ],
    immediate: [
      'Water actively dripping or spraying from the valve stem packing nut',
      'Valve handle spins freely without stopping water (internal brass wedge has sheared off)',
      'Severe green corrosion or white calcification crusting around the valve body joints',
    ],
  },

  maintenanceSteps: [
    {
      step: 'Locate & High-Visibility Tagging',
      frequency: 'Immediately Upon Moving In',
      safetyTier: 'Tier 1: Observation',
      detail:
        'Find the main entry pipe. Attach a waterproof, bright yellow or red plastic emergency tag to the valve handle so any family member, babysitter, or guest can identify it instantly in the dark.',
    },
    {
      step: 'Bi-Annual Valve Exercise Test',
      frequency: 'Every 6 Months (Daylight Hours)',
      safetyTier: 'Tier 2: Routine Maintenance',
      detail:
        'Turn the valve completely off. Open a cold water faucet on the highest floor to relieve pressure and confirm that flow ceases entirely. Turn the valve fully back on. For older round gate valves, turn it clockwise until seated, then back off 1/4 turn to prevent the brass stem from binding open.',
    },
    {
      step: 'Locate Exterior Municipal Curb Stop',
      frequency: 'Once / Baseline Verification',
      safetyTier: 'Tier 1: Observation',
      detail:
        'Walk to the street sidewalk or property line to locate the municipal meter pit cover (a round cast-iron or plastic lid marked "WATER"). In most municipalities, the curb stop valve belongs to the water utility and should only be operated by utility personnel or licensed plumbers. However, knowing its location is crucial during a severe interior valve failure so emergency crews can shut off water rapidly.',
    },
  ],

  faqs: [
    {
      question: 'What should I do if my main water valve is frozen and will not budge?',
      answer:
        'Do NOT use a wrench or cheater pipe to force an old round gate valve—the internal brass stem will easily snap off, creating an uncontainable leak. Instead, locate the isolated shutoff valve under the specific leaking fixture (sink or toilet angle stop). Then call a licensed plumber to replace the old gate valve with a modern full-port quarter-turn ball valve.',
    },
    {
      question: 'Should I shut off my main water valve when going on vacation?',
      answer:
        'Yes. Shutting off the main water valve before leaving for more than a few days is one of the most effective ways to prevent catastrophic water damage. If a pipe freezes or a toilet valve fails while you are away, only a few gallons trapped in the pipes will drain, rather than thousands of gallons under continuous municipal pressure. If you have a boiler heating system, ensure it has a dedicated low-water safety cutoff before shutting the main.',
    },
    {
      question: 'Does shutting off the main water valve turn off fire sprinklers?',
      answer:
        'In most modern homes with residential fire sprinkler systems, the fire line tees off BEFORE the domestic shutoff valve and has a dedicated locked control valve. Never close a valve labeled "Fire Protection Service" unless authorized by local fire code officials.',
    },
  ],

  sources: [
    {
      name: 'American Water Works Association (AWWA)',
      organization: 'Standards Body',
      tier: 'standards',
      citation: 'Residential Water Service & Backflow Standards (Manual of Water Supply Practices M22)',
    },
    {
      name: 'International Association of Certified Home Inspectors (InterNACHI)',
      organization: 'Inspection Society',
      tier: 'inspection',
      citation: 'Home Inspection Standards: Water Shutoff Valve Identification & Inspection Protocol',
      url: 'https://www.nachi.org',
    },
    {
      name: 'International Code Council (ICC)',
      organization: 'Code Standards Organization',
      tier: 'standards',
      citation: 'International Residential Code (IRC) Section P2903: Water-Service Pipe & Shutoff Valves',
    },
  ],

  relatedArticleSlugs: [
    '/systems/water-heater-lifespan-and-replacement/',
    '/lifespan/major-home-components-lifespan/',
    '/maintenance/hvac-filter-replacement-schedule/',
  ],
};
