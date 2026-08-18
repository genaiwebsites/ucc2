export interface LogisticsHub {
  id: string;
  idx: string;
  capacityBadge: string;
  name: string;
  subtitle: string;
  location: string;
  sla: string;
  coordinates?: string;
  features: string[];
}

export const LOGISTICS_HUBS: LogisticsHub[] = [
  {
    id: 'dankuni',
    idx: '01',
    capacityBadge: '75,000 Sq.Ft Covered Space',
    name: 'Dankuni Central Logistics Park',
    subtitle: 'Heavy polymer racking & buffer storage',
    location: 'Hooghly Industrial Corridor, West Bengal',
    sla: 'Direct NH-19 / NH-16 Access',
    features: [
      'Climate-controlled polymer bays',
      'Heavy-duty floor loading capacity',
      'Dedicated 30-60 day client buffer stocks',
      'Multi-dock loading for 40ft trailers',
    ],
  },
  {
    id: 'taratala',
    idx: '02',
    capacityBadge: '25,000 Sq.Ft Covered Buffer',
    name: 'Taratala Urban Logistics Depot',
    subtitle: 'Rapid fleet & same-day urban dispatch',
    location: 'Taratala Industrial Estate, Kolkata 700088',
    sla: '4-Hour Emergency Dispatch Window',
    features: [
      'Rapid turnaround urban facility',
      'Immediate access to Kolkata manufacturing belt',
      'Dedicated emergency dispatch vehicles',
      'Direct rail and road connectivity',
    ],
  },
  {
    id: 'kolkata-port',
    idx: '03',
    capacityBadge: 'Direct FCL / LCL Clearance',
    name: 'Kolkata (SPM) Port Terminal',
    subtitle: 'Direct ocean freight & customs clearance',
    location: 'Syama Prasad Mookerjee Port, Kolkata',
    sla: 'Continuous SE Asia & Global Inflow',
    features: [
      'Customs bonded handling and clearance',
      'Port-side de-stuffing and lot QA testing',
      'Direct FCL container indents',
      'Integrated bonded clearing agency',
    ],
  },
  {
    id: 'jamshedpur-corridor',
    idx: '04',
    capacityBadge: 'Dedicated Direct Transit',
    name: 'Jamshedpur Supply Corridor',
    subtitle: 'Auto & belting Tier-1 plant transit',
    location: 'Adityapur Industrial Area, Jharkhand',
    sla: '12-Hour Cross-State Line Haul',
    features: [
      'Dedicated fleet line-haul routes',
      'JIT feed for automotive and conveyor plants',
      'Continuous GPS consignment tracking',
      'Direct plant warehouse offloading',
    ],
  },
];
