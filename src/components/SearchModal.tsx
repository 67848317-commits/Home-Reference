/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchArticles } from '../data/articlesData';
import { ReferenceArticle } from '../types/reference';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReferenceArticle[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1917]/50 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="bg-[#FAF8F5] border border-[#E5DFD7] shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5DFD7] bg-white">
          <Search className="w-4 h-4 text-[#78716C] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search home systems, appliances, maintenance cadences..."
            className="w-full text-sm bg-transparent border-0 focus:outline-none text-[#1C1917] placeholder:text-[#A8A29E]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#78716C] hover:text-[#1C1917] mr-1 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#78716C] hover:text-[#1C1917] px-2 py-1 rounded bg-[#F4EFEA] border border-[#E5DFD7]"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 flex-1">
          {query.trim().length < 2 ? (
            <div className="text-center py-10 text-xs text-[#78716C]">
              <span className="font-serif italic block text-sm mb-1 text-[#57534E]">
                What household question do you need answered?
              </span>
              <span>Try searching for "water heater", "refrigerator coils", "air filter", or "shutoff valve"</span>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#78716C]">
              No reference articles found matching "{query}".
            </div>
          ) : (
            <div className="divide-y divide-[#EDE8E1]">
              {results.map((article) => (
                <button
                  key={article.slug}
                  onClick={() => {
                    onNavigate(article.slug);
                    onClose();
                  }}
                  className="w-full text-left py-3.5 px-2 hover:bg-[#F4EFEA] transition-colors flex items-start justify-between gap-3 group focus:outline-none"
                >
                  <div>
                    <div className="text-xs text-[#78716C] mb-0.5">
                      <span>{article.pillarName}</span>
                      <span className="mx-1.5">·</span>
                      <span>{article.subcategory}</span>
                    </div>
                    <div className="font-serif font-medium text-sm text-[#1C1917] group-hover:text-[#8C4736] transition-colors">
                      {article.title}
                    </div>
                    <p className="text-xs text-[#57534E] line-clamp-1 mt-1">
                      {article.summary}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#8C4736] shrink-0 mt-1 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
