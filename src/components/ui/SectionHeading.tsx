import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col ${alignment[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`text-[11px] tracking-[0.25em] uppercase mb-3 font-medium ${
            dark ? 'text-[#A8A49B]' : 'text-[#68755F]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-[1.15] ${
          dark ? 'text-[#F3F1EB]' : 'text-[#242624]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl font-light leading-relaxed ${
            dark ? 'text-[#D8D3C8]/80' : 'text-[#242624]/75'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
