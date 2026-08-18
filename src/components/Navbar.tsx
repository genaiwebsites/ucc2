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
      setIsStuck(window.scrollY > 20);

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
          className={`bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full px-2.5 sm:px-4 py-1.5 flex items-center justify-between gap-2 sm:gap-4 transition-shadow duration-300 ${
            isStuck ? 'shadow-navStuck' : 'shadow-nav'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            className="flex items-center gap-2 sm:gap-2.5 flex-none group"
          >
            <div className="w-8 h-8 rounded-[9px] bg-[#0B1240] text-white grid place-items-center font-heading font-extrabold text-[13px] tracking-tight transition-transform duration-300 group-hover:scale-105 shadow-xs flex-none">
              {COMPANY.shortName}
            </div>
            <div className="font-heading font-bold text-[13.5px] sm:text-[14.5px] text-ink tracking-tight leading-tight">
              {COMPANY.name.split(' ')[0]} Commercial
              <small className="block text-[8.5px] sm:text-[9px] font-bold text-slate-500 tracking-wider mt-[1px]">
                EST. {COMPANY.established} · KOLKATA
              </small>
            </div>
          </a>

          {/* Desktop Nav Links - Chronological Order */}
          <nav className="hidden lg:flex items-center gap-0.5" id="navLinks">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-heading text-[13px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
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
              className="cbtn cbtn-blue !text-[12px] sm:!text-[13px] !py-1 !pl-3 sm:!pl-3.5 !pr-1 shadow-sm"
            >
              <span className="hidden xs:inline">Lot RFQ</span>
              <span className="xs:hidden">RFQ</span>
              <span className="disc !w-6.5 !h-6.5 sm:!w-7 sm:!h-7">
                <ArrowRight weight="bold" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </a>

            {/* Mobile Hamburger Toggle (Touch target ≥40x40px) */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="lg:hidden w-[38px] h-[38px] rounded-full bg-[#0B1240] text-white grid place-items-center transition-transform active:scale-95 cursor-pointer shadow-sm flex-none"
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
          <div className="lg:hidden fixed top-[64px] sm:top-[70px] left-4 right-4 max-h-[calc(100vh-80px)] overflow-y-auto bg-white border border-slate-200 rounded-[20px] p-3 flex flex-col gap-1 shadow-[0_18px_48px_rgba(15,28,74,0.18)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-[14px] font-bold text-ink px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-blue transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-400 font-normal">#{link.id}</span>
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
