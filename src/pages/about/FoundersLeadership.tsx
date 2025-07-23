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
        // subtitle="Visionary Leaders Driving Excellence"
        description="Meet the founding team whose vision, expertise, and dedication have built Jaya Shankar Group into a leading force in sustainable industrial development."
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AboutNavigation />

      {/* Founders */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Founder"
            title="Pioneering Leadership"
            description="Two visionary leaders whose combined expertise and shared commitment to excellence have shaped the group's success story."
            centered
            theme="default"
          />
          <div className="flex justify-center">
            <Card className="w-full max-w-xl group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 transition-all duration-200">
                    {founders[0].name}
                  </h3>
                  <p className="text-green-700 font-medium mb-2">{founders[0].title}</p>
                  <p className="text-gray-600 leading-relaxed">{founders[0].description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jayashankar Group: Industrial Clusters & SEZs */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            title="Industrial Clusters & Special Economic Zones"
            centered
            theme="default"
          />
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Text Left */}
            <div className="px-2 xs:px-4 md:px-6 order-2 lg:order-none">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                Led by Principal Promoter Mr. Srinivasa Rao, the Jayashankar Group specialises in developing industrial clusters and Special Economic Zones across India. With board positions in more than 10 companies across various sectors, Mr. Rao drives the group's vision for sustainable industrial development.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                The group leverages over 200 man-years of expertise to create world-class infrastructure projects with a combined investment of ₹11,500 crores and a market enterprise value of approximately ₹8,000 crores.
              </p>
            </div>
            {/* Image Right */}
            <div className="keen-slider rounded-lg overflow-hidden h-full">
              <img
                src="/images/Picture1.png"
                alt="Industrial Infrastructure"
                className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover max-w-full"
                style={{ maxWidth: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Portfolio of Strategic Industrial Projects */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Portfolio of Strategic Industrial Projects"
            title="Our Strategic Infrastructure Initiatives"
            centered
            theme="default"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Project 1 */}
            <div className="hover-lift bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 text- rounded-md p-6 relative">
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-lg text-[#0f1766] font-semibold mb-2">
                  Packaging Paper SEZ, Andhra Pradesh
                </h4>
                <p className="mb-4 text-muted-foreground">
                  Jayashankar Pulp and Paper Mills Pvt. Ltd. is developing an SEZ-based
                  integrated facility for kraft paper and paperboard manufacturing with an
                  annual capacity of 7 lakh tonnes.
                </p>
                <ul className="text-sm space-y-1 font-light text-muted-foreground">
                  <li>• 500-acre facility in East Godavari district</li>
                  <li>• ₹4,000 crore investment</li>
                  <li>• All statutory clearances obtained</li>
                  <li>• Site development underway</li>
                  <li>• Financial closure nearing completion</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="hover-lift bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 rounded-md p-6 relative">
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-lg text-[#0f1766] font-semibold mb-2">
                  Pharmaceutical Industry Cluster, Odisha
                </h4>
                <p className="mb-4 text-muted-foreground">
                  Jayashankar Multiproduct Industrial Park and SEZ Pvt. Ltd. is creating a
                  multi-product industrial park and pharma city with world-class
                  infrastructure.
                </p>
                <ul className="text-sm space-y-1 font-light text-muted-foreground">
                  <li>• ₹680 crore total investment</li>
                  <li>• Focus on pharmaceutical sector</li>
                  <li>• Under positive consideration by state government</li>
                  <li>• Expected to boost regional economic growth</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="hover-lift bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 rounded-md p-6 relative">
              <div className="border-l-4 border-white pl-4">
                <h4 className="text-lg text-[#0f1766] font-semibold mb-2">
                  Integrated Industrial Complex, Assam
                </h4>
                <p className="mb-4 text-muted-foreground">
                  Jayashankar Chemicals & Packagings Assam Private Limited is developing a
                  sustainable industrial complex with multiple integrated facilities.
                </p>
                <ul className="text-sm space-y-1 font-light text-muted-foreground">
                  <li>• ₹6,500 crore investment</li>
                  <li>• Bamboo and hardwood-based bleached kraft pulp mills (300,000 TPA each)</li>
                  <li>• Paper production units (230,000 TPA combined)</li>
                  <li>• 60 MW captive co-generation power plant</li>
                  <li>• ~2,300 direct and 10,000 indirect jobs</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Senior Advisory Team"
            title="Collective Expertise"
            description="The leadership is supported by a team of veteran professionals from pharma, bulk drugs, infrastructure, and energy."
            centered={false}
            theme="default"
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
            theme="default"
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
