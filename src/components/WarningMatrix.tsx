/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WarningSigns } from '../types/reference';

interface WarningMatrixProps {
  warnings: WarningSigns;
}

export const WarningMatrix: React.FC<WarningMatrixProps> = ({ warnings }) => {
  return (
    <section className="my-10">
      <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
        Diagnostic Warning Signs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-[#E5DFD7]">
        {/* Normal Operation */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#57534E] font-semibold border-b border-[#E5DFD7] pb-1">
            Normal Operation
          </div>
          <ul className="text-xs text-[#57534E] space-y-2 list-none p-0 m-0">
            {warnings.normal.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#78716C] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Needs Attention */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#8C4736] font-semibold border-b border-[#E5DFD7] pb-1">
            Needs Attention / Inspection
          </div>
          <ul className="text-xs text-[#57534E] space-y-2 list-none p-0 m-0">
            {warnings.attention.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#8C4736] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Immediate Action */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#991B1B] font-semibold border-b border-[#E5DFD7] pb-1">
            Immediate Action Required
          </div>
          <ul className="text-xs text-[#57534E] space-y-2 list-none p-0 m-0">
            {warnings.immediate.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#991B1B] mt-0.5 font-bold">!</span>
                <span className="font-medium text-[#1C1917]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
