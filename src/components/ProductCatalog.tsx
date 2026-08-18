'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, MagnifyingGlass, FileText } from '@phosphor-icons/react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';

interface ProductCatalogProps {
  onSelectProductForRfq?: (product: Product) => void;
  onOpenSpecModal?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductForRfq,
  onOpenSpecModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.casNumber.toLowerCase().includes(query) ||
        product.casSubtext.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.applications.toLowerCase().includes(query) ||
        product.specs.some(
          (s) =>
            s.label.toLowerCase().includes(query) ||
            s.value.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="sec" id="products">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <div className="eyebrow">Certified Raw Material Inventory</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Chemical &amp; polymer <em className="text-brand-blue not-italic">portfolio</em>
          </h2>
          <p className="text-slate-700 text-[0.92rem] sm:text-base">
            Ex-stock inventory and direct import indents across four material families, each shipped against verified manufacturer certificates of analysis.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-3.5 mb-6 sm:mb-7">
          {/* Tabs - Edge-to-edge touch scroll on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-heading text-[12px] sm:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex-none ${
                  activeCategory === cat.id
                    ? 'bg-[#0B1240] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:text-ink shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Instant Search Filter */}
          <div className="relative w-full md:w-72 flex-none">
            <MagnifyingGlass className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search grade, CAS, spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 sm:py-2 text-[13.5px] sm:text-[13px] bg-white border border-slate-300 rounded-full font-sans text-ink placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4" id="pGrid">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full bg-white rounded-DEFAULT p-8 sm:p-12 text-center border border-dashed border-slate-300">
              <p className="font-heading text-base sm:text-lg font-semibold text-ink mb-1">
                No matching product grades found
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Try searching for another grade or clear the search filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="cbtn cbtn-outline !text-[13px] !py-1.5"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-DEFAULT p-5 sm:p-6 lg:p-7 shadow-card border border-slate-200/85 transition-all duration-400 hover:shadow-cardHi hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & CAS */}
                  <div className="flex items-start justify-between gap-2.5 mb-3">
                    <span className="font-heading text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 flex-none">
                      {product.categoryLabel}
                    </span>
                    <span className="font-mono text-[10.5px] sm:text-[11px] text-slate-600 font-medium tracking-tight text-right leading-tight">
                      {product.casNumber}
                      <br />
                      <span className="text-slate-500">{product.casSubtext}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-heading text-[1.05rem] sm:text-[1.12rem] font-bold text-ink leading-snug mb-3 sm:mb-4">
                    {product.title}
                  </h4>

                  {/* Technical Specifications */}
                  <dl className="border-t border-slate-200 mb-3.5 sm:mb-4">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between gap-2 py-2 sm:py-2.5 border-b border-slate-200"
                      >
                        <dt className="text-[12px] sm:text-[12.5px] text-slate-600 font-medium">
                          {spec.label}
                        </dt>
                        <dd className="font-heading text-[12.5px] sm:text-[13px] font-bold text-ink text-right whitespace-nowrap">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Applications */}
                  <div className="text-[0.84rem] sm:text-[0.87rem] text-slate-700 leading-relaxed mb-4 sm:mb-5">
                    <b className="font-heading font-bold text-ink text-[11.5px] sm:text-[12px] tracking-wide block mb-0.5 sm:mb-1">
                      Applications
                    </b>
                    {product.applications}
                  </div>
                </div>

                {/* Footer Stock & Requisition Action */}
                <div className="flex items-center justify-between gap-2.5 pt-3.5 sm:pt-4 border-t border-slate-200 flex-wrap">
                  <span className="flex items-center gap-1.5 text-[11.5px] sm:text-[12px] text-slate-700 font-semibold">
                    <i className="w-2 h-2 rounded-full bg-[#16A34A] flex-none shadow-[0_0_0_3px_rgba(22,163,74,0.2)]" />
                    {product.stockStatus}
                  </span>

                  <div className="flex items-center gap-2">
                    {onOpenSpecModal && (
                      <button
                        type="button"
                        onClick={() => onOpenSpecModal(product)}
                        className="font-heading text-[12px] sm:text-[12.5px] font-bold text-slate-700 hover:text-ink px-2.5 sm:px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer min-h-[32px]"
                        title="View Technical Data Sheet & ASTM Test Protocols"
                      >
                        <FileText weight="bold" className="w-3.5 h-3.5" />
                        TDS
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectProductForRfq) {
                          onSelectProductForRfq(product);
                        } else {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="font-heading text-[12px] sm:text-[12.5px] font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 hover:gap-1.5 transition-all cursor-pointer min-h-[32px]"
                    >
                      <span>Request Spec &amp; COA</span>
                      <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
