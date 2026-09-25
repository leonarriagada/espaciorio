import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-[#F5F3EA] text-[#080A0D] pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t-4 border-[#080A0D] relative">
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-[#FFE9A3]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#080A0D]/15">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            {/* Official Brand Logo (Black Contrast Filter for Light Footer) */}
            <div className="mb-6">
              <div className="relative w-48 sm:w-60 h-11 sm:h-14">
                <Image
                  src="/LOGO.png"
                  alt="Espacio Río Logo"
                  fill
                  sizes="240px"
                  className="object-contain object-left brightness-0"
                />
              </div>
            </div>

            <p className="font-display text-xl sm:text-2xl text-[#080A0D] font-normal mb-3">
              Espacio Río, tu lugar de encuentro.
            </p>

            <p className="text-sm font-light text-[#080A0D]/80 max-w-sm leading-relaxed">
              Un destino boutique de lifestyle en Pedro de Valdivia donde convergen arquitectura contemporánea, gastronomía de autor, deporte, bienestar y servicios.
            </p>
          </div>

          <div className="mt-8 text-xs tracking-widest uppercase text-[#C48B5E] font-bold flex items-center gap-2">
            <span className="bg-[#080A0D] text-[#FFE9A3] px-2 py-1 rounded text-[10px]">📍 CONCEPCIÓN</span>
            <span>{siteConfig.location.address}</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#C48B5E] font-bold mb-2">
            NAVEGACIÓN
          </span>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#080A0D]/80 hover:text-[#080A0D] transition-colors w-max relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#080A0D] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Info Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#C48B5E] font-bold mb-1">
              CONTACTO & RESERVAS
            </span>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#080A0D] hover:text-[#C48B5E] transition-colors inline-flex items-center gap-2"
            >
              <span className="bg-[#FFE9A3] text-[#080A0D] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                ✦ INSTAGRAM
              </span>
              <span>@espaciorio.cl ↗</span>
            </a>

            <a
              href={siteConfig.socials.bookingPadel}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#080A0D] hover:text-[#C48B5E] transition-colors inline-flex items-center gap-2"
            >
              <span className="bg-[#080A0D] text-[#FFE9A3] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                🎾 RESERVA DE PÁDEL
              </span>
              <span>MatchPoint ↗</span>
            </a>

            <a
              href={`mailto:${siteConfig.socials.contactEmail}`}
              className="text-xs font-medium text-[#080A0D]/85 hover:text-[#C48B5E] transition-colors flex items-center gap-1.5 pt-1"
            >
              <span>✉</span>
              <span>{siteConfig.socials.contactEmail}</span>
            </a>

            <a
              href={`tel:+56995198669`}
              className="text-xs font-medium text-[#080A0D]/85 hover:text-[#C48B5E] transition-colors flex items-center gap-1.5"
            >
              <span>📞</span>
              <span>Tel. +569 9519 8669</span>
            </a>

            {/* Official Mobile App Download Links */}
            <div className="pt-3 border-t border-[#080A0D]/10 flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C48B5E] font-bold">
                📱 DESCARGA LA APP ESPACIO RIO
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.apps.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#080A0D] text-[#FFE9A3] px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wider uppercase hover:bg-[#C48B5E] hover:text-white transition-colors"
                >
                  <span>Google Play</span>
                  <span>↗</span>
                </a>
                <a
                  href={siteConfig.apps.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#080A0D] text-[#FFE9A3] px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wider uppercase hover:bg-[#C48B5E] hover:text-white transition-colors"
                >
                  <span>App Store</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#080A0D]/10 text-xs font-light text-[#080A0D]/65">
            {siteConfig.location.hours}
          </div>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#080A0D]/60 gap-4">
        <p>© {new Date().getFullYear()} ESPACIO RIO. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="font-bold tracking-widest text-[10px] uppercase text-[#C48B5E]">
          ESPACIO RIO, TU LUGAR DE ENCUENTRO · CONCEPCIÓN
        </p>
      </div>
    </footer>
  );
}
