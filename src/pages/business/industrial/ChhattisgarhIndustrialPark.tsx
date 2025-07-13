import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import StickyContactButton from '@/components/common/StickyContactButton';
import { MapPin, Building2, Users, Target } from 'lucide-react';

const ChhattisgarhIndustrialPark = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      
      <HeroSection
        title="Chhattisgarh Industrial Park"
        subtitle="State-of-the-art industrial infrastructure in the heart of India, designed for sustainable manufacturing and business growth."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section-padding pt-8 pb-0">
        <div className="container-width">
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">A Next-Gen Industrial Zone Across 5,000 Acres in Bijapur District, Chhattisgarh</h2>
              <p className="text-lg text-gray-700 mb-4">Jaya Shankar Group introduces a transformative vision for India's pharmaceutical infrastructure through its upcoming 5,000-acre Pharma and Allied Industrial Park in Bijapur District, Chhattisgarh. Designed under the Special Investment Region (SIR) and SEZ framework, this project is among the largest private sector pharma clusters in the country.</p>
              <p className="text-base text-gray-600 mb-4">With a commitment to seamless industrial establishment and operational efficiency, the Chhattisgarh Pharma City will offer world-class infrastructure, regulatory facilitation, and unmatched scale to global and domestic pharmaceutical companies.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Project Snapshot</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li><b>Location:</b> Bijapur District, Chhattisgarh</li>
                    <li><b>Total Area:</b> 5,000 Acres (2,000 Hectares)</li>
                    <li><b>Development Period:</b> Phased across 5 years</li>
                    <li><b>SEZ + DTA Zones</b> for operational flexibility</li>
                    <li><b>Target Industries:</b> Bulk Drugs, Nutraceuticals, Food Processing, Biotech, APIs</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Core Features & Infrastructure</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>200 MW Group Captive Thermal Power Plant for uninterrupted, quality electricity</li>
                    <li>100 MGD Treated Water to serve industrial needs</li>
                    <li>Plug-and-Play Manufacturing Units for quick setup</li>
                    <li>Integrated Residential & Office Infrastructure for workforce and entrepreneurs</li>
                    <li>Single-Window Facilitation for regulatory and licensing support</li>
                    <li>Effluent Treatment with Zero Liquid Discharge (ZLD) systems</li>
                    <li>Common Steam Supply, banking, telecom, healthcare, and recreation facilities</li>
                    <li>Transport Linkages: Air, land, and sea logistics integration for cargo movement</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Green Commitment & Urban Planning</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>40% of total land dedicated to green belt and common utilities as per MOEF norms</li>
                    <li>Landscaped public zones, eco-park development, and stormwater management</li>
                    <li>Smart zoning: Industrial | Commercial | Institutional | Residential | Utility Areas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Incentive Advisory & Government Support</h3>
                  <p className="mb-4 text-muted-foreground">Jaya Shankar Group will assist prospective tenants in:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>State-Level Incentives announced by the Govt. of Chhattisgarh for pharma industries</li>
                    <li>Central Government Incentives for Bulk Drug and API Parks</li>
                    <li>SEZ Benefits, including tax holidays, duty-free imports, and simplified exports</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Strategic Business Appeal</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>Central India Location ensures proximity to key pharma hubs and logistics corridors</li>
                    <li>Access to resource-rich states and industrial markets</li>
                    <li>Favorable policy ecosystem for ease of doing business</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Industry Leaders Expressing Interest</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>Aurobindo Pharma | Dr. Reddy’s Labs | Divi’s Laboratories | Torrent Pharma</li>
                    <li>Hetero Drugs | Bharat Biotech | Lupin Labs | Shantha Biotech | Laurus Labs</li>
                    <li>Mylan Pharma | Cadila Healthcare | Silpa Medicare | Neuland Labs | TGV SRAAC</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Project Advisors</h3>
                  <p className="mb-2 text-muted-foreground font-semibold">Technical Advisors</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>Tata Consultancy Services</li>
                    <li>Ramky Group</li>
                  </ul>
                  <p className="mb-2 text-muted-foreground font-semibold">Financial Advisors</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    <li>Blu Oak Capital</li>
                    <li>JVS Consultants India LLP</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-green-900 font-semibold text-lg">Chhattisgarh Pharma City is a once-in-a-generation opportunity to build at scale, sustainably and strategically.<br/>Join us in shaping India’s next pharmaceutical revolution.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Project Overview"
            title="Chhattisgarh SEZ Development"
            description="A comprehensive 5,000-acre industrial park and Special Economic Zone in Bijapur District, Chhattisgarh, focused on bulk drug & pharma manufacturing and IT industrial development."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Strategic Location</h4>
                    <p className="text-muted-foreground">Located in Bijapur District, Chhattisgarh with excellent connectivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Massive Scale</h4>
                    <p className="text-muted-foreground">5,000 acres / 2,000 hectares of developed industrial land</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Focused Sectors</h4>
                    <p className="text-muted-foreground">Bulk Drug & Pharma, IT Industrial Park development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Employment Generation</h4>
                    <p className="text-muted-foreground">Potential to create thousands of direct and indirect jobs</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Project Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Area</span>
                    <span className="font-medium">5,000 acres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Bijapur, Chhattisgarh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Primary Focus</span>
                    <span className="font-medium">Pharma & IT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-green-600">Development Phase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChhattisgarhIndustrialPark;