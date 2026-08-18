'use client';

import React from 'react';
import { COMPANY } from '@/data/company';

export const ScaleBento: React.FC = () => {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 auto-rows-fr">
          {/* Intro Card - Spans 2 columns on desktop */}
          <div className="sm:col-span-2 bg-transparent p-2 sm:p-5 lg:p-7 flex flex-col justify-center">
            <div className="eyebrow">Proven Efficiency in Numbers</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-2.5 sm:mb-3">
              Scale that keeps <em className="text-brand-blue not-italic">shifts running</em>
            </h2>
            <p className="text-[0.88rem] sm:text-[0.95rem] text-slate-700 leading-relaxed font-normal">
              We operate with data, not assumptions. Every consignment we take is measured against ASTM protocols and manufacturer certification.
            </p>
          </div>

          {/* Metric Cards */}
          {COMPANY.bentoStats.map((item, index) => {
            const isAccent = item.accent;
            return (
              <div
                key={`${item.tag}-${index}`}
                className={`rounded-DEFAULT p-5 sm:p-7 shadow-card border relative flex flex-col justify-end transition-all duration-400 hover:shadow-cardHi hover:-translate-y-1 ${
                  isAccent
                    ? 'bg-[#0B1240] border-[#1A2466] text-white'
                    : 'bg-white border-slate-200/85 text-ink'
                }`}
              >
                {/* Top Corner Tag */}
                <span
                  className={`absolute top-4 sm:top-5 right-4 sm:right-5 font-heading text-[10px] sm:text-[10.5px] font-bold tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${
                    isAccent
                      ? 'bg-white/[0.12] border-white/[0.22] text-white'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {item.tag}
                </span>

                {/* Main Value */}
                <div
                  className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-none tracking-tight mb-2 ${
                    isAccent ? 'text-white' : 'text-ink'
                  }`}
                >
                  {item.value}
                  <span className={isAccent ? 'text-[#8FB0FF]' : 'text-brand-blue'}>
                    {item.suffix}
                  </span>
                </div>

                {/* Subtext Label */}
                <div
                  className={`text-[0.84rem] sm:text-[0.88rem] leading-snug font-medium ${
                    isAccent ? 'text-white/90' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
