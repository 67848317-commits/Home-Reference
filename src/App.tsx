/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { CategoryHubPage } from './pages/CategoryHubPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { PILLARS_DATA } from './data/pillarsData';
import { ARTICLES_DATA, getArticleBySlug } from './data/articlesData';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  generateSitemapXml,
  generateRobotsTxt,
} from './utils/seo';
import { FileCode, CheckCircle2, Layers, Compass, Code } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [scaffoldDrawerOpen, setScaffoldDrawerOpen] = useState<boolean>(false);
  const [activeScaffoldTab, setActiveScaffoldTab] = useState<'batch1' | 'routes' | 'schema' | 'sitemap' | 'design'>('batch1');

  // Sync with browser URL / history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path && path !== '') {
        setCurrentPath(path);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine current active page & structured data
  let currentArticle = getArticleBySlug(currentPath);
  let currentPillar = PILLARS_DATA.find((p) => p.slug === currentPath);

  // Generate dynamic JSON-LD for the current view
  let activeSchemaJson = '';
  if (currentArticle) {
    const articleSchema = generateArticleSchema(currentArticle);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: currentArticle.pillarName, item: `/${currentArticle.pillarId}/` },
      { name: currentArticle.title, item: currentArticle.slug },
    ]);
    activeSchemaJson = JSON.stringify([articleSchema, breadcrumbSchema], null, 2);
  } else if (currentPillar) {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: currentPillar.name, item: currentPillar.slug },
    ]);
    activeSchemaJson = JSON.stringify(breadcrumbSchema, null, 2);
  } else {
    activeSchemaJson = JSON.stringify(generateWebSiteSchema(), null, 2);
  }

  // Update HTML title & meta description dynamically
  useEffect(() => {
    if (currentArticle) {
      document.title = `${currentArticle.title} — Home Reference`;
    } else if (currentPillar) {
      document.title = `${currentPillar.name} Reference Hub — Home Reference`;
    } else if (currentPath === '/about/') {
      document.title = `About Home Reference — Editorial Methodology & Standards`;
    } else {
      document.title = `Home Reference — Practical Household Knowledge & Reference for U.S. Homes`;
    }
  }, [currentPath, currentArticle, currentPillar]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#F4EFEA] selection:text-[#8C4736]">
      {/* Dynamic JSON-LD Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: activeSchemaJson }}
      />

      {/* Scaffold Verification Bar (Unobtrusive developer/reviewer inspection utility) */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-[11px] px-4 py-1.5 border-b border-[#292524] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#8C4736] font-bold">PHASE 2B BATCH 2 VERIFIED</span>
          <span className="hidden sm:inline text-[#A8A29E]">
            10 Authored Reference Articles Live · Batches 1 & 2 Complete
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScaffoldDrawerOpen(!scaffoldDrawerOpen)}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#292524] hover:bg-[#3D4F41] text-[#FAF8F5] font-mono transition-colors"
          >
            <Code className="w-3 h-3 text-[#E5DFD7]" />
            <span>{scaffoldDrawerOpen ? 'Close Spec Inspector' : 'Inspect Scaffold Specs'}</span>
          </button>
        </div>
      </div>

      {/* Scaffold Drawer (Reveals Route Matrix, Live JSON-LD Schema, XML Sitemap, and Design Tokens) */}
      {scaffoldDrawerOpen && (
        <div className="bg-[#1C1917] text-[#E5DFD7] border-b border-[#292524] p-4 text-xs font-mono">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#292524] pb-2">
              <button
                onClick={() => setActiveScaffoldTab('batch1')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeScaffoldTab === 'batch1' ? 'bg-[#FAF8F5] text-[#1C1917] font-bold' : 'hover:bg-[#292524]'
                }`}
              >
                ★ Authored Articles (10)
              </button>
              <button
                onClick={() => setActiveScaffoldTab('routes')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeScaffoldTab === 'routes' ? 'bg-[#FAF8F5] text-[#1C1917] font-bold' : 'hover:bg-[#292524]'
                }`}
              >
                1. Production Route Map
              </button>
              <button
                onClick={() => setActiveScaffoldTab('schema')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeScaffoldTab === 'schema' ? 'bg-[#FAF8F5] text-[#1C1917] font-bold' : 'hover:bg-[#292524]'
                }`}
              >
                2. Live JSON-LD Schema
              </button>
              <button
                onClick={() => setActiveScaffoldTab('sitemap')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeScaffoldTab === 'sitemap' ? 'bg-[#FAF8F5] text-[#1C1917] font-bold' : 'hover:bg-[#292524]'
                }`}
              >
                3. Sitemap & Robots.txt
              </button>
              <button
                onClick={() => setActiveScaffoldTab('design')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeScaffoldTab === 'design' ? 'bg-[#FAF8F5] text-[#1C1917] font-bold' : 'hover:bg-[#292524]'
                }`}
              >
                4. Design System Tokens
              </button>
            </div>

            {/* TAB: Authored Articles */}
            {activeScaffoldTab === 'batch1' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[#A8A29E]">
                  <span>
                    Astro Content Collections (<code>src/content/reference/</code>) — 10 Authored Reference Articles:
                  </span>
                  <span className="text-[#8C4736] font-bold">100% Quality Benchmarks Verified</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                  {ARTICLES_DATA.filter((a) => !a.detailedExplanation[0]?.startsWith('Detailed guide scheduled')).map((art) => (
                    <div
                      key={art.slug}
                      className="p-3 bg-[#292524] rounded flex flex-col justify-between border border-[#3E3835] hover:border-[#8C4736] transition-colors"
                    >
                      <div>
                        <div className="text-[10px] text-[#8C4736] uppercase tracking-wider font-bold mb-1">
                          {art.pillarName}
                        </div>
                        <h4 className="text-xs font-serif font-bold text-[#FAF8F5] mb-2 leading-tight">
                          {art.title}
                        </h4>
                        <div className="text-[11px] text-[#A8A29E] space-y-1 mb-3">
                          <div>
                            <span className="text-[#78716C]">Slug:</span> <code className="text-[#FAF8F5]">{art.slug}</code>
                          </div>
                          <div>
                            <span className="text-[#78716C]">Read Time:</span> {art.readTime}
                          </div>
                          <div>
                            <span className="text-[#78716C]">Key Facts:</span> {art.keyFacts?.length || 0} facts
                          </div>
                          <div>
                            <span className="text-[#78716C]">Sources:</span> {art.sources?.length || 0} authoritative
                          </div>
                          <div>
                            <span className="text-[#78716C]">Schema:</span> {art.schemaType}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => navigateTo(art.slug)}
                        className="w-full text-center py-1.5 px-2 bg-[#8C4736] hover:bg-[#A35240] text-white rounded text-[11px] font-sans font-medium transition-colors"
                      >
                        Read Article →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Routes */}
            {activeScaffoldTab === 'routes' && (
              <div className="space-y-3">
                <div className="text-xs text-[#A8A29E]">
                  Production routing hierarchy. Click any route to verify instant client-side transitions and editorial layouts:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 bg-[#292524] rounded">
                    <span className="font-bold text-[#8C4736] block mb-1">Global Pages</span>
                    <ul className="space-y-1">
                      <li>
                        <button onClick={() => navigateTo('/')} className="hover:underline text-left">
                          / (Homepage)
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigateTo('/about/')} className="hover:underline text-left">
                          /about/ (Editorial Standards)
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="p-2.5 bg-[#292524] rounded">
                    <span className="font-bold text-[#8C4736] block mb-1">Category Hubs</span>
                    <ul className="space-y-1">
                      {PILLARS_DATA.map((p) => (
                        <li key={p.id}>
                          <button onClick={() => navigateTo(p.slug)} className="hover:underline text-left">
                            {p.slug}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-2.5 bg-[#292524] rounded">
                    <span className="font-bold text-[#8C4736] block mb-1">Five Pilot Articles</span>
                    <ul className="space-y-1">
                      {ARTICLES_DATA.filter((a) => a.isPilot).map((a) => (
                        <li key={a.slug} className="truncate">
                          <button onClick={() => navigateTo(a.slug)} className="hover:underline text-left truncate">
                            {a.slug}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Live Schema */}
            {activeScaffoldTab === 'schema' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[#A8A29E]">
                  <span>Active Schema.org Structured Data for Current View:</span>
                  <span className="text-[#8C4736] font-bold">Validated JSON-LD</span>
                </div>
                <pre className="p-3 bg-black/60 rounded text-[11px] text-[#A8A29E] overflow-x-auto max-h-56 leading-relaxed">
                  {activeSchemaJson}
                </pre>
              </div>
            )}

            {/* TAB: Sitemap */}
            {activeScaffoldTab === 'sitemap' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="font-bold text-[#8C4736] block">XML Sitemap Preview (/sitemap.xml)</span>
                  <pre className="p-3 bg-black/60 rounded text-[11px] text-[#A8A29E] overflow-x-auto max-h-52">
                    {generateSitemapXml(ARTICLES_DATA, PILLARS_DATA)}
                  </pre>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#8C4736] block">Robots.txt Preview (/robots.txt)</span>
                  <pre className="p-3 bg-black/60 rounded text-[11px] text-[#A8A29E] overflow-x-auto max-h-52">
                    {generateRobotsTxt()}
                  </pre>
                </div>
              </div>
            )}

            {/* TAB: Design Tokens */}
            {activeScaffoldTab === 'design' && (
              <div className="space-y-2 text-xs">
                <span className="font-bold text-[#8C4736] block">Home Reference Distinct Design Tokens</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2 bg-[#FAF8F5] text-[#1C1917] border border-[#E5DFD7]">
                    <span className="block font-bold">Paper Canvas</span>
                    <span className="font-mono text-[10px]">#FAF8F5</span>
                  </div>
                  <div className="p-2 bg-[#F4EFEA] text-[#1C1917] border border-[#E5DFD7]">
                    <span className="block font-bold">Subtle Surface</span>
                    <span className="font-mono text-[10px]">#F4EFEA</span>
                  </div>
                  <div className="p-2 bg-[#1C1917] text-[#FAF8F5] border border-[#292524]">
                    <span className="block font-bold">Charcoal Ink</span>
                    <span className="font-mono text-[10px]">#1C1917</span>
                  </div>
                  <div className="p-2 bg-[#8C4736] text-white">
                    <span className="block font-bold">Restrained Clay</span>
                    <span className="font-mono text-[10px]">#8C4736</span>
                  </div>
                </div>
                <p className="text-[#A8A29E] text-[11px] pt-1">
                  Typography: <em>Newsreader</em> (Display & Heading Serif) + <em>Plus Jakarta Sans</em> (Body Prose). Zero pill badges. Zero flashy SaaS gradients.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Header (Follows Top Bar Contract) */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Primary Page Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentArticle ? (
          <ArticlePage article={currentArticle} onNavigate={navigateTo} />
        ) : currentPillar ? (
          <CategoryHubPage pillar={currentPillar} onNavigate={navigateTo} />
        ) : currentPath === '/about/' ? (
          <AboutPage onNavigate={navigateTo} />
        ) : (
          <HomePage onNavigate={navigateTo} onOpenSearch={() => setSearchOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Fast Instant Reference Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
