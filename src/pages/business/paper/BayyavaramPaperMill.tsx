import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';

const sections = [
  {
    title: 'Location & Capacity',
    points: [
      'Location: West Godavari District, Andhra Pradesh',
      'Area: 271 acres in SEZ',
      'Daily Capacity: 1,200 tonnes of carton board', 
      'Status: Operational',
    ],
    image: '/images_jayashankar/West_Godavari.png',
  },
  {
    title: 'Manufacturing Excellence',
    points: [
      'Eco-friendly processes with waste minimization',
      'Advanced machinery and automation for consistent quality',
      'Recyclable paperboard to replace single-use plastics',
      'Zero Liquid Discharge (ZLD), bamboo/agro-residue feedstock',
    ],
    image: '/images_jayashankar/manufacturing.webp',
  },
  {
    title: 'Key Technologies & Specs',
    points: [
      '700,000 TPA high-strength carton board capacity',
      'Advanced PRC-APMP eucalyptus pulping',
      'Co-generation with fluidized bed boiler',
      'Saggonda 132kV substation; excellent logistics access',
      'Tech from Jaako Poyry (Finland), market via Elof Hansson (Sweden)',
    ],
    image: '/images_jayashankar/image.png',
  },
];

const collaborators = [
  { name: 'TATA Consulting Engineers', image: '/tata.png' },
  { name: 'Blu Oak Capital', image: '/bluoak.png' },
  { name: 'RAMKY', image: '/ramky.png' },
  { name: 'Ecoplanet Bamboo', image: '/ecoplanet.png' },
];

const BayyavaramPaperMill = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />

      <HeroSection
        title="Bayyavaram Paper Mill"
        subtitle="Eco-friendly pulp and paper unit in Andhra Pradesh"
        backgroundImage="/images_jayashankar/paper_mill_1.jpg"
      />

      {/* Sectioned Image Cards with Centered Overlay Text */}
      <section className="section-padding">
        <div className="container-width">
        <SectionHeader
            subtitle="Flagship Development"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Bayyavaram Paper Mill Project</span>}
            description="Our 271-acre SEZ development in Bayyavaram, West Godavari District, Andhra Pradesh, offers exceptional connectivity just 5 km from the River Godavari"
            centered
          />
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden my-10 min-h-[360px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${sec.image})` }}
          >
            {/* <div className="absolute inset-0 bg-black/30 z-[-2]" /> */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center text-white ">
              <h3 className="text-2xl font-serif text-[gold] font-bold mb-4">{sec.title}</h3>
              <ul className="space-y-2 max-w-3xl">
                {sec.points.map((point, i) => (
                  <li key={i} className="text-md md:text-lg">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="section-padding text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-6">Advisors & Collaborators</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {collaborators.map((company, index) => (
            <div
              key={index}
              className="w-[120px] h-[120px] bg-white shadow-md rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-xs text-center text-muted-foreground">{company.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BayyavaramPaperMill;
