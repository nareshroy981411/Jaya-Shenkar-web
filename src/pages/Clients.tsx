
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Package, Zap, Globe, ArrowRight, Building2, Leaf, Users } from 'lucide-react';

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection
        title="Clients & Partnerships"
        subtitle="Your Growth Partner in Industrial Innovation, Energy, and Sustainable Manufacturing"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Jayashankar Group, we partner with the future. Our integrated ecosystem of industrial parks, 
              pulp and packaging units, and energy infrastructure is designed to empower a wide spectrum of 
              clients—from pharma giants and packaging leaders to clean energy consumers and global supply chain players.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invite industrial tenants, B2B clients, and strategic collaborators to explore scalable 
              opportunities across our Special Economic Zones (SEZs) and manufacturing platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Tenants Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="🏭 Industrial Tenants"
            title="Plug & Play SEZ Infrastructure"
            description="Our multi-sector industrial parks across Odisha, Andhra Pradesh, and Chhattisgarh offer SEZ-compliant infrastructure tailored for diverse industries."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Pharmaceuticals & Medical Devices</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Biotechnology & Life Sciences</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Factory className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Food Processing & Agri-Tech</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Packaging, Textiles & Logistics</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Automotive & Engineering</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">IT, BPO & Digital Services</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>What We Offer:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ready-to-occupy industrial plots & built-up units</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>SEZ benefits with single-window clearance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Plug-and-play utilities: RLNG, power, water, ETP/ZLD</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Layout maps, master plans, project phases & downloadable brochures</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/business/industrial">
                    Explore SEZ Opportunities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* B2B Clients Section */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="📦 B2B Clients"
            title="Pulp, Packaging & Sustainable Solutions"
            description="Jayashankar Group operates state-of-the-art pulp and packaging board units that serve diverse industries."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">FMCG Brands</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">E-commerce Packaging</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Export Supply Chains</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Circular Economy Packaging</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>What We Offer:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>High-quality packaging board from agro-residues & bamboo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sustainable alternatives for global brands</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Strategic supply partnerships across India and overseas</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/business/paper">
                    Discover Packaging Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Energy Consumers Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="⚡ Energy Consumers"
            title="Reliable Power & RLNG"
            description="We power industry. Our energy vertical delivers clean and continuous supply to various sectors."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">SEZ Clusters</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Large-scale Manufacturing</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Agro-industrial Parks</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Cold-chain & Food Tech</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Our Energy Capabilities:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>RLNG supply and pipeline integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Power purchase for industrial zones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Renewable energy integration on request</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/business/power">
                    Explore Power Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="🌐 Global Partnerships"
            title="Strategic Collaborations"
            description="Our growth is backed by international collaborations and technology tie-ups with industry leaders."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Elof Hansson, Sweden</CardTitle>
                <p className="text-muted-foreground">Global Pulp Supplier</p>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Mecoplanet Bamboo</CardTitle>
                <p className="text-muted-foreground">Sustainable Materials</p>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Terravesta, UK</CardTitle>
                <p className="text-muted-foreground">Biomass & Renewable Experts</p>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              We've also hosted delegations and forged alliances with companies from Singapore and Malaysia, 
              underscoring our global outlook.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactButton />
    </div>
  );
};

export default Clients;
