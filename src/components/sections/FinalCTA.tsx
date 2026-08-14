import React from 'react';
import FadeIn from '../motion/FadeIn';

export default function FinalCTA() {
  return (
    <section className="py-28 sm:py-40 bg-[#304638] text-[#F3F1EB] text-center px-6 sm:px-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn direction="up">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#A8A49B] font-medium mb-6 block">
            DESTINO LIFESTYLE & ARQUITECTURA
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light tracking-wide text-[#F3F1EB] mb-8 leading-tight">
            ESPACIO RÍO
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg sm:text-2xl font-light text-[#D8D3C8]/90 tracking-wide mb-12 max-w-xl">
            Ven a descubrirlo.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <a
            href="#espacio"
            className="inline-flex items-center justify-center gap-4 bg-[#F3F1EB] text-[#242624] px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#D8D3C8] transition-colors shadow-lg"
          >
            <span>RECORRER EL ESPACIO</span>
            <span>→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
