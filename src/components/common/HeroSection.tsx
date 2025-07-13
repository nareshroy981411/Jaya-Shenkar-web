import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'default' | 'outline';
  }>;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'default' | 'outline';
  }>;
  theme?: 'default' | 'industrial' | 'paper' | 'power';
  autoSlide?: boolean;
  slideInterval?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides,
  title,
  subtitle,
  description,
  backgroundImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  buttons = [],
  theme = 'default',
  autoSlide = true,
  slideInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // If slides are provided, use carousel mode
  const isCarousel = slides && slides.length > 0;
  const totalSlides = isCarousel ? slides.length : 1;

  // Auto-slide functionality
  useEffect(() => {
    if (!isCarousel || !autoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [isCarousel, autoSlide, slideInterval, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'industrial':
        return 'industrial-theme';
      case 'paper':
        return 'paper-theme';
      case 'power':
        return 'power-theme';
      default:
        return '';
    }
  };

  // Get current slide data
  const currentSlideData = isCarousel ? slides[currentSlide] : {
    title,
    subtitle,
    description,
    backgroundImage,
    buttons,
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${getThemeClasses()}`}>
      {/* Background Images */}
      {isCarousel ? (
        slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/0" />
          </div>
        ))
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/0" />
        </div>
      )}

      {/* Navigation Arrows */}
      {isCarousel && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-width">
          <div className="max-w-4xl">
            <div className="fade-in">
              <h1 className="text-white mb-6 leading-tight">
                {currentSlideData.title}
              </h1>
            </div>
            
            <div className="fade-in animation-delay-200">
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </div>

            {currentSlideData.description && (
              <div className="fade-in animation-delay-400">
                <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl">
                  {currentSlideData.description}
                </p>
              </div>
            )}

            {currentSlideData.buttons && currentSlideData.buttons.length > 0 && (
              <div className="fade-in animation-delay-600">
                <div className="flex flex-col sm:flex-row gap-4">
                  {currentSlideData.buttons.map((button, index) => (
                    <Button
                      key={index}
                      asChild
                      size="lg"
                      variant={button.variant || 'default'}
                      className={`${
                        button.variant === 'outline'
                          ? 'border-white text-black hover:bg-white hover:text-primary'
                          : 'bg-white text-primary hover:bg-white/90'
                      } px-8 py-6 text-lg font-semibold`}
                    >
                      <a href={button.href} className="flex items-center space-x-2">
                        <span>{button.text}</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {isCarousel && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
