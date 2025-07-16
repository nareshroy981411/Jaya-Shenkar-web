import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companies = [
    { name: 'JayaShankar Multi Product Industrial Park & SEZ Pvt Ltd', href: '/business/industrial' },
    { name: 'JayaShankar Pulp & Paper Mills Pvt Ltd', href: '/business/paper' },
    { name: 'JayaShankar Power & Infrastructure Pvt Ltd', href: '/business/power' },
    { name: 'JayaShankar Chemicals & Packings Pvt Ltd', href: '/business/pulp/assam-agroforestry' }

  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Clients', href: '/clients' },
    { name: 'Investors', href: '/investors' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'News', href: '/news' },
    // { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#05133C] text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  {/* <span className="text-[gold] font-bold text-xl">JSG</span> */}
                  <img src="/JAYASHANKAR-GROUP.png" alt="Jaya Shankar Group Logo" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[gold]">JAYA SHANKAR<span className="text-[gold] ml-1"> GROUP</span></div>
                  <div className="text-xs opacity-80 text-[green] font-bold">For Planet & People</div>
                </div>
              </Link>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                A visionary conglomerate pioneering sustainable industrial growth across India 
                through Industrial Parks, Pulp & Paper Mills, and Power & Infrastructure development.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[white]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-[white]" />
                </a>
              </div>
            </div>

            {/* Companies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[white]">Our Companies</h3>
              <ul className="space-y-3">
                {companies.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[white]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[white]">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 opacity-80 text-[white]" />
                  <div className="text-sm opacity-80 leading-relaxed">
                    1209, Aparna Westside,<br />
                    Behind DPS School Road,<br />
                    Khajaguda, Hyderabad-500089
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 opacity-80 text-[white]" />
                  <div className="text-sm opacity-80">+91 9390849709</div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 opacity-80 text-[white]" />
                  <div className="text-sm opacity-80">info@jayashankargroup.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="container-width">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm opacity-80">
                © {currentYear} Jaya Shankar Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  to="/privacy"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
