/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ReferenceArticle } from '../types/reference';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuickAnswer } from '../components/QuickAnswer';
import { KeyFactsTable } from '../components/KeyFactsTable';
import { WarningMatrix } from '../components/WarningMatrix';
import { MaintenanceGuide } from '../components/MaintenanceGuide';
import { RepairVsReplace } from '../components/RepairVsReplace';
import { CostDrivers } from '../components/CostDrivers';
import { SourceCitations } from '../components/SourceCitations';
import { RelatedReferences } from '../components/RelatedReferences';
import { HelpCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ArticlePageProps {
  article: ReferenceArticle;
  onNavigate: (path: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onNavigate }) => {
  return (
    <article className="py-8 sm:py-12 max-w-3xl mx-auto">
      {/* CORE MODULE 1: Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: article.pillarName, path: `/${article.pillarId}/` },
          { label: article.subcategory },
        ]}
        onNavigate={onNavigate}
      />

      {/* CORE MODULE 2: Article Header & Metadata */}
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

      {/* CORE MODULE 6: Related References */}
      {article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0 && (
        <RelatedReferences
          relatedSlugs={article.relatedArticleSlugs}
          onNavigate={onNavigate}
        />
      )}

      {/* CORE MODULE 7: Authoritative Sources & Standards */}
      {article.sources && article.sources.length > 0 && (
        <SourceCitations sources={article.sources} />
      )}

      {/* CORE MODULE 8: Review Date & Trade Safety Disclaimer */}
      <footer className="my-10 pt-6 border-t border-[#E5DFD7] text-xs text-[#78716C] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
          <span>
            Editorial Desk: <strong>{article.reviewer.desk}</strong>
          </span>
          <span>Last Verified: {article.lastReviewedDate}</span>
        </div>
        <p className="italic text-[#78716C] leading-relaxed m-0">
          *Safety & Professional Notice: Home Reference provides practical reference and preventative
          information for educational purposes. Maintenance tasks involving pressurized gas piping,
          refrigerant recovery, main electrical distribution panels, or structural building framing may
          require licensed, insured trade contractors in compliance with local municipal building codes.
        </p>
      </footer>
    </article>
  );
};
