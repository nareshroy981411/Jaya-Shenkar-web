import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Factory, Zap, ArrowRight } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';
import { useNavigate } from "react-router-dom"

const OurStory = () => {
    const companies = [
      {
        icon: <Building2 className="w-8 h-8" />,
        title: "JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED",
        short: "Ultra-modern pharma infrastructure and SEZs in Andhra Pradhesh & Odisha.",
        link: "/business/industrial",
        // image: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image: '/SEZ/sez_4.jpg'
      },
      {
        icon: <Factory className="w-8 h-8" />,
        title: "JAYASHANKAR PULP & PAPER MILLS PRIVATE LIMITED",
        short: "Sustainable paper and pulp manufacturing with global standards.",
        link: "/business/paper",
        // image: "https://images.unsplash.com/photo-1595798896730-9fdf2e709649?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image: '/images_jayashankar/paper_mill_1.jpg'
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED",
        short: "Power, infrastructure, and BOOT model projects across India.",
        link: "/business/power",
        // image: "https://plus.unsplash.com/premium_photo-1695559212636-422fcdb4bf3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image: '/power/tunnel.png'
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "JAYASHANKAR CHEMICALS & PACKAGINGS ASSAM PRIVATE LIMITED",
        short: "Assam’s next-gen hub for green pulp, chemicals, and biocomposites",
        link: "/business/ChemicalsPackaging",
        // image: "https://plus.unsplash.com/premium_photo-1695559212636-422fcdb4bf3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image: '/paper&pulp/pulp1.jpg'
      },
    ];
  const entities = [
    {
      name: 'JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PVT LTD',
      description: 'Leading the development of world-class industrial parks and Special Economic Zones',
      icon: Building2,
    },
    {
      name: 'JAYASHANKAR PULP AND PAPER MILLS PVT LTD',
      description: 'Sustainable packaging solutions and eco-friendly paper manufacturing',
      icon: Factory,
    },
    {
      name: 'JAYASHANKAR POWER AND INFRASTRUCTURE PVT LTD',
      description: 'Robust energy solutions and critical infrastructure development',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="Our Story"
        subtitle="A Journey of Vision, Innovation, and Impact"
        description="From humble beginnings to a multi-sector enterprise, discover the story behind Jaya Shankar Group's rise as a leader in sustainable industrial development."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AboutNavigation />

      {/* Founding Story */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="The Beginning"
            title="Founded on Vision and Excellence"
            description="Jaya Shankar Group was founded by Shri T. Srinivasa Rao, a first-generation entrepreneur with 25+ years of experience in executing large infrastructure and power projects."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Recognized as a Certified Corporate Director by the Institute of Directors (IOD), India, 
                  Shri Rao leads with a mission to deliver excellence, integrity, and sustainable growth. 
                  His vision has been the driving force behind the group's evolution into a multi-sector enterprise.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From its early inception, the group has evolved into a comprehensive industrial ecosystem, 
                  with each entity reflecting the group's passion for development, innovation, and community upliftment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With over 200+ combined man-years of team experience, the group has emerged as a trusted 
                  name for executing high-value, impact-driven projects in pharma, infrastructure, and renewable sectors.
                </p>
              </div>
            </div>
            
            <div className="fade-in animation-delay-200">
              <img
                src="/images/begining.png"
                alt="Corporate leadership and vision"
                className="rounded-lg shadow-xl border-4 border-transparent hover:border-[gold] transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Entities */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Entities"
            title="A Multi-Sector Enterprise"
            description="Three distinct entities working in synergy to create comprehensive industrial ecosystems that drive economic growth and environmental sustainability."
            centered
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <Card key={index} className="group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[gold]/20 transition-all duration-200">
                    <entity.icon className="w-8 h-8 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-900 group-hover:text-[gold] transition-all duration-200">{entity.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{entity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[420px] border-2 border-transparent hover:border-[gold] cursor-pointer"
                onClick={() => navigate(company.link)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${company.title}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-lg font-bold text-navy-900 mb-2 leading-tight min-h-[56px]">
                    {company.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Growth */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Impact"
            title="Setting New Benchmarks"
            description="From industrial corridors in Odisha to sustainable paper mills in Andhra Pradesh, the Jaya Shankar Group continues to set new benchmarks in economic development and environmental responsibility."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200">
              <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:text-[gold] transition-all duration-200">25+</div>
              <div className="text-sm text-gray-600">Years of Leadership Excellence</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-green-700 mb-2 group-hover:text-[gold] transition-all duration-200">200+</div>
              <div className="text-sm text-gray-600">Man-Years Team Experience</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:text-[gold] transition-all duration-200">3</div>
              <div className="text-sm text-gray-600">Specialized Business Entities</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-green-700 mb-2 group-hover:text-[gold] transition-all duration-200">4+</div>
              <div className="text-sm text-gray-600">States of Operation</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
