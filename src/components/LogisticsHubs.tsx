'use client';

import React from 'react';
import { MapPin, Clock } from '@phosphor-icons/react';
import { LOGISTICS_HUBS } from '@/data/logistics';

export const LogisticsHubs: React.FC = () => {
  return (
    <section className="sec" id="geography">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <div className="eyebrow">Logistics Network</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Strategic warehousing &amp; <em className="text-brand-blue not-italic">port hubs</em>
          </h2>
          <p className="text-slate-700 text-base">
            100,000+ sq.ft total covered storage, positioned on the corridors your plants actually run on.
          </p>
        </div>

        {/* 2x2 Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LOGISTICS_HUBS.map((hub) => (
            <div
              key={hub.id}
              className="bg-white rounded-DEFAULT p-7 sm:p-8 shadow-card border border-slate-200/85 transition-all duration-400 hover:shadow-cardHi hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Index */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-heading text-[11.5px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
                    {hub.capacityBadge}
                  </span>
                  <span className="font-heading text-[13px] font-bold text-slate-400">
                    {hub.idx}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h4 className="font-heading text-[1.15rem] font-bold text-ink mb-1.5 leading-snug">
                  {hub.name}
                </h4>
                <p className="text-[0.9rem] text-slate-600 mb-5 font-normal">
                  {hub.subtitle}
                </p>
              </div>

              {/* Meta Rows */}
              <div className="border-t border-slate-200 pt-1">
                {/* Location */}
                <div className="flex items-start gap-2.5 py-2.5 border-b border-slate-200">
                  <MapPin
                    weight="duotone"
                    className="w-4.5 h-4.5 text-brand-blue flex-none mt-0.5"
                  />
                  <div className="text-[0.88rem] leading-snug">
                    <b className="font-heading font-bold text-[11px] tracking-wider uppercase text-slate-500 block mb-0.5">
                      Location
                    </b>
                    <span className="text-ink font-semibold">{hub.location}</span>
                  </div>
                </div>

                {/* SLA */}
                <div className="flex items-start gap-2.5 pt-2.5">
                  <Clock
                    weight="duotone"
                    className="w-4.5 h-4.5 text-brand-blue flex-none mt-0.5"
                  />
                  <div className="text-[0.88rem] leading-snug">
                    <b className="font-heading font-bold text-[11px] tracking-wider uppercase text-slate-500 block mb-0.5">
                      SLA Transit
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
