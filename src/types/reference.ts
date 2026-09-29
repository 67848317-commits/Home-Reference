/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FactTier = 'A' | 'B' | 'C' | 'D';

export type SourceTier = 'government' | 'standards' | 'industry' | 'inspection';

export type SafetyTier =
  | 'Tier 1: Observation'
  | 'Tier 2: Routine Maintenance'
  | 'Tier 3: Professional Diagnosis'
  | 'Tier 4: Licensed Trade Work';

export type SchemaType = 'Article' | 'TechArticle';

export interface Source {
  name: string;
  organization: string;
  tier: SourceTier;
  citation: string;
  url?: string;
}

export interface KeyFact {
  label: string;
  value: string;
  note?: string;
  tier: FactTier;
}

export interface InfluencingFactor {
  title: string;
  impact: string;
}

export interface WarningSigns {
  normal: string[];
  attention: string[];
  immediate: string[];
}

export interface MaintenanceStep {
  step: string;
  frequency: string;
  safetyTier: SafetyTier;
  detail: string;
}

export interface RepairVsReplaceFramework {
  frameworkName: string;
  summary: string;
  keyFactors: string[];
}

export interface CostDriver {
  factor: string;
  detail: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ReferenceArticle {
  id: number;
  title: string;
  slug: string;
  aliases?: string[];
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
  isPilot?: boolean;
  isFeatured?: boolean;
  typicalLifespan?: string;
  lifespanTier?: FactTier;
  maintenanceCadence?: string;
  diagnosticWarning?: string;

  // Modules (Core + Conditional)
  quickAnswer: string;
  keyFacts: KeyFact[];
  detailedExplanation: string[];
  factors?: InfluencingFactor[];
  warningSigns?: WarningSigns;
  maintenanceSteps?: MaintenanceStep[];
  repairVsReplace?: RepairVsReplaceFramework;
  costFactors?: CostDriver[];
  faqs?: FAQ[];
  sources: Source[];
  relatedArticleSlugs: string[];
}

export interface PillarHub {
  id: 'systems' | 'appliances' | 'maintenance' | 'lifespan' | 'costs' | 'everyday';
  name: string;
  slug: string;
  tagline: string;
  scope: string;
  editorialOverview: string;
  commonQuestionsAnswered: string[];
  adjacentPillars: {
    id: string;
    name: string;
    relationship: string;
  }[];
  featuredArticleSlugs: string[];
}
