'use client';

import React from 'react';
import { Globe, Package, ShieldCheck } from '@phosphor-icons/react';

export const Heritage: React.FC = () => {
  const pillars = [
    {
      icon: Globe,
      kicker: 'Direct Indenting & Agency',
      title: 'Global port-to-plant supply',
      desc: 'Direct container-load import indents to Kolkata and Haldia ports with complete customs clearance, ocean shipping logistics, and port-side de-stuffing.',
    },
    {
      icon: Package,
      kicker: 'Buffer Warehousing',
      title: '100,000+ sq.ft strategic storage',
      desc: 'Bonded, heavy-racking, and climate-controlled storage across Dankuni Logistics Park and Taratala Industrial Depot, with 30 to 60-day buffer reserves.',
    },
    {
      icon: ShieldCheck,
      kicker: 'Quality Governance',
      title: 'ASTM & REACH compliance',
      desc: 'Every consignment undergoes rigid testing for Mooney Viscosity ML(1+4), Ash content, Bound Styrene, and Specific Gravity, with authentic manufacturer COA.',
    },
  ];

  return (
    <section className="sec" id="heritage">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <div className="eyebrow">Corporate Overview · Est. 1969</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Five decades of <em className="text-brand-blue not-italic">supply integrity</em>.
          </h2>
        </div>

        {/* Heritage Lead Card */}
        <div className="bg-white rounded-lg p-7 sm:p-10 md:p-14 shadow-card border border-slate-200/80 mb-4">
          <p className="font-heading text-xl sm:text-2xl md:text-[1.85rem] font-semibold text-ink leading-snug tracking-tight max-w-[900px]">
            Founded in 1969 in Brabourne Road, Kolkata,{' '}
            <b className="font-bold text-brand-blue">Usha Commercial Corporation</b>{' '}
            has grown into Eastern India&apos;s oldest and most formidable distribution partner for heavy chemical and polymer manufacturing.
          </p>

          <div className="mt-7 pt-7 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
            <p className="text-[0.93rem] text-slate-700 leading-relaxed font-normal">
              We supply critical raw material feeds to Tier-1 automotive tyre, footwear, industrial conveyor belting, and technical rubber compounding plants, ensuring zero production downtime.
            </p>
            <p className="text-[0.93rem] text-slate-700 leading-relaxed font-normal">
              Authorized channel representation for multinational petrochemical conglomerates, with direct container-load import indents to Kolkata and Haldia ports.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-DEFAULT p-7 sm:p-8 shadow-card border border-slate-200/80 transition-all duration-400 hover:shadow-cardHi hover:-translate-y-1 group"
              >
                <div className="w-[48px] h-[48px] rounded-[13px] bg-blue-50 border border-blue-100 grid place-items-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon weight="duotone" className="w-[24px] h-[24px] text-brand-blue" />
                </div>
                <div className="font-heading text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
                  {pillar.kicker}
                </div>
                <h4 className="font-heading text-[1.12rem] font-bold text-ink mb-2.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
