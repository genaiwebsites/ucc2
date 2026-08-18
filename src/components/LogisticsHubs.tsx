'use client';

import React from 'react';
import { MapPin, ShieldCheck, Check } from '@phosphor-icons/react';
import { LOGISTICS_HUBS } from '@/data/logistics';

export const LogisticsHubs: React.FC = () => {
  return (
    <section className="sec" id="geography">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <div className="eyebrow">Distribution &amp; Indenting Infrastructure</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Strategic port clearance &amp; <em className="text-brand-blue not-italic">regional supply network</em>
          </h2>
          <p className="text-slate-700 text-[0.88rem] sm:text-base">
            Integrated ocean port indents, regional buffer stockholding, and direct manufacturing plant delivery across the Eastern subcontinent.
          </p>
        </div>

        {/* 2x2 Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          {LOGISTICS_HUBS.map((hub) => (
            <div
              key={hub.id}
              className="bg-white rounded-DEFAULT p-5 sm:p-7 lg:p-8 shadow-card border border-slate-200/85 transition-all duration-300 hover:shadow-cardHi hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="font-heading text-[10.5px] sm:text-[11.5px] font-bold tracking-wider uppercase text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full">
                    {hub.capacityBadge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-[1.1rem] sm:text-[1.18rem] font-bold text-ink mb-1 leading-snug">
                  {hub.name}
                </h3>
                <p className="text-[0.85rem] sm:text-[0.9rem] text-slate-600 mb-4 sm:mb-5 font-normal">
                  {hub.subtitle}
                </p>

                {/* Feature Bullets */}
                <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                  {hub.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[0.82rem] sm:text-[0.84rem] text-slate-700 font-normal leading-snug">
                      <Check weight="bold" className="w-3.5 h-3.5 text-brand-blue flex-none mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta Rows */}
              <div className="border-t border-slate-200 pt-1.5">
                {/* Location */}
                <div className="flex items-start gap-2.5 py-2 border-b border-slate-100">
                  <MapPin
                    weight="duotone"
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-blue flex-none mt-0.5"
                  />
                  <div className="text-[0.84rem] sm:text-[0.88rem] leading-snug">
                    <b className="font-heading font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase text-slate-500 block mb-0.5">
                      Coverage
                    </b>
                    <span className="text-ink font-semibold">{hub.location}</span>
                  </div>
                </div>

                {/* Transit Protocol */}
                <div className="flex items-start gap-2.5 pt-2">
                  <ShieldCheck
                    weight="duotone"
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-blue flex-none mt-0.5"
                  />
                  <div className="text-[0.84rem] sm:text-[0.88rem] leading-snug">
                    <b className="font-heading font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase text-slate-500 block mb-0.5">
                      Protocol
                    </b>
                    <span className="text-ink font-semibold">{hub.sla}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
