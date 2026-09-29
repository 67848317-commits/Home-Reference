/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MaintenanceStep } from '../types/reference';

interface MaintenanceGuideProps {
  steps: MaintenanceStep[];
}

export const MaintenanceGuide: React.FC<MaintenanceGuideProps> = ({ steps }) => {
  return (
    <section className="my-10">
      <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
        Recommended Maintenance Routines
      </h2>
      <div className="space-y-4 border-t border-[#E5DFD7] pt-4">
        {steps.map((item, idx) => (
          <div key={idx} className="pb-4 border-b border-[#EDE8E1] last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <h3 className="text-sm font-semibold text-[#1C1917]">
                {idx + 1}. {item.step}
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#78716C]">
                <span className="font-mono text-[#57534E]">{item.frequency}</span>
                <span aria-hidden="true">·</span>
                <span className="italic">{item.safetyTier}</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#57534E] m-0">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
