import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Globe, Users } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const FoundersLeadership = () => {
  const founders = [
    {
      name: 'Shri T. Srinivasa Rao',
      title: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With decades of strategic project execution experience and a vision for nation-building, Shri Rao drives the group\'s strategic direction and growth. His leadership has attracted both domestic and global investments, positioning the company as a leader in infrastructure and energy.',
      icon: Crown,
    },
    {
      name: 'Smt. T. L. S. Geetha Kameswari',
      title: 'Director – International Relations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A Public Relations expert with 20 years of global collaboration experience, Smt. Geetha has played a vital role in opening cross-border channels, particularly with Singapore and Malaysia. Her efforts have brought international townships and strategic partnerships to fruition under initiatives like "Gateway to India."',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="Founders & Leadership"
        subtitle="Visionary Leaders Driving Excellence"
        description="Meet the founding team whose vision, expertise, and dedication have built Jaya Shankar Group into a leading force in sustainable industrial development."
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AboutNavigation />

      {/* Founders */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Founders"
            title="Pioneering Leadership"
            description="Two visionary leaders whose combined expertise and shared commitment to excellence have shaped the group's success story."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-200 group-hover:border-[gold] transition-all duration-200">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                      <founder.icon className="w-6 h-6 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-[gold] transition-all duration-200">{founder.name}</h3>
                    <p className="text-green-700 font-medium mb-6">{founder.title}</p>
                    <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisory Team */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Senior Advisory Team"
            title="Collective Expertise"
            description="The leadership is supported by a team of veteran professionals from pharma, bulk drugs, infrastructure, and energy, each bringing over three decades of expertise."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <Card className="fade-in group border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[gold]/20 transition-all duration-200">
                    <Users className="w-8 h-8 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900 group-hover:text-[gold] transition-all duration-200">Veteran Leadership Team</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our senior advisory team comprises industry veterans with over 30 years of collective 
                    experience across multiple domains:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-800">Core Expertise Areas:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pharmaceutical Industry</li>
                        <li>• Bulk Drug Manufacturing</li>
                        <li>• Infrastructure Development</li>
                        <li>• Power & Energy Projects</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-800">Key Capabilities:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Project Development</li>
                        <li>• Regulatory Compliance</li>
                        <li>• Global Investment Alignment</li>
                        <li>• Strategic Planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Leadership Philosophy"
            title="Building Tomorrow, Today"
            description="Our leadership approach is grounded in transparency, innovation, and sustainable growth, ensuring that every decision creates long-term value for all stakeholders."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Crown className="w-7 h-7 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-900 group-hover:text-[gold] transition-all duration-200">Strategic Vision</h3>
              <p className="text-gray-600">Long-term thinking that balances growth with sustainability and social responsibility.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '150ms' }}>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Globe className="w-7 h-7 text-green-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-green-900 group-hover:text-[gold] transition-all duration-200">Global Perspective</h3>
              <p className="text-gray-600">International partnerships and collaborations that bring world-class standards to India.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Users className="w-7 h-7 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-900 group-hover:text-[gold] transition-all duration-200">Collective Strength</h3>
              <p className="text-gray-600">Leveraging diverse expertise to maintain our competitive edge in complex projects.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoundersLeadership;
