'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Flask,
  Anchor,
  Buildings,
} from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

interface CounterProps {
  value: number;
  suffix?: string;
  from?: number;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  value,
  suffix = '',
  from = 0,
  duration = 1.8,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const totalDuration = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalDuration, 1);
      // smooth ease-out curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(from + (value - from) * ease);
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, value, from, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

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
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="eyebrow !mb-0">Corporate Heritage · Est. 1969</div>
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

            {/* Animated 3-Metric Pill Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 grid grid-cols-3 gap-2 bg-slate-50/90 hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/90 shadow-xs text-center transition-all duration-300"
            >
              {/* Stat 1: Founded */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2.5 rounded-xl hover:bg-white transition-colors duration-200 cursor-default"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue tracking-tight">
                  <AnimatedNumber value={1969} from={1940} duration={1.6} />
                </div>
                <div className="text-[10.5px] font-heading font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Founded
                </div>
              </motion.div>

              {/* Stat 2: Years Trust */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2.5 rounded-xl hover:bg-white border-x border-slate-200/90 transition-colors duration-200 cursor-default"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  <AnimatedNumber value={55} suffix="+" from={0} duration={1.6} />
                </div>
                <div className="text-[10.5px] font-heading font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Years Trust
                </div>
              </motion.div>

              {/* Stat 3: Principals */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2.5 rounded-xl hover:bg-white transition-colors duration-200 cursor-default"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue tracking-tight">
                  <AnimatedNumber value={11} suffix="+" from={0} duration={1.4} />
                </div>
                <div className="text-[10.5px] font-heading font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Principals
                </div>
              </motion.div>
            </motion.div>
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
            {sisterCompanies.map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-DEFAULT p-6 sm:p-7 shadow-card border border-slate-200/85 hover:border-blue-300 transition-all duration-300 hover:shadow-cardHi hover:-translate-y-1 flex flex-col justify-between group"
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
