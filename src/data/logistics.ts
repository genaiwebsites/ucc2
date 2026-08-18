export interface LogisticsHub {
  id: string;
  idx: string;
  capacityBadge: string;
  name: string;
  subtitle: string;
  location: string;
  sla: string;
  features: string[];
}

export const LOGISTICS_HUBS: LogisticsHub[] = [
  {
    id: 'port-clearance',
    idx: '01',
    capacityBadge: 'Direct FCL / LCL Indenting',
    name: 'Kolkata & Haldia Port Gateways',
    subtitle: 'International ocean freight & bonded customs clearance',
    location: 'Syama Prasad Mookerjee Port & Haldia Dock Complex',
    sla: 'Direct Sea-to-Plant Import Clearance',
    features: [
      'Container-load (FCL) indenting from global petrochemical ports',
      'Integrated customs bonded clearance and handling',
      'Port-side de-stuffing, container tracking, and lot inspection',
      'Handling Southeast Asian, Middle Eastern, and Western shipments',
    ],
  },
  {
    id: 'regional-warehousing',
    idx: '02',
    capacityBadge: 'Buffer Stockholding & Storage',
    name: 'Kolkata Regional Warehousing & Depots',
    subtitle: 'Strategic ex-stock storage & polymer lot management',
    location: 'Industrial Warehousing Corridors, West Bengal',
    sla: 'Ex-Stock Immediate Lot Dispatch',
    features: [
      'Covered storage for synthetic rubber bales, carbon black, and chemicals',
      'Climate and moisture protection for moisture-sensitive additives',
      'Batch traceability with manufacturer Certificate of Analysis on every lot',
      'Buffer inventory management tailored to contracted manufacturing volumes',
    ],
  },
  {
    id: 'state-dispatch',
    idx: '03',
    capacityBadge: 'Direct Factory Line Feed',
    name: 'West Bengal Industrial Fleet Corridor',
    subtitle: 'Rapid turnaround plant delivery & mixing floor supply',
    location: 'Kolkata, Howrah & Hooghly Industrial Belts',
    sla: 'Direct Factory Floor Delivery',
    features: [
      'Dedicated point-to-point truckload deliveries to manufacturing plants',
      'Same-day and next-day scheduled dispatches to prevent Banbury mixer downtime',
      'Supply to footwear moulding, tyre retreading, and industrial compounding units',
      'Experienced logistical coordination ensuring safe chemical handling',
    ],
  },
  {
    id: 'interstate-transit',
    idx: '04',
    capacityBadge: 'Inter-State Supply Corridor',
    name: 'Eastern Subcontinent Supply Corridor',
    subtitle: 'Cross-state raw material feeds for heavy manufacturing',
    location: 'Jharkhand, Odisha, Bihar & Neighboring Industrial Hubs',
    sla: 'Scheduled Heavy Line-Haul Transit',
    features: [
      'Regular inter-state freight transit to Jamshedpur / Adityapur automotive hubs',
      'Bulk supply feeds to heavy conveyor belting and technical rubber plants',
      'Coordinated transport documentation (e-Way bills, transit insurance, test sheets)',
      'Reliable supply chain backup protecting 24/7 continuous shift operations',
    ],
  },
];
