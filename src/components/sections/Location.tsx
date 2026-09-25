'use client';

import React from 'react';
import { siteConfig } from '@/data/site';
import { MapPin, Clock, Car, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location.address)}`;

  return (
    <section id="ubicacion" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0D1117] text-[#F5F3EA] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FFE9A3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#162A38]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Tag */}
        <div className="flex flex-col gap-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 text-[#FFE9A3] text-xs font-semibold tracking-widest uppercase self-start"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / UBICACIÓN & ACCESO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-light text-white tracking-tight"
          >
            Encuéntranos en <span className="italic text-[#FFE9A3]">Pedro de Valdivia</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg font-light text-[#F5F3EA]/80 max-w-xl"
          >
            Acceso expedito, estacionamiento cómodo y la mejor ubicación en Concepción.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#161B22] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFE9A3]/10 text-[#FFE9A3]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                    DIRECCIÓN
                  </span>
                  <p className="text-base font-medium text-white">{siteConfig.location.address}</p>
                  <p className="text-xs text-[#F5F3EA]/60 font-light mt-0.5">Concepción, Región del Biobío</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-[#161B22] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFE9A3]/10 text-[#FFE9A3]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                    HORARIOS DE ATENCIÓN
                  </span>
                  <p className="text-sm font-medium text-white">{siteConfig.location.hours}</p>
                  <p className="text-xs text-[#F5F3EA]/60 font-light mt-0.5">Locales y servicios con horarios específicos</p>
                </div>
              </div>

              {/* Parking Card */}
              <div className="p-6 rounded-2xl bg-[#161B22] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFE9A3]/10 text-[#FFE9A3]">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                    ESTACIONAMIENTO & CARWASH
                  </span>
                  <p className="text-sm font-light text-[#F5F3EA]/90">{siteConfig.location.parking}</p>
                </div>
              </div>

              {/* Contact Phone & Email Card */}
              <div className="p-6 rounded-2xl bg-[#161B22] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFE9A3]/10 text-[#FFE9A3]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                    TELÉFONO & CORREO DE CONTACTO
                  </span>
                  <p className="text-sm font-medium text-white flex items-center gap-2">
                    <span>📞 {siteConfig.socials.phone}</span>
                  </p>
                  <p className="text-xs text-[#F5F3EA]/70 font-light mt-0.5">
                    ✉ {siteConfig.socials.contactEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#FFE9A3] text-[#080A0D] py-4 px-8 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-white transition-all shadow-xl cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir en Google Maps</span>
              <span>↗</span>
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 min-h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative bg-[#161B22]">
            <iframe
              title="Mapa de Espacio Río en Concepción (Vista Satelital)"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.543!2d-73.054!3d-36.835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5c32d43a5bd%3A0x123456789!2sAv.%20Pedro%20de%20Valdivia%201161%2C%20Concepci%C3%B3n!5e1!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl&t=k"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
            />

            {/* Map Overlay Capsule */}
            <div className="absolute top-4 left-4 bg-[#080A0D]/90 backdrop-blur-md border border-[#FFE9A3]/30 px-4 py-2 rounded-full text-xs text-[#FFE9A3] font-semibold tracking-wider flex items-center gap-2 shadow-lg z-10">
              <span className="w-2 h-2 rounded-full bg-[#FFE9A3] animate-pulse" />
              <span>CONCEPCIÓN · BIOBÍO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
