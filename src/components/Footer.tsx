'use client';

import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import { COMPANY } from '@/data/company';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="foot bg-[#0B1240] rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-bleed mt-6 pt-16 relative overflow-hidden text-white border-t border-[#1B2566]">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_12%_0%,rgba(46,107,255,0.22),transparent_60%)] pointer-events-none" />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.1fr] gap-10 pb-11">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-8 h-8 rounded-[9px] bg-white text-[#0B1240] font-heading font-extrabold text-[13px] tracking-tight grid place-items-center mb-4 shadow-sm">
              {COMPANY.shortName}
            </div>
            <h5 className="font-heading font-bold text-white text-[1.1rem] mb-2.5 !text-white">
              {COMPANY.name}
            </h5>
            <p className="text-white/80 text-[0.88rem] leading-relaxed mb-4 max-w-xs font-normal">
              Established in 1969 by {COMPANY.founder}. Eastern India’s institutional indenters, importers, and stockists for synthetic polymers, natural rubber, and industrial chemicals.
            </p>
            <address className="not-italic text-[0.83rem] text-white/70 leading-relaxed font-sans font-medium">
              <strong className="text-white/90 font-heading block mb-0.5">{COMPANY.headquarters.building}</strong>
              {COMPANY.headquarters.unit}, {COMPANY.headquarters.block}
              <br />
              {COMPANY.headquarters.area}, {COMPANY.headquarters.city} – {COMPANY.headquarters.postalCode}
            </address>
          </div>

          {/* Chemical Portfolio */}
          <div>
            <h6 className="font-heading text-[11px] font-bold tracking-wider uppercase text-[#8FB0FF] mb-4">
              Chemical Portfolio
            </h6>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Synthetic Rubber (SBR/NBR/EPDM)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Natural Rubber (RSS/ISNR/Latex)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Furnace Carbon Black (N220-N660)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Accelerators (CBS/TBBS/TMTD)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Zinc Oxide 99.5% &amp; Stearic Acid
                </a>
              </li>
            </ul>
          </div>

          {/* Operations & Group */}
          <div>
            <h6 className="font-heading text-[11px] font-bold tracking-wider uppercase text-[#8FB0FF] mb-4">
              Group Operations
            </h6>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#heritage"
                  onClick={(e) => handleNavClick(e, '#heritage')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Corporate Heritage
                </a>
              </li>
              <li>
                <a
                  href="#associates"
                  onClick={(e) => handleNavClick(e, '#associates')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Global Principals
                </a>
              </li>
              <li>
                <a
                  href="#geography"
                  onClick={(e) => handleNavClick(e, '#geography')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Warehousing Hubs
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  onClick={(e) => handleNavClick(e, '#mission')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Quality SLA Protocols
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-[0.88rem] text-white/85 hover:text-white transition-colors"
                >
                  Procurement Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Commercial Desk Contacts */}
          <div>
            <h6 className="font-heading text-[11px] font-bold tracking-wider uppercase text-[#8FB0FF] mb-4">
              Commercial Desk
            </h6>
            <div className="flex flex-col gap-3.5">
              <div>
                <a
                  href={`tel:${COMPANY.contacts.salesPhoneRaw}`}
                  className="font-heading text-[0.95rem] font-bold text-white hover:text-[#8FB0FF] transition-colors"
                >
                  {COMPANY.contacts.salesPhone}
                </a>
                <small className="block text-[11.5px] text-white/65 mt-0.5 font-sans font-medium">
                  Sales &amp; Indenting Desk
                </small>
              </div>

              <div>
                <a
                  href={`tel:${COMPANY.contacts.technicalPhoneRaw}`}
                  className="font-heading text-[0.95rem] font-bold text-white hover:text-[#8FB0FF] transition-colors"
                >
                  {COMPANY.contacts.technicalPhone}
                </a>
                <small className="block text-[11.5px] text-white/65 mt-0.5 font-sans font-medium">
                  Technical Advisory Desk
                </small>
              </div>

              <div>
                <a
                  href={`mailto:${COMPANY.contacts.email}`}
                  className="text-[0.85rem] text-white/90 hover:text-white transition-colors break-all underline underline-offset-2 decoration-white/25 hover:decoration-[#8FB0FF]"
                >
                  {COMPANY.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <span>
            © 1969–2026 Usha Commercial Corporation. All rights reserved.
          </span>

          <div className="flex items-center gap-2">
            <span className="font-heading text-[10.5px] font-bold tracking-wider text-white bg-white/[0.12] border border-white/20 px-3 py-1 rounded-full">
              ASTM TESTED
            </span>
            <span className="font-heading text-[10.5px] font-bold tracking-wider text-white bg-white/[0.12] border border-white/20 px-3 py-1 rounded-full">
              ISO/COA VERIFIED
            </span>
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-[#8FB0FF] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp weight="bold" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
