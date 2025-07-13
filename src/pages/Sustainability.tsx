
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
    {
      title: 'Water Stewardship',
      description: 'We Value Every Single Drop - Advanced water management',
      icon: Droplets,
      details: ['10 m³/t fresh water consumption', 'Ultra Filtration technology', 'Tertiary Treatment with Ozone & UV']
    },
    {
      title: 'Circular Economy',
      description: 'Reduce, reuse, recycle principles across all operations',
      icon: Recycle,
      details: ['Virgin fiber focus for premium quality', 'Enhanced recyclability solutions', 'Waste-to-energy initiatives']
    }
  ];

  const certifications = [
    'Indian Companies Act, 2013 Compliance',
    'MOEF (Ministry of Environment) Norms',
    'CPCB (Central Pollution Control Board) Standards',
    'ISO Environmental Management Systems',
    'Zero Liquid Discharge Certification',
    'SEZ Environmental Clearances'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="Sustainability & ESG: For Planet & People"
        subtitle="Our commitment to environmental stewardship, social responsibility, and good governance drives every aspect of our operations, creating value for all stakeholders."
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        buttons={[
          { text: 'Our Commitment', href: '#commitment' },
          { text: 'Environmental Initiatives', href: '#environmental', variant: 'outline' }
        ]}
      />

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
      <section id="environmental" className="section-padding bg-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Environmental Stewardship"
            title="Leading by Example in Environmental Protection"
            description="Our environmental initiatives go beyond compliance, setting new standards for sustainable industrial development."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Green Belt Development</h4>
                <p className="text-sm text-muted-foreground mb-4">40% of land allocated for green belts in compliance with MOEF norms</p>
                <div className="text-2xl font-bold text-green-600">40%</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Water Conservation</h4>
                <p className="text-sm text-muted-foreground mb-4">Advanced water treatment and zero liquid discharge systems</p>
                <div className="text-2xl font-bold text-blue-500">10 m³/t</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Circular Economy</h4>
                <p className="text-sm text-muted-foreground mb-4">Reduce, reuse, recycle principles across all operations</p>
                <div className="text-2xl font-bold text-orange-600">100%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="rounded-lg shadow-lg"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-[#2B3D43 ]" />
                  </div>
                  <h4 className="font-semibold text-sm">{certification}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9dd48b] text-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Join Us in Building a Sustainable Future</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Partner with us to create value that benefits not just businesses, but also our planet and people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
                <Link to="/business/paper">Our Sustainable Solutions</Link>
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
