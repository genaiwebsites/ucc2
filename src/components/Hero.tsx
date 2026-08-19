'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

interface HeroProps {
  onExploreProducts?: () => void;
  onContactSales?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactSales }) => {
  const heroRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking with Smooth Spring Physics
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Butter-smooth spring interpolation for fluid, inertia-driven parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0005,
  });

  // Multi-Plane Parallax Transforms
  // Layer 1: Background & Ken Burns Container Parallax
  const bgParallaxY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const bgScrollScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 0.85, 0.25]);

  // Layer 2: Ambient Glowing Light Orbs
  const glow1Y = useTransform(smoothProgress, [0, 1], ['0px', '140px']);
  const glow2Y = useTransform(smoothProgress, [0, 1], ['0px', '-90px']);
  const glowScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);

  // Layer 3: Tech Grid Overlay
  const gridY = useTransform(smoothProgress, [0, 1], ['0px', '60px']);

  // Layer 4: Hero Content Area (Headline, Text, CTAs)
  const contentY = useTransform(smoothProgress, [0, 1], ['0px', '85px']);
  const contentOpacity = useTransform(smoothProgress, [0, 0.65, 1], [1, 0.85, 0]);
  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  // Layer 5: Hero Stats Strip
  const statsY = useTransform(smoothProgress, [0, 1], ['0px', '28px']);
  const statsOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.95, 0.7]);

  // Entrance Stagger Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={heroRef} className="hero relative select-none" id="top">
      <div className="hero-card relative overflow-hidden">
        {/* ══ LAYER 1: MULTI-PLANE PARALLAX & AUTOMATIC KEN BURNS BACKGROUND ══ */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden select-none"
          style={{
            y: bgParallaxY,
            scale: bgScrollScale,
            opacity: bgOpacity,
            willChange: 'transform, opacity',
          }}
        >
          {/* Automatic Ken Burns Cinematic Zoom & Pan Canvas */}
          <motion.div
            className="absolute -inset-[8%] w-[116%] h-[116%] bg-cover bg-right sm:bg-[right_center] bg-no-repeat opacity-24 sm:opacity-28 lg:opacity-32 mix-blend-screen filter saturate-125 contrast-110"
            style={{
              backgroundImage: "url('/images/hero-polymer.jpg')",
              maskImage:
                'radial-gradient(ellipse 70% 70% at 82% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,0) 82%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 70% at 82% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,0) 82%)',
              willChange: 'transform',
            }}
            animate={{
              scale: [1.02, 1.15, 1.07, 1.18, 1.02],
              x: ['0%', '-2%', '1.5%', '-1%', '0%'],
              y: ['0%', '1.5%', '-1.2%', '0.8%', '0%'],
              rotate: [0, 0.4, -0.3, 0.2, 0],
            }}
            transition={{
              duration: 26,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />

          {/* Secondary Polymer Refraction Pulse with Inverse Ken Burns Drift */}
          <motion.div
            className="absolute -inset-[10%] w-[120%] h-[120%] bg-cover bg-right sm:bg-[right_center] bg-no-repeat opacity-12 mix-blend-color-dodge filter blur-[1px]"
            style={{
              backgroundImage: "url('/images/hero-polymer.jpg')",
              maskImage:
                'radial-gradient(ellipse 55% 55% at 80% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 55% 55% at 80% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)',
              willChange: 'transform',
            }}
            animate={{
              scale: [1.14, 1.03, 1.16, 1.06, 1.14],
              x: ['1%', '-1.5%', '0.8%', '-0.5%', '1%'],
              y: ['-1%', '0.8%', '-1.5%', '1%', '-1%'],
            }}
            transition={{
              duration: 32,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />

          {/* Floating Polymer Atmosphere Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '25%', left: '75%', size: 4, dur: 16, delay: 0 },
              { top: '40%', left: '85%', size: 6, dur: 22, delay: 3 },
              { top: '65%', left: '70%', size: 3, dur: 19, delay: 6 },
              { top: '30%', left: '60%', size: 5, dur: 25, delay: 2 },
            ].map((pt, idx) => (
              <motion.div
                key={idx}
                className="absolute rounded-full bg-blue-300/40 blur-[1px]"
                style={{
                  top: pt.top,
                  left: pt.left,
                  width: pt.size,
                  height: pt.size,
                }}
                animate={{
                  y: [0, -30, 0, 25, 0],
                  x: [0, 20, -15, 10, 0],
                  opacity: [0.2, 0.7, 0.3, 0.8, 0.2],
                  scale: [1, 1.4, 0.9, 1.2, 1],
                }}
                transition={{
                  duration: pt.dur,
                  delay: pt.delay,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* ══ LAYER 2: PARALLAX AMBIENT GLOW ORBS ══ */}
        <motion.div
          className="absolute top-1/4 right-[8%] w-[380px] h-[380px] bg-blue-500/15 rounded-full blur-[90px] pointer-events-none"
          style={{
            y: glow1Y,
            scale: glowScale,
            willChange: 'transform',
          }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-10 left-[4%] w-[320px] h-[320px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none"
          style={{
            y: glow2Y,
            willChange: 'transform',
          }}
        />

        {/* ══ LAYER 3: PARALLAX TECH DOT-MATRIX GRID ══ */}
        <motion.div
          className="absolute inset-0 pointer-events-none select-none opacity-45"
          style={{
            y: gridY,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(860px 620px at 70% 22%, #000, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(860px 620px at 70% 22%, #000, transparent 78%)',
            willChange: 'transform',
          }}
        />

        {/* ══ LAYER 4: HERO CONTENT AREA (BUTTER-SMOOTH PARALLAX) ══ */}
        <motion.div
          className="wrap relative z-10"
          style={{
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale,
            willChange: 'transform, opacity',
          }}
        >
          <motion.div
            className="hero-body max-w-[780px] pt-3 pb-6 sm:pt-4 sm:pb-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Pill Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-white/90 text-[11px] font-medium tracking-wide uppercase mb-3 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FB0FF] animate-pulse" />
              <span>Est. 1969 &bull; Eastern India Supply Gateway</span>
            </motion.div>

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
                className="cbtn cbtn-white !text-[12px] !py-1.5 !pl-4 !pr-1.5 shadow-sm group"
              >
                <span>Explore Products</span>
                <span className="disc !w-6 !h-6 group-hover:translate-x-0.5 transition-transform">
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
                className="cbtn cbtn-ghost !text-[12px] !py-1.5 !pl-4 !pr-1.5 group"
              >
                <span>Contact Sales Desk</span>
                <span className="disc !w-6 !h-6 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight weight="bold" className="w-3 h-3" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ══ LAYER 5: HERO STATS STRIP (ANCHORED WITH BUTTER PARALLAX) ══ */}
        <motion.div
          className="hero-strip-outer relative z-10 border-t border-white/[0.14] bg-[#0B1240]/50 backdrop-blur-md"
          style={{
            y: statsY,
            opacity: statsOpacity,
            willChange: 'transform, opacity',
          }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
