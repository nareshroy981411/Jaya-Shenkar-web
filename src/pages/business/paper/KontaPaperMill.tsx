import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import StickyContactButton from '@/components/common/StickyContactButton';
import { MapPin, Factory, Leaf, Target, Zap } from 'lucide-react';

const KontaPaperMill = () => {
  return (
    <div className="min-h-screen font-[Poppins,sans-serif] bg-gradient-to-tr from-green-50 via-white to-blue-50">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection
        title="Konta Paper Mill"
        subtitle="Expanding our sustainable paper manufacturing footprint in Chhattisgarh with innovative production capabilities."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Future Manufacturing Hub"
            title="Konta Paper Mill Development"
            description="Our upcoming paper manufacturing facility in Konta, Chhattisgarh, designed to expand our production capacity and serve the growing demand in Central India."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <Card className="bg-gradient-to-br from-green-100 to-blue-100 shadow-xl border-2 border-transparent hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-900 flex items-center gap-2"><Factory className="w-7 h-7 text-green-600 mr-2" /> Project Vision</h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-200"><MapPin className="w-6 h-6 text-green-700" /></span>
                    <div>
                      <h4 className="font-medium text-green-900">Strategic Location</h4>
                      <p className="text-muted-foreground">Konta, Chhattisgarh - Central India manufacturing hub</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-200"><Factory className="w-6 h-6 text-blue-700" /></span>
                    <div>
                      <h4 className="font-medium text-blue-900">Advanced Manufacturing</h4>
                      <p className="text-muted-foreground">Modern pulp and paper production with latest technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100"><Leaf className="w-6 h-6 text-yellow-700" /></span>
                    <div>
                      <h4 className="font-medium text-yellow-900">Environmental Focus</h4>
                      <p className="text-muted-foreground">Sustainable practices and environmental protection measures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100"><Target className="w-6 h-6 text-orange-700" /></span>
                    <div>
                      <h4 className="font-medium text-orange-900">Market Expansion</h4>
                      <p className="text-muted-foreground">Serving Central and Northern India markets efficiently</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-xl border-2 border-transparent hover:border-blue-400 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2"><Factory className="w-6 h-6 text-blue-600 mr-2" /> Project Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Konta, Chhattisgarh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus Area</span>
                    <span className="font-medium">Paper Manufacturing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Served</span>
                    <span className="font-medium">Central India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technology</span>
                    <span className="font-medium">Advanced Systems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-blue-600">Planning Phase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* New Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-yellow-50 to-green-50 shadow-lg border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-900 flex items-center gap-2"><Leaf className="w-7 h-7 text-green-600 mr-2" /> Project Scope & Strategic Highlights</h3>
                <h4 className="text-xl font-semibold mb-2 text-blue-900 flex items-center gap-2"><Factory className="w-6 h-6 text-blue-600 mr-2" /> Project Scope</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>210,000 TPA of writing, printing, tissue, kraft, and packaging paper</li>
                  <li>500,000 TPA integrated pulp mill with de-inking facility</li>
                  <li>200 MW captive thermal power plant; potential for green energy expansion</li>
                  <li>1500 acres allocated under Chhattisgarh's Special Investment Programme</li>
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-2 text-green-900 flex items-center gap-2"><Zap className="w-6 h-6 text-orange-600 mr-2" /> Strategic Advantages</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>132 kV power substation & Godavari river within 5 km</li>
                  <li>Close to Telangana & Andhra Pradesh borders for skilled workforce access</li>
                  <li>Proximity to Rajahmundry (101 km), Kakinada (385 km), Visakhapatnam (295 km)</li>
                  <li>Coal linkage of 1 LTPA for captive power</li>
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-900 flex items-center gap-2"><Leaf className="w-6 h-6 text-green-600 mr-2" /> Sustainability & Agro-Ecosystem</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>10,000 hectares of bamboo plantations for secure fiber sourcing</li>
                  <li>Satellite farming model in partnership with local communities (up to 1 lakh acres)</li>
                  <li>Industrial water allocation: 100 MGD</li>
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-2 text-green-900 flex items-center gap-2"><Factory className="w-6 h-6 text-blue-600 mr-2" /> Technical & Financial Partners</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>PAPCEL (Czech Republic) – turnkey paper technology</li>
                  <li>Elof Hansson (Sweden) – marketing, machinery, global access</li>
                  <li>Ecoplanet Bamboo (USA) – integrated forestry and raw material collaboration</li>
                  <li>Tata Consulting Engineers, Ramky Group, Blu Oak Capital, JVS Consultants LLP</li>
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-900 flex items-center gap-2"><Zap className="w-6 h-6 text-orange-600 mr-2" /> National Relevance</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Supported by IPMA to meet India’s increasing per capita paper consumption</li>
                  <li>Designed as an export-oriented unit to earn foreign exchange and meet global standards</li>
                </ul>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                  >
                    Explore Sustainable Packaging Solutions
                  </a>
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

export default KontaPaperMill;