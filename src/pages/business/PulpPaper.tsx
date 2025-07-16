
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Leaf, Recycle, Factory, Droplets, Shield, Package } from 'lucide-react';

const PulpPaper = () => {
  const productCategories = [
    {
      title: 'Liquid Packaging',
      description: 'Premium solutions from fresh virgin fiber for dairy, fruit juices, and ready-to-drink beverages.',
      applications: ['Dairy Products', 'Fruit Juices', 'Ready-to-Drink Beverages'],
      image: 'https://media.discordapp.net/attachments/1390617522109288519/1394684231581569084/WhatsApp_Image_2025-07-15_at_14.50.57_3e1bbe2d.jpg?ex=687905e8&is=6877b468&hm=351b80f9d2d0f610f7156fe0b274e2a434a5250eb72303bd041d593211014d8c&=&format=webp&width=1116&height=744'
    },
    {
      title: 'Pharma & Healthcare Packaging',
      description: '100% Virgin Fiber carton board with excellent printing and embellishing capabilities.',
      applications: ['Pharmaceutical Products', 'Medical Devices', 'Healthcare Supplies'],
      // image: '/images/image.png',
      image: 'https://media.discordapp.net/attachments/1390617522109288519/1394684676219863152/WhatsApp_Image_2025-07-15_at_14.50.58_a0aabd39.jpg?ex=68790652&is=6877b4d2&hm=6fe2ff93261dcbc952d723673c418433b9c40c1538740e442b2426d0702c93d2&=&format=webp&width=1322&height=744'

    },
    {
      title: 'Food Service Solutions',
      description: 'Cup Form Board and Tray Form Board as sustainable alternatives to plastic.',
      applications: ['Hot/Cold Beverages', 'Ice Creams', 'Frozen Food Packaging'],
      image: 'https://media.discordapp.net/attachments/1390617522109288519/1394685522374561932/WhatsApp_Image_2025-07-15_at_14.50.59_86febbb6.jpg?ex=6879071c&is=6877b59c&hm=891f27e1dfb7b4ea25fc6b8c95733f6f8e67d1fe914728bfa99deff06cb86feb&=&format=webp&width=1365&height=744'
    },
    {
      title: 'Cosmetics & Personal Care',
      description: 'Premium high graphic carton board with outstanding surface properties.',
      applications: ['Cosmetic Products', 'Personal Care Items', 'Premium Packaging'],
      image: 'https://cdn.discordapp.com/attachments/1390617522109288519/1395083153843945512/Untitled_design_2.png?ex=687927ef&is=6877d66f&hm=f8f12447ad739167baa572b62f12f441403b856b513c0a2dac6660a7afd84e81'
    }
  ];

  const sustainabilityFeatures = [
    {
      title: 'Zero Liquid Discharge',
      description: 'Advanced ZLD system ensuring no water contamination',
      icon: Droplets
    },
    {
      title: 'Circular Economy',
      description: 'Reduce, reuse, recycle principles in all operations',
      icon: Recycle
    },
    {
      title: 'Virgin Fiber Focus',
      description: '100% virgin fiber for premium quality products',
      icon: Leaf
    },
    {
      title: 'Water Stewardship',
      description: '10 m³/t fresh water consumption with advanced treatment',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen paper-theme">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}

      <HeroSection
        title="Redefining Sustainable Packaging: West Godavari Mill"
        // subtitle="Leading the transformation from single-use plastics to sustainable paper packaging solutions with our state-of-the-art facility in Andhra Pradesh."
        theme="paper"
        backgroundImage="/images_jayashankar/paper_mill_1.jpg"
      // backgroundImage="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      // buttons={[
      //   { text: 'Our Products', href: '#products' },
      //   { text: 'Sustainability', href: '#sustainability', variant: 'outline' },
      // ]}
      />

      {/* Mill Overview */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="West Godavari Mill"
                // title="Strategic Location & Advanced Technology"
                title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Strategic Location & Advanced Technology</span>}

                description="Located in Bayyavaram, Tallapudi Mandal, West Godavari District, Andhra Pradesh, our 271-acre facility is strategically positioned 5 km from River Godavari and 115 km from Kakinada Port."
                theme="paper"
              />

              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--paper-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>271 acres in SEZ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--paper-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>5 km from River Godavari</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--paper-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>115 km from Kakinada Port</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[hsl(var(--paper-accent))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  <span>360° sustainable development approach</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src='/paper&pulp/imageM.png'
                // src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Paper Mill Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="Market Transformation"
            // title="From Graphic Papers to Sustainable Packaging"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">From Graphic Papers to Sustainable Packaging</span>}
            description="The global shift from single-use plastics to sustainable paper packaging presents unprecedented opportunities for growth and environmental impact."
            theme="paper"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="border-green-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[hsl(var(--paper-primary))] mb-3">Declining Demand</h4>
                <p className="text-black-600 mb-4">Graphic Papers facing reduced market demand</p>
                <ul className="space-y-2 text-sm text-black-600">
                  <li>• Digital transformation impact</li>
                  <li>• Reduced print media consumption</li>
                  <li>• Shift to digital alternatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[hsl(var(--paper-primary))] mb-3">Strong Growth</h4>
                <p className="text-black mb-4">Packaging sector experiencing robust expansion</p>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Plastic ban regulations</li>
                  <li>• Consumer preference for sustainability</li>
                  <li>• E-commerce packaging demand</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section id="products" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Product Portfolio"
            // title="Comprehensive Packaging Solutions"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Comprehensive Packaging Solutions</span>}
            description="Our diverse range of products serves multiple industries with a focus on sustainability, quality, and innovation."
            theme="paper"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 flex flex-col md:flex-row items-start gap-6">
                  {/* Left Side: Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[hsl(var(--paper-primary))] mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-[hsl(var(--paper-primary))]">Applications:</h5>
                      <ul className="space-y-1">
                        {category.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center space-x-2 text-sm">
                            <Package className="w-3 h-3 text-[hsl(var(--paper-accent))]" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="w-full md:w-40 lg:w-48 xl:w-56">
                    <img
                      src={category.image} // Make sure each `category` item has an `image` property
                      alt={category.title}
                      className="rounded-md shadow-md object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Manufacturing Technology */}
      <section className="section-padding bg-[hsl(var(--paper-light))]">
        <div className="container-width">
          <SectionHeader
            subtitle="Manufacturing Excellence"
            // title="State-of-the-Art Technology"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">State-of-the-Art Technology</span>}
            description="Our advanced manufacturing setup ensures optimal efficiency, quality, and environmental compliance."
            theme="paper"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Factory className="w-12 h-12 text-[hsl(var(--paper-accent))] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[hsl(var(--paper-primary))] mb-2">Paper Machines</h4>
                <p className="text-sm text-muted-foreground mb-2">Two 4.26m trim, 1,200 m/min</p>
                <p className="text-sm text-muted-foreground">1,200 t/day Carton Board</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Recycle className="w-12 h-12 text-[hsl(var(--paper-accent))] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[hsl(var(--paper-primary))] mb-2">Pulping Technology</h4>
                <p className="text-sm text-muted-foreground mb-2">PRC-APMP Pulping</p>
                <p className="text-sm text-muted-foreground">600 t/day eucalyptus pulping</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-[hsl(var(--paper-accent))] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[hsl(var(--paper-primary))] mb-2">Power Generation</h4>
                <p className="text-sm text-muted-foreground mb-2">Two 50 MWe Steam Turbines</p>
                <p className="text-sm text-muted-foreground">100% process thermal energy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Environmental Stewardship"
            // title="We Value Every Single Drop"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">We Value Every Single Drop</span>}
            description="Our commitment to sustainability drives every aspect of our operations, from water stewardship to circular economy practices."
            theme="paper"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[hsl(var(--paper-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-[hsl(var(--paper-light))] border-[hsl(var(--paper-accent))]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[hsl(var(--paper-primary))] mb-4">New Barrier Solutions</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Developing advanced dispersion technology and enhanced recyclability solutions to replace single-use plastics
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">Dispersion Technology</h5>
                    <p className="text-muted-foreground">Liquid/grease-resistant Aqua coatings</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">Enhanced Recyclability</h5>
                    <p className="text-muted-foreground">Fibers recovered, increased recycling value</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">R&D Innovation</h5>
                    <p className="text-muted-foreground">Newer dispersion coated barriers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#d5ad6c] text-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Partner with Us for Sustainable Solutions</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in transforming the packaging industry with innovative, sustainable, and high-quality paper solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-[hsl(var(--paper-primary))]">
                <Link to="">View Product Range</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PulpPaper;
