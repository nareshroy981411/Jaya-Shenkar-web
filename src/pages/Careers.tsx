
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Users, Briefcase, Award, TrendingUp, Building2, Heart } from 'lucide-react';

const Careers = () => {
  const whyJoinReasons = [
    {
      title: 'Innovation & Growth',
      description: 'Work on cutting-edge projects that shape India\'s industrial future',
      icon: TrendingUp
    },
    {
      title: 'Expert Leadership',
      description: 'Learn from industry veterans with decades of experience',
      icon: Award
    },
    {
      title: 'Diverse Projects',
      description: 'Gain exposure across industrial, manufacturing, and energy sectors',
      icon: Building2
    },
    {
      title: 'Impact & Purpose',
      description: 'Contribute to sustainable development and community growth',
      icon: Heart
    },
    {
      title: 'Team Excellence',
      description: 'Join a team with 200+ combined man-years of expertise',
      icon: Users
    },
    {
      title: 'Career Advancement',
      description: 'Fast-track your career in a high-growth organization',
      icon: Briefcase
    }
  ];

  const currentOpenings = [
    {
      title: 'Project Manager - Industrial Development',
      department: 'Operations',
      location: 'Hyderabad / Odisha',
      type: 'Full-time',
      experience: '5-8 years'
    },
    {
      title: 'Environmental Engineer',
      department: 'Sustainability',
      location: 'Andhra Pradesh',
      type: 'Full-time',
      experience: '3-5 years'
    },
    {
      title: 'Business Development Manager',
      department: 'Commercial',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '6-10 years'
    },
    {
      title: 'Process Engineer - Pulp & Paper',
      department: 'Manufacturing',
      location: 'West Godavari',
      type: 'Full-time',
      experience: '4-7 years'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection
        title="Build Your Career with India's Industrial Leaders"
        subtitle="Join our team of passionate professionals dedicated to creating sustainable industrial growth and making a positive impact on communities across India."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        buttons={[
          { text: 'View Openings', href: '#openings' },
          { text: 'Why Join Us', href: '#why-join', variant: 'outline' }
        ]}
      />

      {/* Why Join Us */}
      <section id="why-join" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Why Join Jaya Shankar Group"
            title="Shape the Future of Industrial Development"
            description="Be part of a dynamic team that's transforming India's industrial landscape through innovation, sustainability, and excellence."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="section-padding bg-muted/50">
        <div className="container-width">
          <SectionHeader
            subtitle="Current Opportunities"
            title="Join Our Growing Team"
            description="Explore exciting career opportunities across our diverse business verticals and contribute to India's industrial growth story."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentOpenings.map((opening, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{opening.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{opening.department}</span>
                        <span>•</span>
                        <span>{opening.location}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {opening.type}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Experience: {opening.experience}
                    </span>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="Our Work Culture"
                title="Excellence, Innovation, and Collaboration"
                description="We foster an environment that encourages innovation, rewards excellence, and promotes collaborative growth across all levels of the organization."
              />
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Merit-based growth opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous learning and development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Work-life balance initiatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Competitive compensation packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Health and wellness programs</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in building India's industrial future. Your expertise and passion can help drive sustainable growth and create lasting positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
