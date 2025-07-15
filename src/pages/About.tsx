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
    {
      name: 'Smt. T. L. S. Geetha Kameswari',
      title: 'Co-Founder & Managing Director',
      experience: '20+ Years PR & International Partnerships',
      specialization: 'International Business Development',
      description: 'A seasoned Public Relations expert with extensive experience in international partnerships, particularly in Singapore and Malaysia townships. Instrumental in building strategic alliances and driving global expansion initiatives.',
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

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />
      <HeroSection
        // title="About Jaya Shankar Group"
        title={
          <span className="font-serif text-5xl md:text-6xl font-extrabold text-[#1a2233] drop-shadow-lg tracking-tight">
            <span className="text-green-700 font-serif font-extrabold">ABOUT</span> JAYA SHANKAR GROUP
          </span>
        }
        // subtitle={<span className="font-serif text-xl md:text-2xl font-bold text-green-900">Pioneering Sustainable Industrial Development with Vision, Expertise, and Commitment</span>}
        description={<span className="font-serif text-lg md:text-xl font-medium text-[#1a2233]">Founded by first-generation entrepreneurs with a shared vision of economic development, social progress, and environmental sustainability.</span>}
        backgroundImage="/odishaparma/group.jpg"
      />


      <AboutNavigation />

      {/* Our Story */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Story"
            title="A Journey of Vision, Innovation, and Impact"
            description="Jaya Shankar Group was founded with a clear mission: to create sustainable industrial ecosystems that drive economic growth while maintaining our commitment to environmental stewardship and social responsibility."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our journey began with a simple yet powerful belief: that industrial development and environmental
                  sustainability can coexist harmoniously. Founded by visionary entrepreneurs Shri T. Srinivasa Rao
                  and Smt. T. L. S. Geetha Kameswari, our group has grown from a shared vision into a robust
                  conglomerate with operations across multiple states.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With over 200 man-years of combined expertise and a leadership team with 30+ years of specialized
                  experience, we have established ourselves as a trusted partner in Industrial Park & SEZ Development,
                  Pulp & Paper Manufacturing, and Power & Infrastructure projects.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our core philosophy "For Planet & People" guides every decision we make, ensuring that our growth
                  contributes positively to economic development, social progress, and environmental conservation.
                </p>
              </div>
            </div>

            <div className="fade-in animation-delay-200">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern industrial facility"
                className="rounded-lg shadow-xl border-4 border-transparent hover:border-[gold] transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Leadership */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeader
            subtitle="Founders & Leadership"
            title="Visionary Leaders Driving Excellence"
            description="Our founders bring together decades of experience in corporate leadership, international partnerships, and strategic development."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-200 group-hover:border-[gold] transition-all duration-200">
                      <img
                        // src={founder.image}
                        // alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-[] transition-all duration-200">{founder.name}</h3>
                    <p className="text-green-700 font-medium mb-2">{founder.title}</p>
                    <p className="text-sm text-gray-500 mb-4">{founder.experience}</p>
                    <p className="text-sm font-medium text-blue-700 mb-4">{founder.specialization}</p>
                    <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <div className="mb-12">
            <SectionHeader
              subtitle="Our Team"
              title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Collective Expertise Driving Success</span>}
              description="A diverse team of professionals with specialized experience across multiple domains, united by our commitment to excellence and sustainability."
              centered
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:text-[gold] transition-all duration-200">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="section-padding bg-white text-primary-foreground">
        <div className="container-width">
          <SectionHeader
            // title="Corporate Philosophy: For Planet & People"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Corporate Philosophy</span>}
            description="Our guiding principle shapes every aspect of our business, ensuring that economic growth goes hand in hand with environmental stewardship and social responsibility."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
