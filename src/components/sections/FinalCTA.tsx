import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-40 bg-[#080A0D] text-[#F5F3EA] text-center px-6 sm:px-10 overflow-hidden border-t border-white/10">
      {/* Rich Background Image with Vibrant Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/09.jpg"
          alt="Espacio Río — Paseo central, gastronomía y terrazas en Concepción"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D]/95 via-[#080A0D]/90 to-[#151719]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1.5">
              <span>✦</span>
              <span>CONCEPCIÓN · ESPACIO RÍO</span>
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="relative w-72 sm:w-[420px] h-20 sm:h-28 mb-4 my-2 drop-shadow-2xl">
            <Image
              src="/LOGO.png"
              alt="Espacio Río Logo"
              fill
              sizes="(max-width: 640px) 288px, 420px"
              className="object-contain object-center"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h2 className="font-display text-3xl sm:text-5xl text-[#FFE9A3] font-normal tracking-wide mb-3">
            Espacio Río, tu lugar de encuentro.
          </h2>
          <p className="text-base sm:text-xl font-light text-[#F5F3EA]/90 tracking-wide mb-10 max-w-xl">
            Ven a vivir una experiencia única de gastronomía, deporte, bienestar y marcas boutique en Pedro de Valdivia.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <a
            href="#locales"
            className="inline-flex items-center justify-center gap-3 bg-[#FFE9A3] text-[#080A0D] px-10 py-5 min-h-[48px] text-xs tracking-[0.25em] uppercase font-extrabold hover:bg-[#F5F3EA] transition-all duration-300 shadow-2xl rounded-full transform hover:scale-105"
          >
            <span>RECORRER EL ESPACIO</span>
            <span>✦</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
