// import React from 'react';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import HeroSection from '@/components/common/HeroSection';
// import SectionHeader from '@/components/common/SectionHeader';
// import { Card, CardContent } from '@/components/ui/card';
// import StickyContactButton from '@/components/common/StickyContactButton';
// import { MapPin, Factory, Leaf, Zap, CheckCircle } from 'lucide-react';
// import { useState, useEffect } from 'react';

// const BayyavaramPaperMill = () => {
//   const collaborators = [
//     { name: 'TATA Consulting Engineers', image: '/tata.png' },
//     { name: 'Blu Oak Capital', image: '/bluoak.png' },
//     { name: 'RAMKY', image: '/ramky.png' },
//     { name: 'Ecoplanet Bamboo', image: '/ecoplanet.png' },
//   ];
//   const Development = [
//     "/hindhupur/p1.cms",
//     "/hindhupur/p2.jpg",
//     "/hindhupur/p3.jpg",
//   ];
//   const KeyIndustries = [
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
//       setCurrentIndex((prev) => (prev + 1) % WhyInvest.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [WhyInvest.length]);
//   return (
//     <div className="min-h-screen font-[Poppins,sans-serif] bg-gradient-to-tr from-green-50 via-white to-blue-50">
//       <Header />
//       <StickyContactButton />

//       {/* Hero Section */}
//       <HeroSection
//         title="Bayyavaram Paper Mill"
//         subtitle="Sustainable pulp and paper manufacturing in Andhra Pradesh, combining advanced technology with environmental responsibility."
//         // backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//         backgroundImage="/carousels/bayyavaram.jpg"
//       />

//       <section className="section-padding">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="Flagship Development"
//             // title="Bayyavaram Paper Mill Project"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Bayyavaram Paper Mill Project</span>}
//             description="Our state-of-the-art paper manufacturing facility in West Godavari District, Andhra Pradesh, featuring sustainable production processes and modern technology."
//             centered
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//             {/* Text Left - Image Right */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Location & Capacity</h3>
//               <div className="space-y-3 text-muted-foreground">
//                 <div className="flex items-start gap-2">
//                   <MapPin className="text-blue-700 mt-1 w-5 h-5" />
//                   <span><b>Location:</b> West Godavari District, Andhra Pradesh</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Factory className="text-green-700 mt-1 w-5 h-5" />
//                   <span><b>Area:</b> 271 acres in SEZ</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Zap className="text-yellow-600 mt-1 w-5 h-5" />
//                   <span><b>Daily Capacity:</b> 1,200 tonnes of carton board</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <CheckCircle className="text-green-700 mt-1 w-5 h-5" />
//                   <span><b>Status:</b> Operational</span>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={Development[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>

//             {/* Image Left - Text Right */}
//             <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//               <img
//                 src={KeyIndustries[currentIndex]}
//                 alt={`Carousel Image ${currentIndex + 1}`}
//                 className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                 style={{ minHeight: '220px', maxHeight: '220px' }}
//               />
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Manufacturing Excellence</h3>
//               <div className="space-y-3">
//                 <div className="flex items-start gap-3"><Leaf className="w-5 h-5 text-green-700 mt-1" /><span>Eco-friendly processes with waste minimization</span></div>
//                 <div className="flex items-start gap-3"><Factory className="w-5 h-5 text-blue-700 mt-1" /><span>Advanced machinery and automation for consistent quality</span></div>
//                 <div className="flex items-start gap-3"><Zap className="w-5 h-5 text-yellow-600 mt-1" /><span>Eliminate single-use plastics through recyclable paperboard</span></div>
//                 <div className="flex items-start gap-3"><Leaf className="w-5 h-5 text-green-700 mt-1" /><span>Zero Liquid Discharge (ZLD), bamboo/agro-residue feedstock</span></div>
//               </div>
//             </div>

//             {/* Text Left - Image Right */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-green-800">Key Technologies & Specs</h3>
//               <div className="space-y-3">
//                 <div className="flex items-start gap-3"><Zap className="w-5 h-5 text-orange-600 mt-1" /><span>700,000 TPA high-strength carton board capacity</span></div>
//                 <div className="flex items-start gap-3"><Factory className="w-5 h-5 text-blue-700 mt-1" /><span>Advanced PRC-APMP eucalyptus pulping</span></div>
//                 <div className="flex items-start gap-3"><Leaf className="w-5 h-5 text-green-700 mt-1" /><span>Co-generation with fluidized bed boiler</span></div>
//                 <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-blue-900 mt-1" /><span>Saggonda 132kV substation (5 km); robust logistics and highway access</span></div>
//                 <div className="flex items-start gap-3"><Factory className="w-5 h-5 text-green-800 mt-1" /><span>Technology from Jaako Poyry (Finland); market access by Elof Hansson (Sweden)</span></div>
//               </div>
//             </div>
//             <div>
//               <div className="w-full h-[220px] max-w-xl mx-auto overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
//                 <img
//                   src={WhyInvest[currentIndex]}
//                   alt={`Carousel Image ${currentIndex + 1}`}
//                   className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
//                   style={{ minHeight: '220px', maxHeight: '220px' }}
//                 />
//               </div>



//             </div>
//           </div>
//           <div className="space-y-6 text-center">
//             <h3 className="text-xl font-semibold text-green-800">Advisors & Collaborators</h3>
//             <div className="flex flex-wrap justify-center gap-6">
//               {collaborators.map((company, index) => (
//                 <div
//                   key={index}
//                   className="w-[120px] h-[120px] bg-white shadow-md rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg transition"
//                 >
//                   <img
//                     src={company.image}
//                     alt={company.name}
//                     className="w-12 h-12 object-contain mb-2"
//                   />
//                   <p className="text-xs text-center text-muted-foreground">{company.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default BayyavaramPaperMill;

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
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
        subtitle="Sustainable pulp and paper manufacturing in Andhra Pradesh, combining advanced technology with environmental responsibility."
        backgroundImage="/images_jayashankar/paper_mill_1.jpg"
      />

      {/* Sectioned Image Cards with Centered Overlay Text */}
      <section className="py-16 space-y-10">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="relative h-[400px] w-full bg-center bg-cover rounded-2xl shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${sec.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">{sec.title}</h3>
              <ul className="space-y-2 max-w-3xl">
                {sec.points.map((point, i) => (
                  <li key={i} className="text-md md:text-lg">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
