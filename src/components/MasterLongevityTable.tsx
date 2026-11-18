/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface ComponentLifespanItem {
  name: string;
  category: 'Roofing & Envelope' | 'HVAC & Heating' | 'Plumbing & Water' | 'Electrical & Safety' | 'Appliances' | 'Interior Finishes';
  lifespanRange: string;
  benchmarkYears: number;
  primaryWearFactor: string;
  endOfLifeIndicator: string;
}

const MASTER_DATA: ComponentLifespanItem[] = [
  // 1. Roofing & Envelope
  { name: '3-Tab Asphalt Shingles', category: 'Roofing & Envelope', lifespanRange: '15 – 20 Years', benchmarkYears: 18, primaryWearFactor: 'UV asphalt oxidation, thermal shock', endOfLifeIndicator: 'Curling corners, clawing, bald fiberglass patches' },
  { name: 'Architectural Laminate Shingles', category: 'Roofing & Envelope', lifespanRange: '22 – 28 Years', benchmarkYears: 25, primaryWearFactor: 'Granule loss, attic heat buildup', endOfLifeIndicator: 'Granule loss in gutters, cracked tabs, leaks' },
  { name: 'Standing Seam Metal Roof', category: 'Roofing & Envelope', lifespanRange: '40 – 60+ Years', benchmarkYears: 50, primaryWearFactor: 'Fastener gasket decay, thermal expansion', endOfLifeIndicator: 'Penetration seal failure, seam separation' },
  { name: 'Clay & Concrete Roof Tiles', category: 'Roofing & Envelope', lifespanRange: '50 – 100 Years', benchmarkYears: 70, primaryWearFactor: 'Underlayment decay (underlayment lasts 20–30 yrs)', endOfLifeIndicator: 'Cracked tiles, compromised tar paper membrane' },
  { name: 'EPDM / TPO Flat Membrane', category: 'Roofing & Envelope', lifespanRange: '18 – 25 Years', benchmarkYears: 20, primaryWearFactor: 'Ponding water, UV seam adhesive breakdown', endOfLifeIndicator: 'Open lap seams, blistering, membrane shrinkage' },
  { name: 'Vinyl Siding Panels', category: 'Roofing & Envelope', lifespanRange: '25 – 40 Years', benchmarkYears: 30, primaryWearFactor: 'UV embrittlement, hail impact', endOfLifeIndicator: 'Cracking upon light impact, severe chalking/fading' },
  { name: 'Fiber Cement Siding (Hardie)', category: 'Roofing & Envelope', lifespanRange: '40 – 50+ Years', benchmarkYears: 45, primaryWearFactor: 'Paint seal maintenance (caulk/paint every 10 yrs)', endOfLifeIndicator: 'Edge moisture swelling, delamination at butt joints' },
  { name: 'Insulated Glass Units (Double Pane)', category: 'Roofing & Envelope', lifespanRange: '15 – 22 Years', benchmarkYears: 20, primaryWearFactor: 'Desiccant saturation, perimeter seal failure', endOfLifeIndicator: 'Fog or condensation trapped between panes' },
  { name: 'Aluminum Gutters & Downspouts', category: 'Roofing & Envelope', lifespanRange: '20 – 30 Years', benchmarkYears: 25, primaryWearFactor: 'Ice weight, seam caulk breakdown', endOfLifeIndicator: 'Sagging, pulling away from fascia, leaking corners' },
  { name: 'Exterior Caulk & Flashing Seals', category: 'Roofing & Envelope', lifespanRange: '5 – 10 Years', benchmarkYears: 7, primaryWearFactor: 'UV drying, building settlement', endOfLifeIndicator: 'Hardened, cracked, or detached sealant beads' },

  // 2. HVAC & Heating
  { name: 'Central Air Conditioner Compressor', category: 'HVAC & Heating', lifespanRange: '12 – 17 Years', benchmarkYears: 15, primaryWearFactor: 'Cooling run-hours, dirty condenser coils', endOfLifeIndicator: 'Clicking start relay, loss of cooling, acid burnout' },
  { name: 'Air-Source Heat Pump', category: 'HVAC & Heating', lifespanRange: '12 – 15 Years', benchmarkYears: 14, primaryWearFactor: 'Year-round operation (heating + cooling cycles)', endOfLifeIndicator: 'Reversing valve hangup, compressor failure' },
  { name: 'Residential Gas Furnace', category: 'HVAC & Heating', lifespanRange: '15 – 20 Years', benchmarkYears: 18, primaryWearFactor: 'Thermal expansion fatigue on heat exchanger', endOfLifeIndicator: 'Heat exchanger cracks, rollout switch trip' },
  { name: 'Cast Iron Hydronic Boiler', category: 'HVAC & Heating', lifespanRange: '25 – 35 Years', benchmarkYears: 30, primaryWearFactor: 'Oxygen corrosion, thermal shock', endOfLifeIndicator: 'Section seal leaks, cracking of cast iron block' },
  { name: 'Ductless Mini-Split Heat Pump', category: 'HVAC & Heating', lifespanRange: '12 – 17 Years', benchmarkYears: 14, primaryWearFactor: 'Inverter board heat, blower wheel dust', endOfLifeIndicator: 'Inverter error codes, electronic board failure' },
  { name: 'Indoor Evaporator Coil', category: 'HVAC & Heating', lifespanRange: '12 – 17 Years', benchmarkYears: 15, primaryWearFactor: 'Formicary corrosion from indoor VOCs', endOfLifeIndicator: 'Micro-leaks of refrigerant, freezing coil face' },
  { name: 'Blower Motor (PSC vs ECM)', category: 'HVAC & Heating', lifespanRange: '10 – 15 Years', benchmarkYears: 12, primaryWearFactor: 'Static air pressure resistance, neglected filters', endOfLifeIndicator: 'Bearing screech, overheating, speed module failure' },
  { name: 'Galvanized Sheet Metal Ductwork', category: 'HVAC & Heating', lifespanRange: '30 – 50+ Years', benchmarkYears: 40, primaryWearFactor: 'Mastic tape drying, mechanical movement', endOfLifeIndicator: 'Air leakage at joints, disconnected trunk lines' },
  { name: 'Flexible Ducting (R-6 / R-8)', category: 'HVAC & Heating', lifespanRange: '15 – 25 Years', benchmarkYears: 20, primaryWearFactor: 'Attic heat degradation, rodent tearing', endOfLifeIndicator: 'Brittle outer plastic jacket, collapsed inner core' },
  { name: 'Electronic Thermostat', category: 'HVAC & Heating', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Capacitor drying, relay contact wear', endOfLifeIndicator: 'Unresponsive display, inaccurate temperature reading' },

  // 3. Plumbing & Water
  { name: 'Storage Water Heater (Gas Atmospheric)', category: 'Plumbing & Water', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Galvanic corrosion, bottom sediment blanket', endOfLifeIndicator: 'Weeping at lower seam, popping kettling sounds' },
  { name: 'Storage Water Heater (Electric Resistance)', category: 'Plumbing & Water', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Lower element calcification, anode depletion', endOfLifeIndicator: 'Lower seam leak, repeated lower element burnout' },
  { name: 'Tankless Water Heater (Gas)', category: 'Plumbing & Water', lifespanRange: '15 – 20+ Years (Planning)', benchmarkYears: 18, primaryWearFactor: 'Heat exchanger scale (requires periodic descaling; InterNACHI lists 10 yrs)', endOfLifeIndicator: 'Ignition or flow error codes, heat exchanger calcification' },
  { name: 'Copper Supply Piping (Type L / M)', category: 'Plumbing & Water', lifespanRange: '40 – 60+ Years', benchmarkYears: 50, primaryWearFactor: 'Acidic water (pH <6.5), excessive flow velocity', endOfLifeIndicator: 'Pinhole leaks under green verdigris crust' },
  { name: 'PEX Supply Tubing (Cross-Linked PE)', category: 'Plumbing & Water', lifespanRange: '40 – 50 Years (Est.)', benchmarkYears: 45, primaryWearFactor: 'Direct UV exposure, aggressive chlorination', endOfLifeIndicator: 'Embrittlement near fittings (long-term field data still maturing)' },
  { name: 'Cast Iron Drain Waste Vent (DWV)', category: 'Plumbing & Water', lifespanRange: '40 – 60 Years', benchmarkYears: 50, primaryWearFactor: 'Hydrogen sulfide gas channeling along pipe bottom', endOfLifeIndicator: 'Cracking along bottom of horizontal runs, sewer smell' },
  { name: 'PVC / ABS Drain Piping', category: 'Plumbing & Water', lifespanRange: '50 – 75+ Years', benchmarkYears: 60, primaryWearFactor: 'Solvent weld stress, structural building movement', endOfLifeIndicator: 'Joint separation, impact cracking' },
  { name: 'Brass Quarter-Turn Ball Valve', category: 'Plumbing & Water', lifespanRange: '20 – 35 Years', benchmarkYears: 25, primaryWearFactor: 'Mineral scale on PTFE teflon seats', endOfLifeIndicator: 'Stem weeping, frozen handle' },
  { name: 'Gate Valve (Multi-Turn Wheel)', category: 'Plumbing & Water', lifespanRange: '10 – 18 Years', benchmarkYears: 14, primaryWearFactor: 'Stem corrosion, mineral seizure', endOfLifeIndicator: 'Gate snaps in closed position or fails to seal' },
  { name: 'Toilet Flush & Fill Valves', category: 'Plumbing & Water', lifespanRange: '4 – 7 Years', benchmarkYears: 5, primaryWearFactor: 'Chlorine degradation of rubber flapper', endOfLifeIndicator: 'Ghost flushing, continuous water trickling into bowl' },
  { name: 'Washing Machine Hoses (Rubber)', category: 'Plumbing & Water', lifespanRange: '3 – 5 Years', benchmarkYears: 4, primaryWearFactor: 'Continuous 50–70 psi municipal pressure', endOfLifeIndicator: 'Blister bubbles, hardening, catastrophic burst' },
  { name: 'Braided Stainless Steel Supply Lines', category: 'Plumbing & Water', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Inner tube rubber aging, kink stress', endOfLifeIndicator: 'Frayed stainless mesh, weeping at crimp ferrules' },
  { name: 'Basement Sump Pump', category: 'Plumbing & Water', lifespanRange: '7 – 10 Years', benchmarkYears: 8, primaryWearFactor: 'Mechanical float switch failure, run-cycles', endOfLifeIndicator: 'Motor runs dry, seized impeller, failure to trip' },
  { name: 'Garbage Disposal', category: 'Plumbing & Water', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Internal motor shaft seal water leakage', endOfLifeIndicator: 'Water leaking directly from bottom motor housing' },
  { name: 'Thermal Expansion Tank', category: 'Plumbing & Water', lifespanRange: '5 – 8 Years', benchmarkYears: 6, primaryWearFactor: 'Internal butyl rubber bladder rupture', endOfLifeIndicator: 'Water discharges from Schrader air valve when pressed' },

  // 4. Electrical & Safety
  { name: 'Main Electrical Service Panel', category: 'Electrical & Safety', lifespanRange: '30 – 50 Years', benchmarkYears: 40, primaryWearFactor: 'Bus bar oxidation, moisture, thermal expansion', endOfLifeIndicator: 'Corrosion on main lugs, buzzing, hot deadfront' },
  { name: 'Standard Thermal-Magnetic Breakers', category: 'Electrical & Safety', lifespanRange: '30 – 40 Years', benchmarkYears: 35, primaryWearFactor: 'Contact erosion from trip cycles, fatigue', endOfLifeIndicator: 'Breaker will not mechanically reset, scorch marks' },
  { name: 'GFCI Receptacles & Breakers', category: 'Electrical & Safety', lifespanRange: '10 – 15 Years', benchmarkYears: 12, primaryWearFactor: 'Internal sensing circuit surge degradation', endOfLifeIndicator: 'Test button will not trip or reset' },
  { name: 'AFCI Arc-Fault Breakers', category: 'Electrical & Safety', lifespanRange: '10 – 15 Years', benchmarkYears: 12, primaryWearFactor: 'Microprocessor board sensitivity', endOfLifeIndicator: 'Persistent false tripping, failure of self-test' },
  { name: 'Copper Romex Branch Wiring (NM-B)', category: 'Electrical & Safety', lifespanRange: '50 – 75+ Years', benchmarkYears: 60, primaryWearFactor: 'Overheating from over-fusing, physical damage', endOfLifeIndicator: 'Brittle thermoplastic insulation, scorched splices' },
  { name: 'Smoke Alarm (NFPA 72 Standard)', category: 'Electrical & Safety', lifespanRange: '10 Years (NFPA 72)', benchmarkYears: 10, primaryWearFactor: 'Sensor contamination, optical/ionization drift', endOfLifeIndicator: 'End-of-life chirp signal, false alarms, or 10 years from manufacture date' },
  { name: 'Carbon Monoxide Alarm (UL 2034)', category: 'Electrical & Safety', lifespanRange: '7 – 10 Years', benchmarkYears: 8, primaryWearFactor: 'Electrochemical sensor saturation', endOfLifeIndicator: 'End-of-life chirp sequence, sensor failure' },
  { name: 'Whole-House Surge Protective Device', category: 'Electrical & Safety', lifespanRange: '5 – 10 Years', benchmarkYears: 7, primaryWearFactor: 'Cumulative metal oxide varistor (MOV) hits', endOfLifeIndicator: 'Status indicator light signals loss of protection' },

  // 5. Appliances
  { name: 'Refrigerator (Standard Top-Freezer)', category: 'Appliances', lifespanRange: '9 – 13 Years (General)', benchmarkYears: 12, primaryWearFactor: 'Condenser dust, door gasket stiffness (simpler layout)', endOfLifeIndicator: 'Compressor clicking, loss of cooling' },
  { name: 'Refrigerator (French Door / Multi-Zone)', category: 'Appliances', lifespanRange: '9 – 13 Years (General)', benchmarkYears: 11, primaryWearFactor: 'Dual evaporators, motorized dampers, ice auger (more parts)', endOfLifeIndicator: 'Cooling loss, control board or sealed-system failure' },
  { name: 'Built-in Dishwasher', category: 'Appliances', lifespanRange: '9 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Circulation pump seal, hard water minerals', endOfLifeIndicator: 'Water leaking at door base, motor humming without wash' },
  { name: 'Top-Load Clothes Washer', category: 'Appliances', lifespanRange: '11 – 14 Years', benchmarkYears: 12, primaryWearFactor: 'Transmission clutch, suspension rod fatigue', endOfLifeIndicator: 'Violent off-balance banging, burning belt odor' },
  { name: 'Front-Load Clothes Washer', category: 'Appliances', lifespanRange: '9 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Rear tub bearing seal, spider arm corrosion', endOfLifeIndicator: 'Loud jet-engine roaring during spin, drum play' },
  { name: 'Electric Clothes Dryer', category: 'Appliances', lifespanRange: '12 – 16 Years', benchmarkYears: 14, primaryWearFactor: 'Drum roller bearing wear, heating coil fatigue', endOfLifeIndicator: 'Squealing drum rollers, runs with zero heat' },
  { name: 'Gas Clothes Dryer', category: 'Appliances', lifespanRange: '12 – 16 Years', benchmarkYears: 14, primaryWearFactor: 'Gas valve solenoid coil, igniter burnout', endOfLifeIndicator: 'Drum tumbles but burner fails to ignite' },
  { name: 'Gas Cooking Range & Oven', category: 'Appliances', lifespanRange: '14 – 18 Years', benchmarkYears: 15, primaryWearFactor: 'Igniter element resistance, gas valve safety', endOfLifeIndicator: 'Oven igniter glows yellow but fails to open gas valve' },
  { name: 'Electric Range (Radiant / Coil)', category: 'Appliances', lifespanRange: '12 – 15 Years', benchmarkYears: 14, primaryWearFactor: 'Heating element thermal breakdown, infinite switch', endOfLifeIndicator: 'Element blister rupture, continuous high heat' },
  { name: 'Over-the-Range Microwave', category: 'Appliances', lifespanRange: '8 – 10 Years', benchmarkYears: 9, primaryWearFactor: 'Magnetron tube life, door microswitch wear', endOfLifeIndicator: 'Unit runs but does not heat food, loud buzzing' },

  // 6. Interior Finishes & Millwork
  { name: 'Solid 3/4" Hardwood Flooring', category: 'Interior Finishes', lifespanRange: '75 – 100+ Years', benchmarkYears: 80, primaryWearFactor: 'Wear layer allows 4 to 6 sandings / refinishes', endOfLifeIndicator: 'Sanded down to tongue-and-groove nails' },
  { name: 'Engineered Hardwood Flooring', category: 'Interior Finishes', lifespanRange: '20 – 35 Years', benchmarkYears: 25, primaryWearFactor: 'Veneer thickness limits refinishing (1–2 times)', endOfLifeIndicator: 'Veneer delamination, worn through top layer' },
  { name: 'Ceramic / Porcelain Tile', category: 'Interior Finishes', lifespanRange: '50 – 75+ Years', benchmarkYears: 60, primaryWearFactor: 'Subfloor deflection (grout requires sealing)', endOfLifeIndicator: 'Cracking along joist lines, loose hollow tiles' },
  { name: 'Residential Carpet & Padding', category: 'Interior Finishes', lifespanRange: '8 – 12 Years', benchmarkYears: 10, primaryWearFactor: 'Foot traffic fiber matting, foam breakdown', endOfLifeIndicator: 'Permanent traffic lanes, backing delamination' },
  { name: 'Quartz / Granite Countertops', category: 'Interior Finishes', lifespanRange: '40 – 60+ Years', benchmarkYears: 50, primaryWearFactor: 'Edge impact chipping, resin UV discoloration', endOfLifeIndicator: 'Severe thermal shock cracks near sink cutouts' },
  { name: 'Laminate Kitchen Countertops', category: 'Interior Finishes', lifespanRange: '15 – 25 Years', benchmarkYears: 20, primaryWearFactor: 'Substrate particleboard moisture swelling', endOfLifeIndicator: 'Blistering near sink edges, delamination' },
];

export const MasterLongevityTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Roofing & Envelope',
    'HVAC & Heating',
    'Plumbing & Water',
    'Electrical & Safety',
    'Appliances',
    'Interior Finishes',
  ];

  const filteredItems = MASTER_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.primaryWearFactor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.endOfLifeIndicator.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="my-10 border border-[#E5DFD7] bg-white shadow-2xs">
      <div className="p-4 sm:p-6 bg-[#FAF8F5] border-b border-[#E5DFD7]">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
              Comprehensive Reference Lookup · {MASTER_DATA.length} Residential Components
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] mt-1">
              Master Household Component Lifespan Matrix
            </h3>
          </div>
          <span className="text-xs font-mono text-[#78716C]">
            Showing {filteredItems.length} of {MASTER_DATA.length} indexed components
          </span>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search component, failure sign, or wear factor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-[#E5DFD7] bg-white text-[#1C1917] focus:outline-none focus:border-[#8C4736]"
            />
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-[11px] font-medium border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1C1917] text-white border-[#1C1917]'
                    : 'bg-white text-[#57534E] border-[#E5DFD7] hover:border-[#1C1917]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Data Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#F4EFEA] border-b border-[#E5DFD7] text-[11px] font-mono uppercase tracking-wider text-[#1C1917]">
              <th className="py-3 px-4 font-semibold">Component / Assembly</th>
              <th className="py-3 px-3 font-semibold">Category</th>
              <th className="py-3 px-3 font-semibold">Expected Lifespan</th>
              <th className="py-3 px-4 font-semibold">Primary Wear Mechanism</th>
              <th className="py-3 px-4 font-semibold">End-of-Life Warning Indicator</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE8E1]">
            {filteredItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                <td className="py-3 px-4 font-serif font-bold text-sm text-[#1C1917]">
                  {item.name}
                </td>
                <td className="py-3 px-3 text-[11px] font-mono text-[#78716C] whitespace-nowrap">
                  {item.category}
                </td>
                <td className="py-3 px-3 font-mono font-semibold text-[#8C4736] whitespace-nowrap">
                  {item.lifespanRange}
                </td>
                <td className="py-3 px-4 text-[#57534E] leading-relaxed">
                  {item.primaryWearFactor}
                </td>
                <td className="py-3 px-4 text-[#57534E] leading-relaxed">
                  {item.endOfLifeIndicator}
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-[#78716C]">
                  No home components matched your search criteria. Try a broader term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-[#F4EFEA] border-t border-[#E5DFD7] text-[11px] text-[#78716C] leading-relaxed flex flex-col sm:flex-row justify-between gap-2">
        <span>
          <strong>Reference Basis:</strong> General planning ranges compiled from public industry and inspection reference charts (such as U.S. DOE Energy Saver, InterNACHI, and AHAM). Individual ranges are planning estimates, not warranties, and have not been independently empirically verified across all {MASTER_DATA.length} entries.
        </span>
        <span className="font-mono shrink-0">Home Reference Longevity Matrix</span>
      </div>
    </div>
  );
};
