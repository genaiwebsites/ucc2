'use client';

import React from 'react';
import {
  Flask,
  Anchor,
  Buildings,
  Sparkle,
} from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

export const Heritage: React.FC = () => {
  const sisterCompanies = [
    {
      name: 'Anand Chemicals & Rubber',
      suffix: 'Pvt Ltd',
      role: 'Rubber Chemicals & Compounding',
      desc: 'Polymer compounding support, accelerator packages, scorch safety adjustments, and direct factory mixing floor supply.',
      icon: Flask,
      badge: 'Compounding',
    },
    {
      name: 'Arien Impex',
      suffix: 'Pvt Ltd',
      role: 'International Indenting & Port Logistics',
      desc: 'Direct container-load (FCL) import indents, ocean shipping clearance, and customs bonded handling at Kolkata & Haldia ports.',
      icon: Anchor,
      badge: 'Import Clearance',
    },
    {
      name: 'Chemin Enterprises',
      suffix: '',
      role: 'Specialty Chemical Distribution',
      desc: 'Regional channel distribution for performance additives, rubber process oils, active zinc oxide, and stearic acid.',
      icon: Buildings,
      badge: 'Distribution',
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="heritage">
      <div className="wrap space-y-6">
        {/* 1. Main Heritage Story Card */}
        <div className="bg-white rounded-DEFAULT p-8 sm:p-10 lg:p-12 shadow-card border border-slate-200/85">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-heading text-[11.5px] font-bold uppercase tracking-wider">
              <Sparkle weight="fill" className="w-3.5 h-3.5 text-brand-blue" />
              Corporate Heritage · Est. 1969
            </div>
            <div className="text-xs font-heading font-semibold text-slate-500 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
              Mission: <span className="text-ink font-bold">&ldquo;{COMPANY.missionStatement}&rdquo;</span>
            </div>
          </div>

          {/* 2-Column Split: Story & Credibility Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-ink leading-tight tracking-tight mb-3">
                Over five decades of <em className="text-brand-blue not-italic">unswerving supply integrity</em>.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                Established in 1969 under the visionary guidance of{' '}
                <strong className="text-ink font-semibold">{COMPANY.founder}</strong>,{' '}
                {COMPANY.name} is Eastern India’s distributor-of-choice for multinational chemical leaders, powering critical raw material feeds for automotive tyre, footwear, conveyor belting, and technical rubber compounding plants.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center">
              <div className="p-2">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue">1969</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Founded</div>
              </div>
              <div className="p-2 border-x border-slate-200">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-ink">55+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Years Trust</div>
              </div>
              <div className="p-2">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue">11+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Principals</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Registered Sister Concerns (3 Symmetric Columns) */}
        <div>
          <div className="mb-3 px-1">
            <div className="eyebrow mb-1">Group Synergy</div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">
              Integrated Group Operating Companies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sisterCompanies.map((company) => {
              const Icon = company.icon;
              return (
                <div
                  key={company.name}
                  className="bg-white rounded-DEFAULT p-6 sm:p-7 shadow-card border border-slate-200/85 hover:border-blue-300 transition-all duration-300 hover:shadow-cardHi flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform">
                        <Icon weight="duotone" className="w-5 h-5" />
                      </div>
                      <span className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {company.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-[1.1rem] font-bold text-ink mb-1 group-hover:text-brand-blue transition-colors">
                      {company.name} {company.suffix && <span className="text-slate-400 text-xs font-normal">{company.suffix}</span>}
                    </h3>
                    <div className="text-[12px] font-heading font-semibold text-brand-blue mb-2.5">
                      {company.role}
                    </div>
                    <p className="text-[0.87rem] text-slate-600 leading-relaxed font-normal">
                      {company.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
