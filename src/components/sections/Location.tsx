import React from 'react';
import { siteConfig } from '@/data/site';
import FadeIn from '../motion/FadeIn';

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#D8D3C8]/30 border-t border-[#242624]/10 text-[#242624]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <FadeIn direction="up">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#68755F] font-semibold mb-3 block">
                  07 / UBICACIÓN & ACCESO
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-light text-[#242624] tracking-wide mb-4">
                  Encuéntranos.
                </h2>
                <p className="text-lg font-light text-[#68755F] italic mb-8">
                  Tu próximo destino está más cerca.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.1} className="space-y-6 text-sm font-light text-[#242624]/85">
                <div className="border-b border-[#242624]/10 pb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#A8A49B] block mb-1">
                    DIRECCIÓN
                  </span>
                  <p className="text-base font-normal">{siteConfig.location.address}</p>
                </div>

                <div className="border-b border-[#242624]/10 pb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#A8A49B] block mb-1">
                    HORARIOS GENERALES
                  </span>
                  <p>{siteConfig.location.hours}</p>
                </div>

                <div className="border-b border-[#242624]/10 pb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#A8A49B] block mb-1">
                    ESTACIONAMIENTO
                  </span>
                  <p>{siteConfig.location.parking}</p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#A8A49B] block mb-1">
                    ACCESO DIRECTO
                  </span>
                  <p>{siteConfig.location.driveThru}</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.2} className="pt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#242624] text-[#F3F1EB] px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#304638] transition-colors w-full sm:w-auto"
              >
                <span>CÓMO LLEGAR EN MAPS</span>
                <span>↗</span>
              </a>
            </FadeIn>
          </div>

          {/* Architectural Map Representation Block */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2} className="h-full min-h-[380px]">
              <div className="relative w-full h-full min-h-[380px] bg-[#242624] p-8 sm:p-12 text-[#F3F1EB] flex flex-col justify-between border border-[#242624]/10 shadow-inner">
                {/* Simulated Map / Spatial Grid Lines */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#F3F1EB_1px,transparent_1px),linear-gradient(to_bottom,#F3F1EB_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-display text-2xl font-light tracking-widest text-[#D8D3C8]">
                    ESPACIO RÍO
                  </span>
                  <span className="text-[10px] tracking-widest uppercase bg-[#304638] px-3 py-1 text-[#F3F1EB]">
                    COORDINADAS CORDILLERA
                  </span>
                </div>

                <div className="relative z-10 my-auto py-12">
                  <div className="inline-block p-4 border border-[#68755F] bg-[#304638]/60 backdrop-blur-sm max-w-sm">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#A8A49B] block mb-1">
                      PUNTO DE REFERENCIA
                    </span>
                    <p className="text-xs font-light text-[#F3F1EB]">
                      Conexión expedita con avenidas principales, acceso directo a estacionamientos y zona Drive-Thru Starbucks.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-center text-xs text-[#A8A49B] border-t border-white/10 pt-4">
                  <span>LAT -33.40 / LON -70.55</span>
                  <span>ACCESO ABIERTO</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
