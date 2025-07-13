
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  theme?: 'default' | 'industrial' | 'paper' | 'power';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = false,
  theme = 'default',
}) => {
  const getThemeColor = () => {
    switch (theme) {
      case 'industrial':
        return 'text-[hsl(var(--industrial-primary))]';
      case 'paper':
        return 'text-[hsl(var(--paper-primary))]';
      case 'power':
        return 'text-[hsl(var(--power-primary))]';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16`}>
      {subtitle && (
        <div className="fade-in">
          <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${getThemeColor()}`}>
            {subtitle}
          </p>
        </div>
      )}
      
      <div className="fade-in animation-delay-200">
        <h2 className="text-foreground mb-6">
          {title}
        </h2>
      </div>

      {description && (
        <div className="fade-in animation-delay-400">
          <p className={`text-lg text-muted-foreground leading-relaxed ${
            centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'
          }`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
