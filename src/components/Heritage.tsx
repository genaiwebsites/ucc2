'use client';

import React from 'react';
import {
  Globe,
  Package,
  ShieldCheck,
  TrendUp,
  ClockAfternoon,
  ChatCircleDots,
  Buildings,
} from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

export const Heritage: React.FC = () => {
  const pillars = [
    {
      icon: TrendUp,
      kicker: 'Strategic Economics',
      title: 'Cost-effective raw material solutions',
      desc: 'Continuous search for cost-effective elastomer, carbon black, and accelerator formulations that maximize compounding economics without sacrificing Mooney viscosity or tensile strength.',
    },
    {
      icon: Package,
      kicker: 'Supply Security',
      title: 'On-time delivery & buffer reserves',
      desc: '100,000+ sq.ft of strategic buffer storage across Dankuni Logistics Park and Taratala Depot, insulating your factory against shipping bottlenecks and global container crunches.',
    },
    {
      icon: ChatCircleDots,
      kicker: 'Dedicated Advisory',
      title: 'Prompt resolution & custom support',
      desc: 'Decades of formulation and compounding expertise providing immediate batch troubleshooting, cure rate optimization, and dedicated application guidance.',
    },
  ];

  return (
    <section className="sec" id="heritage">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <div className="eyebrow">Corporate Heritage · Est. 1969</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Over 5 decades of <em className="text-brand-blue not-italic">unswerving supply integrity</em>.
          </h2>
        </div>

        {/* Heritage Lead Card */}
        <div className="bg-white rounded-DEFAULT p-7 sm:p-10 md:p-12 shadow-card border border-slate-200/85 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[12px] font-heading font-bold uppercase tracking-wider">
              Visionary Legacy Since 1969
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[12px] font-heading font-semibold">
              Mission: &ldquo;{COMPANY.missionStatement}&rdquo;
            </span>
          </div>

          <p className="font-heading text-xl sm:text-2xl md:text-[1.8rem] font-bold text-ink leading-snug tracking-tight max-w-[960px]">
            Established in 1969 under the visionary guidance of{' '}
            <span className="text-brand-blue font-extrabold">{COMPANY.founder}</span>,{' '}
            {COMPANY.name} began as a dedicated trading firm serving local rubber manufacturers and has evolved over 55+ years into Eastern India’s most trusted indenters-cum-importers.
          </p>

          <div className="mt-7 pt-7 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-3">
              <h4 className="text-[1.05rem] font-heading font-bold text-ink">
                Distributor of Choice for Multinational Leaders
              </h4>
              <p className="text-[0.93rem] text-slate-700 leading-relaxed font-normal">
                Backed by 5 decades of deep polymer science and commercial clout, we represent leading multinational chemical and elastomer producers across the Eastern subcontinent. We are the preferred raw materials channel for the footwear, automotive tyre, conveyor belting, moulding, and industrial compounding industries.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[1.05rem] font-heading font-bold text-ink">
                Group Strength &amp; Integrated Sister Concerns
              </h4>
              <p className="text-[0.93rem] text-slate-700 leading-relaxed font-normal mb-3">
                Operating with seamless synergy across our specialized sister companies to provide complete indenting, port clearance, and ex-stock warehousing:
              </p>
              <div className="space-y-2">
                {COMPANY.sisterConcerns.map((concern) => (
                  <div
                    key={concern.name}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2"
                  >
                    <Buildings weight="bold" className="w-4 h-4 text-brand-blue flex-none mt-0.5" />
                    <div>
                      <div className="font-heading text-[13px] font-bold text-slate-800">
                        {concern.name}
                      </div>
                      <div className="text-[11.5px] text-slate-600 font-medium">
                        {concern.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value & Commitment Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-DEFAULT p-7 sm:p-8 shadow-card border border-slate-200/85 transition-all duration-300 hover:shadow-cardHi hover:-translate-y-1 group"
              >
                <div className="w-[48px] h-[48px] rounded-[13px] bg-blue-50 border border-blue-100 grid place-items-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                  <Icon weight="duotone" className="w-[24px] h-[24px] text-brand-blue" />
                </div>
                <div className="font-heading text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
                  {pillar.kicker}
                </div>
                <h4 className="font-heading text-[1.12rem] font-bold text-ink mb-2.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed font-normal">
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
