/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, ArrowRight, ArrowUpRight, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { PILLARS_DATA } from '../data/pillarsData';
import { getFeaturedArticles, getPilotArticles } from '../data/articlesData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSearch }) => {
  const featuredArticles = getFeaturedArticles();
  const leadArticle = featuredArticles[0];
  const secondaryArticles = featuredArticles.slice(1, 4);

  const alphabeticalIndex = [
    { topic: 'Air Conditioners & Heat Pumps', path: '/systems/central-ac-lifespan-and-efficiency/', category: 'Systems' },
    { topic: 'Appliance Repair vs. Replace Rule', path: '/costs/appliance-repair-vs-replace-rules/', category: 'Costs' },
    { topic: 'Circuit Breaker Tripping Diagnostics', path: '/everyday/what-to-do-when-circuit-breaker-trips/', category: 'Everyday' },
    { topic: 'Clothes Dryers & Vent Fire Safety', path: '/appliances/clothes-dryer-lifespan-and-vent-safety/', category: 'Appliances' },
    { topic: 'Dishwasher Care & Filter Cleaning', path: '/appliances/dishwasher-lifespan-and-care/', category: 'Appliances' },
    { topic: 'Emergency Water Shutoff Location', path: '/everyday/main-water-shutoff/', category: 'Everyday' },
    { topic: 'Furnace Lifespans & Heat Exchangers', path: '/systems/furnace-lifespan-and-warning-signs/', category: 'Systems' },
    { topic: 'HVAC Air Filter Schedule (MERV)', path: '/maintenance/hvac-filter-replacement-schedule/', category: 'Maintenance' },
    { topic: 'Master Home Component Lifespans', path: '/lifespan/major-home-components-lifespan/', category: 'Lifespan' },
    { topic: 'Refrigerator Lifespan & Coils', path: '/appliances/refrigerator-lifespan-and-maintenance/', category: 'Appliances' },
    { topic: 'Roof Shingles: 3-Tab vs Architectural', path: '/systems/asphalt-shingle-roof-lifespan/', category: 'Systems' },
    { topic: 'Smoke & CO Alarm 10-Year Rule', path: '/lifespan/smoke-and-co-detector-expiration-rules/', category: 'Lifespan' },
    { topic: 'Water Heater Lifespan & Flushing', path: '/systems/water-heater-lifespan-and-replacement/', category: 'Systems' },
    { topic: 'Window Seal Failure & Fogging', path: '/systems/window-lifespan-and-seal-failure/', category: 'Systems' },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* SECTION 1: EDITORIAL INTRODUCTION & RESTRAINED SEARCH */}
      <section className="border-b border-[#E5DFD7] pb-12 sm:pb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#78716C] mb-3">
            U.S. Household Knowledge & Reference Manual
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.15] mb-6">
            A practical guide to understanding, maintaining, and caring for the things that make a home work.
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed mb-8 font-serif">
            Home Reference is an objective reference library for American homeowners, buyers, and
            tenants. We synthesize trade standards, empirical lifespans, diagnostic warning signs, and
            maintenance cadences into calm, verifiable answers.
          </p>

          {/* Restrained Search Trigger */}
          <div className="relative max-w-xl">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#E5DFD7] hover:border-[#8C4736] transition-colors text-left text-sm text-[#78716C] shadow-2xs group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8C4736]"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-[#78716C] group-hover:text-[#8C4736] transition-colors" />
                <span>Search systems, appliances, or symptoms...</span>
              </div>
              <span className="text-xs font-mono text-[#A8A29E] bg-[#F4EFEA] px-2 py-0.5 border border-[#E5DFD7]">
                Ctrl + K
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED REFERENCES (MAGAZINE STYLE ASYMMETRIC COMPOSITION) */}
      {leadArticle && (
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-[#E5DFD7] pb-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#1C1917] font-semibold">
              Featured Reference Guides
            </h2>
            <span className="text-xs text-[#78716C]">Editorial Selections</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lead Story (7 cols) */}
            <div className="lg:col-span-7 space-y-3 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E5DFD7] pb-8 lg:pb-0">
              <div className="text-xs text-[#78716C] flex items-center gap-2">
                <span className="font-semibold text-[#8C4736]">{leadArticle.pillarName}</span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>Reviewed {leadArticle.lastReviewedDate}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight hover:text-[#8C4736] transition-colors">
                <button onClick={() => onNavigate(leadArticle.slug)} className="text-left focus:outline-none">
                  {leadArticle.title}
                </button>
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed font-sans">
                {leadArticle.summary}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(leadArticle.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4736] hover:text-[#1C1917] transition-colors"
                >
                  Read Reference Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Secondary Features (5 cols) */}
            <div className="lg:col-span-5 space-y-6 divide-y divide-[#EDE8E1]">
              {secondaryArticles.map((article, idx) => (
                <div key={article.slug} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="text-xs text-[#78716C] mb-1 flex items-center gap-2">
                    <span className="font-medium text-[#57534E]">{article.pillarName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1C1917] hover:text-[#8C4736] transition-colors">
                    <button onClick={() => onNavigate(article.slug)} className="text-left focus:outline-none">
                      {article.title}
                    </button>
                  </h4>
                  <p className="text-xs text-[#57534E] line-clamp-2 mt-1 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: THE SIX CONTENT PILLARS (DIRECTORY STYLE) */}
      <section className="space-y-6">
        <div className="border-b border-[#E5DFD7] pb-2 flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#1C1917] font-semibold">
            Browse by Subject Area
          </h2>
          <span className="text-xs text-[#78716C]">The Six Pillars</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 bg-white border border-[#E5DFD7] flex flex-col justify-between hover:border-[#1C1917] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#78716C] block mb-1">
                  {pillar.slug}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">
                  <button
                    onClick={() => onNavigate(pillar.slug)}
                    className="text-left hover:text-[#8C4736] transition-colors focus:outline-none"
                  >
                    {pillar.name}
                  </button>
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                  {pillar.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE8E1] flex items-center justify-between text-xs">
                <button
                  onClick={() => onNavigate(pillar.slug)}
                  className="inline-flex items-center gap-1 font-semibold text-[#8C4736] hover:text-[#1C1917] transition-colors"
                >
                  Explore Pillar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ALPHABETICAL HOUSEHOLD REFERENCE INDEX */}
      <section className="space-y-6">
        <div className="border-b border-[#E5DFD7] pb-2 flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#1C1917] font-semibold">
            Household Reference Index
          </h2>
          <span className="text-xs text-[#78716C]">Quick Topic Directory</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 border-t border-[#E5DFD7] pt-4 text-xs">
          {alphabeticalIndex.map((item, idx) => (
            <div key={idx} className="flex items-baseline justify-between py-1.5 border-b border-[#EDE8E1]">
              <button
                onClick={() => onNavigate(item.path)}
                className="text-left font-serif text-[13px] text-[#1C1917] hover:text-[#8C4736] transition-colors focus:outline-none truncate mr-2"
              >
                {item.topic}
              </button>
              <span className="text-[11px] font-mono text-[#78716C] shrink-0">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: EDITORIAL METHODOLOGY & ETHICS STRIP */}
      <section className="p-8 bg-[#F4EFEA] border-t border-b border-[#E5DFD7] text-xs space-y-3">
        <div className="flex items-center gap-2 text-[#1C1917] font-semibold text-sm font-serif">
          <ShieldCheck className="w-4 h-4 text-[#8C4736]" />
          Editorial Independence & Trade Rigor
        </div>
        <p className="text-[#57534E] leading-relaxed max-w-3xl m-0">
          Home Reference is funded without contractor referral fees, lead-generation popups, or
          sponsored appliance placements. Every reference benchmark is grounded in public consensus
          standards (ASHRAE, NFPA, DOE, AHAM) and inspected regularly by our editorial desk.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('/about/')}
            className="text-xs font-semibold text-[#8C4736] hover:underline focus:outline-none"
          >
            Read our source hierarchy & editorial methodology →
          </button>
        </div>
      </section>
    </div>
  );
};
