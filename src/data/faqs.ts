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
      'Synthetic Rubber (SBR 1502/1712, NBR, EPDM, PBR), Natural Rubber (RSS-1 to RSS-4, ISNR-10/20, Latex), Furnace Carbon Black (N220, N330, N550, N660), and Vulcanizing Chemicals (CBS, TBBS, Zinc Oxide 99.5%, Stearic Acid). Full formulation packages across multiple materials are also available.',
  },
  {
    id: 'faq-2',
    question: 'Do you hold ex-stock inventory for immediate dispatch?',
    answer:
      'Yes. We maintain 30 to 60-day buffer reserves for contracted clients across 100,000+ sq.ft of storage at Dankuni Logistics Park and Taratala Industrial Depot, with a 4-hour emergency dispatch window for plants across West Bengal, Howrah, and the Hooghly industrial belts.',
  },
  {
    id: 'faq-3',
    question: 'What certification accompanies each consignment?',
    answer:
      'Every delivery carries an authentic manufacturer Certificate of Analysis verifying bound styrene, ash content, volatile matter, and specific gravity. Consignments are tested against ASTM D1418 and D1646 protocols under an ISO 9001 batch protocol.',
  },
  {
    id: 'faq-4',
    question: 'Can you handle direct import indents?',
    answer:
      'We hold authorized channel representation for multinational petrochemical conglomerates and facilitate direct container-load import indents to Kolkata and Haldia ports, including complete customs clearance, ocean shipping logistics, and port-side de-stuffing.',
  },
  {
    id: 'faq-5',
    question: 'Which regions do you service?',
    answer:
      'Eastern India is our primary corridor, with a dedicated direct transit channel to the Adityapur Industrial Area in Jamshedpur on a 12-hour cross-state line haul. Nationwide supply is handled through our port and warehousing network.',
  },
  {
    id: 'faq-6',
    question: 'How quickly is a quotation issued?',
    answer:
      'A formal quotation is issued within 2 hours of requisition. Our commercial desk operates Monday to Saturday, 10:00 AM – 7:00 PM IST, with port clearance monitored 24/7.',
  },
];
