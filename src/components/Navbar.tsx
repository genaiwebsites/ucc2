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
  const [activeSection, setActiveSection] = useState<string>('heritage');

  // Exact chronological page order matching page.tsx sections
  const navLinks = [
    { label: 'About', href: '#heritage', id: 'heritage' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Clients', href: '#associates', id: 'associates' },
    { label: 'Quality', href: '#mission', id: 'mission' },
    { label: 'Logistics', href: '#geography', id: 'geography' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact Desk', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('top') || document.querySelector('.hero');
      // Only switch to blue after the dark Hero section has been scrolled past
      const heroThreshold = heroEl ? Math.max(heroEl.offsetHeight - 70, 260) : 320;
      setIsStuck(window.scrollY > heroThreshold);

      // Active section detection
      const scrollPos = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
        isStuck ? 'py-2' : 'py-3 sm:py-4'
      }`}
      id="nav"
    >
      <div className="wrap">
        <div
          className={`rounded-full px-2.5 sm:px-4 py-1.5 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
            isStuck
              ? 'bg-[#0B1240]/95 backdrop-blur-xl border border-[#1B2566]/90 shadow-[0_12px_32px_rgba(11,18,64,0.22)] text-white'
              : 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-nav text-ink'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            className="flex items-center gap-2 sm:gap-2.5 flex-none group"
          >
            <div
              className={`w-8 h-8 rounded-[9px] grid place-items-center font-heading font-extrabold text-[13px] tracking-tight transition-all duration-300 group-hover:scale-105 shadow-xs flex-none ${
                isStuck
                  ? 'bg-white text-[#0B1240]'
                  : 'bg-[#0B1240] text-white'
              }`}
            >
              {COMPANY.shortName}
            </div>
            <div
              className={`font-heading font-bold text-[13.5px] sm:text-[14.5px] tracking-tight leading-tight transition-colors duration-300 ${
                isStuck ? 'text-white' : 'text-ink'
              }`}
            >
              {COMPANY.name.split(' ')[0]} Commercial
              <small
                className={`block text-[8.5px] sm:text-[9px] font-bold tracking-wider mt-[1px] transition-colors duration-300 ${
                  isStuck ? 'text-[#8FB0FF]' : 'text-slate-500'
                }`}
              >
                EST. {COMPANY.established} · KOLKATA
              </small>
            </div>
          </a>

          {/* Desktop Nav Links - Inverts Colors on Scroll */}
          <nav className="hidden lg:flex items-center gap-0.5" id="navLinks">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-heading text-[13px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isStuck
                      ? isActive
                        ? 'text-white bg-blue-600 font-bold shadow-xs'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : isActive
                        ? 'text-brand-blue bg-blue-50/90 font-bold shadow-xs'
                        : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Action */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-none">
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
              className={`cbtn !text-[12px] sm:!text-[13px] !py-1 !pl-3 sm:!pl-3.5 !pr-1 shadow-sm transition-all duration-300 ${
                isStuck ? 'cbtn-white' : 'cbtn-blue'
              }`}
            >
              <span className="hidden xs:inline">Lot RFQ</span>
              <span className="xs:hidden">RFQ</span>
              <span className="disc !w-6.5 !h-6.5 sm:!w-7 sm:!h-7">
                <ArrowRight weight="bold" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className={`lg:hidden w-[38px] h-[38px] rounded-full grid place-items-center transition-all active:scale-95 cursor-pointer shadow-sm flex-none ${
                isStuck
                  ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  : 'bg-[#0B1240] text-white hover:bg-[#141C55]'
              }`}
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
          <div
            className={`lg:hidden fixed top-[64px] sm:top-[70px] left-4 right-4 max-h-[calc(100vh-80px)] overflow-y-auto rounded-[20px] p-3 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200 transition-all ${
              isStuck
                ? 'bg-[#0B1240] border border-[#1B2566] text-white shadow-[0_18px_48px_rgba(11,18,64,0.4)]'
                : 'bg-white border border-slate-200 text-ink shadow-[0_18px_48px_rgba(15,28,74,0.18)]'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-heading text-[14px] font-bold px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                  isStuck
                    ? 'text-white hover:bg-white/10 hover:text-[#8FB0FF]'
                    : 'text-ink hover:bg-slate-50 hover:text-brand-blue'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`text-xs font-normal ${
                    isStuck ? 'text-white/40' : 'text-slate-400'
                  }`}
                >
                  #{link.id}
                </span>
              </a>
            ))}
            <div
              className={`pt-2 mt-1 border-t ${
                isStuck ? 'border-white/15' : 'border-slate-200'
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className={`w-full justify-between cbtn !py-2.5 !px-4 ${
                  isStuck ? 'cbtn-white' : 'cbtn-blue'
                }`}
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
