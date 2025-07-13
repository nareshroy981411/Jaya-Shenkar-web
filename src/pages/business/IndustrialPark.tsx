
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Building2, MapPin, Users, Award, Target, Zap, Leaf, Factory } from 'lucide-react';

const IndustrialPark = () => {
  const keyFeatures = [
    { title: '200 MW Group Captive Thermal Power Plant', icon: Zap },
    { title: '100 MGD Treated Water Supply', icon: Leaf },
    { title: 'Single-Window Clearance', icon: Award },
    { title: 'Ready-to-Use Office/Residential Facilities', icon: Building2 },
    { title: 'Plug-and-Play Manufacturing Units', icon: Factory },
    { title: '40% Land for Green Belts (MOEF Norms)', icon: Leaf },
  ];

  const projects = [
    {
      title: 'Hindupur Integrated Industrial Park',
      location: 'Anantapur District, Andhra Pradesh',
      area: '1,800 acres (1,000 acres SEZ, 800 acres DTA)',
      distance: '110 km from Bengaluru',
      href: '/business/industrial/hindupur'
    },
    {
      title: 'Odisha Pharma City Project',
      location: 'Titilagarh, Balangir District, Odisha',
      area: '1,800 acres',
      jobs: '35,000+ direct/indirect jobs (10 years)',
      href: '/business/industrial/odisha'
    },
  ];

  return (
    <div className="min-h-screen industrial-theme">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED"
        subtitle="A Private Limited Company incorporated under the Companies Act, 1956, promoted by the Jaya Shankar Group. The company's primary objective is to establish industrial parks across India, with focus on pharmaceutical infrastructure and modern manufacturing facilities."
        theme="industrial"
        backgroundImage="/carousels/ind.jpg"
        // backgroundImage="https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttons={[
          { text: 'Explore Projects', href: '#projects' },
          { text: 'For Businesses', href: '/business/industrial/tenants', variant: 'outline' },
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Overview & Opportunities"
             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Creating Integrated Industrial Ecosystems</span>}
            // title="Creating Integrated Industrial Ecosystems"
            description="Our industrial parks are designed to provide comprehensive infrastructure and support services, enabling businesses to focus on their core operations while we handle the complexities of industrial development."
            theme="industrial"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--industrial-accent))] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base text-[hsl(var(--industrial-primary))]">{feature.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[hsl(var(--industrial-primary))] mb-6">Focus Sectors</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--industrial-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>Bulk Drug & Pharmaceutical Manufacturing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--industrial-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>Food Processing & Nutraceuticals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--industrial-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>Biotechnology & Life Sciences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--industrial-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>IT & Data Centers</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial Infrastructure"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Projects"
            // title="Strategic Locations Driving Industrial Growth"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Strategic Locations Driving Industrial Growth</span>}
            description="Each of our industrial parks is strategically located to provide maximum connectivity, skilled workforce access, and government support."
            theme="industrial"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[hsl(var(--industrial-primary))] mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                    {project.distance && (
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4" />
                        <span>{project.distance}</span>
                      </div>
                    )}
                    {project.jobs && (
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.jobs}</span>
                      </div>
                    )}
                    {project.focus && (
                      <div className="flex items-center space-x-2">
                        <Factory className="w-4 h-4" />
                        <span>{project.focus}</span>
                      </div>
                    )}
                  </div>
                  <Button asChild variant="outline" className="w-full border-[hsl(var(--industrial-accent))] text-[hsl(var(--industrial-accent))] hover:bg-[hsl(var(--industrial-accent))] hover:text-white">
                    <Link to={project.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="section-padding bg-[hsl(var(--industrial-light))]">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[hsl(var(--industrial-primary))] mb-6">Environmental Commitment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We allocate 40% of our land for green belts in compliance with MOEF norms, ensuring sustainable development that balances industrial growth with environmental preservation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--industrial-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[hsl(var(--industrial-primary))] mb-2">Zero Discharge</h4>
                <p className="text-sm text-muted-foreground">Advanced pollution control systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--industrial-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[hsl(var(--industrial-primary))] mb-2">Green Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Sustainable building practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--industrial-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[hsl(var(--industrial-primary))] mb-2">MOEF Compliance</h4>
                <p className="text-sm text-muted-foreground">40% land for green belts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialPark;
