/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

interface AboutViewProps {
  onNavigate?: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 max-w-3xl mx-auto space-y-12">
      <Breadcrumbs items={[{ label: 'About Home Reference' }]} onNavigate={onNavigate} />

      <header className="space-y-4 border-b border-[#E5DFD7] pb-8">
        <div className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
          Editorial Independence & Methodology
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
          About Home Reference
        </h1>
        <p className="text-lg font-serif text-[#1C1917] italic leading-relaxed">
          Understand your home. Maintain it better. Make informed household decisions.
        </p>
      </header>

      {/* Origin & Purpose */}
      <section className="space-y-4 text-sm leading-relaxed text-[#1C1917]">
        <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight">
          1. Why Home Reference Exists
        </h2>
        <p>
          American homeowners and households spend hundreds of billions of dollars annually maintaining,
          repairing, and replacing residential systems and appliances. Yet when homeowners search for
          objective answers to straightforward household questions—such as how long an insulated glass
          unit lasts, or what causes a water heater to pop—they routinely encounter four frustrating
          types of web content:
        </p>
        <ul className="space-y-2 text-[#57534E] text-xs list-disc pl-5">
          <li>
            <strong>Contractor Lead-Generation Sites:</strong> Thin doorway articles engineered to capture
            contact information and trigger high-pressure sales calls.
          </li>
          <li>
            <strong>Affiliate Product Catalogs:</strong> Disguised reviews incentivized by replacement
            equipment commissions rather than low-cost maintenance solutions.
          </li>
          <li>
            <strong>AI Content Farms:</strong> 2,000-word walls of generic, repetitive filler with no
            technical grounding in building codes or trade science.
          </li>
          <li>
            <strong>Impractical Code Manuals:</strong> Incomprehensible legalistic building codes that fail
            to explain what an ordinary resident actually needs to inspect.
          </li>
        </ul>
        <p>
          Home Reference was created as a modern alternative: <strong>a calm, authoritative digital
          household reference manual</strong> designed to be searched, understood, and trusted.
        </p>
      </section>

      {/* The 4-Tier Source Hierarchy */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight">
          2. The Authoritative Source Hierarchy
        </h2>
        <p className="text-xs text-[#57534E] leading-relaxed">
          We do not publish unsubstantiated manufacturer claims or speculative rules of thumb as established facts.
          Every technical standard and baseline lifespan in Home Reference is evaluated against a strict four-tier
          source hierarchy:
        </p>
        <div className="space-y-3 border-t border-[#E5DFD7] pt-4 text-xs">
          <div className="p-3.5 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 1: Government & Regulatory Authorities
            </span>
            <p className="text-[#57534E] m-0">
              U.S. Department of Energy (DOE / Energy Saver), Environmental Protection Agency (EPA / ENERGY STAR),
              Consumer Product Safety Commission (CPSC), and Centers for Disease Control and Prevention (CDC).
            </p>
          </div>
          <div className="p-3.5 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 2: Consensus Standards Bodies
            </span>
            <p className="text-[#57534E] m-0">
              National Fire Protection Association (NFPA / NEC), American Society of Heating, Refrigerating and
              Air-Conditioning Engineers (ASHRAE), and the International Code Council (ICC / IRC).
            </p>
          </div>
          <div className="p-3.5 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 3: Trade & Manufacturing Associations
            </span>
            <p className="text-[#57534E] m-0">
              Association of Home Appliance Manufacturers (AHAM), Air-Conditioning, Heating, and Refrigeration
              Institute (AHRI), and the Water Quality Association (WQA).
            </p>
          </div>
          <div className="p-3.5 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 4: Professional Inspection & Building Societies
            </span>
            <p className="text-[#57534E] m-0">
              International Association of Certified Home Inspectors (InterNACHI) and the American Society of
              Home Inspectors (ASHI).
            </p>
          </div>
        </div>
      </section>

      {/* Fact Verification Framework */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight">
          3. Fact Verification Tiers (A, B, C, D)
        </h2>
        <p className="text-xs text-[#57534E] leading-relaxed">
          Because residential longevity varies with water chemistry, climate run-hours, and maintenance, we classify
          every key metric into transparent fact tiers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] mb-1 font-mono uppercase">Tier A: Strongly Sourceable</strong>
            <p className="text-[#57534E] m-0">
              Directly grounded in government regulations, testing standards, or trade surveys (e.g., NFPA 72 10-year smoke alarm expiration).
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] mb-1 font-mono uppercase">Tier B: Consumer Heuristic</strong>
            <p className="text-[#57534E] m-0">
              Widely recognized practical rules of thumb (e.g., the repair vs. replace decision framework, annual water heater sediment flushes).
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] mb-1 font-mono uppercase">Tier C: Variable Estimate</strong>
            <p className="text-[#57534E] m-0">
              Metrics with wide real-world variance dictated by local labor rates, climate run-hours, or installation quality (e.g., HVAC replacement quotes).
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] mb-1 font-mono uppercase">Tier D: Restricted / Withdrawn</strong>
            <p className="text-[#57534E] m-0">
              Unverified marketing claims. Strictly barred from appearing as factual statements on Home Reference.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Legal Disclaimers */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-6 text-xs text-[#57534E] leading-relaxed">
        <h2 className="text-base font-serif font-bold text-[#1C1917]">
          4. Professional Safety Boundaries & Disclaimers
        </h2>
        <p>
          Home Reference is an educational and reference publication. It is not a licensed trade contractor,
          structural engineering firm, master electrician, or professional home inspection service.
        </p>
        <p>
          We deliberately distinguish <em>Homeowner Observation</em> and <em>Routine Homeowner Maintenance</em> from
          <em>Professional Diagnosis</em> and <em>Licensed Trade Work</em>. Tasks involving fuel gas lines, sealed
          refrigerant circuits, high-voltage service panels, or structural building envelope alterations should always
          be performed by licensed, insured professionals in accordance with municipal building codes.
        </p>
      </section>
    </div>
  );
};
