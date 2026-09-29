/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RepairVsReplaceFramework } from '../types/reference';

interface RepairVsReplaceProps {
  framework: RepairVsReplaceFramework;
}

export const RepairVsReplace: React.FC<RepairVsReplaceProps> = ({ framework }) => {
  return (
    <section className="my-10 p-6 bg-[#F4EFEA] border-t-2 border-[#1C1917]">
      <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-1">
        Decision Framework
      </div>
      <h2 className="text-lg font-serif font-bold text-[#1C1917] mb-3">
        {framework.frameworkName}
      </h2>
      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
        {framework.summary}
      </p>
      <div className="pt-3 border-t border-[#E5DFD7]">
        <div className="text-xs font-semibold text-[#1C1917] mb-2">
          Key Evaluation Criteria:
        </div>
        <ul className="text-xs text-[#57534E] space-y-1.5 list-none p-0 m-0">
          {framework.keyFactors.map((factor, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#8C4736] font-bold">—</span>
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
