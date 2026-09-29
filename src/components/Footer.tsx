/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/systems/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Home Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/appliances/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Appliances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/maintenance/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Home Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Pillars Column 2 */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
              Lifespans & Economics
            </span>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/lifespan/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Lifespan & Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/costs/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Costs & Ownership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/everyday/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Everyday Knowledge
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial & Standards Column */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917] font-semibold block">
              Editorial Standards
            </span>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  About & Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Authoritative Source Hierarchy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-[#1C1917] transition-colors focus:outline-none"
                >
                  Trade Safety Boundaries
                </button>
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
            <span>Static Site Architecture · Version 2.0 (Phase 2A Scaffold)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
