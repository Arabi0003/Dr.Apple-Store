import React from 'react';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
  gradient?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
  gradient = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const titleColorClass = light 
    ? 'text-white' 
    : gradient 
      ? 'bg-gradient-to-r from-zinc-900 via-[#FF5A00] to-zinc-900 dark:from-white dark:via-[#FF5A00] dark:to-white bg-clip-text text-transparent'
      : 'text-zinc-900 dark:text-white';

  const subtitleColorClass = light ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400';

  return (
    <div className={`max-w-3xl mb-10 ${alignmentClasses[align]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight font-calibri mb-3 ${titleColorClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg font-calibri leading-relaxed ${subtitleColorClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
