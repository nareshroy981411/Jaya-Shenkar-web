
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Zap, Settings, Users, FileText, Shield, Target } from 'lucide-react';

const PowerInfrastructure = () => {
  const solutions = [
    {
      title: 'Captive Power Plants (CPPs)',
      description: 'Two 200 MW thermal power plants ensuring reliable, cost-effective, and uninterrupted power supply for industrial units.',
      icon: Zap,
      features: ['200 MW Capacity Each', 'Thermal Power Technology', 'Industrial Unit Support', 'Cost-Effective Solutions']
    },
    {
      title: 'Transportation Networks',
      description: 'Highway systems, underground tunnels, and supporting logistics infrastructure connecting industrial zones.',
      icon: Target,
      features: ['Highway Construction', 'Underground Tunnels', 'Logistics Support', 'Industrial Connectivity']
    }
  ];

  const bootModel = [
    {
      phase: 'Build',
      description: 'Engineering, Procurement, and Construction (EPC) of power facilities',
      icon: Settings
    },
    {
      phase: 'Own',
      description: 'Ownership during the operational period with full responsibility',
      icon: Shield
    },
    {
      phase: 'Operate',
      description: 'Daily operations and maintenance for optimal performance',
      icon: Users
    },
    {
      phase: 'Transfer',
      description: 'Ownership transfer after 15-30 years concession period',
      icon: FileText
    }
  ];

  const technicalSpecs = [
    {
      title: 'Fuel Technology',
      description: 'Coal and natural gas-based thermal plants',
      value: 'Multi-Fuel'
    },
    {
      title: 'Environmental Compliance',
      description: 'Advanced flue gas treatment systems',
      value: '100%'
    },
    {
      title: 'Efficiency Rating',
      description: 'State-of-the-art technology for maximum efficiency',
      value: 'Optimized'
    },
    {
      title: 'Safety Standards',
      description: 'Comprehensive safety protocols and monitoring',
      value: 'Premium'
    }
  ];

    const heroSlides = [
    {
      title:"Powering Progress: Robust Infrastructure Solutions",
      subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      theme:"power",
      buttons:[
        { text: 'Our Solutions', href: '#solutions' },
          { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
     {
      title:"Powering Progress: Robust Infrastructure Solutions",
      subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage:"/power/solar_power.png",
      theme:"power",
      buttons:[
        { text: 'Our Solutions', href: '#solutions' },
          { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
     {
      title:"Powering Progress: Robust Infrastructure Solutions",
      subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage:"/power/tunnel-1.png",
      theme:"power",
      buttons:[
        { text: 'Our Solutions', href: '#solutions' },
          { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
     {
      title:"Powering Progress: Robust Infrastructure Solutions",
      subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage:"https://media.discordapp.net/attachments/1390617522109288519/1394682836459720704/karsten-wurth-rafblRbne3o-unsplash.jpg?ex=6877b31c&is=6876619c&hm=b6c8d4b1dfc8ff74e69a286e78ed21b6411ecd18a8a3fe0943fbe113595971a8&=&format=webp&width=1116&height=744",
      theme:"power",
      buttons:[
        { text: 'Our Solutions', href: '#solutions' },
          { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    }
  ];

  return (
    <div className="min-h-screen power-theme">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection slides={heroSlides}
        // title="Powering Progress: Robust Infrastructure Solutions"
        // subtitle="Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure."
        // theme="power"
        // backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        // buttons={[
        //   { text: 'Our Solutions', href: '#solutions' },
        //   { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
        // ]}
      />

      {/* Solutions Overview */}
      <section id="solutions" className="section-padding bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Solutions & Capabilities"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Comprehensive Power & Infrastructure Services</span>}
            // title="Comprehensive Power & Infrastructure Services"
            description="We provide end-to-end solutions for power generation and infrastructure development, supporting industrial growth across multiple sectors."
            theme="power"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[hsl(var(--power-accent))] rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground mb-6">{solution.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[hsl(var(--power-accent))] rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BOOT Model */}
      <section id="boot-model" className="section-padding bg-gradient-to-r from-green-50 via-white to-green-100">
        <div className="container-width">
          <SectionHeader
            subtitle="BOOT Model"
            // title="Build, Own, Operate, Transfer"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Build, Own, Operate, Transfer</span>}
            description="Our BOOT model ensures efficient project delivery, optimal operations, and seamless knowledge transfer while maintaining the highest standards of compliance and performance."
            theme="power"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootModel.map((phase, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[hsl(var(--power-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-[hsl(var(--power-primary))] mb-3">{phase.phase}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-[hsl(var(--power-light))] border-[hsl(var(--power-accent))]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[hsl(var(--power-primary))] mb-6 text-center">Financial & Legal Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Legal Compliance</h5>
                    <p className="text-sm text-muted-foreground">Operations under Indian Companies Act, 2013 with full statutory compliance</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Revenue Model</h5>
                    <p className="text-sm text-muted-foreground">Revenue generation through Power Purchase Agreements (PPAs)</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Concession Period</h5>
                    <p className="text-sm text-muted-foreground">15-30 years operational period before ownership transfer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 via-white to-yellow-100">
        <div className="container-width">
          <SectionHeader
            subtitle="Technical Excellence"
            // title="State-of-the-Art Technology & Specifications"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">State-of-the-Art Technology & Specifications</span>}
            description="Our power plants utilize the latest technology to ensure maximum efficiency, environmental compliance, and operational safety."
            theme="power"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[hsl(var(--power-accent))] mb-2">{spec.value}</div>
                  <h4 className="font-semibold text-[hsl(var(--power-primary))] mb-2">{spec.title}</h4>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Importance */}
      <section className="section-padding bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[hsl(var(--power-primary))] mb-6">Strategic Importance</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our power and infrastructure projects are integral to supporting our industrial park and pulp & paper development goals, 
              providing stable power supply, reducing energy costs, and positioning us as a key player in regional energy security.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Industrial Support</h4>
                <p className="text-muted-foreground">Dedicated power supply for our industrial parks and manufacturing facilities</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Cost Efficiency</h4>
                <p className="text-muted-foreground">Reduced energy costs through captive power generation and optimal operations</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Energy Security</h4>
                <p className="text-muted-foreground">Contributing to regional energy security and grid stability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="section-padding bg-gradient-to-r from-orange-50 via-white to-orange-100 text-[hsl(var(--power-primary))]">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[hsl(var(--power-primary))] mb-6">Reliable Energy & Infrastructure Services</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Partner with us for customized power solutions and infrastructure development that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default" className="bg-[hsl(var(--power-accent))] text-white hover:bg-[hsl(var(--power-primary))]">
                <Link to="/contact">Inquire About Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[hsl(var(--power-accent))] text-[hsl(var(--power-primary))] hover:bg-[hsl(var(--power-accent))] hover:text-white">
                <Link to="">Customized Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerInfrastructure;
