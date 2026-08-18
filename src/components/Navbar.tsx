'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, List, X } from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

interface NavbarProps {
  onOpenRfq?: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq }) => {
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Heritage', href: '#heritage' },
    { label: 'Products', href: '#products' },
    { label: 'Principals', href: '#associates' },
    { label: 'Logistics', href: '#geography' },
    { label: 'Quality SLA', href: '#mission' },
    { label: 'Procurement', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isStuck ? 'py-2.5' : 'py-4'
      }`}
      id="nav"
    >
      <div className="wrap">
        <div
          className={`bg-white/92 backdrop-blur-xl border border-slate-200 rounded-full px-3 py-2 sm:pl-5 flex items-center justify-between gap-4 sm:gap-5 transition-shadow duration-300 ${
            isStuck ? 'shadow-navStuck' : 'shadow-nav'
          }`}
        >
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            className="flex items-center gap-2.5 flex-none group"
          >
            <div className="w-8 h-8 rounded-[9px] bg-[#0B1240] text-white grid place-items-center font-heading font-extrabold text-[13px] tracking-tight transition-transform duration-300 group-hover:scale-105 shadow-xs">
              {COMPANY.shortName}
            </div>
            <div className="font-heading font-bold text-[15px] text-ink tracking-tight leading-tight">
              {COMPANY.name.split(' ')[0]} Commercial
              <small className="block text-[9px] font-bold text-slate-500 tracking-wider mt-[1px]">
                EST. {COMPANY.established} · KOLKATA
              </small>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1" id="navLinks">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-[13.5px] font-semibold text-slate-700 px-3.5 py-1.5 rounded-full transition-all duration-200 hover:text-brand-blue hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-2 flex-none">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenRfq) {
                  e.preventDefault();
                  onOpenRfq();
                } else {
                  handleLinkClick(e, '#contact');
                }
              }}
              className="cbtn cbtn-blue !text-[13px] !py-1 !pl-4 !pr-1 shadow-sm"
            >
              Lot RFQ
              <span className="disc !w-7 !h-7">
                <ArrowRight weight="bold" className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="lg:hidden w-[38px] h-[38px] rounded-full bg-[#0B1240] text-white grid place-items-center transition-transform active:scale-95 cursor-pointer shadow-sm"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X weight="bold" className="w-4 h-4" />
              ) : (
                <List weight="bold" className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileOpen && (
          <div className="lg:hidden fixed top-[76px] left-4 right-4 bg-white border border-slate-200 rounded-[22px] p-3.5 flex flex-col gap-1 shadow-[0_18px_48px_rgba(15,28,74,0.18)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-[14.5px] font-bold text-ink px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-200">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full justify-between cbtn cbtn-blue !py-2.5 !px-4"
              >
                Request Lot RFQ
                <span className="disc">
                  <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
