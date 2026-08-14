import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function Introduction() {
  return (
    <section id="espacio" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F3F1EB] text-[#242624]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8">
            <FadeIn direction="up">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#68755F] font-semibold mb-4 block">
                01 / EL LUGAR
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#242624] leading-[1.1] mb-8">
                Más que un destino.
                <br />
                <span className="italic font-normal text-[#68755F]">Un lugar para encontrarse.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-[#242624]/80 font-light leading-relaxed mb-6">
                Espacio Río nace del encuentro entre la arquitectura de volúmenes limpios y la escala imponente de la cordillera. Un trazado concebido para caminar sin prisa, hacer una pausa y disfrutar de la luz de tarde sobre la piedra y la madera.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-sm sm:text-base text-[#242624]/65 font-light leading-relaxed">
                Cada metros cuadrado ha sido planificado para integrar la vegetación nativa con espacios gastronómicos de primer nivel, creando una atmósfera serena y sofisticada.
              </p>
            </FadeIn>
          </div>

          {/* Asymmetrical Architectural Image Block */}
          <div className="lg:col-span-6 relative pt-8 lg:pt-0">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/02.jpg"
                  alt="Espacio Río — Detalle de arquitectura y luz natural"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </FadeIn>

            {/* Subtle architectural text detail badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#304638] text-[#F3F1EB] p-6 hidden sm:block max-w-xs shadow-lg">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#A8A49B] block mb-1">
                ARQUITECTURA
              </span>
              <p className="text-xs font-light text-[#D8D3C8]">
                Baja altura, fachadas continuas de vidrio y materiales nobles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
