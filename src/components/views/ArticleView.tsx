/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ReferenceArticle } from '../../types/reference';
import { ReferenceArticleContent } from '../../content/config';
import { Breadcrumbs } from '../Breadcrumbs';
import { QuickAnswer } from '../QuickAnswer';
import { KeyFactsTable } from '../KeyFactsTable';
import { WarningMatrix } from '../WarningMatrix';
import { MaintenanceGuide } from '../MaintenanceGuide';
import { RepairVsReplace } from '../RepairVsReplace';
import { CostDrivers } from '../CostDrivers';
import { SourceCitations } from '../SourceCitations';
import { RelatedReferences } from '../RelatedReferences';
import { WaterHeaterCutawayDiagram } from '../diagrams/WaterHeaterCutawayDiagram';
import { RefrigeratorVaporCycleDiagram } from '../diagrams/RefrigeratorVaporCycleDiagram';
import { ComponentFailureConsequenceMatrix } from '../diagrams/ComponentFailureConsequenceMatrix';
import { MasterLongevityTable } from '../MasterLongevityTable';
import { HelpCircle, AlertCircle, Wrench, ShieldCheck, Thermometer } from 'lucide-react';

interface ArticleViewProps {
  article: ReferenceArticle | ReferenceArticleContent;
  onNavigate?: (path: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onNavigate }) => {
  // Shared Header Component
  const renderHeader = () => (
    <>
      <Breadcrumbs
        items={[
          { label: article.pillarName, path: `/${article.pillarId}/` },
          { label: article.subcategory },
        ]}
        onNavigate={onNavigate}
      />

      <header className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
          <span className="font-semibold text-[#8C4736]">{article.pillarName}</span>
          <span aria-hidden="true">·</span>
          <span>{article.subcategory}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>Reviewed {article.lastReviewedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        <p className="text-base text-[#57534E] leading-relaxed font-serif italic">
          {article.summary}
        </p>

        <div className="pt-2 flex items-center justify-between text-[11px] text-[#78716C] border-b border-[#E5DFD7] pb-4">
          <span>
            Reviewed by: <strong className="text-[#1C1917]">{article.reviewer.desk}</strong>
          </span>
          <span className="font-mono text-[#78716C]">Independent U.S. Household Reference</span>
        </div>
      </header>
    </>
  );

  // Shared Footer Component
  const renderFooter = () => (
    <>
      {article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0 && (
        <RelatedReferences
          relatedSlugs={article.relatedArticleSlugs}
          onNavigate={onNavigate}
        />
      )}

      {article.sources && article.sources.length > 0 && (
        <SourceCitations sources={article.sources} />
      )}

      <footer className="my-10 pt-6 border-t border-[#E5DFD7] text-xs text-[#78716C] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
          <span>
            Editorial Desk: <strong>{article.reviewer.desk}</strong>
          </span>
          <span>Last Verified: {article.lastReviewedDate}</span>
        </div>
        <p className="italic text-[#78716C] leading-relaxed m-0">
          *Safety & Professional Notice: Home Reference provides practical reference and preventative
          information for educational purposes. Maintenance tasks involving pressurized fuel gas piping,
          refrigerant recovery, main electrical distribution panels, or structural building framing may
          require licensed, insured trade contractors in compliance with local municipal building codes.
        </p>
      </footer>
    </>
  );

  // BESPOKE LAYOUT 1: Water Heater (ID: 1)
  // Focus: Mechanical cutaway schematic, sacrificial anode electrochemistry, water chemistry factors, and seam puncture finality.
  if (article.id === 1) {
    return (
      <article className="py-8 sm:py-12 max-w-3xl mx-auto">
        {renderHeader()}

        <QuickAnswer answer={article.quickAnswer} />

        {/* Featured Technical Diagram */}
        <WaterHeaterCutawayDiagram />

        {/* Key Engineering Benchmarks Table */}
        {article.keyFacts && article.keyFacts.length > 0 && (
          <KeyFactsTable facts={article.keyFacts} />
        )}

        {/* Deep Plain-English Technical Explanation */}
        <section className="my-10 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#1C1917]">
          <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Mechanical Anatomy & Electrochemical Corrosion Science
          </h2>
          {article.detailedExplanation.map((paragraph, idx) => (
            <p
              key={idx}
              className={`m-0 ${idx === 0 ? 'editorial-drop-cap' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Diagnostic Warning Matrix (Symptom progression) */}
        {article.warningSigns && (
          <WarningMatrix warnings={article.warningSigns} />
        )}

        {/* Preventative Maintenance Protocols */}
        {article.maintenanceSteps && article.maintenanceSteps.length > 0 && (
          <MaintenanceGuide steps={article.maintenanceSteps} />
        )}

        {/* Repair vs Replace Heuristic */}
        {article.repairVsReplace && (
          <RepairVsReplace framework={article.repairVsReplace} />
        )}

        {/* Water Quality & Influencing Factors */}
        {article.factors && article.factors.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Water Quality & Operating Factors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD7] pt-4">
              {article.factors.map((f, idx) => (
                <div key={idx} className="p-4 bg-[#F4EFEA]/50 border border-[#E5DFD7]">
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed m-0">
                    {f.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cost Drivers */}
        {article.costFactors && article.costFactors.length > 0 && (
          <CostDrivers drivers={article.costFactors} />
        )}

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Frequently Asked Water Heater Questions
            </h2>
            <div className="space-y-4 border-t border-[#E5DFD7] pt-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-[#EDE8E1] last:border-b-0">
                  <h3 className="text-sm font-semibold text-[#1C1917] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#8C4736] mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] pl-6 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {renderFooter()}
      </article>
    );
  }

  // BESPOKE LAYOUT 2: Refrigerator (ID: 9)
  // Focus: Differential diagnostic troubleshooting first (cold freezer / warm fridge), refrigeration cycle schematic, FDA temperature boundaries, and EPA 608 boundaries.
  if (article.id === 9) {
    return (
      <article className="py-8 sm:py-12 max-w-3xl mx-auto">
        {renderHeader()}

        <QuickAnswer answer={article.quickAnswer} />

        {/* Priority Diagnostic Box: Qualified Differential Diagnosis */}
        <section className="my-8 p-5 bg-[#F4EFEA] border-l-4 border-[#0284C7] border border-[#E5DFD7] space-y-3">
          <div className="flex items-center gap-2 text-[#0369A1] font-serif font-bold text-base">
            <Thermometer className="w-5 h-5 text-[#0284C7]" />
            Differential Diagnosis: Cold Freezer with a Warm Fresh-Food Compartment
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed m-0">
            When the freezer remains cold (near 0°F) while the fresh-food compartment warms above 40°F, <strong>multiple causes are possible</strong>. This symptom alone does not confirm whether the sealed refrigeration system is functioning properly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 bg-white border border-[#E5DFD7]">
              <strong className="block text-[#1C1917] font-mono text-[11px] uppercase mb-1">Possible Causes</strong>
              <ul className="text-[#57534E] space-y-1 list-disc pl-4 m-0">
                <li><strong>Airflow / Defrost Faults:</strong> Frosted evaporator coils (defrost heater, bimetal thermostat, or control board), seized evaporator fan motor, stuck motorized damper, iced return air duct, or faulty thermistor.</li>
                <li><strong>Sealed-System / Zone Faults:</strong> Low refrigerant charge, partial capillary restriction, or a diverter valve fault in dual-evaporator models.</li>
              </ul>
            </div>
            <div className="p-3 bg-white border border-[#E5DFD7]">
              <strong className="block text-[#1C1917] font-mono text-[11px] uppercase mb-1">Safe Checks vs. Technician Work</strong>
              <ul className="text-[#57534E] space-y-1 list-disc pl-4 m-0">
                <li><strong>Safe Homeowner Checks:</strong> Verify control settings, clear food blocking interior air vents, inspect door gaskets, and vacuum exterior condenser coils.</li>
                <li><strong>Qualified Technician Work:</strong> Internal evaporator panel disassembly, live electrical/defrost testing, and EPA Section 608 sealed-system diagnostics.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Technical Diagram */}
        <RefrigeratorVaporCycleDiagram />

        {/* Technical Explanation */}
        <section className="my-10 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#1C1917]">
          <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Thermodynamic Principles & Airflow Mechanics
          </h2>
          {article.detailedExplanation.map((paragraph, idx) => (
            <p
              key={idx}
              className={`m-0 ${idx === 0 ? 'editorial-drop-cap' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Key Facts Table */}
        {article.keyFacts && article.keyFacts.length > 0 && (
          <KeyFactsTable facts={article.keyFacts} />
        )}

        {/* Warning Signs & Diagnostic Matrix */}
        {article.warningSigns && (
          <WarningMatrix warnings={article.warningSigns} />
        )}

        {/* Preventative Maintenance Steps */}
        {article.maintenanceSteps && article.maintenanceSteps.length > 0 && (
          <MaintenanceGuide steps={article.maintenanceSteps} />
        )}

        {/* 50% Rule Repair Evaluation */}
        {article.repairVsReplace && (
          <RepairVsReplace framework={article.repairVsReplace} />
        )}

        {/* Influencing Factors */}
        {article.factors && article.factors.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Operational Factors Affecting Longevity
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD7] pt-4">
              {article.factors.map((f, idx) => (
                <div key={idx} className="p-4 bg-[#F4EFEA]/50 border border-[#E5DFD7]">
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed m-0">
                    {f.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cost Factors */}
        {article.costFactors && article.costFactors.length > 0 && (
          <CostDrivers drivers={article.costFactors} />
        )}

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Frequently Asked Refrigerator Questions
            </h2>
            <div className="space-y-4 border-t border-[#E5DFD7] pt-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-[#EDE8E1] last:border-b-0">
                  <h3 className="text-sm font-semibold text-[#1C1917] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#8C4736] mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] pl-6 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {renderFooter()}
      </article>
    );
  }

  // BESPOKE LAYOUT 3: Major Components Lifespan (ID: 22)
  // Focus: Master component longevity table (59 entries), multi-system failure consequence matrix, manufacturing date decoder, and capital reserve planning.
  if (article.id === 22) {
    return (
      <article className="py-8 sm:py-12 max-w-4xl mx-auto">
        {renderHeader()}

        <QuickAnswer answer={article.quickAnswer} />

        {/* Failure Consequence & Life-Safety Risk Matrix */}
        <ComponentFailureConsequenceMatrix />

        {/* Master Component Lifespan Reference Table */}
        <MasterLongevityTable />

        {/* Serial Number & Manufacturing Date Decoder Guide */}
        <section className="my-10 p-6 bg-white border border-[#E5DFD7] space-y-4">
          <div className="flex items-center gap-2 text-base font-serif font-bold text-[#1C1917]">
            <Wrench className="w-5 h-5 text-[#8C4736]" />
            How to Decode Equipment Manufacturing Dates from Serial Numbers
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            Major equipment age can often be determined from the rating data plate attached to the casing. While formatting varies by manufacturer, three common conventions include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD7]">
              <strong className="block text-[#1C1917] font-mono text-[11px] mb-1">First Two Digits = Year</strong>
              <p className="text-[#57534E] m-0">Example: Serial <code>17429182</code> indicates manufacture in the 42nd week of 2017 (common on Carrier, Bryant, Payne, Lennox).</p>
            </div>
            <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD7]">
              <strong className="block text-[#1C1917] font-mono text-[11px] mb-1">Letter Code = Month</strong>
              <p className="text-[#57534E] m-0">Example: Serial <code>D15...</code> where A=Jan, B=Feb, C=Mar, D=Apr indicates April 2015 (common on Rheem, Ruud, Bradford White).</p>
            </div>
            <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD7]">
              <strong className="block text-[#1C1917] font-mono text-[11px] mb-1">Middle Digits in Sequence</strong>
              <p className="text-[#57534E] m-0">Example: Whirlpool/Maytag uses 2nd and 4th digits for year and month. Cross-check manufacturer documentation for legacy models.</p>
            </div>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="my-10 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#1C1917]">
          <h2 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Capital Reserve Planning & Mechanical Aging Dynamics
          </h2>
          {article.detailedExplanation.map((paragraph, idx) => (
            <p
              key={idx}
              className={`m-0 ${idx === 0 ? 'editorial-drop-cap' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Key System Benchmark Facts */}
        {article.keyFacts && article.keyFacts.length > 0 && (
          <KeyFactsTable facts={article.keyFacts} />
        )}

        {/* Warning Signs & Indicators */}
        {article.warningSigns && (
          <WarningMatrix warnings={article.warningSigns} />
        )}

        {/* Capital Replacement Strategy */}
        {article.repairVsReplace && (
          <RepairVsReplace framework={article.repairVsReplace} />
        )}

        {/* Influencing Factors */}
        {article.factors && article.factors.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Environmental & Usage Drivers Across Systems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD7] pt-4">
              {article.factors.map((f, idx) => (
                <div key={idx} className="p-4 bg-[#F4EFEA]/50 border border-[#E5DFD7]">
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed m-0">
                    {f.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cost Factors */}
        {article.costFactors && article.costFactors.length > 0 && (
          <CostDrivers drivers={article.costFactors} />
        )}

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
              Frequently Asked Longevity & Replacement Questions
            </h2>
            <div className="space-y-4 border-t border-[#E5DFD7] pt-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-[#EDE8E1] last:border-b-0">
                  <h3 className="text-sm font-semibold text-[#1C1917] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#8C4736] mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] pl-6 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {renderFooter()}
      </article>
    );
  }

  // DEFAULT CLEAN MODULAR LAYOUT (Articles 2, 3, 5, 6, 7, 8, 10)
  return (
    <article className="py-8 sm:py-12 max-w-3xl mx-auto">
      {renderHeader()}

      {/* CORE MODULE 3: Quick Answer Callout */}
      <QuickAnswer answer={article.quickAnswer} />

      {/* CORE MODULE 5: Key Facts Table */}
      {article.keyFacts && article.keyFacts.length > 0 && (
        <KeyFactsTable facts={article.keyFacts} />
      )}

      {/* CORE MODULE 4: Detailed Plain-English Technical Explanation */}
      <section className="my-10 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#1C1917]">
        <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
          Detailed Reference Explanation
        </h2>
        {article.detailedExplanation.map((paragraph, idx) => (
          <p
            key={idx}
            className={`m-0 ${idx === 0 ? 'editorial-drop-cap' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* CONDITIONAL MODULE 9: Influencing Factors */}
      {article.factors && article.factors.length > 0 && (
        <section className="my-10">
          <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Factors That Influence Service Life
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD7] pt-4">
            {article.factors.map((f, idx) => (
              <div key={idx} className="p-4 bg-[#F4EFEA]/50 border border-[#E5DFD7]">
                <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed m-0">
                  {f.impact}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONDITIONAL MODULE 10: Warning Signs & Diagnostic Matrix */}
      {article.warningSigns && (
        <WarningMatrix warnings={article.warningSigns} />
      )}

      {/* CONDITIONAL MODULE 11: Preventative Maintenance Guidance */}
      {article.maintenanceSteps && article.maintenanceSteps.length > 0 && (
        <MaintenanceGuide steps={article.maintenanceSteps} />
      )}

      {/* CONDITIONAL MODULE 12: Repair vs. Replacement Decision Framework */}
      {article.repairVsReplace && (
        <RepairVsReplace framework={article.repairVsReplace} />
      )}

      {/* CONDITIONAL MODULE 13: Cost Drivers */}
      {article.costFactors && article.costFactors.length > 0 && (
        <CostDrivers drivers={article.costFactors} />
      )}

      {/* CONDITIONAL MODULE 15: Frequently Asked Questions */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="my-10">
          <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Frequently Asked Reference Questions
          </h2>
          <div className="space-y-4 border-t border-[#E5DFD7] pt-4">
            {article.faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5 pb-4 border-b border-[#EDE8E1] last:border-b-0">
                <h3 className="text-sm font-semibold text-[#1C1917] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#8C4736] mt-0.5 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] pl-6 leading-relaxed m-0">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {renderFooter()}
    </article>
  );
};
