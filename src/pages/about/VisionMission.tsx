import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Globe, Users, Leaf, Award, Building } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const VisionMission = () => {
  const missionPoints = [
    {
      icon: Building,
      title: 'World-Class Infrastructure',
      description: 'Develop world-class infrastructure through SEZs, power plants, and manufacturing hubs.',
    },
    {
      icon: Globe,
      title: 'Innovation & Collaboration',
      description: 'Drive innovation through strategic global collaborations and cutting-edge technologies.',
    },
    {
      icon: Award,
      title: 'Stakeholder Value',
      description: 'Create value for stakeholders through transparency, compliance, and operational excellence.',
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Promote environmental and social responsibility through circular economy practices and green infrastructure.',
    },
    {
      icon: Users,
      title: 'Inclusive Growth',
      description: 'Foster inclusive growth by generating employment, supporting rural economies, and uplifting local communities.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      
      <HeroSection
        title="Vision & Mission"
        subtitle="Guiding Principles for Sustainable Growth"
        description="Our vision and mission statements define our commitment to transformative industrial development and environmental stewardship."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AboutNavigation />

      {/* Vision */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To be a transformative force in industrial development and sustainability, building 
                ecosystems that empower industries, communities, and the environment alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Mission"
            title="Five Pillars of Our Commitment"
            description="Our mission is built on five fundamental pillars that guide every aspect of our business operations and strategic decisions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <Card key={index} className="group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[gold]/20 transition-all duration-200">
                    <point.icon className="w-7 h-7 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-900 group-hover:text-[gold] transition-all duration-200">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-900">Transforming Vision into Reality</h2>
            <p className="text-xl text-green-800 mb-8 leading-relaxed">
              Our vision and mission drive every project, partnership, and innovation we pursue. 
              Together, we're building a sustainable future for industries and communities across India.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
