// import React from 'react';
// import { CheckCircle } from 'lucide-react';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import HeroSection from '@/components/common/HeroSection';
// import SectionHeader from '@/components/common/SectionHeader';
// import StickyContactButton from '@/components/common/StickyContactButton';
// import { useState, useEffect } from 'react';

// const OdishaPharmaCity = () => {
//     const landUse = [
//       "/hindhupur/sec1.jpg",
//       "/hindhupur/sec12.jpeg",
//       "/hindhupur/sec123.jpg",
//     ];
//       const Facilities = [
//       "/hindhupur/p1.cms",
//       "/hindhupur/p2.jpg",
//       "/hindhupur/p3.jpg",
//     ];
//       const TargetSectors = [
//       "/hindhupur/food.jpg",
//       "/hindhupur/textile.jpg",
//       "/hindhupur/warehous.jpg",
//     ];  
//     const Advantages = [
//       "/hindhupur/kia.jpg",
//       "/hindhupur/labour.jpg",
//       "/hindhupur/storing.jpg",
//     ];
  
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % Advantages.length);
//       }, 3000); // Change every 3 seconds
  
//       return () => clearInterval(interval);
//     }, [Advantages.length]);
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <StickyContactButton />

//       {/* Hero Section */}
//       <HeroSection
//         title="Odisha Pharma City"
//         subtitle="India's premier pharmaceutical manufacturing hub, fostering innovation and excellence in healthcare manufacturing."
//         // backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//       backgroundImage='/carousels/odishaB.jpg'
//       />

//       <section className="section-padding">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="Flagship Development"
//             // title="Odisha Pharma City Project"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Odisha Pharma City Project</span>}
//             description="A dedicated 1,800-acre pharmaceutical manufacturing and industrial park in Titilagarh, Balangir District, Odisha, designed to become a major pharma manufacturing hub in Eastern India."
//             centered
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//             {/* Text Left - Image Right */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Land Use Plan</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span><b>Total Area:</b> 1,800 acres</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span><b>Industrial Plot Area:</b> 1,000 acres</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span><b>Greenbelt & Environmental Compliance:</b> 225 acres + 33% within industry plots</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span><b>Expected Investment:</b> ₹10,000+ Crores</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span><b>Job Creation:</b> 35,000+ direct & indirect employment opportunities</span>
//                 </div>
//               </div>
//             </div>

//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={landUse[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>

//             {/* Image Left - Text Right */}
//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={Facilities[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Core Facilities</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Dedicated CETP with Zero Liquid Discharge</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>100 MGD Treated Water Supply</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>State Grid Power with Subsidized Tariffs</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Logistics, Customs, Testing Labs, Fire Station & Emergency Center</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>On-site Skill Development and Incubation Centers</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Common Infrastructure: Stormwater drains, roads, bank, ATM, hotels, business centers</span>
//                 </div>
//               </div>
//             </div>


//             {/* Text Left - Image Right */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Target Sectors</h3>
//               <p className="text-muted-foreground">Bulk Drug Manufacturing | Nutraceuticals | Food Processing | Biotech | Packaging | Chemicals</p>
//               <h3 className="text-xl font-semibold text-green-800 mt-6">Major Prospective Tenants</h3>
//               <p className="text-muted-foreground">Aurobindo Pharma | Dr. Reddy’s | Divi’s Labs | Torrent | Hetero | Cadila | Bharat Biotech | Lupin | Laurus Labs and more</p>
//             </div>
//              <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={TargetSectors[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>

//             {/* Image Left - Text Right */}
//             <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={Advantages[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Locational Advantages</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>7 km to Titilagarh Railway Junction</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>12 km to Utkela Airport</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Near to Gopalpur, Vizag, Kakinada & Paradeep Ports</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Power-surplus and logistically accessible location</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
//                   <span>Strong academic ecosystem with 15+ universities and 20+ business schools</span>
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

// export default OdishaPharmaCity;

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
        title="Odisha Pharma City"
        subtitle="India's premier pharmaceutical manufacturing hub, fostering innovation and excellence in healthcare manufacturing."
        backgroundImage="/carousels/odishaB.jpg"
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
              <div className="absolute inset-0 bg-black/60 z-0" />

              {/* Text content */}
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

export default OdishaPharmaCity;
