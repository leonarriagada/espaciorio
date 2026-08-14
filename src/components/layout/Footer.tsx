import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-[#304638] text-[#F3F1EB] pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-[#F3F1EB]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F3F1EB]/15">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.15em] mb-4 text-[#F3F1EB]">
              ESPACIO
              <br />
              RÍO
            </h3>
            <p className="text-sm font-light text-[#D8D3C8]/80 max-w-sm leading-relaxed">
              {siteConfig.tagline}. Un destino boutique de lifestyle donde convergen arquitectura contemporánea, gastronomía y entorno natural.
            </p>
          </div>

          <div className="mt-8 text-xs tracking-widest uppercase text-[#A8A49B]">
            {siteConfig.location.address}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#68755F] font-semibold mb-2">
            NAVEGACIÓN
          </span>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light text-[#D8D3C8] hover:text-[#F3F1EB] transition-colors w-max"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Info Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#68755F] font-semibold mb-2">
              CONTACTO & REDES
            </span>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-light text-[#D8D3C8] hover:text-[#F3F1EB] transition-colors inline-flex items-center gap-2"
            >
              <span>INSTAGRAM</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href={`mailto:${siteConfig.socials.contactEmail}`}
              className="text-sm font-light text-[#D8D3C8] hover:text-[#F3F1EB] transition-colors"
            >
              {siteConfig.socials.contactEmail}
            </a>
          </div>

          <div className="mt-8 pt-4 border-t border-[#F3F1EB]/10 text-xs font-light text-[#D8D3C8]/60">
            {siteConfig.location.hours}
          </div>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#A8A49B] gap-4">
        <p>© {new Date().getFullYear()} ESPACIO RÍO. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="font-light tracking-widest text-[10px] uppercase">
          PREMIUM OUTDOOR LIFESTYLE DESTINATION
        </p>
      </div>
    </footer>
  );
}
