import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Target, Heart, Leaf } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const About = () => {
  const founders = [
    {
      name: 'Shri T. Srinivasa Rao',
      title: 'Founder & Chairman',
      experience: '25+ Years Corporate Expertise',
      specialization: 'Infrastructure & Power Projects',
      description: 'A visionary first-generation entrepreneur and Certified Corporate Director with extensive experience in project management, engineering, and strategic development. Led numerous successful infrastructure and power projects across India.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Commitment to delivering world-class industrial infrastructure and services that exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Conducting business with the highest ethical standards and transparency in all our operations.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmental stewardship and sustainable practices are at the core of everything we do.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with stakeholders, communities, and business partners.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and innovative solutions to drive industrial growth.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Maintaining the highest standards of quality in project execution and service delivery.',
    },
  ];

  const teamStats = [
    { number: '200+', label: 'Man-Years Combined Expertise' },
    { number: '30+', label: 'Years Specialized Experience' },
    { number: '4+', label: 'States of Operation' },
    { number: '100%', label: 'Commitment to Sustainability' },
  ];

  const expertise = [
    'Project Management & Engineering',
    'Financial Planning & Compliance',
    'Pharmaceutical & Bulk Drug Industries',
    'Infrastructure Development',
    'Power Generation & Distribution',
    'Environmental Management',
    'Regulatory Affairs & Government Relations',
    'International Business Development',
  ];
  const heroSlides = [{
    title: "ABOUT JAYA SHANKAR GROUP",
    // subtitle="Pioneering Sustainable Industrial Development with Vision, Expertise, and Commitment"
    description: "Founded by first-generation entrepreneurs with a shared vision of economic development, social progress, and environmental sustainability",
    backgroundImage: "/odishaparma/group2.jpg"
  }]
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />
      <HeroSection slides={heroSlides}
      // title="ABOUT JAYA SHANKAR GROUP"
      // // subtitle="Pioneering Sustainable Industrial Development with Vision, Expertise, and Commitment"
      // description="Founded by first-generation entrepreneurs with a shared vision of economic development, social progress, and environmental sustainability."
      // backgroundImage="/odishaparma/group.jpg"
      />


      <AboutNavigation />

      {/* Our Story */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Story"
            title="A Journey of Vision, Innovation and Impact"
            description="Jaya Shankar Group was founded with a clear mission: to create sustainable industrial ecosystems that drive economic growth while maintaining our commitment to environmental stewardship and social responsibility."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-in">
              <div className="prose prose-lg max-w-none">
                <p className=" text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                  Our journey began with a simple yet powerful belief: that industrial development and environmental
                  sustainability can coexist harmoniously. Founded by visionary entrepreneurs Shri T. Srinivasa Rao
                  and Smt. T. L. S. Geetha Kameswari, our group has grown from a shared vision into a robust
                  conglomerate with operations across multiple states.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                  With over 200 man-years of combined expertise and a leadership team with 30+ years of specialized
                  experience, we have established ourselves as a trusted partner in Industrial Park & SEZ Development,
                  Pulp & Paper Manufacturing, and Power & Infrastructure projects.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                  Our core philosophy "For Planet & People" guides every decision we make, ensuring that our growth
                  contributes positively to economic development, social progress, and environmental conservation.
                </p>
              </div>
            </div>

            <div className="fade-in animation-delay-200">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern industrial facility"
                className="rounded-lg shadow-xl border-4 border-transparent hover:border-[gold] transition-all duration-200 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Leadership */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeader
            subtitle="Founder & Leadership"
            title="Visionary Leader Driving Excellence"
            description="Our founders bring together decades of experience in corporate leadership, international partnerships, and strategic development."
            centered
          />

          <div className="flex justify-center">
            <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-blue-200 group-hover:border-[gold] transition-all duration-200">
                    {/* Founder image can be added here if available */}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 transition-all duration-200">
                    {founders[0].name}
                  </h3>
                  <p className="text-green-700 font-medium mb-1 sm:mb-2">{founders[0].title}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">{founders[0].experience}</p>
                  <p className="text-xs sm:text-sm font-medium text-blue-700 mb-2 sm:mb-4">{founders[0].specialization}</p>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{founders[0].description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <div className="mb-8 sm:mb-12">
            <SectionHeader
              subtitle="Our Team"
              title="Collective Expertise Driving Success"
              description="A diverse team of professionals with specialized experience across multiple domains, united by our commitment to excellence and sustainability."
              centered
            />
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 mb-8 md:mb-16">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:text-[gold] transition-all duration-200">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-4 text-center fade-in group border-2 border-transparent hover:border-[gold] hover:shadow-2xl transition-all duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="font-medium text-sm text-blue-900 group-hover:text-[] transition-all duration-200">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="section-padding bg-white text-primary-foreground ">
        <div className="container-width">
          <SectionHeader
            title="Corporate Philosophy"
            description="Our guiding principle shapes every aspect of our business, ensuring that economic growth goes hand in hand with environmental stewardship and social responsibility."
            centered
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 mt-8 md:mt-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center fade-in group border-2 bg-white/30 rounded-lg p-8 shadow-2xl transition-all duration-200 hover:border-[gold] hover:shadow-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-[blue]/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200">
                  <value.icon className="w-8 h-8 text-[blue] transition-all duration-200" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[green] transition-all duration-200">{value.title}</h3>
                <p className="text-black leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
