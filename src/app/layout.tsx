import type { Metadata, Viewport } from 'next';
import { Onest, Inter } from 'next/font/google';
import './globals.css';
import { COMPANY } from '@/data/company';
import { SmoothScroll } from '@/components/SmoothScroll';

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-onest',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B1240',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Usha Commercial Corporation — Polymer & Chemical Specialists Since 1969',
  description:
    '55+ years of unbroken supply-chain trust. Importers, stockists and indenting agents of synthetic rubbers, natural rubber, carbon black and rubber chemicals across Eastern India.',
  keywords: [
    'Usha Commercial Corporation',
    'Synthetic Rubber Kolkata',
    'SBR 1502 SBR 1712',
    'NBR 3305',
    'EPDM Terpolymer',
    'PBR 1220',
    'Natural Rubber RSS-1 RSS-4',
    'ISNR-10 ISNR-20',
    'Furnace Carbon Black N220 N330',
    'Rubber Vulcanizing Chemicals CBS TBBS Zinc Oxide',
    'Kolkata Warehousing & Port Clearance',
    'Chemical Importers Eastern India',
  ],
  authors: [{ name: 'Usha Commercial Corporation' }],
  creator: 'Usha Commercial Corporation',
  publisher: 'Usha Commercial Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Usha Commercial Corporation — Polymer & Chemical Specialists Since 1969',
    description:
      '55+ years of unbroken supply-chain trust. Importers, stockists and indenting agents of synthetic rubbers, natural rubber, carbon black and rubber chemicals across Eastern India.',
    url: 'https://ushacommercialcorporation.com',
    siteName: 'Usha Commercial Corporation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usha Commercial Corporation — Polymer & Chemical Specialists Since 1969',
    description:
      '55+ years of unbroken supply-chain trust. Importers, stockists and indenting agents of synthetic rubbers, natural rubber, carbon black and rubber chemicals.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    description: COMPANY.description,
    foundingDate: '1969',
    founder: {
      '@type': 'Person',
      name: COMPANY.founder,
    },
    url: 'https://ushacommercialcorporation.com',
    telephone: COMPANY.contacts.salesPhone,
    email: COMPANY.contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.headquarters.building}, ${COMPANY.headquarters.unit}, ${COMPANY.headquarters.block}, ${COMPANY.headquarters.area}`,
      addressLocality: COMPANY.headquarters.city,
      postalCode: COMPANY.headquarters.postalCode,
      addressRegion: COMPANY.headquarters.state,
      addressCountry: COMPANY.headquarters.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:30',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'West Bengal' },
      { '@type': 'AdministrativeArea', name: 'Jharkhand' },
      { '@type': 'AdministrativeArea', name: 'Odisha' },
      { '@type': 'AdministrativeArea', name: 'Bihar' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'Synthetic Elastomers (SBR, NBR, EPDM, PBR)',
      'Natural Rubber (RSS, ISNR)',
      'Furnace Carbon Black',
      'Rubber Vulcanizing Additives',
      'ASTM D1418 & D1646 Standards',
    ],
  };

  return (
    <html lang="en" className={`${onest.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-page text-text font-sans antialiased min-h-screen selection:bg-blue-600 selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
