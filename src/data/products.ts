export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  category: 'syn' | 'nat' | 'cb' | 'rc';
  categoryLabel: string;
  casNumber: string;
  casSubtext: string;
  title: string;
  specs: ProductSpec[];
  applications: string;
  stockStatus: string;
  description?: string;
  packaging?: string;
  technicalDetails?: {
    standard: string;
    origin: string;
    shelfLife: string;
    storageConditions: string;
    testProtocols: string[];
  };
}

export const CATEGORIES = [
  { id: 'all', label: 'All Product Lines' },
  { id: 'syn', label: 'Synthetic Elastomers' },
  { id: 'nat', label: 'Natural Rubber' },
  { id: 'cb', label: 'Carbon Black Fillers' },
  { id: 'rc', label: 'Vulcanizing Additives' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'sbr-1502-1712',
    category: 'syn',
    categoryLabel: 'Synthetic SBR',
    casNumber: 'CAS 9003-55-8',
    casSubtext: 'Cold Emulsion SBR',
    title: 'Styrene Butadiene Rubber (SBR 1502 / 1712)',
    specs: [
      { label: 'Mooney Viscosity', value: '48 – 58 (ML 1+4 @ 100°C)' },
      { label: 'Bound Styrene Content', value: '23.5% ± 1.0%' },
      { label: 'Volatile Matter', value: '< 0.50% max' },
    ],
    applications: 'Tire Treads & Carcass, Footwear Soles, Conveyor Belting, Mechanical Moldings',
    stockStatus: 'Ex-Stock (Kolkata/Dankuni) & Import Indents',
    packaging: '35 kg film-wrapped bales on 1.05 MT shrink-wrapped pallets',
    technicalDetails: {
      standard: 'ASTM D1418 / ASTM D1646',
      origin: 'Domestic & Direct SE Asian / Middle Eastern Import',
      shelfLife: '24 Months under standard storage',
      storageConditions: 'Dry, covered warehouse below 35°C away from direct sunlight',
      testProtocols: ['ASTM D1646 (Mooney)', 'ASTM D5775 (Bound Styrene)', 'ASTM D5668 (Volatile Matter)'],
    },
  },
  {
    id: 'nbr-3305-3345',
    category: 'syn',
    categoryLabel: 'Synthetic NBR',
    casNumber: 'CAS 9003-18-3',
    casSubtext: 'Medium-High ACN',
    title: 'Acrylonitrile Butadiene (NBR 3305 / 3345)',
    specs: [
      { label: 'Acrylonitrile (ACN)', value: '33.0% – 34.5%' },
      { label: 'Mooney Viscosity', value: '45 – 55 (ML 1+4 @ 100°C)' },
      { label: 'Ash Content', value: '< 0.8% max' },
    ],
    applications: 'Fuel & Hydraulic Hoses, O-Rings, Oil Seals, Gaskets, Printing Rollers',
    stockStatus: 'Ex-Stock (Dankuni Storage Depot)',
    packaging: '25 kg / 35 kg bales, multi-ply kraft paper with PE inner liner',
    technicalDetails: {
      standard: 'ASTM D1418 / ISO 4658',
      origin: 'Direct Import (Korea / Japan / Europe)',
      shelfLife: '24 Months in cool dark warehouse',
      storageConditions: 'Temperature controlled below 30°C',
      testProtocols: ['ASTM D3533 (ACN Content)', 'ASTM D1646 (Mooney Viscosity)', 'ASTM D5667 (Ash)'],
    },
  },
  {
    id: 'epdm-4045-5050',
    category: 'syn',
    categoryLabel: 'Synthetic EPDM',
    casNumber: 'CAS 25038-36-2',
    casSubtext: 'ENB Diene Terpolymer',
    title: 'EPDM Terpolymer (EPDM 4045 / 5050)',
    specs: [
      { label: 'Ethylene Content', value: '55% – 60%' },
      { label: 'ENB Diene Content', value: '4.0% – 5.0%' },
      { label: 'Mooney Viscosity', value: '40 – 48 (ML 1+4 @ 125°C)' },
    ],
    applications: 'Automotive Weatherstrips, Radiator Coolant Hoses, Roofing, Cable Insulation',
    stockStatus: 'Ex-Stock & FCL Container Indents',
    packaging: '25 kg friable bales / pellets in reinforced boxes',
    technicalDetails: {
      standard: 'ASTM D1418 / ISO 4097',
      origin: 'Global Prime Principals (USA / Europe / Asia)',
      shelfLife: '36 Months',
      storageConditions: 'Prevent pellet agglomeration, store below 30°C',
      testProtocols: ['ASTM D3900 (Ethylene Content)', 'ASTM D6047 (Diene Content)', 'ASTM D1646 (Mooney)'],
    },
  },
  {
    id: 'pbr-1220-high-cis',
    category: 'syn',
    categoryLabel: 'Synthetic PBR',
    casNumber: 'CAS 9003-17-2',
    casSubtext: 'High-Cis 1,4-Polybutadiene',
    title: 'Polybutadiene Rubber (PBR 1220 High-Cis)',
    specs: [
      { label: 'Cis-1,4 Microstructure', value: '≥ 96.0% min' },
      { label: 'Mooney Viscosity', value: '42 – 48 (ML 1+4 @ 100°C)' },
      { label: 'Glass Transition (Tg)', value: '-106°C' },
    ],
    applications: 'Commercial Radial Tires, Conveyor Belt Covers, High-Resilience Footwear',
    stockStatus: 'Ex-Stock (Kolkata Central)',
    packaging: '35 kg bales on 1.05 MT wooden/metal pallets',
    technicalDetails: {
      standard: 'ASTM D1418 / ISO 2476',
      origin: 'Reliance / Prime Global Manufacturers',
      shelfLife: '24 Months',
      storageConditions: 'Store in dry covered depot, avoid heat exposure',
      testProtocols: ['ASTM D1646 (Mooney)', 'FTIR Spectrometry (Cis-1,4 content)', 'DSC (Tg analysis)'],
    },
  },
  {
    id: 'rss-natural-rubber',
    category: 'nat',
    categoryLabel: 'Natural Rubber',
    casNumber: 'Natural Cis-1,4-Polyisoprene',
    casSubtext: 'Smoked Sheet',
    title: 'Ribbed Smoked Sheets (RSS-1 / RSS-3 / RSS-4)',
    specs: [
      { label: 'Dirt Content', value: '< 0.05% (RSS-1)' },
      { label: 'Ash Content', value: '< 0.50% max' },
      { label: 'Plasticity (Po)', value: '≥ 30 min' },
    ],
    applications: 'Heavy Commercial Tires, Anti-Vibration Mounts, Industrial Belting',
    stockStatus: 'Ex-Stock (Kolkata & Dankuni Depots)',
    packaging: '50 kg / 111.11 kg pressed bales with talc coating',
    technicalDetails: {
      standard: 'Green Book International Standards / IS 4588',
      origin: 'Kerala Estate Direct & SE Asian Imports (Thailand/Vietnam)',
      shelfLife: '12 Months optimal',
      storageConditions: 'Elevated wooden dunnage, moisture-free ventilation',
      testProtocols: ['ISO 249 (Dirt Content)', 'ISO 247 (Ash Content)', 'ISO 2007 (Rapid Plasticity Po)'],
    },
  },
  {
    id: 'tsr-isnr-natural-rubber',
    category: 'nat',
    categoryLabel: 'Natural Rubber',
    casNumber: 'TSR Block Crumb',
    casSubtext: 'Natural Rubber',
    title: 'Technically Specified Rubber (ISNR-10 / ISNR-20)',
    specs: [
      { label: 'PRI Retention', value: '≥ 50 (ISNR 10)' },
      { label: 'Volatile Matter', value: '< 0.80% max' },
      { label: 'Nitrogen Content', value: '< 0.60% max' },
    ],
    applications: 'Tire Retreading Compounds, Industrial Rollers, Footwear Moldings',
    stockStatus: 'Ex-Stock (1.2 MT Pallets) & Bulk Indent',
    packaging: '25 kg PE-wrapped blocks in 1.2 MT shrink-wrapped wooden crates',
    technicalDetails: {
      standard: 'IS 4588 / ISO 2000 (TSR Specification)',
      origin: 'Domestic Board Certified & Indonesian/Vietnamese SVR/SIR',
      shelfLife: '18 Months',
      storageConditions: 'Covered buffer storage, ambient humidity',
      testProtocols: ['ISO 2930 (Plasticity Retention Index)', 'ISO 248 (Volatile Matter)', 'ISO 1656 (Nitrogen)'],
    },
  },
  {
    id: 'carbon-black-n220',
    category: 'cb',
    categoryLabel: 'Carbon Black',
    casNumber: 'Intermediate Super',
    casSubtext: 'Abrasion Furnace Black',
    title: 'Furnace Carbon Black (N220 / ISAF)',
    specs: [
      { label: 'Iodine Adsorption No.', value: '121 ± 5 g/kg' },
      { label: 'Oil Absorption (DBP)', value: '114 ± 5 cm³/100g' },
      { label: 'NSA Surface Area', value: '116 ± 5 m²/g' },
    ],
    applications: 'Ultra High-Performance Tire Treads, Heavy-Duty Conveyor Covers',
    stockStatus: 'Ex-Stock (Dankuni) & Bulk Bags',
    packaging: '25 kg multi-wall kraft bags / 1.0 MT jumbo FIBC sacks',
    technicalDetails: {
      standard: 'ASTM D1765 Classification',
      origin: 'Prime Indian Manufacturers & Channel Import',
      shelfLife: 'Indefinite if kept completely dry and sealed',
      storageConditions: 'Moisture-free covered warehouse',
      testProtocols: ['ASTM D1510 (Iodine Number)', 'ASTM D2414 (DBP Absorption)', 'ASTM D6556 (NSA Area)'],
    },
  },
  {
    id: 'carbon-black-n330',
    category: 'cb',
    categoryLabel: 'Carbon Black',
    casNumber: 'High Abrasion Furnace',
    casSubtext: 'Reinforcing Black',
    title: 'Furnace Carbon Black (N330 / HAF)',
    specs: [
      { label: 'Iodine Adsorption No.', value: '82 ± 5 g/kg' },
      { label: 'Oil Absorption (DBP)', value: '102 ± 5 cm³/100g' },
      { label: 'Pour Density', value: '380 ± 20 kg/m³' },
    ],
    applications: 'Truck Tire Carcass, Belting Covers, Extruded Cable Jackets',
    stockStatus: 'Ex-Stock (25kg Kraft Bags / 1MT Sacks)',
    packaging: '25 kg paper bags / 1 MT bulk bags on shrink pallets',
    technicalDetails: {
      standard: 'ASTM D1765 Classification',
      origin: 'Direct Manufacturer Authorized Allocations',
      shelfLife: 'Indefinite when stored dry',
      storageConditions: 'Dry, palletized indoor warehouse',
      testProtocols: ['ASTM D1510 (Iodine No)', 'ASTM D2414 (DBP Oil Absorption)', 'ASTM D1513 (Pour Density)'],
    },
  },
  {
    id: 'vulcanizing-accelerators',
    category: 'rc',
    categoryLabel: 'Rubber Chemicals',
    casNumber: 'Sulfenamide & Thiazole',
    casSubtext: 'Curing Systems',
    title: 'Vulcanizing Accelerators (CBS / TBBS / MBT / TMTD)',
    specs: [
      { label: 'Active Purity', value: '≥ 98.0% min' },
      { label: 'Melting Point (CBS)', value: '98.0°C – 102.0°C' },
      { label: 'Loss on Drying', value: '< 0.30% max' },
    ],
    applications: 'Tire Curing Lines, Industrial Extrusions, Footwear Vulcanization',
    stockStatus: 'Ex-Stock (Kolkata/Dankuni)',
    packaging: '25 kg paper-plastic laminated bags with PE inner bag',
    technicalDetails: {
      standard: 'ISO 9001 Batch Protocol / REACH Compliant',
      origin: 'Authorized Primary Chemical Synthesizers',
      shelfLife: '12 Months (prevent caking and degradation)',
      storageConditions: 'Cool, well-ventilated warehouse below 30°C',
      testProtocols: ['HPLC Purity Assay', 'Melting Point Capillary Test', 'Moisture Karl Fischer'],
    },
  },
  {
    id: 'zinc-oxide-stearic-acid',
    category: 'rc',
    categoryLabel: 'Rubber Chemicals',
    casNumber: 'Inorganic Activator /',
    casSubtext: 'Lubricant System',
    title: 'Active Zinc Oxide 99.5% & Stearic Acid (Rubber Grade)',
    specs: [
      { label: 'Active ZnO Content', value: '≥ 99.5% min' },
      { label: 'Lead (Pb) Impurity', value: '< 0.005% max' },
      { label: 'Surface Area (BET)', value: '4.5 – 6.0 m²/g' },
    ],
    applications: 'All Crosslinked Rubber & Tire Compounding Formulation',
    stockStatus: 'Ex-Stock (25kg HDPE Bags)',
    packaging: '25 kg woven HDPE bags with inner liner / 50 kg bags',
    technicalDetails: {
      standard: 'IS 3399 (Rubber Grade Zinc Oxide) & IS 1675 (Stearic Acid)',
      origin: 'French Process High Purity Synthetics',
      shelfLife: '24 Months',
      storageConditions: 'Dry, palletized covered storage',
      testProtocols: ['EDTA Titration (ZnO Content)', 'AAS (Heavy Metal Trace Assay)', 'BET Surface Area Analysis'],
    },
  },
];
