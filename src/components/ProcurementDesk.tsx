'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, PhoneCall, EnvelopeSimple, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import { COMPANY } from '@/data/company';
import { Product } from '@/data/products';

interface ProcurementDeskProps {
  selectedProduct?: Product | null;
}

export const ProcurementDesk: React.FC<ProcurementDeskProps> = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productLine: '',
    requirements: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update selected product when prop changes
  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productLine: `${selectedProduct.categoryLabel} — ${selectedProduct.title}`,
        requirements: `Grade: ${selectedProduct.title}\nCAS: ${selectedProduct.casNumber}\nEstimated Tonnage: `,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      companyName: true,
      contactPerson: true,
      email: true,
      phone: true,
    });

    const isCompanyValid = !!formData.companyName.trim();
    const isContactValid = !!formData.contactPerson.trim();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const isPhoneValid = formData.phone.trim().length >= 8;

    if (!isCompanyValid || !isContactValid || !isEmailValid || !isPhoneValid) {
      return;
    }

    setIsSubmitting(true);

    // Simulate enterprise backend dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedRef = `UCC-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1F55E8', '#2E6BFF', '#0B1240', '#8FB0FF'],
        });
      } catch {
        // Safe fallback if canvas is restricted
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      productLine: '',
      requirements: '',
    });
    setTouched({});
    setIsSuccess(false);
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head mid">
          <div className="eyebrow justify-center">Direct Procurement Desk</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3.5">
            Request consignment <em className="text-brand-blue not-italic">quotation</em>
          </h2>
          <p className="text-slate-700 text-base max-w-xl mx-auto font-normal">
            Connect directly with our commercial trading desk for container indents, ex-warehouse buffer reserves, and technical batch specifications.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-4 items-start">
          {/* Left Column (Dark Ink Card) */}
          <div className="bg-[#0B1240] rounded-lg p-8 sm:p-11 relative overflow-hidden text-white h-full shadow-lg border border-[#1B2566]">
            <div className="absolute inset-0 bg-[radial-gradient(500px_320px_at_88%_96%,rgba(46,107,255,0.28),transparent_62%)] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 !text-white">
                Commercial trading desk
              </h2>
              <p className="text-white/85 text-[0.95rem] leading-relaxed mb-8 font-normal">
                Speak to the people who move the material. Sales and indenting, or technical advisory on grade selection.
              </p>

              <div className="flex flex-col">
                {/* Headquarters */}
                <div className="flex gap-3.5 py-4 border-t border-white/15">
                  <div className="w-[40px] h-[40px] rounded-[11px] bg-white/[0.12] border border-white/[0.2] grid place-items-center flex-none">
                    <MapPin weight="duotone" className="w-5 h-5 text-[#8FB0FF]" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] font-bold tracking-wider uppercase text-white/70 mb-1">
                      Headquarters
                    </div>
                    <div className="text-[0.92rem] text-white leading-snug font-medium">
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.city} {COMPANY.address.postalCode}, {COMPANY.address.state}, {COMPANY.address.country}
                    </div>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-3.5 py-4 border-t border-white/15">
                  <div className="w-[40px] h-[40px] rounded-[11px] bg-white/[0.12] border border-white/[0.2] grid place-items-center flex-none">
                    <PhoneCall weight="duotone" className="w-5 h-5 text-[#8FB0FF]" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] font-bold tracking-wider uppercase text-white/70 mb-1">
                      Commercial Phone
                    </div>
                    <div className="text-[0.92rem] text-white leading-snug font-semibold">
                      <a
                        href={`tel:${COMPANY.contacts.salesPhoneRaw}`}
                        className="hover:text-[#8FB0FF] transition-colors text-white"
                      >
                        {COMPANY.contacts.salesPhone}
                      </a>{' '}
                      <span className="text-white/70 text-[12px] font-normal font-sans ml-1">· Sales &amp; Indents</span>
                      <br />
                      <a
                        href={`tel:${COMPANY.contacts.technicalPhoneRaw}`}
                        className="hover:text-[#8FB0FF] transition-colors text-white"
                      >
                        {COMPANY.contacts.technicalPhone}
                      </a>{' '}
                      <span className="text-white/70 text-[12px] font-normal font-sans ml-1">· Technical Advisory</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3.5 py-4 border-t border-b border-white/15">
                  <div className="w-[40px] h-[40px] rounded-[11px] bg-white/[0.12] border border-white/[0.2] grid place-items-center flex-none">
                    <EnvelopeSimple weight="duotone" className="w-5 h-5 text-[#8FB0FF]" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] font-bold tracking-wider uppercase text-white/70 mb-1">
                      Official Email
                    </div>
                    <div className="text-[0.92rem] text-white leading-snug font-semibold">
                      <a
                        href={`mailto:${COMPANY.contacts.email}`}
                        className="hover:text-[#8FB0FF] transition-colors break-all text-white underline underline-offset-2 decoration-white/30 hover:decoration-[#8FB0FF]"
                      >
                        {COMPANY.contacts.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <p className="mt-7 text-[12px] text-white/75 leading-relaxed font-sans font-medium">
                {COMPANY.contacts.hours}
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white rounded-lg p-7 sm:p-10 shadow-card border border-slate-200/85">
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-1.5">
              Send an enquiry
            </h3>
            <p className="text-[0.9rem] text-slate-600 mb-7 font-normal">
              Formal quotation issued within 2 hours.
            </p>

            {isSuccess ? (
              <div className="bg-blue-50 border border-blue-200 rounded-DEFAULT p-7 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white grid place-items-center mx-auto mb-3.5 shadow-md">
                  <CheckCircle weight="bold" className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-bold text-ink mb-1.5">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed font-normal">
                  Reference: <strong className="text-ink font-mono font-bold">{referenceId}</strong>
                  <br />
                  Our commercial trading desk is reviewing your requisition. A formal lot quotation and COA specification sheet will be dispatched within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="cbtn cbtn-blue !py-2 !px-5"
                >
                  Submit Another Requisition
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Row 1: Company & Person */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="companyName" className="font-heading text-[12px] font-bold text-ink">
                      Company / Plant Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="e.g. Adityapur Rubber Works"
                      value={formData.companyName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('companyName')}
                      className={`w-full px-3.5 py-3 rounded-xl border font-sans text-[14px] text-ink bg-slate-50 transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/15 shadow-xs ${
                        touched.companyName && !formData.companyName.trim()
                          ? 'border-[#E5484D] bg-red-50/30'
                          : 'border-slate-300 focus:border-brand-blue'
                      }`}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contactPerson" className="font-heading text-[12px] font-bold text-ink">
                      Contact Person <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      placeholder="Full name"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      onBlur={() => handleBlur('contactPerson')}
                      className={`w-full px-3.5 py-3 rounded-xl border font-sans text-[14px] text-ink bg-slate-50 transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/15 shadow-xs ${
                        touched.contactPerson && !formData.contactPerson.trim()
                          ? 'border-[#E5484D] bg-red-50/30'
                          : 'border-slate-300 focus:border-brand-blue'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-heading text-[12px] font-bold text-ink">
                      Official Work Email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-3.5 py-3 rounded-xl border font-sans text-[14px] text-ink bg-slate-50 transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/15 shadow-xs ${
                        touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                          ? 'border-[#E5484D] bg-red-50/30'
                          : 'border-slate-300 focus:border-brand-blue'
                      }`}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-heading text-[12px] font-bold text-ink">
                      Mobile / WhatsApp <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-3.5 py-3 rounded-xl border font-sans text-[14px] text-ink bg-slate-50 transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/15 shadow-xs ${
                        touched.phone && formData.phone.trim().length < 8
                          ? 'border-[#E5484D] bg-red-50/30'
                          : 'border-slate-300 focus:border-brand-blue'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Product Line Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="productLine" className="font-heading text-[12px] font-bold text-ink">
                    Product Line / Grade of Interest
                  </label>
                  <select
                    id="productLine"
                    name="productLine"
                    value={formData.productLine}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 font-sans text-[14px] text-ink bg-slate-50 focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 shadow-xs transition-all cursor-pointer"
                  >
                    <option value="">Select a material family</option>
                    <option value="Synthetic Rubber (SBR 1502 / 1712, NBR, EPDM, PBR)">
                      Synthetic Rubber (SBR 1502 / 1712, NBR, EPDM, PBR)
                    </option>
                    <option value="Natural Rubber (RSS-1 to RSS-4, ISNR-10/20, Latex)">
                      Natural Rubber (RSS-1 to RSS-4, ISNR-10/20, Latex)
                    </option>
                    <option value="Furnace Carbon Black (N220, N330, N550, N660)">
                      Furnace Carbon Black (N220, N330, N550, N660)
                    </option>
                    <option value="Vulcanizing Chemicals (CBS, TBBS, Zinc Oxide 99.5%, Stearic Acid)">
                      Vulcanizing Chemicals (CBS, TBBS, Zinc Oxide 99.5%, Stearic Acid)
                    </option>
                    <option value="Full Formulation Package (Multiple Materials)">
                      Full Formulation Package (Multiple Materials)
                    </option>
                  </select>
                </div>

                {/* Requirements Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="requirements" className="font-heading text-[12px] font-bold text-ink">
                    Estimated Tonnage &amp; Delivery Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    placeholder="Grade, monthly tonnage, delivery location and schedule"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 font-sans text-[14px] text-ink bg-slate-50 focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 shadow-xs transition-all resize-y"
                  />
                </div>

                {/* Submit Foot */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 flex-wrap">
                  <p className="text-[12px] text-slate-600 font-medium leading-relaxed flex-1 min-w-[200px]">
                    100% verified manufacturer COA · Formal quotation issued within 2 hours.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cbtn cbtn-blue w-full sm:w-auto justify-between sm:justify-start shadow-md"
                  >
                    <span>{isSubmitting ? 'Processing Requisition...' : 'Submit Inquiry'}</span>
                    <span className="disc">
                      <ArrowRight weight="bold" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
