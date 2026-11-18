/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Flame, Droplets, Zap } from 'lucide-react';

interface ComponentFailureRow {
  component: string;
  category: 'Plumbing' | 'Electrical' | 'HVAC' | 'Envelope' | 'Life Safety';
  baselineLifespan: string;
  primaryFailureMode: string;
  severityLevel: 'Critical Life-Safety' | 'Catastrophic Property' | 'Severe Financial' | 'Moderate Property';
  earlyWarningSigns: string;
  consequenceSummary: string;
  preventionCadence: string;
}

const MATRIX_DATA: ComponentFailureRow[] = [
  {
    component: 'Smoke & Carbon Monoxide Alarms',
    category: 'Life Safety',
    baselineLifespan: '10 Years (NFPA 72 Standard)',
    primaryFailureMode: 'Ionization chamber / optical sensor drift and sensor degradation over time.',
    severityLevel: 'Critical Life-Safety',
    earlyWarningSigns: 'Chirping end-of-life signal, unprovoked false alarms, or yellowed plastic casing.',
    consequenceSummary: 'Undetected smoldering fire or carbon monoxide buildup leading to fatality.',
    preventionCadence: 'Monthly button test; replace unit 10 years from rear manufacturing stamp.'
  },
  {
    component: 'Furnace Heat Exchanger',
    category: 'HVAC',
    baselineLifespan: '15–20 Years',
    primaryFailureMode: 'Thermal fatigue micro-cracks in combustion chamber bends or roll-formed seams.',
    severityLevel: 'Critical Life-Safety',
    earlyWarningSigns: 'Yellow erratic burner flames, soot at draft hood, carbon monoxide alarm trip.',
    consequenceSummary: 'Combustion flue gases (CO) leaking directly into recirculating household breathing air.',
    preventionCadence: 'Annual combustion analysis and optical scope inspection by licensed HVAC tech.'
  },
  {
    component: 'Washing Machine Fill Hoses (Rubber)',
    category: 'Plumbing',
    baselineLifespan: '3–5 Years',
    primaryFailureMode: 'Continuous 50–70 psi municipal static pressure weakens unreinforced rubber walls until blowout.',
    severityLevel: 'Catastrophic Property',
    earlyWarningSigns: 'External blister bubbles, hardening, cracking, or discoloration near crimps.',
    consequenceSummary: 'Uncontrolled continuous discharge of 10–12 gallons per minute, causing tens of thousands in flood damage.',
    preventionCadence: 'Replace rubber hoses with braided stainless steel every 5 years; turn shutoff off during vacation.'
  },
  {
    component: 'Storage Tank Water Heater',
    category: 'Plumbing',
    baselineLifespan: '8–12 Years (Planning Range)',
    primaryFailureMode: 'Anode depletion followed by galvanic corrosion eating through steel tank welds.',
    severityLevel: 'Catastrophic Property',
    earlyWarningSigns: 'Rumbling/popping sediment sounds, rusty hot water, weeping moisture at base seams.',
    consequenceSummary: 'Rupture dumping 40–50 gallons instantly, followed by continuous municipal inflow until shut off.',
    preventionCadence: 'Drain/flush sediment periodically per manufacturer manual; inspect sacrificial anode per manufacturer guidelines.'
  },
  {
    component: 'Main Electrical Panel & Breakers',
    category: 'Electrical',
    baselineLifespan: '30–50 Years (Standard panels)',
    primaryFailureMode: 'Bus bar corrosion, thermal loosening of aluminum connections, or mechanical breaker latch failure.',
    severityLevel: 'Critical Life-Safety',
    earlyWarningSigns: 'Buzzing/humming under load, warm deadfront cover, flickering circuits, scorched breaker faces.',
    consequenceSummary: 'Electrical arcing fires behind wall finishes; complete branch overload without trip.',
    preventionCadence: 'Thermal imaging inspection every 5–10 years; immediate electrician evaluation if humming or warm.'
  },
  {
    component: 'Basement Sump Pump',
    category: 'Plumbing',
    baselineLifespan: '7–10 Years',
    primaryFailureMode: 'Mechanical float switch hung against discharge pipe, impeller lockup, or power outage failure.',
    severityLevel: 'Catastrophic Property',
    earlyWarningSigns: 'Continuous motor hum without water movement, erratic cycling, heavy rust on pump casing.',
    consequenceSummary: 'Rapid basement flooding during severe rain events, destroying finished walls and foundation.',
    preventionCadence: 'Quarterly bucket pour test; dual pump installation with 12V battery backup switch.'
  },
  {
    component: 'Central A/C Compressor',
    category: 'HVAC',
    baselineLifespan: '12–17 Years',
    primaryFailureMode: 'Hermetic motor winding insulation breakdown (acid burnout) or mechanical seizure.',
    severityLevel: 'Severe Financial',
    earlyWarningSigns: 'Hard starting (dimming house lights), clicking thermal overload, warm supply vents.',
    consequenceSummary: '$2,000–$4,000+ repair bill; typically forces whole-system replacement on units >10 years old.',
    preventionCadence: 'Keep outdoor condenser coil clean; ensure annual refrigerant charge and capacitor testing.'
  },
  {
    component: 'Architectural Roof Shingles',
    category: 'Envelope',
    baselineLifespan: '20–28 Years',
    primaryFailureMode: 'UV asphalt oxidation, granule detachment, tab embrittlement, and nail pull-through in wind.',
    severityLevel: 'Catastrophic Property',
    earlyWarningSigns: 'Excessive granules in gutters, curled shingle corners, bald patches, interior ceiling spots.',
    consequenceSummary: 'Progressive water intrusion rotting plywood decking, rafters, and attic insulation.',
    preventionCadence: 'Biannual attic underside inspection for water stains; post-storm binocular roof checks.'
  }
];

export const ComponentFailureConsequenceMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSeverity, setActiveSeverity] = useState<string>('All');

  const categories = ['All', 'Life Safety', 'Plumbing', 'HVAC', 'Electrical', 'Envelope'];
  const severities = ['All', 'Critical Life-Safety', 'Catastrophic Property', 'Severe Financial'];

  const filtered = MATRIX_DATA.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSev = activeSeverity === 'All' || item.severityLevel === activeSeverity;
    return matchCat && matchSev;
  });

  const getSeverityBadge = (level: ComponentFailureRow['severityLevel']) => {
    switch (level) {
      case 'Critical Life-Safety':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-red-100 text-red-900 border border-red-300">
            <Flame className="w-3 h-3 text-red-700" />
            Critical Life Safety
          </span>
        );
      case 'Catastrophic Property':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
            <Droplets className="w-3 h-3 text-amber-700" />
            Property Flood / Rot
          </span>
        );
      case 'Severe Financial':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-purple-100 text-purple-900 border border-purple-300">
            <Zap className="w-3 h-3 text-purple-700" />
            Severe Financial
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase bg-stone-100 text-stone-800 border border-stone-300">
            <AlertTriangle className="w-3 h-3" />
            {level}
          </span>
        );
    }
  };

  return (
    <div className="my-8 border border-[#E5DFD7] bg-[#FAF8F5] p-4 sm:p-6 shadow-2xs">
      <div className="border-b border-[#E5DFD7] pb-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
              Figure 1.3 · Risk Assessment Matrix
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mt-0.5">
              Residential Failure Consequence & Life-Safety Matrix
            </h3>
          </div>
          <span className="text-xs text-[#78716C] mt-1 sm:mt-0 font-sans">
            Comparing sudden failure risks vs. wear lifespans
          </span>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#EDE8E1] text-xs">
          <span className="text-[11px] font-mono text-[#78716C] uppercase mr-1">Filter System:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 text-[11px] font-medium border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-white border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#E5DFD7] hover:border-[#1C1917]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Matrix List / Table */}
      <div className="space-y-4">
        {filtered.map((row, idx) => (
          <div
            key={idx}
            className="p-4 bg-white border border-[#E5DFD7] hover:border-[#8C4736] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EDE8E1] pb-2 mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">
                  {row.category}
                </span>
                <h4 className="text-base font-serif font-bold text-[#1C1917]">
                  {row.component}
                </h4>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-mono font-semibold text-[#1C1917] bg-[#F4EFEA] px-2 py-0.5 border border-[#E5DFD7]">
                  {row.baselineLifespan}
                </span>
                {getSeverityBadge(row.severityLevel)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div>
                <strong className="text-[11px] font-mono uppercase text-[#78716C] block mb-0.5">
                  Primary Failure Mode:
                </strong>
                <p className="text-[#57534E] m-0">
                  {row.primaryFailureMode}
                </p>
              </div>

              <div>
                <strong className="text-[11px] font-mono uppercase text-[#B45309] block mb-0.5">
                  Early Warning Indicators:
                </strong>
                <p className="text-[#57534E] m-0">
                  {row.earlyWarningSigns}
                </p>
              </div>

              <div>
                <strong className="text-[11px] font-mono uppercase text-[#065F46] block mb-0.5">
                  Recommended Prevention Cadence:
                </strong>
                <p className="text-[#57534E] m-0">
                  {row.preventionCadence}
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#F5F1EB] text-xs text-[#1C1917] bg-[#FAF8F5] p-2.5">
              <strong className="font-semibold text-[#8C4736] font-mono text-[11px] uppercase mr-1">
                Consequence Breakdown:
              </strong>
              {row.consequenceSummary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
