
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Building2, MapPin, Users, Award, Target, Zap, Leaf, Factory } from 'lucide-react';
import { sub } from 'date-fns';
import { useKeenSlider } from 'keen-slider/react'
import { Badge } from "@/components/ui/badge";

const imageUrls = [
  '/images/image.png',
  '/images/image1.png',
  '/images/image2.png'
]


const IndustrialPark = () => {

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 15 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);
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
      title: 'Odisha Pharma City Project',
      location: 'Titilagarh, Balangir District, Odisha',
      area: '1,800 acres',
      jobs: '35,000+ direct/indirect jobs (10 years)',
      href: '/business/industrial/odisha'
    },
    {
      // subtitle: 'UPCOMING PROJECT ',
      title: 'Hindupur Integrated Industrial Park (Upcoming Project)',
      location: 'Anantapur District, Andhra Pradesh',
      area: '1,800 acres (1,000 acres SEZ, 800 acres DTA)',
      distance: '110 km from Bengaluru',
      href: '/business/industrial/hindupur'
    },
  ];

  return (
    <div className="min-h-screen industrial-theme">
      <Header />
      <StickyContactButton />

      {/* Hero Section (responsive version only) */}
      <HeroSection
        title="JayaShankar Multi Product Industrial Park & SEZ Private Limited"
        description="Integrated Industrial Ecosystems"
        backgroundImage="/carousels/ind.jpg"
      />
      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Overview & Opportunities"
            title="Creating Integrated Industrial Ecosystems"
            theme="industrial"
            centered
          />
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Image Left */}
            <div className="relative h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden order-1 lg:order-none">
              <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden h-full">
                {imageUrls.map((src, idx) => (
                  <div className="keen-slider__slide h-full" key={idx}>
                    <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <button onClick={() => slider.current?.prev()} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md">&#8592;</button>
              <button onClick={() => slider.current?.next()} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md">&#8594;</button>
            </div>
            {/* Text Right */}
            <div className="px-2 xs:px-4 md:px-6 order-2 lg:order-none">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight">
                Integrated Industrial Infrastructure
              </h2>
              <div className="border-t border-gray-400 my-4 xs:my-6 w-full max-w-xs xs:max-w-sm md:max-w-md"></div>
              <p className="text-xs xs:text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6 max-w-xs xs:max-w-sm md:max-w-md">
                Our industrial parks are designed to provide comprehensive infrastructure and support services, enabling businesses to focus on their core operations while we handle the complexities of industrial development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Text Left */}
            <div className="px-2 xs:px-4 md:px-6 order-2 lg:order-none">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight">
                Focus Sectors
              </h2>
              <div className="border-t border-gray-400 my-4 xs:my-6 w-full max-w-xs xs:max-w-sm md:max-w-md"></div>
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
            {/* Image Right */}
            <div className="relative h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden order-1 lg:order-none">
              <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden h-full">
                  <img
                  src="/odishaparma/pharma4.jpg"
                  alt="Industrial Infrastructure"
                  className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover max-w-full"
                  style={{ maxWidth: '500px' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Projects"
            title="Strategic Locations Driving Industrial Growth"
            description="Each of our industrial parks is strategically located to provide maximum connectivity, skilled workforce access, and government support."
            theme="industrial"
            centered
          />
          {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
                <CardContent className="p-6">
                  {project.subtitle && <h2 className="text-xl font-bold text-blue-800 mb-3">{project.subtitle}</h2>}
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
                  </div>
                  <Button asChild variant="outline" className="w-full border-[hsl(var(--industrial-accent))] text-[hsl(var(--industrial-accent))] hover:bg-[hsl(var(--industrial-accent))] hover:text-white">
                    <Link to={project.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">{project.subtitle}</h2>
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
