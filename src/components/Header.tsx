/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Systems', path: '/systems/' },
    { name: 'Appliances', path: '/appliances/' },
    { name: 'Lifespan', path: '/lifespan/' },
    { name: 'Everyday', path: '/everyday/' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
    setMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      window.dispatchEvent(new CustomEvent('open-search'));
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ZONE 1: Single text element wordmark (Display Serif) */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1C1917] hover:text-[#8C4736] transition-colors focus:outline-none"
            >
              Home Reference
            </a>
          </div>

          {/* ZONE 2: Clean text navigation links with subtle underline hover */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium tracking-wide text-[#57534E]">
            {navLinks.map((link) => {
              const isActive = currentPath.startsWith(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`py-1 relative transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#1C1917] font-semibold'
                      : 'hover:text-[#1C1917]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8C4736]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ZONE 3: 1-2 primary secondary actions (About, Search) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              className={`hidden sm:inline-block text-[13px] font-medium transition-colors focus:outline-none ${
                currentPath === '/about/'
                  ? 'text-[#1C1917] font-semibold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              About
            </a>

            <button
              onClick={handleSearchClick}
              aria-label="Search Reference Manual"
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F4EFEA] rounded-md transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8C4736] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#57534E] hover:text-[#1C1917] rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD7] bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPath.startsWith(link.path)
                  ? 'text-[#8C4736] font-semibold'
                  : 'text-[#57534E]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EDE8E1]">
            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPath === '/about/' ? 'text-[#8C4736] font-semibold' : 'text-[#57534E]'
              }`}
            >
              About Home Reference
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
