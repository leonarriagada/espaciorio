import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-40 bg-[#0050A0] text-[#F5F3EA] text-center px-6 sm:px-10 overflow-hidden">
      {/* Rich Background Image with Vibrant Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/09.jpg"
          alt="Espacio Río — Paseo central, gastronomía y terrazas en Concepción"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0050A0]/90 via-[#0050A0]/85 to-[#003875]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1.5">
              <span>✦</span>
              <span>CONCEPCIÓN · LIFESTYLE & ARCHITECTURE</span>
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-light tracking-wide text-[#FFE9A3] mb-8 leading-tight drop-shadow-md">
            ESPACIO RÍO
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg sm:text-2xl font-light text-[#F5F3EA] tracking-wide mb-12 max-w-xl">
            Ven a descubrir el nuevo punto de encuentro en Concepción.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <a
            href="#espacio"
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
