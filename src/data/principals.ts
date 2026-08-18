export interface BrandAssociate {
  name: string;
  logo: string;
  category?: 'principal' | 'client';
}

export const PRINCIPALS_AND_CLIENTS: {
  principals: BrandAssociate[];
  clients: BrandAssociate[];
} = {
  principals: [
    { name: 'Reliance Industries', logo: '/logos/reliance.png', category: 'principal' },
    { name: 'LANXESS', logo: '/logos/lanxess.svg', category: 'principal' },
    { name: 'BASF', logo: '/logos/basf.svg', category: 'principal' },
    { name: 'Dow Chemical', logo: '/logos/dow.svg', category: 'principal' },
    { name: 'Evonik', logo: '/logos/evonik.svg', category: 'principal' },
    { name: 'Wacker Chemie', logo: '/logos/wacker.svg', category: 'principal' },
    { name: 'AkzoNobel', logo: '/logos/akzonobel.svg', category: 'principal' },
    { name: 'Solvay', logo: '/logos/solvay.svg', category: 'principal' },
    { name: 'Pidilite', logo: '/logos/pidilite.png', category: 'principal' },
    { name: '3M Industrial', logo: '/logos/3m.svg', category: 'principal' },
    { name: 'Tata Chemicals', logo: '/logos/tata-chemicals.png', category: 'principal' },
    { name: 'Godrej Chemicals', logo: '/logos/godrej.svg', category: 'principal' },
  ],
  clients: [
    { name: 'MRF Tyres', logo: '/logos/mrf.png', category: 'client' },
    { name: 'Apollo Tyres', logo: '/logos/apollo-tyres.svg', category: 'client' },
    { name: 'Bata India', logo: '/logos/bata.png', category: 'client' },
    { name: 'Tata Motors', logo: '/logos/tata-motors.svg', category: 'client' },
    { name: 'Mahindra & Mahindra', logo: '/logos/mahindra.svg', category: 'client' },
    { name: 'Exide Industries', logo: '/logos/exide.svg', category: 'client' },
    { name: 'CEAT Tyres', logo: '/logos/ceat.svg', category: 'client' },
    { name: 'JK Tyre & Industries', logo: '/logos/jk-tyre.png', category: 'client' },
    { name: 'Phoenix Conveyor Belts', logo: '/logos/phoenix.svg', category: 'client' },
    { name: 'Dunlop Industrial', logo: '/logos/dunlop.svg', category: 'client' },
  ],
};
