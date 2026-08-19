import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function Introduction() {
  return (
    <section id="espacio" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F5F3EA] text-[#080A0D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8">
            <FadeIn direction="up">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#0050A0] font-bold">
                  01 / EL PROYECTO
                </span>
                <span className="text-xs text-[#FFE9A3] bg-[#080A0D] px-1.5 py-0.5 rounded">✦</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#151719]/60 font-semibold">
                  CONCEPCIÓN
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#080A0D] leading-[1.08] mb-8">
                Más que un espacio.
                <br />
                <span className="italic font-normal text-[#0050A0]">Un estilo de vida urbano.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-[#080A0D]/85 font-light leading-relaxed mb-6">
                Espacio Río llega a Concepción para redefinir el encuentro urbano. Una propuesta arquitectónica contemporánea donde convergen la alta gastronomía, el deporte y escalada en <strong className="font-medium text-[#0050A0]">Boulder Studio</strong>, el entretenimiento y el comercio boutique en un mismo circuito peatonal.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-sm sm:text-base text-[#080A0D]/70 font-light leading-relaxed mb-8">
                Diseñado para recorrer sin prisa, hacer una pausa en sus terrazas abiertas y disfrutar de la luz natural sobre volúmenes horizontales de piedra, hormigón y grandes fachadas vidriadas.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-3 text-xs tracking-wider uppercase">
                <span className="bg-[#080A0D] text-[#F5F3EA] px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                  <span className="text-[#FFE9A3]">✦</span>
                  <span>GASTRONOMÍA & TRATTORIA</span>
                </span>
                <span className="bg-[#0050A0] text-[#FFFFFF] px-3.5 py-1.5 rounded-full font-medium">
                  BOULDER & PILATES
                </span>
                <span className="bg-[#FFFFFF] text-[#080A0D] border border-[#080A0D]/20 px-3.5 py-1.5 rounded-full font-medium">
                  DRIVE-THRU STARBUCKS (3° EN LA ZONA)
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Asymmetrical Architectural Image Block */}
          <div className="lg:col-span-6 relative pt-8 lg:pt-0">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/02.jpg"
                  alt="Espacio Río — Vista frontal de la fachada principal y tótem en Concepción"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </FadeIn>

            {/* Editorial Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#080A0D] text-[#F5F3EA] p-6 hidden sm:block max-w-xs shadow-xl border-l-4 border-[#FFE9A3]">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#FFE9A3] font-semibold block mb-1">
                ✦ FACHADA & ACCESO
              </span>
              <p className="text-xs font-light text-[#F5F3EA]/80">
                Arquitectura de dos niveles, terrazas abiertas y conexión fluida con la avenida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
