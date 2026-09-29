/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { KeyFact } from '../types/reference';

interface KeyFactsTableProps {
  facts: KeyFact[];
}

export const KeyFactsTable: React.FC<KeyFactsTableProps> = ({ facts }) => {
  return (
    <section className="my-10">
      <h2 className="text-xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
        Key Facts & Baseline Reference
      </h2>
      <div className="overflow-x-auto border-t border-b border-[#E5DFD7]">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#E5DFD7] text-[#78716C] font-mono text-[11px] uppercase tracking-wider">
              <th className="py-3 pr-4 font-semibold">Parameter</th>
              <th className="py-3 px-4 font-semibold">Benchmark Range</th>
              <th className="py-3 px-4 font-semibold text-center w-20">Fact Tier</th>
              <th className="py-3 pl-4 font-semibold">Context & Nuance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE8E1]">
            {facts.map((fact, index) => (
              <tr key={index} className="hover:bg-[#F4EFEA]/50 transition-colors">
                <td className="py-3.5 pr-4 font-medium text-[#1C1917] min-w-[130px]">
                  {fact.label}
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-[#1C1917] tabular-nums whitespace-nowrap">
                  {fact.value}
                </td>
                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <span className="font-mono text-[11px] text-[#78716C]">
                    Tier {fact.tier}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-[#57534E] leading-relaxed min-w-[180px]">
                  {fact.note || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-[#78716C] italic font-sans">
        *Fact Tiers: Tier A = Documented Standard / Statutory Rule; Tier B = Practical Household Heuristic; Tier C = Variable Planning Benchmark.
      </p>
    </section>
  );
};
