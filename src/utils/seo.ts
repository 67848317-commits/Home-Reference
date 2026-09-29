/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReferenceArticle, PillarHub } from '../types/reference';

export const SITE_METADATA = {
  name: 'Home Reference',
  workingTitle: 'Home Reference',
  siteUrl: 'https://home-reference.org',
  tagline: 'Understand your home. Maintain it better. Make informed household decisions.',
  description:
    'A practical digital household reference manual for American homes. Authoritative explanations, realistic lifespan benchmarks, warning signs, and maintenance schedules for home systems and appliances.',
  publisher: {
    '@type': 'Organization',
    name: 'Home Reference Editorial Staff',
    url: 'https://home-reference.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://home-reference.org/logo.png',
    },
  },
};

/**
 * Generate Schema.org WebSite & Organization structured data
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_METADATA.siteUrl}/#website`,
        url: SITE_METADATA.siteUrl,
        name: SITE_METADATA.name,
        description: SITE_METADATA.description,
        publisher: {
          '@id': `${SITE_METADATA.siteUrl}/#organization`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_METADATA.siteUrl}/#organization`,
        name: SITE_METADATA.name,
        url: SITE_METADATA.siteUrl,
        sameAs: [],
      },
    ],
  };
}

/**
 * Generate Schema.org BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${SITE_METADATA.siteUrl}${crumb.item}`,
    })),
  };
}

/**
 * Generate Schema.org Article / TechArticle structured data
 */
export function generateArticleSchema(article: ReferenceArticle) {
  const schemaType = article.schemaType || 'Article';

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_METADATA.siteUrl}${article.slug}`,
    },
    headline: article.title,
    description: article.metaDescription,
    articleSection: article.pillarName,
    datePublished: article.publishedDate,
    dateModified: article.lastReviewedDate,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: article.reviewer?.name ? `Home Reference (${article.reviewer.desk})` : 'Home Reference Editorial Staff',
    },
    publisher: SITE_METADATA.publisher,
  };

  // Add FAQs if present and valid
  if (article.faqs && article.faqs.length > 0) {
    schema.hasPart = article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }));
  }

  return schema;
}

/**
 * Generate simulated XML Sitemap
 */
export function generateSitemapXml(articles: ReferenceArticle[], pillars: PillarHub[]): string {
  const urls: string[] = [
    `${SITE_METADATA.siteUrl}/`,
    `${SITE_METADATA.siteUrl}/about/`,
    ...pillars.map((p) => `${SITE_METADATA.siteUrl}${p.slug}`),
    ...articles.map((a) => `${SITE_METADATA.siteUrl}${a.slug}`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u}</loc>
    <changefreq>monthly</changefreq>
    <priority>${u.endsWith('/') && u.split('/').length === 4 ? '0.8' : u.endsWith('/') ? '1.0' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

/**
 * Generate robots.txt
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_METADATA.siteUrl}/sitemap.xml
`;
}
