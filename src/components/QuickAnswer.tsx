/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface QuickAnswerProps {
  answer: string;
}

export const QuickAnswer: React.FC<QuickAnswerProps> = ({ answer }) => {
  return (
    <aside
      aria-label="Quick Reference Answer"
      className="my-8 p-6 bg-[#F4EFEA] border-l-3 border-[#8C4736] text-[#1C1917]"
    >
      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8C4736] font-semibold mb-2">
        Quick Reference Summary
      </div>
      <p className="text-base sm:text-lg leading-relaxed font-serif text-[#1C1917] m-0">
        {answer}
      </p>
    </aside>
  );
};
