import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About Us', href: '/about' },
    {
      name: 'Companies',
      href: '#',
      children: [
        { 
          name: 'Jaya Shankar Multi Product Industrial Park & SEZ Pvt Ltd', 
          href: '/business/industrial',
        },
        { 
          name: 'Jaya Shankar Pulp & Paper Mills Pvt Ltd', 
          href: '/business/paper',
        },
        { name: 'Jaya Shankar Power & Infrastructure Pvt Ltd', href: '/business/power' },
      ],
    },
    { name: 'Projects', href: '/projects' },
    // { name: 'Clients', href: '/clients' },
    { name: 'Investors', href: '/investors' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white text-black shadow-lg backdrop-blur-md' : 'bg-transparent text-white'
  }`}
  // className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left side */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/JAYASHANKAR-GROUP.png" alt="Jaya Shankar Group Logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="text-xl font-bold text-primary">Jaya Shankar Group</div>
              <div className="text-xs text-[green] font-semibold">For Planet & People</div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border mt-2 py-2 z-50">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            <Link
                              to={child.href}
                              className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors border-b border-border/50"
                            >
                              {child.name}
                            </Link>
                            {child.children && (
                              <div className="ml-4">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.name}
                                    to={subChild.href}
                                    className="block px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                  >
                                    {subChild.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <nav className="py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="px-4 py-3 text-sm font-medium text-foreground border-b">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <div key={child.name}>
                          <Link
                            to={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-8 py-3 text-sm font-medium text-foreground hover:text-foreground hover:bg-muted transition-colors border-b border-border/30"
                          >
                            {child.name}
                          </Link>
                          {child.children && (
                            <div className="ml-4">
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.name}
                                  to={subChild.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block px-12 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                >
                                  {subChild.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-colors border-b ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/5'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
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
