
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const StickyContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Link to="/contact" className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Get in Touch</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyContactButton;
