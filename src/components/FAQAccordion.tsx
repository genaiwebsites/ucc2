'use client';

import React, { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '@/data/faqs';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
          {/* Left Column Header */}
          <div className="sec-head mb-0">
            <div className="eyebrow">Procurement FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3.5">
              Have questions? <em className="text-brand-blue not-italic">We have answers</em>
            </h2>
            <p className="text-slate-700 text-base">
              Quick answers to the most common inquiries about our polymer and chemical supply operations.
            </p>
          </div>

          {/* Right Column Accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-DEFAULT shadow-card border transition-all duration-300 ${
                    isOpen ? 'border-blue-200 shadow-cardHi' : 'border-slate-200/85'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:px-6 text-left font-heading text-[0.98rem] font-bold text-ink hover:text-brand-blue transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-none transition-all duration-350 ${
                        isOpen
                          ? 'bg-brand-blue text-white rotate-45 shadow-sm'
                          : 'bg-blue-50 text-brand-blue border border-blue-100'
                      }`}
                    >
                      <Plus weight="bold" className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-0 text-[0.92rem] text-slate-700 leading-relaxed font-normal border-t border-slate-100 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
