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
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="hero" id="top">
      <div className="hero-card relative overflow-hidden">
        {/* Scientifically Relevant 3D Polymer Background - Seamless Radial Mask */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-right sm:bg-[right_center] bg-no-repeat opacity-20 sm:opacity-25 lg:opacity-28 mix-blend-screen filter saturate-125 contrast-105"
            style={{
              backgroundImage: "url('/images/hero-polymer.jpg')",
              maskImage:
                'radial-gradient(ellipse 65% 65% at 85% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 65% 65% at 85% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 80%)',
            }}
          />
          <div className="absolute top-1/4 right-[8%] w-[320px] h-[320px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </div>

        {/* Hero Content Area - Clean, Compact, Refined Typography */}
        <div className="wrap relative z-10">
          <motion.div
            className="hero-body max-w-[780px] pt-3 pb-6 sm:pt-4 sm:pb-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline - Scaled Down to Prestigious 2-Line Flow */}
            <motion.h1
              variants={itemVariants}
              className="text-white text-lg sm:text-xl md:text-[1.4rem] lg:text-[1.5rem] leading-[1.3] font-bold tracking-tight mb-2.5 max-w-[700px] !text-white"
            >
              Precision polymers &amp;{' '}
              <span className="text-[#8FB0FF]">heavy industrial chemicals.</span>
            </motion.h1>

            {/* Description - Concise & Balanced */}
            <motion.p
              variants={itemVariants}
              className="text-white/75 text-[0.82rem] sm:text-[0.88rem] leading-[1.6] max-w-[560px] mb-4 font-normal !text-white/75"
            >
              Eastern India’s distributor-of-choice and indenting partner for global petrochemical manufacturers — delivering certified synthetic elastomers, natural rubber, and compounding chemicals.
            </motion.p>

            {/* CTAs - Compact Buttons with Good Air */}
            <motion.div
              variants={itemVariants}
              className="hero-cta flex flex-wrap items-center gap-2.5"
            >
              <a
                href="#products"
                onClick={(e) => {
                  if (onExploreProducts) {
                    e.preventDefault();
                    onExploreProducts();
                  }
                }}
                className="cbtn cbtn-white !text-[12px] !py-1.5 !pl-4 !pr-1.5 shadow-sm"
              >
                <span>Explore Products</span>
                <span className="disc !w-6 !h-6">
                  <ArrowRight weight="bold" className="w-3 h-3" />
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
                className="cbtn cbtn-ghost !text-[12px] !py-1.5 !pl-4 !pr-1.5"
              >
                <span>Contact Sales Desk</span>
                <span className="disc !w-6 !h-6">
                  <ArrowRight weight="bold" className="w-3 h-3" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Stats Strip - Refined & Compact */}
        <div className="hero-strip-outer relative z-10 border-t border-white/[0.14] bg-[#0B1240]/40 backdrop-blur-xs">
          <div className="wrap">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {COMPANY.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-3 sm:py-3.5 px-2 sm:px-4 lg:px-5 border-b sm:border-b-0 border-white/[0.14] ${
                    i !== COMPANY.stats.length - 1 ? 'lg:border-r' : ''
                  } ${i % 2 === 0 ? 'border-r sm:border-r-0' : ''} ${
                    i === 0 ? 'pl-0' : ''
                  } ${i === 1 ? 'sm:border-r' : ''} ${
                    i === COMPANY.stats.length - 1 ? 'lg:pr-0 border-b-0' : ''
                  }`}
                >
                  <div className="font-heading text-base sm:text-[1.25rem] font-bold text-white leading-none tracking-tight mb-0.5">
                    <span className="text-white">{stat.value}</span>
                    <span className="text-[#8FB0FF]">{stat.suffix}</span>
                  </div>
                  <div className="font-heading text-[11px] font-bold text-white mb-0 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-white/65 leading-tight font-medium hidden sm:block">
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
