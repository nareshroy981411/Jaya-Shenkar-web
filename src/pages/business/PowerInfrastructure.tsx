
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import HeroSection from '@/components/common/HeroSection';
// import SectionHeader from '@/components/common/SectionHeader';
// import StickyContactButton from '@/components/common/StickyContactButton';
// import { Zap, Settings, Users, FileText, Shield, Target } from 'lucide-react';

// const PowerInfrastructure = () => {
//   const solutions = [
//     {
//       title: 'Captive Power Plants (CPPs)',
//       description: 'Two 200 MW thermal power plants ensuring reliable, cost-effective, and uninterrupted power supply for industrial units.',
//       icon: Zap,
//       features: ['200 MW Capacity Each', 'Thermal Power Technology', 'Industrial Unit Support', 'Cost-Effective Solutions']
//     },
//     {
//       title: 'Transportation Networks',
//       description: 'Highway systems, underground tunnels, and supporting logistics infrastructure connecting industrial zones.',
//       icon: Target,
//       features: ['Highway Construction', 'Underground Tunnels', 'Logistics Support', 'Industrial Connectivity']
//     }
//   ];

//   const bootModel = [
//     {
//       phase: 'Build',
//       description: 'Engineering, Procurement, and Construction (EPC) of power facilities',
//       icon: Settings
//     },
//     {
//       phase: 'Own',
//       description: 'Ownership during the operational period with full responsibility',
//       icon: Shield
//     },
//     {
//       phase: 'Operate',
//       description: 'Daily operations and maintenance for optimal performance',
//       icon: Users
//     },
//     {
//       phase: 'Transfer',
//       description: 'Ownership transfer after 15-30 years concession period',
//       icon: FileText
//     }
//   ];

//   const technicalSpecs = [
//     {
//       title: 'Fuel Technology',
//       description: 'Coal and natural gas-based thermal plants',
//       value: 'Multi-Fuel'
//     },
//     {
//       title: 'Environmental Compliance',
//       description: 'Advanced flue gas treatment systems',
//       value: '100%'
//     },
//     {
//       title: 'Efficiency Rating',
//       description: 'State-of-the-art technology for maximum efficiency',
//       value: 'Optimized'
//     },
//     {
//       title: 'Safety Standards',
//       description: 'Comprehensive safety protocols and monitoring',
//       value: 'Premium'
//     }
//   ];

//     const heroSlides = [
//     {
//       title:"Powering Progress: Robust Infrastructure Solutions",
//       subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
//       backgroundImage:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
//       theme:"power",
//       buttons:[
//         { text: 'Our Solutions', href: '#solutions' },
//           { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
//       ]
//     },
//      {
//       title:"Powering Progress: Robust Infrastructure Solutions",
//       subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
//       backgroundImage:"/power/solar_power.png",
//       theme:"power",
//       buttons:[
//         { text: 'Our Solutions', href: '#solutions' },
//           { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
//       ]
//     },
//      {
//       title:"Powering Progress: Robust Infrastructure Solutions",
//       subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
//       backgroundImage:"/power/tunnel-1.png",
//       theme:"power",
//       buttons:[
//         { text: 'Our Solutions', href: '#solutions' },
//           { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
//       ]
//     },
//      {
//       title:"Powering Progress: Robust Infrastructure Solutions",
//       subtitle:"Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
//       backgroundImage:"https://media.discordapp.net/attachments/1390617522109288519/1394682836459720704/karsten-wurth-rafblRbne3o-unsplash.jpg?ex=6877b31c&is=6876619c&hm=b6c8d4b1dfc8ff74e69a286e78ed21b6411ecd18a8a3fe0943fbe113595971a8&=&format=webp&width=1116&height=744",
//       theme:"power",
//       buttons:[
//         { text: 'Our Solutions', href: '#solutions' },
//           { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen power-theme">
//       <Header />
//       <StickyContactButton />

//       {/* Hero Section */}

//       <HeroSection slides={heroSlides}
//         // title="Powering Progress: Robust Infrastructure Solutions"
//         // subtitle="Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure."
//         // theme="power"
//         // backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//         // buttons={[
//         //   { text: 'Our Solutions', href: '#solutions' },
//         //   { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
//         // ]}
//       />

//       {/* Solutions Overview */}
//       <section id="solutions" className="section-padding bg-gradient-to-r from-blue-50 via-white to-blue-100">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="Our Solutions & Capabilities"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Comprehensive Power & Infrastructure Services</span>}
//             // title="Comprehensive Power & Infrastructure Services"
//             description="We provide end-to-end solutions for power generation and infrastructure development, supporting industrial growth across multiple sectors."
//             theme="power"
//             centered
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {solutions.map((solution, index) => (
//               <Card key={index} className="hover-lift">
//                 <CardContent className="p-8">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-16 h-16 bg-[hsl(var(--power-accent))] rounded-lg flex items-center justify-center flex-shrink-0">
//                       <solution.icon className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">{solution.title}</h3>
//                       <p className="text-muted-foreground mb-6">{solution.description}</p>
//                       <div className="grid grid-cols-2 gap-3">
//                         {solution.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="flex items-center space-x-2">
//                             <div className="w-2 h-2 bg-[hsl(var(--power-accent))] rounded-full"></div>
//                             <span className="text-sm">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BOOT Model */}
//       <section id="boot-model" className="section-padding bg-gradient-to-r from-green-50 via-white to-green-100">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="BOOT Model"
//             // title="Build, Own, Operate, Transfer"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Build, Own, Operate, Transfer</span>}
//             description="Our BOOT model ensures efficient project delivery, optimal operations, and seamless knowledge transfer while maintaining the highest standards of compliance and performance."
//             theme="power"
//             centered
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {bootModel.map((phase, index) => (
//               <Card key={index} className="text-center hover-lift">
//                 <CardContent className="p-6">
//                   <div className="w-16 h-16 bg-[hsl(var(--power-accent))] rounded-full flex items-center justify-center mx-auto mb-4">
//                     <phase.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h4 className="text-lg font-semibold text-[hsl(var(--power-primary))] mb-3">{phase.phase}</h4>
//                   <p className="text-sm text-muted-foreground">{phase.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="mt-12">
//             <Card className="bg-[hsl(var(--power-light))] border-[hsl(var(--power-accent))]">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-semibold text-[hsl(var(--power-primary))] mb-6 text-center">Financial & Legal Framework</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="text-center">
//                     <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Legal Compliance</h5>
//                     <p className="text-sm text-muted-foreground">Operations under Indian Companies Act, 2013 with full statutory compliance</p>
//                   </div>
//                   <div className="text-center">
//                     <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Revenue Model</h5>
//                     <p className="text-sm text-muted-foreground">Revenue generation through Power Purchase Agreements (PPAs)</p>
//                   </div>
//                   <div className="text-center">
//                     <h5 className="font-semibold text-[hsl(var(--power-primary))] mb-2">Concession Period</h5>
//                     <p className="text-sm text-muted-foreground">15-30 years operational period before ownership transfer</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Technical Specifications */}
//       <section className="section-padding bg-gradient-to-r from-yellow-50 via-white to-yellow-100">
//         <div className="container-width">
//           <SectionHeader
//             subtitle="Technical Excellence"
//             // title="State-of-the-Art Technology & Specifications"
//             title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">State-of-the-Art Technology & Specifications</span>}
//             description="Our power plants utilize the latest technology to ensure maximum efficiency, environmental compliance, and operational safety."
//             theme="power"
//             centered
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {technicalSpecs.map((spec, index) => (
//               <Card key={index} className="text-center hover-lift">
//                 <CardContent className="p-6">
//                   <div className="text-3xl font-bold text-[hsl(var(--power-accent))] mb-2">{spec.value}</div>
//                   <h4 className="font-semibold text-[hsl(var(--power-primary))] mb-2">{spec.title}</h4>
//                   <p className="text-sm text-muted-foreground">{spec.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Strategic Importance */}
//       <section className="section-padding bg-gradient-to-r from-gray-50 via-white to-gray-100">
//         <div className="container-width">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-semibold text-[hsl(var(--power-primary))] mb-6">Strategic Importance</h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               Our power and infrastructure projects are integral to supporting our industrial park and pulp & paper development goals, 
//               providing stable power supply, reducing energy costs, and positioning us as a key player in regional energy security.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Industrial Support</h4>
//                 <p className="text-muted-foreground">Dedicated power supply for our industrial parks and manufacturing facilities</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Cost Efficiency</h4>
//                 <p className="text-muted-foreground">Reduced energy costs through captive power generation and optimal operations</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-[hsl(var(--power-primary))] mb-3">Energy Security</h4>
//                 <p className="text-muted-foreground">Contributing to regional energy security and grid stability</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services CTA */}
//       <section className="section-padding bg-gradient-to-r from-orange-50 via-white to-orange-100 text-[hsl(var(--power-primary))]">
//         <div className="container-width">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-[hsl(var(--power-primary))] mb-6">Reliable Energy & Infrastructure Services</h2>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Partner with us for customized power solutions and infrastructure development that drives your business forward.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" variant="default" className="bg-[hsl(var(--power-accent))] text-white hover:bg-[hsl(var(--power-primary))]">
//                 <Link to="/contact">Inquire About Our Services</Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-[hsl(var(--power-accent))] text-[hsl(var(--power-primary))] hover:bg-[hsl(var(--power-accent))] hover:text-white">
//                 <Link to="">Customized Solutions</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default PowerInfrastructure;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import StickyContactButton from '@/components/common/StickyContactButton';
import { Zap, Settings, Users, FileText, Shield, Target, TrendingUp, Globe, Factory, Lightbulb, Gauge, Award } from 'lucide-react';

const PowerInfrastructure = () => {
  const solutions = [
    {
      title: 'Captive Power Plants (CPPs)',
      description: 'Two 200 MW thermal power plants ensuring reliable, cost-effective, and uninterrupted power supply for industrial units.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['200 MW Capacity Each', 'Thermal Power Technology', 'Industrial Unit Support', 'Cost-Effective Solutions'],
      stats: { capacity: '400 MW', efficiency: '95%', uptime: '99.5%' }
    },
    {
      title: 'Transportation Networks',
      description: 'Highway systems, underground tunnels, and supporting logistics infrastructure connecting industrial zones.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1736117705678-4d7d49850205?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Highway Construction', 'Underground Tunnels', 'Logistics Support', 'Industrial Connectivity'],
      stats: { length: '500+ KM', tunnels: '15+', connectivity: '100%' }
    },
    {
      title: 'Solar Power Solutions',
      description: 'Cutting-edge solar photovoltaic systems providing clean, renewable energy with maximum efficiency and minimal environmental impact.',
      icon: Lightbulb,
      image: '/power/solar_power.png',
      features: ['High-Efficiency Panels', 'Smart Grid Integration', 'Battery Storage Systems', 'Remote Monitoring'],
      stats: { capacity: '100 MW', efficiency: '22%', lifespan: '25 Years' }
    }
  ];

  const bootModel = [
    {
      phase: 'Build',
      description: 'Engineering, Procurement, and Construction (EPC) of power facilities',
      icon: Settings,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      phase: 'Own',
      description: 'Ownership during the operational period with full responsibility',
      icon: Shield,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      phase: 'Operate',
      description: 'Daily operations and maintenance for optimal performance',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      phase: 'Transfer',
      description: 'Ownership transfer after 15-30 years concession period',
      icon: FileText,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1467579424161-6bbc141569d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const technicalSpecs = [
    {
      title: 'Fuel Technology',
      description: 'Coal and natural gas-based thermal plants',
      value: 'Multi-Fuel',
      icon: Gauge,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Environmental Compliance',
      description: 'Advanced flue gas treatment systems',
      value: '100%',
      icon: Globe,
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Efficiency Rating',
      description: 'State-of-the-art technology for maximum efficiency',
      value: 'Optimized',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Safety Standards',
      description: 'Comprehensive safety protocols and monitoring',
      value: 'Premium',
      icon: Shield,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  const achievements = [
    {
      title: 'Power Generation',
      value: '500+ MW',
      description: 'Total installed capacity across thermal and solar facilities',
      icon: Zap,
      color: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Infrastructure Projects',
      value: '25+',
      description: 'Completed major infrastructure and transportation projects',
      icon: Target,
      color: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Operational Excellence',
      value: '99.5%',
      description: 'Average uptime across all power generation facilities',
      icon: Award,
      color: 'text-purple-600',
      image: '/images/excellence.png'
    },
    {
      title: 'Environmental Impact',
      value: '40%',
      description: 'Reduction in carbon footprint through renewable integration',
      icon: Globe,
      color: 'text-orange-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0A7k9lnv8ucyrdY3GcWuK8fDlu2CuyC50oFQbWkr4uJMlUsqsr6qz79d9iWld7ot73o&usqp=CAU'
    }
  ];

  const strategicBenefits = [
    {
      title: 'Industrial Growth',
      description: 'Reliable power supply enabling industrial expansion and economic development',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduced energy costs through captive power generation and optimized operations',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Energy Security',
      description: 'Contributing to regional energy security and grid stability with diversified sources',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const heroSlides = [
    {
      title: "Powering Progress: Robust Infrastructure Solutions",
      // subtitle: "Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      theme: "power",
      buttons: [
        { text: 'Our Solutions', href: '#solutions' },
        { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
    {
      title: "Powering Progress: Robust Infrastructure Solutions",
      // subtitle: "Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage: "/power/solar_power.png",
      theme: "power",
      buttons: [
        { text: 'Our Solutions', href: '#solutions' },
        { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
    {
      title: "Powering Progress: Robust Infrastructure Solutions",
      // subtitle: "Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage: "/power/tunnel-1.png",
      theme: "power",
      buttons: [
        { text: 'Our Solutions', href: '#solutions' },
        { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    },
    {
      title: "Powering Progress: Robust Infrastructure Solutions",
      // subtitle: "Developing, operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, and critical industrial infrastructure.",
      backgroundImage: "/power/tunnel.png",
      theme: "power",
      buttons: [
        { text: 'Our Solutions', href: '#solutions' },
        { text: 'BOOT Model', href: '#boot-model', variant: 'outline' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection slides={heroSlides} />



      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Power & Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions for power generation and infrastructure development, supporting industrial growth across multiple sectors.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{solution.description}</p>

                  <div className="grid grid-cols-3 gap-4 py-6">
                    {Object.entries(solution.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOT Model */}
      <section id="boot-model" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              BOOT Model Excellence
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our BOOT model ensures efficient project delivery, optimal operations, and seamless knowledge transfer while maintaining the highest standards of compliance and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {bootModel.map((phase, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={phase.image}
                    alt={phase.phase}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{phase.phase}</h4>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
            <div className="">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Financial & Legal Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                <div className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/images/legal.png"
                      alt="Legal Compliance Icon"
                      className="object-cover "
                    />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h5>
                  <p className="text-gray-600">Operations under Indian Companies Act, 2013 with full statutory compliance</p>
                </div>
                <div className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/images/revenue.png"
                      alt="Legal Compliance Icon"
                      className="object-cover "
                    />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-3">Revenue Model</h5>
                  <p className="text-gray-600">Revenue generation through Power Purchase Agreements (PPAs)</p>
                </div>
                <div className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/images/period.png"
                      alt="Legal Compliance Icon"
                      className="object-cover"
                    />                  </div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-3">Concession Period</h5>
                  <p className="text-gray-600">15-30 years operational period before ownership transfer</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across all aspects of power generation and infrastructure development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
              
              
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white bg-[url('/images/tech2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art Technology & Specifications
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Our power plants utilize the latest technology to ensure maximum efficiency, environmental compliance, and operational safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="text-center bg-gray hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${spec.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <spec.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#F3EC1F] mb-2">{spec.value}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{spec.title}</h4>
                  <p className="text-gray-900 font-semibold">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Strategic Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our power and infrastructure projects create lasting value for industries, communities, and the nation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  A Sustainable Cycle
                </h3>
                <h4 className="text-2xl font-bold text-blue-600 mb-3">
                  Rooted in Responsibility
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From power generation to infrastructure development, our process is designed to give back more than it takes.
                  Every step is part of a conscious loop, empowering industries, nurturing communities, and building with care
                  for a better tomorrow.
                </p>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Explore Our Process
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>

            {/* Right Column - Carbon Circulation Image and Cards */}
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                {/* Carbon Circulation Image */}
                <div className="relative w-72 h-72 mx-auto mb-6">
                  <img
                    src="https://static.horiba.com/fileadmin/Horiba/Application/Energy/Carbon_Recycling/Reduce/carbon_circulation.jpg"
                    alt="Carbon Circulation Cycle"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />

                  {/* Overlay with central content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <h4 className="text-lg font-bold text-blue-600 mb-1">Power Generation</h4>
                      <p className="text-xs text-gray-600">We provide reliable thermal and solar power solutions to industries</p>
                    </div>
                  </div>
                </div>

                {/* Three Compact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-white rounded-lg shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">Reliable Power</h5>
                    <p className="text-xs text-gray-600">24/7 energy supply for industries</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-lg border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">Economic Growth</h5>
                    <p className="text-xs text-gray-600">Driving regional development</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-lg border-t-4 border-purple-500 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">Sustainability</h5>
                    <p className="text-xs text-gray-600">Environmental responsibility</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-4 flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-[#f0b429] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Partner with us for customized power solutions and infrastructure development that drives your business forward with reliability, efficiency, and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-blue-600 bg-white px-8 py-4 text-lg font-semibold"
            >

              <Link to="/business">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerInfrastructure;