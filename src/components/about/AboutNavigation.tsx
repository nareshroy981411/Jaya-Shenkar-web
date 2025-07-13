
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Overview', href: '/about' },
    { name: 'Our Story', href: '/about/our-story' },
    { name: 'Vision & Mission', href: '/about/vision-mission' },
    { name: 'Founders & Leadership', href: '/about/founders-leadership' },
    { name: 'Our Team', href: '/about/our-team' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="bg-muted/30 border-b">
      <div className="container-width">
        <nav className="flex flex-wrap gap-2 py-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={isActive(item.href) ? 'default' : 'ghost'}
              size="sm"
            >
              <Link to={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AboutNavigation;
