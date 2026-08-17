import React from 'react';
import Image from 'next/image';
import { experiencesData } from '@/data/tenants';
import FadeIn from '../motion/FadeIn';

export default function Experiences() {
  return (
    <section id="experiencias" className="py-28 sm:py-40 bg-[#080A0D] text-[#F5F3EA] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col max-w-3xl mb-24">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#FFE9A3] font-semibold">
                03 / EXPERIENCIAS & LIFESTYLE
              </span>
              <span className="text-xs text-[#FFE9A3]">✦</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#F5F3EA] tracking-wide leading-tight">
              Gastronomía, deporte y encuentros en un mismo lugar.
            </h2>
          </FadeIn>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {experiencesData.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Block */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl border border-white/10 group bg-[#151719]">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Text Block */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <FadeIn direction="up" delay={0.2}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#151719] text-[#FFE9A3] text-[10px] tracking-[0.2em] font-semibold uppercase px-3 py-1 rounded-full border border-[#FFE9A3]/30">
                        ✦ 0{index + 1}
                      </span>
                      <span className="text-xs font-semibold tracking-[0.25em] text-[#FFE9A3] uppercase">
                        {exp.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-light text-[#F5F3EA] mb-4">
                      {exp.title}
                    </h3>

                    <p className="text-sm sm:text-base font-light text-[#F5F3EA]/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
