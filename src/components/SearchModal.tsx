/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchArticles } from '../data/articlesData';
import { ReferenceArticle } from '../types/reference';

interface SearchModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onNavigate?: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onNavigate,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReferenceArticle[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global open trigger & keyboard shortcut
  useEffect(() => {
    const handleOpen = () => {
      setInternalOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setInternalOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('open-search', handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-search', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

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

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
  };

  const handleResultClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      handleClose();
    } else {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Reference Manual"
      className="fixed inset-0 z-50 bg-[#1C1917]/50 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
    >
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
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
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
              <span>Try searching for "water heater", "furnace", "air conditioner", "refrigerator", "circuit breaker", or "dryer vent"</span>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#78716C]">
              No reference articles found matching "{query}".
            </div>
          ) : (
            <div className="divide-y divide-[#EDE8E1]">
              {results.map((article) => (
                <a
                  key={article.slug}
                  href={article.slug}
                  onClick={(e) => handleResultClick(e, article.slug)}
                  className="w-full text-left py-3.5 px-2 hover:bg-[#F4EFEA] transition-colors flex items-start justify-between gap-3 group focus:outline-none block"
                >
                  <div>
                    <div className="text-xs text-[#78716C] mb-0.5">
                      <span>{article.pillarName}</span>
                      <span className="mx-1.5">·</span>
                      <span>{article.subcategory}</span>
                    </div>
                    <div className="font-serif font-bold text-sm sm:text-base text-[#1C1917] group-hover:text-[#8C4736] transition-colors">
                      {article.title}
                    </div>
                    <div className="text-xs text-[#57534E] line-clamp-1 mt-0.5">
                      {article.summary}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#8C4736] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-4 py-2 bg-[#F4EFEA] border-t border-[#E5DFD7] text-[11px] text-[#78716C] flex items-center justify-between">
          <span>Search published household reference manuals</span>
          <span className="font-mono">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
