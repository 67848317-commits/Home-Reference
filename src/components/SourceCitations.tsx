/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Source } from '../types/reference';
import { ExternalLink } from 'lucide-react';

interface SourceCitationsProps {
  sources: Source[];
}

export const SourceCitations: React.FC<SourceCitationsProps> = ({ sources }) => {
  return (
    <section className="my-10 pt-6 border-t border-[#E5DFD7]">
      <h2 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-3">
        Authoritative Sources & Technical Standards
      </h2>
      <ul className="text-xs text-[#57534E] space-y-2 list-none p-0 m-0">
        {sources.map((source, idx) => (
          <li key={idx} className="flex items-start gap-2 leading-relaxed">
            <span className="text-[#8C4736] font-mono text-[11px] shrink-0 uppercase">
              [{source.tier}]
            </span>
            <div>
              <span className="font-semibold text-[#1C1917]">{source.name}</span>
              <span className="text-[#78716C]"> ({source.organization})</span>
              <span className="mx-1.5 text-[#A8A29E]">·</span>
              <span className="italic">{source.citation}</span>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8C4736] hover:underline ml-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
