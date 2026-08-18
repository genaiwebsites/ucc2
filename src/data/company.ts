export const COMPANY = {
  name: 'Usha Commercial Corporation',
  shortName: 'UCC',
  established: 1969,
  yearsOfTrust: '55+',
  founder: 'Mr. L.N. Khatry',
  missionStatement: 'Unswerving to work with',
  tagline: 'Precision polymers & heavy industrial chemicals.',
  description:
    'Established in 1969 under the visionary guidance of Mr. L.N. Khatry, Usha Commercial Corporation has evolved over 5 decades into Eastern India’s most respected indenters-cum-importers and distributor-of-choice for leading multinational polymer and chemical manufacturers.',
  heroStandardsBadge: 'ASTM D1418 · D1646 BATCH COA VERIFIED',
  
  headquarters: {
    title: 'Corporate Headquarters',
    building: 'Adventz Infinity @ 5',
    unit: 'Unit No. 1108, 11th Floor',
    block: 'Block BN 5, Street No. 18',
    area: 'Salt Lake, Sector V',
    city: 'Kolkata',
    postalCode: '700091',
    state: 'West Bengal',
    country: 'India',
    full: 'Adventz Infinity @ 5, Unit No. 1108, 11th Floor, Block BN 5, Street No. 18, Salt Lake, Sector V, Kolkata 700091, West Bengal, India',
    mapsUrl: 'https://maps.google.com/?q=Adventz+Infinity+Sector+V+Salt+Lake+Kolkata+700091',
  },

  // Backward compatibility alias for address
  address: {
    street: 'Adventz Infinity @ 5, Unit No. 1108, Block BN 5, Street No. 18, Salt Lake, Sector V',
    city: 'Kolkata',
    postalCode: '700091',
    state: 'West Bengal',
    country: 'India',
    full: 'Adventz Infinity @ 5, Unit No. 1108, 11th Floor, Block BN 5, Street No. 18, Salt Lake, Sector V, Kolkata 700091, West Bengal, India',
  },

  sisterConcerns: [
    { name: 'Anand Chemicals & Rubber Pvt Ltd', role: 'Rubber Chemicals & Polymer Compounding' },
    { name: 'Arien Impex Pvt Ltd', role: 'International Indenting & Port Consignment Clearance' },
    { name: 'Chemin Enterprises', role: 'Specialty Industrial Chemical Distribution' },
  ],

  contacts: {
    salesPhone: '+91 98300 37437',
    salesPhoneRaw: '+919830037437',
    technicalPhone: '+91 98300 80559',
    technicalPhoneRaw: '+919830080559',
    email: 'office@ushacommercialcorporation.com',
    hours: 'Mon – Sat: 9:30 AM – 6:30 PM IST (Emergency dispatch 24/7)',
  },

  stats: [
    { value: '55', suffix: '+', label: 'Years of Trust', sub: 'Established 1969 by Mr. L.N. Khatry', tag: 'Heritage' },
    { value: '100', suffix: 'K+', label: 'Sq.Ft Storage', sub: 'Dankuni & Taratala logistics depots', tag: 'Storage' },
    { value: '12', suffix: '+', label: 'Global Principals', sub: 'Authorized channel representation', tag: 'Network' },
    { value: '100', suffix: '%', label: 'ASTM Traceable', sub: 'Manufacturer COA on every lot', tag: 'Compliance' },
  ],

  bentoStats: [
    { value: '55', suffix: '+', label: 'Years of unbroken supply-chain trust since 1969', tag: 'Heritage', accent: true },
    { value: '100', suffix: 'K+', label: 'Sq.ft covered warehousing across Eastern India', tag: 'Storage' },
    { value: '12', suffix: '+', label: 'Global chemical principals represented', tag: 'Network' },
    { value: '4', suffix: 'hr', label: 'Emergency dispatch window for contracted plants', tag: 'Response' },
    { value: '60', suffix: 'd', label: 'Maximum client buffer stock allotment held', tag: 'Buffer' },
    { value: '100', suffix: '%', label: 'Consignments with authentic manufacturer COA', tag: 'Compliance' },
  ],

  corePillars: [
    {
      title: 'Cost-Effective Compounding',
      kicker: 'Continuous Optimization',
      desc: 'Continuous search for cost-effective polymer & chemical raw material formulations that maximize factory margin without sacrificing Mooney viscosity or tensile performance.',
    },
    {
      title: 'On-Time Buffer Delivery',
      kicker: 'Ex-Stock Security',
      desc: '30 to 60-day buffer reserves held across Dankuni and Taratala depots, safeguarding production schedules against global port congestions and shipping surges.',
    },
    {
      title: 'Prompt Technical Support',
      kicker: 'Expert Resolution',
      desc: 'Dedicated technical desk for formulation troubleshooting, scorch safety adjustments, and rheological testing in partnership with our global principals.',
    },
  ],

  slaProtocols: [
    {
      id: 'sla-01',
      number: 'SLA 01',
      title: 'Rheological & Mooney consistency',
      description:
        'Strict Mooney Viscosity ML(1+4 @ 100°C) and cure rate (MDR/ODR) verification across consignments to prevent compounding scorch or curing anomalies in factory Banbury mixers.',
    },
    {
      id: 'sla-02',
      number: 'SLA 02',
      title: '100% certified manufacturer COA',
      description:
        'Every single raw material delivery is accompanied by authentic manufacturer Certificate of Analysis verifying bound styrene, ash content, volatile matter, and specific gravity compliance.',
    },
    {
      id: 'sla-03',
      number: 'SLA 03',
      title: 'Dedicated client buffer reserves',
      description:
        'Contracted client buffer stock held in our Dankuni logistics park, insulating continuous 24/7 manufacturing schedules from global shipping bottlenecks and container crunches.',
    },
    {
      id: 'sla-04',
      number: 'SLA 04',
      title: 'Hot-run emergency dispatch',
      description:
        'Same-day emergency truckload dispatch for contracted plants across West Bengal, Howrah, and the Hooghly industrial belts within 4 hours of requisition.',
    },
  ],

  certifications: [
    'ASTM D1418 Protocol',
    'ASTM D1646 Mooney Protocol',
    'ISO 9001 Batch Protocol',
    'REACH Compliant Grades',
  ],
};
