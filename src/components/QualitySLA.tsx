'use client';

import React from 'react';
import {
  ArrowRight,
  Waveform,
  SealCheck,
  Package,
  Truck,
} from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

interface QualitySLAProps {
  onRequestQuote?: () => void;
}

export const QualitySLA: React.FC<QualitySLAProps> = ({ onRequestQuote }) => {
  const qualityIcons = [Waveform, SealCheck, Package, Truck];

  return (
    <section className="sec pt-4 sm:pt-6" id="mission">
      <div className="wrap">
        <div className="bg-[#141C55] rounded-DEFAULT p-5 sm:p-8 md:p-12 lg:p-14 relative overflow-hidden text-white shadow-xl">
          {/* Subtle radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_88%_4%,rgba(46,107,255,0.28),transparent_62%)] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 lg:gap-9 mb-6 sm:mb-10">
              <div>
                <div className="eyebrow on-navy !text-[#93C5FD]">Quality Assurance &amp; Standards</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight !text-white">
                  Zero-halt supply commitment
                </h2>
              </div>
              <p className="text-white/90 text-[0.88rem] sm:text-[0.95rem] leading-relaxed max-w-md font-normal">
                In heavy tire, footwear, and conveyor manufacturing, chemical variability or delayed raw materials halt entire shifts. We eliminate that risk.
              </p>
            </div>

            {/* 4 Quality Commitment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {COMPANY.slaProtocols.map((sla, idx) => {
                const Icon = qualityIcons[idx % qualityIcons.length];
                return (
                  <div
                    key={sla.id}
                    className="bg-[#1B2566] border border-white/18 rounded-DEFAULT p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:bg-[#222D75] hover:-translate-y-1 group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#93C5FD] mb-3.5 group-hover:scale-105 group-hover:bg-blue-600/30 transition-all flex-none">
                        <Icon weight="duotone" className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </div>
                      <h4 className="font-heading text-white text-[1.02rem] sm:text-[1.08rem] font-bold leading-snug mb-2 !text-white">
                        {sla.title}
                      </h4>
                      <p className="text-white/85 text-[0.84rem] sm:text-[0.875rem] leading-relaxed font-normal">
                        {sla.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SLA Footer */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-7 border-t border-white/18 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 flex-wrap">
              <span className="font-heading text-xs sm:text-[0.94rem] font-medium text-white/90 text-center sm:text-left">
                ASTM D1646 Protocol · ISO 9001 Batch Protocol · REACH Compliant
              </span>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onRequestQuote) {
                    e.preventDefault();
                    onRequestQuote();
                  }
                }}
                className="cbtn cbtn-white w-full sm:w-auto justify-between sm:justify-start"
              >
                <span>Request Consignment Quote</span>
                <span className="disc">
                  <ArrowRight weight="bold" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
