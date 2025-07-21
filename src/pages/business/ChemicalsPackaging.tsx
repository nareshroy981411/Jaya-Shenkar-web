import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from '@/components/common/HeroSection';
import StickyContactButton from "@/components/common/StickyContactButton";
import { Leaf, Factory, TreePine, Zap, Package, Recycle, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart2, Share2, PoundSterling } from 'lucide-react'; // or your preferred icon set


const ChemicalsPackaging = () => {
  const solutions = [
    {
      icon: <TreePine className="w-6 h-6 text-white" />,
      title: "Bleached Bamboo Kraft Pulp",
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Specialty Packaging Paper",
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      title: "Integrated Chlor-Alkali Plant",
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "High-Yield Bamboo Cultivation",
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "Circular Farming Models",
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      title: "Biodegradable Polymers",
    },
    {
      icon: <TreePine className="w-6 h-6 text-white" />,
      title: "Nanocellulose Products",
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      title: "Bio-Based Solvents",
    },
  ];

  const specifications = [
    {
      icon: '/images/craft.png',
      title: "Bamboo Craft Pulp Capacity",
      description:
        "300,000 TPA",
    },
    {
      icon: '/images/printing.png',
      title: "Printing & Writing Paper",
      description:
        "150,000 TPA",
    },
    {
      icon: "/images/packaging.png",
      title: "Specialty Packaging Paper",
      description:
        "80,000 TPA",
    },
    {
      icon: "/images/Manufacturing.png",
      title: "Manufacturing Area",
      description:
        "500-600 acres",
    }, {
      icon: "/images/marketsize.png",
      title: "Target Market Size",
      description:
        "36M tons by 2030",
    },
    {
      icon: "/images/growth.png",
      title: "Market Growth Rate",
      description:
        "7% CAGR",
    },
  ];
  const cardData = [
    {
      title: 'Bamboo Pulp & Paper',
      subtitle: 'World-class manufacturing',
      image: '/images/bamboo_pulp_and_paper.png',
      bgColor: 'bg-white', // use hover styling if needed
    }, {
      title: 'Social Forestry',
      subtitle: 'Partnerships with farmers',
      image: '/images/social_forestry_with_farmers.png',
      bgColor: 'bg-white', // use hover styling if needed
    }, {
      title: 'Green Chemicals',
      subtitle: 'From biomass innovation',
      image: '/images/green-chemicals.png',
      bgColor: 'bg-white', // use hover styling if needed
    }, {
      title: 'Eco Packaging',
      subtitle: 'Recyclable solutions',
      image: '/images/packaging-paper.png',
      bgColor: 'bg-white', // use hover styling if needed
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />
      {/* Hero Section */}
      <HeroSection
        description="Building India's Bio-Based Future from Assam"
        title="JayaShankar Chemicals & Packagings Assam Private Limited"
        backgroundImage="/images/Agroforestry.webp"
      />
      {/* About Section */}
      <section className="py-16 xs:py-20 bg-white ">
        <div className="container mx-auto px-2 xs:px-6 bg-white ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white ">
            <div>
              <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 text-agro-primary">About the Company</h2>
              <p className="text-xs xs:text-base sm:text-lg text-agro-dark mb-4 xs:mb-6 leading-relaxed">
                A visionary initiative of the Jayashankar Group, focused on developing India's most sustainable,
                circular, and inclusive industrial ecosystem using bamboo and agroforestry.
              </p>
              <p className="text-xs xs:text-base sm:text-lg text-agro-dark leading-relaxed">
                This project represents a shift from hydrocarbon-based materials to bio-based alternatives,
                placing Assam on the global map for sustainable manufacturing and green innovation.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/aboutCP.png"
                alt="Bio-refinery facility"
                className="rounded-lg shadow-lg w-full h-48 xs:h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 xs:py-20 bg-white">
        <div className="container mx-auto px-2 xs:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 xs:mb-16">
            <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 text-agro-primary">
              From Fossil to Forest
            </h2>
            <p className="text-xs xs:text-base sm:text-lg text-agro-dark mb-8 xs:mb-12 leading-relaxed">
              We believe cellulose is the industrial material of the 21st century — replacing coal and oil
              with renewable, biodegradable alternatives.
            </p>
          </div>
          {/* Dynamic Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-8">
            {cardData.map((item, index) => (
              <div key={index} className="group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 xs:h-48 sm:h-64 object-cover rounded-t-md"
                />
                <div
                  className={`p-4 xs:p-6 text-center rounded-b-md transition duration-300 ${item.bgColor} group-hover:bg-agro-accent`}
                >
                  <h3 className="text-base xs:text-lg font-heading font-semibold text-agro-primary">{item.title}</h3>
                  <p className="text-xs xs:text-base text-agro-dark">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="py-16 xs:py-20">
        <div className="container mx-auto px-2 xs:px-6">
          <div className="text-center mb-10 xs:mb-16">
            <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 text-agro-primary">What We Do</h2>
            <p className="text-xs xs:text-base sm:text-lg text-agro-dark max-w-3xl mx-auto leading-relaxed">
              Comprehensive bio-based manufacturing solutions from sustainable resource development to advanced green chemicals.
            </p>
          </div>
          <section className="py-16 bg-white bg-[url('/images/whatwe.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT: Text Block with Background Image */}
              <div className="">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  Sustainable Innovation Across Fiber, Chemicals & Bio-Based Solutions
                </h2>
                <p className="mb-4 font-semibold">
                  We focus on sustainable innovations including bamboo pulp, agroforestry, bio-based products, and green chemicals. These solutions aim to reduce environmental impact while enabling industrial progress through:
                </p>
                <ul className="list-disc list-inside space-y-2 font-semibold">
                  <li>Eco-friendly manufacturing and packaging</li>
                  <li>Land regeneration and social agroforestry</li>
                  <li>Biochemicals and biodegradable alternatives</li>
                  <li>Waste-to-energy circular models</li>
                </ul>
              </div>

              {/* RIGHT: Feature Grid with Background Image */}
              <div className=" relative grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 ">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-teal-800 text-white p-4 rounded-md shadow-sm"
                  >
                    {/* <div className="bg-white/10 p-2 rounded-md">{item.icon}</div> */}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </div>
      </section>

      {/* Agroforestry Model Section */}
      <section className="py-16 xs:py-20 bg-gray-50">
        <div className="container mx-auto px-2 xs:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 xs:mb-16">
            <div>
              <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 text-agro-primary">Agroforestry Model: Sustainability in Action</h2>
              <p className="text-xs xs:text-base sm:text-lg text-agro-dark leading-relaxed">
                Combining trees, crops, and communities in a synergistic land-use system with smart design for multiple outputs.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/agro.png"
                alt="Agroforestry farmers working"
                className="rounded-lg shadow-lg w-full h-40 xs:h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xs xs:text-base sm:text-lg text-agro-primary break-words">Soil Protection</CardTitle>
                <CardDescription className="text-xs xs:text-sm leading-relaxed text-agro-dark">Regenerates fertility and prevents erosion</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs xs:text-base sm:text-lg text-agro-primary break-words">Income Security</CardTitle>
                <CardDescription className="text-xs xs:text-sm leading-relaxed text-agro-dark">Food and income security for farmers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs xs:text-base sm:text-lg text-agro-primary break-words">Carbon Sequestration</CardTitle>
                <CardDescription className="text-xs xs:text-sm leading-relaxed text-agro-dark">Supports biodiversity and climate goals</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs xs:text-base sm:text-lg text-agro-primary break-words">Economic Returns</CardTitle>
                <CardDescription className="text-xs xs:text-sm leading-relaxed text-agro-dark">Diversified short, medium, long-term benefits</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 xs:py-20">
        <div className="container mx-auto px-2 xs:px-6">
          <div className="text-center mb-10 xs:mb-16">
            <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 text-agro-primary">Technical Specifications</h2>
            <p className="text-xs xs:text-base sm:text-lg text-agro-dark leading-relaxed">Advanced manufacturing capabilities and market positioning</p>
          </div>
          <div className="mb-8 xs:mb-12">
            <img
              src="/paper&pulp/paper_pulp.jpg"
              alt="Green chemicals laboratory"
              className="rounded-lg shadow-lg w-full h-32 xs:h-48 sm:h-64 md:h-72 object-cover"
            />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-6">
            {specifications.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-agro-light p-3 xs:p-4 rounded-md shadow-sm"
              >
                {/* Image Icon Container */}
                <div className="flex-shrink-0 mr-2 xs:mr-4 border-agro-primary p-2 xs:p-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 xs:w-10 h-8 xs:h-10 text-agro-primary"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-xs xs:text-base font-heading font-semibold text-agro-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs xs:text-sm text-agro-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 xs:py-20 bg-[#9DD48B] text-white">
        <div className="container mx-auto px-2 xs:px-6 text-center">
          <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6">Ready to Build the Bio-Based Future?</h2>
          <p className="text-xs xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in pioneering sustainable manufacturing solutions that benefit businesses, communities, and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-bold text-agro-primary hover:text-agro-dark">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChemicalsPackaging;
