/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface Crumb {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: Crumb[];
  onNavigate?: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-[#78716C] mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li>
          <a
            href="/"
            onClick={(e) => handleClick(e, '/')}
            className="hover:text-[#1C1917] transition-colors"
          >
            Home
          </a>
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
                  <a
                    href={item.path}
                    onClick={(e) => handleClick(e, item.path!)}
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
