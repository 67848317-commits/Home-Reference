/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReferenceArticleContent } from './config';
import { waterHeaterLifespanArticle } from './reference/water-heater-lifespan';
import { refrigeratorLifespanArticle } from './reference/refrigerator-lifespan';
import { hvacFilterScheduleArticle } from './reference/hvac-filter-schedule';
import { majorComponentsLifespanArticle } from './reference/major-components-lifespan';
import { mainWaterShutoffArticle } from './reference/main-water-shutoff';
import { centralAcLifespanArticle } from './reference/central-ac-lifespan';
import { furnaceLifespanArticle } from './reference/furnace-lifespan-and-replacement';
import { dishwasherLifespanArticle } from './reference/dishwasher-lifespan-and-care';
import { clothesDryerLifespanArticle } from './reference/clothes-dryer-lifespan';
import { circuitBreakerTrippingArticle } from './reference/circuit-breaker-tripping';

/**
 * Phase 2B Batch 1 Flagship Articles Collection
 */
export const BATCH_1_COLLECTION: ReferenceArticleContent[] = [
  waterHeaterLifespanArticle,
  refrigeratorLifespanArticle,
  hvacFilterScheduleArticle,
  majorComponentsLifespanArticle,
  mainWaterShutoffArticle,
];

/**
 * Phase 2B Batch 2 Reference Articles Collection
 */
export const BATCH_2_COLLECTION: ReferenceArticleContent[] = [
  centralAcLifespanArticle,
  furnaceLifespanArticle,
  dishwasherLifespanArticle,
  clothesDryerLifespanArticle,
  circuitBreakerTrippingArticle,
];

/**
 * Complete collection of all authored reference articles (Batches 1 & 2)
 */
export const ALL_AUTHORED_ARTICLES: ReferenceArticleContent[] = [
  ...BATCH_1_COLLECTION,
  ...BATCH_2_COLLECTION,
];

/**
 * Legacy export for backwards compatibility
 */
export const FLAGSHIP_COLLECTION: ReferenceArticleContent[] = ALL_AUTHORED_ARTICLES;

/**
 * Astro-compatible Content Collection query interface
 */
export function getCollection(collectionName: 'reference'): ReferenceArticleContent[] {
  if (collectionName === 'reference') {
    return ALL_AUTHORED_ARTICLES;
  }
  return [];
}

export function getEntry(
  collectionName: 'reference',
  slug: string
): ReferenceArticleContent | undefined {
  if (collectionName === 'reference') {
    return ALL_AUTHORED_ARTICLES.find(
      (article) => article.slug === slug || (article.aliases && article.aliases.includes(slug))
    );
  }
  return undefined;
}
