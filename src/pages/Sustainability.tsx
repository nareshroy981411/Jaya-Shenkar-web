
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Leaf, Users, Shield, Award, Droplets, Recycle } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';
// import { heroSlides } from './Index';

const Sustainability = () => {
  const commitments = [
    {
      title: 'Environmental Stewardship',
      description: '360° approach to sustainable development with circular economy principles',
      icon: Leaf,
      details: ['40% land for green belts (MOEF compliance)', 'Zero Liquid Discharge systems', 'Advanced pollution control']
    },
    {
      title: 'Community Engagement',
      description: 'Creating employment and supporting local economic development',
      icon: Users,
      details: ['35,000+ jobs in Odisha project', '1,800 direct / 5,000 indirect jobs', 'Support to local farmers']
    },
  ];

  const certifications = [
    'Indian Companies Act, 2013 Compliance',
    'MOEF (Ministry of Environment) Norms',
    'CPCB (Central Pollution Control Board) Standards',
    'ISO Environmental Management Systems',
    'Zero Liquid Discharge Certification',
    'SEZ Environmental Clearances'
  ];
  const heroSlides =
    [
      {
        title: "Sustainability",
        description: "Our commitment to environmental stewardship, social responsibility, and good governance drives every aspect of our operations, creating value for all stakeholders.",
        // backgroundImage: "/paper&pulp/pulp2.jpg",
        backgroundVideo: "/bg-video/road.mp4",

      },
      {
        title: "Sustainability",
        description: "Our commitment to environmental stewardship, social responsibility, and good governance drives every aspect of our operations, creating value for all stakeholders.",
        backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",

      },
      {
        title: "Sustainability",
        description: "Our commitment to environmental stewardship, social responsibility, and good governance drives every aspect of our operations, creating value for all stakeholders.",
        backgroundImage: "/paper&pulp/pulp3.jpg",

      },
    ];
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}

      <HeroSection slides={heroSlides} />
            {/* Hero Section with Background Video */}
      {/* <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bg-video/road.mp4"
        />
        <div className="absolute inset-0  z-0 pointer-events-none" />
        <div className="relative z-10 w-full">
          <HeroSection
            description="Our commitment to environmental stewardship, social responsibility, and good governance drives every aspect of our operations, creating value for all stakeholders."
            title="Sustainability"
          />
        </div>
      </div> */}

      {/* Our Commitment */}
      <section id="commitment" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Commitment"
            title="360° Approach to Sustainable Development"
            description="We believe in creating value that extends beyond financial returns, focusing on environmental protection, social progress, and responsible governance."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <commitment.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{commitment.title}</h3>
                      <p className="text-muted-foreground mb-4">{commitment.description}</p>
                      <ul className="space-y-2">
                        {commitment.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section id="environmental" className="section-padding bg-agro-light">
        <div className="container-width">
          <SectionHeader
            subtitle="Environmental Stewardship"
            title="Leading by Example in Environmental Protection"
            description="Our environmental initiatives go beyond compliance, setting new standards for sustainable industrial development."
            centered
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-8">
            <Card>
              <CardContent className="p-4 xs:p-6 text-center">
                <div className="w-12 xs:w-16 h-12 xs:h-16 bg-agro-primary rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4">
                  <Leaf className="w-6 xs:w-8 h-6 xs:h-8 text-white" />
                </div>
                <h4 className="font-heading text-base xs:text-lg font-semibold mb-1 xs:mb-2 text-agro-primary">Green Belt Development</h4>
                <p className="text-xs xs:text-sm text-agro-dark mb-2 xs:mb-4">40% of land allocated for green belts in compliance with MOEF norms</p>
                <div className="text-lg xs:text-2xl font-bold text-agro-accent">40%</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 xs:p-6 text-center">
                <div className="w-12 xs:w-16 h-12 xs:h-16 bg-power-accent rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4">
                  <Droplets className="w-6 xs:w-8 h-6 xs:h-8 text-white" />
                </div>
                <h4 className="font-heading text-base xs:text-lg font-semibold mb-1 xs:mb-2 text-power-primary">Water Conservation</h4>
                <p className="text-xs xs:text-sm text-power-dark mb-2 xs:mb-4">Advanced water treatment and zero liquid discharge systems</p>
                <div className="text-lg xs:text-2xl font-bold text-power-accent">10 m³/t</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 xs:p-6 text-center">
                <div className="w-12 xs:w-16 h-12 xs:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4">
                  <Recycle className="w-6 xs:w-8 h-6 xs:h-8 text-white" />
                </div>
                <h4 className="font-heading text-base xs:text-lg font-semibold mb-1 xs:mb-2 text-orange-700">Circular Economy</h4>
                <p className="text-xs xs:text-sm text-orange-900 mb-2 xs:mb-4">Reduce, reuse, recycle principles across all operations</p>
                <div className="text-lg xs:text-2xl font-bold text-orange-500">100%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="Community Engagement"
                title="Creating Shared Value for Local Communities"
                description="Our projects generate significant employment opportunities and support local economic development, creating lasting positive impact."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35,000+</div>
                  <p className="text-sm text-muted-foreground">Jobs in Odisha Project</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6,800+</div>
                  <p className="text-sm text-muted-foreground">Total Direct & Indirect Jobs</p>
                </div>
              </div>

            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Community Development"
                className="rounded-lg shadow-lg w-full h-40 xs:h-56 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="Certifications & Compliance"
            title="Exceeding Regulatory Standards"
            description="We maintain the highest standards of compliance and certification, ensuring our operations meet and exceed all regulatory requirements."
            centered
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-6">
            {certifications.map((certification, index) => (
              <Card key={index}>
                <CardContent className="p-4 xs:p-6 text-center">
                  <div className="w-8 xs:w-12 h-8 xs:h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4">
                    <Award className="w-4 xs:w-6 h-4 xs:h-6 text-black" />
                  </div>
                  <h4 className="font-heading font-semibold text-xs xs:text-sm text-black">{certification}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9DD48B] text-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-white mb-4 xs:mb-6">Join Us in Building a Sustainable Future</h2>
            <p className="text-xs xs:text-base md:text-xl text-white/90 mb-6 xs:mb-8 leading-relaxed">
              Partner with us to create value that benefits not just businesses, but also our planet and people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-bold text-agro-primary hover:text-agro-dark">
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
