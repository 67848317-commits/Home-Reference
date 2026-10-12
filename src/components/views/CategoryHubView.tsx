/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { PillarHub } from '../../types/reference';
import { getArticlesByPillar } from '../../data/articlesData';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface CategoryHubViewProps {
  pillar: PillarHub;
  onNavigate?: (path: string) => void;
}

export const CategoryHubView: React.FC<CategoryHubViewProps> = ({ pillar, onNavigate }) => {
  const publishedArticles = getArticlesByPillar(pillar.id);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: pillar.name }]} onNavigate={onNavigate} />

      {/* Category Header & Editorial Essay */}
      <header className="space-y-4 border-b border-[#E5DFD7] pb-8">
        <div className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
          Pillar Reference Hub · {pillar.slug}
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
          {pillar.name}
        </h1>
        <p className="text-lg font-serif text-[#1C1917] italic leading-relaxed">
          {pillar.tagline}
        </p>
        <p className="text-sm text-[#57534E] leading-relaxed font-sans pt-2">
          {pillar.editorialOverview}
        </p>
      </header>

      {/* Scope Statement */}
      <section className="p-6 bg-[#F4EFEA] border-l-2 border-[#1C1917] text-xs space-y-2">
        <span className="font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
          Scope & Inclusions
        </span>
        <p className="text-[#57534E] leading-relaxed m-0">{pillar.scope}</p>
      </section>

      {/* Core Household Questions Answered */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#1C1917] font-semibold border-b border-[#E5DFD7] pb-2">
          Core Questions Addressed in this Hub
        </h2>
        <div className="grid grid-cols-1 gap-2.5">
          {pillar.commonQuestionsAnswered.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#57534E]">
              <HelpCircle className="w-3.5 h-3.5 text-[#8C4736] mt-0.5 shrink-0" />
              <span className="leading-relaxed">{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Published Reference Guides */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between border-b border-[#E5DFD7] pb-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#1C1917] font-semibold">
            Published Reference Guides
          </h2>
          <span className="text-xs text-[#78716C]">Verified Technical Manuals</span>
        </div>

        {publishedArticles.length > 0 ? (
          <div className="divide-y divide-[#E5DFD7]">
            {publishedArticles.map((article) => (
              <div key={article.slug} className="py-5 space-y-2 group">
                <div className="flex items-center gap-2 text-xs text-[#78716C]">
                  <span className="font-semibold text-[#8C4736]">{article.subcategory}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>Reviewed {article.lastReviewedDate}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917] group-hover:text-[#8C4736] transition-colors">
                  <a
                    href={article.slug}
                    onClick={(e) => handleLinkClick(e, article.slug)}
                    className="text-left focus:outline-none"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {article.summary}
                </p>
                <div className="pt-1">
                  <a
                    href={article.slug}
                    onClick={(e) => handleLinkClick(e, article.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4736] hover:underline"
                  >
                    Open Reference Manual
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 bg-white border border-[#E5DFD7] text-xs text-[#78716C] space-y-1">
            <p className="font-medium text-[#1C1917]">
              Reference guides for this hub are currently in active editorial production.
            </p>
            <p className="m-0">
              Guides under this pillar are authored according to strict source verification standards and will be published upon review.
            </p>
          </div>
        )}
      </section>

      {/* Adjacent Pillars & Cross-Pillar Relationships */}
      <section className="space-y-4 pt-6 border-t border-[#E5DFD7]">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
          Adjacent Reference Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillar.adjacentPillars.map((adj) => (
            <div key={adj.id} className="p-4 bg-white border border-[#E5DFD7] space-y-2">
              <h3 className="font-serif font-bold text-sm text-[#1C1917]">
                <a
                  href={`/${adj.id}/`}
                  onClick={(e) => handleLinkClick(e, `/${adj.id}/`)}
                  className="hover:text-[#8C4736] transition-colors focus:outline-none"
                >
                  {adj.name} →
                </a>
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed m-0">
                {adj.relationship}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
