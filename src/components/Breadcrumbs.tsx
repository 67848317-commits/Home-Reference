/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-[#78716C] mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#1C1917] transition-colors focus:outline-none"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-[#A8A29E]">
                ·
              </li>
              <li>
                {isLast || !item.path ? (
                  <span className="text-[#1C1917] font-medium" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="hover:text-[#1C1917] transition-colors focus:outline-none"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
