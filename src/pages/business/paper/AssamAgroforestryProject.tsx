import React from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';

const sections = [
  {
    title: 'Our Vision',
    image: '/images/assam1.png',
    content: [
      'Transition the world from hydrocarbon-based materials to sustainable, bio-based solutions.',
      'Agroforestry and bamboo are the cornerstones of a circular, regenerative, and inclusive bio-economy.',
    ],
  },
  {
    title: 'Our Mission',
    image: '/images/assam2.png',
    content: [
      'Build India’s most advanced and eco-friendly pulp & paper production ecosystem.',
      'Uplift rural economies, enhance soil health, and mitigate climate change.',
    ],
  },
  {
    title: 'The Next Industrial Revolution is Bio-Based',
    image: '/images/bio.png',
    content: [
      'From: Coal (19th century), Oil (20th century)',
      'To: Cellulose & Biofibres (21st century)',
      'New era of bio-materials, biofuels, biochemicals, and green technologies.',
    ],
  },
  {
    title: 'Why Agroforestry?',
    image: '/images/whyagro.jpg',
    content: [
      'Protection against topsoil loss and soil fertility regeneration.',
      'Livestock protection, fodder security, and product diversification.',
      'Stable income for farmers and carbon sequestration.',
    ],
  },
  {
    title: 'Our Agroforestry Model',
    image: '/images/assam5.png',
    content: [
      'Intentional: Trees, crops, and livestock combined for optimal yields.',
      'Integrated: Managed horizontally and vertically for sustainability.',
      'Interactive: Synergistic ecological and economic benefits.',
      'Intensive: Tech-enabled resource optimization.',
    ],
  },
  { 
    title: 'The Assam Advantage',
    image: '/images/assam6.png',
    content: [
      'Ideal climate and soil for bamboo and pulpwood.',
      'Connectivity to markets across India and Southeast Asia.',
      'Supportive land and policy ecosystem for agroforestry.',
    ],
  },
  {
    title: 'Investment Blueprint',
    image: '/images/invest.jpg',
    content: [
      'Phase 1: ₹3,000 Cr — Pulp & Paper (300K T/year pulp, 150K T/year paper, 80K T/year packaging).',
      'Phase 2: ₹500 Cr — Agroforestry and bamboo cultivation.',
      'Phase 3: ₹3,000 Cr — Market Expansion: hygiene papers, bamboo panels.',
      'Phase 4: R&D — Bioplastics, biofuels, and biocomposites.',
    ],
  },
  {
    title: 'India’s Growing Paper Demand',
    image: '/images/demand.png',
    content: [
      '7% annual growth expected.',
      '36M tons by 2030 — driven by e-commerce and hygiene sectors.',
      'Agroforestry bridges the fiber gap: 1.5M T capacity needed annually.',
    ],
  },
  {
    title: 'Circular. Sustainable. Inclusive.',
    image: '/images/assam9.png',
    content: [
      'Beyond greenwashing: social forestry with smallholder farmers.',
      'Traceable systems ensure justice, ecological balance, and shared profits.',
    ],
  },
];


const AssamAgroforestryProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection
        title="India’s Green Industrial Revolution"
        description="Assam Agroforestry Project: Where Sustainability Meets Scale"
        backgroundImage="/paper&pulp/pulp3.jpg"
      />

      <section className="py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="container-width">
          <SectionHeader
            subtitle="Agroforestry for a Greener Future"
            title="Assam Agroforestry Project"
            description="A transformative mission to build India’s most sustainable and inclusive industrial ecosystem through bamboo-based agroforestry."
            centered
            theme="paper"
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${section.image})` }}
                aria-label={section.title}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden="true" />
                <div className="relative z-10 text-white text-center px-4 py-8 w-full max-w-3xl mx-auto space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-serif text-accent drop-shadow">
                    {section.title}
                  </h3>
                  <div className="space-y-3 text-sm sm:text-base md:text-lg leading-relaxed">
                    {section.content.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-center gap-2 max-w-3xl mx-auto text-left"
                      >
                        <CheckCircle className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" aria-hidden="true" />
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

export default AssamAgroforestryProject;
