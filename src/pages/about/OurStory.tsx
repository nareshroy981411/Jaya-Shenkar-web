import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Factory, Zap } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const OurStory = () => {
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
