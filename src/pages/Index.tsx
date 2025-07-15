import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { ArrowRight, Building2, Factory, Zap, Users, Award, Globe, Leaf } from 'lucide-react';
import CompanyMap from './CompanyMap';

const Index = () => {
  const heroSlides = [
    {
      title: 'Jaya Shankar Group: Pioneering Sustainable Industrial Growth Across India',
      subtitle: 'Leading the way in Industrial Park & SEZ Development, Pulp & Paper, and Power & Infrastructure with a commitment to Planet & People.',
      // backgroundImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundImage: '/banner2.png',
      buttons: [
        { text: 'Explore Our Companies', href: '#verticals' },
        { text: 'Our Projects', href: '/projects', variant: 'outline' as const },
      ],
    },
    {
      title: 'Enabling a Sustainable Tomorrow',
      subtitle: 'Delivering sustainable initiatives in carbon neutrality, water positivity, circularity and green supply chain.',
      // backgroundImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundImage: '/paper.png',
      buttons: [
        { text: 'Learn About Sustainability', href: '/sustainability' },
        { text: 'Our Impact', href: '/sustainability', variant: 'outline' as const },
      ],
    },
    {
      title: 'World-Class Industrial Parks & Special Economic Zones',
      subtitle: 'Developing state-of-the-art industrial infrastructure across India, fostering innovation and economic growth.',
      // backgroundImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundImage: '/odishaparma/pharma6.png',
      buttons: [
        { text: 'Industrial Solutions', href: '/business/industrial' },
        { text: 'View Projects', href: '/projects', variant: 'outline' as const },
      ],
    },
    {
      title: 'Powering Progress: Robust Infrastructure Solutions',
      subtitle: 'Building critical energy and transportation infrastructure to support India\'s industrial transformation.',
      // backgroundImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundImage: '/power/solar_power.png',

      buttons: [
        { text: 'Power Solutions', href: '/business/power' },
        { text: 'Our Services', href: '/business/power', variant: 'outline' as const },
      ],
    },
  ];

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
      link: "/business/pulp/assam-agroforestry",
      // image: "https://plus.unsplash.com/premium_photo-1695559212636-422fcdb4bf3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      image: '/paper&pulp/pulp1.jpg'
    },
  ];

  // const sustainabilityImages = [
  //   {
  //     title: 'Green Forest Conservation',
  //     description: 'Protecting natural ecosystems through sustainable practices',
  //     image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //     color: 'from-green-500 to-green-700',
  //   },
  //   {
  //     title: 'Renewable Energy Solutions',
  //     description: 'Harnessing clean energy for a sustainable future',
  //     image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //     color: 'from-orange-500 to-orange-700',
  //   },
  //   {
  //     title: 'Water Conservation',
  //     description: 'Preserving our most precious resource',
  //     image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //     color: 'from-blue-500 to-blue-700',
  //   },
  //   {
  //     title: 'Sustainable Innovation',
  //     description: 'Building tomorrow with responsible technology',
  //     image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //     color: 'from-yellow-500 to-yellow-700',
  //   },
  // ];

  // const projects = [
  //   {
  //     title: 'Hindupur Integrated Industrial Park',
  //     location: 'Andhra Pradesh',
  //     area: '1,800 acres',
  //     description: 'Strategic gateway to South India\'s industrial growth with excellent connectivity and multi-sector ecosystem.',
  //     image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
       
  //   },
  //   {
  //     title: 'Odisha Pharma City Project',
  //     location: 'Odisha',
  //     area: '1,800 acres',
  //     description: 'State-of-the-art pharmaceutical and allied industrial park, creating 35,000+ jobs and attracting Rs 10,000 Crores investment.',
  //     image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   },
  //   {
  //     title: 'West Godavari Pulp & Paper Mill',
  //     location: 'Andhra Pradesh',
  //     area: '271 acres',
  //     description: 'Sustainable packaging solutions with advanced technology and 360° approach to environmental stewardship.',
  //     image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   },
  // ];

  const stats = [
    { label: 'Years of Experience', value: '25+', icon: Award },
    { label: 'Man-Years Expertise', value: '200+', icon: Users },
    { label: 'States Present', value: '4+', icon: Globe },
    { label: 'Sustainable Focus', value: '100%', icon: Leaf },
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Leadership',
      description: 'Led by first-generation entrepreneurs with 25+ years of corporate expertise and proven track record.',
    },
    {
      title: 'Sustainability Focus',
      description: '"For Planet & People" philosophy drives our commitment to environmental stewardship and social progress.',
    },
    {
      title: 'Strategic Locations',
      description: 'Prime locations across India with excellent connectivity and government support for industrial development.',
    },
    {
      title: 'Integrated Solutions',
      description: 'Comprehensive ecosystem covering infrastructure, power, utilities, and support services for seamless operations.',
    },
  ];

  // Partner sector images and gold border
  const partnerData = [
    {
      // name: 'Tata Consulting Engineering Limited',
      img: '/tata.png',
    },
    {
      // name: 'Ramky Group',
      img: '/ramky.png',
    },
    {
      // name: 'Ecoplanet Bamboo',
      img: '/ecoplanet.png',
    },
    {
      // name: 'Blu Oak Capital',
      img: '/bluoak.png',
    },
    // {
      // name: 'JVS Consultants India LLP',
      // img: '',
    // },
    {
      // name: 'PAPCEL Czech Republic',
      img: '/Papcel.png',
    },
    {
      // name: 'Elof Hansson of Sweden',
      img: './assets/bharat-biotech-logo.jpg',
    },
    {
      // name: 'Tata Consulting Engineering Limited',
      img: './assets/cadila-logo.png',
    },
    {
      // name: 'Ramky Group',
      img: './assets/divis-logo.png',
    },
    {
      // name: 'Ecoplanet Bamboo',
      img: './assets/DrR_Logo_Primary_RGB.png',
    },
    {
      // name: 'Blu Oak Capital',
      img: './assets/logo_Aurobindo.webp',
    },
    {
      // name: 'JVS Consultants India LLP',
      img: './assets/Logo_Hetero.png',
    },
    // {
    //   // name: 'PAPCEL Czech Republic',
    //   img: './assets/Logo_lupin_labs.png',
    // },
    {
      // name: 'Elof Hansson of Sweden',
      img: './assets/Logo-Mylan.png',
    },
    {
      // name: 'PAPCEL Czech Republic',
      img: './assets/logo-shilpa.png',
    }, {
      // name: 'PAPCEL Czech Republic',
      img: './assets/logo.png',
    }, {
      // name: 'PAPCEL Czech Republic',
      img: './assets/neuland.png',
    }, {
      // name: 'PAPCEL Czech Republic',
      img: './assets/shantha_logo.png',
    }, {
      // name: 'PAPCEL Czech Republic',
      img: './assets/tgv.jpg',
    }, {
      // name: 'PAPCEL Czech Republic',
      img: './assets/torrent_pharma.png',
    },
  ];

  return (
    <div className="min-h-screen font-[Poppins,sans-serif] bg-white text-[#1a2233]">
      <Header />
      <StickyContactButton />

      {/* Hero Section with Carousel */}
      <HeroSection slides={heroSlides} />

      {/* Our Companies */}
      <section id="verticals" className="section-padding bg-white-50">
        <div className="container-width">
          <SectionHeader
            // subtitle="Our Companies"
            title="Our Companies"
            // title="Diversified Portfolio Driving Sustainable Growth"
            description="Three core companies working in synergy to create comprehensive industrial ecosystems that benefit businesses, communities, and the environment."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[420px] border-2 border-transparent hover:border-[gold] cursor-pointer"
                onClick={() => window.location.assign(company.link)}
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
                  {/* <div className="absolute top-4 left-4 text-[gold] group-hover:scale-110 transition-transform duration-300 bg-white/80 rounded-full p-2 shadow-md border border-[gold]">
                    {company.icon}
                  </div> */}
                </div>
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-lg font-bold text-navy-900 mb-2 leading-tight min-h-[56px]">
                    {company.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base min-h-[48px]">
                    {company.short}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={company.link}
                      className="inline-flex items-center text-[gold] hover:text-yellow-700 font-semibold transition-colors duration-300 group border-2 border-[gold] px-4 py-2 rounded-lg bg-white hover:bg-yellow-50 shadow hover:shadow-lg pointer-events-none"
                      tabIndex={-1}
                    >
                      View More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-[gold]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="About Jaya Shankar Group"
            // title="Visionary Conglomerate Shaping India's Industrial Future"
                                                title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Visionary Conglomerate Shaping India's Industrial Future</span>}
            description="Founded by first-generation entrepreneurs with a combined 45 years of expertise, Jaya Shankar Group operates with a robust team of 200+ man-years of experience across Industrial Parks, Pulp & Paper, and Power Infrastructure. Our core philosophy 'For Planet & People' drives economic development, social progress, and environmental sustainability."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-blue-700 group-hover:text-green-900 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-yellow-700 transition-colors duration-300 font-[Poppins,sans-serif]">{stat.value}</div>
                <div className="text-sm text-muted-foreground group-hover:text-yellow-800 transition-colors duration-300 font-[Poppins,sans-serif]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="section-padding bg-blue-100">
        <div className="container-width">
          <SectionHeader
            subtitle="Strategic Partners"
            // title="Collaborating with Industry Leaders"
                                    title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Collaborating with Industry Leaders</span>}
            description="Working together with leading organizations to create innovative solutions and drive sustainable growth"
            centered
          />

          {/* Floating carousel for partner cards */}
          {/* <div className="overflow-x-auto scrollbar-hide py-2">
            <div className="flex space-x-6 animate-partner-marquee min-w-[700px]">
              {partnerData.concat(partnerData).map((partner, index) => (
                <Card
                  key={index}
                  className="w-30 h-38 min-w-[160px] max-w-[180px] flex-shrink-0 flex items-center justify-center hover:scale-105 hover:shadow-2xl hover:border-[gold] hover:z-10 fade-in group border-2 border-transparent transition-all duration-300 p-0"
                  style={{ animationDelay: `${(index % partnerData.length) * 100}ms` }}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full w-full p-0">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-transparent overflow-hidden group-hover:border-[green] transition-all duration-200 bg-white">
                      {partner.img ? (
                        <img src={partner.img} alt={partner.name + ' logo'} className="w-10 h-10 object-contain" />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                    <h4 className="font-medium text-xs leading-tight text-black font-[Poppins,sans-serif] mt-1 text-center px-2 break-words">{partner.name}</h4>
                  </CardContent> 
                </Card>
              ))}
            </div>
          </div> */}
          <div className="overflow-x-auto scrollbar-hide py-2">
            <div className="flex space-x-6 animate-partner-marquee min-w-[700px]">
              {partnerData.concat(partnerData).map((partner, index) => (
                <div
                  key={index}
                  className="w-32 h-35 min-w-[160px] max-w-[180px] flex-shrink-0 flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl hover:z-10 transition-transform duration-300"
                  style={{ animationDelay: `${(index % partnerData.length) * 100}ms` }}
                >
                  {partner.img ? (
                    <img
                      src={partner.img}
                      alt={`${partner.name} logo`}
                      className="w-32 h-28 object-contain rounded-full border-2 border-transparent hover:border-green-500 transition-all duration-200 bg-white"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No Image</span>
                  )}

                  {/* <h4 className="mt-2 text-xs font-medium text-black text-center px-2 break-words">
                    {partner.name}
                  </h4> */}
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes partner-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-partner-marquee {
              animation: partner-marquee 12s linear infinite;
            }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="section-padding bg-red-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Featured Projects"
            title="Transforming Landscapes, Creating Opportunities"
            description="Flagship projects that showcase our commitment to excellence, sustainability, and economic development across multiple states."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-[gold] hover:z-10 fade-in group border-2 border-transparent transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary group-hover:text-yellow-800 transition-colors duration-300">{project.location}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-yellow-900 transition-colors duration-300">{project.area}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-800 transition-colors duration-300 font-[Poppins,sans-serif]">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-yellow-900 transition-colors duration-300 font-[Poppins,sans-serif]">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="border-2 border-transparent text-white hover:border-[gold] hover:bg-yellow-600 hover:text-black transition-all duration-200">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Why Choose Us"
            // title="Excellence in Every Endeavor"
                        title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Excellence in Every Endeavor</span>}
            description="Our unique combination of experience, values, and strategic approach makes us the ideal partner for sustainable industrial development."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex space-x-4 fade-in group hover:bg-yellow-50 hover:shadow-lg rounded-lg p-4 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-4 h-4 bg-gradient-to-tr from-yellow-300 to-yellow-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-800 transition-colors duration-300 font-[Poppins,sans-serif]">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-yellow-900 transition-colors duration-300 font-[Poppins,sans-serif]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CompanyMap />
      {/* Sustainability Carousel */}
      {/* <section className="section-padding bg-muted/30">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Commitment"
            title="Enabling a Sustainable Tomorrow"
            description="Delivering sustainable initiatives in carbon neutrality, water positivity, circularity and green supply chain"
            centered
          />

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {sustainabilityImages.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-[gold] hover:z-10 transition-all duration-300">
                      <div className="relative">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 flex items-end`}>
                          <div className="p-6 text-white">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section> */}
      {/* CTA Section */}
      {/* <section className="section-padding bg-secondary text-black">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-black mb-6 font-bold text-3xl font-[Poppins,sans-serif]">Ready to Partner with Us?</h2>
            <p className="text-xl text-black mb-8 leading-relaxed font-[Poppins,sans-serif]">
              Join us in creating sustainable industrial ecosystems that drive economic growth while protecting our planet for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-green-600 text-white hover:bg-green-700 border-2 border-transparent hover:border-[gold] hover:scale-105 hover:shadow-2xl transition-all duration-200">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-transparent text-black hover:border-[gold] hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-200">
                <Link to="/investors">Investment Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
