/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface CycleStage {
  id: string;
  name: string;
  refrigerantState: string;
  pressureTemp: string;
  functionDesc: string;
  failureSymptoms: string;
  diagnosticTruth: string;
}

const STAGES: Record<string, CycleStage> = {
  compressor: {
    id: 'compressor',
    name: 'Hermetic Vapor Compressor',
    refrigerantState: 'Low-Pressure Vapor → High-Pressure Superheated Gas',
    pressureTemp: 'High Side: 120–180 psi (R-134a) or 60–90 psi (R-600a), 140°F–170°F',
    functionDesc: 'The electric pump motor that drives the thermodynamic cycle. Draws cold, low-pressure vapor from the evaporator and compresses it, raising both pressure and saturation temperature above ambient kitchen air.',
    failureSymptoms: 'Clicking overload relay every 2 minutes without starting (locked rotor), continuous running without cooling, or loud knocking from internal valve piston slap.',
    diagnosticTruth: 'Opening, repairing, or recovering refrigerant from the sealed circuit requires an EPA Section 608 certified technician (Type I for small appliances, or Universal, under 40 CFR Part 82, Subpart F). On R-600a units, service also requires flammable-refrigerant precautions under EPA SNAP guidance. If a compressor fails outside warranty, replacement cost often exceeds 50% of machine value.'
  },
  condenser: {
    id: 'condenser',
    name: 'Condenser Coils & Cooling Fan',
    refrigerantState: 'High-Pressure Gas → High-Pressure Subcooled Liquid',
    pressureTemp: 'High Pressure, 100°F–120°F (dissipating heat to room)',
    functionDesc: 'External wire-tube or serpentine coils beneath or behind the cabinet. As room air is drawn across them by the condenser fan, the hot refrigerant vapor rejects latent heat into the kitchen and condenses into liquid.',
    failureSymptoms: 'Coils blanketed in pet dander and lint elevate high-side head pressure, causing the compressor to overheat, run continuously, and consume more electricity.',
    diagnosticTruth: 'Cleaning external coils with a long vacuum brush every 6 to 12 months is safe homeowner preventative maintenance that preserves compressor motor windings.'
  },
  capillary: {
    id: 'capillary',
    name: 'Capillary Tube / Expansion Orifice',
    refrigerantState: 'High-Pressure Liquid → Low-Pressure Liquid/Vapor Mix',
    pressureTemp: 'Drastic pressure drop: High-side down to low-side (-15°F saturation)',
    functionDesc: 'A micro-bore copper tube (inner diameter ~0.026–0.031 inches) that creates a controlled restriction, dropping refrigerant pressure and flashing it into an ice-cold mixture before entering the evaporator.',
    failureSymptoms: 'Can become partially blocked by wax or carbonized oil from an overheated compressor, causing starving of the evaporator and inadequate cooling.',
    diagnosticTruth: 'Sealed system repair requiring nitrogen flushing, filter-drier replacement, and vacuum evacuation by a licensed HVAC/R technician.'
  },
  evaporator: {
    id: 'evaporator',
    name: 'Evaporator Coils & Evaporator Fan',
    refrigerantState: 'Low-Pressure Liquid/Vapor → Low-Pressure Superheated Vapor',
    pressureTemp: 'Low Side: -15°F to -10°F coil surface absorbing heat from cabinet',
    functionDesc: 'Aluminum finned coils located behind the rear panel of the freezer. As air passes across the cold coils, refrigerant absorbs latent heat from food and air. The evaporator fan forces cooled air into the freezer and fresh food sections.',
    failureSymptoms: 'Heavy frost blanket choking airflow indicates defrost heater, bimetal thermostat, or control board failure. Whirring or squeaking noise signals evaporator fan bearing wear.',
    diagnosticTruth: 'When the freezer is cold (0°F) but the fresh food compartment is warm, possible causes include airflow restrictions (frosted coils, failed evaporator fan, stuck damper, or blocked return duct) as well as sealed-system issues (such as low refrigerant charge or a dual-evaporator valve fault). Safe homeowner checks are limited to verifying vents are unblocked, checking gaskets, and cleaning exterior coils; internal electrical or sealed-system testing requires a qualified technician.'
  },
  airflow: {
    id: 'airflow',
    name: 'Airflow Damper & Return Duct Path',
    refrigerantState: 'Non-Refrigerant Thermodynamic Convection',
    pressureTemp: 'Freezer at 0°F / Fresh Food Compartment at 37°F',
    functionDesc: 'Most residential refrigerators have only ONE cooling system (in the freezer). A motorized baffle (damper) opens and closes to meter exact quantities of 0°F air into the refrigerator compartment, monitored by a thermistor.',
    failureSymptoms: 'Fresh food section freezing produce (damper stuck open) or fresh food section warming to room temperature while ice cream stays frozen (damper stuck closed or ice blockage in return tunnel).',
    diagnosticTruth: 'A differential diagnosis between airflow delivery (damper/fan/duct) and refrigerant capacity saves homeowners hundreds of dollars in unnecessary compressor replacements.'
  }
};

export const RefrigeratorVaporCycleDiagram: React.FC = () => {
  const [selected, setSelected] = useState<string>('evaporator');
  const active = STAGES[selected] || STAGES.evaporator;

  return (
    <div className="my-8 border border-[#E5DFD7] bg-[#FAF8F5] p-4 sm:p-6 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5DFD7] pb-3 mb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
            Figure 1.2 · Thermodynamic Cycle
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mt-0.5">
            Refrigerator Vapor-Compression & Airflow Circuit
          </h3>
        </div>
        <span className="text-xs text-[#78716C] mt-1 sm:mt-0 font-sans">
          Click component to inspect diagnostic logic
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-7 bg-white border border-[#E5DFD7] p-3 rounded-none flex justify-center">
          <svg
            viewBox="0 0 540 640"
            className="w-full h-auto max-w-[490px]"
            role="img"
            aria-label="Vapor-compression refrigeration cycle and airflow distribution schematic showing compressor, condenser coils, capillary tube, evaporator coils, and motorized damper"
          >
            <defs>
              <linearGradient id="refrigShell" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="freezerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="freshGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0FDF4" />
                <stop offset="100%" stopColor="#DCFCE7" />
              </linearGradient>
            </defs>

            {/* Refrigerator Cabinet Outline */}
            <rect x="70" y="40" width="400" height="560" rx="10" fill="url(#refrigShell)" stroke="#334155" strokeWidth="2.5" />

            {/* Freezer Compartment (Top 40%) */}
            <rect x="85" y="55" width="370" height="200" rx="6" fill="url(#freezerGrad)" stroke="#0284C7" strokeWidth="1.5" />
            <text x="100" y="78" fontSize="12" fontWeight="bold" fill="#0369A1" fontFamily="sans-serif">
              FREEZER COMPARTMENT (Target: 0°F / -18°C)
            </text>

            {/* Fresh Food Compartment (Bottom 60%) */}
            <rect x="85" y="270" width="370" height="250" rx="6" fill="url(#freshGrad)" stroke="#16A34A" strokeWidth="1.5" />
            <text x="100" y="293" fontSize="12" fontWeight="bold" fill="#15803D" fontFamily="sans-serif">
              FRESH FOOD COMPARTMENT (Target: 37°F / 3°C)
            </text>
            <text x="100" y="310" fontSize="9.5" fill="#4B5563" fontFamily="sans-serif">
              (FDA max safety limit: 40°F / 4.4°C)
            </text>

            {/* Divider Mullion */}
            <rect x="85" y="255" width="370" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />

            {/* Machine Compartment at Bottom Base */}
            <rect x="85" y="525" width="370" height="70" fill="#1E293B" rx="4" />
            <text x="95" y="542" fontSize="10" fill="#94A3B8" fontFamily="monospace">
              Machinery Bay (Uninsulated)
            </text>

            {/* 1. COMPRESSOR in Machinery Bay */}
            <g
              onClick={() => setSelected('compressor')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <ellipse
                cx="160"
                cy="565"
                rx="42"
                ry="22"
                fill="#0F172A"
                stroke={selected === 'compressor' ? '#8C4736' : '#64748B'}
                strokeWidth={selected === 'compressor' ? '3' : '2'}
              />
              <text x="160" y="569" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F8FAFC" fontFamily="sans-serif">
                Compressor
              </text>
            </g>

            {/* 2. CONDENSER COILS at Base / Back */}
            <g
              onClick={() => setSelected('condenser')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              {/* Serpentine coil */}
              <path
                d="M230,550 L390,550 Q400,555 390,560 L230,560 Q220,565 230,570 L390,570 Q400,575 390,580 L230,580"
                fill="none"
                stroke={selected === 'condenser' ? '#DC2626' : '#EF4444'}
                strokeWidth={selected === 'condenser' ? '3.5' : '2.5'}
                strokeLinecap="round"
              />
              {/* Heat dissipation wavy arrows */}
              <path d="M260,542 Q263,535 266,542 M310,542 Q313,535 316,542 M360,542 Q363,535 366,542" stroke="#DC2626" strokeWidth="1.5" />
              <text x="310" y="534" textAnchor="middle" fontSize="9" fill="#DC2626" fontWeight="600" fontFamily="sans-serif">
                Heat Rejection to Kitchen
              </text>
            </g>

            {/* 3. CAPILLARY TUBE (Thin line running up back) */}
            <g
              onClick={() => setSelected('capillary')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <path
                d="M430,560 L430,165 L375,165"
                fill="none"
                stroke={selected === 'capillary' ? '#8C4736' : '#D97706'}
                strokeWidth={selected === 'capillary' ? '3' : '1.5'}
                strokeDasharray="4 2"
              />
              <text x="445" y="360" textAnchor="middle" fontSize="8.5" fill="#D97706" transform="rotate(90 445,360)" fontFamily="monospace">
                Capillary Tube (Pressure Drop)
              </text>
            </g>

            {/* 4. EVAPORATOR COILS in Freezer (Behind false wall) */}
            <g
              onClick={() => setSelected('evaporator')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              <rect
                x="260"
                y="95"
                width="115"
                height="90"
                rx="4"
                fill="#EFF6FF"
                stroke={selected === 'evaporator' ? '#0284C7' : '#3B82F6'}
                strokeWidth={selected === 'evaporator' ? '3' : '1.5'}
              />
              {/* Aluminum fin coils */}
              <path
                d="M270,115 L365,115 M270,130 L365,130 M270,145 L365,145 M270,160 L365,160 M270,175 L365,175"
                stroke="#60A5FA"
                strokeWidth="2"
              />
              {/* Evaporator Fan Above Coils */}
              <circle cx="317" cy="100" r="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />
              <line x1="307" y1="100" x2="327" y2="100" stroke="#1E3A8A" strokeWidth="2" />
              <line x1="317" y1="90" x2="317" y2="110" stroke="#1E3A8A" strokeWidth="2" />
              <text x="317" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1D4ED8" fontFamily="sans-serif">
                Evaporator Fan
              </text>
            </g>

            {/* 5. AIRFLOW DAMPER & RETURN CHANNEL */}
            <g
              onClick={() => setSelected('airflow')}
              className="cursor-pointer transition-opacity hover:opacity-85"
            >
              {/* Cold supply duct from freezer to fridge */}
              <rect
                x="140"
                y="245"
                width="45"
                height="35"
                rx="3"
                fill={selected === 'airflow' ? '#BAE6FD' : '#E2E8F0'}
                stroke="#0284C7"
                strokeWidth="2"
              />
              <text x="162" y="266" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369A1" fontFamily="sans-serif">
                Damper
              </text>

              {/* Blue cold air arrows into fresh food */}
              <path d="M162,282 L162,330 L185,350" fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="185,350 178,343 182,354" fill="#0284C7" />

              {/* Warmer return air duct back up */}
              <path d="M370,440 L370,270 L345,250" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="345,250 354,253 348,260" fill="#64748B" />
              <text x="375" y="370" fontSize="8" fill="#64748B" fontFamily="monospace">
                Air Return Duct
              </text>
            </g>

            {/* Suction Line (Blue, returns vapor from evaporator back to compressor) */}
            <path
              d="M260,175 L225,175 L225,510 L160,540"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Diagnostic Detail Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
              Stage Diagnostic Card
            </div>
            <h4 className="text-base font-serif font-bold text-[#1C1917] mt-1 mb-1">
              {active.name}
            </h4>
            <div className="text-[11px] font-mono text-[#78716C] mb-2 pb-2 border-b border-[#EDE8E1]">
              State: {active.refrigerantState}
            </div>

            <p className="text-xs text-[#57534E] leading-relaxed mb-3">
              {active.functionDesc}
            </p>

            <div className="space-y-2 border-t border-[#EDE8E1] pt-3">
              <div>
                <strong className="text-[11px] font-mono uppercase text-[#991B1B] block">
                  Failure Symptoms:
                </strong>
                <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                  {active.failureSymptoms}
                </p>
              </div>

              <div>
                <strong className="text-[11px] font-mono uppercase text-[#065F46] block">
                  Differential Diagnostic Truth:
                </strong>
                <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                  {active.diagnosticTruth}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Selector Tabs */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.values(STAGES).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`p-2 text-left border transition-colors cursor-pointer text-[11px] leading-tight ${
                  selected === item.id
                    ? 'border-[#0284C7] bg-[#E0F2FE] text-[#0369A1] font-semibold'
                    : 'border-[#E5DFD7] bg-white text-[#57534E] hover:border-[#1C1917]'
                }`}
              >
                {item.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* EPA Regulatory Notice */}
          <div className="p-3 bg-[#F4EFEA] border border-[#E5DFD7] text-[11px] text-[#78716C] leading-relaxed space-y-1.5">
            <p className="m-0">
              <strong className="text-[#1C1917]">EPA Section 608 (40 CFR Part 82, Subpart F):</strong> <a href="https://www.epa.gov/section608/section-608-technician-certification-requirements" target="_blank" rel="noopener noreferrer" className="underline text-[#8C4736]">Technician certification</a> (Type I for small appliances, or Universal) is required when servicing, repairing, or recovering refrigerant from the sealed circuit. Non-refrigerant swaps (gaskets, fans, relays, boards) and disposal of factory-sealed small appliances (≤5 lbs refrigerant) do not require technician certification.
            </p>
            <p className="m-0">
              <strong className="text-[#1C1917]">EPA SNAP / R-600a (40 CFR Part 82, Subpart G):</strong> Many newer units use <a href="https://www.epa.gov/snap/rule-22-final-rule-notice" target="_blank" rel="noopener noreferrer" className="underline text-[#8C4736]">R-600a (isobutane)</a>, an ASHRAE A3 flammable refrigerant approved only in new UL 60335-2-24 equipment (≤150 g per circuit; never for retrofits). Service requires ventilation, spark-proof tools, fire-safety precautions, and trained technicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
