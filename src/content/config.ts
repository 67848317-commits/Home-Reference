/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FactTier, SourceTier, SafetyTier, SchemaType } from '../types/reference';

export interface ContentSource {
  name: string;
  organization: string;
  tier: SourceTier;
  citation: string;
  url?: string;
}

export interface ContentKeyFact {
  label: string;
  value: string;
  note?: string;
  tier: FactTier;
}

export interface ContentInfluencingFactor {
  title: string;
  impact: string;
}

export interface ContentWarningSigns {
  normal: string[];
  attention: string[];
  immediate: string[];
}

export interface ContentMaintenanceStep {
  step: string;
  frequency: string;
  safetyTier: SafetyTier;
  detail: string;
}

export interface ContentRepairVsReplace {
  frameworkName: string;
  summary: string;
  keyFactors: string[];
}

export interface ContentCostDriver {
  factor: string;
  detail: string;
}

export interface ContentFAQ {
  question: string;
  answer: string;
}

export interface ReferenceArticleContent {
  id: number;
  slug: string; // e.g. "/systems/water-heater-lifespan-and-replacement/"
  aliases?: string[]; // Alternate paths that resolve to this article
  title: string;
  pillarId: 'systems' | 'appliances' | 'maintenance' | 'lifespan' | 'costs' | 'everyday';
  pillarName: string;
  subcategory: string;
  searchIntent: string;
  purpose?: string;
  summary: string;
  metaDescription: string;
  publishedDate: string;
  lastReviewedDate: string;
  reviewer: {
    name: string;
    desk: string;
  };
  readTime: string;
  schemaType: SchemaType;
  isPilot: boolean;
  isFeatured: boolean;
  typicalLifespan?: string;
  lifespanTier?: FactTier;
  maintenanceCadence?: string;
  diagnosticWarning?: string;

  // Core Modules
  quickAnswer: string;
  keyFacts: ContentKeyFact[];
  detailedExplanation: string[];
  sources: ContentSource[];
  relatedArticleSlugs: string[];

  // Conditional Modules (Optional - only included when genuinely relevant)
  factors?: ContentInfluencingFactor[];
  warningSigns?: ContentWarningSigns;
  maintenanceSteps?: ContentMaintenanceStep[];
  repairVsReplace?: ContentRepairVsReplace;
  costFactors?: ContentCostDriver[];
  faqs?: ContentFAQ[];
}
