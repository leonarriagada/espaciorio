import React from 'react';
import Image from 'next/image';
import FadeIn from '../motion/FadeIn';

export default function SpaceSection() {
  const concepts = [
    { title: 'ARQUITECTURA', desc: 'Volúmenes horizontales contemporáneos' },
    { title: 'NATURALEZA', desc: 'Grandes coníferas y césped perimetral' },
    { title: 'PAISAJE', desc: 'Cielo amplio y presencia de la cordillera' },
    { title: 'ENCUENTRO', desc: 'Paseos peatonales y terrazas abiertas' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#D8D3C8]/40 border-y border-[#242624]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <FadeIn direction="up">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#68755F] font-semibold mb-3 block">
              02 / EL ESPACIO FÍSICO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#242624] tracking-wide">
              Diseño integral en armonía con el paisaje.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-sm sm:text-base text-[#242624]/70 font-light max-w-md leading-relaxed">
              Un máster plan pensado para el bienestar peatonal, donde la luz solar del atardecer tiñe las fachadas y los espacios al aire libre.
            </p>
          </FadeIn>
        </div>

        {/* Panoramic Imagery Container */}
        <FadeIn direction="up" delay={0.2} className="w-full mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/03.jpg"
              alt="Vista panorámica de la arquitectura de Espacio Río"
              fill
              sizes="100vw"
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </FadeIn>

        {/* Concept Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#242624]/15 pt-12">
          {concepts.map((concept, index) => (
            <FadeIn key={concept.title} direction="up" delay={0.1 * index}>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#304638]">
                  0{index + 1} / {concept.title}
                </span>
                <p className="text-xs sm:text-sm text-[#242624]/75 font-light leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
