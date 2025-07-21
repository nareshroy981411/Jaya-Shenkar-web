import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  slides?: HeroSlide[];
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  backgroundVideo: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'default' | 'outline';
  }>;
  badgeBg?: string;
  badgeText?: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundVideo?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'default' | 'outline';
  }>;
  theme?: 'default' | 'industrial' | 'paper' | 'power';
  autoSlide?: boolean;
  slideInterval?: number;
  badge?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides,
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  // backgroundImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
    backgroundVideo,
    buttons,
    badgeBg: 'bg-blue-500',
    badgeText: 'text-white',
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${getThemeClasses()}`} aria-label={currentSlideData.title || 'Hero section'}>
      {/* Background Video (priority over image) */}
      {isCarousel ? (
        slides.map((slide, index) => (
          <React.Fragment key={index}>
            {slide.backgroundVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} z-0`}
                src={slide.backgroundVideo}
              />
            ) : (
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} z-0`}
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/0" />
              </div>
            )}
          </React.Fragment>
        ))
      ) : (
        currentSlideData.backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={currentSlideData.backgroundVideo}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/0" />
          </div>
        )
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

      {/* Content - Vertically Centered, shifted even further down */}
      <div className="absolute z-10 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-[-20%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-3xl">
          {/* Badge (subtitle) */}
          {currentSlideData.subtitle && (
            <span
              className={`mb-6 px-6 py-2 rounded-full font-semibold text-lg shadow-lg ${currentSlideData.badgeBg || 'bg-blue-500'} ${currentSlideData.badgeText || 'text-white'}`}
              style={{ letterSpacing: 1, fontFamily: 'articulatecf, sans-serif' }}
            >
              {currentSlideData.subtitle}
            </span>
          )}
          {/* Title */}
          {currentSlideData.title && (
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-6 leading-tight drop-shadow-lg" tabIndex={0} style={{ fontFamily: 'articulatecf, sans-serif' }}>
              {currentSlideData.title}
            </h1>
          )}
          {/* Description */}
          {currentSlideData.description && (
            <div className="fade-in animation-delay-400">
              <p className="text-lg text-white/90 mb-12 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
                {currentSlideData.description}
              </p>
            </div>
          )}
          {/* Buttons */}
          {currentSlideData.buttons && currentSlideData.buttons.length > 0 && (
            <div className="fade-in animation-delay-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {currentSlideData.buttons.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    variant={button.variant || 'default'}
                    className={`${button.variant === 'outline'
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

      {/* Slide Indicators and Scroll Indicator removed as per request */}
    </section>
  );
};

export default HeroSection;
