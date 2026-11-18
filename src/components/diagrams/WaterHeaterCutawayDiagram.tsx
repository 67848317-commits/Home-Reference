/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ComponentDetail {
  id: string;
  name: string;
  category: 'Corrosion Protection' | 'Water Flow' | 'Combustion / Thermal' | 'Pressure Safety';
  description: string;
  failureMechanism: string;
  maintenanceAction: string;
}

const DETAILS: Record<string, ComponentDetail> = {
  anode: {
    id: 'anode',
    name: 'Sacrificial Anode Rod (Magnesium / Aluminum)',
    category: 'Corrosion Protection',
    description: 'A solid core rod suspended through the top of the tank. Made of a more electrochemically active metal than the steel tank shell, it sacrifices electrons into the water to help protect exposed steel at microscopic glass-lining voids.',
    failureMechanism: 'Consumed over time at rates that vary with water chemistry, temperature, and usage. Once the sacrificial metal is depleted down to the steel wire core, galvanic corrosion can attack exposed steel in the tank, leading to leaks.',
    maintenanceAction: 'Inspect periodically per manufacturer manual and water conditions. Replace when physical inspection shows heavy depletion and exposed core wire.'
  },
  tpvalve: {
    id: 'tpvalve',
    name: 'Temperature & Pressure (T&P) Relief Valve',
    category: 'Pressure Safety',
    description: 'Spring-loaded mechanical safety valve commonly rated on residential tanks to discharge if internal water temperature reaches 210°F (99°C) or pressure exceeds 150 psi (exact rating must match the tank data plate), helping prevent dangerous over-temperature or over-pressure failure.',
    failureMechanism: 'Mineral scale crystallization can freeze the spring seat shut or cause chronic dripping. Chronic weeping often signals thermal expansion due to a closed plumbing system without an expansion tank, high supply pressure, or a worn valve seat.',
    maintenanceAction: 'Inspect valve and discharge pipe per manufacturer instructions (often annually) for weeping, corrosion, or obstructions. Never plug, cap, or reduce the discharge line. Caution: manually lifting the test lever on an older unmaintained valve can prevent reseating.'
  },
  diptube: {
    id: 'diptube',
    name: 'Cold Water Dip Tube',
    category: 'Water Flow',
    description: 'Cross-linked polyethylene or polypropylene tube carrying incoming municipal cold water from the top connection directly to the tank bottom for heating.',
    failureMechanism: 'Brittleness or cracking allows cold water to mix directly into the upper hot layer, causing lukewarm shower output and short hot water duration.',
    maintenanceAction: 'Check for plastic flecks in aerators if hot water runs out rapidly. Replace dip tube if cracked.'
  },
  sediment: {
    id: 'sediment',
    name: 'Calcium Carbonate Sediment Blanket',
    category: 'Combustion / Thermal',
    description: 'Precipitated calcium and magnesium minerals that settle at the curved bottom of the tank as water is heated above 120°F.',
    failureMechanism: 'Forms an insulating mineral barrier between the burner flame and the water. Trapped water under the blanket boils into steam bubbles ("popping" kettle noise), overheating the bottom steel head and causing thermal fatigue and weld seam rupture.',
    maintenanceAction: 'Follow your specific manufacturer’s manual to drain and flush loose sediment periodically (shut off power/fuel first and protect against scalding hot pressurized water).'
  },
  flue: {
    id: 'flue',
    name: 'Central Flue Tube & Spiral Baffle',
    category: 'Combustion / Thermal',
    description: 'Internal chimney tube traversing the center of the tank. Houses a spiral metal baffle that retards combustion exhaust to transfer heat into the surrounding water.',
    failureMechanism: 'Acidic condensation from low-temperature combustion can cause flue corrosion. Clogged baffles or draft hoods can cause toxic carbon monoxide spillage.',
    maintenanceAction: 'Check draft hood above tank for proper upward draft during firing. Never block combustion air intake.'
  },
  drain: {
    id: 'drain',
    name: 'Tank Drain Valve (Full-Port Brass)',
    category: 'Water Flow',
    description: 'Lower valve used for routine flushing, maintenance descaling, and emergency drainage during replacement.',
    failureMechanism: 'Factory-installed plastic drain valves frequently strip, clog with sediment chunks, or fail to seal after being opened.',
    maintenanceAction: 'Consider replacing factory plastic valves with a full-port brass ball valve for unrestricted sediment flushing.'
  }
};

export const WaterHeaterCutawayDiagram: React.FC = () => {
  const [selected, setSelected] = useState<string>('anode');
  const active = DETAILS[selected] || DETAILS.anode;

  return (
    <div className="my-8 border border-[#E5DFD7] bg-[#FAF8F5] p-4 sm:p-6 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5DFD7] pb-3 mb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
            Figure 1.1 · Engineering Schematic
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mt-0.5">
            Atmospheric Storage Water Heater Cutaway
          </h3>
        </div>
        <span className="text-xs text-[#78716C] mt-1 sm:mt-0 font-sans">
          Click component to view failure mechanisms
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-7 bg-white border border-[#E5DFD7] p-3 rounded-none flex justify-center">
          <svg
            viewBox="0 0 520 620"
            className="w-full h-auto max-w-[480px]"
            role="img"
            aria-label="Cross-section diagram of residential atmospheric gas water heater showing cold dip tube, sacrificial anode rod, central flue, T&P relief valve, and sediment layer"
          >
            <defs>
              <linearGradient id="tankBg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="20%" stopColor="#F1F5F9" />
                <stop offset="80%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="heatGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#F97316" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="anodeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>

            {/* Outer Casing */}
            <rect x="90" y="70" width="340" height="470" rx="20" fill="url(#tankBg)" stroke="#475569" strokeWidth="2" />
            
            {/* Insulation Jacket Border */}
            <rect x="105" y="85" width="310" height="440" rx="15" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <text x="110" y="102" fontSize="9" fill="#B45309" fontFamily="monospace">Polyurethane Foam Insulation</text>

            {/* Inner Glass-Lined Steel Tank */}
            <rect x="125" y="105" width="270" height="400" rx="12" fill="url(#waterGrad)" stroke="#1E293B" strokeWidth="2.5" />

            {/* Central Flue Tube */}
            <g
              onClick={() => setSelected('flue')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <rect x="238" y="40" width="44" height="480" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
              {/* Spiral Baffle */}
              <path
                d="M242,120 Q260,140 278,120 Q260,160 242,180 Q260,200 278,180 Q260,220 242,240 Q260,260 278,240 Q260,280 242,300 Q260,320 278,300 Q260,340 242,360 Q260,380 278,360 Q260,400 242,420 Q260,440 278,420"
                fill="none"
                stroke="#475569"
                strokeWidth="2.5"
              />
              {/* Draft Hood at Top */}
              <polygon points="215,40 305,40 290,15 230,15" fill="#64748B" stroke="#1E293B" strokeWidth="2" />
              <rect x="245" y="0" width="30" height="15" fill="#94A3B8" stroke="#1E293B" strokeWidth="2" />
            </g>

            {/* Cold Water Dip Tube (Left) */}
            <g
              onClick={() => setSelected('diptube')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <rect x="155" y="45" width="18" height="25" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
              <rect x="158" y="70" width="12" height="370" rx="3" fill="#60A5FA" stroke="#2563EB" strokeWidth="1.5" />
              {/* Water exit arrows at bottom */}
              <path d="M164,440 L164,455 M154,450 L145,455 M174,450 L183,455" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Hot Water Outlet (Right) */}
            <g className="cursor-pointer">
              <rect x="345" y="45" width="18" height="25" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
              <rect x="348" y="70" width="12" height="35" rx="3" fill="#F87171" stroke="#DC2626" strokeWidth="1.5" />
              {/* Hot water entry arrows */}
              <path d="M354,120 L354,110 M345,116 L350,111 M363,116 L358,111" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Sacrificial Anode Rod */}
            <g
              onClick={() => setSelected('anode')}
              className="cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <rect x="195" y="55" width="16" height="15" fill="#64748B" stroke="#334155" strokeWidth="2" />
              {/* Magnesium rod */}
              <rect
                x="200"
                y="70"
                width="8"
                height="340"
                rx="2"
                fill="url(#anodeGrad)"
                stroke={selected === 'anode' ? '#8C4736' : '#475569'}
                strokeWidth={selected === 'anode' ? '3' : '1.5'}
              />
              {/* Sacrificial Galvanic Glow if active */}
              {selected === 'anode' && (
                <rect x="196" y="70" width="16" height="340" fill="#F59E0B" opacity="0.2" rx="4" />
              )}
            </g>

            {/* T&P Relief Valve (Top Right) */}
            <g
              onClick={() => setSelected('tpvalve')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <rect x="395" y="125" width="30" height="18" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              {/* Lever */}
              <line x1="410" y1="125" x2="425" y2="115" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
              {/* Discharge Pipe Down */}
              <rect x="420" y="143" width="10" height="380" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
            </g>

            {/* Sediment Layer at Bottom */}
            <g
              onClick={() => setSelected('sediment')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <path
                d="M126,470 Q260,490 394,470 L394,504 L126,504 Z"
                fill="#D97706"
                stroke="#B45309"
                strokeWidth="1.5"
                opacity={selected === 'sediment' ? '0.9' : '0.65'}
              />
              {/* Mineral flakes dots */}
              <circle cx="160" cy="485" r="2.5" fill="#78350F" />
              <circle cx="210" cy="489" r="3" fill="#78350F" />
              <circle cx="270" cy="491" r="2" fill="#78350F" />
              <circle cx="330" cy="487" r="3.5" fill="#78350F" />
              <circle cx="365" cy="484" r="2" fill="#78350F" />
            </g>

            {/* Gas Burner / Combustion Chamber at Base */}
            <g>
              <rect x="105" y="525" width="310" height="60" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2" />
              {/* Blue gas flames */}
              <path
                d="M210,550 Q215,535 220,550 Q225,535 230,550 Q235,535 240,550 Q245,535 250,550 Q255,535 260,550 Q265,535 270,550 Q275,535 280,550 Q285,535 290,550 Q295,535 300,550 Q305,535 310,550"
                fill="none"
                stroke="url(#flameGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <text x="260" y="575" textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="monospace">
                Combustion Chamber & Burner
              </text>
            </g>

            {/* Bottom Drain Valve (Left) */}
            <g
              onClick={() => setSelected('drain')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <rect x="70" y="475" width="25" height="16" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <polygon points="70,470 60,475 60,491 70,496" fill="#B45309" stroke="#78350F" strokeWidth="1" />
            </g>

            {/* Callout Lines & Labels */}
            {/* Anode label */}
            <line x1="204" y1="70" x2="204" y2="35" stroke="#8C4736" strokeWidth="1" strokeDasharray="2 2" />
            <text x="204" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#8C4736" fontFamily="sans-serif">
              Anode Rod
            </text>

            {/* Cold Inlet label */}
            <text x="145" y="38" textAnchor="middle" fontSize="9" fill="#1D4ED8" fontFamily="monospace">
              Cold In
            </text>

            {/* Hot Outlet label */}
            <text x="375" y="38" textAnchor="middle" fontSize="9" fill="#B91C1C" fontFamily="monospace">
              Hot Out
            </text>

            {/* T&P Valve label */}
            <text x="475" y="138" textAnchor="middle" fontSize="9" fontWeight="600" fill="#B45309" fontFamily="sans-serif">
              T&P Relief Valve
            </text>

            {/* Drain label */}
            <text x="50" y="515" textAnchor="middle" fontSize="9" fill="#78350F" fontFamily="sans-serif">
              Drain Valve
            </text>

            {/* Sediment label */}
            <text x="470" y="490" textAnchor="middle" fontSize="9" fontWeight="600" fill="#78350F" fontFamily="sans-serif">
              Sediment Layer
            </text>
          </svg>
        </div>

        {/* Component Technical Detail Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
              {active.category}
            </div>
            <h4 className="text-base font-serif font-bold text-[#1C1917] mt-1 mb-2">
              {active.name}
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed mb-3">
              {active.description}
            </p>

            <div className="border-t border-[#EDE8E1] pt-3 space-y-2">
              <div>
                <strong className="text-[11px] font-mono uppercase text-[#991B1B] block">
                  Failure Mode & Consequence:
                </strong>
                <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                  {active.failureMechanism}
                </p>
              </div>

              <div>
                <strong className="text-[11px] font-mono uppercase text-[#065F46] block">
                  Preservation / Verification:
                </strong>
                <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                  {active.maintenanceAction}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Selector Buttons */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.values(DETAILS).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`p-2 text-left border transition-colors cursor-pointer text-[11px] leading-tight ${
                  selected === item.id
                    ? 'border-[#8C4736] bg-[#F4EFEA] text-[#1C1917] font-semibold'
                    : 'border-[#E5DFD7] bg-white text-[#57534E] hover:border-[#1C1917]'
                }`}
              >
                {item.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
