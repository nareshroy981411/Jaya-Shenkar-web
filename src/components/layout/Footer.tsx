import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companies = [
    { name: 'JayaShankar Multi Product Industrial Park & SEZ Pvt Ltd', href: '/business/industrial' },
    { name: 'JayaShankar Pulp & Paper Mills Pvt Ltd', href: '/business/paper' },
    { name: 'JayaShankar Power & Infrastructure Pvt Ltd', href: '/business/power' },
    { name: 'JayaShankar Chemicals & Packings Pvt Ltd', href: '/business/ChemicalsPackaging' }

  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
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
    <footer className="bg-[#05133C] text-primary-foreground text-xs sm:text-sm font-sans">
      {/* Main Footer */}
      <div className=" w-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/JAYASHANKAR-GROUP.png" alt="Jaya Shankar Group Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-xl font-bold text-[gold] leading-tight whitespace-wrap">JAYA SHANKAR GROUP</div>
                <div className="text-[10px] sm:text-xs opacity-80 text-[green] font-bold leading-tight truncate">For Planet & People</div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm opacity-80 mb-4 sm:mb-6 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-none">
              A visionary conglomerate pioneering sustainable industrial growth across India 
              through Industrial Parks, Pulp & Paper Mills, and Power & Infrastructure development.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[white]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[white]" />
              </a>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[white]">Our Companies</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companies.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[white]">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[white]">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 opacity-80 text-[white] flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-80 leading-relaxed">
                  1209, Aparna Westside,<br />
                  Behind DPS School Road,<br />
                  Khajaguda, Hyderabad-500089
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 text-[white] flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-80">+91 9390849709</div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 text-[white] flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-80">info@jayashankargroup.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 gap-2 md:gap-0">
            <div className="text-xs sm:text-sm opacity-80 text-center md:text-left">
              © {currentYear} Jaya Shankar Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link
                to="/privacy"
                className="text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
