import React from 'react';
import Image from 'next/image';
import { experiencesData } from '@/data/tenants';
import FadeIn from '../motion/FadeIn';

export default function Experiences() {
  return (
    <section id="experiencias" className="py-28 sm:py-40 bg-[#242624] text-[#F3F1EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col max-w-2xl mb-20">
          <FadeIn direction="up">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A49B] font-medium mb-3 block">
              03 / EXPERIENCIAS
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#F3F1EB] tracking-wide leading-tight">
              Momentos diseñados para habitar el espacio.
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
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
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
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#68755F] mb-2 block uppercase">
                      EXPERIENCIA 0{index + 1}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-light text-[#F3F1EB] mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-sm tracking-wide text-[#D8D3C8] font-medium mb-4 italic">
                      {exp.subtitle}
                    </p>
                    <p className="text-sm sm:text-base font-light text-[#A8A49B] leading-relaxed">
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
