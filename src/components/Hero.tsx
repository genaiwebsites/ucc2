'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

interface HeroProps {
  onExploreProducts?: () => void;
  onContactSales?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactSales }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="hero" id="top">
      <div className="hero-card">
        <div className="wrap">
          <motion.div
            className="hero-body relative z-10 max-w-[780px] pb-14 sm:pb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.10] border border-white/[0.20] font-heading text-[11.5px] font-semibold tracking-wide text-white shadow-sm">
                <span className="bg-[#8FB0FF] text-[#0B1240] px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wider uppercase">
                  {COMPANY.heroStandardsBadge.split(' ')[0]} {COMPANY.heroStandardsBadge.split(' ')[1]}
                </span>
                <span className="tracking-wider text-white font-semibold">BATCH COA VERIFIED</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-white text-4xl sm:text-5xl md:text-[4.15rem] leading-[1.08] font-bold tracking-tight mb-5 !text-white"
            >
              <span className="text-white">Precision polymers &amp; </span>
              <span className="text-[#8FB0FF]">heavy industrial</span>
              <span className="text-white"> chemicals.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/85 text-base sm:text-lg leading-relaxed max-w-[580px] mb-8 sm:mb-9 font-normal !text-white/85"
            >
              {COMPANY.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
            >
              <a
                href="#products"
                onClick={(e) => {
                  if (onExploreProducts) {
                    e.preventDefault();
                    onExploreProducts();
                  }
                }}
                className="cbtn cbtn-white justify-between sm:justify-start"
              >
                <span>Explore Products</span>
                <span className="disc">
                  <ArrowRight weight="bold" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onContactSales) {
                    e.preventDefault();
                    onContactSales();
                  }
                }}
                className="cbtn cbtn-ghost justify-between sm:justify-start"
              >
                <span>Contact Sales Desk</span>
                <span className="disc">
                  <ArrowRight weight="bold" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Stats Strip */}
        <div className="hero-strip-outer relative z-10 border-t border-white/[0.14]">
          <div className="wrap">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {COMPANY.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 sm:py-7 lg:py-8 px-0 sm:px-6 lg:px-7 border-b sm:border-b-0 border-white/[0.14] ${
                    i !== COMPANY.stats.length - 1 ? 'lg:border-r' : ''
                  } ${i === 0 ? 'sm:pl-0' : ''} ${i === 1 ? 'sm:border-r' : ''} ${
                    i === COMPANY.stats.length - 1 ? 'lg:pr-0 border-b-0' : ''
                  }`}
                >
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-white leading-none tracking-tight mb-2">
                    <span className="text-white">{stat.value}</span>
                    <span className="text-[#8FB0FF]">{stat.suffix}</span>
                  </div>
                  <div className="font-heading text-[13.5px] font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[12px] text-white/75 leading-normal font-medium">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
