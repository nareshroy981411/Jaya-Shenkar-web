import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyContactButton from "@/components/common/StickyContactButton";
import { Leaf, Factory, TreePine, Zap, Package, Recycle, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
// import bambooPlatationHero from "@/assets/bamboo-plantation-hero.jpg";
// import bioRefineryFacility from "@/assets/bio-refinery-facility.jpg";
// import bambooPulpProcess from "@/assets/bamboo-pulp-process.jpg";
// import agroforestryFarmers from "@/assets/agroforestry-farmers.jpg";
// import greenChemicalsLab from "@/assets/green-chemicals-lab.jpg";

const ChemicalsPackaging = () => {
  const solutions = [
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: "Bamboo Kraft Pulp & Packaging",
      description: "300,000 TPA bleached bamboo kraft pulp with 150,000 TPA printing & writing paper and 80,000 TPA specialty packaging paper.",
      features: ["Bleached bamboo kraft pulp", "Specialty packaging paper", "Integrated chlor-alkali plant", "Co-gen power plant"]
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Resource Development",
      description: "Social agroforestry partnerships with local farmers featuring high-yield bamboo and eucalyptus cultivation.",
      features: ["Social agroforestry", "High-yield bamboo", "Land regeneration", "Circular farming models"]
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: "Advanced Bio-Based Products",
      description: "Innovative biofuels, biochemicals, and nanocellulose products for packaging, automotive, and construction industries.",
      features: ["Biofuels from biomass", "Biochemicals from lignin", "Nanocellulose products", "Biocomposites"]
    },
    {
      icon: <Factory className="h-8 w-8 text-green-600" />,
      title: "Green Chemical Innovation",
      description: "Advanced green chemicals including solvents, biodegradable polymers, and pharmaceutical extractives.",
      features: ["Bio-based solvents", "Biodegradable polymers", "Pharmaceutical chemicals", "High-value extractives"]
    }
  ];

  const agroforestryPrinciples = [
    {
      title: "Intentional",
      description: "Smart design for multiple outputs",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Integrated",
      description: "Horizontal + vertical value chain alignment",
      icon: <Recycle className="h-6 w-6" />
    },
    {
      title: "Interactive",
      description: "Managed eco-interactions using tech and IoT",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Intensive",
      description: "High-yield + low ecological footprint",
      icon: <TreePine className="h-6 w-6" />
    }
  ];

  const specifications = [
    { label: "Bamboo Kraft Pulp Capacity", value: "300,000 TPA" },
    { label: "Printing & Writing Paper", value: "150,000 TPA" },
    { label: "Specialty Packaging Paper", value: "80,000 TPA" },
    { label: "Manufacturing Area", value: "500-600 acres" },
    { label: "Market Growth Rate", value: "7% CAGR" },
    { label: "Target Market Size", value: "36M tons by 2030" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(/paper&pulp/paper_2.webp)`
          }}
        />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 text-xs sm:text-sm">
            JAYASHANKAR CHEMICALS & PACKAGINGS ASSAM PRIVATE LIMITED
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Building India's Bio-Based Future from Assam
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
            Pioneering sustainable pulp, packaging, and green chemicals through bamboo and agroforestry-based innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-green-50">
              Explore Our Vision
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                src="/paper&pulp/paper_bamboo.jpg" 
                alt="Bio-refinery facility" 
                className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">From Fossil to Forest</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed">
              We believe cellulose is the industrial material of the 21st century — replacing coal and oil 
              with renewable, biodegradable alternatives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Bamboo Pulp & Paper</h3>
                  <p className="text-xs sm:text-sm text-gray-600">World-class manufacturing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Social Forestry</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Partnerships with farmers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Factory className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Green Chemicals</h3>
                  <p className="text-xs sm:text-sm text-gray-600">From biomass innovation</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Eco Packaging</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Recyclable solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive bio-based manufacturing solutions from sustainable resource development to advanced green chemicals.
            </p>
          </div>
          <div className="mb-12">
            <img 
              src="/paper&pulp/pulp.jpg" 
              alt="Bamboo pulp manufacturing process" 
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {solution.icon}
                    <CardTitle className="text-lg sm:text-xl break-words">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
                src="/paper&pulp/packing_image.webp" 
                alt="Agroforestry farmers working" 
                className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {agroforestryPrinciples.map((principle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg break-words">{principle.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
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
            {specifications.map((spec, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 break-words leading-tight">{spec.label}</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Strategic Location: Assam Advantage</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Bamboo-Rich Zone</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Ideal agroclimatic conditions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Factory className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Manufacturing Space</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">500-600 acres core facility</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Government Support</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Industrial development backing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Integrated Model</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Plantation + processing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Trade Access</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Northeast & Southeast Asia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">Legacy & Experience</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">From the house of Jayashankar Group with proven track record</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">End-to-End Integration</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">Complete value chain from forestry to finished products</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">Environmental Leadership</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">Low emissions, high circularity, sustainable practices</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">Inclusive Development</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">Farmer income, green jobs, sustainable land use</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">Future-Ready Technology</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">Bio-refinery ecosystem with advanced capabilities</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-600 break-words">Market Opportunity</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">7% CAGR growth, 36M tons demand by 2030</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Build the Bio-Based Future?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Join us in pioneering sustainable manufacturing solutions that benefit businesses, communities, and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-green-50">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              Download Brochure
            </Button>
          </div>
          
          <Separator className="my-12 bg-white/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Contact Person</h3>
              <p className="text-green-100">Mr. Dontharaju Kalyan Srinivas</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-green-100">srikalyan@jayashankargroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-green-100">www.jayashankargroup.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChemicalsPackaging;
