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

  const solutions = [
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
        // subtitle="Guiding Principles for Sustainable Growth"
        description="Our vision and mission statements define our commitment to transformative industrial development and environmental stewardship."
        backgroundImage="/images/vision.jpg"
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

      <section className="section-padding bg-white ">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Mission"
            title="Five Pillars of Our Commitment"
            description="Our mission is built on five fundamental pillars that guide every aspect of our business operations and strategic decisions."
            centered
            theme="default"
          />

          <section className="py-16 bg-white bg-[url('/images/assam2.png')] bg-cover bg-center bg-no-repeat p-6 rounded-md opacity-">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT: Text Block with Background Image */}
              <div className="">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  Driving Sustainable, Inclusive, and Innovative Growth</h2>
                <p className="mb-4 font-semibold">
                  Empowering communities, protecting the environment, and building world-class infrastructure through collaboration and innovation.                </p>
                <ul className="list-disc list-inside space-y-2 font-semibold">
                  <li>Building SEZs, power plants, and factories</li>
                  <li>Partnering for new ideas and technology.</li>
                  <li>Caring for the environment through sustainable methods.</li>
                  <li>Creating jobs and supporting communities.</li>
                </ul>
              </div>

              {/* RIGHT: Feature Grid with Background Image */}
              <div className=" relative grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 ">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-teal-800 text-white p-4 rounded-md shadow-sm"
                  >
                    {/* <div className="bg-white/10 p-2 rounded-md">{item.icon}</div> */}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>


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
