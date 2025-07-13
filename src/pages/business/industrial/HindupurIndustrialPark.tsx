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
        subtitle="A flagship industrial development combining SEZ and DTA facilities, strategically located near Bengaluru for maximum connectivity and growth."
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
              <div className="absolute inset-0 bg-black/60 z-0" />
              {/* Content */}
              <div className="relative z-10 text-white text-center px-4 max-w-2xl space-y-4">
                <h3 className="text-2xl font-bold">{section.title}</h3>
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



// import React from 'react';
// import { CheckCircle } from 'lucide-react';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import HeroSection from '@/components/common/HeroSection';
// import SectionHeader from '@/components/common/SectionHeader';
// import StickyContactButton from '@/components/common/StickyContactButton';
// import { useState, useEffect } from 'react';

// const HindupurIndustrialPark = () => {
//   const images = [
//     "/hindhupur/sec1.jpg",
//     "/hindhupur/sec12.jpeg",
//     "/hindhupur/sec123.jpg",
//   ];
//     const Development = [
//     "/hindhupur/p1.cms",
//     "/hindhupur/p2.jpg",
//     "/hindhupur/p3.jpg",
//   ];
//     const KeyIndustries = [
//     "/hindhupur/food.jpg",
//     "/hindhupur/textile.jpg",
//     "/hindhupur/warehous.jpg",
//   ];  
//   const WhyInvest = [
//     "/hindhupur/kia.jpg",
//     "/hindhupur/labour.jpg",
//     "/hindhupur/storing.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <StickyContactButton />

//       {/* Hero Section */}
//       <HeroSection
//         title="Hindupur Integrated Industrial Park"
//         subtitle="A flagship industrial development combining SEZ and DTA facilities, strategically located near Bengaluru for maximum connectivity and growth."
//         // backgroundImage="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//         backgroundImage="/carousels/hinduSez_3.webp"
//       />

//       <section className="section-padding">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="Flagship Development"
//             // title="Hindupur Integrated Industrial Park"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Hindupur Integrated Industrial Park</span>}
//             description="Our premier 1,800-acre industrial development in Anantapur District, Andhra Pradesh, featuring both SEZ and DTA facilities with strategic proximity to Bengaluru."
//             centered
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//             {/* Text Left - Image Right */}
//             {/* Land Use Plan */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-blue-800">Land Use Plan</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span><b>1,000 Acres</b> – SEZ Zone</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span><b>800 Acres</b> – Domestic Tariff Area (DTA)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>Hierarchical road network and sustainable blue-green zoning</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>Commercial hubs, walkable green corridors, and workforce housing</span>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={images[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>

//             {/* Image Left - Text Right */}
//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={Development[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>
//             {/* Phased Development Strategy */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-blue-800">Phased Development Strategy</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span><b>Phase 1:</b> Core infrastructure, roadways, power & utilities</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span><b>Phase 2:</b> Expansion to include commercial & workforce services</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span><b>Phase 3:</b> Green belts, parks, and smart-city tech deployment</span>
//                 </div>
//               </div>
//             </div>


//             {/* Text Left - Image Right */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-blue-800">Key Industries Targeted</h3>
//               <p className="text-muted-foreground">Automotive | Food Processing | Textiles | Logistics | IT/BPO | Warehousing</p>
//             </div>
//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={KeyIndustries[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>

//             {/* Image Left - Text Right */}
//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={WhyInvest[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>
//             {/* Why Invest in Anantapur? */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-blue-800">Why Invest in Anantapur?</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>Ranked among top Indian states for Ease of Doing Business</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>Major anchor: KIA Motors' ₹12,800 crore facility</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>Availability of skilled labor & government incentives</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-blue-600 mt-1 w-5 h-5" />
//                   <span>High growth in integrated logistics, data centers, and warehousing</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HindupurIndustrialPark;
