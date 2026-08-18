'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, ArrowRight, Package } from '@phosphor-icons/react';
import { Product } from '@/data/products';

interface SpecModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const SpecModal: React.FC<SpecModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur px-6 py-5 border-b border-slate-200 flex items-center justify-between gap-4 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700">
                {product.categoryLabel}
              </span>
              <span className="font-mono text-xs text-slate-600 font-semibold">
                {product.casNumber}
              </span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-ink leading-snug">
              {product.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-ink grid place-items-center transition-colors cursor-pointer flex-none"
            aria-label="Close modal"
          >
            <X weight="bold" className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* ASTM Compliance Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-DEFAULT p-4 flex items-center gap-3.5">
            <ShieldCheck weight="duotone" className="w-7 h-7 text-brand-blue flex-none" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong className="text-ink font-heading font-bold block text-[13.5px] mb-0.5">
                ASTM Batch Certified Specification
              </strong>
              Shipped exclusively with verified manufacturer Certificate of Analysis (COA) per ISO 9001 quality framework.
            </div>
          </div>

          {/* Key Parameters */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Standard Technical Parameters
            </h4>
            <div className="border border-slate-200 rounded-DEFAULT overflow-hidden">
              <dl className="divide-y divide-slate-200">
                {product.specs.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`flex items-center justify-between gap-4 px-4 py-2.5 text-xs ${
                      idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                    }`}
                  >
                    <dt className="text-slate-700 font-semibold">{s.label}</dt>
                    <dd className="font-heading font-bold text-ink text-right text-[13px]">
                      {s.value}
                    </dd>
                  </div>
                ))}
                {product.technicalDetails?.standard && (
                  <div className="flex items-center justify-between gap-4 px-4 py-2.5 text-xs bg-white">
                    <dt className="text-slate-700 font-semibold">Compliance Standard</dt>
                    <dd className="font-heading font-bold text-ink text-right text-[13px]">
                      {product.technicalDetails.standard}
                    </dd>
                  </div>
                )}
                {product.technicalDetails?.origin && (
                  <div className="flex items-center justify-between gap-4 px-4 py-2.5 text-xs bg-slate-50/70">
                    <dt className="text-slate-700 font-semibold">Channel Origin</dt>
                    <dd className="font-heading font-bold text-ink text-right text-[13px]">
                      {product.technicalDetails.origin}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>

          {/* Test Protocols */}
          {product.technicalDetails?.testProtocols && (
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Verification Test Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.technicalDetails.testProtocols.map((protocol) => (
                  <span
                    key={protocol}
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg text-ink font-semibold"
                  >
                    <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-brand-blue" />
                    {protocol}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Packaging & Logistics */}
          {product.packaging && (
            <div className="bg-slate-50 border border-slate-200 rounded-DEFAULT p-4 flex items-start gap-3">
              <Package weight="duotone" className="w-5 h-5 text-brand-blue flex-none mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed font-normal">
                <b className="font-heading font-bold text-ink block mb-0.5">
                  Standard Commercial Packaging
                </b>
                {product.packaging}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-4 flex-wrap">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-heading font-bold text-slate-600 hover:text-ink transition-colors cursor-pointer"
          >
            Close Spec Sheet
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="cbtn cbtn-blue !text-xs !py-1.5 !px-4 cursor-pointer shadow-sm"
            >
              <span>Request Lot Quote</span>
              <span className="disc !w-6 !h-6">
                <ArrowRight weight="bold" className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
