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
        description="SEZ and DTA hub near Bengaluru for growth"
        backgroundImage="/carousels/hinduSez_3.webp"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Flagship Development"
            title="Hindupur Integrated Industrial Park"
            description="Our premier 1,800-acre industrial development in Anantapur District, Andhra Pradesh, featuring both SEZ and DTA facilities with strategic proximity to Bengaluru."
            centered
            theme="industrial"
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden min-h-[220px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${section.image})` }}
                aria-label={section.title}
              >
                <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden="true" />
                <div className="relative z-10 text-white text-center px-4 py-8 w-full max-w-2xl mx-auto space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-accent drop-shadow mb-4">{section.title}</h3>
                  <div className="space-y-2">
                    {section.content.map((item, i) => (
                      <div key={i} className="flex items-start justify-center gap-2">
                        <CheckCircle className="text-green-400 mt-1 w-5 h-5" aria-hidden="true" />
                        <span className="font-medium drop-shadow-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HindupurIndustrialPark;


