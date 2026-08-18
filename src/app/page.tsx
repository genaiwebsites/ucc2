'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Heritage } from '@/components/Heritage';
import { ProductCatalog } from '@/components/ProductCatalog';
import { PrincipalsMarquee } from '@/components/PrincipalsMarquee';
import { ScaleBento } from '@/components/ScaleBento';
import { QualitySLA } from '@/components/QualitySLA';
import { LogisticsHubs } from '@/components/LogisticsHubs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProcurementDesk } from '@/components/ProcurementDesk';
import { SpecModal } from '@/components/SpecModal';
import { Footer } from '@/components/Footer';
import { Product } from '@/data/products';

export default function HomePage() {
  const [selectedProductForRfq, setSelectedProductForRfq] = useState<Product | null>(null);
  const [activeSpecModalProduct, setActiveSpecModalProduct] = useState<Product | null>(null);

  const handleSelectProductForRfq = (product: Product) => {
    setSelectedProductForRfq(product);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRfqGeneric = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Pill Navigation */}
      <Navbar onOpenRfq={handleOpenRfqGeneric} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onContactSales={handleOpenRfqGeneric}
        />

        {/* Heritage & Corporate Overview */}
        <Heritage />

        {/* Interactive Product Portfolio with Category Filtering & Instant Search */}
        <ProductCatalog
          onSelectProductForRfq={handleSelectProductForRfq}
          onOpenSpecModal={(prod) => setActiveSpecModalProduct(prod)}
        />

        {/* Petrochemical Principals & Institutional Clients Infinite Marquee */}
        <PrincipalsMarquee />

        {/* Proven Scale Numbers Bento */}
        <ScaleBento />

        {/* Quality SLA & Zero-Halt Commitment */}
        <QualitySLA onRequestQuote={handleOpenRfqGeneric} />

        {/* Logistics & Warehousing Network */}
        <LogisticsHubs />

        {/* Interactive Procurement FAQ Accordion */}
        <FAQAccordion />

        {/* Direct Commercial Procurement Desk & RFQ Form */}
        <ProcurementDesk selectedProduct={selectedProductForRfq} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Technical Data Sheet / COA Modal */}
      <SpecModal
        product={activeSpecModalProduct}
        onClose={() => setActiveSpecModalProduct(null)}
        onRequestQuote={(product) => {
          handleSelectProductForRfq(product);
        }}
      />
    </div>
  );
}
