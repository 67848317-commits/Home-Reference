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
      <Breadcrumbs items={[{ label: 'About & Editorial Methodology' }]} onNavigate={onNavigate} />

      <header className="space-y-4 border-b border-[#E5DFD7] pb-8">
        <div className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
          Editorial Transparency & Operating Methodology
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
          About Home Reference
        </h1>
        <p className="text-lg font-serif text-[#57534E] leading-relaxed">
          An independent residential reference manual for American homeowners, buyers, tenants, and household stewards.
        </p>
      </header>

      {/* 1. Purpose & Audience */}
      <section className="space-y-4 text-sm leading-relaxed text-[#1C1917]">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 1 · Scope & Audience
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          What Home Reference Is and Who It Serves
        </h2>
        <p className="text-[#57534E]">
          Home Reference is an independent digital knowledge repository dedicated to explaining residential systems, major appliances, preventative maintenance cadences, and longevity benchmarks. We serve U.S. homeowners, prospective buyers evaluating property disclosures, tenants managing household utilities, and family decision-makers facing unexpected equipment failures.
        </p>
        <p className="text-[#57534E]">
          Most online home-improvement information is dominated by contractor lead-generation directories, commission-driven affiliate roundups, or generic filler. Home Reference provides a calm, structured alternative: reference guides organized around engineering principles, published building code consensus, and trade reference data.
        </p>
      </section>

      {/* 2. Research, Authorship & Editorial Desk */}
      <section className="space-y-4 text-sm leading-relaxed text-[#1C1917] border-t border-[#E5DFD7] pt-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 2 · Editorial Process & Authorship
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          How References Are Compiled and Maintained
        </h2>
        <p className="text-[#57534E]">
          Articles on Home Reference are attributed to the <strong>Home Reference Editorial Desk</strong>. This byline represents our internal research, writing, and content-maintenance function—it is not a named panel of licensed engineers, trade contractors, or external peer reviewers.
        </p>
        <p className="text-[#57534E]">
          Our editorial process focuses on three practical steps, alongside ongoing internal audits to qualify or remove unsupported claims:
        </p>
        <div className="space-y-3 pt-2 text-xs">
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono font-semibold text-[#1C1917] block mb-1">
              Step 1: Public Source Consultation
            </span>
            <p className="text-[#57534E] m-0">
              Technical explanations, temperature thresholds, and lifespan ranges are compiled from publicly available government guidance, consensus standards summaries, and trade association reference charts rather than contractor sales scripts.
            </p>
          </div>
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono font-semibold text-[#1C1917] block mb-1">
              Step 2: Qualification of Ranges & Variables
            </span>
            <p className="text-[#57534E] m-0">
              We aim to distinguish advisory recommendations from statutory rules, and planning medians from manufacturer warranties. Where real-world variables—such as municipal water mineral hardness, usage, or regional climate—alter equipment longevity, we note those variables rather than presenting single-number absolutes.
            </p>
          </div>
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono font-semibold text-[#1C1917] block mb-1">
              Step 3: Explanatory Schematics & Differential Diagnostics
            </span>
            <p className="text-[#57534E] m-0">
              We build original technical diagrams and structured diagnostic overviews that outline multiple possible causes of common household symptoms while clearly separating safe homeowner checks from work requiring a qualified technician.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs">
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] font-mono uppercase mb-1">Current Practices</strong>
            <p className="text-[#57534E] m-0">
              Compiling guides from public government, standards, and trade references; qualifying lifespan ranges; and conducting targeted editorial audits to remove or narrow unsupported claims.
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] font-mono uppercase mb-1">Planned Practices</strong>
            <p className="text-[#57534E] m-0">
              Periodic review of guides when major federal efficiency/refrigerant rules or model code editions are published, plus periodic link checks. These are planned editorial goals, not an automated or guaranteed schedule.
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] font-mono uppercase mb-1">Editorial Principles</strong>
            <p className="text-[#57534E] m-0">
              Strict separation from commercial interests: no paid placements, no affiliate links, and no contractor lead-generation referrals.
            </p>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] font-mono uppercase mb-1">Limitations</strong>
            <p className="text-[#57534E] m-0">
              Content is compiled by our internal editorial desk—not licensed engineers, contractors, or external peer reviewers—and not every entry in our 59-component longevity table has been individually verified against primary studies.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Source Hierarchy */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 3 · Evidence Standards
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          The Authoritative Source Hierarchy
        </h2>
        <p className="text-xs text-[#57534E] leading-relaxed">
          Home Reference prioritizes sources according to a four-tier reference hierarchy. Commercial marketing brochures and unverified contractor blogs are not used as primary references:
        </p>
        <div className="space-y-3 pt-2 text-xs">
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 1: Federal Regulatory & Public Health Authorities
            </span>
            <p className="text-[#57534E] m-0">
              U.S. Department of Energy (DOE / Energy Saver), Environmental Protection Agency (EPA / ENERGY STAR / Section 608), Consumer Product Safety Commission (CPSC), and Food and Drug Administration (FDA).
            </p>
          </div>
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 2: Consensus Engineering & Code Standards Bodies
            </span>
            <p className="text-[#57534E] m-0">
              National Fire Protection Association (NFPA / National Electrical Code NFPA 70 / Life Safety NFPA 72), American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE), and International Code Council (ICC / International Residential Code).
            </p>
          </div>
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 3: Appliance & Equipment Manufacturer Associations
            </span>
            <p className="text-[#57534E] m-0">
              Association of Home Appliance Manufacturers (AHAM), Air-Conditioning, Heating, and Refrigeration Institute (AHRI), and Water Quality Association (WQA).
            </p>
          </div>
          <div className="p-4 bg-white border border-[#E5DFD7]">
            <span className="font-mono uppercase font-semibold text-[#8C4736] block mb-1">
              Tier 4: Professional Inspection & Technical Societies
            </span>
            <p className="text-[#57534E] m-0">
              International Association of Certified Home Inspectors (InterNACHI) and American Society of Home Inspectors (ASHI) inspection reference charts.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Safety Boundaries */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-8 text-sm leading-relaxed">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 4 · Safety Protocols
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          Practical Safety Boundaries & Trade Demarcation
        </h2>
        <p className="text-[#57534E]">
          Home Reference is an educational publication, not a licensed trade contractor or engineering firm. We separate routine homeowner observation and basic upkeep from work that requires licensed professional intervention:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#1C1917] mb-2 font-mono uppercase text-xs">
              Homeowner Observation & Routine Care
            </strong>
            <ul className="space-y-1.5 text-[#57534E] list-disc pl-4">
              <li>Visual inspections of accessible casing, vents, and pipe connections.</li>
              <li>Replacing accessible HVAC air filters and cleaning lint traps.</li>
              <li>Clearing dishwasher spray arms and vacuuming external condenser coils.</li>
              <li>Operating and exercising manual emergency water shutoff valves.</li>
              <li>Resetting a single branch circuit breaker when no signs of damage exist.</li>
            </ul>
          </div>
          <div className="p-4 bg-[#F4EFEA] border border-[#E5DFD7]">
            <strong className="block text-[#8C4736] mb-2 font-mono uppercase text-xs">
              Qualified Technician & Licensed Trade Work
            </strong>
            <ul className="space-y-1.5 text-[#57534E] list-disc pl-4">
              <li>Pressurized fuel gas lines, gas valves, burner orifices, and flues.</li>
              <li>Refrigerant recovery, line brazing, and system charging (EPA Section 608).</li>
              <li>Main service panels, meter enclosures, and 240V feeder circuits.</li>
              <li>Combustion chamber and heat exchanger crack diagnostics.</li>
              <li>Structural framing modifications and whole-house load calculations.</li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-white border border-[#E5DFD7] text-xs text-[#78716C] leading-relaxed">
          <strong className="text-[#1C1917]">Immediate Abort Thresholds:</strong> Homeowners should immediately stop troubleshooting and contact emergency utility services or licensed trade specialists upon observing the smell of natural gas or propane, burning electrical odors or discolored panel breakers, water leaks near active electrical equipment, or soot rollout around combustion appliances.
        </div>
      </section>

      {/* 5. Error Reporting & Correction */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-8 text-sm leading-relaxed">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 5 · Accuracy & Revisions
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          Correction Procedure & Editorial Revisions
        </h2>
        <p className="text-[#57534E]">
          When an internal audit or reader review identifies a factual discrepancy, unsupported numerical interval, or ambiguous instruction, our editorial process follows three steps:
        </p>
        <ol className="space-y-2 text-xs text-[#57534E] list-decimal pl-5">
          <li>
            <strong>Source Cross-Check:</strong> The disputed claim is checked against primary regulatory documents, manufacturer manuals, or consensus standards.
          </li>
          <li>
            <strong>Editorial Revision:</strong> If a claim cannot be substantiated or lacks necessary qualification, the article text, summary tables, and internal evidence registry are revised or the unsupported claim is removed.
          </li>
          <li>
            <strong>Timestamp Disclosure:</strong> The article metadata is updated with the revision date (recorded under <code>lastReviewedDate</code>) to reflect when the page was last reviewed.
          </li>
        </ol>
      </section>

      {/* 6. Planned Maintenance Policy */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-8 text-sm leading-relaxed">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 6 · Planned Maintenance Policy
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          Intended Review & Maintenance Policy
        </h2>
        <p className="text-[#57534E]">
          Home Reference focuses on evergreen residential topics rather than daily news. As a planned editorial maintenance policy, we intend to review published guides on an ongoing basis around three triggers:
        </p>
        <ul className="space-y-2 text-xs text-[#57534E] list-disc pl-5">
          <li>
            <strong>Regulatory Updates:</strong> When major federal energy efficiency or refrigerant rules (such as DOE efficiency transitions or EPA SNAP updates) take effect, affected guides are scheduled for review.
          </li>
          <li>
            <strong>Model Code Editions:</strong> Major model building code publications (such as updates to the International Residential Code or National Electrical Code) serve as planned checkpoints for safety-related guidance.
          </li>
          <li>
            <strong>Periodic Link & Citation Checks:</strong> Reference citations and external URLs are intended to be checked periodically to replace broken links and remove unverified claims.
          </li>
        </ul>
      </section>

      {/* 7. Commercial Independence */}
      <section className="space-y-4 border-t border-[#E5DFD7] pt-8 text-sm leading-relaxed pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#8C4736] font-semibold">
          Section 7 · Commercial Ethics
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight">
          Commercial Independence & Funding Model
        </h2>
        <p className="text-[#57534E]">
          Home Reference is funded through standardized display advertising (via Google AdSense). To preserve editorial independence:
        </p>
        <ul className="space-y-2 text-xs text-[#57534E] list-disc pl-5">
          <li>
            <strong>No Paid Placements:</strong> We do not accept payment, free equipment, or promotional consideration from appliance manufacturers, home warranty companies, or contractor networks.
          </li>
          <li>
            <strong>No Affiliate Sales Links:</strong> We do not publish affiliate product links or earn commissions from equipment sales or service referrals.
          </li>
          <li>
            <strong>No Lead-Generation Sales:</strong> We do not collect or sell homeowner inquiry data, zip codes, or contact information to contractor bidding networks.
          </li>
          <li>
            <strong>Separation of Advertising and Editorial:</strong> Advertisers have no input into our editorial guides, longevity ranges, or technical explanations.
          </li>
        </ul>
      </section>
    </div>
  );
};
