/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getArticleBySlug } from '../data/articlesData';

interface RelatedReferencesProps {
  relatedSlugs: string[];
  onNavigate?: (path: string) => void;
}

export const RelatedReferences: React.FC<RelatedReferencesProps> = ({ relatedSlugs, onNavigate }) => {
  // Only link to genuinely authored and published articles
  const articles = relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  if (articles.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <section className="my-10 pt-6 border-t border-[#E5DFD7]">
      <h2 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-3">
        Related References
      </h2>
      <div className="divide-y divide-[#EDE8E1]">
        {articles.map((item) => (
          <div key={item.slug} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <a
              href={item.slug}
              onClick={(e) => handleClick(e, item.slug)}
              className="text-left font-serif font-medium text-sm sm:text-base text-[#1C1917] hover:text-[#8C4736] transition-colors"
            >
              {item.title}
            </a>
            <div className="flex items-center gap-2 text-xs text-[#78716C] shrink-0 font-sans">
              <span>{item.pillarName}</span>
              <span aria-hidden="true">·</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
