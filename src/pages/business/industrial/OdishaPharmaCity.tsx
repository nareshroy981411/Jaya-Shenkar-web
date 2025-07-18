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
    image: '/images2_jayashankar/image.png',
    content: [
      'Total Area: 1,800 acres',
      'Industrial Plot Area: 1,000 acres',
      'Greenbelt & Environmental Compliance: 225 acres + 33% within industry plots',
      'Expected Investment: ₹10,000+ Crores',
      'Job Creation: 35,000+ direct & indirect employment opportunities',
    ],
  },
  {
    title: 'Core Facilities',
    image: '/images_jayashankar/image_1.webp',
    content: [
      'Dedicated CETP with Zero Liquid Discharge',
      '100 MGD Treated Water Supply',
      'State Grid Power with Subsidized Tariffs',
      'Logistics, Customs, Testing Labs, Fire Station & Emergency Center',
      'On-site Skill Development and Incubation Centers',
      'Common Infrastructure: drains, roads, bank, ATM, hotels, business centers',
    ],
  },
  {
    title: 'Target Sectors',
    image: '/images_jayashankar/image_5.webp',
    content: [
      'Bulk Drug Manufacturing | Nutraceuticals | Food Processing | Biotech | Packaging | Chemicals',
      'Major Prospective Tenants: Aurobindo, Dr. Reddy’s, Divi’s Labs, Torrent, Hetero, Cadila, Bharat Biotech, Lupin, Laurus Labs',
    ],
  },
  {
    title: 'Locational Advantages',
    image: '/images_jayashankar/Odisha_1.png',
    content: [
      '7 km to Titilagarh Railway Junction',
      '12 km to Utkela Airport',
      'Close to Gopalpur, Vizag, Kakinada & Paradeep Ports',
      'Power-surplus and logistically accessible location',
      'Strong academic ecosystem: 15+ universities and 20+ business schools',
    ],
  },
];

const OdishaPharmaCity = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection
        title="ODISHA PHARMA CITY"
        subtitle="India's top pharma hub driving innovation in healthcare"
        backgroundImage="/odishaparma/image.png"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Flagship Development"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Odisha Pharma City Project</span>}
            description="A dedicated 1,800-acre pharmaceutical manufacturing and industrial park in Titilagarh, Balangir District, Odisha, designed to become a major pharma manufacturing hub in Eastern India."
            centered
          />

          {sections.map((section, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden my-10 min-h-[360px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* Text content */}
              <div className="relative z-10 text-white text-center px-4 max-w-2xl space-y-4">
                <h3 className="text-2xl font-serif text-[gold] hover:text-[gold] font-bold">{section.title}</h3>
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

export default OdishaPharmaCity;
