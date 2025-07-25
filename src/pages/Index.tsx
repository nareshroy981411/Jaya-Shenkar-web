import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
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
// import Loader from '@/components/ui/Loader';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const heroSlides = [
        {
      title: 'Jaya Shankar Group',
      description: 'Leading the way in Industrial Park & SEZ Development, Pulp & Paper, and Power & Infrastructure with a commitment to Planet & People.',
      backgroundVideo: '/bg-video/jaya-shankar-video.mp4',
    },
    // {
    //   title: 'Jaya Shankar Group',
    //   description: 'Leading the way in Industrial Park & SEZ Development, Pulp & Paper, and Power & Infrastructure with a commitment to Planet & People.',
    //   backgroundImage: '/banner2.png',
    // },
    // {
    //   title: 'Enabling a Sustainable Tomorrow',
    //   description: 'Delivering sustainable initiatives in carbon neutrality, water positivity, circularity and green supply chain.',
    //   backgroundImage: '/paper.png',
    // },
    // {
    //   title: 'World-Class Industrial Parks & Special Economic Zones',
    //   description: 'Developing state-of-the-art industrial infrastructure across India, fostering innovation and economic growth.',
    //   backgroundImage: '/odishaparma/pharma6.png',
    // },
    // {
    //   title: 'Powering Progress: Robust Infrastructure Solutions',
    //   description: 'Building critical energy and transportation infrastructure to support India\'s industrial transformation.',
    //   backgroundImage: '/power/solar_power.png',
    // },
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
      link: "/business/ChemicalsPackaging",
      // image: "https://plus.unsplash.com/premium_photo-1695559212636-422fcdb4bf3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      image: '/paper&pulp/pulp1.jpg'
    },
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // if (loading) return <Loader />;

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
            title="Our Companies"
            description="Four core companies working in synergy to create comprehensive industrial ecosystems that benefit businesses, communities, and the environment."
            centered
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8 xl:gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[340px] xs:min-h-[380px] md:min-h-[420px] border-2 border-transparent hover:border-[gold] cursor-pointer"
                onClick={() => navigate(company.link)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${company.title}`}
              >
                <div className="relative h-32 xs:h-40 md:h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 flex flex-col p-4 xs:p-6 md:p-8">
                  <h3 className="text-base xs:text-lg md:text-xl font-bold text-navy-900 mb-2 leading-tight min-h-[40px] xs:min-h-[56px]">
                    {company.title}
                  </h3>
                  <p className="text-xs xs:text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed min-h-[32px] xs:min-h-[48px]">
                    {company.short}
                  </p>
                  <div className="mt-auto inline-flex items-center text-[gold] hover:text-yellow-700 font-semibold transition-colors duration-300 group border-2 border-[gold] px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg bg-white hover:bg-yellow-50 shadow hover:shadow-lg w-fit text-xs xs:text-sm md:text-base">
                    View More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-[gold]" />
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
            title="Visionary Conglomerate Shaping India's Industrial Future"
            description="Founded by first-generation entrepreneurs with a combined 45 years of expertise, Jaya Shankar Group operates with a robust team of 200+ man-years of experience across Industrial Parks, Pulp & Paper, and Power Infrastructure. Our core philosophy 'For Planet & People' drives economic development, social progress, and environmental sustainability."
            centered
          />

      <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 mt-8 md:mt-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 md:mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
              <stat.icon className="w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 text-blue-700 group-hover:text-green-900 transition-colors duration-300" />
            </div>
            <div className="text-xl xs:text-2xl md:text-3xl font-bold text-primary mb-1 xs:mb-2 group-hover:text-yellow-700 transition-colors duration-300 font-[Poppins,sans-serif]">{stat.value}</div>
            <div className="text-xs xs:text-sm md:text-base text-muted-foreground group-hover:text-yellow-800 transition-colors duration-300 font-[Poppins,sans-serif]">{stat.label}</div>
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
            title="Collaborating with Industry Leaders"
            description="Working together with leading organizations to create innovative solutions and drive sustainable growth"
            centered
          />
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
                      alt="Partner logo"
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

      {/* Why Choose Us */}
      {/* <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Excellence in Every Endeavor"
            description="Our unique combination of experience, values, and strategic approach makes us the ideal partner for sustainable industrial development."
            centered
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex space-x-2 xs:space-x-4 fade-in group hover:bg-yellow-50 hover:shadow-lg rounded-lg p-3 xs:p-4 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-tr from-yellow-300 to-yellow-600 rounded-full mt-2 xs:mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="text-base xs:text-lg font-semibold mb-1 xs:mb-2 group-hover:text-yellow-800 transition-colors duration-300 font-[Poppins,sans-serif]">{item.title}</h4>
                  <p className="text-xs xs:text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-yellow-900 transition-colors duration-300 font-[Poppins,sans-serif]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
            <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Why Choose Us"
            // title="Excellence in Every Endeavor"
            title="Excellence in Every Endeavor"
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

      <Footer />
    </div>
  );
};

export default Index;
