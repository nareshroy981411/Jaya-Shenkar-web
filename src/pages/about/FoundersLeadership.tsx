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
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With decades of strategic project execution experience and a vision for nation-building, Shri Rao drives the group\'s strategic direction and growth. His leadership has attracted both domestic and global investments, positioning the company as a leader in infrastructure and energy.',
      icon: Crown,
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
                    <div className="flex justify-center">
                      <Card className="w-full max-w-xl group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl">
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-200 group-hover:border-[gold] transition-all duration-200">
                              <img
                                src={founders[0].image}
                                // alt={founders[0].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-blue-900 transition-all duration-200">
                              {founders[0].name}
                            </h3>
                            <p className="text-green-700 font-medium mb-2">{founders[0].title}</p>
                            <p className="text-sm text-gray-500 mb-4">{founders[0].experience}</p>
                            <p className="text-sm font-medium text-blue-700 mb-4">{founders[0].specialization}</p>
                            <p className="text-gray-600 leading-relaxed">{founders[0].description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
        </div>
      </section>

      {/* Senior Advisory Team */}
      {/* <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Senior Advisory Team"
            title="Collective Expertise"
            description="The leadership is supported by a team of veteran professionals from pharma, bulk drugs, infrastructure, and energy, each bringing over three decades of expertise."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="fade-in group border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl">
              <div className="p-8">
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
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Senior Advisory Team"
            title="Collective Expertise"
            description="The leadership is supported by a team of veteran professionals from pharma, bulk drugs, infrastructure, and energy."
            centered={false}
          />

          <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
            {/* Left Side: Static Image Carousel */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-80 overflow-hidden rounded-lg border border-gray-300 flex">
                <img
                  src='/images/leader.png'
                  alt=''
                  className="w-full h-full object-cover flex-shrink-0"
                />
              </div>
            </div>

            {/* Right Side: Simple Text Content */}
            <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Veteran Leadership Team</h3>
                <p className=" text-bold leading-relaxed">
                  Our senior advisory team brings over 30 years of experience in pharmaceuticals,
                  bulk drugs, infrastructure, and energy—delivering excellence and strategic insight
                  across diverse sectors.
                </p>

                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Project Development</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Global Investment Alignment</li>
                  <li>• Strategic Planning</li>
                </ul>
            </div>
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
                <Crown className="w-7 h-7 text-blue-700 group-hover:text-[] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-900 group-hover:text-[] transition-all duration-200">Strategic Vision</h3>
              <p className="text-gray-600">Long-term thinking that balances growth with sustainability and social responsibility.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '150ms' }}>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Globe className="w-7 h-7 text-green-700 group-hover:text-[] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-green-900 group-hover:text-[] transition-all duration-200">Global Perspective</h3>
              <p className="text-gray-600">International partnerships and collaborations that bring world-class standards to India.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Users className="w-7 h-7 text-blue-700 group-hover:text-[] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-900 group-hover:text-[] transition-all duration-200">Collective Strength</h3>
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
