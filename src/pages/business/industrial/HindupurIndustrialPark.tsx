import React from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';

const sections = [
  {
    title: 'Land Use Plan',
    image: '/images2_jayashankar/Hindupur_1.jpg',
    content: [
      '1,000 Acres – SEZ Zone',
      '800 Acres – Domestic Tariff Area (DTA)',
      'Hierarchical road network and sustainable blue-green zoning',
      'Commercial hubs, walkable green corridors, and workforce housing',
    ],
  },
  {
    title: 'Phased Development Strategy',
    image: '/images2_jayashankar/image_10.webp',
    content: [
      'Phase 1: Core infrastructure, roadways, power & utilities',
      'Phase 2: Expansion to include commercial & workforce services',
      'Phase 3: Green belts, parks, and smart-city tech deployment',
    ],
  },
  {
    title: 'Key Industries Targeted',
    image: '/images2_jayashankar/image_9.jpg',
    content: ['Automotive | Food Processing | Textiles | Logistics | IT/BPO | Warehousing'],
  },
  {
    title: 'Why Invest in Hindhupur?',
    image: '/images2_jayashankar/image_14.jpg',
    content: [
      'Ranked among top Indian states for Ease of Doing Business',
      "Major anchor: KIA Motors' ₹12,800 crore facility",
      'Availability of skilled labor & government incentives',
      'High growth in integrated logistics, data centers, and warehousing',
    ],
  },
];

const HindupurIndustrialPark = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection
        title="Hindupur Integrated Industrial Park"
        subtitle="SEZ and DTA hub near Bengaluru for growth"
        backgroundImage="/carousels/hinduSez_3.webp"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Flagship Development"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Hindupur Integrated Industrial Park</span>}
            description="Our premier 1,800-acre industrial development in Anantapur District, Andhra Pradesh, featuring both SEZ and DTA facilities with strategic proximity to Bengaluru."
            centered
          />

          {/* Loop over each section */}
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden my-10 min-h-[360px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-[0]" />
              {/* Content */}
              <div className="relative z-10 text-white text-center px-4 max-w-2xl space-y-4">
                <h3 className="text-2xl font-serif text-[gold] font-bold hover:text-[#e05210]">{section.title}</h3>
                <div className="space-y-2">
                  {section.content.map((item, i) => (
                    <div key={i} className="flex items-start justify-center gap-2">
                      <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HindupurIndustrialPark;


