export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What material families do you supply?',
    answer:
      'We supply Synthetic Rubber (SBR 1502/1712, NBR, EPDM, PBR), Natural Rubber (RSS-1 to RSS-4, ISNR-10/20, Latex), Furnace Carbon Black (N220, N330, N550, N660, N774), Rubber Vulcanizing Accelerators (CBS, TBBS, MBT, TMTD), Active Zinc Oxide 99.5%, Stearic Acid, Precipitated Silica, Rubber Process Oils, and Blowing Agents.',
  },
  {
    id: 'faq-2',
    question: 'Do you hold ex-stock inventory for immediate dispatch?',
    answer:
      'Yes. We maintain buffer reserves for contracted clients across our regional warehousing depots in the Kolkata industrial belt, with dedicated truckload dispatches for plants across West Bengal, Howrah, and the Hooghly manufacturing belts.',
  },
  {
    id: 'faq-3',
    question: 'What certification accompanies each consignment?',
    answer:
      'Every consignment is accompanied by an authentic manufacturer Certificate of Analysis (COA) verifying key polymer parameters including Mooney Viscosity, bound styrene, ash content, volatile matter, and specific gravity in accordance with ASTM D1418 / ASTM D1646 standards.',
  },
  {
    id: 'faq-4',
    question: 'Can you handle direct international import indents?',
    answer:
      'Yes. As authorized indenting agents and channel representatives for leading multinational petrochemical producers, we facilitate direct container-load (FCL) import indents to Kolkata (Syama Prasad Mookerjee) and Haldia ports, with full customs clearance and shipping coordination.',
  },
  {
    id: 'faq-5',
    question: 'Which industrial regions do you service?',
    answer:
      'Eastern India is our core supply corridor — covering West Bengal, Jharkhand (including the Jamshedpur / Adityapur automotive and conveyor belt manufacturing clusters), Odisha, and Bihar. We also coordinate nationwide supply through our established network.',
  },
  {
    id: 'faq-6',
    question: 'How quickly is a quotation issued?',
    answer:
      'A formal lot quotation and technical specification sheet is issued within 2 hours of requisition by our commercial desk (Monday – Saturday: 9:30 AM – 6:30 PM IST).',
  },
];
