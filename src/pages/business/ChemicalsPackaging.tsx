import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
      <section className="bg-white relative min-h-[600px] bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/Agroforestry.webp)`,
          }}
        />
        <div className="relative container mx-auto px-6 py-24 text-center mt-20">
          <Badge variant="secondary" className="mb-6 px-6 py-2 rounded-full font-semibold text-lg shadow-lg mb-6 bg-blue-800 text-white border-white/20 hover:bg-blue-500 sm:text-sm">
            JAYASHANKAR CHEMICALS & PACKAGINGS ASSAM PRIVATE LIMITED
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Building India's Bio-Based Future from Assam
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
            Pioneering sustainable pulp, packaging, and green chemicals through bamboo and agroforestry-based innovation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white ">
        <div className="container mx-auto px-6 bg-white ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white ">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">About the Company</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                A visionary initiative of the Jayashankar Group, focused on developing India's most sustainable,
                circular, and inclusive industrial ecosystem using bamboo and agroforestry.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                This project represents a shift from hydrocarbon-based materials to bio-based alternatives,
                placing Assam on the global map for sustainable manufacturing and green innovation.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/aboutCP.png"
                alt="Bio-refinery facility"
                className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Fossil to Forest
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed">
              We believe cellulose is the industrial material of the 21st century — replacing coal and oil
              with renewable, biodegradable alternatives.
            </p>
          </div>

          {/* Dynamic Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((item, index) => (
              <div key={index} className="group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-md"
                />
                <div
                  className={`p-6 text-center rounded-b-md transition duration-300 ${item.bgColor} group-hover:bg-blue-300`}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-900">{item.subtitle}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6 ">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Agroforestry Model: Sustainability in Action</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Combining trees, crops, and communities in a synergistic land-use system with smart design for multiple outputs.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/agro.png"
                alt="Agroforestry farmers working"
                className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-green-600 break-words">Soil Protection</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">Regenerates fertility and prevents erosion</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-green-600 break-words">Income Security</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">Food and income security for farmers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-green-600 break-words">Carbon Sequestration</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">Supports biodiversity and climate goals</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-green-600 break-words">Economic Returns</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">Diversified short, medium, long-term benefits</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Technical Specifications</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Advanced manufacturing capabilities and market positioning</p>
          </div>
          <div className="mb-12">
            <img
              src="/paper&pulp/paper_pulp.jpg"
              alt="Green chemicals laboratory"
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-200 p-4 rounded-md shadow-sm"
              >
                {/* Image Icon Container */}
                <div className="flex-shrink-0 mr-4 border-teal-700 p-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 text-teal-700"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base font-semibold text-blue-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Build the Bio-Based Future?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in pioneering sustainable manufacturing solutions that benefit businesses, communities, and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-green font-bold hover:text-green-800">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            {/* <Button size="lg" variant="secondary" className="text-green font-bold hover:text-green-800">
              Download Brochure
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChemicalsPackaging;
