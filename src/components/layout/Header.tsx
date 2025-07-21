import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const navigation = [
    { name: 'ABOUT US', href: '/about' },
    {
      name: 'COMPANIES',
      href: '#',
      children: [
        {
          name: 'JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED',
          href: '/business/industrial',
        },
        {
          name: 'JAYASHANKAR PULP & PAPER MILLS PRIVATE LIMITED',
          href: '/business/paper',
        },
        { name: 'JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED', href: '/business/power' },
        { name: 'JAYASHANKAR CHEMICALS & PACKAGINGS ASSAM PRIVATE LIMITED', href: '/business/ChemicalsPackaging' }
      ],
    },
    { name: 'PROJECTS', href: '/projects' },
    // { name: 'Clients', href: '/clients' },
    { name: 'INVESTORS', href: '/investors' },
    { name: 'SUSTAINABILITY', href: '/sustainability' },
    { name: 'NEWS', href: '/news' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className="bg-[#05133C] shadow-lg fixed top-0 z-50 left-0 right-0"
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 sm:h-20 px-2 md:px-4 lg:px-8">
          {/* Logo - Left side */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src="/JAYASHANKAR-GROUP.png" alt="Jaya Shankar Group Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-xl font-bold text-[gold] leading-tight whitespace-nowrap" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>JAYA SHANKAR GROUP</div>
              <div className="text-[10px] sm:text-xs text-[green] font-semibold leading-tight truncate">For Planet & People</div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6 2xl:space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className={`flex items-center space-x-1 px-2 xl:px-3 py-2 text-xs xl:text-sm font-bold transition-colors ${isScrolled ? 'text-white hover:text-white' : 'text-white hover:text-white/80'
                        }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onKeyDown={e => {
                        if (e.key === 'Escape') setActiveDropdown(null);
                      }}
                    >
                      <span className="truncate max-w-[120px] xl:max-w-[200px]">{item.name}</span>
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                    </button>
                    {/* {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-[420px] xl:w-[640px] bg-white rounded-lg shadow-xl border mt-2 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-3 xl:px-4 py-2 xl:py-3 text-xs xl:text-sm font-semibold text-foreground hover:bg-muted transition-colors border-b border-border/50 truncate"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )} */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-[700px] bg-white rounded-lg shadow-xl border mt-2 py-4 z-50 animate-slide-down">
                        <div className="grid grid-cols-2 gap-4 px-4">
                          {/* Left Side - Image & Text */}
                          <div className="flex flex-col space-y-2 pr-4 border-r border-gray-200">
                            <img
                              src="/images/techSpec.jpg"
                              alt="Group Image"
                              className="w-full h-32 object-cover rounded"
                            />
                            <div className="text-lg font-bold text-gray-800">COMPANIES</div>
                            <p className="text-sm text-gray-600">
                              Driving industrial growth through infrastructure, manufacturing, energy, and packaging.
                            </p>
                          </div>

                          {/* Right Side - Links */}
                          <div className="flex flex-col justify-center space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b last:border-b-0 transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-bold transition-colors ${isActive(item.href)
                      ? 'text-white'
                      : isScrolled
                        ? 'text-white hover:text-white/80'
                        : 'text-white hover:text-white/80'
                      }`}
                  >
                    <span className="truncate max-w-[120px] xl:max-w-[200px]">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-slide-down">
            <nav>
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="px-4 text-xs sm:text-sm font-bold text-foreground border-b">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <div key={child.name}>
                          <Link
                            to={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-6 sm:px-8 text-xs sm:text-sm font-medium text-foreground hover:text-foreground hover:bg-muted transition-colors border-b border-border/30 truncate"
                          >
                            {child.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 text-xs sm:text-sm font-bold transition-colors border-b ${isActive(item.href)
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:text-primary hover:bg-muted'
                        } truncate`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
