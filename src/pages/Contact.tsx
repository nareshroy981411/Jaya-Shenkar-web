import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from "framer-motion";
import Loader from '@/components/ui/Loader';


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Corporate Office',
      details: [
        '1209, Aparna Westside',
        'Behind DPS School Road',
        'Khajaguda, Hyderabad-500089',
      ],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9390849709',
        // '+91 98496 62787',
        '+91 7093139770',
        // '+44 7721143790',
      ],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@jayashankargroup.com',
        // 'TSR@jayashankargroup.com',
        'srikalyan@jayashankargroup.com',
        // 'sitaram@jayashankargroup.com',
      ],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const keyContacts = [
    {
      name: 'Mr. Dontharaju Kalyan Srinivas',
      title: 'Director',
      phone: '+91 9390849709',
      email: 'srikalyan@jayashankargroup.com',
    },
  ];

  // Updated color palette for contact info cards (all different accent colors)
  const cardColors = [
    { bg: 'bg-', icon: 'text-[gold]', title: 'text-[#224c8c]', detail: 'text-black' },
    { bg: 'bg--100', icon: 'text-[gold]', title: 'text-[#224c8c]', detail: 'text-black' },
    { bg: 'bg--100', icon: 'text-[gold]', title: 'text-[#224c8c]', detail: 'text-black' },
    { bg: 'bg--100', icon: 'text-[gold]', title: 'text-[#224c8c]', detail: 'text-black' },
  ];

  // Updated color palette for key contacts (all different accent colors)
  const contactColors = [
    { bg: 'bg-gray-100', text: 'text-black-700', title: 'text-black-800', role: 'text-blue-600' },
    { bg: 'bg-gray-100', text: 'text-black-700', title: 'text-black-800', role: 'text-blue-600' },
    { bg: 'bg-gray-100', text: 'text-black-700', title: 'text-black-800', role: 'text-blue-600' },
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />

      <HeroSection
        title="Contact Jaya Shankar Group"
        // subtitle="Get in Touch with Our Team"
        description="Ready to explore partnership opportunities or learn more about our projects? We're here to help you succeed."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
            {/* Contact Form */}
            <div className="fade-in">
              <SectionHeader
                title="Send Us a Message"
                description="Fill out the form below and we'll get back to you within 24 hours."
              // ...removed className prop for type compatibility
              />

              <Card className="bg-white/90 shadow-xl border-blue-100">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-[#587d7d]">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="focus:ring-2 focus:ring-blue-400 border-blue-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#587d7d]">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="focus:ring-2 focus:ring-blue-400 border-blue-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-[#587d7d]">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className="focus:ring-2 focus:ring-blue-400 border-blue-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-[#587d7d]">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter your company name"
                          className="focus:ring-2 focus:ring-blue-400 border-blue-200"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-[#587d7d]">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="focus:ring-2 focus:ring-blue-400 border-blue-200">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="investment">Investment Inquiry</SelectItem>
                          <SelectItem value="industrial">Industrial Park Services</SelectItem>
                          <SelectItem value="paper">Pulp & Paper Solutions</SelectItem>
                          <SelectItem value="power">Power & Infrastructure</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#587d7d]">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Enter your message"
                        rows={6}
                        required
                        className="focus:ring-2 focus:ring-blue-400 border-blue-200"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#679292] hover:bg-[#679292] text-white shadow-md">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="fade-in animation-delay-200">
              <SectionHeader
                title="Contact Information"
                description="Reach out to us through any of the following channels."
              // ...removed className prop for type compatibility
              />

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const color = cardColors[index % cardColors.length];
                  return (
                    <Card key={index} className={`hover-lift ${color.bg} border-0 shadow-md`}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className={`w-12 h-12 ${color.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <info.icon className={`w-6 h-6 ${color.icon}`} />
                          </div>
                          <div>
                            <h3 className={`font-semibold mb-2 text-base md:text-lg ${color.title}`}>{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className={`text-xs sm:text-sm md:text-base ${color.detail}`}>
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      <section className="section-padding bg-gradient-to-r from-blue-100 via-white to-blue-50 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bg-video/winds.mp4"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 z-0 pointer-events-none" />
        <div className="container-width relative z-10">
          <SectionHeader
            subtitle="Key Contacts"
            title="Connect with Our Leadership Team"
            description="Direct access to our key personnel for specific inquiries and partnership discussions."
            centered
          // ...removed className prop for type compatibility
          />

          <div className="flex flex-col items-center justify-center gap-8">
            {keyContacts.map((contact, index) => {
              const color = contactColors[index % contactColors.length];
              return (
                <Card
                  key={index}
                  className="w-full max-w-xs min-w-[220px] overflow-hidden rounded-3xl shadow-xl bg-white"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center"
                  >
                    {/* Top Gradient with Avatar */}
                    <div className="relative bg-gradient-to-br from-pink-600 to-purple-500 h-40 w-full flex items-end justify-center rounded-b-[80px]">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-[-40px] w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden"
                      >
                        <div className="w-full h-full flex items-center justify-center bg-blue-100 text-2xl font-bold text-blue-900">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="pt-12 pb-6 px-4 text-center">
                      <motion.h3
                        className="font-semibold text-lg text-gray-900"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.3 }}
                      >
                        {contact.name}
                      </motion.h3>
                      <motion.p
                        className="text-gray-500 text-sm mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {contact.title}
                      </motion.p>

                      {/* Social Icons */}
                      <motion.div
                        className="flex justify-center gap-4 mb-4 text-gray-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>}
                        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                        {contact.facebook && <a href={contact.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>}
                      </motion.div>

                      {/* Contact Info */}
                      <motion.p
                        className="text-gray-700 text-sm mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        📞 {contact.phone}
                      </motion.p>
                      <motion.p
                        className="text-gray-700 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        ✉️ {contact.email}
                      </motion.p>
                    </div>
                  </motion.div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            title="Find Us"
            description="Visit our corporate office in Hyderabad, strategically located for easy access."
            centered
          // ...removed className prop for type compatibility
          />

          <div className="aspect-video bg-blue-100 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.550616326!2d78.34849731744!3d17.424278699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sKhajaguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaya Shankar Group Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
