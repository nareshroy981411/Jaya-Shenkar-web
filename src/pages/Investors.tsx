import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { TrendingUp, Users, DollarSign, Building2, Award, Globe, Target, BarChart3 } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';
import Loader from '@/components/ui/Loader';

const Investors = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const investmentHighlights = [
    {
      title: 'Multi-Sector Portfolio',
      description: 'Diversified revenue streams across Industrial Parks, Pulp & Paper, and Power Infrastructure',
      icon: Building2,
      metric: '3 Core Verticals',
    },
    {
      title: 'Strong Leadership',
      description: '25+ years of proven track record with certified corporate governance',
      icon: Users,
      metric: '200+ Man-Years Experience',
    },
    {
      title: 'Growth Trajectory',
      description: 'Significant expansion across 4+ states with high-value project pipeline',
      icon: TrendingUp,
      metric: '₹10,000+ Cr Investment Potential',
    },
    {
      title: 'Strategic Assets',
      description: 'Prime locations with excellent connectivity and government support',
      icon: Target,
      metric: '8,000+ Acres Under Development',
    },
  ];

  const keyMetrics = [
    { label: 'States Present', value: '4+', icon: Globe },
    { label: 'Projects Value', value: '₹15,000+ Cr', icon: DollarSign },
    { label: 'Job Creation Potential', value: '50,000+', icon: Users },
    { label: 'Land Bank', value: '8,000+ Acres', icon: Building2 },
  ];

  const investmentOpportunities = [
    {
      title: 'Hindupur Industrial Park',
      location: 'Andhra Pradesh',
      investment: '₹2,500 Crores',
      description: 'Strategic with 1,800 acres development potential',
      status: 'Phase 1 Development',
      theme: 'default' as const,
    },
    {
      title: 'Odisha Pharma City',
      location: 'Odisha',
      investment: '₹10,000 Crores',
      description: 'State-of-the-art pharmaceutical and allied industrial park',
      status: 'JV with IDCO',
      theme: 'default' as const,
    },
    {
      title: 'West Godavari Paper Mill',
      location: 'Andhra Pradesh',
      investment: '₹1,800 Crores',
      description: 'Sustainable packaging solutions with advanced technology',
      status: 'Under Construction',
      theme: 'paper' as const,
    },
    {
      title: 'Captive Power Plants',
      location: 'Multi-State',
      investment: '₹800 Crores',
      description: 'Two 200 MW thermal power plants for industrial units',
      status: 'Planning Phase',
      theme: 'power' as const,
    },
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />

      {/* Hero Section with Background Video */}
      <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bg-video/ringroad.mp4"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0  z-0 pointer-events-none" />
        <div className="relative z-10 w-full">
          <HeroSection
            description="Discover high-potential investment opportunities with Jaya Shankar Group, a trusted leader in real estate, infrastructure, and emerging markets."
            title="Investment Opportunities with Jaya Shankar Group"
          />
        </div>
      </div>

      {/* Investment Highlights */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Investment Highlights"
            title="Why Invest in Jaya Shankar Group"
            description="Strategic advantages and compelling value propositions that make us an attractive investment partner"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {investmentHighlights.map((highlight, index) => {
              // Assign different accent colors for icons and metric text
              const iconBg = [
                'bg-yellow-100',
                'bg-blue-100',
                'bg-brown-100',
                'bg-orange-100',
              ][index % 4];
              const iconColor = [
                'text-yellow-600',
                'text-blue-600',
                'text-[#9b6400]',
                'text-orange-600',
              ][index % 4];
              return (
                <Card key={index} className="hover-lift transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <highlight.icon className={`w-8 h-8 ${iconColor}`} />
                    </div>
                    <div className={`text-2xl font-bold mb-2`}>{highlight.metric}</div>
                    <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {keyMetrics.map((metric, index) => {
              const iconBg = [
                'bg-blue-100',
                'bg-yellow-100',
                'bg-brown',
                'bg-orange-100',
              ][index % 4];
              const iconColor = [
                'text-blue-600',
                'text-yellow-600',
                'text-[#9b6400]',
                'text-orange-600',
              ][index % 4];
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <metric.icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div className={`text-xl font-bold mb-1`}>{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50">
        <div className="container-width">
          <SectionHeader
            subtitle="Investment Opportunities"
            title="Current & Upcoming Projects"
            description="Explore our portfolio of high-potential projects across different sectors and development stages"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {investmentOpportunities.map((opportunity, index) => {
              const accentColor = [
                'text-blue-600',
                'text-yellow-600',
                'text-[#9b6400]',
                'text-orange-600',
              ][index % 4];
              return (
                <Card key={index} className="hover-lift transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                        <p className="text-muted-foreground">{opportunity.location}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-semibold ${accentColor}`}>{opportunity.investment}</div>
                        <div className="text-sm text-muted-foreground">{opportunity.status}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose JSG */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeader
            subtitle="Investment Rationale"
            title="Strategic Value Propositions"
            description="Key factors that position Jaya Shankar Group as a compelling investment opportunity"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Proven Track Record */}
            {/* Card 1: Proven Track Record */}
            <Card className="hover-lift transition-shadow">
              <CardContent className="p-4 md:p-6">
                <Award className="w-12 h-12 bg-yellow-100 rounded-lg text-yellow-600 mb-4 flex items-center justify-center" />
                <h3 className="text-lg font-semibold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  25+ years of successful project execution with certified corporate governance and transparent operations.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Strategic Locations */}
            <Card className="hover-lift transition-shadow">
              <CardContent className="p-4 md:p-6">
                <Target className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4 flex items-center justify-center" />
                <h3 className="text-lg font-semibold mb-3">Strategic Locations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prime industrial locations with excellent connectivity, government support, and proximity to major markets.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Diversified Revenue */}
            <Card className="hover-lift transition-shadow">
              <CardContent className="p-4 md:p-6">
                <BarChart3 className="w-12 h-12 bg-white-100 rounded-lg text-[#9b6400] mb-4 flex items-center justify-center" />
                <h3 className="text-lg font-semibold mb-3">Diversified Revenue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multiple revenue streams across different sectors reducing investment risk and enhancing stability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#edb682]">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to Invest in India's Industrial Future?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in creating sustainable industrial ecosystems that generate strong returns while contributing to India's economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link to="/contact">Schedule a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
