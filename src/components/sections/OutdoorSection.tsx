import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function OutdoorSection() {
  return (
    <section className="relative w-full py-32 sm:py-48 overflow-hidden bg-[#0050A0] text-[#F5F3EA]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/08.jpg"
          alt="Espacio Río — Entorno natural de coníferas y aire libre en Concepción"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0050A0] via-[#0050A0]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8FF00] font-bold">
                05 / AL AIRE LIBRE
              </span>
              <span className="text-xs text-[#B8FF00]">✦</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl font-light tracking-wide text-[#F5F3EA] leading-tight mb-6">
              Un lugar pensado para quedarse.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#F5F3EA]/90 font-light leading-relaxed mb-8">
              Paseos peatonales de piedra, arbolado de gran porte y terrazas al aire libre concebidas para alargar las tardes y disfrutar la transición de la luz hacia el anochecer en Concepción.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-8 text-xs font-mono tracking-widest text-[#F5F3EA]/80 pt-6 border-t border-white/20">
              <div>
                <span className="text-[#B8FF00] block text-base font-display">100%</span>
                <span>PEATONAL</span>
              </div>
              <div>
                <span className="text-[#B8FF00] block text-base font-display">NATURAL</span>
                <span>PAISAJISMO NATIVO</span>
              </div>
              <div>
                <span className="text-[#B8FF00] block text-base font-display">AMPLITUD</span>
                <span>VISTA CORDILLERA</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
