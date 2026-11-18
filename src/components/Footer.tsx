/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="border-t border-[#E5DFD7] bg-[#F4EFEA] text-[#57534E] text-xs pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <span className="font-serif text-lg font-bold text-[#1C1917] block">
              Home Reference
            </span>
            <p className="text-xs leading-relaxed text-[#78716C]">
              A practical, non-commercial digital reference manual helping U.S. households understand,
              maintain, and make informed decisions about their home systems and appliances.
            </p>
          </div>

          {/* Pillars Column 1 */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
              Infrastructure & Equipment
            </span>
            <ul className="space-y-1.5 list-none p-0 m-0">
              <li>
                <a
                  href="/systems/"
                  onClick={(e) => handleClick(e, '/systems/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Home Systems
                </a>
              </li>
              <li>
                <a
                  href="/appliances/"
                  onClick={(e) => handleClick(e, '/appliances/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Appliances
                </a>
              </li>
              <li>
                <a
                  href="/maintenance/"
                  onClick={(e) => handleClick(e, '/maintenance/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Home Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Pillars Column 2 */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
              Lifespans & Guides
            </span>
            <ul className="space-y-1.5 list-none p-0 m-0">
              <li>
                <a
                  href="/lifespan/"
                  onClick={(e) => handleClick(e, '/lifespan/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Lifespan & Replacement
                </a>
              </li>
              <li>
                <a
                  href="/everyday/"
                  onClick={(e) => handleClick(e, '/everyday/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Everyday Knowledge
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial & Standards Column */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
              Editorial Standards
            </span>
            <ul className="space-y-1.5 list-none p-0 m-0">
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handleClick(e, '/about/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  About & Methodology
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handleClick(e, '/about/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Authoritative Source Hierarchy
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handleClick(e, '/about/')}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Trade Safety Boundaries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety & Educational Disclaimer */}
        <div className="pt-6 border-t border-[#E5DFD7]/80 text-[11px] leading-relaxed text-[#78716C] space-y-2">
          <p>
            <strong>Educational Reference Notice:</strong> Home Reference provides general reference
            and preventative guidance for homeowners and occupants. It does not provide licensed
            architectural, structural engineering, electrical, plumbing, or HVAC contracting services.
            Maintenance involving pressurized gas lines, high-voltage electrical distribution, or
            structural framing may require licensed, insured trade contractors in accordance with local
            municipal building codes.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 text-[#A8A29E]">
            <span>© {new Date().getFullYear()} Home Reference. All rights reserved.</span>
            <span>Independent U.S. Household Reference · Editorial Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
