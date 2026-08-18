'use client';

import React from 'react';
import Image from 'next/image';
import { PRINCIPALS_AND_CLIENTS } from '@/data/principals';

export const PrincipalsMarquee: React.FC = () => {
  const { principals, clients } = PRINCIPALS_AND_CLIENTS;

  // Duplicate arrays to create a seamless infinite loop
  const row1 = [...principals, ...principals, ...principals];
  const row2 = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="assoc py-14 sm:py-16" id="associates">
      <div className="wrap">
        <div className="bg-white rounded-DEFAULT py-10 sm:py-12 shadow-card border border-slate-200/80 overflow-hidden">
          {/* Header */}
          <div className="text-center px-6 sm:px-10 mb-9">
            <div className="eyebrow justify-center">Institutional Network</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
              Global Principals &amp; Institutional Clients
            </h3>
            <p className="text-sm text-slate-700 max-w-xl mx-auto font-normal">
              Direct authorized representation and supply chain integration across the subcontinent.
            </p>
          </div>

          {/* Marquee Track Container with gradient edge fades */}
          <div className="mq relative overflow-hidden py-2 space-y-4">
            {/* Track 1 - Principals (Forward) */}
            <div className="mq-track flex items-center gap-3.5">
              {row1.map((item, idx) => (
                <div
                  key={`p-${item.name}-${idx}`}
                  className="group flex items-center gap-3 bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-blue-300 px-4 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md shrink-0 cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-heading text-[13.5px] font-bold text-slate-800 group-hover:text-brand-blue transition-colors whitespace-nowrap pr-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 - Clients (Reverse) */}
            <div className="mq-track rev flex items-center gap-3.5">
              {row2.map((item, idx) => (
                <div
                  key={`c-${item.name}-${idx}`}
                  className="group flex items-center gap-3 bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-blue-300 px-4 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md shrink-0 cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-heading text-[13.5px] font-bold text-slate-800 group-hover:text-brand-blue transition-colors whitespace-nowrap pr-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
