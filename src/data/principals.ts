export interface BrandAssociate {
  name: string;
  logo: string;
  category?: 'principal' | 'partner';
  role?: string;
}

export const PRINCIPALS_AND_PARTNERS: BrandAssociate[] = [
  {
    name: 'Reliance Industries',
    logo: '/logos/reliance.png',
    role: 'Synthetic Elastomers (SBR / PBR)',
    category: 'principal',
  },
  {
    name: 'DOW Chemical',
    logo: '/logos/dow.svg',
    role: 'EPDM Terpolymer & Specialty Polymers',
    category: 'principal',
  },
  {
    name: 'ARLANXEO',
    logo: '/logos/arlanxeo.jpg',
    role: 'Synthetic Rubber (LANXESS Synthetic Heritage)',
    category: 'principal',
  },
  {
    name: 'NOCIL Limited',
    logo: '/logos/nocil.gif',
    role: 'Vulcanizing Accelerators & Antioxidants',
    category: 'principal',
  },
  {
    name: 'Apcotex Industries',
    logo: '/logos/apcotex.jpg',
    role: 'Synthetic Rubber (NBR & High Styrene)',
    category: 'principal',
  },
  {
    name: 'Madhu Silica',
    logo: '/logos/madhu-silica.png',
    role: 'Precipitated Silica Fillers',
    category: 'principal',
  },
  {
    name: 'DuPont',
    logo: '/logos/dupont.png',
    role: 'Elastomeric Performance Additives',
    category: 'principal',
  },
  {
    name: 'Nouryon',
    logo: '/logos/nouryon.png',
    role: 'Specialty Organic Peroxides & Curatives',
    category: 'principal',
  },
  {
    name: 'Godrej Industries',
    logo: '/logos/godrej.svg',
    role: 'Stearic Acid & Rubber Grade Fatty Acids',
    category: 'principal',
  },
  {
    name: 'APAR Industries',
    logo: '/logos/apar.png',
    role: 'Rubber Process Oils & Specialty Lubricants',
    category: 'principal',
  },
  {
    name: 'TIMAB Magnesium',
    logo: '/logos/timab.png',
    role: 'Magnesium Oxide Activators',
    category: 'principal',
  },
];
