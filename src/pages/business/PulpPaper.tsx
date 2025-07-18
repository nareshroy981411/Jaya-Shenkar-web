
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Leaf, Recycle, Factory, Droplets, Shield, Package } from 'lucide-react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Badge } from "@/components/ui/badge";

const imageUrls = [
  "/images/image3.jpg",
  "/images/image4.webp",
  "/images/image3.jpg",
]

const imageData = [
  {
    image: "/images/image5.png",
    subtitle: "Paper Machines",
    description: "Two 4.26m trim, 1,200 m/min. 1,200 t/day Carton Board"
  },
  {
    image: "/images/pulping.png",
    subtitle: "Pulping Technology",
    description: " PRC-APMP Pulping 600 t/day eucalyptus pulping"
  },
  {
    image: "/images/image6.png",
    subtitle: "Power Generation ",
    description: "Two 50 MWe Steam Turbines 100% process thermal energy"
  }
];
const PulpPaper = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 15 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  const productCategories = [ 
    {
      title: 'Liquid Packaging',
      description: 'Premium solutions from fresh virgin fiber for dairy, fruit juices, and ready-to-drink beverages.',
      applications: ['Dairy Products', 'Fruit Juices', 'Ready-to-Drink Beverages'],
      image: '/images/liquid.jpg'
    },
    {
      title: 'Pharma & Healthcare Packaging',
      description: '100% Virgin Fiber carton board with excellent printing and embellishing capabilities.',
      applications: ['Pharmaceutical Products', 'Medical Devices', 'Healthcare Supplies'],
      // image: '/images/image.png',
      image: '/images/health.jpg'

    },
    {
      title: 'Food Service Solutions',
      description: 'Cup Form Board and Tray Form Board as sustainable alternatives to plastic.',
      applications: ['Hot/Cold Beverages', 'Ice Creams', 'Frozen Food Packaging'],
      image: '/images/food.jpg'
    },
    {
      title: 'Cosmetics & Personal Care',
      description: 'Premium high graphic carton board with outstanding surface properties.',
      applications: ['Cosmetic Products', 'Personal Care Items', 'Premium Packaging'],
      image: '/images/cosmotics.png'
    }
  ];

  const sustainabilityFeatures = [
    {
      title: 'Zero Liquid Discharge',
      description: 'Advanced ZLD system ensuring no water contamination',
      icon: '/images/zeroliquid.png'
    },
    {
      title: 'Circular Economy',
      description: 'Reduce, reuse, recycle principles in all operations',
      icon: '/images/cirrcular.png'
    },
    {
      title: 'Virgin Fiber Focus',
      description: '100% virgin fiber for premium quality products',
      icon: '/images/fiber.png'
    },
    {
      title: 'Water Stewardship',
      description: '10 m³/t fresh water consumption with advanced treatment',
      icon: '/images/water.png'
    }
  ];

  return (
    <div className="min-h-screen paper-theme">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}

      {/* <HeroSection
        title="Redefining Sustainable Packaging: West Godavari Mill"
        theme="paper"
        backgroundImage="/images_jayashankar/paper_mill_1.jpg"
      /> */}

      <section className="bg-white relative min-h-[600px] bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images_jayashankar/paper_mill_1.jpg)`,
          }}
        />
        <div className="relative container mx-auto px-6 py-24 text-center mt-20">
          <Badge variant="secondary" className="mb-6 px-6 py-2 rounded-full font-semibold text-lg shadow-lg mb-6 bg-green-800 text-white border-white/20 hover:bg-green-500 sm:text-sm">
            JAYASHANKAR PULP & PAPER MILLS PRIVATE LIMITED
          </Badge>
          <h1 className="font-serif drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#02facd] via-[white] to-[#02facd] bg-clip-text text-transparent">
            Redefining Sustainable Packaging: West Godavari Mill
          </h1>
        </div>
      </section>

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
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">From Graphic Papers to Sustainable Packaging</span>}
            theme="industrial"
            centered
          />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Image Left */}
            <div className="relative order-1 lg:order-none">
              <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
                {imageUrls.map((src, idx) => (
                  <div className="keen-slider__slide" key={idx}>
                    <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <button onClick={() => slider.current?.prev()} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md">&#8592;</button>
              <button onClick={() => slider.current?.next()} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md">&#8594;</button>
            </div>

            {/* Text Right */}
            <div className="px-6 order-2 lg:order-none">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                From Paper Decline to Packaging Growth

              </h2>
              <div className="border-t border-gray-400 my-6 w-full max-w-md"></div>
              <ul className="space-y-2 text-sm text-black-600">
                <li>Digital transformation is reducing demand for graphic papers</li>
                <li>Print media consumption continues to decline</li>
                <li>Digital alternatives are replacing traditional paper use</li>
                <li>Plastic ban regulations are fueling demand for paper packaging</li>
                <li>Consumers prefer sustainable packaging over single-use plastics</li>
                <li>E-commerce growth is driving increased need for eco-friendly packaging solutions</li>
              </ul>
            </div>
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
            title={
              <span className="text-lg md:text-xl lg:text-2xl font-bold block">
                State-of-the-Art Technology
              </span>
            }
            description="Our advanced manufacturing setup ensures optimal efficiency, quality, and environmental compliance."
            theme="paper"
            centered
          />

          {/* Cards Grid - Full Width of container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="group relative w-full h-80 rounded-2xl shadow-card hover:shadow-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[gold]"
              >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover rounded-sm"
                    alt={item.subtitle}
                  />
                <div className="absolute left-1/2 transform -translate-x-1/2 top-48 w-64 h-28 bg-sky-300 border-2 border-black rounded-md flex flex-col items-center justify-center text-center px-2 text-sm font-medium transition-colors duration-300 group-hover:bg-yellow-300">
                  <p className="text-black text-lg group-hover:text-gray-800 font-bold">
                    {item.subtitle}
                  </p>
                  <p className="text-md text-gray-700 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
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
              <div
                key={index}
                className="text-center bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[hsl(var(--paper-primary))] mb-4">
                New Barrier Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Developing advanced dispersion technology and enhanced recyclability solutions to replace single-use plastics
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">
                    Dispersion Technology
                  </h5>
                  <p className="text-muted-foreground">
                    Liquid/grease-resistant Aqua coatings
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">
                    Enhanced Recyclability
                  </h5>
                  <p className="text-muted-foreground">
                    Fibers recovered, increased recycling value
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-[hsl(var(--paper-primary))] mb-2">
                    R&D Innovation
                  </h5>
                  <p className="text-muted-foreground">
                    Newer dispersion coated barriers
                  </p>
                </div>
              </div>
            </div>
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
              {/* <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-[hsl(var(--paper-primary))]">
                <Link to="">View Product Range</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PulpPaper;
