import React from 'react';
import Link from 'next/link';

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  external?: boolean;
}

export default function ArrowLink({
  href,
  children,
  dark = false,
  className = '',
  external = false,
}: ArrowLinkProps) {
  const baseStyles = `group inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
    dark
      ? 'text-[#F3F1EB] hover:text-[#D8D3C8]'
      : 'text-[#242624] hover:text-[#68755F]'
  } ${className}`;

  const content = (
    <>
      <span className="relative">
        {children}
        <span
          className={`absolute bottom-[-2px] left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
            dark ? 'bg-[#D8D3C8]' : 'bg-[#68755F]'
          }`}
        />
      </span>
      <svg
        className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="square" strokeLinejoin="miter" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseStyles}>
      {content}
    </Link>
  );
}
