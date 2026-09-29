/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CostDriver } from '../types/reference';

interface CostDriversProps {
  drivers: CostDriver[];
}

export const CostDrivers: React.FC<CostDriversProps> = ({ drivers }) => {
  return (
    <section className="my-10">
      <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-2">
        What Dictates Replacement Costs
      </h2>
      <p className="text-xs text-[#78716C] mb-4">
        Rather than relying on a single national flat rate, evaluate the primary variables that dictate contractor estimates in your market.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E5DFD7] pt-4">
        {drivers.map((item, idx) => (
          <div key={idx} className="p-4 bg-[#F4EFEA]/60 border border-[#E5DFD7]">
            <h3 className="text-xs font-semibold text-[#1C1917] mb-1 font-mono uppercase tracking-wider">
              {item.factor}
            </h3>
            <p className="text-xs leading-relaxed text-[#57534E] m-0">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
