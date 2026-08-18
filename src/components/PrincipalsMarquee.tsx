'use client';

import React from 'react';
import { PRINCIPALS_AND_CLIENTS } from '@/data/principals';

export const PrincipalsMarquee: React.FC = () => {
  const { principals, clients } = PRINCIPALS_AND_CLIENTS;

  const row1 = [...principals, ...principals, ...principals];
  const row2 = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="assoc py-14 sm:py-16" id="associates">
      <div className="wrap">
        <div className="bg-white rounded-lg py-10 sm:py-12 shadow-card border border-slate-200/80 overflow-hidden">
          {/* Header */}
          <div className="text-center px-6 sm:px-10 mb-8">
            <div className="eyebrow justify-center">Institutional Network</div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
              Global principals &amp; clients
            </h3>
            <p className="text-sm text-slate-700 max-w-xl mx-auto font-normal">
              Authorized channel representation &amp; direct factory supply across the subcontinent.
            </p>
          </div>

          {/* Marquee Track Container with gradient edges */}
          <div className="mq relative overflow-hidden py-1">
            {/* Track 1 - Forward */}
            <div className="mq-track">
              {row1.map((item, idx) => (
                <span
                  key={`p-${item}-${idx}`}
                  className="mq-item font-heading text-[14px] font-bold text-slate-800 bg-slate-50 border border-slate-300 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 cursor-default shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Track 2 - Reverse */}
            <div className="mq-track rev mt-3">
              {row2.map((item, idx) => (
                <span
                  key={`c-${item}-${idx}`}
                  className="mq-item font-heading text-[14px] font-bold text-slate-800 bg-slate-50 border border-slate-300 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 cursor-default shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
