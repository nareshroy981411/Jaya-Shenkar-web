import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import AboutNavigation from '@/components/about/AboutNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, TrendingUp, Award } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Mr. T.V. Srihari',
      title: 'Promoter Group Member',
      education: 'Chemical Engineer, Post-graduate in Economics',
      experience: '35+ years in Pharma Industry',
      specialization: 'Project Design & Implementation, USFDA Standards, Technology Scaling, Crisis Management',
      description: 'A goal-driven professional with rich experience across functions, with major thrust areas being Designing and Implementation of Projects, Processes & Pollutants Handling, and creating new capabilities in Business Development & Marketing.',
    },
    {
      name: 'Mr. Potluri Suresh Babu',
      title: 'Industry Veteran',
      education: 'Established Family Background in Bulk Drug Industries',
      experience: '30+ years in Bulk Drug and Pharma Industry',
      specialization: 'Manufacturing Equipment for Pharma and Bulk Drug Industries',
      description: 'Hailing from an established family with rich experience in bulk drug industries in Telangana and Andhra Pradesh, he owns a unit manufacturing equipment for Pharma and Bulk Drug industries.',
    },
    {
      name: 'Mr. Seetha Ram Vetcha',
      title: 'Banking & Finance Expert',
      education: 'Post Graduate in Science (Engineering), IRPM, Financial Advising',
      experience: '36 years in Banking (State Bank of India)',
      specialization: 'Banking Operations, Credit, International Banking, Fraud Monitoring',
      description: 'An ardent banker who served through all management cadres at State Bank of India, with extensive experience in Banking Operations, Inspection, Gold Banking, and Administration.',
    },
    {
      name: 'Mr. Kankipati Vijaya Bhasker',
      title: 'Project & Contract Management Expert',
      education: 'B.Tech (Civil), M.Tech (Structures), MBA (Finance), LLB',
      experience: '33 years in Project & Contract Management',
      specialization: 'Construction Projects across Power, Infrastructure, Marine works, Telecommunications',
      description: 'Extensive experience in both Public and Private Sectors, handling Construction Projects across Thermal/Hydro Power, Solar Power, Urban Infrastructure, Tunnels & Underground works.',
    },
    {
      name: 'Mr. L. Meher Kumar',
      title: 'Business Development & Marketing Leader',
      education: 'M.Com, MBA (Marketing & Finance)',
      experience: '20 years with Top Organizations',
      specialization: 'Direct Marketing, Channel Management, Credit Operations, Business Development',
      description: 'Previously worked with Apple Credit Corporation, Bharti-Airtel, Vysya Bank, ICFAI, and GMR Hyderabad International Airport. Expertise in Dealer Networking, Receivables Management & Public Relations.',
    },
    {
      name: 'Mr. P Rammohan Patnaik',
      title: 'Financial Advisory & Project Finance',
      education: 'University Ranker in Industrial Relations, First Class in International Trade',
      experience: '20+ years in Banking (Public & Private Sector)',
      specialization: 'Project Finance Syndication, Recovery Management, Land Procurement',
      description: 'Served as Vice President heading Gujarat Zone, with expertise in Banking Operations, Credit, International Banking, and Liquidity Management Services. Currently serves as director on three company boards.',
    },
    {
      name: 'Ms. Kanchumarthi Vasanthi',
      title: 'Civil Engineering & Sustainability Expert',
      education: 'Transportation Engineering (Monash University, Australia), Civil Engineering',
      experience: 'Technical & Feasibility Studies, Environmental Impact Assessment',
      specialization: 'Infrastructure Design, Environmental Clearances, Sustainability Assessment',
      description: 'Strong engineering professional with proven work experience at Monash University and NIRD Hyderabad. Specializes in assessing sustainability and environmental impacts of projects.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="Our Team"
        subtitle="Collective Expertise Driving Success"
        description="A diverse team of professionals with specialized experience across multiple domains, united by our commitment to excellence and sustainability."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AboutNavigation />

      {/* Team Overview */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Team Strength"
            title="200+ Man-Years of Combined Expertise"
            description="Our team represents a powerful combination of industry experience, academic excellence, and specialized knowledge across pharma, infrastructure, finance, and engineering domains."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Award className="w-8 h-8 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2 group-hover:text-[gold] transition-all duration-200">200+</div>
              <div className="text-sm text-gray-600">Man-Years Experience</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <GraduationCap className="w-8 h-8 text-green-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2 group-hover:text-[gold] transition-all duration-200">30+</div>
              <div className="text-sm text-gray-600">Years Specialized Experience</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Briefcase className="w-8 h-8 text-yellow-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <div className="text-3xl font-bold text-yellow-700 mb-2 group-hover:text-[gold] transition-all duration-200">7</div>
              <div className="text-sm text-gray-600">Senior Professionals</div>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <TrendingUp className="w-8 h-8 text-red-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <div className="text-3xl font-bold text-red-700 mb-2 group-hover:text-[gold] transition-all duration-200">100%</div>
              <div className="text-sm text-gray-600">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Meet Our Team"
            title="Professionals Driving Innovation"
            description="Each team member brings unique expertise and experience, contributing to our collective strength in delivering world-class projects."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover-lift fade-in border-2 border-transparent bg-white transition-all duration-200 hover:border-[gold] hover:shadow-2xl" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-900 group-hover:text-[gold] transition-all duration-200">{member.name}</h3>
                      <p className="text-green-700 font-medium">{member.title}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Education:</h4>
                        <p className="text-sm text-gray-700">{member.education}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Experience:</h4>
                        <p className="text-sm text-gray-700">{member.experience}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Specialization:</h4>
                        <p className="text-sm text-gray-700">{member.specialization}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Our Culture"
            title="United by Purpose"
            description="Our team culture is built on collaboration, innovation, and a shared commitment to sustainable development and excellence in execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Award className="w-7 h-7 text-blue-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-900 group-hover:text-[gold] transition-all duration-200">Excellence</h3>
              <p className="text-gray-600">Commitment to delivering the highest quality in every project and partnership.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '150ms' }}>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <TrendingUp className="w-7 h-7 text-green-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-green-900 group-hover:text-[gold] transition-all duration-200">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and methodologies to stay ahead of industry trends.</p>
            </div>
            <div className="text-center fade-in group border-2 border-transparent bg-white rounded-lg p-6 hover:border-[gold] hover:shadow-2xl transition-all duration-200" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[gold]/20 transition-all duration-200">
                <Briefcase className="w-7 h-7 text-yellow-700 group-hover:text-[gold] transition-all duration-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-700 group-hover:text-[gold] transition-all duration-200">Collaboration</h3>
              <p className="text-gray-600">Working together across disciplines to achieve exceptional results.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
